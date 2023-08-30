import {AfterViewInit, Component} from '@angular/core';
import * as d3 from 'd3';
import {json} from "../../../assets/miserables";

@Component({
  selector: 'app-ddd-visual-graph',
  templateUrl: './ddd-visual-graph.component.html',
  styleUrls: ['./ddd-visual-graph.component.scss']
})
export class DddVisualGraphComponent implements AfterViewInit{
  chart: any = null;
  constructor() {
  }

  ngAfterViewInit() {
    try{document.getElementById('svgg')?.removeChild(this.chart)}catch(e){}
    this.chart = chart();
    document.getElementById('svgg')?.appendChild(this.chart);
  }

  change(e: any) {
    order = e.target.value;
    this.ngAfterViewInit();
  }
}

function orders() {
  const {links, nodes} = json;
  const degree = d3.rollup(
    // @ts-ignore
    links.flatMap(({ source, target, value }) => [
      { node: source, value },
      { node: target, value }
    ]),
    // @ts-ignore
    (v) => d3.sum(v, ({ value }) => value),
    // @ts-ignore
    ({ node }) => node
  );
  return new Map([
    // @ts-ignore
    ["by name", d3.sort(nodes.map((d) => d.id))],
    // @ts-ignore
    ["by group", d3.sort(nodes, ({group}) => group, ({id}) => id).map(({id}) => id)],
//    ["input", nodes.map(({id}) => id)],
    // @ts-ignore
    ["by degree", d3.sort(nodes, ({id}) => degree.get(id), ({id}) => id).map(({id}) => id).reverse()]
  ]);
}
var order = "by name";
function chart() {
  const {links, nodes} = json;
  // Specify the chart’s dimensions.
  const width = 640;
  const step = 14;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 20;
  const marginLeft = 130;
  const height = (nodes.length - 1) * step + marginTop + marginBottom;
  // @ts-ignore
  const y = d3.scalePoint(orders().get(order), [marginTop, height - marginBottom]);

  // A color scale for the nodes and links.
  const color = d3.scaleOrdinal()
    // @ts-ignore
    .domain(nodes.map(d => d.group).sort(d3.ascending))
    // .range(['red', 'blue', 'pink', 'purple', 'black', 'yellow', 'green', 'cyan', 'gray', 'orange'])
    .range(d3.schemePaired)
    .unknown("#aaa");

  // A function of a link, that checks that source and target have the same group and returns
  // the group; otherwise null. Used to color the links.
  // @ts-ignore
  const groups = new Map(nodes.map(d => [d.id, d.group]));
  // @ts-ignore
  function samegroup({ source, target }) {
  //return groups.get(source) === groups.get(target) ? groups.get(source) : null;
  return groups.get(target);
}

// Create the SVG container.
const svg = d3.create("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])
  .attr("style", "max-width: 100%; height: auto;");

// The current position, indexed by id. Will be interpolated.
  // @ts-ignore
const Y = new Map(nodes.map(({id}) => [id, y(id)]));

// Add an arc for each link.
  // @ts-ignore
function arc(d) {
  const y1 = Y.get(d.source);
  const y2 = Y.get(d.target);
  // @ts-ignore
  const r = Math.abs(y2 - y1) / 2;
  // @ts-ignore
  return `M${marginLeft},${y1}A${r},${r} 0,0,${y1 < y2 ? 1 : 0} ${marginLeft},${y2}`;
}
const path = svg.insert("g", "*")
  .attr("fill", "none")
  .attr("stroke-opacity", 0.6)
  .attr("stroke-width", 1.5)
  .selectAll("path")
  .data(links)
  .join("path")
  // @ts-ignore
  .attr("stroke", d => color(samegroup(d)))
  .attr("d", arc);

// Add a text label and a dot for each node.
const label = svg.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 10)
  .attr("text-anchor", "end")
  .selectAll("g")
  .data(nodes)
  .join("g")
  // @ts-ignore
  .attr("transform", d => `translate(${marginLeft},${Y.get(d.id)})`)
  .call(g => g.append("text")
    .attr("x", -6)
    .attr("dy", "0.35em")
    // @ts-ignore
    .attr("fill", d => d3.lab(color(d.group)).darker(2))
    // @ts-ignore
    .text(d => d.id))
  .call(g => g.append("circle")
    .attr("r", 3)
    // @ts-ignore
    .attr("fill", d => color(d.group)));

// Add invisible rects that update the class of the elements on mouseover.
label.append("rect")
  .attr("fill", "none")
  .attr("width", marginLeft + 40)
  .attr("height", step)
  .attr("x", -marginLeft)
  .attr("y", -step / 2)
  .attr("fill", "none")
  .attr("pointer-events", "all")
  .on("pointerenter", (event, d) => {
    svg.classed("hover", true);
    label.classed("primary", n => n === d);
    // @ts-ignore
    label.classed("secondary", n => links.some(({source, target}) => (
      // @ts-ignore
      n.id === source && d.id == target || n.id === target && d.id === source
    )));
    // @ts-ignore
    path.classed("primary", l => l.source === d.id || l.target === d.id).filter(".primary").raise();
  })
  .on("pointerout", () => {
    svg.classed("hover", false);
    label.classed("primary", false);
    label.classed("secondary", false);
    path.classed("primary", false).order();
  });

// Add styles for the hover interaction.
svg.append("style").text(`
    .hover text { fill: #aaa; }
    .hover g.primary text { font-weight: bold; fill: #333; }
    .hover g.secondary text { fill: #333; }
    .hover path { stroke: #ccc; }
    .hover path.primary { stroke: #333; }
  `);

// A function that updates the positions of the labels and recomputes the arcs
// when passed a new order.
// @ts-ignore
function update(order) {
  y.domain(order);

  const t = svg.transition()
    .duration(750);

  label
    // @ts-ignore
    .sort((a, b) => d3.ascending(Y.get(a.id), Y.get(b.id)))
    // @ts-ignore
    .transition(t)
    .delay((d, i) => i * 20) // Make the movement start from the top.
    .attrTween("transform", d => {
// @ts-ignore
      const i = d3.interpolateNumber(Y.get(d.id), y(d.id));
// @ts-ignore
      return t => `translate(${marginLeft},${Y.set(d.id, i(t)).get(d.id)})`;
    });

// @ts-ignore
  path.transition(t)
    // @ts-ignore
    .duration(750 + nodes.length * 20) // Cover the maximum delay of the label transition.
    .attrTween("d", d => () => arc(d));
}

// @ts-ignore
  return Object.assign(svg.node(), {update})
}

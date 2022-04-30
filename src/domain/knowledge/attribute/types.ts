import { type } from './assets';

/**
 * Attribute types available for edges.
 */
export type EdgeAttributeKey =
  | 'URL'
  | 'arrowhead'
  | 'arrowsize'
  | 'arrowtail'
  | 'color'
  | 'colorscheme'
  | 'comment'
  | 'constraint'
  | 'decorate'
  | 'dir'
  | 'edgeURL'
  | 'edgehref'
  | 'edgetarget'
  | 'edgetooltip'
  | 'fillcolor'
  | 'fontcolor'
  | 'fontname'
  | 'fontsize'
  | 'headURL'
  | 'head_lp'
  | 'headclip'
  | 'headhref'
  | 'headlabel'
  | 'headport'
  | 'headtarget'
  | 'headtooltip'
  | 'href'
  | 'id'
  | 'label'
  | 'labelURL'
  | 'labelangle'
  | 'labeldistance'
  | 'labelfloat'
  | 'labelfontcolor'
  | 'labelfontname'
  | 'labelfontsize'
  | 'labelhref'
  | 'labeltarget'
  | 'labeltooltip'
  | 'layer'
  | 'len'
  | 'lhead'
  | 'lp'
  | 'ltail'
  | 'minlen'
  | 'nojustify'
  | 'penwidth'
  | 'pos'
  | 'samehead'
  | 'sametail'
  | 'showboxes'
  | 'style'
  | 'tailURL'
  | 'tail_lp'
  | 'tailclip'
  | 'tailhref'
  | 'taillabel'
  | 'tailport'
  | 'tailtarget'
  | 'tailtooltip'
  | 'target'
  | 'tooltip'
  | 'weight'
  | 'xlabel'
  | 'xlp'
  | '_class';

/**
 * Attribute types available for nodes.
 */
export type NodeAttributeKey =
  | 'URL'
  | 'area'
  | 'color'
  | 'colorscheme'
  | 'comment'
  | 'distortion'
  | 'fillcolor'
  | 'fixedsize'
  | 'fontcolor'
  | 'fontname'
  | 'fontsize'
  | 'gradientangle'
  | 'group'
  | 'height'
  | 'href'
  | 'id'
  | 'image'
  | 'imagepos'
  | 'imagescale'
  | 'label'
  | 'labelloc'
  | 'layer'
  | 'margin'
  | 'nojustify'
  | 'ordering'
  | 'orientation'
  | 'penwidth'
  | 'peripheries'
  | 'pin'
  | 'pos'
  | 'rects'
  | 'regular'
  | 'root'
  | 'samplepoints'
  | 'shape'
  | 'shapefile'
  | 'showboxes'
  | 'sides'
  | 'skew'
  | 'sortv'
  | 'style'
  | 'target'
  | 'tooltip'
  | 'vertices'
  | 'width'
  | 'xlabel'
  | 'xlp'
  | 'z'
  | '_class';

/**
 * Attribute types available for root cluster.
 */
export type RootClusterAttributeKey =
  | 'Damping'
  | 'K'
  | 'URL'
  | '_background'
  | 'bb'
  | 'bgcolor'
  | 'center'
  | 'charset'
  | 'clusterrank'
  | 'colorscheme'
  | 'comment'
  | 'compound'
  | 'concentrate'
  | 'defaultdist'
  | 'dim'
  | 'dimen'
  | 'diredgeconstraints'
  | 'dpi'
  | 'epsilon'
  | 'esep'
  | 'fontcolor'
  | 'fontname'
  | 'fontnames'
  | 'fontpath'
  | 'fontsize'
  | 'forcelabels'
  | 'gradientangle'
  | 'href'
  | 'id'
  | 'imagepath'
  | 'inputscale'
  | 'label'
  | 'label_scheme'
  | 'labeljust'
  | 'labelloc'
  | 'landscape'
  | 'layerlistsep'
  | 'layers'
  | 'layerselect'
  | 'layersep'
  | 'layout'
  | 'levels'
  | 'levelsgap'
  | 'lheight'
  | 'lp'
  | 'lwidth'
  | 'margin'
  | 'maxiter'
  | 'mclimit'
  | 'mindist'
  | 'mode'
  | 'model'
  | 'mosek'
  | 'newrank'
  | 'nodesep'
  | 'nojustify'
  | 'normalize'
  | 'notranslate'
  | 'nslimit'
  | 'nslimit1'
  | 'ordering'
  | 'orientation'
  | 'outputorder'
  | 'overlap'
  | 'overlap_scaling'
  | 'overlap_shrink'
  | 'pack'
  | 'packmode'
  | 'pad'
  | 'page'
  | 'pagedir'
  | 'quadtree'
  | 'quantum'
  | 'rankdir'
  | 'ranksep'
  | 'ratio'
  | 'remincross'
  | 'repulsiveforce'
  | 'resolution'
  | 'root'
  | 'rotate'
  | 'rotation'
  | 'scale'
  | 'searchsize'
  | 'sep'
  | 'showboxes'
  | 'size'
  | 'smoothing'
  | 'sortv'
  | 'splines'
  | 'start'
  | 'style'
  | 'stylesheet'
  | 'target'
  | 'truecolor'
  | 'viewport'
  | 'voro_margin'
  | 'xdotversion'
  | '_class';

/**
 * Attribute types available for subgraph.
 */
export type SubgraphAttributeKey = 'rank';

/**
 * Attribute types available for cluster subgraph.
 */
export type ClusterSubgraphAttributeKey =
  | 'K'
  | 'URL'
  | 'area'
  | 'bgcolor'
  | 'color'
  | 'colorscheme'
  | 'fillcolor'
  | 'fontcolor'
  | 'fontname'
  | 'fontsize'
  | 'gradientangle'
  | 'href'
  | 'id'
  | 'label'
  | 'labeljust'
  | 'labelloc'
  | 'layer'
  | 'lheight'
  | 'lp'
  | 'lwidth'
  | 'margin'
  | 'nojustify'
  | 'pencolor'
  | 'penwidth'
  | 'peripheries'
  | 'sortv'
  | 'style'
  | 'target'
  | 'tooltip'
  | '_class';

/**
 * Attribute types.
 */
export type AttributeKey =
  | NodeAttributeKey
  | EdgeAttributeKey
  | RootClusterAttributeKey
  | SubgraphAttributeKey
  | ClusterSubgraphAttributeKey;

interface AttributeValueMapping {
  _background: string;
  area: type.Double;
  arrowhead: type.ArrowType;
  arrowsize: type.Double;
  arrowtail: type.ArrowType;
  bb: type.Rect;
  bgcolor: type.Color | type.ColorList;
  center: boolean;
  charset: string;
  _class: string;
  clusterrank: type.ClusterMode;
  color: type.Color | type.ColorList;
  colorscheme: string;
  comment: string;
  compound: boolean;
  concentrate: boolean;
  constraint: boolean;
  Damping: type.Double;
  decorate: boolean;
  defaultdist: type.Double;
  dim: type.Int;
  dimen: type.Int;
  dir: type.DirType;
  diredgeconstraints: string | boolean;
  distortion: type.Double;
  dpi: type.Double;
  edgehref: type.EscString;
  edgetarget: type.EscString;
  edgetooltip: type.EscString;
  edgeURL: type.EscString;
  epsilon: type.Double;
  esep: type.AddDouble | type.AddPoint;
  fillcolor: type.Color | type.ColorList;
  fixedsize: boolean | string;
  fontcolor: type.Color;
  fontname: string;
  fontnames: string;
  fontpath: string;
  fontsize: type.Double;
  forcelabels: boolean;
  gradientangle: type.Int;
  group: string;
  head_lp: type.Point;
  headclip: boolean;
  headhref: type.EscString;
  headlabel: type.LblString;
  headport: type.PortPos;
  headtarget: type.EscString;
  headtooltip: type.EscString;
  headURL: type.EscString;
  height: type.Double;
  href: type.EscString;
  id: type.EscString;
  image: string;
  imagepath: string;
  imagepos: string;
  imagescale: string | boolean;
  inputscale: type.Double;
  K: type.Double;
  label: type.LblString;
  label_scheme: type.Int;
  labelangle: type.Double;
  labeldistance: type.Double;
  labelfloat: boolean;
  labelfontcolor: type.Color;
  labelfontname: string;
  labelfontsize: type.Double;
  labelhref: type.EscString;
  labeljust: string;
  labelloc: string;
  labeltarget: type.EscString;
  labeltooltip: type.EscString;
  labelURL: type.EscString;
  landscape: boolean;
  layer: type.LayerRange;
  layerlistsep: string;
  layers: type.LayerList;
  layerselect: type.LayerRange;
  layersep: string;
  layout: string;
  len: type.Double;
  levels: type.Int;
  levelsgap: type.Double;
  lhead: string;
  lheight: type.Double;
  lp: type.Point;
  ltail: string;
  lwidth: type.Double;
  margin: type.Double | type.Point;
  maxiter: type.Int;
  mclimit: type.Double;
  mindist: type.Double;
  minlen: type.Int;
  mode: string;
  model: string;
  mosek: boolean;
  newrank: boolean;
  nodesep: type.Double;
  nojustify: boolean;
  normalize: type.Double | boolean;
  notranslate: boolean;
  nslimit: type.Double;
  nslimit1: type.Double;
  ordering: string;
  orientation: string | type.Double;
  outputorder: type.OutputMode;
  overlap: string | boolean;
  overlap_scaling: type.Double;
  overlap_shrink: boolean;
  pack: boolean | type.Int;
  packmode: type.PackMode;
  pad: type.Double | type.Point;
  page: type.Double | type.Point;
  pagedir: type.Pagedir;
  pencolor: type.Color;
  penwidth: type.Double;
  peripheries: type.Int;
  pin: boolean;
  pos: type.Point | type.SplineType;
  quadtree: type.QuadType | boolean;
  quantum: type.Double;
  rank: type.RankType;
  rankdir: type.Rankdir;
  ranksep: type.Double | type.DoubleList;
  ratio: type.Double | string;
  rects: type.Rect;
  regular: boolean;
  remincross: boolean;
  repulsiveforce: type.Double;
  resolution: type.Double;
  root: string | boolean;
  rotate: type.Int;
  rotation: type.Double;
  samehead: string;
  sametail: string;
  samplepoints: type.Int;
  scale: type.Double | type.Point;
  searchsize: type.Int;
  sep: type.AddDouble | type.AddPoint;
  shape: type.Shape;
  shapefile: string;
  showboxes: type.Int;
  sides: type.Int;
  size: type.Double | type.Point;
  skew: type.Double;
  smoothing: type.SmoothType;
  sortv: type.Int;
  splines: boolean | string;
  start: type.StartType;
  style: type.Style;
  stylesheet: string;
  tail_lp: string;
  tailclip: type.Point;
  tailhref: type.EscString;
  taillabel: type.LblString;
  tailport: type.PortPos;
  tailtarget: type.EscString;
  tailtooltip: type.EscString;
  tailURL: type.EscString;
  target: type.EscString | string;
  tooltip: type.EscString;
  truecolor: boolean;
  URL: type.EscString;
  vertices: type.PointList;
  viewport: type.ViewPort;
  voro_margin: type.Double;
  weight: type.Int | type.Double;
  width: type.Double;
  xdotversion: string;
  xlabel: type.LblString;
  xlp: type.Point;
  z: type.Double;
}

export type Attribute<T extends AttributeKey> = AttributeValueMapping[T];
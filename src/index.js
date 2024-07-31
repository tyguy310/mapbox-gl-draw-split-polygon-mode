import * as Constants from './constants';

import { modeName, passingModeName } from './constants';

import SelectFeatureMode from 'mapbox-gl-draw-select-mode';
import { default as drawStyles } from './customDrawStyles.js';
import { passing_draw_line_string } from 'mapbox-gl-draw-passing-mode';
import { default as splitPolygonMode } from './mode.js';

export { splitPolygonMode };
export { drawStyles };
export { Constants };

export default function SplitPolygonMode(modes) {
  return {
    ...SelectFeatureMode(modes),
    [passingModeName]: passing_draw_line_string,
    [modeName]: splitPolygonMode,
  };
}

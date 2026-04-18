export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { SAFE_ZONES_TOOL } from './tool/safeZones/index';
import { YOUTUBE_THUMBNAIL_TOOL } from './tool/youtubeThumbnail/index';
import { SOCIAL_VALUE_CALCULATOR_TOOL } from './tool/socialValueCalculator/index';
import { REDDIT_FORMATTER_TOOL } from './tool/redditFormatter/index';
import { SOCIAL_IMAGE_RESIZER_TOOL } from './tool/socialImageResizer/index';
import { TINDER_PHOTO_OPTIMIZER_TOOL } from './tool/tinderPhotoOptimizer/index';
import { YOUTUBE_THUMBNAIL_PREVIEWER_TOOL } from './tool/youtubeThumbnailPreviewer/index';

export const ALL_TOOLS: ToolDefinition[] = [SAFE_ZONES_TOOL, YOUTUBE_THUMBNAIL_TOOL, SOCIAL_VALUE_CALCULATOR_TOOL, REDDIT_FORMATTER_TOOL, SOCIAL_IMAGE_RESIZER_TOOL, TINDER_PHOTO_OPTIMIZER_TOOL, YOUTUBE_THUMBNAIL_PREVIEWER_TOOL];


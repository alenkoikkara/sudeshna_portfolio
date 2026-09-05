import petclearTripVideo from '../assets/videos/petclear/petclear_trip.mov'
import petclearCommentVideo from '../assets/videos/petclear/petclear_comment.mov'
import petclearDocumentVideo from '../assets/videos/petclear/petclear_document.mov'
import petclearLoginFlowVideo from '../assets/videos/petclear/petclear_login_flow.mov'

import returnloopUpdateVideo from '../assets/videos/returnloop/returnloop_update.mov'
import returnloopMapVideo from '../assets/videos/returnloop/returnloop_map.mov'
import returnloopLoginVideo from '../assets/videos/returnloop/returnloop_login.mov'

import asapListVideo from '../assets/videos/asap/asap_list.mov'
import asapTimerVideo from '../assets/videos/asap/asap_timer.mov'
import asapDoneVideo from '../assets/videos/asap/asap_done.mov'

export const generateGridBlocks = () => {
  const blocks = [];
  const cols = 20;
  const rows = 12;
  const w = 260;
  const h = 534.25;
  const gap = 20;

  for (let c = 0; c < cols; c++) {
    // stagger columns vertically to make it asymmetrical
    const staggerY = (c * 239) % 400;
    for (let r = 0; r < rows; r++) {
      const x = c * (w + gap);
      const y = r * (h + gap) + staggerY;

      // Default placeholder colors
      let color = (c + r) % 2 === 0 ? '#e5e7eb' : '#f3f4f6';

      blocks.push({ id: `block-${c}-${r}`, c, r, x, y, w, h, color });
    }
  }

  // --- Helper Functions ---
  const getBlock = (c, r) => blocks.find(b => b.c === c && b.r === r);

  const applyMockups = (startC, endC, startR, endR) => {
    blocks.forEach(b => {
      if (b.c >= startC && b.c <= endC && b.r >= startR && b.r <= endR) {
        b.isMockup = true;
        b.color = 'transparent';
      }
    });
  };

  const hideBlockArea = (startC, endC, startR, endR) => {
    blocks.forEach(b => {
      if (b.c >= startC && b.c <= endC && b.r >= startR && b.r <= endR) {
        b.isMockup = false;
        b.color = 'transparent';
      }
    });
  };

  const hideBlocks = (coords) => {
    coords.forEach(([c, r]) => {
      const b = getBlock(c, r);
      if (b) {
        b.isMockup = false;
        b.color = 'transparent';
      }
    });
  };

  const setBlockVideo = (c, r, video) => {
    const b = getBlock(c, r);
    if (b) b.video = video;
  };

  const setMockupVideo = (c, r, video) => {
    const b = getBlock(c, r);
    if (b) {
      b.isMockup = true;
      b.color = 'transparent';
      b.video = video;
    }
  };

  // --- Apply Configurations ---

  // Project Mockup Areas
  applyMockups(2, 5, 2, 4);    // ASAP
  applyMockups(8, 11, 6, 8);   // ReturnLoop
  applyMockups(14, 17, 2, 4);  // PetClear

  // Text Areas (hidden blocks behind text)
  hideBlockArea(0, 2, 1, 5);    // ASAP Text Area (Left)
  hideBlockArea(11, 13, 5, 9);  // ReturnLoop Text Area (Right)
  hideBlockArea(12, 14, 1, 5);  // PetClear Text Area (Left)

  // Target Blocks (hidden so the 3D iPhone can replace them)
  hideBlocks([
    [3, 3],  // ASAP Target
    [9, 7],  // ReturnLoop Target
    [15, 3], // PetClear Target
  ]);

  // Specific user-requested hidden blocks
  hideBlocks([
    [3, 2], [3, 4], [5, 2],
    [16, 2], 
    [0, 0], [1, 0], [2, 0],
    [10, 6], [10, 7]
  ]);

  // Videos
  setBlockVideo(4, 3, asapListVideo);
  setBlockVideo(5, 3, asapTimerVideo);
  setBlockVideo(4, 4, asapDoneVideo);
  
  getBlock(4, 3).color = '#000000';
  getBlock(4, 4).color = '#000000';
  getBlock(5, 3).color = '#000000';

  setBlockVideo(16, 3, petclearLoginFlowVideo);
  setBlockVideo(16, 4, petclearTripVideo);
  setBlockVideo(17, 3, petclearCommentVideo);
  setBlockVideo(17, 4, petclearDocumentVideo);
  
  setBlockVideo(8, 7, returnloopUpdateVideo);
  setBlockVideo(8, 6, returnloopMapVideo);

  // Special Mockup Override
  setMockupVideo(7, 7, returnloopLoginVideo);

  return blocks;
};

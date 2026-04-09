export interface PlatformStrings {
  ttFollowing: string;
  ttForYou: string;
  ttDescription: string;
  ttAudio: string;
  ttNavHome: string;
  ttNavFriends: string;
  ttNavInbox: string;
  ttNavProfile: string;
  reelsFollow: string;
  reelsDescription: string;
  reelsAudio: string;
  shortsSubscribe: string;
  shortsDislike: string;
  shortsShare: string;
  shortsRemix: string;
  shortsDescription: string;
}

const COL = 'display:flex;flex-direction:column;align-items:center;gap:2px';
const STAT = (icon: string, val: string) =>
  `<div style="${COL}"><iconify-icon icon="${icon}" style="font-size:36px;color:white"></iconify-icon><span style="font-size:10px;color:white;font-weight:bold;text-shadow:0 1px 3px rgba(0,0,0,.8)">${val}</span></div>`;

export function buildPlatformUIs(s: PlatformStrings): Record<string, string> {
  return {
    tiktok: `
      <div style="position:absolute;top:40px;left:0;width:100%;display:flex;justify-content:space-between;padding:0 24px;box-sizing:border-box;align-items:center">
        <iconify-icon icon="mdi:live-tv" style="font-size:24px;color:white"></iconify-icon>
        <div style="display:flex;gap:16px;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:.1em">
          <span style="color:rgba(255,255,255,.5)">${s.ttFollowing}</span>
          <span style="color:white;border-bottom:2px solid white;padding-bottom:4px">${s.ttForYou}</span>
        </div>
        <iconify-icon icon="mdi:magnify" style="font-size:24px;color:white"></iconify-icon>
      </div>
      <div style="position:absolute;right:12px;bottom:96px;display:flex;flex-direction:column;gap:20px;align-items:center">
        <div style="width:44px;height:44px;border-radius:50%;border:2px solid white;background:#27272a;position:relative">
          <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);background:#e11d48;border-radius:50%;width:16px;height:16px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;color:white">+</div>
        </div>
        ${STAT('ph:heart-fill', '1.2M')}
        ${STAT('ph:chat-circle-dots-fill', '4,890')}
        ${STAT('ph:bookmark-simple-fill', '250K')}
        ${STAT('ph:share-fat-fill', '45.2K')}
        <div style="width:40px;height:40px;border-radius:50%;background:#18181b;border:8px solid #3f3f46;margin-top:8px;animation:szl-spin 3s linear infinite"></div>
      </div>
      <div style="position:absolute;left:16px;bottom:60px;right:64px">
        <div style="font-weight:bold;color:white;font-size:15px;display:flex;align-items:center;gap:6px;margin-bottom:6px">
          jjlmoya <iconify-icon icon="mdi:check-decagram" style="color:#60a5fa;font-size:12px"></iconify-icon>
        </div>
        <div style="color:rgba(255,255,255,.95);font-size:13px;line-height:1.4;margin-bottom:8px;padding-right:16px">
          ${s.ttDescription}
        </div>
        <div style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.9);font-size:11px;padding:4px 12px;background:rgba(0,0,0,.3);border-radius:999px;width:fit-content;border:1px solid rgba(255,255,255,.1)">
          <iconify-icon icon="mdi:music"></iconify-icon>
          <span>${s.ttAudio}</span>
        </div>
      </div>
    `,
    reels: `
      <div style="position:absolute;top:44px;left:24px;color:white;font-size:24px;font-weight:bold;display:flex;align-items:center;gap:4px">
        Reels <iconify-icon icon="mdi:chevron-down"></iconify-icon>
      </div>
      <div style="position:absolute;top:44px;right:24px;color:white;font-size:24px">
        <iconify-icon icon="mdi:camera-outline"></iconify-icon>
      </div>
      <div style="position:absolute;right:16px;bottom:56px;display:flex;flex-direction:column;gap:24px;align-items:center">
        <div style="${COL}"><iconify-icon icon="ph:heart" style="font-size:30px;color:white"></iconify-icon><span style="font-size:10px;color:white;font-weight:500">102K</span></div>
        <div style="${COL}"><iconify-icon icon="ph:chat-circle" style="font-size:30px;color:white"></iconify-icon><span style="font-size:10px;color:white;font-weight:500">1,245</span></div>
        <div style="${COL}"><iconify-icon icon="ph:paper-plane-tilt" style="font-size:30px;color:white"></iconify-icon></div>
        <iconify-icon icon="ph:dots-three-vertical-bold" style="font-size:24px;color:white"></iconify-icon>
        <div style="width:28px;height:28px;border-radius:4px;border:2px solid white;overflow:hidden;background:#1e293b"></div>
      </div>
      <div style="position:absolute;left:16px;bottom:24px;right:64px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#e11d48,#a855f7);padding:2px">
            <div style="width:100%;height:100%;border-radius:50%;background:black"></div>
          </div>
          <span style="font-weight:bold;color:white;font-size:13px;letter-spacing:-.5px">jjlmoya</span>
          <button style="padding:4px 12px;border:2px solid rgba(255,255,255,.5);border-radius:8px;font-size:11px;font-weight:bold;color:white;background:rgba(255,255,255,.05);cursor:pointer">${s.reelsFollow}</button>
        </div>
        <div style="color:white;font-size:13px;line-height:1.4;margin-bottom:8px">${s.reelsDescription}</div>
        <div style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.9);font-size:10px;font-weight:500;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          <iconify-icon icon="mdi:music-note"></iconify-icon>
          <span>${s.reelsAudio}</span>
        </div>
      </div>
    `,
    shorts: `
      <div style="position:absolute;top:40px;left:0;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box">
        <iconify-icon icon="mdi:arrow-left" style="font-size:30px;color:white"></iconify-icon>
        <div style="display:flex;gap:24px;align-items:center">
          <iconify-icon icon="mdi:magnify" style="font-size:30px;color:white"></iconify-icon>
          <iconify-icon icon="mdi:dots-vertical" style="font-size:30px;color:white"></iconify-icon>
        </div>
      </div>
      <div style="position:absolute;right:8px;bottom:80px;display:flex;flex-direction:column;gap:24px;align-items:center">
        <div style="${COL}"><div style="padding:12px;background:rgba(255,255,255,.1);border-radius:50%"><iconify-icon icon="ph:thumbs-up-fill" style="font-size:28px;color:white"></iconify-icon></div><span style="font-size:10px;color:white;font-weight:bold;margin-top:4px;text-shadow:0 1px 3px rgba(0,0,0,.8)">1.2M</span></div>
        <div style="${COL}"><div style="padding:12px;background:rgba(255,255,255,.1);border-radius:50%"><iconify-icon icon="ph:thumbs-down-fill" style="font-size:28px;color:white"></iconify-icon></div><span style="font-size:10px;color:white;font-weight:bold;margin-top:4px;text-shadow:0 1px 3px rgba(0,0,0,.8)">${s.shortsDislike}</span></div>
        <div style="${COL}"><div style="padding:12px;background:rgba(255,255,255,.1);border-radius:50%"><iconify-icon icon="ph:chat-text-fill" style="font-size:28px;color:white"></iconify-icon></div><span style="font-size:10px;color:white;font-weight:bold;margin-top:4px;text-shadow:0 1px 3px rgba(0,0,0,.8)">34K</span></div>
        <div style="${COL}"><div style="padding:12px;background:rgba(255,255,255,.1);border-radius:50%"><iconify-icon icon="ph:share-fat-fill" style="font-size:28px;color:white"></iconify-icon></div><span style="font-size:10px;color:white;font-weight:bold;margin-top:4px;text-shadow:0 1px 3px rgba(0,0,0,.8)">${s.shortsShare}</span></div>
        <div style="${COL}"><div style="padding:12px;background:rgba(255,255,255,.1);border-radius:50%"><iconify-icon icon="ph:arrows-clockwise-bold" style="font-size:28px;color:white"></iconify-icon></div><span style="font-size:10px;color:white;font-weight:bold;margin-top:4px;text-shadow:0 1px 3px rgba(0,0,0,.8)">${s.shortsRemix}</span></div>
        <div style="width:44px;height:44px;border-radius:12px;background:#1e293b;border:2px solid rgba(255,255,255,.1)"></div>
      </div>
      <div style="position:absolute;left:16px;bottom:32px;right:80px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <div style="width:40px;height:40px;border-radius:50%;background:#dc2626;border:1px solid rgba(255,255,255,.2)"></div>
          <span style="color:white;font-weight:900;font-size:14px;text-shadow:0 1px 8px rgba(0,0,0,.8)">@jjlmoya</span>
          <button style="background:white;color:black;padding:6px 16px;border-radius:999px;font-size:12px;font-weight:900;cursor:pointer">${s.shortsSubscribe}</button>
        </div>
        <div style="color:white;font-size:15px;font-weight:bold;line-height:1.4;text-shadow:0 1px 8px rgba(0,0,0,.8);margin-bottom:8px">${s.shortsDescription}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="background:rgba(255,255,255,.1);padding:4px 12px;border-radius:4px;display:flex;align-items:center;gap:8px;backdrop-filter:blur(4px)">
            <iconify-icon icon="mdi:flash" style="color:white"></iconify-icon>
            <span style="color:white;font-size:11px;font-weight:bold">SHORT</span>
          </div>
        </div>
      </div>
    `,
  };
}

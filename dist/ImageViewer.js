import { useRef as S, useLayoutEffect as ee, useState as ae, useEffect as ne, createElement as he } from "react";
import { jsx as W, jsxs as $ } from "react/jsx-runtime";
import { m as q, g as fe, t as xe, b as Y, c as de, d as pe, P as te, R as ge, I as ye, f as ve, h as be, u as we } from "./index-BLVsk0vl.js";
import { x as ie, c as me, T as Me } from "./Portal-IhUi94Sd.js";
const Te = () => q.Matrix.from(1, 0, 0, 1, -10, -10), Ee = ({
  canvasEl: u,
  changeMat: l,
  changeDragging: g,
  zoomStart: s,
  changeZoomStart: v,
  changeZoomEnd: a,
  layoutParams: n,
  zoomWithPrimary: y,
  dragWithPrimary: m,
  mat: r,
  onMouseMove: D,
  onMouseUp: z,
  onMouseDown: X,
  dragging: L
}) => {
  const c = S({ x: 0, y: 0 }), I = S({ x: 0, y: 0 }), j = (e, t) => {
    const [o, x] = [t.x, t.y];
    let h = typeof e == "object" ? e.to / r.a : 1 + 0.2 * e;
    r.translate(o, x).scaleU(h), r.a > 2 && r.scaleU(2 / r.a), r.a < 0.05 && r.scaleU(0.05 / r.a), r.translate(-o, -x), l(r.clone());
  };
  return { mouseEvents: {
    onMouseMove: (e) => {
      var x;
      const t = (x = u.current) == null ? void 0 : x.getBoundingClientRect();
      if (!t) return;
      I.current.x = c.current.x, I.current.y = c.current.y, c.current.x = e.clientX - t.left, c.current.y = e.clientY - t.top;
      const o = r.applyToPoint(
        c.current.x,
        c.current.y
      );
      if (n.current) {
        const { iw: h, ih: M } = n.current;
        D({ x: o.x / h, y: o.y / M });
      }
      L && (r.translate(
        I.current.x - c.current.x,
        I.current.y - c.current.y
      ), l(r.clone())), e.preventDefault();
    },
    onMouseDown: (e, t = {}) => {
      if (e.preventDefault(), e.button === 1 || e.button === 2 || e.button === 0 && m)
        return g(!0);
      const o = r.applyToPoint(
        c.current.x,
        c.current.y
      );
      if (e.button === 0 && (t.type, t.type, n.current)) {
        const { iw: x, ih: h } = n.current;
        X({ x: o.x / x, y: o.y / h });
      }
    },
    onMouseUp: (e) => {
      e.preventDefault();
      const t = r.applyToPoint(
        c.current.x,
        c.current.y
      );
      if (s) {
        const o = t;
        if (Math.abs(s.x - o.x) < 10 && Math.abs(s.y - o.y) < 10)
          r.a < 1 ? j({ to: 1 }, c.current) : j({ to: 0.25 }, c.current);
        else {
          if (s.x > o.x && ([s.x, o.x] = [o.x, s.x]), s.y > o.y && ([s.y, o.y] = [o.y, s.y]), !n.current) return;
          const { iw: x, ih: h } = n.current;
          let M = Math.min(
            (o.x - s.x) / x,
            (o.y - s.y) / h
          );
          M < 0.05 && (M = 0.05), M > 10 && (M = 10);
          const B = Te().translate(s.x, s.y).scaleU(M);
          l(B.clone());
        }
        v(null), a(null);
      }
      if (e.button === 1 || e.button === 2 || e.button === 0 && m)
        return g(!1);
      if (e.button === 0 && n.current) {
        const { iw: o, ih: x } = n.current;
        z({ x: t.x / o, y: t.y / x });
      }
    },
    onWheel: (e) => {
      const t = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      j(t, c.current);
    },
    onContextMenu: (e) => {
      e.preventDefault();
    }
  }, mousePosition: c };
}, Re = ({
  layoutParams: u,
  mat: l
}) => ie((g) => {
  var r, D;
  const s = ((r = u.current) == null ? void 0 : r.iw) ?? 0, v = ((D = u.current) == null ? void 0 : D.ih) ?? 0, a = fe(g), n = g.type === "point" ? 15 : 2, y = {
    x: a.x * s - n,
    y: a.y * v - n,
    w: a.w * s + n * 2,
    h: a.h * v + n * 2
  };
  return {
    ...l.clone().inverse().applyToPoint(y.x, y.y),
    w: y.w / l.a,
    h: y.h / l.d
  };
}), Pe = me(), We = xe.create({
  canvas: { height: "100%", width: "100%", position: "relative", zIndex: 1 },
  zoomIndicator: {
    position: "absolute",
    bottom: 16,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#fff",
    opacity: 0.5,
    fontWeight: "bolder",
    fontSize: 14,
    padding: 4
  },
  fixedRegionLabel: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 10,
    opacity: 0.5,
    transition: "opacity 500ms",
    "&:hover": {
      opacity: 1
    }
  }
}), oe = (u = null, l = null) => {
  if (!l) return q.Matrix.from(1, 0, 0, 1, 0, 0);
  const { iw: g, ih: s, canvasWidth: v, canvasHeight: a } = l, n = (v - g) / 2, y = (a - s) / 2;
  let m = q.Matrix.from(1, 0, 0, 1, -1 * n, -1 * y);
  return u && (m = m.translate(u.x * g, u.y * s).scaleU(u.w + 0.05)), m;
}, De = ({
  regions: u,
  imageSrc: l,
  onMouseMove: g = () => null,
  onMouseDown: s = () => null,
  onMouseUp: v = () => null,
  regionClsList: a,
  regionTagList: n,
  allowedArea: y,
  RegionEditLabel: m = null,
  onImageLoaded: r,
  onChangeRegion: D,
  onBeginRegionEdit: z,
  onCloseRegionEdit: X,
  onDeleteRegion: L,
  onRegionClassAdded: c,
  zoomOnAllowedArea: I = !0,
  allowComments: j
}) => {
  const { classes: N } = We(), e = S(null), t = S(null), [o, x] = Y(!1), [h, M] = Y(null), [B, se] = Y(
    null
  ), [b, Z] = Y(oe()), re = de(), { mouseEvents: F } = Ee({
    canvasEl: e,
    dragging: o,
    mat: b,
    layoutParams: t,
    changeMat: Z,
    zoomStart: h,
    changeZoomStart: M,
    changeZoomEnd: se,
    changeDragging: x,
    zoomWithPrimary: !1,
    dragWithPrimary: !0,
    onMouseMove: g,
    onMouseDown: s,
    onMouseUp: v
  });
  ee(() => Z(b.clone()), [re]);
  const [R, G] = ae(null), _ = !!(R && R.naturalWidth), ce = Re({ layoutParams: t, mat: b }), ue = ie(
    ({
      naturalWidth: p,
      naturalHeight: E,
      duration: i
    }) => {
      const f = { naturalWidth: p, naturalHeight: E, duration: i };
      r && r(f), G(f), setTimeout(() => G(f), 10);
    }
  ), le = pe(), d = e.current;
  if (d && _ && R) {
    const { clientWidth: p, clientHeight: E } = d, i = Math.max(
      R.naturalWidth / (p - 20),
      R.naturalHeight / (E - 20)
    ), [f, w] = [
      R.naturalWidth / i,
      R.naturalHeight / i
    ];
    t.current = {
      iw: f,
      ih: w,
      fitScale: i,
      canvasWidth: p,
      canvasHeight: E
    };
  }
  ne(() => {
    _ && Z(
      oe(
        I ? y : null,
        t.current
      )
    );
  }, [_]), ne(() => {
    if (!_ || !d) return;
    const p = d.width / 2, E = d.height / 2, i = new MouseEvent("mousedown", {
      bubbles: !0,
      cancelable: !0,
      clientX: p,
      clientY: E,
      view: window
    }), f = new MouseEvent("mouseup", {
      bubbles: !0,
      cancelable: !0,
      clientX: p,
      clientY: E,
      view: window
    });
    d.dispatchEvent(i), setTimeout(() => {
      d.dispatchEvent(f);
    }, 10);
  }, [_, d]), ee(() => {
    var J, K;
    if (!R || !d) return;
    const { clientWidth: p, clientHeight: E } = d;
    d.width = p, d.height = E;
    const i = d.getContext("2d");
    if (!i) return;
    i.save();
    const f = b.clone().inverse().toArray();
    i.transform(
      f[0],
      f[1],
      f[2],
      f[3],
      f[4],
      f[5]
    );
    const w = ((J = t.current) == null ? void 0 : J.iw) || 0, P = ((K = t.current) == null ? void 0 : K.ih) || 0;
    if (y) {
      const { x: H, y: C, w: Q, h: A } = y;
      i.save(), i.globalAlpha = 1;
      const O = [
        [0, 0],
        [w, 0],
        [w, P],
        [0, P]
      ], k = [
        [H * w, C * P],
        [H * w + Q * w, C * P],
        [H * w + Q * w, C * P + A * P],
        [H * w, C * P + A * P]
      ];
      i.moveTo(...O[0]), O.forEach((V) => i.lineTo(...V)), i.lineTo(...O[0]), i.closePath(), k.reverse(), i.moveTo(...k[0]), k.forEach((V) => i.lineTo(...V)), i.lineTo(...k[0]), i.fillStyle = le || "#f00", i.fill(), i.restore();
    }
    i.restore();
  });
  let T = !h || !B ? null : {
    ...b.clone().inverse().applyToPoint(h.x, h.y),
    w: (B.x - h.x) / b.a,
    h: (B.y - h.y) / b.d
  };
  T && (T.w < 0 && (T.x += T.w, T.w *= -1), T.h < 0 && (T.y += T.h, T.h *= -1));
  const U = t.current ? {
    topLeft: b.clone().inverse().applyToPoint(0, 0),
    bottomRight: b.clone().inverse().applyToPoint(t.current.iw, t.current.ih)
  } : null;
  return /* @__PURE__ */ W(Me, { theme: Pe, children: /* @__PURE__ */ $(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        maxHeight: "calc(100vh - 68px)",
        position: "relative",
        overflow: "hidden",
        cursor: o ? "grabbing" : "grab"
      },
      children: [
        _ && !o && /* @__PURE__ */ W(te, { children: /* @__PURE__ */ W(
          ge,
          {
            regions: u,
            projectRegionBox: ce,
            mouseEvents: F,
            regionClsList: a,
            regionTagList: n,
            regionTagSingleSelection: !1,
            onBeginRegionEdit: z,
            onChangeRegion: D,
            onCloseRegionEdit: X,
            onDeleteRegion: L,
            RegionEditLabel: m,
            onRegionClassAdded: c,
            allowComments: j
          }
        ) }, "regionTags"),
        /* @__PURE__ */ $(
          te,
          {
            style: { width: "100%", height: "100%" },
            ...F,
            children: [
              U ? /* @__PURE__ */ W(
                ye,
                {
                  hide: !1,
                  autoSegmentationOptions: { type: "autoseg" },
                  imagePosition: U,
                  regionClsList: a == null ? void 0 : a.map(
                    (p) => typeof p == "string" ? p : p.id
                  ),
                  imageSrc: l,
                  regions: u
                }
              ) : null,
              /* @__PURE__ */ W(
                "canvas",
                {
                  style: { opacity: 0.25 },
                  className: N.canvas,
                  ref: e
                }
              ),
              /* @__PURE__ */ W(
                ve,
                {
                  imagePosition: U,
                  regions: u
                }
              ),
              /* @__PURE__ */ W(
                be,
                {
                  imagePosition: U,
                  mouseEvents: F,
                  onLoad: ue,
                  imageSrc: l
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ $("div", { className: N.zoomIndicator, children: [
          (1 / b.a * 100).toFixed(0),
          "%"
        ] })
      ]
    }
  ) });
}, Ue = ({ allowedArea: u, regionClsList: l, regionTagList: g, imageSrc: s, imageRegions: v }) => {
  const a = we();
  return /* @__PURE__ */ he(
    De,
    {
      ...a,
      key: 0,
      allowedArea: u,
      regionClsList: l,
      regionTagList: g,
      regions: v || [],
      imageSrc: s || null,
      onMouseMove: (n) => {
      },
      onMouseDown: (n) => {
      },
      onMouseUp: (n) => {
      },
      onChangeRegion: (n) => {
      },
      onBeginRegionEdit: (n) => {
      },
      onCloseRegionEdit: (n) => {
      },
      onDeleteRegion: (n) => {
      },
      onImageLoaded: (n) => {
      },
      onRegionClassAdded: (n) => {
      }
    }
  );
};
export {
  Ue as ImageViewer,
  Ue as default
};

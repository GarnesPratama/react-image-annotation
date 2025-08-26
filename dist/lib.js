import { jsx as A, jsxs as He, Fragment as EI } from "react/jsx-runtime";
import * as Ne from "react";
import Dt, { useState as Vo, useRef as li, useEffect as xo, useCallback as Id, useMemo as Ki, memo as mi, Fragment as Zh, useLayoutEffect as Xm, PureComponent as Yu, Component as Yi, forwardRef as Xb, useImperativeHandle as Zb, createElement as OI, useReducer as PI } from "react";
import { S as II, B as TI, T as uo, t as Zm, a as MI, W as AI } from "./index-SLaB_FDu.js";
import { p as Ve, c as $r, T as Hr, r as DI, b as Td, g as LI, o as RI, a as NI, d as fr, e as ga, s as We, f as ur, h as ea, i as Jt, j as bn, u as dr, k as Jb, l as Jh, m as $t, n as wn, B as Qh, q as Ds, t as Gi, v as Lr, P as m, w as rr, I as KI, x as hi, y as Qb, z as FI, A as Gu, C as ep, D as hs, E as e1, F as t1, G as Fn, H as tp, J as n1, K as Jm, L as $I } from "./Portal-IhUi94Sd.js";
import { L as ua, t as Ls, a as HI, m as r1, g as zI, P as Md, u as np, b as Ll, c as BI, d as UI, R as jI, e as WI, I as YI, f as GI, h as qI, i as i1, T as o1, S as Qm, j as qu, k as a1, F as ev, M as VI, B as XI, l as s1, n as ZI, o as Rl, p as Wf, q as JI, r as QI, s as xu, v as eT, w as tT } from "./index-BLVsk0vl.js";
var Ln = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
  fullscreen: 6
}, tv = [
  "webkitFullscreenEnabled",
  "webkitFullscreenElement",
  "webkitRequestFullscreen",
  "webkitExitFullscreen",
  "webkitfullscreenchange",
  "webkitfullscreenerror",
  "-webkit-full-screen"
], nv = [
  "mozFullScreenEnabled",
  "mozFullScreenElement",
  "mozRequestFullScreen",
  "mozCancelFullScreen",
  "mozfullscreenchange",
  "mozfullscreenerror",
  "-moz-full-screen"
], rv = [
  "msFullscreenEnabled",
  "msFullscreenElement",
  "msRequestFullscreen",
  "msExitFullscreen",
  "MSFullscreenChange",
  "MSFullscreenError",
  "-ms-fullscreen"
], mn = typeof window < "u" && typeof window.document < "u" ? window.document : {}, er = "fullscreenEnabled" in mn && Object.keys(Ln) || tv[0] in mn && tv || nv[0] in mn && nv || rv[0] in mn && rv || [], ti = {
  requestFullscreen: function(e) {
    return e[er[Ln.requestFullscreen]]();
  },
  requestFullscreenFunction: function(e) {
    return e[er[Ln.requestFullscreen]];
  },
  get exitFullscreen() {
    return mn[er[Ln.exitFullscreen]].bind(mn);
  },
  get fullscreenPseudoClass() {
    return ":" + er[Ln.fullscreen];
  },
  addEventListener: function(e, t, n) {
    return mn.addEventListener(er[Ln[e]], t, n);
  },
  removeEventListener: function(e, t, n) {
    return mn.removeEventListener(er[Ln[e]], t, n);
  },
  get fullscreenEnabled() {
    return !!mn[er[Ln.fullscreenEnabled]];
  },
  set fullscreenEnabled(e) {
  },
  get fullscreenElement() {
    return mn[er[Ln.fullscreenElement]];
  },
  set fullscreenElement(e) {
  },
  get onfullscreenchange() {
    return mn[("on" + er[Ln.fullscreenchange]).toLowerCase()];
  },
  set onfullscreenchange(e) {
    return mn[("on" + er[Ln.fullscreenchange]).toLowerCase()] = e;
  },
  get onfullscreenerror() {
    return mn[("on" + er[Ln.fullscreenerror]).toLowerCase()];
  },
  set onfullscreenerror(e) {
    return mn[("on" + er[Ln.fullscreenerror]).toLowerCase()] = e;
  }
};
function nT() {
  var e = Vo(!1), t = e[0], n = e[1], r = li(null);
  xo(function() {
    var l = function() {
      n(ti.fullscreenElement === r.current);
    };
    return ti.addEventListener("fullscreenchange", l), function() {
      return ti.removeEventListener("fullscreenchange", l);
    };
  }, []);
  var i = Id(function() {
    if (ti.fullscreenElement)
      return ti.exitFullscreen().then(function() {
        return ti.requestFullscreen(r.current);
      });
    if (r.current)
      return ti.requestFullscreen(r.current);
  }, []), a = Id(function() {
    return ti.fullscreenElement === r.current ? ti.exitFullscreen() : Promise.resolve();
  }, []);
  return Ki(function() {
    return {
      active: t,
      enter: i,
      exit: a,
      node: r
    };
  }, [t, i, a]);
}
var rT = function(t) {
  var n = t.handle, r = t.onChange, i = t.children, a = t.className, l = [];
  return a && l.push(a), l.push("fullscreen"), n.active && l.push("fullscreen-enabled"), xo(function() {
    r && r(n.active, n);
  }, [n.active]), Dt.createElement("div", {
    className: l.join(" "),
    ref: n.node,
    style: n.active ? {
      height: "100%",
      width: "100%"
    } : void 0
  }, i);
};
function iT(e, t) {
  if (Ve.env.NODE_ENV === "production")
    return () => null;
  const n = t ? {
    ...t.propTypes
  } : null;
  return (i) => (a, l, u, f, d, ...p) => {
    const g = d || l, _ = n == null ? void 0 : n[g];
    if (_) {
      const y = _(a, l, u, f, d, ...p);
      if (y)
        return y;
    }
    return typeof a[l] < "u" && !a[i] ? new Error(`The prop \`${g}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
const oT = {
  500: "#e91e63"
}, aT = {
  500: "#3f51b5"
}, sT = {
  500: "#009688"
}, lT = {
  700: "#689f38"
}, uT = {
  500: "#cddc39"
}, cT = {
  500: "#795548"
}, fT = {
  500: "#607d8b"
}, dT = $r(), hT = ({
  icon: e,
  title: t,
  children: n
}) => /* @__PURE__ */ A(Hr, { theme: dT, children: /* @__PURE__ */ A(II, { icon: e, title: t, children: n }) }), ya = mi(
  hT,
  (e, t) => e.title === t.title && e.children === t.children
), co = [
  DI[500],
  Td[500],
  LI[500],
  RI[800],
  cT[500],
  lT[700],
  oT[500],
  NI[500],
  aT[500],
  sT[500],
  uT[500],
  fT[500]
], pT = 2281701376;
function gT(e) {
  e = e.replace("#", "");
  const t = e.substr(4, 2) + e.substr(2, 2) + e.substr(0, 2);
  return parseInt(t, 16);
}
co.map(
  (e) => (gT(e) | pT) >>> 0
);
const yT = fr(/* @__PURE__ */ A("path", {
  fillRule: "evenodd",
  d: "M13 9.5h5v-2h-5zm0 7h5v-2h-5zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2M6 11h5V6H6zm1-4h3v3H7zM6 18h5v-5H6zm1-4h3v3H7z"
}), "Ballot");
var mT = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, l1 = mT, vT = l1, _T = typeof self == "object" && self && self.Object === Object && self, bT = vT || _T || Function("return this")(), vi = bT, wT = vi, kT = wT.Symbol, Vu = kT;
function xT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var ST = xT, CT = Array.isArray, ma = CT, iv = Vu, u1 = Object.prototype, ET = u1.hasOwnProperty, OT = u1.toString, Wa = iv ? iv.toStringTag : void 0;
function PT(e) {
  var t = ET.call(e, Wa), n = e[Wa];
  try {
    e[Wa] = void 0;
    var r = !0;
  } catch {
  }
  var i = OT.call(e);
  return r && (t ? e[Wa] = n : delete e[Wa]), i;
}
var IT = PT, TT = Object.prototype, MT = TT.toString;
function AT(e) {
  return MT.call(e);
}
var DT = AT, ov = Vu, LT = IT, RT = DT, NT = "[object Null]", KT = "[object Undefined]", av = ov ? ov.toStringTag : void 0;
function FT(e) {
  return e == null ? e === void 0 ? KT : NT : av && av in Object(e) ? LT(e) : RT(e);
}
var Rs = FT;
function $T(e) {
  return e != null && typeof e == "object";
}
var Ns = $T, HT = Rs, zT = Ns, BT = "[object Symbol]";
function UT(e) {
  return typeof e == "symbol" || zT(e) && HT(e) == BT;
}
var rp = UT, sv = Vu, jT = ST, WT = ma, YT = rp, lv = sv ? sv.prototype : void 0, uv = lv ? lv.toString : void 0;
function c1(e) {
  if (typeof e == "string")
    return e;
  if (WT(e))
    return jT(e, c1) + "";
  if (YT(e))
    return uv ? uv.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var GT = c1, qT = GT;
function VT(e) {
  return e == null ? "" : qT(e);
}
var ip = VT;
function XT(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = e[r + t];
  return a;
}
var ZT = XT, JT = ZT;
function QT(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : JT(e, t, n);
}
var eM = QT, tM = "\\ud800-\\udfff", nM = "\\u0300-\\u036f", rM = "\\ufe20-\\ufe2f", iM = "\\u20d0-\\u20ff", oM = nM + rM + iM, aM = "\\ufe0e\\ufe0f", sM = "\\u200d", lM = RegExp("[" + sM + tM + oM + aM + "]");
function uM(e) {
  return lM.test(e);
}
var f1 = uM;
function cM(e) {
  return e.split("");
}
var fM = cM, d1 = "\\ud800-\\udfff", dM = "\\u0300-\\u036f", hM = "\\ufe20-\\ufe2f", pM = "\\u20d0-\\u20ff", gM = dM + hM + pM, yM = "\\ufe0e\\ufe0f", mM = "[" + d1 + "]", Ad = "[" + gM + "]", Dd = "\\ud83c[\\udffb-\\udfff]", vM = "(?:" + Ad + "|" + Dd + ")", h1 = "[^" + d1 + "]", p1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", g1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", _M = "\\u200d", y1 = vM + "?", m1 = "[" + yM + "]?", bM = "(?:" + _M + "(?:" + [h1, p1, g1].join("|") + ")" + m1 + y1 + ")*", wM = m1 + y1 + bM, kM = "(?:" + [h1 + Ad + "?", Ad, p1, g1, mM].join("|") + ")", xM = RegExp(Dd + "(?=" + Dd + ")|" + kM + wM, "g");
function SM(e) {
  return e.match(xM) || [];
}
var CM = SM, EM = fM, OM = f1, PM = CM;
function IM(e) {
  return OM(e) ? PM(e) : EM(e);
}
var TM = IM, MM = eM, AM = f1, DM = TM, LM = ip;
function RM(e) {
  return function(t) {
    t = LM(t);
    var n = AM(t) ? DM(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? MM(n, 1).join("") : t.slice(1);
    return r[e]() + i;
  };
}
var NM = RM, KM = NM, FM = KM("toUpperCase"), $M = FM, HM = ip, zM = $M;
function BM(e) {
  return zM(HM(e).toLowerCase());
}
var UM = BM;
const jM = /* @__PURE__ */ ga(UM), WM = $r(), YM = We("div")(() => ({
  display: "flex",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 16,
  paddingRight: 16,
  alignItems: "center",
  cursor: "pointer",
  opacity: 0.7,
  backgroundColor: "#fff",
  "&:hover": {
    opacity: 1
  },
  "&.selected": {
    opacity: 1,
    fontWeight: "bold"
  }
})), GM = We("div")(() => ({
  width: 12,
  height: 12,
  borderRadius: 12,
  marginRight: 8
})), qM = We("div")(() => ({
  fontSize: 11
})), VM = We("div")(() => ({
  flexGrow: 1,
  borderBottom: `2px dotted ${ur[300]}`,
  marginLeft: 8,
  marginRight: 8
})), XM = We("div")(() => ({
  fontSize: 11,
  textAlign: "center",
  minWidth: 14,
  paddingTop: 2,
  paddingBottom: 2,
  fontWeight: "bold",
  color: ur[700]
})), Ya = (e) => typeof e == "string" ? e : e.id, ZM = ({
  selectedCls: e,
  regionClsList: t,
  onSelectCls: n
}) => (xo(() => {
  const r = {};
  for (let a = 0; a < 9 && a < t.length; a++)
    r[a + 1] = () => {
      const l = t[a];
      n(Ya(l));
    };
  const i = (a) => {
    r[a.key] && (r[a.key](), a.preventDefault(), a.stopPropagation());
  };
  return window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i);
}, [t, e]), /* @__PURE__ */ A(Hr, { theme: WM, children: /* @__PURE__ */ He(
  ya,
  {
    title: "Available Classes",
    icon: /* @__PURE__ */ A(yT, { style: { color: ur[700] } }),
    expandedByDefault: !0,
    children: [
      t.map((r, i) => /* @__PURE__ */ He(
        YM,
        {
          className: ea({
            selected: Ya(r) === e
          }),
          onClick: () => n(Ya(r)),
          children: [
            /* @__PURE__ */ A(
              GM,
              {
                style: {
                  backgroundColor: typeof r == "object" ? r.color : co[i % co.length]
                }
              }
            ),
            /* @__PURE__ */ A(
              qM,
              {
                className: ea({
                  selected: Ya(r) === e
                }),
                children: jM(typeof r == "string" ? r : r.label)
              }
            ),
            /* @__PURE__ */ A(VM, {}),
            /* @__PURE__ */ A(
              XM,
              {
                className: ea({
                  selected: Ya(r) === e
                }),
                children: i < 9 ? `Key [${i + 1}]` : ""
              }
            )
          ]
        },
        typeof r == "object" ? r.id : r
      )),
      /* @__PURE__ */ A(TI, { pb: 2 })
    ]
  }
) })), JM = ({
  state: e,
  lastAction: t
}) => {
  const n = e.selectedImage ? (e.images || [])[e.selectedImage] : null, r = n ? (n.regions || []).filter((i) => i.highlighted) : null;
  return /* @__PURE__ */ A(ya, { title: "Debug", icon: /* @__PURE__ */ A("span", {}), expandedByDefault: !0, children: /* @__PURE__ */ He("div", { style: { padding: 4 }, children: [
    /* @__PURE__ */ He("div", { children: [
      /* @__PURE__ */ A("b", { children: "region" }),
      ":"
    ] }),
    /* @__PURE__ */ A("pre", { children: JSON.stringify(r, null, "  ") }),
    /* @__PURE__ */ He("div", { children: [
      /* @__PURE__ */ A("b", { children: "lastAction" }),
      ":"
    ] }),
    /* @__PURE__ */ A("pre", { children: JSON.stringify(t, null, "  ") }),
    /* @__PURE__ */ He("div", { children: [
      /* @__PURE__ */ A("b", { children: "mode" }),
      ":"
    ] }),
    /* @__PURE__ */ A("pre", { children: JSON.stringify(e.mode, null, "  ") }),
    /* @__PURE__ */ A("div", { children: /* @__PURE__ */ A("b", { children: "frame:" }) }),
    /* @__PURE__ */ A("pre", { children: "selectedImageFrameTime" in e ? JSON.stringify(e.selectedImageFrameTime, null, "  ") : null })
  ] }) });
}, QM = fr(/* @__PURE__ */ A("path", {
  d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
}), "History");
function eA(e) {
  return bn("MuiListItemButton", e);
}
const Ga = Jt("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), tA = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, nA = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: i,
    disableGutters: a,
    divider: l,
    selected: u
  } = e, d = wn({
    root: ["root", r && "dense", !a && "gutters", l && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", u && "selected"]
  }, eA, n);
  return {
    ...n,
    ...d
  };
}, rA = We(Qh, {
  shouldForwardProp: (e) => Ds(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: tA
})(Gi(({
  theme: e
}) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Ga.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Ga.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Ga.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Ga.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Ga.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
}))), v1 = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: i = "center",
    autoFocus: a = !1,
    component: l = "div",
    children: u,
    dense: f = !1,
    disableGutters: d = !1,
    divider: p = !1,
    focusVisibleClassName: g,
    selected: _ = !1,
    className: y,
    ...k
  } = r, x = Ne.useContext(ua), O = Ne.useMemo(() => ({
    dense: f || x.dense || !1,
    alignItems: i,
    disableGutters: d
  }), [i, x.dense, f, d]), S = Ne.useRef(null);
  Jb(() => {
    a && (S.current ? S.current.focus() : Ve.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [a]);
  const M = {
    ...r,
    alignItems: i,
    dense: O.dense,
    disableGutters: d,
    divider: p,
    selected: _
  }, T = nA(M), L = Jh(S, n);
  return /* @__PURE__ */ A(ua.Provider, {
    value: O,
    children: /* @__PURE__ */ A(rA, {
      ref: L,
      href: k.href || k.to,
      component: (k.href || k.to) && l === "div" ? "button" : l,
      focusVisibleClassName: $t(T.focusVisible, g),
      ownerState: M,
      className: $t(T.root, y),
      ...k,
      classes: T,
      children: u
    })
  });
});
Ve.env.NODE_ENV !== "production" && (v1.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: m.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: m.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: m.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: m.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: m.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  href: m.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function iA(e) {
  return bn("MuiListItemText", e);
}
const Xo = Jt("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), oA = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: i,
    dense: a
  } = e;
  return wn({
    root: ["root", n && "inset", a && "dense", r && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, iA, t);
}, aA = We("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Xo.primary}`]: t.primary
    }, {
      [`& .${Xo.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${Zm.root}:where(& .${Xo.primary})`]: {
    display: "block"
  },
  [`.${Zm.root}:where(& .${Xo.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), _1 = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiListItemText"
  }), {
    children: i,
    className: a,
    disableTypography: l = !1,
    inset: u = !1,
    primary: f,
    primaryTypographyProps: d,
    secondary: p,
    secondaryTypographyProps: g,
    slots: _ = {},
    slotProps: y = {},
    ...k
  } = r, {
    dense: x
  } = Ne.useContext(ua);
  let O = f ?? i, S = p;
  const M = {
    ...r,
    disableTypography: l,
    inset: u,
    primary: !!O,
    secondary: !!S,
    dense: x
  }, T = oA(M), L = {
    slots: _,
    slotProps: {
      primary: d,
      secondary: g,
      ...y
    }
  }, [K, N] = rr("root", {
    className: $t(T.root, a),
    elementType: aA,
    externalForwardedProps: {
      ...L,
      ...k
    },
    ownerState: M,
    ref: n
  }), [W, ne] = rr("primary", {
    className: T.primary,
    elementType: uo,
    externalForwardedProps: L,
    ownerState: M
  }), [oe, le] = rr("secondary", {
    className: T.secondary,
    elementType: uo,
    externalForwardedProps: L,
    ownerState: M
  });
  return O != null && O.type !== uo && !l && (O = /* @__PURE__ */ A(W, {
    variant: x ? "body2" : "body1",
    component: ne != null && ne.variant ? void 0 : "span",
    ...ne,
    children: O
  })), S != null && S.type !== uo && !l && (S = /* @__PURE__ */ A(oe, {
    variant: "body2",
    color: "textSecondary",
    ...le,
    children: S
  })), /* @__PURE__ */ He(K, {
    ...N,
    children: [O, S]
  });
});
Ve.env.NODE_ENV !== "production" && (_1.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: m.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: m.bool,
  /**
   * The main content element.
   */
  primary: m.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: m.object,
  /**
   * The secondary content element.
   */
  secondary: m.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: m.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: m.shape({
    primary: m.oneOfType([m.func, m.object]),
    root: m.oneOfType([m.func, m.object]),
    secondary: m.oneOfType([m.func, m.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: m.shape({
    primary: m.elementType,
    root: m.elementType,
    secondary: m.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function sA(e) {
  return bn("MuiListItemSecondaryAction", e);
}
Jt("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const lA = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return wn({
    root: ["root", t && "disableGutters"]
  }, sA, n);
}, uA = We("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState: e
    }) => e.disableGutters,
    style: {
      right: 0
    }
  }]
}), op = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i,
    ...a
  } = r, l = Ne.useContext(ua), u = {
    ...r,
    disableGutters: l.disableGutters
  }, f = lA(u);
  return /* @__PURE__ */ A(uA, {
    className: $t(f.root, i),
    ownerState: u,
    ref: n,
    ...a
  });
});
Ve.env.NODE_ENV !== "production" && (op.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
op.muiName = "ListItemSecondaryAction";
const cA = fr(/* @__PURE__ */ A("path", {
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8"
}), "Undo");
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var b1;
function J() {
  return b1.apply(null, arguments);
}
function fA(e) {
  b1 = e;
}
function xr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function go(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ze(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ap(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (ze(e, t))
      return !1;
  return !0;
}
function yn(e) {
  return e === void 0;
}
function pi(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ks(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function w1(e, t) {
  var n = [], r, i = e.length;
  for (r = 0; r < i; ++r)
    n.push(t(e[r], r));
  return n;
}
function Fi(e, t) {
  for (var n in t)
    ze(t, n) && (e[n] = t[n]);
  return ze(t, "toString") && (e.toString = t.toString), ze(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function zr(e, t, n, r) {
  return j1(e, t, n, r, !0).utc();
}
function dA() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function Oe(e) {
  return e._pf == null && (e._pf = dA()), e._pf;
}
var Ld;
Array.prototype.some ? Ld = Array.prototype.some : Ld = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function sp(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = Oe(e), n = Ld.call(t.parsedDateParts, function(i) {
    return i != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Xu(e) {
  var t = zr(NaN);
  return e != null ? Fi(Oe(t), e) : Oe(t).userInvalidated = !0, t;
}
var cv = J.momentProperties = [], Yf = !1;
function lp(e, t) {
  var n, r, i, a = cv.length;
  if (yn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), yn(t._i) || (e._i = t._i), yn(t._f) || (e._f = t._f), yn(t._l) || (e._l = t._l), yn(t._strict) || (e._strict = t._strict), yn(t._tzm) || (e._tzm = t._tzm), yn(t._isUTC) || (e._isUTC = t._isUTC), yn(t._offset) || (e._offset = t._offset), yn(t._pf) || (e._pf = Oe(t)), yn(t._locale) || (e._locale = t._locale), a > 0)
    for (n = 0; n < a; n++)
      r = cv[n], i = t[r], yn(i) || (e[r] = i);
  return e;
}
function Fs(e) {
  lp(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Yf === !1 && (Yf = !0, J.updateOffset(this), Yf = !1);
}
function Sr(e) {
  return e instanceof Fs || e != null && e._isAMomentObject != null;
}
function k1(e) {
  J.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function hr(e, t) {
  var n = !0;
  return Fi(function() {
    if (J.deprecationHandler != null && J.deprecationHandler(null, e), n) {
      var r = [], i, a, l, u = arguments.length;
      for (a = 0; a < u; a++) {
        if (i = "", typeof arguments[a] == "object") {
          i += `
[` + a + "] ";
          for (l in arguments[0])
            ze(arguments[0], l) && (i += l + ": " + arguments[0][l] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[a];
        r.push(i);
      }
      k1(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var fv = {};
function x1(e, t) {
  J.deprecationHandler != null && J.deprecationHandler(e, t), fv[e] || (k1(t), fv[e] = !0);
}
J.suppressDeprecationWarnings = !1;
J.deprecationHandler = null;
function Br(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function hA(e) {
  var t, n;
  for (n in e)
    ze(e, n) && (t = e[n], Br(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Rd(e, t) {
  var n = Fi({}, e), r;
  for (r in t)
    ze(t, r) && (go(e[r]) && go(t[r]) ? (n[r] = {}, Fi(n[r], e[r]), Fi(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    ze(e, r) && !ze(t, r) && go(e[r]) && (n[r] = Fi({}, n[r]));
  return n;
}
function up(e) {
  e != null && this.set(e);
}
var Nd;
Object.keys ? Nd = Object.keys : Nd = function(e) {
  var t, n = [];
  for (t in e)
    ze(e, t) && n.push(t);
  return n;
};
var pA = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function gA(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Br(r) ? r.call(t, n) : r;
}
function Kr(e, t, n) {
  var r = "" + Math.abs(e), i = t - r.length, a = e >= 0;
  return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var cp = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Nl = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Gf = {}, ta = {};
function fe(e, t, n, r) {
  var i = r;
  typeof r == "string" && (i = function() {
    return this[r]();
  }), e && (ta[e] = i), t && (ta[t[0]] = function() {
    return Kr(i.apply(this, arguments), t[1], t[2]);
  }), n && (ta[n] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function yA(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function mA(e) {
  var t = e.match(cp), n, r;
  for (n = 0, r = t.length; n < r; n++)
    ta[t[n]] ? t[n] = ta[t[n]] : t[n] = yA(t[n]);
  return function(i) {
    var a = "", l;
    for (l = 0; l < r; l++)
      a += Br(t[l]) ? t[l].call(i, e) : t[l];
    return a;
  };
}
function Vl(e, t) {
  return e.isValid() ? (t = S1(t, e.localeData()), Gf[t] = Gf[t] || mA(t), Gf[t](e)) : e.localeData().invalidDate();
}
function S1(e, t) {
  var n = 5;
  function r(i) {
    return t.longDateFormat(i) || i;
  }
  for (Nl.lastIndex = 0; n >= 0 && Nl.test(e); )
    e = e.replace(
      Nl,
      r
    ), Nl.lastIndex = 0, n -= 1;
  return e;
}
var vA = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function _A(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(cp).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var bA = "Invalid date";
function wA() {
  return this._invalidDate;
}
var kA = "%d", xA = /\d{1,2}/;
function SA(e) {
  return this._ordinal.replace("%d", e);
}
var CA = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function EA(e, t, n, r) {
  var i = this._relativeTime[n];
  return Br(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
}
function OA(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Br(n) ? n(t) : n.replace(/%s/i, t);
}
var dv = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function pr(e) {
  return typeof e == "string" ? dv[e] || dv[e.toLowerCase()] : void 0;
}
function fp(e) {
  var t = {}, n, r;
  for (r in e)
    ze(e, r) && (n = pr(r), n && (t[n] = e[r]));
  return t;
}
var PA = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function IA(e) {
  var t = [], n;
  for (n in e)
    ze(e, n) && t.push({ unit: n, priority: PA[n] });
  return t.sort(function(r, i) {
    return r.priority - i.priority;
  }), t;
}
var C1 = /\d/, zn = /\d\d/, E1 = /\d{3}/, dp = /\d{4}/, Zu = /[+-]?\d{6}/, ht = /\d\d?/, O1 = /\d\d\d\d?/, P1 = /\d\d\d\d\d\d?/, Ju = /\d{1,3}/, hp = /\d{1,4}/, Qu = /[+-]?\d{1,6}/, va = /\d+/, ec = /[+-]?\d+/, TA = /Z|[+-]\d\d:?\d\d/gi, tc = /Z|[+-]\d\d(?::?\d\d)?/gi, MA = /[+-]?\d+(\.\d{1,3})?/, $s = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _a = /^[1-9]\d?/, pp = /^([1-9]\d|\d)/, Su;
Su = {};
function te(e, t, n) {
  Su[e] = Br(t) ? t : function(r, i) {
    return r && n ? n : t;
  };
}
function AA(e, t) {
  return ze(Su, e) ? Su[e](t._strict, t._locale) : new RegExp(DA(e));
}
function DA(e) {
  return ui(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, i, a) {
        return n || r || i || a;
      }
    )
  );
}
function ui(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function tr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Re(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = tr(t)), n;
}
var Kd = {};
function Ze(e, t) {
  var n, r = t, i;
  for (typeof e == "string" && (e = [e]), pi(t) && (r = function(a, l) {
    l[t] = Re(a);
  }), i = e.length, n = 0; n < i; n++)
    Kd[e[n]] = r;
}
function Hs(e, t) {
  Ze(e, function(n, r, i, a) {
    i._w = i._w || {}, t(n, i._w, i, a);
  });
}
function LA(e, t, n) {
  t != null && ze(Kd, e) && Kd[e](t, n._a, n, e);
}
function nc(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Xt = 0, oi = 1, Ar = 2, At = 3, br = 4, ai = 5, fo = 6, RA = 7, NA = 8;
fe("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Kr(e, 4) : "+" + e;
});
fe(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
fe(0, ["YYYY", 4], 0, "year");
fe(0, ["YYYYY", 5], 0, "year");
fe(0, ["YYYYYY", 6, !0], 0, "year");
te("Y", ec);
te("YY", ht, zn);
te("YYYY", hp, dp);
te("YYYYY", Qu, Zu);
te("YYYYYY", Qu, Zu);
Ze(["YYYYY", "YYYYYY"], Xt);
Ze("YYYY", function(e, t) {
  t[Xt] = e.length === 2 ? J.parseTwoDigitYear(e) : Re(e);
});
Ze("YY", function(e, t) {
  t[Xt] = J.parseTwoDigitYear(e);
});
Ze("Y", function(e, t) {
  t[Xt] = parseInt(e, 10);
});
function rs(e) {
  return nc(e) ? 366 : 365;
}
J.parseTwoDigitYear = function(e) {
  return Re(e) + (Re(e) > 68 ? 1900 : 2e3);
};
var I1 = ba("FullYear", !0);
function KA() {
  return nc(this.year());
}
function ba(e, t) {
  return function(n) {
    return n != null ? (T1(this, e, n), J.updateOffset(this, t), this) : ps(this, e);
  };
}
function ps(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function T1(e, t, n) {
  var r, i, a, l, u;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, i = e._isUTC, t) {
      case "Milliseconds":
        return void (i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (i ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (i ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (i ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (i ? r.setUTCDate(n) : r.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    a = n, l = e.month(), u = e.date(), u = u === 29 && l === 1 && !nc(a) ? 28 : u, i ? r.setUTCFullYear(a, l, u) : r.setFullYear(a, l, u);
  }
}
function FA(e) {
  return e = pr(e), Br(this[e]) ? this[e]() : this;
}
function $A(e, t) {
  if (typeof e == "object") {
    e = fp(e);
    var n = IA(e), r, i = n.length;
    for (r = 0; r < i; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = pr(e), Br(this[e]))
    return this[e](t);
  return this;
}
function HA(e, t) {
  return (e % t + t) % t;
}
var Ct;
Array.prototype.indexOf ? Ct = Array.prototype.indexOf : Ct = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function gp(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = HA(t, 12);
  return e += (t - n) / 12, n === 1 ? nc(e) ? 29 : 28 : 31 - n % 7 % 2;
}
fe("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
fe("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
fe("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
te("M", ht, _a);
te("MM", ht, zn);
te("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
te("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ze(["M", "MM"], function(e, t) {
  t[oi] = Re(e) - 1;
});
Ze(["MMM", "MMMM"], function(e, t, n, r) {
  var i = n._locale.monthsParse(e, r, n._strict);
  i != null ? t[oi] = i : Oe(n).invalidMonth = e;
});
var zA = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), M1 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), A1 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, BA = $s, UA = $s;
function jA(e, t) {
  return e ? xr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || A1).test(t) ? "format" : "standalone"][e.month()] : xr(this._months) ? this._months : this._months.standalone;
}
function WA(e, t) {
  return e ? xr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[A1.test(t) ? "format" : "standalone"][e.month()] : xr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function YA(e, t, n) {
  var r, i, a, l = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      a = zr([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (i = Ct.call(this._shortMonthsParse, l), i !== -1 ? i : null) : (i = Ct.call(this._longMonthsParse, l), i !== -1 ? i : null) : t === "MMM" ? (i = Ct.call(this._shortMonthsParse, l), i !== -1 ? i : (i = Ct.call(this._longMonthsParse, l), i !== -1 ? i : null)) : (i = Ct.call(this._longMonthsParse, l), i !== -1 ? i : (i = Ct.call(this._shortMonthsParse, l), i !== -1 ? i : null));
}
function GA(e, t, n) {
  var r, i, a;
  if (this._monthsParseExact)
    return YA.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (i = zr([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function D1(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Re(t);
    else if (t = e.localeData().monthsParse(t), !pi(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, gp(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function L1(e) {
  return e != null ? (D1(this, e), J.updateOffset(this, !0), this) : ps(this, "Month");
}
function qA() {
  return gp(this.year(), this.month());
}
function VA(e) {
  return this._monthsParseExact ? (ze(this, "_monthsRegex") || R1.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ze(this, "_monthsShortRegex") || (this._monthsShortRegex = BA), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function XA(e) {
  return this._monthsParseExact ? (ze(this, "_monthsRegex") || R1.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ze(this, "_monthsRegex") || (this._monthsRegex = UA), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function R1() {
  function e(f, d) {
    return d.length - f.length;
  }
  var t = [], n = [], r = [], i, a, l, u;
  for (i = 0; i < 12; i++)
    a = zr([2e3, i]), l = ui(this.monthsShort(a, "")), u = ui(this.months(a, "")), t.push(l), n.push(u), r.push(u), r.push(l);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ZA(e, t, n, r, i, a, l) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, n, r, i, a, l), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, n, r, i, a, l), u;
}
function gs(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Cu(e, t, n) {
  var r = 7 + t - n, i = (7 + gs(e, 0, r).getUTCDay() - t) % 7;
  return -i + r - 1;
}
function N1(e, t, n, r, i) {
  var a = (7 + n - r) % 7, l = Cu(e, r, i), u = 1 + 7 * (t - 1) + a + l, f, d;
  return u <= 0 ? (f = e - 1, d = rs(f) + u) : u > rs(e) ? (f = e + 1, d = u - rs(e)) : (f = e, d = u), {
    year: f,
    dayOfYear: d
  };
}
function ys(e, t, n) {
  var r = Cu(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, l;
  return i < 1 ? (l = e.year() - 1, a = i + ci(l, t, n)) : i > ci(e.year(), t, n) ? (a = i - ci(e.year(), t, n), l = e.year() + 1) : (l = e.year(), a = i), {
    week: a,
    year: l
  };
}
function ci(e, t, n) {
  var r = Cu(e, t, n), i = Cu(e + 1, t, n);
  return (rs(e) - r + i) / 7;
}
fe("w", ["ww", 2], "wo", "week");
fe("W", ["WW", 2], "Wo", "isoWeek");
te("w", ht, _a);
te("ww", ht, zn);
te("W", ht, _a);
te("WW", ht, zn);
Hs(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Re(e);
  }
);
function JA(e) {
  return ys(e, this._week.dow, this._week.doy).week;
}
var QA = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function e3() {
  return this._week.dow;
}
function t3() {
  return this._week.doy;
}
function n3(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function r3(e) {
  var t = ys(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
fe("d", 0, "do", "day");
fe("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
fe("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
fe("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
fe("e", 0, 0, "weekday");
fe("E", 0, 0, "isoWeekday");
te("d", ht);
te("e", ht);
te("E", ht);
te("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
te("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
te("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Hs(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var i = n._locale.weekdaysParse(e, r, n._strict);
  i != null ? t.d = i : Oe(n).invalidWeekday = e;
});
Hs(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Re(e);
});
function i3(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function o3(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function yp(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var a3 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), K1 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), s3 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), l3 = $s, u3 = $s, c3 = $s;
function f3(e, t) {
  var n = xr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? yp(n, this._week.dow) : e ? n[e.day()] : n;
}
function d3(e) {
  return e === !0 ? yp(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function h3(e) {
  return e === !0 ? yp(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function p3(e, t, n) {
  var r, i, a, l = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      a = zr([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (i = Ct.call(this._weekdaysParse, l), i !== -1 ? i : null) : t === "ddd" ? (i = Ct.call(this._shortWeekdaysParse, l), i !== -1 ? i : null) : (i = Ct.call(this._minWeekdaysParse, l), i !== -1 ? i : null) : t === "dddd" ? (i = Ct.call(this._weekdaysParse, l), i !== -1 || (i = Ct.call(this._shortWeekdaysParse, l), i !== -1) ? i : (i = Ct.call(this._minWeekdaysParse, l), i !== -1 ? i : null)) : t === "ddd" ? (i = Ct.call(this._shortWeekdaysParse, l), i !== -1 || (i = Ct.call(this._weekdaysParse, l), i !== -1) ? i : (i = Ct.call(this._minWeekdaysParse, l), i !== -1 ? i : null)) : (i = Ct.call(this._minWeekdaysParse, l), i !== -1 || (i = Ct.call(this._weekdaysParse, l), i !== -1) ? i : (i = Ct.call(this._shortWeekdaysParse, l), i !== -1 ? i : null));
}
function g3(e, t, n) {
  var r, i, a;
  if (this._weekdaysParseExact)
    return p3.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (i = zr([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function y3(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ps(this, "Day");
  return e != null ? (e = i3(e, this.localeData()), this.add(e - t, "d")) : t;
}
function m3(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function v3(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = o3(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function _3(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || mp.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ze(this, "_weekdaysRegex") || (this._weekdaysRegex = l3), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function b3(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || mp.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ze(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = u3), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function w3(e) {
  return this._weekdaysParseExact ? (ze(this, "_weekdaysRegex") || mp.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ze(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = c3), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function mp() {
  function e(p, g) {
    return g.length - p.length;
  }
  var t = [], n = [], r = [], i = [], a, l, u, f, d;
  for (a = 0; a < 7; a++)
    l = zr([2e3, 1]).day(a), u = ui(this.weekdaysMin(l, "")), f = ui(this.weekdaysShort(l, "")), d = ui(this.weekdays(l, "")), t.push(u), n.push(f), r.push(d), i.push(u), i.push(f), i.push(d);
  t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function vp() {
  return this.hours() % 12 || 12;
}
function k3() {
  return this.hours() || 24;
}
fe("H", ["HH", 2], 0, "hour");
fe("h", ["hh", 2], 0, vp);
fe("k", ["kk", 2], 0, k3);
fe("hmm", 0, 0, function() {
  return "" + vp.apply(this) + Kr(this.minutes(), 2);
});
fe("hmmss", 0, 0, function() {
  return "" + vp.apply(this) + Kr(this.minutes(), 2) + Kr(this.seconds(), 2);
});
fe("Hmm", 0, 0, function() {
  return "" + this.hours() + Kr(this.minutes(), 2);
});
fe("Hmmss", 0, 0, function() {
  return "" + this.hours() + Kr(this.minutes(), 2) + Kr(this.seconds(), 2);
});
function F1(e, t) {
  fe(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
F1("a", !0);
F1("A", !1);
function $1(e, t) {
  return t._meridiemParse;
}
te("a", $1);
te("A", $1);
te("H", ht, pp);
te("h", ht, _a);
te("k", ht, _a);
te("HH", ht, zn);
te("hh", ht, zn);
te("kk", ht, zn);
te("hmm", O1);
te("hmmss", P1);
te("Hmm", O1);
te("Hmmss", P1);
Ze(["H", "HH"], At);
Ze(["k", "kk"], function(e, t, n) {
  var r = Re(e);
  t[At] = r === 24 ? 0 : r;
});
Ze(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Ze(["h", "hh"], function(e, t, n) {
  t[At] = Re(e), Oe(n).bigHour = !0;
});
Ze("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[At] = Re(e.substr(0, r)), t[br] = Re(e.substr(r)), Oe(n).bigHour = !0;
});
Ze("hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[At] = Re(e.substr(0, r)), t[br] = Re(e.substr(r, 2)), t[ai] = Re(e.substr(i)), Oe(n).bigHour = !0;
});
Ze("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[At] = Re(e.substr(0, r)), t[br] = Re(e.substr(r));
});
Ze("Hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[At] = Re(e.substr(0, r)), t[br] = Re(e.substr(r, 2)), t[ai] = Re(e.substr(i));
});
function x3(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var S3 = /[ap]\.?m?\.?/i, C3 = ba("Hours", !0);
function E3(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var H1 = {
  calendar: pA,
  longDateFormat: vA,
  invalidDate: bA,
  ordinal: kA,
  dayOfMonthOrdinalParse: xA,
  relativeTime: CA,
  months: zA,
  monthsShort: M1,
  week: QA,
  weekdays: a3,
  weekdaysMin: s3,
  weekdaysShort: K1,
  meridiemParse: S3
}, vt = {}, qa = {}, ms;
function O3(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function hv(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function P3(e) {
  for (var t = 0, n, r, i, a; t < e.length; ) {
    for (a = hv(e[t]).split("-"), n = a.length, r = hv(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (i = rc(a.slice(0, n).join("-")), i)
        return i;
      if (r && r.length >= n && O3(a, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return ms;
}
function I3(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function rc(e) {
  var t = null, n;
  if (vt[e] === void 0 && typeof module < "u" && module && module.exports && I3(e))
    try {
      t = ms._abbr, n = require, n("./locale/" + e), Hi(t);
    } catch {
      vt[e] = null;
    }
  return vt[e];
}
function Hi(e, t) {
  var n;
  return e && (yn(t) ? n = _i(e) : n = _p(e, t), n ? ms = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ms._abbr;
}
function _p(e, t) {
  if (t !== null) {
    var n, r = H1;
    if (t.abbr = e, vt[e] != null)
      x1(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = vt[e]._config;
    else if (t.parentLocale != null)
      if (vt[t.parentLocale] != null)
        r = vt[t.parentLocale]._config;
      else if (n = rc(t.parentLocale), n != null)
        r = n._config;
      else
        return qa[t.parentLocale] || (qa[t.parentLocale] = []), qa[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return vt[e] = new up(Rd(r, t)), qa[e] && qa[e].forEach(function(i) {
      _p(i.name, i.config);
    }), Hi(e), vt[e];
  } else
    return delete vt[e], null;
}
function T3(e, t) {
  if (t != null) {
    var n, r, i = H1;
    vt[e] != null && vt[e].parentLocale != null ? vt[e].set(Rd(vt[e]._config, t)) : (r = rc(e), r != null && (i = r._config), t = Rd(i, t), r == null && (t.abbr = e), n = new up(t), n.parentLocale = vt[e], vt[e] = n), Hi(e);
  } else
    vt[e] != null && (vt[e].parentLocale != null ? (vt[e] = vt[e].parentLocale, e === Hi() && Hi(e)) : vt[e] != null && delete vt[e]);
  return vt[e];
}
function _i(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ms;
  if (!xr(e)) {
    if (t = rc(e), t)
      return t;
    e = [e];
  }
  return P3(e);
}
function M3() {
  return Nd(vt);
}
function bp(e) {
  var t, n = e._a;
  return n && Oe(e).overflow === -2 && (t = n[oi] < 0 || n[oi] > 11 ? oi : n[Ar] < 1 || n[Ar] > gp(n[Xt], n[oi]) ? Ar : n[At] < 0 || n[At] > 24 || n[At] === 24 && (n[br] !== 0 || n[ai] !== 0 || n[fo] !== 0) ? At : n[br] < 0 || n[br] > 59 ? br : n[ai] < 0 || n[ai] > 59 ? ai : n[fo] < 0 || n[fo] > 999 ? fo : -1, Oe(e)._overflowDayOfYear && (t < Xt || t > Ar) && (t = Ar), Oe(e)._overflowWeeks && t === -1 && (t = RA), Oe(e)._overflowWeekday && t === -1 && (t = NA), Oe(e).overflow = t), e;
}
var A3 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, D3 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, L3 = /Z|[+-]\d\d(?::?\d\d)?/, Kl = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], qf = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], R3 = /^\/?Date\((-?\d+)/i, N3 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, K3 = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function z1(e) {
  var t, n, r = e._i, i = A3.exec(r) || D3.exec(r), a, l, u, f, d = Kl.length, p = qf.length;
  if (i) {
    for (Oe(e).iso = !0, t = 0, n = d; t < n; t++)
      if (Kl[t][1].exec(i[1])) {
        l = Kl[t][0], a = Kl[t][2] !== !1;
        break;
      }
    if (l == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, n = p; t < n; t++)
        if (qf[t][1].exec(i[3])) {
          u = (i[2] || " ") + qf[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && u != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (L3.exec(i[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = l + (u || "") + (f || ""), kp(e);
  } else
    e._isValid = !1;
}
function F3(e, t, n, r, i, a) {
  var l = [
    $3(e),
    M1.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(i, 10)
  ];
  return a && l.push(parseInt(a, 10)), l;
}
function $3(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function H3(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function z3(e, t, n) {
  if (e) {
    var r = K1.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== i)
      return Oe(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function B3(e, t, n) {
  if (e)
    return K3[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), i = r % 100, a = (r - i) / 100;
  return a * 60 + i;
}
function B1(e) {
  var t = N3.exec(H3(e._i)), n;
  if (t) {
    if (n = F3(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !z3(t[1], n, e))
      return;
    e._a = n, e._tzm = B3(t[8], t[9], t[10]), e._d = gs.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Oe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function U3(e) {
  var t = R3.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (z1(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (B1(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : J.createFromInputFallback(e);
}
J.createFromInputFallback = hr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function qo(e, t, n) {
  return e ?? t ?? n;
}
function j3(e) {
  var t = new Date(J.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function wp(e) {
  var t, n, r = [], i, a, l;
  if (!e._d) {
    for (i = j3(e), e._w && e._a[Ar] == null && e._a[oi] == null && W3(e), e._dayOfYear != null && (l = qo(e._a[Xt], i[Xt]), (e._dayOfYear > rs(l) || e._dayOfYear === 0) && (Oe(e)._overflowDayOfYear = !0), n = gs(l, 0, e._dayOfYear), e._a[oi] = n.getUTCMonth(), e._a[Ar] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[At] === 24 && e._a[br] === 0 && e._a[ai] === 0 && e._a[fo] === 0 && (e._nextDay = !0, e._a[At] = 0), e._d = (e._useUTC ? gs : ZA).apply(
      null,
      r
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[At] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (Oe(e).weekdayMismatch = !0);
  }
}
function W3(e) {
  var t, n, r, i, a, l, u, f, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, l = 4, n = qo(
    t.GG,
    e._a[Xt],
    ys(dt(), 1, 4).year
  ), r = qo(t.W, 1), i = qo(t.E, 1), (i < 1 || i > 7) && (f = !0)) : (a = e._locale._week.dow, l = e._locale._week.doy, d = ys(dt(), a, l), n = qo(t.gg, e._a[Xt], d.year), r = qo(t.w, d.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (f = !0)) : t.e != null ? (i = t.e + a, (t.e < 0 || t.e > 6) && (f = !0)) : i = a), r < 1 || r > ci(n, a, l) ? Oe(e)._overflowWeeks = !0 : f != null ? Oe(e)._overflowWeekday = !0 : (u = N1(n, r, i, a, l), e._a[Xt] = u.year, e._dayOfYear = u.dayOfYear);
}
J.ISO_8601 = function() {
};
J.RFC_2822 = function() {
};
function kp(e) {
  if (e._f === J.ISO_8601) {
    z1(e);
    return;
  }
  if (e._f === J.RFC_2822) {
    B1(e);
    return;
  }
  e._a = [], Oe(e).empty = !0;
  var t = "" + e._i, n, r, i, a, l, u = t.length, f = 0, d, p;
  for (i = S1(e._f, e._locale).match(cp) || [], p = i.length, n = 0; n < p; n++)
    a = i[n], r = (t.match(AA(a, e)) || [])[0], r && (l = t.substr(0, t.indexOf(r)), l.length > 0 && Oe(e).unusedInput.push(l), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), ta[a] ? (r ? Oe(e).empty = !1 : Oe(e).unusedTokens.push(a), LA(a, r, e)) : e._strict && !r && Oe(e).unusedTokens.push(a);
  Oe(e).charsLeftOver = u - f, t.length > 0 && Oe(e).unusedInput.push(t), e._a[At] <= 12 && Oe(e).bigHour === !0 && e._a[At] > 0 && (Oe(e).bigHour = void 0), Oe(e).parsedDateParts = e._a.slice(0), Oe(e).meridiem = e._meridiem, e._a[At] = Y3(
    e._locale,
    e._a[At],
    e._meridiem
  ), d = Oe(e).era, d !== null && (e._a[Xt] = e._locale.erasConvertYear(d, e._a[Xt])), wp(e), bp(e);
}
function Y3(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function G3(e) {
  var t, n, r, i, a, l, u = !1, f = e._f.length;
  if (f === 0) {
    Oe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < f; i++)
    a = 0, l = !1, t = lp({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], kp(t), sp(t) && (l = !0), a += Oe(t).charsLeftOver, a += Oe(t).unusedTokens.length * 10, Oe(t).score = a, u ? a < r && (r = a, n = t) : (r == null || a < r || l) && (r = a, n = t, l && (u = !0));
  Fi(e, n || t);
}
function q3(e) {
  if (!e._d) {
    var t = fp(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = w1(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), wp(e);
  }
}
function V3(e) {
  var t = new Fs(bp(U1(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function U1(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || _i(e._l), t === null || n === void 0 && t === "" ? Xu({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Sr(t) ? new Fs(bp(t)) : (Ks(t) ? e._d = t : xr(n) ? G3(e) : n ? kp(e) : X3(e), sp(e) || (e._d = null), e));
}
function X3(e) {
  var t = e._i;
  yn(t) ? e._d = new Date(J.now()) : Ks(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? U3(e) : xr(t) ? (e._a = w1(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), wp(e)) : go(t) ? q3(e) : pi(t) ? e._d = new Date(t) : J.createFromInputFallback(e);
}
function j1(e, t, n, r, i) {
  var a = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (go(e) && ap(e) || xr(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = r, V3(a);
}
function dt(e, t, n, r) {
  return j1(e, t, n, r, !1);
}
var Z3 = hr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = dt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Xu();
  }
), J3 = hr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = dt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Xu();
  }
);
function W1(e, t) {
  var n, r;
  if (t.length === 1 && xr(t[0]) && (t = t[0]), !t.length)
    return dt();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function Q3() {
  var e = [].slice.call(arguments, 0);
  return W1("isBefore", e);
}
function eD() {
  var e = [].slice.call(arguments, 0);
  return W1("isAfter", e);
}
var tD = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Va = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function nD(e) {
  var t, n = !1, r, i = Va.length;
  for (t in e)
    if (ze(e, t) && !(Ct.call(Va, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < i; ++r)
    if (e[Va[r]]) {
      if (n)
        return !1;
      parseFloat(e[Va[r]]) !== Re(e[Va[r]]) && (n = !0);
    }
  return !0;
}
function rD() {
  return this._isValid;
}
function iD() {
  return Cr(NaN);
}
function ic(e) {
  var t = fp(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, a = t.week || t.isoWeek || 0, l = t.day || 0, u = t.hour || 0, f = t.minute || 0, d = t.second || 0, p = t.millisecond || 0;
  this._isValid = nD(t), this._milliseconds = +p + d * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +l + a * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = _i(), this._bubble();
}
function Xl(e) {
  return e instanceof ic;
}
function Fd(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function oD(e, t, n) {
  var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), a = 0, l;
  for (l = 0; l < r; l++)
    Re(e[l]) !== Re(t[l]) && a++;
  return a + i;
}
function Y1(e, t) {
  fe(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Kr(~~(n / 60), 2) + t + Kr(~~n % 60, 2);
  });
}
Y1("Z", ":");
Y1("ZZ", "");
te("Z", tc);
te("ZZ", tc);
Ze(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = xp(tc, e);
});
var aD = /([\+\-]|\d\d)/gi;
function xp(e, t) {
  var n = (t || "").match(e), r, i, a;
  return n === null ? null : (r = n[n.length - 1] || [], i = (r + "").match(aD) || ["-", 0, 0], a = +(i[1] * 60) + Re(i[2]), a === 0 ? 0 : i[0] === "+" ? a : -a);
}
function Sp(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Sr(e) || Ks(e) ? e.valueOf() : dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), J.updateOffset(n, !1), n) : dt(e).local();
}
function $d(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
J.updateOffset = function() {
};
function sD(e, t, n) {
  var r = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = xp(tc, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (i = $d(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? V1(
      this,
      Cr(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, J.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : $d(this);
}
function lD(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function uD(e) {
  return this.utcOffset(0, e);
}
function cD(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract($d(this), "m")), this;
}
function fD() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = xp(TA, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function dD(e) {
  return this.isValid() ? (e = e ? dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function hD() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function pD() {
  if (!yn(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return lp(e, this), e = U1(e), e._a ? (t = e._isUTC ? zr(e._a) : dt(e._a), this._isDSTShifted = this.isValid() && oD(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function gD() {
  return this.isValid() ? !this._isUTC : !1;
}
function yD() {
  return this.isValid() ? this._isUTC : !1;
}
function G1() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var mD = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, vD = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Cr(e, t) {
  var n = e, r = null, i, a, l;
  return Xl(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pi(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = mD.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Re(r[Ar]) * i,
    h: Re(r[At]) * i,
    m: Re(r[br]) * i,
    s: Re(r[ai]) * i,
    ms: Re(Fd(r[fo] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (r = vD.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: oo(r[2], i),
    M: oo(r[3], i),
    w: oo(r[4], i),
    d: oo(r[5], i),
    h: oo(r[6], i),
    m: oo(r[7], i),
    s: oo(r[8], i)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (l = _D(
    dt(n.from),
    dt(n.to)
  ), n = {}, n.ms = l.milliseconds, n.M = l.months), a = new ic(n), Xl(e) && ze(e, "_locale") && (a._locale = e._locale), Xl(e) && ze(e, "_isValid") && (a._isValid = e._isValid), a;
}
Cr.fn = ic.prototype;
Cr.invalid = iD;
function oo(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function pv(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function _D(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Sp(t, e), e.isBefore(t) ? n = pv(e, t) : (n = pv(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function q1(e, t) {
  return function(n, r) {
    var i, a;
    return r !== null && !isNaN(+r) && (x1(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = n, n = r, r = a), i = Cr(n, r), V1(this, i, e), this;
  };
}
function V1(e, t, n, r) {
  var i = t._milliseconds, a = Fd(t._days), l = Fd(t._months);
  e.isValid() && (r = r ?? !0, l && D1(e, ps(e, "Month") + l * n), a && T1(e, "Date", ps(e, "Date") + a * n), i && e._d.setTime(e._d.valueOf() + i * n), r && J.updateOffset(e, a || l));
}
var bD = q1(1, "add"), wD = q1(-1, "subtract");
function X1(e) {
  return typeof e == "string" || e instanceof String;
}
function kD(e) {
  return Sr(e) || Ks(e) || X1(e) || pi(e) || SD(e) || xD(e) || e === null || e === void 0;
}
function xD(e) {
  var t = go(e) && !ap(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, a, l = r.length;
  for (i = 0; i < l; i += 1)
    a = r[i], n = n || ze(e, a);
  return t && n;
}
function SD(e) {
  var t = xr(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !pi(r) && X1(e);
  }).length === 0), t && n;
}
function CD(e) {
  var t = go(e) && !ap(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, a;
  for (i = 0; i < r.length; i += 1)
    a = r[i], n = n || ze(e, a);
  return t && n;
}
function ED(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function OD(e, t) {
  arguments.length === 1 && (arguments[0] ? kD(arguments[0]) ? (e = arguments[0], t = void 0) : CD(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || dt(), r = Sp(n, this).startOf("day"), i = J.calendarFormat(this, r) || "sameElse", a = t && (Br(t[i]) ? t[i].call(this, n) : t[i]);
  return this.format(
    a || this.localeData().calendar(i, this, dt(n))
  );
}
function PD() {
  return new Fs(this);
}
function ID(e, t) {
  var n = Sr(e) ? e : dt(e);
  return this.isValid() && n.isValid() ? (t = pr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function TD(e, t) {
  var n = Sr(e) ? e : dt(e);
  return this.isValid() && n.isValid() ? (t = pr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function MD(e, t, n, r) {
  var i = Sr(e) ? e : dt(e), a = Sr(t) ? t : dt(t);
  return this.isValid() && i.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n))) : !1;
}
function AD(e, t) {
  var n = Sr(e) ? e : dt(e), r;
  return this.isValid() && n.isValid() ? (t = pr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function DD(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function LD(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function RD(e, t, n) {
  var r, i, a;
  if (!this.isValid())
    return NaN;
  if (r = Sp(e, this), !r.isValid())
    return NaN;
  switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = pr(t), t) {
    case "year":
      a = Zl(this, r) / 12;
      break;
    case "month":
      a = Zl(this, r);
      break;
    case "quarter":
      a = Zl(this, r) / 3;
      break;
    case "second":
      a = (this - r) / 1e3;
      break;
    case "minute":
      a = (this - r) / 6e4;
      break;
    case "hour":
      a = (this - r) / 36e5;
      break;
    case "day":
      a = (this - r - i) / 864e5;
      break;
    case "week":
      a = (this - r - i) / 6048e5;
      break;
    default:
      a = this - r;
  }
  return n ? a : tr(a);
}
function Zl(e, t) {
  if (e.date() < t.date())
    return -Zl(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), i, a;
  return t - r < 0 ? (i = e.clone().add(n - 1, "months"), a = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), a = (t - r) / (i - r)), -(n + a) || 0;
}
J.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
J.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ND() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function KD(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Vl(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Br(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Vl(n, "Z")) : Vl(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function FD() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, i, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(n + r + i + a);
}
function $D(e) {
  e || (e = this.isUtc() ? J.defaultFormatUtc : J.defaultFormat);
  var t = Vl(this, e);
  return this.localeData().postformat(t);
}
function HD(e, t) {
  return this.isValid() && (Sr(e) && e.isValid() || dt(e).isValid()) ? Cr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function zD(e) {
  return this.from(dt(), e);
}
function BD(e, t) {
  return this.isValid() && (Sr(e) && e.isValid() || dt(e).isValid()) ? Cr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function UD(e) {
  return this.to(dt(), e);
}
function Z1(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = _i(e), t != null && (this._locale = t), this);
}
var J1 = hr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Q1() {
  return this._locale;
}
var Eu = 1e3, na = 60 * Eu, Ou = 60 * na, e0 = (365 * 400 + 97) * 24 * Ou;
function ra(e, t) {
  return (e % t + t) % t;
}
function t0(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - e0 : new Date(e, t, n).valueOf();
}
function n0(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - e0 : Date.UTC(e, t, n);
}
function jD(e) {
  var t, n;
  if (e = pr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? n0 : t0, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ra(
        t + (this._isUTC ? 0 : this.utcOffset() * na),
        Ou
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ra(t, na);
      break;
    case "second":
      t = this._d.valueOf(), t -= ra(t, Eu);
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function WD(e) {
  var t, n;
  if (e = pr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? n0 : t0, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ou - ra(
        t + (this._isUTC ? 0 : this.utcOffset() * na),
        Ou
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += na - ra(t, na) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Eu - ra(t, Eu) - 1;
      break;
  }
  return this._d.setTime(t), J.updateOffset(this, !0), this;
}
function YD() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function GD() {
  return Math.floor(this.valueOf() / 1e3);
}
function qD() {
  return new Date(this.valueOf());
}
function VD() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function XD() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function ZD() {
  return this.isValid() ? this.toISOString() : null;
}
function JD() {
  return sp(this);
}
function QD() {
  return Fi({}, Oe(this));
}
function eL() {
  return Oe(this).overflow;
}
function tL() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
fe("N", 0, 0, "eraAbbr");
fe("NN", 0, 0, "eraAbbr");
fe("NNN", 0, 0, "eraAbbr");
fe("NNNN", 0, 0, "eraName");
fe("NNNNN", 0, 0, "eraNarrow");
fe("y", ["y", 1], "yo", "eraYear");
fe("y", ["yy", 2], 0, "eraYear");
fe("y", ["yyy", 3], 0, "eraYear");
fe("y", ["yyyy", 4], 0, "eraYear");
te("N", Cp);
te("NN", Cp);
te("NNN", Cp);
te("NNNN", dL);
te("NNNNN", hL);
Ze(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    i ? Oe(n).era = i : Oe(n).invalidEra = e;
  }
);
te("y", va);
te("yy", va);
te("yyy", va);
te("yyyy", va);
te("yo", pL);
Ze(["y", "yy", "yyy", "yyyy"], Xt);
Ze(["yo"], function(e, t, n, r) {
  var i;
  n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Xt] = n._locale.eraYearOrdinalParse(e, i) : t[Xt] = parseInt(e, 10);
});
function nL(e, t) {
  var n, r, i, a = this._eras || _i("en")._eras;
  for (n = 0, r = a.length; n < r; ++n) {
    switch (typeof a[n].since) {
      case "string":
        i = J(a[n].since).startOf("day"), a[n].since = i.valueOf();
        break;
    }
    switch (typeof a[n].until) {
      case "undefined":
        a[n].until = 1 / 0;
        break;
      case "string":
        i = J(a[n].until).startOf("day").valueOf(), a[n].until = i.valueOf();
        break;
    }
  }
  return a;
}
function rL(e, t, n) {
  var r, i, a = this.eras(), l, u, f;
  for (e = e.toUpperCase(), r = 0, i = a.length; r < i; ++r)
    if (l = a[r].name.toUpperCase(), u = a[r].abbr.toUpperCase(), f = a[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return a[r];
          break;
        case "NNNN":
          if (l === e)
            return a[r];
          break;
        case "NNNNN":
          if (f === e)
            return a[r];
          break;
      }
    else if ([l, u, f].indexOf(e) >= 0)
      return a[r];
}
function iL(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? J(e.since).year() : J(e.since).year() + (t - e.offset) * n;
}
function oL() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function aL() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function sL() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function lL() {
  var e, t, n, r, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since)
      return (this.year() - J(i[e].since).year()) * n + i[e].offset;
  return this.year();
}
function uL(e) {
  return ze(this, "_erasNameRegex") || Ep.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function cL(e) {
  return ze(this, "_erasAbbrRegex") || Ep.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function fL(e) {
  return ze(this, "_erasNarrowRegex") || Ep.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Cp(e, t) {
  return t.erasAbbrRegex(e);
}
function dL(e, t) {
  return t.erasNameRegex(e);
}
function hL(e, t) {
  return t.erasNarrowRegex(e);
}
function pL(e, t) {
  return t._eraYearOrdinalRegex || va;
}
function Ep() {
  var e = [], t = [], n = [], r = [], i, a, l, u, f, d = this.eras();
  for (i = 0, a = d.length; i < a; ++i)
    l = ui(d[i].name), u = ui(d[i].abbr), f = ui(d[i].narrow), t.push(l), e.push(u), n.push(f), r.push(l), r.push(u), r.push(f);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
fe(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
fe(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function oc(e, t) {
  fe(0, [e, e.length], 0, t);
}
oc("gggg", "weekYear");
oc("ggggg", "weekYear");
oc("GGGG", "isoWeekYear");
oc("GGGGG", "isoWeekYear");
te("G", ec);
te("g", ec);
te("GG", ht, zn);
te("gg", ht, zn);
te("GGGG", hp, dp);
te("gggg", hp, dp);
te("GGGGG", Qu, Zu);
te("ggggg", Qu, Zu);
Hs(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Re(e);
  }
);
Hs(["gg", "GG"], function(e, t, n, r) {
  t[r] = J.parseTwoDigitYear(e);
});
function gL(e) {
  return r0.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function yL(e) {
  return r0.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function mL() {
  return ci(this.year(), 1, 4);
}
function vL() {
  return ci(this.isoWeekYear(), 1, 4);
}
function _L() {
  var e = this.localeData()._week;
  return ci(this.year(), e.dow, e.doy);
}
function bL() {
  var e = this.localeData()._week;
  return ci(this.weekYear(), e.dow, e.doy);
}
function r0(e, t, n, r, i) {
  var a;
  return e == null ? ys(this, r, i).year : (a = ci(e, r, i), t > a && (t = a), wL.call(this, e, t, n, r, i));
}
function wL(e, t, n, r, i) {
  var a = N1(e, t, n, r, i), l = gs(a.year, 0, a.dayOfYear);
  return this.year(l.getUTCFullYear()), this.month(l.getUTCMonth()), this.date(l.getUTCDate()), this;
}
fe("Q", 0, "Qo", "quarter");
te("Q", C1);
Ze("Q", function(e, t) {
  t[oi] = (Re(e) - 1) * 3;
});
function kL(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
fe("D", ["DD", 2], "Do", "date");
te("D", ht, _a);
te("DD", ht, zn);
te("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ze(["D", "DD"], Ar);
Ze("Do", function(e, t) {
  t[Ar] = Re(e.match(ht)[0]);
});
var i0 = ba("Date", !0);
fe("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
te("DDD", Ju);
te("DDDD", E1);
Ze(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Re(e);
});
function xL(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
fe("m", ["mm", 2], 0, "minute");
te("m", ht, pp);
te("mm", ht, zn);
Ze(["m", "mm"], br);
var SL = ba("Minutes", !1);
fe("s", ["ss", 2], 0, "second");
te("s", ht, pp);
te("ss", ht, zn);
Ze(["s", "ss"], ai);
var CL = ba("Seconds", !1);
fe("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
fe(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
fe(0, ["SSS", 3], 0, "millisecond");
fe(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
fe(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
fe(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
fe(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
fe(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
fe(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
te("S", Ju, C1);
te("SS", Ju, zn);
te("SSS", Ju, E1);
var $i, o0;
for ($i = "SSSS"; $i.length <= 9; $i += "S")
  te($i, va);
function EL(e, t) {
  t[fo] = Re(("0." + e) * 1e3);
}
for ($i = "S"; $i.length <= 9; $i += "S")
  Ze($i, EL);
o0 = ba("Milliseconds", !1);
fe("z", 0, 0, "zoneAbbr");
fe("zz", 0, 0, "zoneName");
function OL() {
  return this._isUTC ? "UTC" : "";
}
function PL() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var G = Fs.prototype;
G.add = bD;
G.calendar = OD;
G.clone = PD;
G.diff = RD;
G.endOf = WD;
G.format = $D;
G.from = HD;
G.fromNow = zD;
G.to = BD;
G.toNow = UD;
G.get = FA;
G.invalidAt = eL;
G.isAfter = ID;
G.isBefore = TD;
G.isBetween = MD;
G.isSame = AD;
G.isSameOrAfter = DD;
G.isSameOrBefore = LD;
G.isValid = JD;
G.lang = J1;
G.locale = Z1;
G.localeData = Q1;
G.max = J3;
G.min = Z3;
G.parsingFlags = QD;
G.set = $A;
G.startOf = jD;
G.subtract = wD;
G.toArray = VD;
G.toObject = XD;
G.toDate = qD;
G.toISOString = KD;
G.inspect = FD;
typeof Symbol < "u" && Symbol.for != null && (G[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
G.toJSON = ZD;
G.toString = ND;
G.unix = GD;
G.valueOf = YD;
G.creationData = tL;
G.eraName = oL;
G.eraNarrow = aL;
G.eraAbbr = sL;
G.eraYear = lL;
G.year = I1;
G.isLeapYear = KA;
G.weekYear = gL;
G.isoWeekYear = yL;
G.quarter = G.quarters = kL;
G.month = L1;
G.daysInMonth = qA;
G.week = G.weeks = n3;
G.isoWeek = G.isoWeeks = r3;
G.weeksInYear = _L;
G.weeksInWeekYear = bL;
G.isoWeeksInYear = mL;
G.isoWeeksInISOWeekYear = vL;
G.date = i0;
G.day = G.days = y3;
G.weekday = m3;
G.isoWeekday = v3;
G.dayOfYear = xL;
G.hour = G.hours = C3;
G.minute = G.minutes = SL;
G.second = G.seconds = CL;
G.millisecond = G.milliseconds = o0;
G.utcOffset = sD;
G.utc = uD;
G.local = cD;
G.parseZone = fD;
G.hasAlignedHourOffset = dD;
G.isDST = hD;
G.isLocal = gD;
G.isUtcOffset = yD;
G.isUtc = G1;
G.isUTC = G1;
G.zoneAbbr = OL;
G.zoneName = PL;
G.dates = hr(
  "dates accessor is deprecated. Use date instead.",
  i0
);
G.months = hr(
  "months accessor is deprecated. Use month instead",
  L1
);
G.years = hr(
  "years accessor is deprecated. Use year instead",
  I1
);
G.zone = hr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  lD
);
G.isDSTShifted = hr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  pD
);
function IL(e) {
  return dt(e * 1e3);
}
function TL() {
  return dt.apply(null, arguments).parseZone();
}
function a0(e) {
  return e;
}
var Be = up.prototype;
Be.calendar = gA;
Be.longDateFormat = _A;
Be.invalidDate = wA;
Be.ordinal = SA;
Be.preparse = a0;
Be.postformat = a0;
Be.relativeTime = EA;
Be.pastFuture = OA;
Be.set = hA;
Be.eras = nL;
Be.erasParse = rL;
Be.erasConvertYear = iL;
Be.erasAbbrRegex = cL;
Be.erasNameRegex = uL;
Be.erasNarrowRegex = fL;
Be.months = jA;
Be.monthsShort = WA;
Be.monthsParse = GA;
Be.monthsRegex = XA;
Be.monthsShortRegex = VA;
Be.week = JA;
Be.firstDayOfYear = t3;
Be.firstDayOfWeek = e3;
Be.weekdays = f3;
Be.weekdaysMin = h3;
Be.weekdaysShort = d3;
Be.weekdaysParse = g3;
Be.weekdaysRegex = _3;
Be.weekdaysShortRegex = b3;
Be.weekdaysMinRegex = w3;
Be.isPM = x3;
Be.meridiem = E3;
function Pu(e, t, n, r) {
  var i = _i(), a = zr().set(r, t);
  return i[n](a, e);
}
function s0(e, t, n) {
  if (pi(e) && (t = e, e = void 0), e = e || "", t != null)
    return Pu(e, t, n, "month");
  var r, i = [];
  for (r = 0; r < 12; r++)
    i[r] = Pu(e, r, n, "month");
  return i;
}
function Op(e, t, n, r) {
  typeof e == "boolean" ? (pi(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, pi(t) && (n = t, t = void 0), t = t || "");
  var i = _i(), a = e ? i._week.dow : 0, l, u = [];
  if (n != null)
    return Pu(t, (n + a) % 7, r, "day");
  for (l = 0; l < 7; l++)
    u[l] = Pu(t, (l + a) % 7, r, "day");
  return u;
}
function ML(e, t) {
  return s0(e, t, "months");
}
function AL(e, t) {
  return s0(e, t, "monthsShort");
}
function DL(e, t, n) {
  return Op(e, t, n, "weekdays");
}
function LL(e, t, n) {
  return Op(e, t, n, "weekdaysShort");
}
function RL(e, t, n) {
  return Op(e, t, n, "weekdaysMin");
}
Hi("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = Re(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
J.lang = hr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Hi
);
J.langData = hr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  _i
);
var ni = Math.abs;
function NL() {
  var e = this._data;
  return this._milliseconds = ni(this._milliseconds), this._days = ni(this._days), this._months = ni(this._months), e.milliseconds = ni(e.milliseconds), e.seconds = ni(e.seconds), e.minutes = ni(e.minutes), e.hours = ni(e.hours), e.months = ni(e.months), e.years = ni(e.years), this;
}
function l0(e, t, n, r) {
  var i = Cr(t, n);
  return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble();
}
function KL(e, t) {
  return l0(this, e, t, 1);
}
function FL(e, t) {
  return l0(this, e, t, -1);
}
function gv(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function $L() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, a, l, u, f;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += gv(Hd(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = tr(e / 1e3), r.seconds = i % 60, a = tr(i / 60), r.minutes = a % 60, l = tr(a / 60), r.hours = l % 24, t += tr(l / 24), f = tr(u0(t)), n += f, t -= gv(Hd(f)), u = tr(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this;
}
function u0(e) {
  return e * 4800 / 146097;
}
function Hd(e) {
  return e * 146097 / 4800;
}
function HL(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = pr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + u0(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Hd(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function bi(e) {
  return function() {
    return this.as(e);
  };
}
var c0 = bi("ms"), zL = bi("s"), BL = bi("m"), UL = bi("h"), jL = bi("d"), WL = bi("w"), YL = bi("M"), GL = bi("Q"), qL = bi("y"), VL = c0;
function XL() {
  return Cr(this);
}
function ZL(e) {
  return e = pr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function So(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var JL = So("milliseconds"), QL = So("seconds"), eR = So("minutes"), tR = So("hours"), nR = So("days"), rR = So("months"), iR = So("years");
function oR() {
  return tr(this.days() / 7);
}
var ri = Math.round, Zo = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function aR(e, t, n, r, i) {
  return i.relativeTime(t || 1, !!n, e, r);
}
function sR(e, t, n, r) {
  var i = Cr(e).abs(), a = ri(i.as("s")), l = ri(i.as("m")), u = ri(i.as("h")), f = ri(i.as("d")), d = ri(i.as("M")), p = ri(i.as("w")), g = ri(i.as("y")), _ = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || l <= 1 && ["m"] || l < n.m && ["mm", l] || u <= 1 && ["h"] || u < n.h && ["hh", u] || f <= 1 && ["d"] || f < n.d && ["dd", f];
  return n.w != null && (_ = _ || p <= 1 && ["w"] || p < n.w && ["ww", p]), _ = _ || d <= 1 && ["M"] || d < n.M && ["MM", d] || g <= 1 && ["y"] || ["yy", g], _[2] = t, _[3] = +e > 0, _[4] = r, aR.apply(null, _);
}
function lR(e) {
  return e === void 0 ? ri : typeof e == "function" ? (ri = e, !0) : !1;
}
function uR(e, t) {
  return Zo[e] === void 0 ? !1 : t === void 0 ? Zo[e] : (Zo[e] = t, e === "s" && (Zo.ss = t - 1), !0);
}
function cR(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Zo, i, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Zo, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), a = sR(this, !n, r, i), n && (a = i.pastFuture(+this, a)), i.postformat(a);
}
var Vf = Math.abs;
function jo(e) {
  return (e > 0) - (e < 0) || +e;
}
function ac() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Vf(this._milliseconds) / 1e3, t = Vf(this._days), n = Vf(this._months), r, i, a, l, u = this.asSeconds(), f, d, p, g;
  return u ? (r = tr(e / 60), i = tr(r / 60), e %= 60, r %= 60, a = tr(n / 12), n %= 12, l = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", d = jo(this._months) !== jo(u) ? "-" : "", p = jo(this._days) !== jo(u) ? "-" : "", g = jo(this._milliseconds) !== jo(u) ? "-" : "", f + "P" + (a ? d + a + "Y" : "") + (n ? d + n + "M" : "") + (t ? p + t + "D" : "") + (i || r || e ? "T" : "") + (i ? g + i + "H" : "") + (r ? g + r + "M" : "") + (e ? g + l + "S" : "")) : "P0D";
}
var Fe = ic.prototype;
Fe.isValid = rD;
Fe.abs = NL;
Fe.add = KL;
Fe.subtract = FL;
Fe.as = HL;
Fe.asMilliseconds = c0;
Fe.asSeconds = zL;
Fe.asMinutes = BL;
Fe.asHours = UL;
Fe.asDays = jL;
Fe.asWeeks = WL;
Fe.asMonths = YL;
Fe.asQuarters = GL;
Fe.asYears = qL;
Fe.valueOf = VL;
Fe._bubble = $L;
Fe.clone = XL;
Fe.get = ZL;
Fe.milliseconds = JL;
Fe.seconds = QL;
Fe.minutes = eR;
Fe.hours = tR;
Fe.days = nR;
Fe.weeks = oR;
Fe.months = rR;
Fe.years = iR;
Fe.humanize = cR;
Fe.toISOString = ac;
Fe.toString = ac;
Fe.toJSON = ac;
Fe.locale = Z1;
Fe.localeData = Q1;
Fe.toIsoString = hr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ac
);
Fe.lang = J1;
fe("X", 0, 0, "unix");
fe("x", 0, 0, "valueOf");
te("x", ec);
te("X", MA);
Ze("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Ze("x", function(e, t, n) {
  n._d = new Date(Re(e));
});
//! moment.js
J.version = "2.30.1";
fA(dt);
J.fn = G;
J.min = Q3;
J.max = eD;
J.now = tD;
J.utc = zr;
J.unix = IL;
J.months = ML;
J.isDate = Ks;
J.locale = Hi;
J.invalid = Xu;
J.duration = Cr;
J.isMoment = Sr;
J.weekdays = DL;
J.parseZone = TL;
J.localeData = _i;
J.isDuration = Xl;
J.monthsShort = AL;
J.weekdaysMin = RL;
J.defineLocale = _p;
J.updateLocale = T3;
J.locales = M3;
J.weekdaysShort = LL;
J.normalizeUnits = pr;
J.relativeTimeRounding = lR;
J.relativeTimeThreshold = uR;
J.calendarFormat = ED;
J.prototype = G;
J.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function fR() {
  this.__data__ = [], this.size = 0;
}
var dR = fR;
function hR(e, t) {
  return e === t || e !== e && t !== t;
}
var Pp = hR, pR = Pp;
function gR(e, t) {
  for (var n = e.length; n--; )
    if (pR(e[n][0], t))
      return n;
  return -1;
}
var sc = gR, yR = sc, mR = Array.prototype, vR = mR.splice;
function _R(e) {
  var t = this.__data__, n = yR(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : vR.call(t, n, 1), --this.size, !0;
}
var bR = _R, wR = sc;
function kR(e) {
  var t = this.__data__, n = wR(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var xR = kR, SR = sc;
function CR(e) {
  return SR(this.__data__, e) > -1;
}
var ER = CR, OR = sc;
function PR(e, t) {
  var n = this.__data__, r = OR(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var IR = PR, TR = dR, MR = bR, AR = xR, DR = ER, LR = IR;
function wa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
wa.prototype.clear = TR;
wa.prototype.delete = MR;
wa.prototype.get = AR;
wa.prototype.has = DR;
wa.prototype.set = LR;
var lc = wa, RR = lc;
function NR() {
  this.__data__ = new RR(), this.size = 0;
}
var KR = NR;
function FR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var $R = FR;
function HR(e) {
  return this.__data__.get(e);
}
var zR = HR;
function BR(e) {
  return this.__data__.has(e);
}
var UR = BR;
function jR(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ip = jR, WR = Rs, YR = Ip, GR = "[object AsyncFunction]", qR = "[object Function]", VR = "[object GeneratorFunction]", XR = "[object Proxy]";
function ZR(e) {
  if (!YR(e))
    return !1;
  var t = WR(e);
  return t == qR || t == VR || t == GR || t == XR;
}
var f0 = ZR, JR = vi, QR = JR["__core-js_shared__"], eN = QR, Xf = eN, yv = function() {
  var e = /[^.]+$/.exec(Xf && Xf.keys && Xf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tN(e) {
  return !!yv && yv in e;
}
var nN = tN, rN = Function.prototype, iN = rN.toString;
function oN(e) {
  if (e != null) {
    try {
      return iN.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var d0 = oN, aN = f0, sN = nN, lN = Ip, uN = d0, cN = /[\\^$.*+?()[\]{}|]/g, fN = /^\[object .+?Constructor\]$/, dN = Function.prototype, hN = Object.prototype, pN = dN.toString, gN = hN.hasOwnProperty, yN = RegExp(
  "^" + pN.call(gN).replace(cN, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mN(e) {
  if (!lN(e) || sN(e))
    return !1;
  var t = aN(e) ? yN : fN;
  return t.test(uN(e));
}
var vN = mN;
function _N(e, t) {
  return e == null ? void 0 : e[t];
}
var bN = _N, wN = vN, kN = bN;
function xN(e, t) {
  var n = kN(e, t);
  return wN(n) ? n : void 0;
}
var Co = xN, SN = Co, CN = vi, EN = SN(CN, "Map"), Tp = EN, ON = Co, PN = ON(Object, "create"), uc = PN, mv = uc;
function IN() {
  this.__data__ = mv ? mv(null) : {}, this.size = 0;
}
var TN = IN;
function MN(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var AN = MN, DN = uc, LN = "__lodash_hash_undefined__", RN = Object.prototype, NN = RN.hasOwnProperty;
function KN(e) {
  var t = this.__data__;
  if (DN) {
    var n = t[e];
    return n === LN ? void 0 : n;
  }
  return NN.call(t, e) ? t[e] : void 0;
}
var FN = KN, $N = uc, HN = Object.prototype, zN = HN.hasOwnProperty;
function BN(e) {
  var t = this.__data__;
  return $N ? t[e] !== void 0 : zN.call(t, e);
}
var UN = BN, jN = uc, WN = "__lodash_hash_undefined__";
function YN(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = jN && t === void 0 ? WN : t, this;
}
var GN = YN, qN = TN, VN = AN, XN = FN, ZN = UN, JN = GN;
function ka(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ka.prototype.clear = qN;
ka.prototype.delete = VN;
ka.prototype.get = XN;
ka.prototype.has = ZN;
ka.prototype.set = JN;
var QN = ka, vv = QN, e4 = lc, t4 = Tp;
function n4() {
  this.size = 0, this.__data__ = {
    hash: new vv(),
    map: new (t4 || e4)(),
    string: new vv()
  };
}
var r4 = n4;
function i4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var o4 = i4, a4 = o4;
function s4(e, t) {
  var n = e.__data__;
  return a4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var cc = s4, l4 = cc;
function u4(e) {
  var t = l4(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var c4 = u4, f4 = cc;
function d4(e) {
  return f4(this, e).get(e);
}
var h4 = d4, p4 = cc;
function g4(e) {
  return p4(this, e).has(e);
}
var y4 = g4, m4 = cc;
function v4(e, t) {
  var n = m4(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var _4 = v4, b4 = r4, w4 = c4, k4 = h4, x4 = y4, S4 = _4;
function xa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xa.prototype.clear = b4;
xa.prototype.delete = w4;
xa.prototype.get = k4;
xa.prototype.has = x4;
xa.prototype.set = S4;
var Mp = xa, C4 = lc, E4 = Tp, O4 = Mp, P4 = 200;
function I4(e, t) {
  var n = this.__data__;
  if (n instanceof C4) {
    var r = n.__data__;
    if (!E4 || r.length < P4 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new O4(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var T4 = I4, M4 = lc, A4 = KR, D4 = $R, L4 = zR, R4 = UR, N4 = T4;
function Sa(e) {
  var t = this.__data__ = new M4(e);
  this.size = t.size;
}
Sa.prototype.clear = A4;
Sa.prototype.delete = D4;
Sa.prototype.get = L4;
Sa.prototype.has = R4;
Sa.prototype.set = N4;
var K4 = Sa, F4 = "__lodash_hash_undefined__";
function $4(e) {
  return this.__data__.set(e, F4), this;
}
var H4 = $4;
function z4(e) {
  return this.__data__.has(e);
}
var B4 = z4, U4 = Mp, j4 = H4, W4 = B4;
function Iu(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new U4(); ++t < n; )
    this.add(e[t]);
}
Iu.prototype.add = Iu.prototype.push = j4;
Iu.prototype.has = W4;
var Y4 = Iu;
function G4(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var q4 = G4;
function V4(e, t) {
  return e.has(t);
}
var X4 = V4, Z4 = Y4, J4 = q4, Q4 = X4, eK = 1, tK = 2;
function nK(e, t, n, r, i, a) {
  var l = n & eK, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var d = a.get(e), p = a.get(t);
  if (d && p)
    return d == t && p == e;
  var g = -1, _ = !0, y = n & tK ? new Z4() : void 0;
  for (a.set(e, t), a.set(t, e); ++g < u; ) {
    var k = e[g], x = t[g];
    if (r)
      var O = l ? r(x, k, g, t, e, a) : r(k, x, g, e, t, a);
    if (O !== void 0) {
      if (O)
        continue;
      _ = !1;
      break;
    }
    if (y) {
      if (!J4(t, function(S, M) {
        if (!Q4(y, M) && (k === S || i(k, S, n, r, a)))
          return y.push(M);
      })) {
        _ = !1;
        break;
      }
    } else if (!(k === x || i(k, x, n, r, a))) {
      _ = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), _;
}
var h0 = nK, rK = vi, iK = rK.Uint8Array, oK = iK;
function aK(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
var sK = aK;
function lK(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var uK = lK, _v = Vu, bv = oK, cK = Pp, fK = h0, dK = sK, hK = uK, pK = 1, gK = 2, yK = "[object Boolean]", mK = "[object Date]", vK = "[object Error]", _K = "[object Map]", bK = "[object Number]", wK = "[object RegExp]", kK = "[object Set]", xK = "[object String]", SK = "[object Symbol]", CK = "[object ArrayBuffer]", EK = "[object DataView]", wv = _v ? _v.prototype : void 0, Zf = wv ? wv.valueOf : void 0;
function OK(e, t, n, r, i, a, l) {
  switch (n) {
    case EK:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case CK:
      return !(e.byteLength != t.byteLength || !a(new bv(e), new bv(t)));
    case yK:
    case mK:
    case bK:
      return cK(+e, +t);
    case vK:
      return e.name == t.name && e.message == t.message;
    case wK:
    case xK:
      return e == t + "";
    case _K:
      var u = dK;
    case kK:
      var f = r & pK;
      if (u || (u = hK), e.size != t.size && !f)
        return !1;
      var d = l.get(e);
      if (d)
        return d == t;
      r |= gK, l.set(e, t);
      var p = fK(u(e), u(t), r, i, a, l);
      return l.delete(e), p;
    case SK:
      if (Zf)
        return Zf.call(e) == Zf.call(t);
  }
  return !1;
}
var PK = OK;
function IK(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var TK = IK, MK = TK, AK = ma;
function DK(e, t, n) {
  var r = t(e);
  return AK(e) ? r : MK(r, n(e));
}
var LK = DK;
function RK(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (a[i++] = l);
  }
  return a;
}
var NK = RK;
function KK() {
  return [];
}
var FK = KK, $K = NK, HK = FK, zK = Object.prototype, BK = zK.propertyIsEnumerable, kv = Object.getOwnPropertySymbols, UK = kv ? function(e) {
  return e == null ? [] : (e = Object(e), $K(kv(e), function(t) {
    return BK.call(e, t);
  }));
} : HK, jK = UK;
function WK(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var YK = WK, GK = Rs, qK = Ns, VK = "[object Arguments]";
function XK(e) {
  return qK(e) && GK(e) == VK;
}
var ZK = XK, xv = ZK, JK = Ns, p0 = Object.prototype, QK = p0.hasOwnProperty, eF = p0.propertyIsEnumerable, tF = xv(/* @__PURE__ */ function() {
  return arguments;
}()) ? xv : function(e) {
  return JK(e) && QK.call(e, "callee") && !eF.call(e, "callee");
}, nF = tF, Tu = { exports: {} };
function rF() {
  return !1;
}
var iF = rF;
Tu.exports;
(function(e, t) {
  var n = vi, r = iF, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, l = a && a.exports === i, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, d = f || r;
  e.exports = d;
})(Tu, Tu.exports);
var g0 = Tu.exports, oF = 9007199254740991, aF = /^(?:0|[1-9]\d*)$/;
function sF(e, t) {
  var n = typeof e;
  return t = t ?? oF, !!t && (n == "number" || n != "symbol" && aF.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var y0 = sF, lF = 9007199254740991;
function uF(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lF;
}
var m0 = uF, cF = Rs, fF = m0, dF = Ns, hF = "[object Arguments]", pF = "[object Array]", gF = "[object Boolean]", yF = "[object Date]", mF = "[object Error]", vF = "[object Function]", _F = "[object Map]", bF = "[object Number]", wF = "[object Object]", kF = "[object RegExp]", xF = "[object Set]", SF = "[object String]", CF = "[object WeakMap]", EF = "[object ArrayBuffer]", OF = "[object DataView]", PF = "[object Float32Array]", IF = "[object Float64Array]", TF = "[object Int8Array]", MF = "[object Int16Array]", AF = "[object Int32Array]", DF = "[object Uint8Array]", LF = "[object Uint8ClampedArray]", RF = "[object Uint16Array]", NF = "[object Uint32Array]", ct = {};
ct[PF] = ct[IF] = ct[TF] = ct[MF] = ct[AF] = ct[DF] = ct[LF] = ct[RF] = ct[NF] = !0;
ct[hF] = ct[pF] = ct[EF] = ct[gF] = ct[OF] = ct[yF] = ct[mF] = ct[vF] = ct[_F] = ct[bF] = ct[wF] = ct[kF] = ct[xF] = ct[SF] = ct[CF] = !1;
function KF(e) {
  return dF(e) && fF(e.length) && !!ct[cF(e)];
}
var FF = KF;
function $F(e) {
  return function(t) {
    return e(t);
  };
}
var HF = $F, Mu = { exports: {} };
Mu.exports;
(function(e, t) {
  var n = l1, r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, a = i && i.exports === r, l = a && n.process, u = function() {
    try {
      var f = i && i.require && i.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Mu, Mu.exports);
var zF = Mu.exports, BF = FF, UF = HF, Sv = zF, Cv = Sv && Sv.isTypedArray, jF = Cv ? UF(Cv) : BF, v0 = jF, WF = YK, YF = nF, GF = ma, qF = g0, VF = y0, XF = v0, ZF = Object.prototype, JF = ZF.hasOwnProperty;
function QF(e, t) {
  var n = GF(e), r = !n && YF(e), i = !n && !r && qF(e), a = !n && !r && !i && XF(e), l = n || r || i || a, u = l ? WF(e.length, String) : [], f = u.length;
  for (var d in e)
    (t || JF.call(e, d)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    VF(d, f))) && u.push(d);
  return u;
}
var e$ = QF, t$ = Object.prototype;
function n$(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || t$;
  return e === n;
}
var r$ = n$;
function i$(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var o$ = i$, a$ = o$, s$ = a$(Object.keys, Object), l$ = s$, u$ = r$, c$ = l$, f$ = Object.prototype, d$ = f$.hasOwnProperty;
function h$(e) {
  if (!u$(e))
    return c$(e);
  var t = [];
  for (var n in Object(e))
    d$.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var p$ = h$, g$ = f0, y$ = m0;
function m$(e) {
  return e != null && y$(e.length) && !g$(e);
}
var v$ = m$, _$ = e$, b$ = p$, w$ = v$;
function k$(e) {
  return w$(e) ? _$(e) : b$(e);
}
var x$ = k$, S$ = LK, C$ = jK, E$ = x$;
function O$(e) {
  return S$(e, E$, C$);
}
var P$ = O$, Ev = P$, I$ = 1, T$ = Object.prototype, M$ = T$.hasOwnProperty;
function A$(e, t, n, r, i, a) {
  var l = n & I$, u = Ev(e), f = u.length, d = Ev(t), p = d.length;
  if (f != p && !l)
    return !1;
  for (var g = f; g--; ) {
    var _ = u[g];
    if (!(l ? _ in t : M$.call(t, _)))
      return !1;
  }
  var y = a.get(e), k = a.get(t);
  if (y && k)
    return y == t && k == e;
  var x = !0;
  a.set(e, t), a.set(t, e);
  for (var O = l; ++g < f; ) {
    _ = u[g];
    var S = e[_], M = t[_];
    if (r)
      var T = l ? r(M, S, _, t, e, a) : r(S, M, _, e, t, a);
    if (!(T === void 0 ? S === M || i(S, M, n, r, a) : T)) {
      x = !1;
      break;
    }
    O || (O = _ == "constructor");
  }
  if (x && !O) {
    var L = e.constructor, K = t.constructor;
    L != K && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof K == "function" && K instanceof K) && (x = !1);
  }
  return a.delete(e), a.delete(t), x;
}
var D$ = A$, L$ = Co, R$ = vi, N$ = L$(R$, "DataView"), K$ = N$, F$ = Co, $$ = vi, H$ = F$($$, "Promise"), z$ = H$, B$ = Co, U$ = vi, j$ = B$(U$, "Set"), W$ = j$, Y$ = Co, G$ = vi, q$ = Y$(G$, "WeakMap"), V$ = q$, zd = K$, Bd = Tp, Ud = z$, jd = W$, Wd = V$, _0 = Rs, Ca = d0, Ov = "[object Map]", X$ = "[object Object]", Pv = "[object Promise]", Iv = "[object Set]", Tv = "[object WeakMap]", Mv = "[object DataView]", Z$ = Ca(zd), J$ = Ca(Bd), Q$ = Ca(Ud), eH = Ca(jd), tH = Ca(Wd), ao = _0;
(zd && ao(new zd(new ArrayBuffer(1))) != Mv || Bd && ao(new Bd()) != Ov || Ud && ao(Ud.resolve()) != Pv || jd && ao(new jd()) != Iv || Wd && ao(new Wd()) != Tv) && (ao = function(e) {
  var t = _0(e), n = t == X$ ? e.constructor : void 0, r = n ? Ca(n) : "";
  if (r)
    switch (r) {
      case Z$:
        return Mv;
      case J$:
        return Ov;
      case Q$:
        return Pv;
      case eH:
        return Iv;
      case tH:
        return Tv;
    }
  return t;
});
var nH = ao, Jf = K4, rH = h0, iH = PK, oH = D$, Av = nH, Dv = ma, Lv = g0, aH = v0, sH = 1, Rv = "[object Arguments]", Nv = "[object Array]", Fl = "[object Object]", lH = Object.prototype, Kv = lH.hasOwnProperty;
function uH(e, t, n, r, i, a) {
  var l = Dv(e), u = Dv(t), f = l ? Nv : Av(e), d = u ? Nv : Av(t);
  f = f == Rv ? Fl : f, d = d == Rv ? Fl : d;
  var p = f == Fl, g = d == Fl, _ = f == d;
  if (_ && Lv(e)) {
    if (!Lv(t))
      return !1;
    l = !0, p = !1;
  }
  if (_ && !p)
    return a || (a = new Jf()), l || aH(e) ? rH(e, t, n, r, i, a) : iH(e, t, f, n, r, i, a);
  if (!(n & sH)) {
    var y = p && Kv.call(e, "__wrapped__"), k = g && Kv.call(t, "__wrapped__");
    if (y || k) {
      var x = y ? e.value() : e, O = k ? t.value() : t;
      return a || (a = new Jf()), i(x, O, n, r, a);
    }
  }
  return _ ? (a || (a = new Jf()), oH(e, t, n, r, i, a)) : !1;
}
var cH = uH, fH = cH, Fv = Ns;
function b0(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !Fv(e) && !Fv(t) ? e !== e && t !== t : fH(e, t, n, r, b0, i);
}
var dH = b0, hH = dH;
function pH(e, t) {
  return hH(e, t);
}
var gH = pH;
const Au = /* @__PURE__ */ ga(gH), yH = $r(), mH = Ls.create({
  emptyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: ur[500],
    textAlign: "center",
    padding: 20
  }
}), vH = { paddingLeft: 16 }, _H = ({
  history: e,
  onRestoreHistory: t
}) => {
  const { classes: n } = mH();
  return /* @__PURE__ */ A(Hr, { theme: yH, children: /* @__PURE__ */ A(
    ya,
    {
      title: "History",
      icon: /* @__PURE__ */ A(QM, { style: { color: ur[700] } }),
      expandedByDefault: !0,
      children: /* @__PURE__ */ He(HI, { children: [
        e.length === 0 && /* @__PURE__ */ A("div", { className: n.emptyText, children: "No History Yet" }),
        e.map(({ name: r, time: i }, a) => /* @__PURE__ */ He(v1, { dense: !0, children: [
          /* @__PURE__ */ A(
            _1,
            {
              style: vH,
              primary: r,
              secondary: J(i).format("LT")
            }
          ),
          a === 0 && /* @__PURE__ */ A(op, { onClick: () => t(), children: /* @__PURE__ */ A(KI, { children: /* @__PURE__ */ A(cA, {}) }) })
        ] }, a))
      ] })
    }
  ) });
}, bH = mi(
  _H,
  (e, t) => Au(
    e.history.map((n) => [n.name, n.time]),
    t.history.map((n) => [n.name, n.time])
  )
), wH = ({
  mousePosition: e,
  x: t,
  y: n
}) => (e && (t = e.current.x, n = e.current.y), /* @__PURE__ */ He(Zh, { children: [
  /* @__PURE__ */ A(
    "div",
    {
      style: {
        position: "absolute",
        height: "100%",
        width: 1,
        zIndex: 10,
        backgroundColor: "#f00",
        left: t,
        pointerEvents: "none",
        top: 0
      }
    }
  ),
  /* @__PURE__ */ A(
    "div",
    {
      style: {
        position: "absolute",
        width: "100%",
        zIndex: 10,
        height: 1,
        backgroundColor: "#f00",
        top: n,
        pointerEvents: "none",
        left: 0
      }
    }
  )
] })), kH = () => r1.Matrix.from(1, 0, 0, 1, -10, -10), xH = ({
  canvasEl: e,
  changeMat: t,
  changeDragging: n,
  zoomStart: r,
  changeZoomStart: i,
  changeZoomEnd: a,
  layoutParams: l,
  zoomWithPrimary: u,
  dragWithPrimary: f,
  mat: d,
  onMouseMove: p,
  onMouseUp: g,
  onMouseDown: _,
  dragging: y
}) => {
  const k = li({ x: 0, y: 0 }), x = li({ x: 0, y: 0 }), O = (M, T) => {
    const [L, K] = [T.x, T.y];
    let N = typeof M == "object" ? M.to / d.a : 1 + 0.2 * M;
    d.translate(L, K).scaleU(N), d.a > 2 && d.scaleU(2 / d.a), d.a < 0.05 && d.scaleU(0.05 / d.a), d.translate(-L, -K), t(d.clone());
  };
  return { mouseEvents: {
    onMouseMove: (M) => {
      var K;
      const T = (K = e.current) == null ? void 0 : K.getBoundingClientRect();
      if (!T) return;
      x.current.x = k.current.x, x.current.y = k.current.y, k.current.x = M.clientX - T.left, k.current.y = M.clientY - T.top;
      const L = d.applyToPoint(
        k.current.x,
        k.current.y
      );
      if (u && r && a(L), l.current) {
        const { iw: N, ih: W } = l.current;
        p({ x: L.x / N, y: L.y / W });
      }
      y && (d.translate(
        x.current.x - k.current.x,
        x.current.y - k.current.y
      ), t(d.clone())), M.preventDefault();
    },
    onMouseDown: (M, T = {}) => {
      if (M.preventDefault(), M.button === 1 || M.button === 2 || M.button === 0 && f)
        return n(!0);
      const L = d.applyToPoint(
        k.current.x,
        k.current.y
      );
      if (u && M.button === 0) {
        i(L), a(L);
        return;
      }
      if (M.button === 0 && (T.type, T.type, l.current)) {
        const { iw: K, ih: N } = l.current;
        _({ x: L.x / K, y: L.y / N });
      }
    },
    onMouseUp: (M) => {
      M.preventDefault();
      const T = d.applyToPoint(
        k.current.x,
        k.current.y
      );
      if (r) {
        const L = T;
        if (Math.abs(r.x - L.x) < 10 && Math.abs(r.y - L.y) < 10)
          d.a < 1 ? O({ to: 1 }, k.current) : O({ to: 0.25 }, k.current);
        else {
          if (r.x > L.x && ([r.x, L.x] = [L.x, r.x]), r.y > L.y && ([r.y, L.y] = [L.y, r.y]), !l.current) return;
          const { iw: K, ih: N } = l.current;
          let W = Math.min(
            (L.x - r.x) / K,
            (L.y - r.y) / N
          );
          W < 0.05 && (W = 0.05), W > 10 && (W = 10);
          const ne = kH().translate(r.x, r.y).scaleU(W).translate(-r.x, -r.y);
          t(ne.clone());
        }
        i(null), a(null);
      }
      if (M.button === 1 || M.button === 2 || M.button === 0 && f)
        return n(!1);
      if (M.button === 0 && l.current) {
        const { iw: L, ih: K } = l.current;
        g({ x: T.x / L, y: T.y / K });
      }
    },
    onWheel: (M) => {
      const T = M.deltaY > 0 ? 1 : M.deltaY < 0 ? -1 : 0;
      O(T, k.current);
    },
    onContextMenu: (M) => {
      M.preventDefault();
    }
  }, mousePosition: k };
}, SH = ({
  layoutParams: e,
  mat: t
}) => hi((n) => {
  var d, p;
  const r = ((d = e.current) == null ? void 0 : d.iw) ?? 0, i = ((p = e.current) == null ? void 0 : p.ih) ?? 0, a = zI(n), l = n.type === "point" ? 15 : 2, u = {
    x: a.x * r - l,
    y: a.y * i - l,
    w: a.w * r + l * 2,
    h: a.h * i + l * 2
  };
  return {
    ...t.clone().inverse().applyToPoint(u.x, u.y),
    w: u.w / t.a,
    h: u.h / t.d
  };
}), CH = $r(), EH = We("svg")(() => ({
  pointerEvents: "none",
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  "& text": {
    fill: "#fff"
  },
  "& path": {
    vectorEffect: "non-scaling-stroke",
    strokeWidth: 2,
    opacity: 0.5,
    stroke: "#FFF",
    fill: "none",
    strokeDasharray: 5,
    animationDuration: "4s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: "running"
  }
})), OH = ({
  projectRegionBox: e,
  regions: t,
  pointDistancePrecision: n,
  realSize: r
}) => {
  const i = t.filter((a) => a.type === "point");
  return /* @__PURE__ */ A(Hr, { theme: CH, children: /* @__PURE__ */ A(EH, { children: i.flatMap(
    (a, l) => i.filter((u, f) => f > l).map((u) => {
      const f = e(a), d = e(u), p = {
        x: (f.x + f.w / 2 + d.x + d.w / 2) / 2,
        y: (f.y + f.h / 2 + d.y + d.h / 2) / 2
      };
      let g;
      if (r) {
        const { w: _, h: y, unitName: k } = r;
        g = Math.sqrt(
          Math.pow(a.x * _ - u.x * _, 2) + Math.pow(a.y * y - u.y * y, 2)
        ).toFixed(n) + k;
      } else
        g = (Math.sqrt(
          Math.pow(a.x - u.x, 2) + Math.pow(a.y - u.y, 2)
        ) * 100).toFixed(n) + "%";
      return /* @__PURE__ */ He(Zh, { children: [
        /* @__PURE__ */ A(
          "path",
          {
            d: `M${f.x + f.w / 2},${f.y + f.h / 2} L${d.x + d.w / 2},${d.y + d.h / 2}`
          }
        ),
        /* @__PURE__ */ A("text", { x: p.x, y: p.y, children: g })
      ] });
    })
  ) }) });
}, PH = $r(), IH = Ls.create(() => ({
  "@keyframes borderDance": {
    from: { strokeDashoffset: 0 },
    to: { strokeDashoffset: 100 }
  },
  highlightBox: {
    zIndex: 2,
    transition: "opacity 500ms",
    "&.highlighted": {
      zIndex: 3
    },
    "&:not(.highlighted)": {
      opacity: 0
    },
    "&:not(.highlighted):hover": {
      opacity: 0.6
    },
    "& path": {
      vectorEffect: "non-scaling-stroke",
      strokeWidth: 2,
      stroke: "#FFF",
      fill: "none",
      strokeDasharray: 5,
      animationName: "$borderDance",
      animationDuration: "4s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationPlayState: "running"
    }
  }
})), TH = ({
  mouseEvents: e,
  dragWithPrimary: t,
  zoomWithPrimary: n,
  createWithPrimary: r,
  onBeginMovePoint: i,
  onSelectRegion: a,
  region: l,
  pbox: u
}) => {
  const { classes: f } = IH();
  if (!u.w || u.w === 1 / 0 || !u.h || u.h === 1 / 0 || l.type === "expanding-line" && l.unfinished) return null;
  const d = l.type === "point" ? {
    left: u.x + u.w / 2 - 30,
    top: u.y + u.h / 2 - 30,
    width: 60,
    height: 60
  } : {
    left: u.x - 5,
    top: u.y - 5,
    width: u.w + 10,
    height: u.h + 10
  }, p = l.type === "point" ? `M5,5 L${d.width - 5} 5L${d.width - 5} ${d.height - 5}L5 ${d.height - 5}Z` : `M5,5 L${u.w + 5},5 L${u.w + 5},${u.h + 5} L5,${u.h + 5} Z`;
  return /* @__PURE__ */ A(Hr, { theme: PH, children: /* @__PURE__ */ A(
    "svg",
    {
      className: ea(f.highlightBox, {
        highlighted: l.highlighted
      }),
      ...e,
      ...!n && !t ? {
        onMouseDown: (g) => {
          if (!l.locked && l.type === "point" && l.highlighted && g.button === 0)
            return i(l);
          if (g.button === 0 && !r)
            return a(l);
          e.onMouseDown(g);
        }
      } : {},
      style: {
        ...l.highlighted ? {
          pointerEvents: l.type !== "point" ? "none" : void 0,
          cursor: "grab"
        } : {
          cursor: n || t || r ? void 0 : "pointer",
          pointerEvents: n || t || r && !l.highlighted ? "none" : void 0
        },
        position: "absolute",
        ...d
      },
      children: /* @__PURE__ */ A("path", { d: p })
    },
    l.id
  ) });
}, MH = $r(), $l = We("div")(() => ({
  width: 8,
  height: 8,
  zIndex: 2,
  border: "2px solid #FFF",
  position: "absolute"
})), AH = [
  ["nw-resize", "n-resize", "ne-resize"],
  ["w-resize", "grab", "e-resize"],
  ["sw-resize", "s-resize", "se-resize"]
], DH = (e, t) => e.region === t.region && e.dragWithPrimary === t.dragWithPrimary && e.createWithPrimary === t.createWithPrimary && e.zoomWithPrimary === t.zoomWithPrimary && e.mat === t.mat, LH = mi(
  ({
    region: e,
    mouseEvents: t,
    projectRegionBox: n,
    dragWithPrimary: r,
    createWithPrimary: i,
    zoomWithPrimary: a,
    onBeginMovePoint: l,
    onSelectRegion: u,
    layoutParams: f,
    mat: d,
    onBeginBoxTransform: p,
    onBeginMovePolygonPoint: g,
    onBeginMoveKeypoint: _,
    onAddPolygonPoint: y,
    showHighlightBox: k
  }) => {
    const x = n(e), { iw: O, ih: S } = f.current ?? { iw: 0, ih: 0 };
    return /* @__PURE__ */ A(Hr, { theme: MH, children: /* @__PURE__ */ A(Zh, { children: /* @__PURE__ */ He(Md, { children: [
      k && e.type !== "polygon" && /* @__PURE__ */ A(
        TH,
        {
          region: e,
          mouseEvents: t,
          dragWithPrimary: r,
          createWithPrimary: i,
          zoomWithPrimary: a,
          onBeginMovePoint: l,
          onSelectRegion: u,
          pbox: x
        }
      ),
      e.type === "box" && !r && !a && !e.locked && e.highlighted && d.a < 1.2 && [
        [0, 0],
        [0.5, 0],
        [1, 0],
        [1, 0.5],
        [1, 1],
        [0.5, 1],
        [0, 1],
        [0, 0.5],
        [0.5, 0.5]
      ].map(([M, T], L) => /* @__PURE__ */ A(
        $l,
        {
          ...t,
          onMouseDown: (K) => {
            if (K.button === 0)
              return p(e, [M * 2 - 1, T * 2 - 1]);
            t.onMouseDown(K);
          },
          style: {
            left: x.x - 4 - 2 + x.w * M,
            top: x.y - 4 - 2 + x.h * T,
            cursor: AH[T * 2][M * 2],
            borderRadius: M === 0.5 && T === 0.5 ? 4 : void 0
          }
        },
        L
      )),
      e.type === "polygon" && !r && !a && !e.locked && e.highlighted && e.points.map(([M, T], L) => {
        const K = d.clone().inverse().applyToPoint(M * O, T * S);
        return /* @__PURE__ */ A(
          $l,
          {
            ...t,
            onMouseDown: (N) => {
              if (N.button === 0 && (!e.open || L === 0))
                return g(e, L);
              t.onMouseDown(N);
            },
            style: {
              cursor: e.open ? L === 0 ? "pointer" : void 0 : "move",
              zIndex: 10,
              pointerEvents: e.open && L === e.points.length - 1 ? "none" : void 0,
              left: K.x - 4,
              top: K.y - 4
            }
          },
          L
        );
      }),
      e.type === "polygon" && e.highlighted && !r && !a && !e.locked && !e.open && e.points.length > 1 && e.points.map((M, T) => [M, e.points[(T + 1) % e.points.length]]).map(([M, T]) => [(M[0] + T[0]) / 2, (M[1] + T[1]) / 2]).map((M, T) => {
        const L = d.clone().inverse().applyToPoint(M[0] * O, M[1] * S);
        return /* @__PURE__ */ A(
          $l,
          {
            ...t,
            onMouseDown: (K) => {
              if (K.button === 0)
                return y(
                  e,
                  M,
                  T + 1
                );
              t.onMouseDown(K);
            },
            style: {
              cursor: "copy",
              zIndex: 10,
              left: L.x - 4,
              top: L.y - 4,
              border: "2px dotted #fff",
              opacity: 0.5
            }
          },
          T
        );
      }),
      e.type === "keypoints" && !r && !a && !e.locked && e.highlighted && Object.entries(e.points).map(
        ([M, { x: T, y: L }], K) => {
          const N = d.clone().inverse().applyToPoint(T * O, L * S);
          return /* @__PURE__ */ A(MI, { title: M, children: /* @__PURE__ */ A(
            $l,
            {
              ...t,
              onMouseDown: (W) => {
                if (W.button === 0 && (!e.open || K === 0))
                  return _(e, M);
                t.onMouseDown(W);
              },
              style: {
                cursor: e.open ? K === 0 ? "pointer" : void 0 : "move",
                zIndex: 10,
                pointerEvents: e.open && K === Array.from(Object.keys(e.points)).length - 1 ? "none" : void 0,
                left: N.x - 4,
                top: N.y - 4
              }
            },
            K
          ) }, K);
        }
      )
    ] }) }) });
  },
  DH
), RH = mi(
  (e) => e.regions.filter((t) => t.visible || t.visible === void 0).filter((t) => !t.locked).map((t) => /* @__PURE__ */ A(LH, { ...e, region: t }, t.id)),
  (e, t) => e.regions === t.regions && e.mat === t.mat
), NH = ({
  getLatestMat: e,
  changeMat: t
}) => {
  const { wasdMode: n } = np();
  xo(() => {
    if (!n) return;
    const r = 10, i = {
      w: [0, -10],
      a: [-10, 0],
      s: [0, r],
      d: [r, 0]
    }, a = {}, l = Object.keys(i), u = (p) => {
      l.includes(p.key) && (a[p.key] = !0, p.preventDefault(), p.stopPropagation());
    }, f = (p) => {
      l.includes(p.key) && (a[p.key] = !1, p.preventDefault(), p.stopPropagation());
    }, d = setInterval(() => {
      let p = e().clone(), g = !1;
      for (const _ in a)
        if (a[_]) {
          const y = i[_];
          y && (p = p.translate(...y), g = !0);
        }
      g && t(p);
    }, 16);
    return window.addEventListener("keydown", u), window.addEventListener("keyup", f), () => {
      clearInterval(d), window.removeEventListener("keydown", u), window.removeEventListener("keyup", f);
    };
  }, [n]);
}, KH = $r(), FH = Ls.create({
  canvas: { width: "100%", height: "100%", position: "relative", zIndex: 1 },
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
}), $v = (e = null, t = null) => {
  let n = r1.Matrix.from(1, 0, 0, 1, -10, -10);
  return e && (t != null && t.iw) && (n = n.translate(e.x * t.iw, e.y * t.ih).scaleU(e.w + 0.05)), n;
}, $H = ({
  regions: e,
  imageSrc: t,
  realSize: n,
  showTags: r,
  onMouseMove: i = () => null,
  onMouseDown: a = () => null,
  onMouseUp: l = () => null,
  dragWithPrimary: u = !1,
  zoomWithPrimary: f = !1,
  createWithPrimary: d = !1,
  pointDistancePrecision: p = 0,
  regionClsList: g,
  regionTagList: _,
  regionTagSingleSelection: y,
  showCrosshairs: k,
  showHighlightBox: x = !0,
  showPointDistances: O,
  allowedArea: S,
  RegionEditLabel: M = null,
  showMask: T = !0,
  fullImageSegmentationMode: L,
  autoSegmentationOptions: K,
  onImageLoaded: N,
  onChangeRegion: W,
  onBeginRegionEdit: ne,
  onCloseRegionEdit: oe,
  onBeginBoxTransform: le,
  onBeginMovePolygonPoint: Q,
  onAddPolygonPoint: V,
  onBeginMoveKeypoint: he,
  onSelectRegion: me,
  onBeginMovePoint: ce,
  onDeleteRegion: Me,
  onRegionClassAdded: $e,
  zoomOnAllowedArea: Ye = !0,
  modifyingAllowedArea: ve = !1,
  keypointDefinitions: C,
  allowComments: Ae
}) => {
  const { classes: pt } = FH(), P = li(null), be = li(null), [de, Pe] = Ll(!1), [st, Lt] = Ll(null), [Rt, Un] = Ll(
    null
  ), [lt, xn] = Ll($v()), ki = BI(), bt = hi(() => lt);
  NH({ getLatestMat: bt, changeMat: xn });
  const { mouseEvents: Sn, mousePosition: Oo } = xH({
    canvasEl: P,
    dragging: de,
    mat: lt,
    layoutParams: be,
    changeMat: xn,
    zoomStart: st,
    changeZoomStart: Lt,
    changeZoomEnd: Un,
    changeDragging: Pe,
    zoomWithPrimary: f,
    dragWithPrimary: u,
    onMouseMove: i,
    onMouseDown: a,
    onMouseUp: l
  });
  Xm(() => xn(lt.clone()), [ki]);
  const Ut = SH({ layoutParams: be, mat: lt }), [Cn, Vi] = Vo(null), an = !!(Cn && Cn.naturalWidth), en = hi(
    ({
      naturalWidth: j,
      naturalHeight: ae,
      duration: re
    }) => {
      const we = { naturalWidth: j, naturalHeight: ae, duration: re };
      N && N(we), Vi(we), setTimeout(() => Vi(we), 10);
    }
  ), Wr = UI(), sn = P.current;
  if (sn && an && Cn) {
    const { clientWidth: j, clientHeight: ae } = sn, re = Math.max(
      Cn.naturalWidth / (j - 20),
      Cn.naturalHeight / (ae - 20)
    ), [we, rt] = [
      Cn.naturalWidth / re,
      Cn.naturalHeight / re
    ];
    be.current = {
      iw: we,
      ih: rt,
      fitScale: re,
      canvasWidth: j,
      canvasHeight: ae
    };
  }
  xo(() => {
    an && xn(
      $v(
        Ye ? S : null,
        be.current
      )
    );
  }, [an]), Xm(() => {
    var jt, Wn;
    if (!Cn || !sn) return;
    const { clientWidth: j, clientHeight: ae } = sn;
    sn.width = j, sn.height = ae;
    const re = sn.getContext("2d");
    if (!re) return;
    re.save();
    const we = lt.clone().inverse().toArray();
    re.transform(
      we[0],
      we[1],
      we[2],
      we[3],
      we[4],
      we[5]
    );
    const rt = ((jt = be.current) == null ? void 0 : jt.iw) || 0, Et = ((Wn = be.current) == null ? void 0 : Wn.ih) || 0;
    if (S) {
      const { x: ln, y: wt, w: En, h: un } = S;
      re.save(), re.globalAlpha = 1;
      const Ia = [
        [0, 0],
        [rt, 0],
        [rt, Et],
        [0, Et]
      ], Po = [
        [ln * rt, wt * Et],
        [ln * rt + En * rt, wt * Et],
        [ln * rt + En * rt, wt * Et + un * Et],
        [ln * rt, wt * Et + un * Et]
      ];
      re.moveTo(...Ia[0]), Ia.forEach((Io) => re.lineTo(...Io)), re.lineTo(...Ia[0]), re.closePath(), Po.reverse(), re.moveTo(...Po[0]), Po.forEach((Io) => re.lineTo(...Io)), re.lineTo(...Po[0]), re.fillStyle = Wr || "#f00", re.fill(), re.restore();
    }
    re.restore();
  });
  let Nt = !st || !Rt ? null : {
    ...lt.clone().inverse().applyToPoint(st.x, st.y),
    w: (Rt.x - st.x) / lt.a,
    h: (Rt.y - st.y) / lt.d
  };
  Nt && (Nt.w < 0 && (Nt.x += Nt.w, Nt.w *= -1), Nt.h < 0 && (Nt.y += Nt.h, Nt.h *= -1));
  const jn = be.current ? {
    topLeft: lt.clone().inverse().applyToPoint(0, 0),
    bottomRight: lt.clone().inverse().applyToPoint(be.current.iw, be.current.ih)
  } : null, H = Ki(() => {
    const j = e.filter((ae) => ae.highlighted);
    return j.length !== 1 ? null : j[0];
  }, [e]);
  return /* @__PURE__ */ A(Hr, { theme: KH, children: /* @__PURE__ */ He(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        maxHeight: "calc(100vh - 68px)",
        position: "relative",
        overflow: "hidden",
        cursor: d ? "crosshair" : de ? "grabbing" : u ? "grab" : f ? lt.a < 1 ? "zoom-out" : "zoom-in" : void 0
      },
      children: [
        k && /* @__PURE__ */ A(wH, { mousePosition: Oo }, "crossHairs"),
        an && !de && /* @__PURE__ */ A(
          RH,
          {
            regions: !ve || !S ? e : [
              {
                type: "box",
                id: "$$allowed_area",
                cls: "allowed_area",
                highlighted: !0,
                x: S.x,
                y: S.y,
                w: S.w,
                h: S.h,
                visible: !0,
                color: "#ff0"
              }
            ],
            mouseEvents: Sn,
            projectRegionBox: Ut,
            dragWithPrimary: u,
            createWithPrimary: d,
            zoomWithPrimary: f,
            onBeginMovePoint: ce,
            onSelectRegion: me,
            layoutParams: be,
            mat: lt,
            onBeginBoxTransform: le,
            onBeginMovePolygonPoint: Q,
            onBeginMoveKeypoint: he,
            onAddPolygonPoint: V,
            showHighlightBox: x
          },
          "regionSelectAndTransformBoxes"
        ),
        an && r && !de && /* @__PURE__ */ A(Md, { children: /* @__PURE__ */ A(
          jI,
          {
            regions: e,
            projectRegionBox: Ut,
            mouseEvents: Sn,
            regionClsList: g,
            regionTagList: _,
            regionTagSingleSelection: y,
            onBeginRegionEdit: ne,
            onChangeRegion: W,
            onCloseRegionEdit: oe,
            onDeleteRegion: Me,
            RegionEditLabel: M,
            onRegionClassAdded: $e,
            allowComments: Ae
          }
        ) }, "regionTags"),
        !r && H && /* @__PURE__ */ A("div", { className: pt.fixedRegionLabel, children: /* @__PURE__ */ A(
          WI,
          {
            allowedClasses: g,
            allowedTags: _,
            onChange: W,
            onDelete: Me,
            editing: !0,
            region: H,
            allowComments: Ae
          }
        ) }, "topLeftTag"),
        f && Nt !== null && /* @__PURE__ */ A(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 1,
              border: "1px solid #fff",
              pointerEvents: "none",
              left: Nt.x,
              top: Nt.y,
              width: Nt.w,
              height: Nt.h
            }
          },
          "zoomBox"
        ),
        O && /* @__PURE__ */ A(
          OH,
          {
            regions: e,
            realSize: n,
            projectRegionBox: Ut,
            pointDistancePrecision: p
          },
          "pointDistances"
        ),
        /* @__PURE__ */ He(
          Md,
          {
            style: { width: "100%", height: "100%" },
            ...Sn,
            children: [
              jn && L ? /* @__PURE__ */ A(
                YI,
                {
                  hide: !T,
                  autoSegmentationOptions: K,
                  imagePosition: jn,
                  regionClsList: g == null ? void 0 : g.map(
                    (j) => typeof j == "string" ? j : j.id
                  ),
                  imageSrc: t,
                  regions: e
                }
              ) : null,
              /* @__PURE__ */ A(
                "canvas",
                {
                  style: { opacity: 0.25 },
                  className: pt.canvas,
                  ref: P
                }
              ),
              /* @__PURE__ */ A(
                GI,
                {
                  keypointDefinitions: C,
                  imagePosition: jn,
                  regions: e
                }
              ),
              /* @__PURE__ */ A(
                qI,
                {
                  imagePosition: jn,
                  mouseEvents: Sn,
                  onLoad: en,
                  imageSrc: t,
                  useCrossOrigin: L
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ He("div", { className: pt.zoomIndicator, children: [
          (1 / lt.a * 100).toFixed(0),
          "%"
        ] })
      ]
    }
  ) });
}, HH = fr(/* @__PURE__ */ A("path", {
  d: "M19 7h-8v6h8zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z"
}), "PictureInPicture"), Yd = /* @__PURE__ */ Ne.createContext();
Ve.env.NODE_ENV !== "production" && (Yd.displayName = "GridContext");
function zH(e) {
  return bn("MuiGrid", e);
}
const BH = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], UH = ["column-reverse", "column", "row-reverse", "row"], jH = ["nowrap", "wrap-reverse", "wrap"], Xa = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], vs = Jt("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...BH.map((e) => `spacing-xs-${e}`),
  // direction values
  ...UH.map((e) => `direction-xs-${e}`),
  // wrap values
  ...jH.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Xa.map((e) => `grid-xs-${e}`),
  ...Xa.map((e) => `grid-sm-${e}`),
  ...Xa.map((e) => `grid-md-${e}`),
  ...Xa.map((e) => `grid-lg-${e}`),
  ...Xa.map((e) => `grid-xl-${e}`)
]);
function WH({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((r, i) => {
    let a = {};
    if (t[i] && (n = t[i]), !n)
      return r;
    if (n === !0)
      a = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      a = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const l = Gu({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), u = typeof l == "object" ? l[i] : l;
      if (u == null)
        return r;
      const f = `${Math.round(n / u * 1e8) / 1e6}%`;
      let d = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const p = e.spacing(t.columnSpacing);
        if (p !== "0px") {
          const g = `calc(${f} + ${p})`;
          d = {
            flexBasis: g,
            maxWidth: g
          };
        }
      }
      a = {
        flexBasis: f,
        flexGrow: 0,
        maxWidth: f,
        ...d
      };
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, a) : r[e.breakpoints.up(i)] = a, r;
  }, {});
}
function YH({
  theme: e,
  ownerState: t
}) {
  const n = Gu({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return ep({
    theme: e
  }, n, (r) => {
    const i = {
      flexDirection: r
    };
    return r.startsWith("column") && (i[`& > .${vs.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function w0({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((i) => {
    n === "" && t[i] !== 0 && (n = i);
  });
  const r = Object.keys(e).sort((i, a) => e[i] - e[a]);
  return r.slice(0, r.indexOf(n));
}
function GH({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const a = Gu({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof a == "object" && (l = w0({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = ep({
      theme: e
    }, a, (u, f) => {
      const d = e.spacing(u);
      return d !== "0px" ? {
        marginTop: `calc(-1 * ${d})`,
        [`& > .${vs.item}`]: {
          paddingTop: d
        }
      } : l != null && l.includes(f) ? {} : {
        marginTop: 0,
        [`& > .${vs.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function qH({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const a = Gu({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let l;
    typeof a == "object" && (l = w0({
      breakpoints: e.breakpoints.values,
      values: a
    })), i = ep({
      theme: e
    }, a, (u, f) => {
      const d = e.spacing(u);
      if (d !== "0px") {
        const p = `calc(-1 * ${d})`;
        return {
          width: `calc(100% + ${d})`,
          marginLeft: p,
          [`& > .${vs.item}`]: {
            paddingLeft: d
          }
        };
      }
      return l != null && l.includes(f) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${vs.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function VH(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((i) => {
    const a = e[i];
    Number(a) > 0 && r.push(n[`spacing-${i}-${String(a)}`]);
  }), r;
}
const XH = We("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: r,
      direction: i,
      item: a,
      spacing: l,
      wrap: u,
      zeroMinWidth: f,
      breakpoints: d
    } = n;
    let p = [];
    r && (p = VH(l, d, t));
    const g = [];
    return d.forEach((_) => {
      const y = n[_];
      y && g.push(t[`grid-${_}-${String(y)}`]);
    }), [t.root, r && t.container, a && t.item, f && t.zeroMinWidth, ...p, i !== "row" && t[`direction-xs-${String(i)}`], u !== "wrap" && t[`wrap-xs-${String(u)}`], ...g];
  }
})(
  // FIXME(romgrk): Can't use memoTheme here
  ({
    ownerState: e
  }) => ({
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%"
    },
    ...e.item && {
      margin: 0
      // For instance, it's useful when used with a `figure` element.
    },
    ...e.zeroMinWidth && {
      minWidth: 0
    },
    ...e.wrap !== "wrap" && {
      flexWrap: e.wrap
    }
  }),
  YH,
  GH,
  qH,
  WH
);
function ZH(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const a = `spacing-${r}-${String(i)}`;
      n.push(a);
    }
  }), n;
}
const JH = (e) => {
  const {
    classes: t,
    container: n,
    direction: r,
    item: i,
    spacing: a,
    wrap: l,
    zeroMinWidth: u,
    breakpoints: f
  } = e;
  let d = [];
  n && (d = ZH(a, f));
  const p = [];
  f.forEach((_) => {
    const y = e[_];
    y && p.push(`grid-${_}-${String(y)}`);
  });
  const g = {
    root: ["root", n && "container", i && "item", u && "zeroMinWidth", ...d, r !== "row" && `direction-xs-${String(r)}`, l !== "wrap" && `wrap-xs-${String(l)}`, ...p]
  };
  return wn(g, zH, t);
}, Tr = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = Qb(), a = FI(r), {
    className: l,
    columns: u,
    columnSpacing: f,
    component: d = "div",
    container: p = !1,
    direction: g = "row",
    item: _ = !1,
    rowSpacing: y,
    spacing: k = 0,
    wrap: x = "wrap",
    zeroMinWidth: O = !1,
    ...S
  } = a, M = y || k, T = f || k, L = Ne.useContext(Yd), K = p ? u || 12 : L, N = {}, W = {
    ...S
  };
  i.keys.forEach((le) => {
    S[le] != null && (N[le] = S[le], delete W[le]);
  });
  const ne = {
    ...a,
    columns: K,
    container: p,
    direction: g,
    item: _,
    rowSpacing: M,
    columnSpacing: T,
    wrap: x,
    zeroMinWidth: O,
    spacing: k,
    ...N,
    breakpoints: i.keys
  }, oe = JH(ne);
  return /* @__PURE__ */ A(Yd.Provider, {
    value: K,
    children: /* @__PURE__ */ A(XH, {
      ownerState: ne,
      className: $t(oe.root, l),
      as: d,
      ref: n,
      ...W
    })
  });
});
Ve.env.NODE_ENV !== "production" && (Tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: m.oneOfType([m.arrayOf(m.number), m.number, m.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: m.oneOfType([m.arrayOf(m.oneOfType([m.number, m.string])), m.number, m.object, m.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: m.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: m.oneOfType([m.oneOf(["column-reverse", "column", "row-reverse", "row"]), m.arrayOf(m.oneOf(["column-reverse", "column", "row-reverse", "row"])), m.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: m.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: m.oneOfType([m.oneOf(["auto"]), m.number, m.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: m.oneOfType([m.oneOf(["auto"]), m.number, m.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: m.oneOfType([m.arrayOf(m.oneOfType([m.number, m.string])), m.number, m.object, m.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: m.oneOfType([m.oneOf(["auto"]), m.number, m.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: m.oneOfType([m.arrayOf(m.oneOfType([m.number, m.string])), m.number, m.object, m.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: m.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: m.oneOfType([m.oneOf(["auto"]), m.number, m.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: m.oneOfType([m.oneOf(["auto"]), m.number, m.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: m.bool
});
if (Ve.env.NODE_ENV !== "production") {
  const e = iT("Grid", Tr);
  Tr.propTypes = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...Tr.propTypes,
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  };
}
const QH = fr(/* @__PURE__ */ A("path", {
  d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z"
}), "SwapVert"), e6 = fr(/* @__PURE__ */ A("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
}), "LockOpen"), k0 = fr(/* @__PURE__ */ A("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), t6 = fr(/* @__PURE__ */ A("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff"), n6 = $r(), Ap = Ls.create({
  container: {
    fontSize: 11,
    fontWeight: "bold",
    color: ur[700],
    "& .icon": {
      marginTop: 4,
      width: 16,
      height: 16
    },
    "& .icon2": {
      opacity: 0.5,
      width: 16,
      height: 16,
      transition: "200ms opacity",
      "&:hover": {
        cursor: "pointer",
        opacity: 1
      }
    }
  },
  row: {
    padding: 4,
    cursor: "pointer",
    "&.header:hover": {
      backgroundColor: "#fff"
    },
    "&.highlighted": {
      backgroundColor: Td[100]
    },
    "&:hover": {
      backgroundColor: Td[50],
      color: ur[800]
    }
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    padding: 2,
    borderRadius: 2,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
    "& .color": {
      borderRadius: 5,
      width: 10,
      minWidth: 10,
      height: 10,
      marginRight: 4
    },
    "& .text": {}
  }
}), r6 = We("div")(() => ({
  borderTop: `1px solid ${ur[200]}`,
  marginTop: 2,
  marginBottom: 2
})), i6 = ({ color: e, text: t }) => {
  const { classes: n } = Ap();
  return /* @__PURE__ */ He("span", { className: n.chip, children: [
    /* @__PURE__ */ A("div", { className: "color", style: { backgroundColor: e } }),
    /* @__PURE__ */ A("div", { className: "text", children: t })
  ] });
}, x0 = ({
  header: e,
  highlighted: t,
  order: n,
  classification: r,
  trash: i,
  lock: a,
  visible: l,
  onClick: u
}) => {
  const { classes: f } = Ap();
  return /* @__PURE__ */ A(
    "div",
    {
      onClick: u,
      className: ea(f.row, { header: e, highlighted: t }),
      children: /* @__PURE__ */ He(Tr, { container: !0, alignItems: "center", children: [
        /* @__PURE__ */ A(Tr, { item: !0, xs: 2, children: /* @__PURE__ */ A("div", { style: { textAlign: "right", paddingRight: 10 }, children: n }) }),
        /* @__PURE__ */ A(Tr, { item: !0, xs: 5, style: { marginRight: "auto" }, children: r }),
        /* @__PURE__ */ A(Tr, { item: !0, xs: 1, children: i }),
        /* @__PURE__ */ A(Tr, { item: !0, xs: 1, children: a }),
        /* @__PURE__ */ A(Tr, { item: !0, xs: 1, children: l })
      ] })
    }
  );
}, o6 = ({
  regionAllowedActions: e
}) => /* @__PURE__ */ A(
  x0,
  {
    header: !0,
    highlighted: !1,
    order: /* @__PURE__ */ A(QH, { className: "icon" }),
    classification: /* @__PURE__ */ A("div", { style: { paddingLeft: 10 }, children: "Class" }),
    trash: e.remove ? /* @__PURE__ */ A(o1, { className: "icon" }) : null,
    lock: e.lock ? /* @__PURE__ */ A(i1, { className: "icon" }) : null,
    visible: e.visibility ? /* @__PURE__ */ A(k0, { className: "icon" }) : null
  }
), a6 = mi(o6), s6 = ({
  region: e,
  regionClsList: t,
  highlighted: n,
  onSelectRegion: r,
  onDeleteRegion: i,
  onChangeRegion: a,
  color: l,
  cls: u,
  index: f,
  regionAllowedActions: d
}) => {
  const p = t == null ? void 0 : t.find(
    (_) => typeof _ == "object" && _.id === u
  ), g = p && typeof p == "object" ? p.label : u;
  return /* @__PURE__ */ A(
    x0,
    {
      header: !1,
      highlighted: n || !1,
      onClick: () => r(e),
      order: `#${f + 1}`,
      classification: /* @__PURE__ */ A(i6, { text: g || "", color: l || "#ddd" }),
      trash: d.remove ? /* @__PURE__ */ A(o1, { onClick: () => i(e), className: "icon2" }) : null,
      lock: d.lock ? e.locked ? /* @__PURE__ */ A(
        i1,
        {
          onClick: () => a({ ...e, locked: !1 }),
          className: "icon2"
        }
      ) : /* @__PURE__ */ A(
        e6,
        {
          onClick: () => a({ ...e, locked: !0 }),
          className: "icon2"
        }
      ) : null,
      visible: d.visibility ? e.visible || e.visible === void 0 ? /* @__PURE__ */ A(
        k0,
        {
          onClick: () => a({ ...e, visible: !1 }),
          className: "icon2"
        }
      ) : /* @__PURE__ */ A(
        t6,
        {
          onClick: () => a({ ...e, visible: !0 }),
          className: "icon2"
        }
      ) : null
    }
  );
}, l6 = mi(
  s6,
  (e, t) => e.highlighted === t.highlighted && e.visible === t.visible && e.locked === t.locked && e.rId === t.rId && e.index === t.index && e.cls === t.cls && e.color === t.color
), Gd = [], u6 = ({
  regions: e = Gd,
  regionClsList: t,
  onDeleteRegion: n,
  onChangeRegion: r,
  onSelectRegion: i,
  regionAllowedActions: a
}) => {
  const { classes: l } = Ap();
  return /* @__PURE__ */ A(Hr, { theme: n6, children: /* @__PURE__ */ A(
    ya,
    {
      title: "Annotations",
      icon: /* @__PURE__ */ A(HH, { style: { color: ur[700] } }),
      expandedByDefault: !0,
      children: /* @__PURE__ */ He("div", { className: l.container, children: [
        /* @__PURE__ */ A(a6, { regionAllowedActions: a }),
        /* @__PURE__ */ A(r6, {}),
        e.map((u, f) => /* @__PURE__ */ A(
          l6,
          {
            rId: u.id,
            ...u,
            regionClsList: t,
            region: u,
            index: f,
            regionAllowedActions: a,
            onSelectRegion: i,
            onDeleteRegion: n,
            onChangeRegion: r
          },
          u.id
        ))
      ] })
    }
  ) });
}, Hv = (e) => [
  e.id,
  e.color,
  e.locked,
  e.visible,
  e.highlighted
], c6 = mi(
  u6,
  (e, t) => Au(
    (e.regions || Gd).map(Hv),
    (t.regions || Gd).map(Hv)
  )
), f6 = fr(/* @__PURE__ */ A("path", {
  d: "m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z"
}), "Style"), zv = [], d6 = ({}) => {
}, h6 = ({
  currentImage: e,
  imageClsList: t = zv,
  imageTagList: n = zv,
  onChangeImage: r = d6
}) => {
  const { tags: i = [], cls: a = null } = e || {}, l = hi(
    (_) => r({ cls: _.value })
  ), u = hi(
    (_) => r({ tags: _.map((y) => y.value) })
  ), f = Ki(
    () => a ? { value: a, label: a } : null,
    [a]
  ), d = Ki(
    () => t.map((_) => ({ value: _, label: _ })),
    [t]
  ), p = Ki(
    () => n.map((_) => ({ value: _, label: _ })),
    [n]
  ), g = Ki(
    () => i.map((_) => ({ value: _, label: _ })),
    [i]
  );
  return e ? /* @__PURE__ */ He(
    ya,
    {
      title: "Image Tags",
      expandedByDefault: !0,
      noScroll: !0,
      icon: /* @__PURE__ */ A(f6, { style: { color: ur[700] } }),
      children: [
        t.length > 0 && /* @__PURE__ */ A("div", { style: { padding: 8 }, children: /* @__PURE__ */ A(
          Qm,
          {
            placeholder: "Image Classification",
            onChange: l,
            value: f,
            options: d
          }
        ) }),
        n.length > 0 && /* @__PURE__ */ A("div", { style: { padding: 8, paddingTop: 0 }, children: /* @__PURE__ */ A(
          Qm,
          {
            isMulti: !0,
            placeholder: "Image Tags",
            onChange: u,
            value: g,
            options: p
          }
        ) })
      ]
    }
  ) : null;
}, p6 = mi(
  h6,
  (e, t) => {
    var n, r, i, a;
    return ((n = e.currentImage) == null ? void 0 : n.cls) === ((r = t.currentImage) == null ? void 0 : r.cls) && ((i = e.currentImage) == null ? void 0 : i.tags) === ((a = t.currentImage) == null ? void 0 : a.tags) && e.imageClsList === t.imageClsList && e.imageTagList === t.imageTagList;
  }
), g6 = fr(/* @__PURE__ */ A("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"
}), "Description");
function y6(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const m6 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, v6 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, _6 = {};
function Bv(e, t) {
  return (_6.jsx ? v6 : m6).test(e);
}
const b6 = /[ \t\n\f\r]/g;
function w6(e) {
  return typeof e == "object" ? e.type === "text" ? Uv(e.value) : !1 : Uv(e);
}
function Uv(e) {
  return e.replace(b6, "") === "";
}
class zs {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
zs.prototype.normal = {};
zs.prototype.property = {};
zs.prototype.space = void 0;
function S0(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new zs(n, r, t);
}
function qd(e) {
  return e.toLowerCase();
}
class kn {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
kn.prototype.attribute = "";
kn.prototype.booleanish = !1;
kn.prototype.boolean = !1;
kn.prototype.commaOrSpaceSeparated = !1;
kn.prototype.commaSeparated = !1;
kn.prototype.defined = !1;
kn.prototype.mustUseProperty = !1;
kn.prototype.number = !1;
kn.prototype.overloadedBoolean = !1;
kn.prototype.property = "";
kn.prototype.spaceSeparated = !1;
kn.prototype.space = void 0;
let k6 = 0;
const Ce = Eo(), Ot = Eo(), C0 = Eo(), q = Eo(), ot = Eo(), ia = Eo(), Rn = Eo();
function Eo() {
  return 2 ** ++k6;
}
const Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Ce,
  booleanish: Ot,
  commaOrSpaceSeparated: Rn,
  commaSeparated: ia,
  number: q,
  overloadedBoolean: C0,
  spaceSeparated: ot
}, Symbol.toStringTag, { value: "Module" })), Qf = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Vd)
);
class Dp extends kn {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), jv(this, "space", i), typeof r == "number")
      for (; ++a < Qf.length; ) {
        const l = Qf[a];
        jv(this, Qf[a], (r & Vd[l]) === Vd[l]);
      }
  }
}
Dp.prototype.defined = !0;
function jv(e, t, n) {
  n && (e[t] = n);
}
function Ea(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new Dp(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[qd(r)] = r, n[qd(a.attribute)] = r;
  }
  return new zs(t, n, e.space);
}
const E0 = Ea({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ot,
    ariaAutoComplete: null,
    ariaBusy: Ot,
    ariaChecked: Ot,
    ariaColCount: q,
    ariaColIndex: q,
    ariaColSpan: q,
    ariaControls: ot,
    ariaCurrent: null,
    ariaDescribedBy: ot,
    ariaDetails: null,
    ariaDisabled: Ot,
    ariaDropEffect: ot,
    ariaErrorMessage: null,
    ariaExpanded: Ot,
    ariaFlowTo: ot,
    ariaGrabbed: Ot,
    ariaHasPopup: null,
    ariaHidden: Ot,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ot,
    ariaLevel: q,
    ariaLive: null,
    ariaModal: Ot,
    ariaMultiLine: Ot,
    ariaMultiSelectable: Ot,
    ariaOrientation: null,
    ariaOwns: ot,
    ariaPlaceholder: null,
    ariaPosInSet: q,
    ariaPressed: Ot,
    ariaReadOnly: Ot,
    ariaRelevant: null,
    ariaRequired: Ot,
    ariaRoleDescription: ot,
    ariaRowCount: q,
    ariaRowIndex: q,
    ariaRowSpan: q,
    ariaSelected: Ot,
    ariaSetSize: q,
    ariaSort: null,
    ariaValueMax: q,
    ariaValueMin: q,
    ariaValueNow: q,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function O0(e, t) {
  return t in e ? e[t] : t;
}
function P0(e, t) {
  return O0(e, t.toLowerCase());
}
const x6 = Ea({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: ia,
    acceptCharset: ot,
    accessKey: ot,
    action: null,
    allow: null,
    allowFullScreen: Ce,
    allowPaymentRequest: Ce,
    allowUserMedia: Ce,
    alt: null,
    as: null,
    async: Ce,
    autoCapitalize: null,
    autoComplete: ot,
    autoFocus: Ce,
    autoPlay: Ce,
    blocking: ot,
    capture: null,
    charSet: null,
    checked: Ce,
    cite: null,
    className: ot,
    cols: q,
    colSpan: null,
    content: null,
    contentEditable: Ot,
    controls: Ce,
    controlsList: ot,
    coords: q | ia,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Ce,
    defer: Ce,
    dir: null,
    dirName: null,
    disabled: Ce,
    download: C0,
    draggable: Ot,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Ce,
    formTarget: null,
    headers: ot,
    height: q,
    hidden: Ce,
    high: q,
    href: null,
    hrefLang: null,
    htmlFor: ot,
    httpEquiv: ot,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Ce,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Ce,
    itemId: null,
    itemProp: ot,
    itemRef: ot,
    itemScope: Ce,
    itemType: ot,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Ce,
    low: q,
    manifest: null,
    max: null,
    maxLength: q,
    media: null,
    method: null,
    min: null,
    minLength: q,
    multiple: Ce,
    muted: Ce,
    name: null,
    nonce: null,
    noModule: Ce,
    noValidate: Ce,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Ce,
    optimum: q,
    pattern: null,
    ping: ot,
    placeholder: null,
    playsInline: Ce,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Ce,
    referrerPolicy: null,
    rel: ot,
    required: Ce,
    reversed: Ce,
    rows: q,
    rowSpan: q,
    sandbox: ot,
    scope: null,
    scoped: Ce,
    seamless: Ce,
    selected: Ce,
    shadowRootClonable: Ce,
    shadowRootDelegatesFocus: Ce,
    shadowRootMode: null,
    shape: null,
    size: q,
    sizes: null,
    slot: null,
    span: q,
    spellCheck: Ot,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: q,
    step: null,
    style: null,
    tabIndex: q,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Ce,
    useMap: null,
    value: Ot,
    width: q,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ot,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: q,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: q,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Ce,
    // Lists. Use CSS to reduce space between items instead
    declare: Ce,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: q,
    // `<img>` and `<object>`
    leftMargin: q,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: q,
    // `<body>`
    marginWidth: q,
    // `<body>`
    noResize: Ce,
    // `<frame>`
    noHref: Ce,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Ce,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Ce,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: q,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ot,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: q,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: q,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Ce,
    disableRemotePlayback: Ce,
    prefix: null,
    property: null,
    results: q,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: P0
}), S6 = Ea({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Rn,
    accentHeight: q,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: q,
    amplitude: q,
    arabicForm: null,
    ascent: q,
    attributeName: null,
    attributeType: null,
    azimuth: q,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: q,
    by: null,
    calcMode: null,
    capHeight: q,
    className: ot,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: q,
    diffuseConstant: q,
    direction: null,
    display: null,
    dur: null,
    divisor: q,
    dominantBaseline: null,
    download: Ce,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: q,
    enableBackground: null,
    end: null,
    event: null,
    exponent: q,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: q,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: ia,
    g2: ia,
    glyphName: ia,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: q,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: q,
    horizOriginX: q,
    horizOriginY: q,
    id: null,
    ideographic: q,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: q,
    k: q,
    k1: q,
    k2: q,
    k3: q,
    k4: q,
    kernelMatrix: Rn,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: q,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: q,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: q,
    overlineThickness: q,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: q,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ot,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: q,
    pointsAtY: q,
    pointsAtZ: q,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Rn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Rn,
    rev: Rn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Rn,
    requiredFeatures: Rn,
    requiredFonts: Rn,
    requiredFormats: Rn,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: q,
    specularExponent: q,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: q,
    strikethroughThickness: q,
    string: null,
    stroke: null,
    strokeDashArray: Rn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: q,
    strokeOpacity: q,
    strokeWidth: null,
    style: null,
    surfaceScale: q,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Rn,
    tabIndex: q,
    tableValues: null,
    target: null,
    targetX: q,
    targetY: q,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Rn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: q,
    underlineThickness: q,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: q,
    values: null,
    vAlphabetic: q,
    vMathematical: q,
    vectorEffect: null,
    vHanging: q,
    vIdeographic: q,
    version: null,
    vertAdvY: q,
    vertOriginX: q,
    vertOriginY: q,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: q,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: O0
}), I0 = Ea({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), T0 = Ea({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: P0
}), M0 = Ea({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), C6 = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, E6 = /[A-Z]/g, Wv = /-[a-z]/g, O6 = /^data[-\w.:]+$/i;
function P6(e, t) {
  const n = qd(t);
  let r = t, i = kn;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && O6.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Wv, T6);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Wv.test(a)) {
        let l = a.replace(E6, I6);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = Dp;
  }
  return new i(r, t);
}
function I6(e) {
  return "-" + e.toLowerCase();
}
function T6(e) {
  return e.charAt(1).toUpperCase();
}
const M6 = S0([E0, x6, I0, T0, M0], "html"), Lp = S0([E0, S6, I0, T0, M0], "svg");
function A6(e) {
  return e.join(" ").trim();
}
var Rp = {}, Yv = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, D6 = /\n/g, L6 = /^\s*/, R6 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, N6 = /^:\s*/, K6 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, F6 = /^[;\s]*/, $6 = /^\s+|\s+$/g, H6 = `
`, Gv = "/", qv = "*", lo = "", z6 = "comment", B6 = "declaration", U6 = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(k) {
    var x = k.match(D6);
    x && (n += x.length);
    var O = k.lastIndexOf(H6);
    r = ~O ? k.length - O : r + k.length;
  }
  function a() {
    var k = { line: n, column: r };
    return function(x) {
      return x.position = new l(k), d(), x;
    };
  }
  function l(k) {
    this.start = k, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function u(k) {
    var x = new Error(
      t.source + ":" + n + ":" + r + ": " + k
    );
    if (x.reason = k, x.filename = t.source, x.line = n, x.column = r, x.source = e, !t.silent) throw x;
  }
  function f(k) {
    var x = k.exec(e);
    if (x) {
      var O = x[0];
      return i(O), e = e.slice(O.length), x;
    }
  }
  function d() {
    f(L6);
  }
  function p(k) {
    var x;
    for (k = k || []; x = g(); )
      x !== !1 && k.push(x);
    return k;
  }
  function g() {
    var k = a();
    if (!(Gv != e.charAt(0) || qv != e.charAt(1))) {
      for (var x = 2; lo != e.charAt(x) && (qv != e.charAt(x) || Gv != e.charAt(x + 1)); )
        ++x;
      if (x += 2, lo === e.charAt(x - 1))
        return u("End of comment missing");
      var O = e.slice(2, x - 2);
      return r += 2, i(O), e = e.slice(x), r += 2, k({
        type: z6,
        comment: O
      });
    }
  }
  function _() {
    var k = a(), x = f(R6);
    if (x) {
      if (g(), !f(N6)) return u("property missing ':'");
      var O = f(K6), S = k({
        type: B6,
        property: Vv(x[0].replace(Yv, lo)),
        value: O ? Vv(O[0].replace(Yv, lo)) : lo
      });
      return f(F6), S;
    }
  }
  function y() {
    var k = [];
    p(k);
    for (var x; x = _(); )
      x !== !1 && (k.push(x), p(k));
    return k;
  }
  return d(), y();
};
function Vv(e) {
  return e ? e.replace($6, lo) : lo;
}
var j6 = hs && hs.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Rp, "__esModule", { value: !0 });
Rp.default = Y6;
var W6 = j6(U6);
function Y6(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, W6.default)(e), i = typeof t == "function";
  return r.forEach(function(a) {
    if (a.type === "declaration") {
      var l = a.property, u = a.value;
      i ? t(l, u, a) : u && (n = n || {}, n[l] = u);
    }
  }), n;
}
var fc = {};
Object.defineProperty(fc, "__esModule", { value: !0 });
fc.camelCase = void 0;
var G6 = /^--[a-zA-Z0-9_-]+$/, q6 = /-([a-z])/g, V6 = /^[^-]+$/, X6 = /^-(webkit|moz|ms|o|khtml)-/, Z6 = /^-(ms)-/, J6 = function(e) {
  return !e || V6.test(e) || G6.test(e);
}, Q6 = function(e, t) {
  return t.toUpperCase();
}, Xv = function(e, t) {
  return "".concat(t, "-");
}, e5 = function(e, t) {
  return t === void 0 && (t = {}), J6(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Z6, Xv) : e = e.replace(X6, Xv), e.replace(q6, Q6));
};
fc.camelCase = e5;
var t5 = hs && hs.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, n5 = t5(Rp), r5 = fc;
function Xd(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, n5.default)(e, function(r, i) {
    r && i && (n[(0, r5.camelCase)(r, t)] = i);
  }), n;
}
Xd.default = Xd;
var i5 = Xd;
const o5 = /* @__PURE__ */ ga(i5), A0 = D0("end"), Np = D0("start");
function D0(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function a5(e) {
  const t = Np(e), n = A0(e);
  if (t && n)
    return { start: t, end: n };
}
function is(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Zv(e.position) : "start" in e || "end" in e ? Zv(e) : "line" in e || "column" in e ? Zd(e) : "";
}
function Zd(e) {
  return Jv(e && e.line) + ":" + Jv(e && e.column);
}
function Zv(e) {
  return Zd(e && e.start) + "-" + Zd(e && e.end);
}
function Jv(e) {
  return e && typeof e == "number" ? e : 1;
}
class Qt extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, l = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (l = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const f = r.indexOf(":");
      f === -1 ? a.ruleId = r : (a.source = r.slice(0, f), a.ruleId = r.slice(f + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const f = a.ancestors[a.ancestors.length - 1];
      f && (a.place = f.position);
    }
    const u = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = u ? u.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = u ? u.line : void 0, this.name = is(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = l && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Qt.prototype.file = "";
Qt.prototype.name = "";
Qt.prototype.reason = "";
Qt.prototype.message = "";
Qt.prototype.stack = "";
Qt.prototype.column = void 0;
Qt.prototype.line = void 0;
Qt.prototype.ancestors = void 0;
Qt.prototype.cause = void 0;
Qt.prototype.fatal = void 0;
Qt.prototype.place = void 0;
Qt.prototype.ruleId = void 0;
Qt.prototype.source = void 0;
const Kp = {}.hasOwnProperty, s5 = /* @__PURE__ */ new Map(), l5 = /[A-Z]/g, u5 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), c5 = /* @__PURE__ */ new Set(["td", "th"]), L0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function f5(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = _5(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = v5(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Lp : M6,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = R0(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function R0(e, t, n) {
  if (t.type === "element")
    return d5(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return h5(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return g5(e, t, n);
  if (t.type === "mdxjsEsm")
    return p5(e, t);
  if (t.type === "root")
    return y5(e, t, n);
  if (t.type === "text")
    return m5(e, t);
}
function d5(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Lp, e.schema = i), e.ancestors.push(t);
  const a = K0(e, t.tagName, !1), l = b5(e, t);
  let u = $p(e, t);
  return u5.has(t.tagName) && (u = u.filter(function(f) {
    return typeof f == "string" ? !w6(f) : !0;
  })), N0(e, l, a, t), Fp(l, u), e.ancestors.pop(), e.schema = r, e.create(t, a, l, n);
}
function h5(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  _s(e, t.position);
}
function p5(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  _s(e, t.position);
}
function g5(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Lp, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : K0(e, t.name, !0), l = w5(e, t), u = $p(e, t);
  return N0(e, l, a, t), Fp(l, u), e.ancestors.pop(), e.schema = r, e.create(t, a, l, n);
}
function y5(e, t, n) {
  const r = {};
  return Fp(r, $p(e, t)), e.create(t, e.Fragment, r, n);
}
function m5(e, t) {
  return t.value;
}
function N0(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Fp(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function v5(e, t, n) {
  return r;
  function r(i, a, l, u) {
    const d = Array.isArray(l.children) ? n : t;
    return u ? d(a, l, u) : d(a, l);
  }
}
function _5(e, t) {
  return n;
  function n(r, i, a, l) {
    const u = Array.isArray(a.children), f = Np(r);
    return t(
      i,
      a,
      l,
      u,
      {
        columnNumber: f ? f.column - 1 : void 0,
        fileName: e,
        lineNumber: f ? f.line : void 0
      },
      void 0
    );
  }
}
function b5(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Kp.call(t.properties, i)) {
      const a = k5(e, i, t.properties[i]);
      if (a) {
        const [l, u] = a;
        e.tableCellAlignToStyle && l === "align" && typeof u == "string" && c5.has(t.tagName) ? r = u : n[l] = u;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function w5(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const l = a.expression;
        l.type;
        const u = l.properties[0];
        u.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(u.argument)
        );
      } else
        _s(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const u = r.value.data.estree.body[0];
          u.type, a = e.evaluater.evaluateExpression(u.expression);
        } else
          _s(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function $p(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : s5;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let l;
    if (e.passKeys) {
      const f = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (f) {
        const d = i.get(f) || 0;
        l = f + "-" + d, i.set(f, d + 1);
      }
    }
    const u = R0(e, a, l);
    u !== void 0 && n.push(u);
  }
  return n;
}
function k5(e, t, n) {
  const r = P6(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? y6(n) : A6(n)), r.property === "style") {
      let i = typeof n == "object" ? n : x5(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = S5(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? C6[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function x5(e, t) {
  try {
    return o5(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Qt("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = L0 + "#cannot-parse-style-attribute", i;
  }
}
function K0(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, l;
    for (; ++a < i.length; ) {
      const u = Bv(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: u,
        computed: !!(a && u.type === "Literal"),
        optional: !1
      } : u;
    }
    r = l;
  } else
    r = Bv(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Kp.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  _s(e);
}
function _s(e, t) {
  const n = new Qt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = L0 + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function S5(e) {
  const t = {};
  let n;
  for (n in e)
    Kp.call(e, n) && (t[C5(n)] = e[n]);
  return t;
}
function C5(e) {
  let t = e.replace(l5, E5);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function E5(e) {
  return "-" + e.toLowerCase();
}
const ed = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, O5 = {};
function P5(e, t) {
  const n = O5, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return F0(e, r, i);
}
function F0(e, t, n) {
  if (I5(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Qv(e.children, t, n);
  }
  return Array.isArray(e) ? Qv(e, t, n) : "";
}
function Qv(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = F0(e[i], t, n);
  return r.join("");
}
function I5(e) {
  return !!(e && typeof e == "object");
}
const e_ = document.createElement("i");
function Hp(e) {
  const t = "&" + e + ";";
  e_.innerHTML = t;
  const n = e_.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
  );
}
function Fr(e, t, n, r) {
  const i = e.length;
  let a = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); a < r.length; )
      l = r.slice(a, a + 1e4), l.unshift(t, 0), e.splice(...l), a += 1e4, t += 1e4;
}
function nr(e, t) {
  return e.length > 0 ? (Fr(e, e.length, 0, t), e) : t;
}
const t_ = {}.hasOwnProperty;
function T5(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    M5(t, e[n]);
  return t;
}
function M5(e, t) {
  let n;
  for (n in t) {
    const i = (t_.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let l;
    if (a)
      for (l in a) {
        t_.call(i, l) || (i[l] = []);
        const u = a[l];
        A5(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(u) ? u : u ? [u] : []
        );
      }
  }
}
function A5(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Fr(e, 0, 0, r);
}
function $0(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function oa(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Dr = qi(/[A-Za-z]/), Kn = qi(/[\dA-Za-z]/), D5 = qi(/[#-'*+\--9=?A-Z^-~]/);
function Jd(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Qd = qi(/\d/), L5 = qi(/[\dA-Fa-f]/), R5 = qi(/[!-/:-@[-`{-~]/);
function _e(e) {
  return e !== null && e < -2;
}
function _n(e) {
  return e !== null && (e < 0 || e === 32);
}
function je(e) {
  return e === -2 || e === -1 || e === 32;
}
const N5 = qi(new RegExp("\\p{P}|\\p{S}", "u")), K5 = qi(/\s/);
function qi(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Oa(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let l = "";
    if (a === 37 && Kn(e.charCodeAt(n + 1)) && Kn(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const u = e.charCodeAt(n + 1);
      a < 56320 && u > 56319 && u < 57344 ? (l = String.fromCharCode(a, u), i = 1) : l = "�";
    } else
      l = String.fromCharCode(a);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function at(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(f) {
    return je(f) ? (e.enter(n), u(f)) : t(f);
  }
  function u(f) {
    return je(f) && a++ < i ? (e.consume(f), u) : (e.exit(n), t(f));
  }
}
const F5 = {
  tokenize: $5
};
function $5(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(u) {
    if (u === null) {
      e.consume(u);
      return;
    }
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), at(e, t, "linePrefix");
  }
  function i(u) {
    return e.enter("paragraph"), a(u);
  }
  function a(u) {
    const f = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = f), n = f, l(u);
  }
  function l(u) {
    if (u === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(u);
      return;
    }
    return _e(u) ? (e.consume(u), e.exit("chunkText"), a) : (e.consume(u), l);
  }
}
const H5 = {
  tokenize: z5
}, n_ = {
  tokenize: B5
};
function z5(e) {
  const t = this, n = [];
  let r = 0, i, a, l;
  return u;
  function u(T) {
    if (r < n.length) {
      const L = n[r];
      return t.containerState = L[1], e.attempt(L[0].continuation, f, d)(T);
    }
    return d(T);
  }
  function f(T) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && M();
      const L = t.events.length;
      let K = L, N;
      for (; K--; )
        if (t.events[K][0] === "exit" && t.events[K][1].type === "chunkFlow") {
          N = t.events[K][1].end;
          break;
        }
      S(r);
      let W = L;
      for (; W < t.events.length; )
        t.events[W][1].end = {
          ...N
        }, W++;
      return Fr(t.events, K + 1, 0, t.events.slice(L)), t.events.length = W, d(T);
    }
    return u(T);
  }
  function d(T) {
    if (r === n.length) {
      if (!i)
        return _(T);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return k(T);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(n_, p, g)(T);
  }
  function p(T) {
    return i && M(), S(r), _(T);
  }
  function g(T) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, k(T);
  }
  function _(T) {
    return t.containerState = {}, e.attempt(n_, y, k)(T);
  }
  function y(T) {
    return r++, n.push([t.currentConstruct, t.containerState]), _(T);
  }
  function k(T) {
    if (T === null) {
      i && M(), S(0), e.consume(T);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), x(T);
  }
  function x(T) {
    if (T === null) {
      O(e.exit("chunkFlow"), !0), S(0), e.consume(T);
      return;
    }
    return _e(T) ? (e.consume(T), O(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, u) : (e.consume(T), x);
  }
  function O(T, L) {
    const K = t.sliceStream(T);
    if (L && K.push(null), T.previous = a, a && (a.next = T), a = T, i.defineSkip(T.start), i.write(K), t.parser.lazy[T.start.line]) {
      let N = i.events.length;
      for (; N--; )
        if (
          // The token starts before the line ending…
          i.events[N][1].start.offset < l && // …and either is not ended yet…
          (!i.events[N][1].end || // …or ends after it.
          i.events[N][1].end.offset > l)
        )
          return;
      const W = t.events.length;
      let ne = W, oe, le;
      for (; ne--; )
        if (t.events[ne][0] === "exit" && t.events[ne][1].type === "chunkFlow") {
          if (oe) {
            le = t.events[ne][1].end;
            break;
          }
          oe = !0;
        }
      for (S(r), N = W; N < t.events.length; )
        t.events[N][1].end = {
          ...le
        }, N++;
      Fr(t.events, ne + 1, 0, t.events.slice(W)), t.events.length = N;
    }
  }
  function S(T) {
    let L = n.length;
    for (; L-- > T; ) {
      const K = n[L];
      t.containerState = K[1], K[0].exit.call(t, e);
    }
    n.length = T;
  }
  function M() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function B5(e, t, n) {
  return at(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function r_(e) {
  if (e === null || _n(e) || K5(e))
    return 1;
  if (N5(e))
    return 2;
}
function zp(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const eh = {
  name: "attention",
  resolveAll: U5,
  tokenize: j5
};
function U5(e, t) {
  let n = -1, r, i, a, l, u, f, d, p;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          f = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const g = {
            ...e[r][1].end
          }, _ = {
            ...e[n][1].start
          };
          i_(g, -f), i_(_, f), l = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: g,
            end: {
              ...e[r][1].end
            }
          }, u = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: _
          }, a = {
            type: f > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: f > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...u.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...u.end
          }, d = [], e[r][1].end.offset - e[r][1].start.offset && (d = nr(d, [["enter", e[r][1], t], ["exit", e[r][1], t]])), d = nr(d, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), d = nr(d, zp(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), d = nr(d, [["exit", a, t], ["enter", u, t], ["exit", u, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (p = 2, d = nr(d, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : p = 0, Fr(e, r - 1, n - r + 3, d), n = r + d.length - p - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function j5(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = r_(r);
  let a;
  return l;
  function l(f) {
    return a = f, e.enter("attentionSequence"), u(f);
  }
  function u(f) {
    if (f === a)
      return e.consume(f), u;
    const d = e.exit("attentionSequence"), p = r_(f), g = !p || p === 2 && i || n.includes(f), _ = !i || i === 2 && p || n.includes(r);
    return d._open = !!(a === 42 ? g : g && (i || !_)), d._close = !!(a === 42 ? _ : _ && (p || !g)), t(f);
  }
}
function i_(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const W5 = {
  name: "autolink",
  tokenize: Y5
};
function Y5(e, t, n) {
  let r = 0;
  return i;
  function i(y) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(y), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(y) {
    return Dr(y) ? (e.consume(y), l) : y === 64 ? n(y) : d(y);
  }
  function l(y) {
    return y === 43 || y === 45 || y === 46 || Kn(y) ? (r = 1, u(y)) : d(y);
  }
  function u(y) {
    return y === 58 ? (e.consume(y), r = 0, f) : (y === 43 || y === 45 || y === 46 || Kn(y)) && r++ < 32 ? (e.consume(y), u) : (r = 0, d(y));
  }
  function f(y) {
    return y === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(y), e.exit("autolinkMarker"), e.exit("autolink"), t) : y === null || y === 32 || y === 60 || Jd(y) ? n(y) : (e.consume(y), f);
  }
  function d(y) {
    return y === 64 ? (e.consume(y), p) : D5(y) ? (e.consume(y), d) : n(y);
  }
  function p(y) {
    return Kn(y) ? g(y) : n(y);
  }
  function g(y) {
    return y === 46 ? (e.consume(y), r = 0, p) : y === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(y), e.exit("autolinkMarker"), e.exit("autolink"), t) : _(y);
  }
  function _(y) {
    if ((y === 45 || Kn(y)) && r++ < 63) {
      const k = y === 45 ? _ : g;
      return e.consume(y), k;
    }
    return n(y);
  }
}
const dc = {
  partial: !0,
  tokenize: G5
};
function G5(e, t, n) {
  return r;
  function r(a) {
    return je(a) ? at(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || _e(a) ? t(a) : n(a);
  }
}
const H0 = {
  continuation: {
    tokenize: V5
  },
  exit: X5,
  name: "blockQuote",
  tokenize: q5
};
function q5(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const u = r.containerState;
      return u.open || (e.enter("blockQuote", {
        _container: !0
      }), u.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), a;
    }
    return n(l);
  }
  function a(l) {
    return je(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function V5(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return je(l) ? at(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(H0, t, n)(l);
  }
}
function X5(e) {
  e.exit("blockQuote");
}
const z0 = {
  name: "characterEscape",
  tokenize: Z5
};
function Z5(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return R5(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const B0 = {
  name: "characterReference",
  tokenize: J5
};
function J5(e, t, n) {
  const r = this;
  let i = 0, a, l;
  return u;
  function u(g) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f;
  }
  function f(g) {
    return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), d) : (e.enter("characterReferenceValue"), a = 31, l = Kn, p(g));
  }
  function d(g) {
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = L5, p) : (e.enter("characterReferenceValue"), a = 7, l = Qd, p(g));
  }
  function p(g) {
    if (g === 59 && i) {
      const _ = e.exit("characterReferenceValue");
      return l === Kn && !Hp(r.sliceSerialize(_)) ? n(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && i++ < a ? (e.consume(g), p) : n(g);
  }
}
const o_ = {
  partial: !0,
  tokenize: ez
}, a_ = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Q5
};
function Q5(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: K
  };
  let a = 0, l = 0, u;
  return f;
  function f(N) {
    return d(N);
  }
  function d(N) {
    const W = r.events[r.events.length - 1];
    return a = W && W[1].type === "linePrefix" ? W[2].sliceSerialize(W[1], !0).length : 0, u = N, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(N);
  }
  function p(N) {
    return N === u ? (l++, e.consume(N), p) : l < 3 ? n(N) : (e.exit("codeFencedFenceSequence"), je(N) ? at(e, g, "whitespace")(N) : g(N));
  }
  function g(N) {
    return N === null || _e(N) ? (e.exit("codeFencedFence"), r.interrupt ? t(N) : e.check(o_, x, L)(N)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), _(N));
  }
  function _(N) {
    return N === null || _e(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(N)) : je(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), at(e, y, "whitespace")(N)) : N === 96 && N === u ? n(N) : (e.consume(N), _);
  }
  function y(N) {
    return N === null || _e(N) ? g(N) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), k(N));
  }
  function k(N) {
    return N === null || _e(N) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(N)) : N === 96 && N === u ? n(N) : (e.consume(N), k);
  }
  function x(N) {
    return e.attempt(i, L, O)(N);
  }
  function O(N) {
    return e.enter("lineEnding"), e.consume(N), e.exit("lineEnding"), S;
  }
  function S(N) {
    return a > 0 && je(N) ? at(e, M, "linePrefix", a + 1)(N) : M(N);
  }
  function M(N) {
    return N === null || _e(N) ? e.check(o_, x, L)(N) : (e.enter("codeFlowValue"), T(N));
  }
  function T(N) {
    return N === null || _e(N) ? (e.exit("codeFlowValue"), M(N)) : (e.consume(N), T);
  }
  function L(N) {
    return e.exit("codeFenced"), t(N);
  }
  function K(N, W, ne) {
    let oe = 0;
    return le;
    function le(ce) {
      return N.enter("lineEnding"), N.consume(ce), N.exit("lineEnding"), Q;
    }
    function Q(ce) {
      return N.enter("codeFencedFence"), je(ce) ? at(N, V, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ce) : V(ce);
    }
    function V(ce) {
      return ce === u ? (N.enter("codeFencedFenceSequence"), he(ce)) : ne(ce);
    }
    function he(ce) {
      return ce === u ? (oe++, N.consume(ce), he) : oe >= l ? (N.exit("codeFencedFenceSequence"), je(ce) ? at(N, me, "whitespace")(ce) : me(ce)) : ne(ce);
    }
    function me(ce) {
      return ce === null || _e(ce) ? (N.exit("codeFencedFence"), W(ce)) : ne(ce);
    }
  }
}
function ez(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const td = {
  name: "codeIndented",
  tokenize: nz
}, tz = {
  partial: !0,
  tokenize: rz
};
function nz(e, t, n) {
  const r = this;
  return i;
  function i(d) {
    return e.enter("codeIndented"), at(e, a, "linePrefix", 5)(d);
  }
  function a(d) {
    const p = r.events[r.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? l(d) : n(d);
  }
  function l(d) {
    return d === null ? f(d) : _e(d) ? e.attempt(tz, l, f)(d) : (e.enter("codeFlowValue"), u(d));
  }
  function u(d) {
    return d === null || _e(d) ? (e.exit("codeFlowValue"), l(d)) : (e.consume(d), u);
  }
  function f(d) {
    return e.exit("codeIndented"), t(d);
  }
}
function rz(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : _e(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : at(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? t(l) : _e(l) ? i(l) : n(l);
  }
}
const iz = {
  name: "codeText",
  previous: az,
  resolve: oz,
  tokenize: sz
};
function oz(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function az(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function sz(e, t, n) {
  let r = 0, i, a;
  return l;
  function l(g) {
    return e.enter("codeText"), e.enter("codeTextSequence"), u(g);
  }
  function u(g) {
    return g === 96 ? (e.consume(g), r++, u) : (e.exit("codeTextSequence"), f(g));
  }
  function f(g) {
    return g === null ? n(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (a = e.enter("codeTextSequence"), i = 0, p(g)) : _e(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), d(g));
  }
  function d(g) {
    return g === null || g === 32 || g === 96 || _e(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), d);
  }
  function p(g) {
    return g === 96 ? (e.consume(g), i++, p) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (a.type = "codeTextData", d(g));
  }
}
class lz {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Za(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Za(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Za(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Za(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Za(this.left, n.reverse());
      }
  }
}
function Za(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function U0(e) {
  const t = {};
  let n = -1, r, i, a, l, u, f, d;
  const p = new lz(e);
  for (; ++n < p.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = p.get(n), n && r[1].type === "chunkFlow" && p.get(n - 1)[1].type === "listItemPrefix" && (f = r[1]._tokenizer.events, a = 0, a < f.length && f[a][1].type === "lineEndingBlank" && (a += 2), a < f.length && f[a][1].type === "content"))
      for (; ++a < f.length && f[a][1].type !== "content"; )
        f[a][1].type === "chunkText" && (f[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, uz(p, n)), n = t[n], d = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (l = p.get(a), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (p.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = a);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...p.get(i)[1].start
      }, u = p.slice(i, n), u.unshift(r), p.splice(i, n - i + 1, u));
    }
  }
  return Fr(e, 0, Number.POSITIVE_INFINITY, p.slice(0)), !d;
}
function uz(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const u = l.events, f = [], d = {};
  let p, g, _ = -1, y = n, k = 0, x = 0;
  const O = [x];
  for (; y; ) {
    for (; e.get(++i)[1] !== y; )
      ;
    a.push(i), y._tokenizer || (p = r.sliceStream(y), y.next || p.push(null), g && l.defineSkip(y.start), y._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(p), y._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), g = y, y = y.next;
  }
  for (y = n; ++_ < u.length; )
    // Find a void token that includes a break.
    u[_][0] === "exit" && u[_ - 1][0] === "enter" && u[_][1].type === u[_ - 1][1].type && u[_][1].start.line !== u[_][1].end.line && (x = _ + 1, O.push(x), y._tokenizer = void 0, y.previous = void 0, y = y.next);
  for (l.events = [], y ? (y._tokenizer = void 0, y.previous = void 0) : O.pop(), _ = O.length; _--; ) {
    const S = u.slice(O[_], O[_ + 1]), M = a.pop();
    f.push([M, M + S.length - 1]), e.splice(M, 2, S);
  }
  for (f.reverse(), _ = -1; ++_ < f.length; )
    d[k + f[_][0]] = k + f[_][1], k += f[_][1] - f[_][0] - 1;
  return d;
}
const cz = {
  resolve: dz,
  tokenize: hz
}, fz = {
  partial: !0,
  tokenize: pz
};
function dz(e) {
  return U0(e), e;
}
function hz(e, t) {
  let n;
  return r;
  function r(u) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(u);
  }
  function i(u) {
    return u === null ? a(u) : _e(u) ? e.check(fz, l, a)(u) : (e.consume(u), i);
  }
  function a(u) {
    return e.exit("chunkContent"), e.exit("content"), t(u);
  }
  function l(u) {
    return e.consume(u), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function pz(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), at(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || _e(l))
      return n(l);
    const u = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function j0(e, t, n, r, i, a, l, u, f) {
  const d = f || Number.POSITIVE_INFINITY;
  let p = 0;
  return g;
  function g(S) {
    return S === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(S), e.exit(a), _) : S === null || S === 32 || S === 41 || Jd(S) ? n(S) : (e.enter(r), e.enter(l), e.enter(u), e.enter("chunkString", {
      contentType: "string"
    }), x(S));
  }
  function _(S) {
    return S === 62 ? (e.enter(a), e.consume(S), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(u), e.enter("chunkString", {
      contentType: "string"
    }), y(S));
  }
  function y(S) {
    return S === 62 ? (e.exit("chunkString"), e.exit(u), _(S)) : S === null || S === 60 || _e(S) ? n(S) : (e.consume(S), S === 92 ? k : y);
  }
  function k(S) {
    return S === 60 || S === 62 || S === 92 ? (e.consume(S), y) : y(S);
  }
  function x(S) {
    return !p && (S === null || S === 41 || _n(S)) ? (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), t(S)) : p < d && S === 40 ? (e.consume(S), p++, x) : S === 41 ? (e.consume(S), p--, x) : S === null || S === 32 || S === 40 || Jd(S) ? n(S) : (e.consume(S), S === 92 ? O : x);
  }
  function O(S) {
    return S === 40 || S === 41 || S === 92 ? (e.consume(S), x) : x(S);
  }
}
function W0(e, t, n, r, i, a) {
  const l = this;
  let u = 0, f;
  return d;
  function d(y) {
    return e.enter(r), e.enter(i), e.consume(y), e.exit(i), e.enter(a), p;
  }
  function p(y) {
    return u > 999 || y === null || y === 91 || y === 93 && !f || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    y === 94 && !u && "_hiddenFootnoteSupport" in l.parser.constructs ? n(y) : y === 93 ? (e.exit(a), e.enter(i), e.consume(y), e.exit(i), e.exit(r), t) : _e(y) ? (e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), p) : (e.enter("chunkString", {
      contentType: "string"
    }), g(y));
  }
  function g(y) {
    return y === null || y === 91 || y === 93 || _e(y) || u++ > 999 ? (e.exit("chunkString"), p(y)) : (e.consume(y), f || (f = !je(y)), y === 92 ? _ : g);
  }
  function _(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), u++, g) : g(y);
  }
}
function Y0(e, t, n, r, i, a) {
  let l;
  return u;
  function u(_) {
    return _ === 34 || _ === 39 || _ === 40 ? (e.enter(r), e.enter(i), e.consume(_), e.exit(i), l = _ === 40 ? 41 : _, f) : n(_);
  }
  function f(_) {
    return _ === l ? (e.enter(i), e.consume(_), e.exit(i), e.exit(r), t) : (e.enter(a), d(_));
  }
  function d(_) {
    return _ === l ? (e.exit(a), f(l)) : _ === null ? n(_) : _e(_) ? (e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), at(e, d, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), p(_));
  }
  function p(_) {
    return _ === l || _ === null || _e(_) ? (e.exit("chunkString"), d(_)) : (e.consume(_), _ === 92 ? g : p);
  }
  function g(_) {
    return _ === l || _ === 92 ? (e.consume(_), p) : p(_);
  }
}
function os(e, t) {
  let n;
  return r;
  function r(i) {
    return _e(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : je(i) ? at(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const gz = {
  name: "definition",
  tokenize: mz
}, yz = {
  partial: !0,
  tokenize: vz
};
function mz(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(y) {
    return e.enter("definition"), l(y);
  }
  function l(y) {
    return W0.call(
      r,
      e,
      u,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(y);
  }
  function u(y) {
    return i = oa(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), y === 58 ? (e.enter("definitionMarker"), e.consume(y), e.exit("definitionMarker"), f) : n(y);
  }
  function f(y) {
    return _n(y) ? os(e, d)(y) : d(y);
  }
  function d(y) {
    return j0(
      e,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(y);
  }
  function p(y) {
    return e.attempt(yz, g, g)(y);
  }
  function g(y) {
    return je(y) ? at(e, _, "whitespace")(y) : _(y);
  }
  function _(y) {
    return y === null || _e(y) ? (e.exit("definition"), r.parser.defined.push(i), t(y)) : n(y);
  }
}
function vz(e, t, n) {
  return r;
  function r(u) {
    return _n(u) ? os(e, i)(u) : n(u);
  }
  function i(u) {
    return Y0(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(u);
  }
  function a(u) {
    return je(u) ? at(e, l, "whitespace")(u) : l(u);
  }
  function l(u) {
    return u === null || _e(u) ? t(u) : n(u);
  }
}
const _z = {
  name: "hardBreakEscape",
  tokenize: bz
};
function bz(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return _e(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const wz = {
  name: "headingAtx",
  resolve: kz,
  tokenize: xz
};
function kz(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Fr(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function xz(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("atxHeading"), a(p);
  }
  function a(p) {
    return e.enter("atxHeadingSequence"), l(p);
  }
  function l(p) {
    return p === 35 && r++ < 6 ? (e.consume(p), l) : p === null || _n(p) ? (e.exit("atxHeadingSequence"), u(p)) : n(p);
  }
  function u(p) {
    return p === 35 ? (e.enter("atxHeadingSequence"), f(p)) : p === null || _e(p) ? (e.exit("atxHeading"), t(p)) : je(p) ? at(e, u, "whitespace")(p) : (e.enter("atxHeadingText"), d(p));
  }
  function f(p) {
    return p === 35 ? (e.consume(p), f) : (e.exit("atxHeadingSequence"), u(p));
  }
  function d(p) {
    return p === null || p === 35 || _n(p) ? (e.exit("atxHeadingText"), u(p)) : (e.consume(p), d);
  }
}
const Sz = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], s_ = ["pre", "script", "style", "textarea"], Cz = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Pz,
  tokenize: Iz
}, Ez = {
  partial: !0,
  tokenize: Mz
}, Oz = {
  partial: !0,
  tokenize: Tz
};
function Pz(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Iz(e, t, n) {
  const r = this;
  let i, a, l, u, f;
  return d;
  function d(P) {
    return p(P);
  }
  function p(P) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(P), g;
  }
  function g(P) {
    return P === 33 ? (e.consume(P), _) : P === 47 ? (e.consume(P), a = !0, x) : P === 63 ? (e.consume(P), i = 3, r.interrupt ? t : C) : Dr(P) ? (e.consume(P), l = String.fromCharCode(P), O) : n(P);
  }
  function _(P) {
    return P === 45 ? (e.consume(P), i = 2, y) : P === 91 ? (e.consume(P), i = 5, u = 0, k) : Dr(P) ? (e.consume(P), i = 4, r.interrupt ? t : C) : n(P);
  }
  function y(P) {
    return P === 45 ? (e.consume(P), r.interrupt ? t : C) : n(P);
  }
  function k(P) {
    const be = "CDATA[";
    return P === be.charCodeAt(u++) ? (e.consume(P), u === be.length ? r.interrupt ? t : V : k) : n(P);
  }
  function x(P) {
    return Dr(P) ? (e.consume(P), l = String.fromCharCode(P), O) : n(P);
  }
  function O(P) {
    if (P === null || P === 47 || P === 62 || _n(P)) {
      const be = P === 47, de = l.toLowerCase();
      return !be && !a && s_.includes(de) ? (i = 1, r.interrupt ? t(P) : V(P)) : Sz.includes(l.toLowerCase()) ? (i = 6, be ? (e.consume(P), S) : r.interrupt ? t(P) : V(P)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(P) : a ? M(P) : T(P));
    }
    return P === 45 || Kn(P) ? (e.consume(P), l += String.fromCharCode(P), O) : n(P);
  }
  function S(P) {
    return P === 62 ? (e.consume(P), r.interrupt ? t : V) : n(P);
  }
  function M(P) {
    return je(P) ? (e.consume(P), M) : le(P);
  }
  function T(P) {
    return P === 47 ? (e.consume(P), le) : P === 58 || P === 95 || Dr(P) ? (e.consume(P), L) : je(P) ? (e.consume(P), T) : le(P);
  }
  function L(P) {
    return P === 45 || P === 46 || P === 58 || P === 95 || Kn(P) ? (e.consume(P), L) : K(P);
  }
  function K(P) {
    return P === 61 ? (e.consume(P), N) : je(P) ? (e.consume(P), K) : T(P);
  }
  function N(P) {
    return P === null || P === 60 || P === 61 || P === 62 || P === 96 ? n(P) : P === 34 || P === 39 ? (e.consume(P), f = P, W) : je(P) ? (e.consume(P), N) : ne(P);
  }
  function W(P) {
    return P === f ? (e.consume(P), f = null, oe) : P === null || _e(P) ? n(P) : (e.consume(P), W);
  }
  function ne(P) {
    return P === null || P === 34 || P === 39 || P === 47 || P === 60 || P === 61 || P === 62 || P === 96 || _n(P) ? K(P) : (e.consume(P), ne);
  }
  function oe(P) {
    return P === 47 || P === 62 || je(P) ? T(P) : n(P);
  }
  function le(P) {
    return P === 62 ? (e.consume(P), Q) : n(P);
  }
  function Q(P) {
    return P === null || _e(P) ? V(P) : je(P) ? (e.consume(P), Q) : n(P);
  }
  function V(P) {
    return P === 45 && i === 2 ? (e.consume(P), Me) : P === 60 && i === 1 ? (e.consume(P), $e) : P === 62 && i === 4 ? (e.consume(P), Ae) : P === 63 && i === 3 ? (e.consume(P), C) : P === 93 && i === 5 ? (e.consume(P), ve) : _e(P) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ez, pt, he)(P)) : P === null || _e(P) ? (e.exit("htmlFlowData"), he(P)) : (e.consume(P), V);
  }
  function he(P) {
    return e.check(Oz, me, pt)(P);
  }
  function me(P) {
    return e.enter("lineEnding"), e.consume(P), e.exit("lineEnding"), ce;
  }
  function ce(P) {
    return P === null || _e(P) ? he(P) : (e.enter("htmlFlowData"), V(P));
  }
  function Me(P) {
    return P === 45 ? (e.consume(P), C) : V(P);
  }
  function $e(P) {
    return P === 47 ? (e.consume(P), l = "", Ye) : V(P);
  }
  function Ye(P) {
    if (P === 62) {
      const be = l.toLowerCase();
      return s_.includes(be) ? (e.consume(P), Ae) : V(P);
    }
    return Dr(P) && l.length < 8 ? (e.consume(P), l += String.fromCharCode(P), Ye) : V(P);
  }
  function ve(P) {
    return P === 93 ? (e.consume(P), C) : V(P);
  }
  function C(P) {
    return P === 62 ? (e.consume(P), Ae) : P === 45 && i === 2 ? (e.consume(P), C) : V(P);
  }
  function Ae(P) {
    return P === null || _e(P) ? (e.exit("htmlFlowData"), pt(P)) : (e.consume(P), Ae);
  }
  function pt(P) {
    return e.exit("htmlFlow"), t(P);
  }
}
function Tz(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return _e(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : n(l);
  }
  function a(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function Mz(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(dc, t, n);
  }
}
const Az = {
  name: "htmlText",
  tokenize: Dz
};
function Dz(e, t, n) {
  const r = this;
  let i, a, l;
  return u;
  function u(C) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(C), f;
  }
  function f(C) {
    return C === 33 ? (e.consume(C), d) : C === 47 ? (e.consume(C), K) : C === 63 ? (e.consume(C), T) : Dr(C) ? (e.consume(C), ne) : n(C);
  }
  function d(C) {
    return C === 45 ? (e.consume(C), p) : C === 91 ? (e.consume(C), a = 0, k) : Dr(C) ? (e.consume(C), M) : n(C);
  }
  function p(C) {
    return C === 45 ? (e.consume(C), y) : n(C);
  }
  function g(C) {
    return C === null ? n(C) : C === 45 ? (e.consume(C), _) : _e(C) ? (l = g, $e(C)) : (e.consume(C), g);
  }
  function _(C) {
    return C === 45 ? (e.consume(C), y) : g(C);
  }
  function y(C) {
    return C === 62 ? Me(C) : C === 45 ? _(C) : g(C);
  }
  function k(C) {
    const Ae = "CDATA[";
    return C === Ae.charCodeAt(a++) ? (e.consume(C), a === Ae.length ? x : k) : n(C);
  }
  function x(C) {
    return C === null ? n(C) : C === 93 ? (e.consume(C), O) : _e(C) ? (l = x, $e(C)) : (e.consume(C), x);
  }
  function O(C) {
    return C === 93 ? (e.consume(C), S) : x(C);
  }
  function S(C) {
    return C === 62 ? Me(C) : C === 93 ? (e.consume(C), S) : x(C);
  }
  function M(C) {
    return C === null || C === 62 ? Me(C) : _e(C) ? (l = M, $e(C)) : (e.consume(C), M);
  }
  function T(C) {
    return C === null ? n(C) : C === 63 ? (e.consume(C), L) : _e(C) ? (l = T, $e(C)) : (e.consume(C), T);
  }
  function L(C) {
    return C === 62 ? Me(C) : T(C);
  }
  function K(C) {
    return Dr(C) ? (e.consume(C), N) : n(C);
  }
  function N(C) {
    return C === 45 || Kn(C) ? (e.consume(C), N) : W(C);
  }
  function W(C) {
    return _e(C) ? (l = W, $e(C)) : je(C) ? (e.consume(C), W) : Me(C);
  }
  function ne(C) {
    return C === 45 || Kn(C) ? (e.consume(C), ne) : C === 47 || C === 62 || _n(C) ? oe(C) : n(C);
  }
  function oe(C) {
    return C === 47 ? (e.consume(C), Me) : C === 58 || C === 95 || Dr(C) ? (e.consume(C), le) : _e(C) ? (l = oe, $e(C)) : je(C) ? (e.consume(C), oe) : Me(C);
  }
  function le(C) {
    return C === 45 || C === 46 || C === 58 || C === 95 || Kn(C) ? (e.consume(C), le) : Q(C);
  }
  function Q(C) {
    return C === 61 ? (e.consume(C), V) : _e(C) ? (l = Q, $e(C)) : je(C) ? (e.consume(C), Q) : oe(C);
  }
  function V(C) {
    return C === null || C === 60 || C === 61 || C === 62 || C === 96 ? n(C) : C === 34 || C === 39 ? (e.consume(C), i = C, he) : _e(C) ? (l = V, $e(C)) : je(C) ? (e.consume(C), V) : (e.consume(C), me);
  }
  function he(C) {
    return C === i ? (e.consume(C), i = void 0, ce) : C === null ? n(C) : _e(C) ? (l = he, $e(C)) : (e.consume(C), he);
  }
  function me(C) {
    return C === null || C === 34 || C === 39 || C === 60 || C === 61 || C === 96 ? n(C) : C === 47 || C === 62 || _n(C) ? oe(C) : (e.consume(C), me);
  }
  function ce(C) {
    return C === 47 || C === 62 || _n(C) ? oe(C) : n(C);
  }
  function Me(C) {
    return C === 62 ? (e.consume(C), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(C);
  }
  function $e(C) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), Ye;
  }
  function Ye(C) {
    return je(C) ? at(e, ve, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : ve(C);
  }
  function ve(C) {
    return e.enter("htmlTextData"), l(C);
  }
}
const Bp = {
  name: "labelEnd",
  resolveAll: Kz,
  resolveTo: Fz,
  tokenize: $z
}, Lz = {
  tokenize: Hz
}, Rz = {
  tokenize: zz
}, Nz = {
  tokenize: Bz
};
function Kz(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Fr(e, 0, e.length, n), e;
}
function Fz(e, t) {
  let n = e.length, r = 0, i, a, l, u;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const f = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, d = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, p = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return u = [["enter", f, t], ["enter", d, t]], u = nr(u, e.slice(a + 1, a + r + 3)), u = nr(u, [["enter", p, t]]), u = nr(u, zp(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, l - 3), t)), u = nr(u, [["exit", p, t], e[l - 2], e[l - 1], ["exit", d, t]]), u = nr(u, e.slice(l + 1)), u = nr(u, [["exit", f, t]]), Fr(e, a, e.length, u), e;
}
function $z(e, t, n) {
  const r = this;
  let i = r.events.length, a, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return u;
  function u(_) {
    return a ? a._inactive ? g(_) : (l = r.parser.defined.includes(oa(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(_), e.exit("labelMarker"), e.exit("labelEnd"), f) : n(_);
  }
  function f(_) {
    return _ === 40 ? e.attempt(Lz, p, l ? p : g)(_) : _ === 91 ? e.attempt(Rz, p, l ? d : g)(_) : l ? p(_) : g(_);
  }
  function d(_) {
    return e.attempt(Nz, p, g)(_);
  }
  function p(_) {
    return t(_);
  }
  function g(_) {
    return a._balanced = !0, n(_);
  }
}
function Hz(e, t, n) {
  return r;
  function r(g) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), i;
  }
  function i(g) {
    return _n(g) ? os(e, a)(g) : a(g);
  }
  function a(g) {
    return g === 41 ? p(g) : j0(e, l, u, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return _n(g) ? os(e, f)(g) : p(g);
  }
  function u(g) {
    return n(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? Y0(e, d, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : p(g);
  }
  function d(g) {
    return _n(g) ? os(e, p)(g) : p(g);
  }
  function p(g) {
    return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : n(g);
  }
}
function zz(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return W0.call(r, e, a, l, "reference", "referenceMarker", "referenceString")(u);
  }
  function a(u) {
    return r.parser.defined.includes(oa(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(u) : n(u);
  }
  function l(u) {
    return n(u);
  }
}
function Bz(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const Uz = {
  name: "labelStartImage",
  resolveAll: Bp.resolveAll,
  tokenize: jz
};
function jz(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(u), e.exit("labelImageMarker"), a;
  }
  function a(u) {
    return u === 91 ? (e.enter("labelMarker"), e.consume(u), e.exit("labelMarker"), e.exit("labelImage"), l) : n(u);
  }
  function l(u) {
    return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(u) : t(u);
  }
}
const Wz = {
  name: "labelStartLink",
  resolveAll: Bp.resolveAll,
  tokenize: Yz
};
function Yz(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const nd = {
  name: "lineEnding",
  tokenize: Gz
};
function Gz(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), at(e, t, "linePrefix");
  }
}
const Jl = {
  name: "thematicBreak",
  tokenize: qz
};
function qz(e, t, n) {
  let r = 0, i;
  return a;
  function a(d) {
    return e.enter("thematicBreak"), l(d);
  }
  function l(d) {
    return i = d, u(d);
  }
  function u(d) {
    return d === i ? (e.enter("thematicBreakSequence"), f(d)) : r >= 3 && (d === null || _e(d)) ? (e.exit("thematicBreak"), t(d)) : n(d);
  }
  function f(d) {
    return d === i ? (e.consume(d), r++, f) : (e.exit("thematicBreakSequence"), je(d) ? at(e, u, "whitespace")(d) : u(d));
  }
}
const gn = {
  continuation: {
    tokenize: Jz
  },
  exit: e7,
  name: "list",
  tokenize: Zz
}, Vz = {
  partial: !0,
  tokenize: t7
}, Xz = {
  partial: !0,
  tokenize: Qz
};
function Zz(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return u;
  function u(y) {
    const k = r.containerState.type || (y === 42 || y === 43 || y === 45 ? "listUnordered" : "listOrdered");
    if (k === "listUnordered" ? !r.containerState.marker || y === r.containerState.marker : Qd(y)) {
      if (r.containerState.type || (r.containerState.type = k, e.enter(k, {
        _container: !0
      })), k === "listUnordered")
        return e.enter("listItemPrefix"), y === 42 || y === 45 ? e.check(Jl, n, d)(y) : d(y);
      if (!r.interrupt || y === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(y);
    }
    return n(y);
  }
  function f(y) {
    return Qd(y) && ++l < 10 ? (e.consume(y), f) : (!r.interrupt || l < 2) && (r.containerState.marker ? y === r.containerState.marker : y === 41 || y === 46) ? (e.exit("listItemValue"), d(y)) : n(y);
  }
  function d(y) {
    return e.enter("listItemMarker"), e.consume(y), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || y, e.check(
      dc,
      // Can’t be empty when interrupting.
      r.interrupt ? n : p,
      e.attempt(Vz, _, g)
    );
  }
  function p(y) {
    return r.containerState.initialBlankLine = !0, a++, _(y);
  }
  function g(y) {
    return je(y) ? (e.enter("listItemPrefixWhitespace"), e.consume(y), e.exit("listItemPrefixWhitespace"), _) : n(y);
  }
  function _(y) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(y);
  }
}
function Jz(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(dc, i, a);
  function i(u) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, at(e, t, "listItemIndent", r.containerState.size + 1)(u);
  }
  function a(u) {
    return r.containerState.furtherBlankLines || !je(u) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(u)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Xz, t, l)(u));
  }
  function l(u) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, at(e, e.attempt(gn, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u);
  }
}
function Qz(e, t, n) {
  const r = this;
  return at(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function e7(e) {
  e.exit(this.containerState.type);
}
function t7(e, t, n) {
  const r = this;
  return at(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const l = r.events[r.events.length - 1];
    return !je(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const l_ = {
  name: "setextUnderline",
  resolveTo: n7,
  tokenize: r7
};
function n7(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", l, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[a][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function r7(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(d) {
    let p = r.events.length, g;
    for (; p--; )
      if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
        g = r.events[p][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || g) ? (e.enter("setextHeadingLine"), i = d, l(d)) : n(d);
  }
  function l(d) {
    return e.enter("setextHeadingLineSequence"), u(d);
  }
  function u(d) {
    return d === i ? (e.consume(d), u) : (e.exit("setextHeadingLineSequence"), je(d) ? at(e, f, "lineSuffix")(d) : f(d));
  }
  function f(d) {
    return d === null || _e(d) ? (e.exit("setextHeadingLine"), t(d)) : n(d);
  }
}
const i7 = {
  tokenize: o7
};
function o7(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    dc,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, at(e, e.attempt(this.parser.constructs.flow, i, e.attempt(cz, i)), "linePrefix"))
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const a7 = {
  resolveAll: q0()
}, s7 = G0("string"), l7 = G0("text");
function G0(e) {
  return {
    resolveAll: q0(e === "text" ? u7 : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, l, u);
    return l;
    function l(p) {
      return d(p) ? a(p) : u(p);
    }
    function u(p) {
      if (p === null) {
        n.consume(p);
        return;
      }
      return n.enter("data"), n.consume(p), f;
    }
    function f(p) {
      return d(p) ? (n.exit("data"), a(p)) : (n.consume(p), f);
    }
    function d(p) {
      if (p === null)
        return !0;
      const g = i[p];
      let _ = -1;
      if (g)
        for (; ++_ < g.length; ) {
          const y = g[_];
          if (!y.previous || y.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function q0(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function u7(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, l = -1, u = 0, f;
      for (; a--; ) {
        const d = i[a];
        if (typeof d == "string") {
          for (l = d.length; d.charCodeAt(l - 1) === 32; )
            u++, l--;
          if (l) break;
          l = -1;
        } else if (d === -2)
          f = !0, u++;
        else if (d !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (u = 0), u) {
        const d = {
          type: n === e.length || f || u < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? l : r.start._bufferIndex + l,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - u,
            offset: r.end.offset - u
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...d.start
        }, r.start.offset === r.end.offset ? Object.assign(r, d) : (e.splice(n, 0, ["enter", d, t], ["exit", d, t]), n += 2);
      }
      n++;
    }
  return e;
}
const c7 = {
  42: gn,
  43: gn,
  45: gn,
  48: gn,
  49: gn,
  50: gn,
  51: gn,
  52: gn,
  53: gn,
  54: gn,
  55: gn,
  56: gn,
  57: gn,
  62: H0
}, f7 = {
  91: gz
}, d7 = {
  [-2]: td,
  [-1]: td,
  32: td
}, h7 = {
  35: wz,
  42: Jl,
  45: [l_, Jl],
  60: Cz,
  61: l_,
  95: Jl,
  96: a_,
  126: a_
}, p7 = {
  38: B0,
  92: z0
}, g7 = {
  [-5]: nd,
  [-4]: nd,
  [-3]: nd,
  33: Uz,
  38: B0,
  42: eh,
  60: [W5, Az],
  91: Wz,
  92: [_z, z0],
  93: Bp,
  95: eh,
  96: iz
}, y7 = {
  null: [eh, a7]
}, m7 = {
  null: [42, 95]
}, v7 = {
  null: []
}, _7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: m7,
  contentInitial: f7,
  disable: v7,
  document: c7,
  flow: h7,
  flowInitial: d7,
  insideSpan: y7,
  string: p7,
  text: g7
}, Symbol.toStringTag, { value: "Module" }));
function b7(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let l = [], u = [];
  const f = {
    attempt: W(K),
    check: W(N),
    consume: M,
    enter: T,
    exit: L,
    interrupt: W(N, {
      interrupt: !0
    })
  }, d = {
    code: null,
    containerState: {},
    defineSkip: x,
    events: [],
    now: k,
    parser: e,
    previous: null,
    sliceSerialize: _,
    sliceStream: y,
    write: g
  };
  let p = t.tokenize.call(d, f);
  return t.resolveAll && a.push(t), d;
  function g(Q) {
    return l = nr(l, Q), O(), l[l.length - 1] !== null ? [] : (ne(t, 0), d.events = zp(a, d.events, d), d.events);
  }
  function _(Q, V) {
    return k7(y(Q), V);
  }
  function y(Q) {
    return w7(l, Q);
  }
  function k() {
    const {
      _bufferIndex: Q,
      _index: V,
      line: he,
      column: me,
      offset: ce
    } = r;
    return {
      _bufferIndex: Q,
      _index: V,
      line: he,
      column: me,
      offset: ce
    };
  }
  function x(Q) {
    i[Q.line] = Q.column, le();
  }
  function O() {
    let Q;
    for (; r._index < l.length; ) {
      const V = l[r._index];
      if (typeof V == "string")
        for (Q = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === Q && r._bufferIndex < V.length; )
          S(V.charCodeAt(r._bufferIndex));
      else
        S(V);
    }
  }
  function S(Q) {
    p = p(Q);
  }
  function M(Q) {
    _e(Q) ? (r.line++, r.column = 1, r.offset += Q === -3 ? 2 : 1, le()) : Q !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), d.previous = Q;
  }
  function T(Q, V) {
    const he = V || {};
    return he.type = Q, he.start = k(), d.events.push(["enter", he, d]), u.push(he), he;
  }
  function L(Q) {
    const V = u.pop();
    return V.end = k(), d.events.push(["exit", V, d]), V;
  }
  function K(Q, V) {
    ne(Q, V.from);
  }
  function N(Q, V) {
    V.restore();
  }
  function W(Q, V) {
    return he;
    function he(me, ce, Me) {
      let $e, Ye, ve, C;
      return Array.isArray(me) ? (
        /* c8 ignore next 1 */
        pt(me)
      ) : "tokenize" in me ? (
        // Looks like a construct.
        pt([
          /** @type {Construct} */
          me
        ])
      ) : Ae(me);
      function Ae(Pe) {
        return st;
        function st(Lt) {
          const Rt = Lt !== null && Pe[Lt], Un = Lt !== null && Pe.null, lt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Rt) ? Rt : Rt ? [Rt] : [],
            ...Array.isArray(Un) ? Un : Un ? [Un] : []
          ];
          return pt(lt)(Lt);
        }
      }
      function pt(Pe) {
        return $e = Pe, Ye = 0, Pe.length === 0 ? Me : P(Pe[Ye]);
      }
      function P(Pe) {
        return st;
        function st(Lt) {
          return C = oe(), ve = Pe, Pe.partial || (d.currentConstruct = Pe), Pe.name && d.parser.constructs.disable.null.includes(Pe.name) ? de() : Pe.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            V ? Object.assign(Object.create(d), V) : d,
            f,
            be,
            de
          )(Lt);
        }
      }
      function be(Pe) {
        return Q(ve, C), ce;
      }
      function de(Pe) {
        return C.restore(), ++Ye < $e.length ? P($e[Ye]) : Me;
      }
    }
  }
  function ne(Q, V) {
    Q.resolveAll && !a.includes(Q) && a.push(Q), Q.resolve && Fr(d.events, V, d.events.length - V, Q.resolve(d.events.slice(V), d)), Q.resolveTo && (d.events = Q.resolveTo(d.events, d));
  }
  function oe() {
    const Q = k(), V = d.previous, he = d.currentConstruct, me = d.events.length, ce = Array.from(u);
    return {
      from: me,
      restore: Me
    };
    function Me() {
      r = Q, d.previous = V, d.currentConstruct = he, d.events.length = me, u = ce, le();
    }
  }
  function le() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function w7(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, a)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const u = l[0];
      typeof u == "string" ? l[0] = u.slice(r) : l.shift();
    }
    a > 0 && l.push(e[i].slice(0, a));
  }
  return l;
}
function k7(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let l;
    if (typeof a == "string")
      l = a;
    else switch (a) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(a);
    }
    i = a === -2, r.push(l);
  }
  return r.join("");
}
function x7(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      T5([_7, ...(e || {}).extensions || []])
    ),
    content: i(F5),
    defined: [],
    document: i(H5),
    flow: i(i7),
    lazy: {},
    string: i(s7),
    text: i(l7)
  };
  return r;
  function i(a) {
    return l;
    function l(u) {
      return b7(r, a, u);
    }
  }
}
function S7(e) {
  for (; !U0(e); )
    ;
  return e;
}
const u_ = /[\0\t\n\r]/g;
function C7() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, l, u) {
    const f = [];
    let d, p, g, _, y;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), g = 0, t = "", n && (a.charCodeAt(0) === 65279 && g++, n = void 0); g < a.length; ) {
      if (u_.lastIndex = g, d = u_.exec(a), _ = d && d.index !== void 0 ? d.index : a.length, y = a.charCodeAt(_), !d) {
        t = a.slice(g);
        break;
      }
      if (y === 10 && g === _ && r)
        f.push(-3), r = void 0;
      else
        switch (r && (f.push(-5), r = void 0), g < _ && (f.push(a.slice(g, _)), e += _ - g), y) {
          case 0: {
            f.push(65533), e++;
            break;
          }
          case 9: {
            for (p = Math.ceil(e / 4) * 4, f.push(-2); e++ < p; ) f.push(-1);
            break;
          }
          case 10: {
            f.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      g = _ + 1;
    }
    return u && (r && f.push(-5), t && f.push(t), f.push(null)), f;
  }
}
const E7 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function O7(e) {
  return e.replace(E7, P7);
}
function P7(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return $0(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return Hp(n) || e;
}
const V0 = {}.hasOwnProperty;
function I7(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), T7(n)(S7(x7(n).document().write(C7()(e, t, !0))));
}
function T7(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Vi),
      autolinkProtocol: oe,
      autolinkEmail: oe,
      atxHeading: a(Sn),
      blockQuote: a(Un),
      characterEscape: oe,
      characterReference: oe,
      codeFenced: a(lt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(lt, l),
      codeText: a(xn, l),
      codeTextData: oe,
      data: oe,
      codeFlowValue: oe,
      definition: a(ki),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(bt),
      hardBreakEscape: a(Oo),
      hardBreakTrailing: a(Oo),
      htmlFlow: a(Ut, l),
      htmlFlowData: oe,
      htmlText: a(Ut, l),
      htmlTextData: oe,
      image: a(Cn),
      label: l,
      link: a(Vi),
      listItem: a(en),
      listItemValue: _,
      listOrdered: a(an, g),
      listUnordered: a(an),
      paragraph: a(Wr),
      reference: P,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(Sn),
      strong: a(sn),
      thematicBreak: a(jn)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: K,
      autolink: f(),
      autolinkEmail: Rt,
      autolinkProtocol: Lt,
      blockQuote: f(),
      characterEscapeValue: le,
      characterReferenceMarkerHexadecimal: de,
      characterReferenceMarkerNumeric: de,
      characterReferenceValue: Pe,
      characterReference: st,
      codeFenced: f(O),
      codeFencedFence: x,
      codeFencedFenceInfo: y,
      codeFencedFenceMeta: k,
      codeFlowValue: le,
      codeIndented: f(S),
      codeText: f(ce),
      codeTextData: le,
      data: le,
      definition: f(),
      definitionDestinationString: L,
      definitionLabelString: M,
      definitionTitleString: T,
      emphasis: f(),
      hardBreakEscape: f(V),
      hardBreakTrailing: f(V),
      htmlFlow: f(he),
      htmlFlowData: le,
      htmlText: f(me),
      htmlTextData: le,
      image: f($e),
      label: ve,
      labelText: Ye,
      lineEnding: Q,
      link: f(Me),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: be,
      resourceDestinationString: C,
      resourceTitleString: Ae,
      resource: pt,
      setextHeading: f(ne),
      setextHeadingLineSequence: W,
      setextHeadingText: N,
      strong: f(),
      thematicBreak: f()
    }
  };
  X0(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(H) {
    let j = {
      type: "root",
      children: []
    };
    const ae = {
      stack: [j],
      tokenStack: [],
      config: t,
      enter: u,
      exit: d,
      buffer: l,
      resume: p,
      data: n
    }, re = [];
    let we = -1;
    for (; ++we < H.length; )
      if (H[we][1].type === "listOrdered" || H[we][1].type === "listUnordered")
        if (H[we][0] === "enter")
          re.push(we);
        else {
          const rt = re.pop();
          we = i(H, rt, we);
        }
    for (we = -1; ++we < H.length; ) {
      const rt = t[H[we][0]];
      V0.call(rt, H[we][1].type) && rt[H[we][1].type].call(Object.assign({
        sliceSerialize: H[we][2].sliceSerialize
      }, ae), H[we][1]);
    }
    if (ae.tokenStack.length > 0) {
      const rt = ae.tokenStack[ae.tokenStack.length - 1];
      (rt[1] || c_).call(ae, void 0, rt[0]);
    }
    for (j.position = {
      start: Ai(H.length > 0 ? H[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Ai(H.length > 0 ? H[H.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, we = -1; ++we < t.transforms.length; )
      j = t.transforms[we](j) || j;
    return j;
  }
  function i(H, j, ae) {
    let re = j - 1, we = -1, rt = !1, Et, jt, Wn, ln;
    for (; ++re <= ae; ) {
      const wt = H[re];
      switch (wt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          wt[0] === "enter" ? we++ : we--, ln = void 0;
          break;
        }
        case "lineEndingBlank": {
          wt[0] === "enter" && (Et && !ln && !we && !Wn && (Wn = re), ln = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ln = void 0;
      }
      if (!we && wt[0] === "enter" && wt[1].type === "listItemPrefix" || we === -1 && wt[0] === "exit" && (wt[1].type === "listUnordered" || wt[1].type === "listOrdered")) {
        if (Et) {
          let En = re;
          for (jt = void 0; En--; ) {
            const un = H[En];
            if (un[1].type === "lineEnding" || un[1].type === "lineEndingBlank") {
              if (un[0] === "exit") continue;
              jt && (H[jt][1].type = "lineEndingBlank", rt = !0), un[1].type = "lineEnding", jt = En;
            } else if (!(un[1].type === "linePrefix" || un[1].type === "blockQuotePrefix" || un[1].type === "blockQuotePrefixWhitespace" || un[1].type === "blockQuoteMarker" || un[1].type === "listItemIndent")) break;
          }
          Wn && (!jt || Wn < jt) && (Et._spread = !0), Et.end = Object.assign({}, jt ? H[jt][1].start : wt[1].end), H.splice(jt || re, 0, ["exit", Et, wt[2]]), re++, ae++;
        }
        if (wt[1].type === "listItemPrefix") {
          const En = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, wt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Et = En, H.splice(re, 0, ["enter", En, wt[2]]), re++, ae++, Wn = void 0, ln = !0;
        }
      }
    }
    return H[j][1]._spread = rt, ae;
  }
  function a(H, j) {
    return ae;
    function ae(re) {
      u.call(this, H(re), re), j && j.call(this, re);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function u(H, j, ae) {
    this.stack[this.stack.length - 1].children.push(H), this.stack.push(H), this.tokenStack.push([j, ae || void 0]), H.position = {
      start: Ai(j.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(H) {
    return j;
    function j(ae) {
      H && H.call(this, ae), d.call(this, ae);
    }
  }
  function d(H, j) {
    const ae = this.stack.pop(), re = this.tokenStack.pop();
    if (re)
      re[0].type !== H.type && (j ? j.call(this, H, re[0]) : (re[1] || c_).call(this, H, re[0]));
    else throw new Error("Cannot close `" + H.type + "` (" + is({
      start: H.start,
      end: H.end
    }) + "): it’s not open");
    ae.position.end = Ai(H.end);
  }
  function p() {
    return P5(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function _(H) {
    if (this.data.expectingFirstListItemValue) {
      const j = this.stack[this.stack.length - 2];
      j.start = Number.parseInt(this.sliceSerialize(H), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function y() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.lang = H;
  }
  function k() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.meta = H;
  }
  function x() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function O() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function S() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = H.replace(/(\r?\n|\r)$/g, "");
  }
  function M(H) {
    const j = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.label = j, ae.identifier = oa(this.sliceSerialize(H)).toLowerCase();
  }
  function T() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.title = H;
  }
  function L() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.url = H;
  }
  function K(H) {
    const j = this.stack[this.stack.length - 1];
    if (!j.depth) {
      const ae = this.sliceSerialize(H).length;
      j.depth = ae;
    }
  }
  function N() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function W(H) {
    const j = this.stack[this.stack.length - 1];
    j.depth = this.sliceSerialize(H).codePointAt(0) === 61 ? 1 : 2;
  }
  function ne() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function oe(H) {
    const ae = this.stack[this.stack.length - 1].children;
    let re = ae[ae.length - 1];
    (!re || re.type !== "text") && (re = Nt(), re.position = {
      start: Ai(H.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ae.push(re)), this.stack.push(re);
  }
  function le(H) {
    const j = this.stack.pop();
    j.value += this.sliceSerialize(H), j.position.end = Ai(H.end);
  }
  function Q(H) {
    const j = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ae = j.children[j.children.length - 1];
      ae.position.end = Ai(H.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(j.type) && (oe.call(this, H), le.call(this, H));
  }
  function V() {
    this.data.atHardBreak = !0;
  }
  function he() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = H;
  }
  function me() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = H;
  }
  function ce() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.value = H;
  }
  function Me() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = j, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function $e() {
    const H = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const j = this.data.referenceType || "shortcut";
      H.type += "Reference", H.referenceType = j, delete H.url, delete H.title;
    } else
      delete H.identifier, delete H.label;
    this.data.referenceType = void 0;
  }
  function Ye(H) {
    const j = this.sliceSerialize(H), ae = this.stack[this.stack.length - 2];
    ae.label = O7(j), ae.identifier = oa(j).toLowerCase();
  }
  function ve() {
    const H = this.stack[this.stack.length - 1], j = this.resume(), ae = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ae.type === "link") {
      const re = H.children;
      ae.children = re;
    } else
      ae.alt = j;
  }
  function C() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.url = H;
  }
  function Ae() {
    const H = this.resume(), j = this.stack[this.stack.length - 1];
    j.title = H;
  }
  function pt() {
    this.data.inReference = void 0;
  }
  function P() {
    this.data.referenceType = "collapsed";
  }
  function be(H) {
    const j = this.resume(), ae = this.stack[this.stack.length - 1];
    ae.label = j, ae.identifier = oa(this.sliceSerialize(H)).toLowerCase(), this.data.referenceType = "full";
  }
  function de(H) {
    this.data.characterReferenceType = H.type;
  }
  function Pe(H) {
    const j = this.sliceSerialize(H), ae = this.data.characterReferenceType;
    let re;
    ae ? (re = $0(j, ae === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : re = Hp(j);
    const we = this.stack[this.stack.length - 1];
    we.value += re;
  }
  function st(H) {
    const j = this.stack.pop();
    j.position.end = Ai(H.end);
  }
  function Lt(H) {
    le.call(this, H);
    const j = this.stack[this.stack.length - 1];
    j.url = this.sliceSerialize(H);
  }
  function Rt(H) {
    le.call(this, H);
    const j = this.stack[this.stack.length - 1];
    j.url = "mailto:" + this.sliceSerialize(H);
  }
  function Un() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function lt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function xn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ki() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function bt() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Sn() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Oo() {
    return {
      type: "break"
    };
  }
  function Ut() {
    return {
      type: "html",
      value: ""
    };
  }
  function Cn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Vi() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function an(H) {
    return {
      type: "list",
      ordered: H.type === "listOrdered",
      start: null,
      spread: H._spread,
      children: []
    };
  }
  function en(H) {
    return {
      type: "listItem",
      spread: H._spread,
      checked: null,
      children: []
    };
  }
  function Wr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function sn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Nt() {
    return {
      type: "text",
      value: ""
    };
  }
  function jn() {
    return {
      type: "thematicBreak"
    };
  }
}
function Ai(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function X0(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? X0(e, r) : M7(e, r);
  }
}
function M7(e, t) {
  let n;
  for (n in t)
    if (V0.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function c_(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + is({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + is({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + is({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function A7(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return I7(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function D7(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function L7(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function R7(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function N7(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function K7(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function F7(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Oa(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let l, u = e.footnoteCounts.get(r);
  u === void 0 ? (u = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = a + 1, u += 1, e.footnoteCounts.set(r, u);
  const f = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (u > 1 ? "-" + u : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, f);
  const d = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [f]
  };
  return e.patch(t, d), e.applyData(t, d);
}
function $7(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function H7(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Z0(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function z7(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Z0(e, t);
  const i = { src: Oa(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function B7(e, t) {
  const n = { src: Oa(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function U7(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function j7(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Z0(e, t);
  const i = { href: Oa(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function W7(e, t) {
  const n = { href: Oa(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Y7(e, t, n) {
  const r = e.all(t), i = n ? G7(n) : J0(t), a = {}, l = [];
  if (typeof t.checked == "boolean") {
    const p = r[0];
    let g;
    p && p.type === "element" && p.tagName === "p" ? g = p : (g = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(g)), g.children.length > 0 && g.children.unshift({ type: "text", value: " " }), g.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let u = -1;
  for (; ++u < r.length; ) {
    const p = r[u];
    (i || u !== 0 || p.type !== "element" || p.tagName !== "p") && l.push({ type: "text", value: `
` }), p.type === "element" && p.tagName === "p" && !i ? l.push(...p.children) : l.push(p);
  }
  const f = r[r.length - 1];
  f && (i || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` });
  const d = { type: "element", tagName: "li", properties: a, children: l };
  return e.patch(t, d), e.applyData(t, d);
}
function G7(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = J0(n[r]);
  }
  return t;
}
function J0(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function q7(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function V7(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function X7(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Z7(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function J7(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, u = Np(t.children[1]), f = A0(t.children[t.children.length - 1]);
    u && f && (l.position = { start: u, end: f }), i.push(l);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Q7(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, u = l ? l.length : t.children.length;
  let f = -1;
  const d = [];
  for (; ++f < u; ) {
    const g = t.children[f], _ = {}, y = l ? l[f] : void 0;
    y && (_.align = y);
    let k = { type: "element", tagName: a, properties: _, children: [] };
    g && (k.children = e.all(g), e.patch(g, k), k = e.applyData(g, k)), d.push(k);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(d, !0)
  };
  return e.patch(t, p), e.applyData(t, p);
}
function eB(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const f_ = 9, d_ = 32;
function tB(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      h_(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(h_(t.slice(i), i > 0, !1)), a.join("");
}
function h_(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === f_ || a === d_; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === f_ || a === d_; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function nB(e, t) {
  const n = { type: "text", value: tB(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function rB(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const iB = {
  blockquote: D7,
  break: L7,
  code: R7,
  delete: N7,
  emphasis: K7,
  footnoteReference: F7,
  heading: $7,
  html: H7,
  imageReference: z7,
  image: B7,
  inlineCode: U7,
  linkReference: j7,
  link: W7,
  listItem: Y7,
  list: q7,
  paragraph: V7,
  // @ts-expect-error: root is different, but hard to type.
  root: X7,
  strong: Z7,
  table: J7,
  tableCell: eB,
  tableRow: Q7,
  text: nB,
  thematicBreak: rB,
  toml: Hl,
  yaml: Hl,
  definition: Hl,
  footnoteDefinition: Hl
};
function Hl() {
}
const Q0 = -1, hc = 0, as = 1, Du = 2, Up = 3, jp = 4, Wp = 5, Yp = 6, ew = 7, tw = 8, p_ = typeof self == "object" ? self : globalThis, oB = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, l] = t[i];
    switch (a) {
      case hc:
      case Q0:
        return n(l, i);
      case as: {
        const u = n([], i);
        for (const f of l)
          u.push(r(f));
        return u;
      }
      case Du: {
        const u = n({}, i);
        for (const [f, d] of l)
          u[r(f)] = r(d);
        return u;
      }
      case Up:
        return n(new Date(l), i);
      case jp: {
        const { source: u, flags: f } = l;
        return n(new RegExp(u, f), i);
      }
      case Wp: {
        const u = n(/* @__PURE__ */ new Map(), i);
        for (const [f, d] of l)
          u.set(r(f), r(d));
        return u;
      }
      case Yp: {
        const u = n(/* @__PURE__ */ new Set(), i);
        for (const f of l)
          u.add(r(f));
        return u;
      }
      case ew: {
        const { name: u, message: f } = l;
        return n(new p_[u](f), i);
      }
      case tw:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: u } = new Uint8Array(l);
        return n(new DataView(u), l);
      }
    }
    return n(new p_[a](l), i);
  };
  return r;
}, g_ = (e) => oB(/* @__PURE__ */ new Map(), e)(0), Wo = "", { toString: aB } = {}, { keys: sB } = Object, Ja = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [hc, t];
  const n = aB.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [as, Wo];
    case "Object":
      return [Du, Wo];
    case "Date":
      return [Up, Wo];
    case "RegExp":
      return [jp, Wo];
    case "Map":
      return [Wp, Wo];
    case "Set":
      return [Yp, Wo];
    case "DataView":
      return [as, n];
  }
  return n.includes("Array") ? [as, n] : n.includes("Error") ? [ew, n] : [Du, n];
}, zl = ([e, t]) => e === hc && (t === "function" || t === "symbol"), lB = (e, t, n, r) => {
  const i = (l, u) => {
    const f = r.push(l) - 1;
    return n.set(u, f), f;
  }, a = (l) => {
    if (n.has(l))
      return n.get(l);
    let [u, f] = Ja(l);
    switch (u) {
      case hc: {
        let p = l;
        switch (f) {
          case "bigint":
            u = tw, p = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            p = null;
            break;
          case "undefined":
            return i([Q0], l);
        }
        return i([u, p], l);
      }
      case as: {
        if (f) {
          let _ = l;
          return f === "DataView" ? _ = new Uint8Array(l.buffer) : f === "ArrayBuffer" && (_ = new Uint8Array(l)), i([f, [..._]], l);
        }
        const p = [], g = i([u, p], l);
        for (const _ of l)
          p.push(a(_));
        return g;
      }
      case Du: {
        if (f)
          switch (f) {
            case "BigInt":
              return i([f, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([f, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return a(l.toJSON());
        const p = [], g = i([u, p], l);
        for (const _ of sB(l))
          (e || !zl(Ja(l[_]))) && p.push([a(_), a(l[_])]);
        return g;
      }
      case Up:
        return i([u, l.toISOString()], l);
      case jp: {
        const { source: p, flags: g } = l;
        return i([u, { source: p, flags: g }], l);
      }
      case Wp: {
        const p = [], g = i([u, p], l);
        for (const [_, y] of l)
          (e || !(zl(Ja(_)) || zl(Ja(y)))) && p.push([a(_), a(y)]);
        return g;
      }
      case Yp: {
        const p = [], g = i([u, p], l);
        for (const _ of l)
          (e || !zl(Ja(_))) && p.push(a(_));
        return g;
      }
    }
    const { message: d } = l;
    return i([u, { name: f, message: d }], l);
  };
  return a;
}, y_ = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return lB(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Lu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? g_(y_(e, t)) : structuredClone(e)
) : (e, t) => g_(y_(e, t));
function uB(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function cB(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fB(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || uB, r = e.options.footnoteBackLabel || cB, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, u = [];
  let f = -1;
  for (; ++f < e.footnoteOrder.length; ) {
    const d = e.footnoteById.get(
      e.footnoteOrder[f]
    );
    if (!d)
      continue;
    const p = e.all(d), g = String(d.identifier).toUpperCase(), _ = Oa(g.toLowerCase());
    let y = 0;
    const k = [], x = e.footnoteCounts.get(g);
    for (; x !== void 0 && ++y <= x; ) {
      k.length > 0 && k.push({ type: "text", value: " " });
      let M = typeof n == "string" ? n : n(f, y);
      typeof M == "string" && (M = { type: "text", value: M }), k.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + _ + (y > 1 ? "-" + y : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(f, y),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(M) ? M : [M]
      });
    }
    const O = p[p.length - 1];
    if (O && O.type === "element" && O.tagName === "p") {
      const M = O.children[O.children.length - 1];
      M && M.type === "text" ? M.value += " " : O.children.push({ type: "text", value: " " }), O.children.push(...k);
    } else
      p.push(...k);
    const S = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + _ },
      children: e.wrap(p, !0)
    };
    e.patch(d, S), u.push(S);
  }
  if (u.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Lu(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(u, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const nw = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return gB;
    if (typeof e == "function")
      return pc(e);
    if (typeof e == "object")
      return Array.isArray(e) ? dB(e) : hB(e);
    if (typeof e == "string")
      return pB(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function dB(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = nw(e[n]);
  return pc(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function hB(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return pc(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function pB(e) {
  return pc(t);
  function t(n) {
    return n && n.type === e;
  }
}
function pc(e) {
  return t;
  function t(n, r, i) {
    return !!(yB(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function gB() {
  return !0;
}
function yB(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const rw = [], mB = !0, m_ = !1, vB = "skip";
function _B(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = nw(i), l = r ? -1 : 1;
  u(e, void 0, [])();
  function u(f, d, p) {
    const g = (
      /** @type {Record<string, unknown>} */
      f && typeof f == "object" ? f : {}
    );
    if (typeof g.type == "string") {
      const y = (
        // `hast`
        typeof g.tagName == "string" ? g.tagName : (
          // `xast`
          typeof g.name == "string" ? g.name : void 0
        )
      );
      Object.defineProperty(_, "name", {
        value: "node (" + (f.type + (y ? "<" + y + ">" : "")) + ")"
      });
    }
    return _;
    function _() {
      let y = rw, k, x, O;
      if ((!t || a(f, d, p[p.length - 1] || void 0)) && (y = bB(n(f, p)), y[0] === m_))
        return y;
      if ("children" in f && f.children) {
        const S = (
          /** @type {UnistParent} */
          f
        );
        if (S.children && y[0] !== vB)
          for (x = (r ? S.children.length : -1) + l, O = p.concat(S); x > -1 && x < S.children.length; ) {
            const M = S.children[x];
            if (k = u(M, x, O)(), k[0] === m_)
              return k;
            x = typeof k[1] == "number" ? k[1] : x + l;
          }
      }
      return y;
    }
  }
}
function bB(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [mB, e] : e == null ? rw : [e];
}
function iw(e, t, n, r) {
  let i, a, l;
  typeof t == "function" ? (a = void 0, l = t, i = n) : (a = t, l = n, i = r), _B(e, a, u, i);
  function u(f, d) {
    const p = d[d.length - 1], g = p ? p.children.indexOf(f) : void 0;
    return l(f, g, p);
  }
}
const th = {}.hasOwnProperty, wB = {};
function kB(e, t) {
  const n = t || wB, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...iB, ...n.handlers }, u = {
    all: d,
    applyData: SB,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: f,
    options: n,
    patch: xB,
    wrap: EB
  };
  return iw(e, function(p) {
    if (p.type === "definition" || p.type === "footnoteDefinition") {
      const g = p.type === "definition" ? r : i, _ = String(p.identifier).toUpperCase();
      g.has(_) || g.set(_, p);
    }
  }), u;
  function f(p, g) {
    const _ = p.type, y = u.handlers[_];
    if (th.call(u.handlers, _) && y)
      return y(u, p, g);
    if (u.options.passThrough && u.options.passThrough.includes(_)) {
      if ("children" in p) {
        const { children: x, ...O } = p, S = Lu(O);
        return S.children = u.all(p), S;
      }
      return Lu(p);
    }
    return (u.options.unknownHandler || CB)(u, p, g);
  }
  function d(p) {
    const g = [];
    if ("children" in p) {
      const _ = p.children;
      let y = -1;
      for (; ++y < _.length; ) {
        const k = u.one(_[y], p);
        if (k) {
          if (y && _[y - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = v_(k.value)), !Array.isArray(k) && k.type === "element")) {
            const x = k.children[0];
            x && x.type === "text" && (x.value = v_(x.value));
          }
          Array.isArray(k) ? g.push(...k) : g.push(k);
        }
      }
    }
    return g;
  }
}
function xB(e, t) {
  e.position && (t.position = a5(e));
}
function SB(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && a && Object.assign(n.properties, Lu(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function CB(e, t) {
  const n = t.data || {}, r = "value" in t && !(th.call(n, "hProperties") || th.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function EB(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function v_(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function __(e, t) {
  const n = kB(e, t), r = n.one(e, void 0), i = fB(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function OB(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      __(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      __(n, { file: r, ...e || t })
    );
  };
}
function b_(e) {
  if (e)
    throw e;
}
var Ql = Object.prototype.hasOwnProperty, ow = Object.prototype.toString, w_ = Object.defineProperty, k_ = Object.getOwnPropertyDescriptor, x_ = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : ow.call(t) === "[object Array]";
}, S_ = function(t) {
  if (!t || ow.call(t) !== "[object Object]")
    return !1;
  var n = Ql.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Ql.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Ql.call(t, i);
}, C_ = function(t, n) {
  w_ && n.name === "__proto__" ? w_(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, E_ = function(t, n) {
  if (n === "__proto__")
    if (Ql.call(t, n)) {
      if (k_)
        return k_(t, n).value;
    } else return;
  return t[n];
}, PB = function e() {
  var t, n, r, i, a, l, u = arguments[0], f = 1, d = arguments.length, p = !1;
  for (typeof u == "boolean" && (p = u, u = arguments[1] || {}, f = 2), (u == null || typeof u != "object" && typeof u != "function") && (u = {}); f < d; ++f)
    if (t = arguments[f], t != null)
      for (n in t)
        r = E_(u, n), i = E_(t, n), u !== i && (p && i && (S_(i) || (a = x_(i))) ? (a ? (a = !1, l = r && x_(r) ? r : []) : l = r && S_(r) ? r : {}, C_(u, { name: n, newValue: e(p, l, i) })) : typeof i < "u" && C_(u, { name: n, newValue: i }));
  return u;
};
const rd = /* @__PURE__ */ ga(PB);
function nh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function IB() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    u(null, ...i);
    function u(f, ...d) {
      const p = e[++a];
      let g = -1;
      if (f) {
        l(f);
        return;
      }
      for (; ++g < i.length; )
        (d[g] === null || d[g] === void 0) && (d[g] = i[g]);
      i = d, p ? TB(p, u)(...d) : l(null, ...d);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function TB(e, t) {
  let n;
  return r;
  function r(...l) {
    const u = e.length > l.length;
    let f;
    u && l.push(i);
    try {
      f = e.apply(this, l);
    } catch (d) {
      const p = (
        /** @type {Error} */
        d
      );
      if (u && n)
        throw p;
      return i(p);
    }
    u || (f && f.then && typeof f.then == "function" ? f.then(a, i) : f instanceof Error ? i(f) : a(f));
  }
  function i(l, ...u) {
    n || (n = !0, t(l, ...u));
  }
  function a(l) {
    i(null, l);
  }
}
const Ir = { basename: MB, dirname: AB, extname: DB, join: LB, sep: "/" };
function MB(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Bs(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, u = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (a = !0, l = i + 1), u > -1 && (e.codePointAt(i) === t.codePointAt(u--) ? u < 0 && (r = i) : (u = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function AB(e) {
  if (Bs(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function DB(e) {
  Bs(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, l;
  for (; t--; ) {
    const u = e.codePointAt(t);
    if (u === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), u === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function LB(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Bs(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : RB(n);
}
function RB(e) {
  Bs(e);
  const t = e.codePointAt(0) === 47;
  let n = NB(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function NB(e, t) {
  let n = "", r = 0, i = -1, a = 0, l = -1, u, f;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      u = e.codePointAt(l);
    else {
      if (u === 47)
        break;
      u = 47;
    }
    if (u === 47) {
      if (!(i === l - 1 || a === 1)) if (i !== l - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (f = n.lastIndexOf("/"), f !== n.length - 1) {
              f < 0 ? (n = "", r = 0) : (n = n.slice(0, f), r = n.length - 1 - n.lastIndexOf("/")), i = l, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, a = 0;
    } else u === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function Bs(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const KB = { cwd: FB };
function FB() {
  return "/";
}
function rh(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function $B(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!rh(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return HB(e);
}
function HB(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const id = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class aw {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? rh(t) ? n = { path: t } : typeof t == "string" || zB(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : KB.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < id.length; ) {
      const a = id[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      id.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ir.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    ad(t, "basename"), od(t, "basename"), this.path = Ir.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ir.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    O_(this.basename, "dirname"), this.path = Ir.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ir.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (od(t, "extname"), O_(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ir.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    rh(t) && (t = $B(t)), ad(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ir.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    ad(t, "stem"), od(t, "stem"), this.path = Ir.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Qt(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function od(e, t) {
  if (e && e.includes(Ir.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ir.sep + "`"
    );
}
function ad(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function O_(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function zB(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const BB = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), UB = {}.hasOwnProperty;
class Gp extends BB {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = IB();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Gp()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(rd(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (ud("data", this.frozen), this.namespace[t] = n, this) : UB.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (ud("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Bl(t), r = this.parser || this.Parser;
    return sd("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), sd("process", this.parser || this.Parser), ld("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, l) {
      const u = Bl(t), f = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(u)
      );
      r.run(f, u, function(p, g, _) {
        if (p || !g || !_)
          return d(p);
        const y = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          g
        ), k = r.stringify(y, _);
        YB(k) ? _.value = k : _.result = k, d(
          p,
          /** @type {VFileWithOutput<CompileResult>} */
          _
        );
      });
      function d(p, g) {
        p || !g ? l(p) : a ? a(g) : n(void 0, g);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), sd("processSync", this.parser || this.Parser), ld("processSync", this.compiler || this.Compiler), this.process(t, i), I_("processSync", "process", n), r;
    function i(a, l) {
      n = !0, b_(a), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    P_(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(l, u) {
      const f = Bl(n);
      i.run(t, f, d);
      function d(p, g, _) {
        const y = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          g || t
        );
        p ? u(p) : l ? l(y) : r(void 0, y, _);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), I_("runSync", "run", r), i;
    function a(l, u) {
      b_(l), i = u, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Bl(n), i = this.compiler || this.Compiler;
    return ld("stringify", i), P_(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (ud("use", this.frozen), t != null) if (typeof t == "function")
      f(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? u(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(d) {
      if (typeof d == "function")
        f(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [p, ...g] = (
            /** @type {PluginTuple<Array<unknown>>} */
            d
          );
          f(p, g);
        } else
          l(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function l(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      u(d.plugins), d.settings && (i.settings = rd(!0, i.settings, d.settings));
    }
    function u(d) {
      let p = -1;
      if (d != null) if (Array.isArray(d))
        for (; ++p < d.length; ) {
          const g = d[p];
          a(g);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function f(d, p) {
      let g = -1, _ = -1;
      for (; ++g < r.length; )
        if (r[g][0] === d) {
          _ = g;
          break;
        }
      if (_ === -1)
        r.push([d, ...p]);
      else if (p.length > 0) {
        let [y, ...k] = p;
        const x = r[_][1];
        nh(x) && nh(y) && (y = rd(!0, x, y)), r[_] = [d, y, ...k];
      }
    }
  }
}
const jB = new Gp().freeze();
function sd(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function ld(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function ud(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function P_(e) {
  if (!nh(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function I_(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Bl(e) {
  return WB(e) ? e : new aw(e);
}
function WB(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function YB(e) {
  return typeof e == "string" || GB(e);
}
function GB(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const qB = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", T_ = [], M_ = { allowDangerousHtml: !0 }, VB = /^(https?|ircs?|mailto|xmpp)$/i, XB = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function ZB(e) {
  const t = JB(e), n = QB(e);
  return eU(t.runSync(t.parse(n), n), e);
}
function JB(e) {
  const t = e.rehypePlugins || T_, n = e.remarkPlugins || T_, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...M_ } : M_;
  return jB().use(A7).use(n).use(OB, r).use(t);
}
function QB(e) {
  const t = e.children || "", n = new aw();
  return typeof t == "string" && (n.value = t), n;
}
function eU(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, l = t.skipHtml, u = t.unwrapDisallowed, f = t.urlTransform || tU;
  for (const p of XB)
    Object.hasOwn(t, p.from) && ("" + p.from + (p.to ? "use `" + p.to + "` instead" : "remove it") + qB + p.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), iw(e, d), f5(e, {
    Fragment: EI,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: A,
    jsxs: He,
    passKeys: !0,
    passNode: !0
  });
  function d(p, g, _) {
    if (p.type === "raw" && _ && typeof g == "number")
      return l ? _.children.splice(g, 1) : _.children[g] = { type: "text", value: p.value }, g;
    if (p.type === "element") {
      let y;
      for (y in ed)
        if (Object.hasOwn(ed, y) && Object.hasOwn(p.properties, y)) {
          const k = p.properties[y], x = ed[y];
          (x === null || x.includes(p.tagName)) && (p.properties[y] = f(String(k || ""), y, p));
        }
    }
    if (p.type === "element") {
      let y = n ? !n.includes(p.tagName) : a ? a.includes(p.tagName) : !1;
      if (!y && r && typeof g == "number" && (y = !r(p, g, _)), y && _ && typeof g == "number")
        return u && p.children ? _.children.splice(g, 1, ...p.children) : _.children.splice(g, 1), g;
    }
  }
}
function tU(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    VB.test(e.slice(0, t)) ? e : ""
  );
}
const nU = $r(), rU = We("div")(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  fontSize: 12,
  "& h1": { fontSize: 18 },
  "& h2": { fontSize: 14 },
  "& h3": { fontSize: 12 },
  "& h4": { fontSize: 12 },
  "& h5": { fontSize: 12 },
  "& h6": { fontSize: 12 },
  "& p": { fontSize: 12 },
  "& a": {},
  "& img": { width: "100%" }
})), iU = ({
  description: e
}) => /* @__PURE__ */ A(Hr, { theme: nU, children: /* @__PURE__ */ A(
  ya,
  {
    title: "Task Description",
    icon: /* @__PURE__ */ A(g6, { style: { color: ur[700] } }),
    expandedByDefault: !(e && e !== ""),
    children: /* @__PURE__ */ A(rU, { children: /* @__PURE__ */ A(ZB, { children: e }) })
  }
) }), oU = mi(iU);
var aU = ma, sU = rp, lU = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uU = /^\w*$/;
function cU(e, t) {
  if (aU(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || sU(e) ? !0 : uU.test(e) || !lU.test(e) || t != null && e in Object(t);
}
var fU = cU, sw = Mp, dU = "Expected a function";
function qp(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(dU);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, r);
    return n.cache = a.set(i, l) || a, l;
  };
  return n.cache = new (qp.Cache || sw)(), n;
}
qp.Cache = sw;
var hU = qp, pU = hU, gU = 500;
function yU(e) {
  var t = pU(e, function(r) {
    return n.size === gU && n.clear(), r;
  }), n = t.cache;
  return t;
}
var mU = yU, vU = mU, _U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bU = /\\(\\)?/g, wU = vU(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(_U, function(n, r, i, a) {
    t.push(i ? a.replace(bU, "$1") : r || n);
  }), t;
}), kU = wU, xU = ma, SU = fU, CU = kU, EU = ip;
function OU(e, t) {
  return xU(e) ? e : SU(e, t) ? [e] : CU(EU(e));
}
var lw = OU, PU = rp;
function IU(e) {
  if (typeof e == "string" || PU(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var uw = IU, TU = lw, MU = uw;
function AU(e, t) {
  t = TU(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[MU(t[n++])];
  return n && n == r ? e : void 0;
}
var DU = AU, LU = DU;
function RU(e, t, n) {
  var r = e == null ? void 0 : LU(e, t);
  return r === void 0 ? n : r;
}
var NU = RU;
const cw = /* @__PURE__ */ ga(NU), Vp = (e) => {
  let t = null, n = [], r = null;
  return t = e.selectedImage ?? null, t === -1 || t === null ? (t = null, r = null) : (n = ["images", t.toString()], r = cw(e, n)), { currentImageIndex: t, pathToActiveImage: n, activeImage: r };
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function KU(e, t, n) {
  return (t = $U(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function A_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? A_(Object(n), !0).forEach(function(r) {
      KU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function FU(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $U(e) {
  var t = FU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const D_ = () => {
};
let Xp = {}, fw = {}, dw = null, hw = {
  mark: D_,
  measure: D_
};
try {
  typeof window < "u" && (Xp = window), typeof document < "u" && (fw = document), typeof MutationObserver < "u" && (dw = MutationObserver), typeof performance < "u" && (hw = performance);
} catch {
}
const {
  userAgent: L_ = ""
} = Xp.navigator || {}, zi = Xp, ft = fw, R_ = dw, Ul = hw;
zi.document;
const wi = !!ft.documentElement && !!ft.head && typeof ft.addEventListener == "function" && typeof ft.createElement == "function", pw = ~L_.indexOf("MSIE") || ~L_.indexOf("Trident/");
var HU = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, zU = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, gw = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, BU = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, yw = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Zt = "classic", gc = "duotone", UU = "sharp", jU = "sharp-duotone", mw = [Zt, gc, UU, jU], WU = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, YU = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, GU = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), qU = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, VU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], N_ = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, XU = ["kit"], ZU = {
  kit: {
    "fa-kit": "fak"
  }
}, JU = ["fak", "fakd"], QU = {
  kit: {
    fak: "fa-kit"
  }
}, K_ = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, jl = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, e9 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], t9 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], n9 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, r9 = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, i9 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ih = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, o9 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], oh = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...e9, ...o9], a9 = ["solid", "regular", "light", "thin", "duotone", "brands"], vw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], s9 = vw.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), l9 = [...Object.keys(i9), ...a9, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", jl.GROUP, jl.SWAP_OPACITY, jl.PRIMARY, jl.SECONDARY].concat(vw.map((e) => "".concat(e, "x"))).concat(s9.map((e) => "w-".concat(e))), u9 = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const gi = "___FONT_AWESOME___", ah = 16, _w = "fa", bw = "svg-inline--fa", _o = "data-fa-i2svg", sh = "data-fa-pseudo-element", c9 = "data-fa-pseudo-element-pending", Zp = "data-prefix", Jp = "data-icon", F_ = "fontawesome-i2svg", f9 = "async", d9 = ["HTML", "HEAD", "STYLE", "SCRIPT"], ww = (() => {
  try {
    return Ve.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Us(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Zt];
    }
  });
}
const kw = Y({}, gw);
kw[Zt] = Y(Y(Y(Y({}, {
  "fa-duotone": "duotone"
}), gw[Zt]), N_.kit), N_["kit-duotone"]);
const h9 = Us(kw), lh = Y({}, qU);
lh[Zt] = Y(Y(Y(Y({}, {
  duotone: "fad"
}), lh[Zt]), K_.kit), K_["kit-duotone"]);
const $_ = Us(lh), uh = Y({}, ih);
uh[Zt] = Y(Y({}, uh[Zt]), QU.kit);
const Qp = Us(uh), ch = Y({}, r9);
ch[Zt] = Y(Y({}, ch[Zt]), ZU.kit);
Us(ch);
const p9 = HU, xw = "fa-layers-text", g9 = zU, y9 = Y({}, WU);
Us(y9);
const m9 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], cd = BU, v9 = [...XU, ...l9], ss = zi.FontAwesomeConfig || {};
function _9(e) {
  var t = ft.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function b9(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ft && typeof ft.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = b9(_9(n));
  i != null && (ss[r] = i);
});
const Sw = {
  styleDefault: "solid",
  familyDefault: Zt,
  cssPrefix: _w,
  replacementClass: bw,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ss.familyPrefix && (ss.cssPrefix = ss.familyPrefix);
const ca = Y(Y({}, Sw), ss);
ca.autoReplaceSvg || (ca.observeMutations = !1);
const se = {};
Object.keys(Sw).forEach((e) => {
  Object.defineProperty(se, e, {
    enumerable: !0,
    set: function(t) {
      ca[e] = t, ls.forEach((n) => n(se));
    },
    get: function() {
      return ca[e];
    }
  });
});
Object.defineProperty(se, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ca.cssPrefix = e, ls.forEach((t) => t(se));
  },
  get: function() {
    return ca.cssPrefix;
  }
});
zi.FontAwesomeConfig = se;
const ls = [];
function w9(e) {
  return ls.push(e), () => {
    ls.splice(ls.indexOf(e), 1);
  };
}
const Di = ah, Rr = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function k9(e) {
  if (!e || !wi)
    return;
  const t = ft.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ft.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], l = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(l) > -1 && (r = a);
  }
  return ft.head.insertBefore(t, r), e;
}
const x9 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function bs() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += x9[Math.random() * 62 | 0];
  return t;
}
function Pa(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function eg(e) {
  return e.classList ? Pa(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Cw(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function S9(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Cw(e[n]), '" '), "").trim();
}
function yc(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function tg(e) {
  return e.size !== Rr.size || e.x !== Rr.x || e.y !== Rr.y || e.rotate !== Rr.rotate || e.flipX || e.flipY;
}
function C9(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), u = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(a, " ").concat(l, " ").concat(u)
  }, d = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: f,
    path: d
  };
}
function E9(e) {
  let {
    transform: t,
    width: n = ah,
    height: r = ah,
    startCentered: i = !1
  } = e, a = "";
  return i && pw ? a += "translate(".concat(t.x / Di - n / 2, "em, ").concat(t.y / Di - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / Di, "em), calc(-50% + ").concat(t.y / Di, "em)) ") : a += "translate(".concat(t.x / Di, "em, ").concat(t.y / Di, "em) "), a += "scale(".concat(t.size / Di * (t.flipX ? -1 : 1), ", ").concat(t.size / Di * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var O9 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Ew() {
  const e = _w, t = bw, n = se.cssPrefix, r = se.replacementClass;
  let i = O9;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), l = new RegExp("\\--".concat(e, "\\-"), "g"), u = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(l, "--".concat(n, "-")).replace(u, ".".concat(r));
  }
  return i;
}
let H_ = !1;
function fd() {
  se.autoAddCss && !H_ && (k9(Ew()), H_ = !0);
}
var P9 = {
  mixout() {
    return {
      dom: {
        css: Ew,
        insertCss: fd
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        fd();
      },
      beforeI2svg() {
        fd();
      }
    };
  }
};
const yi = zi || {};
yi[gi] || (yi[gi] = {});
yi[gi].styles || (yi[gi].styles = {});
yi[gi].hooks || (yi[gi].hooks = {});
yi[gi].shims || (yi[gi].shims = []);
var Nr = yi[gi];
const Ow = [], Pw = function() {
  ft.removeEventListener("DOMContentLoaded", Pw), Ru = 1, Ow.map((e) => e());
};
let Ru = !1;
wi && (Ru = (ft.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ft.readyState), Ru || ft.addEventListener("DOMContentLoaded", Pw));
function I9(e) {
  wi && (Ru ? setTimeout(e, 0) : Ow.push(e));
}
function js(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Cw(e) : "<".concat(t, " ").concat(S9(n), ">").concat(r.map(js).join(""), "</").concat(t, ">");
}
function z_(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var dd = function(t, n, r, i) {
  var a = Object.keys(t), l = a.length, u = n, f, d, p;
  for (r === void 0 ? (f = 1, p = t[a[0]]) : (f = 0, p = r); f < l; f++)
    d = a[f], p = u(p, t[d], d, t);
  return p;
};
function T9(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function fh(e) {
  const t = T9(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function M9(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function B_(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function dh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = B_(t);
  typeof Nr.hooks.addPack == "function" && !r ? Nr.hooks.addPack(e, B_(t)) : Nr.styles[e] = Y(Y({}, Nr.styles[e] || {}), i), e === "fas" && dh("fa", t);
}
const {
  styles: ws,
  shims: A9
} = Nr, Iw = Object.keys(Qp), D9 = Iw.reduce((e, t) => (e[t] = Object.keys(Qp[t]), e), {});
let ng = null, Tw = {}, Mw = {}, Aw = {}, Dw = {}, Lw = {};
function L9(e) {
  return ~v9.indexOf(e);
}
function R9(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !L9(i) ? i : null;
}
const Rw = () => {
  const e = (r) => dd(ws, (i, a, l) => (i[l] = dd(a, r, {}), i), {});
  Tw = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((u) => typeof u == "number").forEach((u) => {
    r[u.toString(16)] = a;
  }), r)), Mw = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((u) => typeof u == "string").forEach((u) => {
    r[u] = a;
  }), r)), Lw = e((r, i, a) => {
    const l = i[2];
    return r[a] = a, l.forEach((u) => {
      r[u] = a;
    }), r;
  });
  const t = "far" in ws || se.autoFetchSvg, n = dd(A9, (r, i) => {
    const a = i[0];
    let l = i[1];
    const u = i[2];
    return l === "far" && !t && (l = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: l,
      iconName: u
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: l,
      iconName: u
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Aw = n.names, Dw = n.unicodes, ng = mc(se.styleDefault, {
    family: se.familyDefault
  });
};
w9((e) => {
  ng = mc(e.styleDefault, {
    family: se.familyDefault
  });
});
Rw();
function rg(e, t) {
  return (Tw[e] || {})[t];
}
function N9(e, t) {
  return (Mw[e] || {})[t];
}
function ho(e, t) {
  return (Lw[e] || {})[t];
}
function Nw(e) {
  return Aw[e] || {
    prefix: null,
    iconName: null
  };
}
function K9(e) {
  const t = Dw[e], n = rg("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Bi() {
  return ng;
}
const Kw = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function F9(e) {
  let t = Zt;
  const n = Iw.reduce((r, i) => (r[i] = "".concat(se.cssPrefix, "-").concat(i), r), {});
  return mw.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => D9[r].includes(i))) && (t = r);
  }), t;
}
function mc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Zt
  } = t, r = h9[n][e];
  if (n === gc && !e)
    return "fad";
  const i = $_[n][e] || $_[n][r], a = e in Nr.styles ? e : null;
  return i || a || null;
}
function $9(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = R9(se.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function U_(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function vc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = oh.concat(t9), a = U_(e.filter((g) => i.includes(g))), l = U_(e.filter((g) => !oh.includes(g))), u = a.filter((g) => (r = g, !yw.includes(g))), [f = null] = u, d = F9(a), p = Y(Y({}, $9(l)), {}, {
    prefix: mc(f, {
      family: d
    })
  });
  return Y(Y(Y({}, p), U9({
    values: e,
    family: d,
    styles: ws,
    config: se,
    canonical: p,
    givenPrefix: r
  })), H9(n, r, p));
}
function H9(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Nw(i) : {}, l = ho(r, i);
  return i = a.iconName || l || i, r = a.prefix || r, r === "far" && !ws.far && ws.fas && !se.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const z9 = mw.filter((e) => e !== Zt || e !== gc), B9 = Object.keys(ih).filter((e) => e !== Zt).map((e) => Object.keys(ih[e])).flat();
function U9(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: l = {}
  } = e, u = n === gc, f = t.includes("fa-duotone") || t.includes("fad"), d = l.familyDefault === "duotone", p = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!u && (f || d || p) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && z9.includes(n) && (Object.keys(a).find((_) => B9.includes(_)) || l.autoFetchSvg)) {
    const _ = GU.get(n).defaultShortPrefixId;
    r.prefix = _, r.iconName = ho(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Bi() || "fas"), r;
}
class j9 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = Y(Y({}, this.definitions[a] || {}), i[a]), dh(a, i[a]);
      const l = Qp[Zt][a];
      l && dh(l, i[a]), Rw();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: a,
        iconName: l,
        icon: u
      } = r[i], f = u[2];
      t[a] || (t[a] = {}), f.length > 0 && f.forEach((d) => {
        typeof d == "string" && (t[a][d] = u);
      }), t[a][l] = u;
    }), t;
  }
}
let j_ = [], Jo = {};
const aa = {}, W9 = Object.keys(aa);
function Y9(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return j_ = e, Jo = {}, Object.keys(aa).forEach((r) => {
    W9.indexOf(r) === -1 && delete aa[r];
  }), j_.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((l) => {
        n[a] || (n[a] = {}), n[a][l] = i[a][l];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((l) => {
        Jo[l] || (Jo[l] = []), Jo[l].push(a[l]);
      });
    }
    r.provides && r.provides(aa);
  }), n;
}
function hh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Jo[e] || []).forEach((l) => {
    t = l.apply(null, [t, ...r]);
  }), t;
}
function bo(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Jo[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Ui() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return aa[e] ? aa[e].apply(null, t) : void 0;
}
function ph(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Bi();
  if (t)
    return t = ho(n, t) || t, z_(Fw.definitions, n, t) || z_(Nr.styles, n, t);
}
const Fw = new j9(), G9 = () => {
  se.autoReplaceSvg = !1, se.observeMutations = !1, bo("noAuto");
}, q9 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return wi ? (bo("beforeI2svg", e), Ui("pseudoElements2svg", e), Ui("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    se.autoReplaceSvg === !1 && (se.autoReplaceSvg = !0), se.observeMutations = !0, I9(() => {
      X9({
        autoReplaceSvgRoot: t
      }), bo("watch", e);
    });
  }
}, V9 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ho(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = mc(e[0]);
      return {
        prefix: n,
        iconName: ho(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(se.cssPrefix, "-")) > -1 || e.match(p9))) {
      const t = vc(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Bi(),
        iconName: ho(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Bi();
      return {
        prefix: t,
        iconName: ho(t, e) || e
      };
    }
  }
}, Bn = {
  noAuto: G9,
  config: se,
  dom: q9,
  parse: V9,
  library: Fw,
  findIconDefinition: ph,
  toHtml: js
}, X9 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ft
  } = e;
  (Object.keys(Nr.styles).length > 0 || se.autoFetchSvg) && wi && se.autoReplaceSvg && Bn.dom.i2svg({
    node: t
  });
};
function _c(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => js(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!wi) return;
      const n = ft.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Z9(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: l
  } = e;
  if (tg(l) && n.found && !r.found) {
    const {
      width: u,
      height: f
    } = n, d = {
      x: u / f / 2,
      y: 0.5
    };
    i.style = yc(Y(Y({}, a), {}, {
      "transform-origin": "".concat(d.x + l.x / 16, "em ").concat(d.y + l.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function J9(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: a
  } = e;
  const l = a === !0 ? "".concat(t, "-").concat(se.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Y(Y({}, i), {}, {
        id: l
      }),
      children: r
    }]
  }];
}
function ig(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: a,
    symbol: l,
    title: u,
    maskId: f,
    titleId: d,
    extra: p,
    watchable: g = !1
  } = e, {
    width: _,
    height: y
  } = n.found ? n : t, k = JU.includes(r), x = [se.replacementClass, i ? "".concat(se.cssPrefix, "-").concat(i) : ""].filter((K) => p.classes.indexOf(K) === -1).filter((K) => K !== "" || !!K).concat(p.classes).join(" ");
  let O = {
    children: [],
    attributes: Y(Y({}, p.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: x,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(_, " ").concat(y)
    })
  };
  const S = k && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(_ / y * 16 * 0.0625, "em")
  } : {};
  g && (O.attributes[_o] = ""), u && (O.children.push({
    tag: "title",
    attributes: {
      id: O.attributes["aria-labelledby"] || "title-".concat(d || bs())
    },
    children: [u]
  }), delete O.attributes.title);
  const M = Y(Y({}, O), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: f,
    transform: a,
    symbol: l,
    styles: Y(Y({}, S), p.styles)
  }), {
    children: T,
    attributes: L
  } = n.found && t.found ? Ui("generateAbstractMask", M) || {
    children: [],
    attributes: {}
  } : Ui("generateAbstractIcon", M) || {
    children: [],
    attributes: {}
  };
  return M.children = T, M.attributes = L, l ? J9(M) : Z9(M);
}
function W_(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: l,
    watchable: u = !1
  } = e, f = Y(Y(Y({}, l.attributes), a ? {
    title: a
  } : {}), {}, {
    class: l.classes.join(" ")
  });
  u && (f[_o] = "");
  const d = Y({}, l.styles);
  tg(i) && (d.transform = E9({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), d["-webkit-transform"] = d.transform);
  const p = yc(d);
  p.length > 0 && (f.style = p);
  const g = [];
  return g.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), a && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), g;
}
function Q9(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = Y(Y(Y({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = yc(r.styles);
  a.length > 0 && (i.style = a);
  const l = [];
  return l.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && l.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), l;
}
const {
  styles: hd
} = Nr;
function gh(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(se.cssPrefix, "-").concat(cd.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(se.cssPrefix, "-").concat(cd.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(se.cssPrefix, "-").concat(cd.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const ej = {
  found: !1,
  width: 512,
  height: 512
};
function tj(e, t) {
  !ww && !se.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function yh(e, t) {
  let n = t;
  return t === "fa" && se.styleDefault !== null && (t = Bi()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Nw(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && hd[t] && hd[t][e]) {
      const a = hd[t][e];
      return r(gh(a));
    }
    tj(e, t), r(Y(Y({}, ej), {}, {
      icon: se.showMissingIcons && e ? Ui("missingIconAbstract") || {} : {}
    }));
  });
}
const Y_ = () => {
}, mh = se.measurePerformance && Ul && Ul.mark && Ul.measure ? Ul : {
  mark: Y_,
  measure: Y_
}, es = 'FA "6.7.2"', nj = (e) => (mh.mark("".concat(es, " ").concat(e, " begins")), () => $w(e)), $w = (e) => {
  mh.mark("".concat(es, " ").concat(e, " ends")), mh.measure("".concat(es, " ").concat(e), "".concat(es, " ").concat(e, " begins"), "".concat(es, " ").concat(e, " ends"));
};
var og = {
  begin: nj,
  end: $w
};
const eu = () => {
};
function G_(e) {
  return typeof (e.getAttribute ? e.getAttribute(_o) : null) == "string";
}
function rj(e) {
  const t = e.getAttribute ? e.getAttribute(Zp) : null, n = e.getAttribute ? e.getAttribute(Jp) : null;
  return t && n;
}
function ij(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(se.replacementClass);
}
function oj() {
  return se.autoReplaceSvg === !0 ? tu.replace : tu[se.autoReplaceSvg] || tu.replace;
}
function aj(e) {
  return ft.createElementNS("http://www.w3.org/2000/svg", e);
}
function sj(e) {
  return ft.createElement(e);
}
function Hw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? aj : sj
  } = t;
  if (typeof e == "string")
    return ft.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(Hw(a, {
      ceFn: n
    }));
  }), r;
}
function lj(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const tu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Hw(n), t);
      }), t.getAttribute(_o) === null && se.keepOriginalSource) {
        let n = ft.createComment(lj(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~eg(t).indexOf(se.replacementClass))
      return tu.replace(e);
    const r = new RegExp("".concat(se.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((l, u) => (u === se.replacementClass || u.match(r) ? l.toSvg.push(u) : l.toNode.push(u), l), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => js(a)).join(`
`);
    t.setAttribute(_o, ""), t.innerHTML = i;
  }
};
function q_(e) {
  e();
}
function zw(e, t) {
  const n = typeof t == "function" ? t : eu;
  if (e.length === 0)
    n();
  else {
    let r = q_;
    se.mutateApproach === f9 && (r = zi.requestAnimationFrame || q_), r(() => {
      const i = oj(), a = og.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let ag = !1;
function Bw() {
  ag = !0;
}
function vh() {
  ag = !1;
}
let Nu = null;
function V_(e) {
  if (!R_ || !se.observeMutations)
    return;
  const {
    treeCallback: t = eu,
    nodeCallback: n = eu,
    pseudoElementsCallback: r = eu,
    observeMutationsRoot: i = ft
  } = e;
  Nu = new R_((a) => {
    if (ag) return;
    const l = Bi();
    Pa(a).forEach((u) => {
      if (u.type === "childList" && u.addedNodes.length > 0 && !G_(u.addedNodes[0]) && (se.searchPseudoElements && r(u.target), t(u.target)), u.type === "attributes" && u.target.parentNode && se.searchPseudoElements && r(u.target.parentNode), u.type === "attributes" && G_(u.target) && ~m9.indexOf(u.attributeName))
        if (u.attributeName === "class" && rj(u.target)) {
          const {
            prefix: f,
            iconName: d
          } = vc(eg(u.target));
          u.target.setAttribute(Zp, f || l), d && u.target.setAttribute(Jp, d);
        } else ij(u.target) && n(u.target);
    });
  }), wi && Nu.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function uj() {
  Nu && Nu.disconnect();
}
function cj(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), l = a[0], u = a.slice(1);
    return l && u.length > 0 && (r[l] = u.join(":").trim()), r;
  }, {})), n;
}
function fj(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = vc(eg(e));
  return i.prefix || (i.prefix = Bi()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = N9(i.prefix, e.innerText) || rg(i.prefix, fh(e.innerText))), !i.iconName && se.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function dj(e) {
  const t = Pa(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return se.autoA11y && (n ? t["aria-labelledby"] = "".concat(se.replacementClass, "-title-").concat(r || bs()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function hj() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Rr,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function X_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = fj(e), a = dj(e), l = hh("parseNodeAttributes", {}, e);
  let u = t.styleParser ? cj(e) : [];
  return Y({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Rr,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: u,
      attributes: a
    }
  }, l);
}
const {
  styles: pj
} = Nr;
function Uw(e) {
  const t = se.autoReplaceSvg === "nest" ? X_(e, {
    styleParser: !1
  }) : X_(e);
  return ~t.extra.classes.indexOf(xw) ? Ui("generateLayersText", e, t) : Ui("generateSvgReplacementMutation", e, t);
}
function gj() {
  return [...VU, ...oh];
}
function Z_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!wi) return Promise.resolve();
  const n = ft.documentElement.classList, r = (p) => n.add("".concat(F_, "-").concat(p)), i = (p) => n.remove("".concat(F_, "-").concat(p)), a = se.autoFetchSvg ? gj() : yw.concat(Object.keys(pj));
  a.includes("fa") || a.push("fa");
  const l = [".".concat(xw, ":not([").concat(_o, "])")].concat(a.map((p) => ".".concat(p, ":not([").concat(_o, "])"))).join(", ");
  if (l.length === 0)
    return Promise.resolve();
  let u = [];
  try {
    u = Pa(e.querySelectorAll(l));
  } catch {
  }
  if (u.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const f = og.begin("onTree"), d = u.reduce((p, g) => {
    try {
      const _ = Uw(g);
      _ && p.push(_);
    } catch (_) {
      ww || _.name === "MissingIcon" && console.error(_);
    }
    return p;
  }, []);
  return new Promise((p, g) => {
    Promise.all(d).then((_) => {
      zw(_, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), f(), p();
      });
    }).catch((_) => {
      f(), g(_);
    });
  });
}
function yj(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Uw(e).then((n) => {
    n && zw([n], t);
  });
}
function mj(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ph(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : ph(i || {})), e(r, Y(Y({}, n), {}, {
      mask: i
    }));
  };
}
const vj = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Rr,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: l = null,
    titleId: u = null,
    classes: f = [],
    attributes: d = {},
    styles: p = {}
  } = t;
  if (!e) return;
  const {
    prefix: g,
    iconName: _,
    icon: y
  } = e;
  return _c(Y({
    type: "icon"
  }, e), () => (bo("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), se.autoA11y && (l ? d["aria-labelledby"] = "".concat(se.replacementClass, "-title-").concat(u || bs()) : (d["aria-hidden"] = "true", d.focusable = "false")), ig({
    icons: {
      main: gh(y),
      mask: i ? gh(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: _,
    transform: Y(Y({}, Rr), n),
    symbol: r,
    title: l,
    maskId: a,
    titleId: u,
    extra: {
      attributes: d,
      styles: p,
      classes: f
    }
  })));
};
var _j = {
  mixout() {
    return {
      icon: mj(vj)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Z_, e.nodeCallback = yj, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ft,
        callback: r = () => {
        }
      } = t;
      return Z_(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: l,
        transform: u,
        symbol: f,
        mask: d,
        maskId: p,
        extra: g
      } = n;
      return new Promise((_, y) => {
        Promise.all([yh(r, l), d.iconName ? yh(d.iconName, d.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((k) => {
          let [x, O] = k;
          _([t, ig({
            icons: {
              main: x,
              mask: O
            },
            prefix: l,
            iconName: r,
            transform: u,
            symbol: f,
            maskId: p,
            title: i,
            titleId: a,
            extra: g,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: l
      } = t;
      const u = yc(l);
      u.length > 0 && (r.style = u);
      let f;
      return tg(a) && (f = Ui("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(f || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, bj = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return _c({
          type: "layer"
        }, () => {
          bo("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(se.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, wj = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return _c({
          type: "counter",
          content: e
        }, () => (bo("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Q9({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(se.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, kj = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = Rr,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: l = {}
        } = t;
        return _c({
          type: "text",
          content: e
        }, () => (bo("beforeDOMElementCreation", {
          content: e,
          params: t
        }), W_({
          content: e,
          transform: Y(Y({}, Rr), n),
          title: r,
          extra: {
            attributes: a,
            styles: l,
            classes: ["".concat(se.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: a
      } = n;
      let l = null, u = null;
      if (pw) {
        const f = parseInt(getComputedStyle(t).fontSize, 10), d = t.getBoundingClientRect();
        l = d.width / f, u = d.height / f;
      }
      return se.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, W_({
        content: t.innerHTML,
        width: l,
        height: u,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const xj = new RegExp('"', "ug"), J_ = [1105920, 1112319], Q_ = Y(Y(Y(Y({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), YU), u9), n9), _h = Object.keys(Q_).reduce((e, t) => (e[t.toLowerCase()] = Q_[t], e), {}), Sj = Object.keys(_h).reduce((e, t) => {
  const n = _h[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Cj(e) {
  const t = e.replace(xj, ""), n = M9(t, 0), r = n >= J_[0] && n <= J_[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fh(i ? t[0] : t),
    isSecondary: r || i
  };
}
function Ej(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (_h[n] || {})[i] || Sj[n];
}
function eb(e, t) {
  const n = "".concat(c9).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const l = Pa(e.children).filter((_) => _.getAttribute(sh) === t)[0], u = zi.getComputedStyle(e, t), f = u.getPropertyValue("font-family"), d = f.match(g9), p = u.getPropertyValue("font-weight"), g = u.getPropertyValue("content");
    if (l && !d)
      return e.removeChild(l), r();
    if (d && g !== "none" && g !== "") {
      const _ = u.getPropertyValue("content");
      let y = Ej(f, p);
      const {
        value: k,
        isSecondary: x
      } = Cj(_), O = d[0].startsWith("FontAwesome");
      let S = rg(y, k), M = S;
      if (O) {
        const T = K9(k);
        T.iconName && T.prefix && (S = T.iconName, y = T.prefix);
      }
      if (S && !x && (!l || l.getAttribute(Zp) !== y || l.getAttribute(Jp) !== M)) {
        e.setAttribute(n, M), l && e.removeChild(l);
        const T = hj(), {
          extra: L
        } = T;
        L.attributes[sh] = t, yh(S, y).then((K) => {
          const N = ig(Y(Y({}, T), {}, {
            icons: {
              main: K,
              mask: Kw()
            },
            prefix: y,
            iconName: M,
            extra: L,
            watchable: !0
          })), W = ft.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(W, e.firstChild) : e.appendChild(W), W.outerHTML = N.map((ne) => js(ne)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function Oj(e) {
  return Promise.all([eb(e, "::before"), eb(e, "::after")]);
}
function Pj(e) {
  return e.parentNode !== document.head && !~d9.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(sh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function tb(e) {
  if (wi)
    return new Promise((t, n) => {
      const r = Pa(e.querySelectorAll("*")).filter(Pj).map(Oj), i = og.begin("searchPseudoElements");
      Bw(), Promise.all(r).then(() => {
        i(), vh(), t();
      }).catch(() => {
        i(), vh(), n();
      });
    });
}
var Ij = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = tb, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ft
      } = t;
      se.searchPseudoElements && tb(n);
    };
  }
};
let nb = !1;
var Tj = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Bw(), nb = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        V_(hh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        uj();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        nb ? vh() : V_(hh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const rb = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), a = i[0];
    let l = i.slice(1).join("-");
    if (a && l === "h")
      return n.flipX = !0, n;
    if (a && l === "v")
      return n.flipY = !0, n;
    if (l = parseFloat(l), isNaN(l))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + l;
        break;
      case "shrink":
        n.size = n.size - l;
        break;
      case "left":
        n.x = n.x - l;
        break;
      case "right":
        n.x = n.x + l;
        break;
      case "up":
        n.y = n.y - l;
        break;
      case "down":
        n.y = n.y + l;
        break;
      case "rotate":
        n.rotate = n.rotate + l;
        break;
    }
    return n;
  }, t);
};
var Mj = {
  mixout() {
    return {
      parse: {
        transform: (e) => rb(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = rb(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: a
      } = t;
      const l = {
        transform: "translate(".concat(i / 2, " 256)")
      }, u = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), f = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), d = "rotate(".concat(r.rotate, " 0 0)"), p = {
        transform: "".concat(u, " ").concat(f, " ").concat(d)
      }, g = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, _ = {
        outer: l,
        inner: p,
        path: g
      };
      return {
        tag: "g",
        attributes: Y({}, _.outer),
        children: [{
          tag: "g",
          attributes: Y({}, _.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: Y(Y({}, n.icon.attributes), _.path)
          }]
        }]
      };
    };
  }
};
const pd = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ib(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Aj(e) {
  return e.tag === "g" ? e.children : [e];
}
var Dj = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? vc(n.split(" ").map((i) => i.trim())) : Kw();
        return r.prefix || (r.prefix = Bi()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: a,
        maskId: l,
        transform: u
      } = t;
      const {
        width: f,
        icon: d
      } = i, {
        width: p,
        icon: g
      } = a, _ = C9({
        transform: u,
        containerWidth: p,
        iconWidth: f
      }), y = {
        tag: "rect",
        attributes: Y(Y({}, pd), {}, {
          fill: "white"
        })
      }, k = d.children ? {
        children: d.children.map(ib)
      } : {}, x = {
        tag: "g",
        attributes: Y({}, _.inner),
        children: [ib(Y({
          tag: d.tag,
          attributes: Y(Y({}, d.attributes), _.path)
        }, k))]
      }, O = {
        tag: "g",
        attributes: Y({}, _.outer),
        children: [x]
      }, S = "mask-".concat(l || bs()), M = "clip-".concat(l || bs()), T = {
        tag: "mask",
        attributes: Y(Y({}, pd), {}, {
          id: S,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, O]
      }, L = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: M
          },
          children: Aj(g)
        }, T]
      };
      return n.push(L, {
        tag: "rect",
        attributes: Y({
          fill: "currentColor",
          "clip-path": "url(#".concat(M, ")"),
          mask: "url(#".concat(S, ")")
        }, pd)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Lj = {
  provides(e) {
    let t = !1;
    zi.matchMedia && (t = zi.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: Y(Y({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = Y(Y({}, i), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: Y(Y({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || l.children.push({
        tag: "animate",
        attributes: Y(Y({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Y(Y({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(l), n.push({
        tag: "path",
        attributes: Y(Y({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Y(Y({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: Y(Y({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Y(Y({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Rj = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Nj = [P9, _j, bj, wj, kj, Ij, Tj, Mj, Dj, Lj, Rj];
Y9(Nj, {
  mixoutsTo: Bn
});
Bn.noAuto;
Bn.config;
Bn.library;
Bn.dom;
const bh = Bn.parse;
Bn.findIconDefinition;
Bn.toHtml;
const Kj = Bn.icon;
Bn.layer;
Bn.text;
Bn.counter;
function ob(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ob(Object(n), !0).forEach(function(r) {
      Qo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ob(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ku(e) {
  "@babel/helpers - typeof";
  return Ku = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ku(e);
}
function Qo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Fj(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $j(e, t) {
  if (e == null) return {};
  var n = Fj(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function wh(e) {
  return Hj(e) || zj(e) || Bj(e) || Uj();
}
function Hj(e) {
  if (Array.isArray(e)) return kh(e);
}
function zj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Bj(e, t) {
  if (e) {
    if (typeof e == "string") return kh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kh(e, t);
  }
}
function kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Uj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jj(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, l = e.shake, u = e.flash, f = e.spin, d = e.spinPulse, p = e.spinReverse, g = e.pulse, _ = e.fixedWidth, y = e.inverse, k = e.border, x = e.listItem, O = e.flip, S = e.size, M = e.rotation, T = e.pull, L = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": l,
    "fa-flash": u,
    "fa-spin": f,
    "fa-spin-reverse": p,
    "fa-spin-pulse": d,
    "fa-pulse": g,
    "fa-fw": _,
    "fa-inverse": y,
    "fa-border": k,
    "fa-li": x,
    "fa-flip": O === !0,
    "fa-flip-horizontal": O === "horizontal" || O === "both",
    "fa-flip-vertical": O === "vertical" || O === "both"
  }, Qo(t, "fa-".concat(S), typeof S < "u" && S !== null), Qo(t, "fa-rotate-".concat(M), typeof M < "u" && M !== null && M !== 0), Qo(t, "fa-pull-".concat(T), typeof T < "u" && T !== null), Qo(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(L).map(function(K) {
    return L[K] ? K : null;
  }).filter(function(K) {
    return K;
  });
}
function Wj(e) {
  return e = e - 0, e === e;
}
function jw(e) {
  return Wj(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Yj = ["style"];
function Gj(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qj(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = jw(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[Gj(i)] = a : t[i] = a, t;
  }, {});
}
function Ww(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(f) {
    return Ww(e, f);
  }), i = Object.keys(t.attributes || {}).reduce(function(f, d) {
    var p = t.attributes[d];
    switch (d) {
      case "class":
        f.attrs.className = p, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = qj(p);
        break;
      default:
        d.indexOf("aria-") === 0 || d.indexOf("data-") === 0 ? f.attrs[d.toLowerCase()] = p : f.attrs[jw(d)] = p;
    }
    return f;
  }, {
    attrs: {}
  }), a = n.style, l = a === void 0 ? {} : a, u = $j(n, Yj);
  return i.attrs.style = Mr(Mr({}, i.attrs.style), l), e.apply(void 0, [t.tag, Mr(Mr({}, i.attrs), u)].concat(wh(r)));
}
var Yw = !1;
try {
  Yw = Ve.env.NODE_ENV === "production";
} catch {
}
function Vj() {
  if (!Yw && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ab(e) {
  if (e && Ku(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (bh.icon)
    return bh.icon(e);
  if (e === null)
    return null;
  if (e && Ku(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function gd(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Qo({}, e, t) : {};
}
var sb = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Gt = /* @__PURE__ */ Dt.forwardRef(function(e, t) {
  var n = Mr(Mr({}, sb), e), r = n.icon, i = n.mask, a = n.symbol, l = n.className, u = n.title, f = n.titleId, d = n.maskId, p = ab(r), g = gd("classes", [].concat(wh(jj(n)), wh((l || "").split(" ")))), _ = gd("transform", typeof n.transform == "string" ? bh.transform(n.transform) : n.transform), y = gd("mask", ab(i)), k = Kj(p, Mr(Mr(Mr(Mr({}, g), _), y), {}, {
    symbol: a,
    title: u,
    titleId: f,
    maskId: d
  }));
  if (!k)
    return Vj("Could not find icon", p), null;
  var x = k.abstract, O = {
    ref: t
  };
  return Object.keys(n).forEach(function(S) {
    sb.hasOwnProperty(S) || (O[S] = n[S]);
  }), Xj(x[0], O);
});
Gt.displayName = "FontAwesomeIcon";
Gt.propTypes = {
  beat: m.bool,
  border: m.bool,
  beatFade: m.bool,
  bounce: m.bool,
  className: m.string,
  fade: m.bool,
  flash: m.bool,
  mask: m.oneOfType([m.object, m.array, m.string]),
  maskId: m.string,
  fixedWidth: m.bool,
  inverse: m.bool,
  flip: m.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: m.oneOfType([m.object, m.array, m.string]),
  listItem: m.bool,
  pull: m.oneOf(["right", "left"]),
  pulse: m.bool,
  rotation: m.oneOf([0, 90, 180, 270]),
  shake: m.bool,
  size: m.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: m.bool,
  spinPulse: m.bool,
  spinReverse: m.bool,
  symbol: m.oneOfType([m.bool, m.string]),
  title: m.string,
  titleId: m.string,
  transform: m.oneOfType([m.string, m.object]),
  swapOpacity: m.bool
};
var Xj = Ww.bind(null, Dt.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Zj = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"]
}, Jj = {
  prefix: "fas",
  iconName: "pen-to-square",
  icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]
}, Qj = Jj, eW = {
  prefix: "fas",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]
}, tW = eW, nW = {
  prefix: "fas",
  iconName: "arrow-pointer",
  icon: [320, 512, ["mouse-pointer"], "f245", "M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"]
}, rW = nW, iW = {
  prefix: "fas",
  iconName: "vector-square",
  icon: [448, 512, [], "f5cb", "M368 80l32 0 0 32-32 0 0-32zM352 32c-17.7 0-32 14.3-32 32L128 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-192c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM96 160c17.7 0 32-14.3 32-32l192 0c0 17.7 14.3 32 32 32l0 192c-17.7 0-32 14.3-32 32l-192 0c0-17.7-14.3-32-32-32l0-192zM48 400l32 0 0 32-32 0 0-32zm320 32l0-32 32 0 0 32-32 0zM48 112l0-32 32 0 0 32-32 0z"]
}, oW = {
  prefix: "fas",
  iconName: "chart-line",
  icon: [512, 512, ["line-chart"], "f201", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]
}, aW = {
  prefix: "fas",
  iconName: "tag",
  icon: [448, 512, [127991], "f02b", "M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, sW = {
  prefix: "fas",
  iconName: "crosshairs",
  icon: [512, 512, [], "f05b", "M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, lW = {
  prefix: "fas",
  iconName: "grip-lines",
  icon: [448, 512, [], "f7a4", "M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"]
}, uW = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, cW = uW, lb = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, fW = {
  prefix: "fas",
  iconName: "draw-polygon",
  icon: [448, 512, [], "f5ee", "M96 151.4l0 209.1c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c0-.1 .1-.2 .1-.3l-4.5-7.9-32-56s0 0 0 0c-1.4 .1-2.8 .1-4.2 .1c-35.3 0-64-28.7-64-64s28.7-64 64-64c1.4 0 2.8 0 4.2 .1c0 0 0 0 0 0l32-56 4.5-7.9-.1-.3-209.1 0c-5.6 9.7-13.7 17.8-23.4 23.4zM384.3 352c35.2 .2 63.7 28.7 63.7 64c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-209.1C12.9 140.4 0 119.7 0 96C0 60.7 28.7 32 64 32c23.7 0 44.4 12.9 55.4 32l209.1 0c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 35.3-28.5 63.8-63.7 64l-4.5 7.9-32 56-2.3 4c4.2 8.5 6.5 18 6.5 28.1s-2.3 19.6-6.5 28.1l2.3 4 32 56 4.5 7.9z"]
}, dW = {
  prefix: "fas",
  iconName: "mask",
  icon: [576, 512, [], "f6fa", "M288 64C64 64 0 160 0 272S80 448 176 448l8.4 0c24.2 0 46.4-13.7 57.2-35.4l23.2-46.3c4.4-8.8 13.3-14.3 23.2-14.3s18.8 5.5 23.2 14.3l23.2 46.3c10.8 21.7 33 35.4 57.2 35.4l8.4 0c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
}, pn = { marginTop: 4, width: 16, height: 16, marginBottom: 4 }, hW = {
  select: () => /* @__PURE__ */ A(
    Gt,
    {
      style: pn,
      size: "xs",
      fixedWidth: !0,
      icon: rW
    }
  ),
  pan: () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: tW }),
  zoom: () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: cW }),
  "show-tags": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: aW }),
  "create-point": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: sW }),
  "create-box": () => /* @__PURE__ */ A(
    Gt,
    {
      style: pn,
      size: "xs",
      fixedWidth: !0,
      icon: iW
    }
  ),
  "create-polygon": () => /* @__PURE__ */ A(
    Gt,
    {
      style: pn,
      size: "xs",
      fixedWidth: !0,
      icon: fW
    }
  ),
  "create-expanding-line": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: lW }),
  "create-line": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: oW }),
  "show-mask": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: dW }),
  "modify-allowed-area": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: Qj }),
  "create-keypoints": () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: lb }),
  fullscreen: () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: lb }),
  window: () => /* @__PURE__ */ A(Gt, { style: pn, size: "xs", fixedWidth: !0, icon: Zj })
};
var xh = { exports: {} };
function nu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nu = function(t) {
    return typeof t;
  } : nu = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nu(e);
}
function nt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ub(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tt(e, t, n) {
  return t && ub(e.prototype, t), n && ub(e, n), e;
}
function Ft(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Fu() {
  return Fu = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fu.apply(this, arguments);
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      Ft(e, i, n[i]);
    });
  }
  return e;
}
function Ur(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ks(e, t);
}
function Pt(e) {
  return Pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pt(e);
}
function ks(e, t) {
  return ks = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, ks(e, t);
}
function pW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ru(e, t, n) {
  return pW() ? ru = Reflect.construct : ru = function(i, a, l) {
    var u = [null];
    u.push.apply(u, a);
    var f = Function.bind.apply(i, u), d = new f();
    return l && ks(d, l.prototype), d;
  }, ru.apply(null, arguments);
}
function gW(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Sh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Sh = function(r) {
    if (r === null || !gW(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, i);
    }
    function i() {
      return ru(r, arguments, Pt(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ks(i, r);
  }, Sh(e);
}
function yW(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ws(e, t) {
  if (e == null) return {};
  var n = yW(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jr(e, t) {
  return t && (typeof t == "object" || typeof t == "function") ? t : Mt(e);
}
function mW(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Pt(e), e !== null); )
    ;
  return e;
}
function si(e, t, n) {
  return typeof Reflect < "u" && Reflect.get ? si = Reflect.get : si = function(i, a, l) {
    var u = mW(i, a);
    if (u) {
      var f = Object.getOwnPropertyDescriptor(u, a);
      return f.get ? f.get.call(l) : f.value;
    }
  }, si(e, t, n || e);
}
function on(e) {
  return vW(e) || _W(e) || bW();
}
function vW(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function _W(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function bW() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function fa(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null;
  return e.reduce(function(n, r) {
    return n[r] = t || { value: r }, n;
  }, {});
}
var Gw = { logLevel: "warn", defaultKeyEvent: "keydown", defaultComponent: "div", defaultTabIndex: "-1", ignoreTags: ["input", "select", "textarea"], enableHardSequences: !1, ignoreKeymapAndHandlerChangesByDefault: !0, ignoreEventsCondition: function(t) {
  var n = t.target;
  if (n && n.tagName) {
    var r = n.tagName.toLowerCase();
    return Qe.option("_ignoreTagsDict")[r] || n.isContentEditable;
  }
  return !1;
}, ignoreRepeatedEventsWhenKeyHeldDown: !0, simulateMissingKeyPressEvents: !0, stopEventPropagationAfterHandling: !0, stopEventPropagationAfterIgnoring: !0, allowCombinationSubmatches: !1, customKeyCodes: {} }, us = cr({}, Gw);
us._ignoreTagsDict = fa(us.ignoreTags, !0);
var Qe = function() {
  function e() {
    nt(this, e);
  }
  return tt(e, null, [{ key: "init", value: function(n) {
    var r = this, i = n.ignoreTags, a = n.customKeyCodes;
    i && (n._ignoreTagsDict = fa(n.ignoreTags)), a && (n._customKeyNamesDict = fa(Object.values(n.customKeyCodes))), ["verbose", "debug", "info"].indexOf(n.logLevel) !== -1 && console.warn("React HotKeys: You have requested log level '".concat(n.logLevel, "' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.")), Object.keys(n).forEach(function(l) {
      r.set(l, n[l]);
    });
  } }, { key: "set", value: function(n, r) {
    us[n] = r;
  } }, { key: "reset", value: function(n) {
    us[n] = Gw[n];
  } }, { key: "option", value: function(n) {
    return us[n];
  } }]), e;
}(), wr = function() {
  function e() {
    var t = this, n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "warn";
    if (nt(this, e), Ft(this, "verbose", this.noop), Ft(this, "debug", this.noop), Ft(this, "info", this.noop), Ft(this, "warn", this.noop), Ft(this, "error", this.noop), this.logLevel = this.constructor.levels[n], this.logLevel >= this.constructor.levels.error) this.error = console.error;
    else return;
    if (this.logLevel >= this.constructor.levels.warn) this.warn = console.warn;
    else return;
    ["info", "debug", "verbose"].some(function(r) {
      return !(t.logLevel >= t.constructor.levels[r]) || (t[r] = console.log, !1);
    });
  }
  return tt(e, [{ key: "noop", value: function() {
  } }]), e;
}();
Ft(wr, "logIcons", ["📕", "📗", "📘", "📙"]), Ft(wr, "componentIcons", ["🔺", "⭐️", "🔷", "🔶", "⬛️"]), Ft(wr, "eventIcons", ["❤️", "💚", "💙", "💛", "💜", "🧡"]), Ft(wr, "levels", { none: 0, error: 1, warn: 2, info: 3, debug: 4, verbose: 5 });
var xe = { keydown: 0, keypress: 1, keyup: 2 }, yd = { Shift: ["shiftKey"], Meta: ["metaKey"], Control: ["ctrlKey"], Alt: ["altKey"] }, qw = { "`": ["~"], 1: ["!"], 2: ["@", '"'], 3: ["#", "£"], 4: ["$"], 5: ["%"], 6: ["^"], 7: ["&"], 8: ["*"], 9: ["("], 0: [")"], "-": ["_"], "=": ["plus"], ";": [":"], "'": ['"', "@"], ",": ["<"], ".": [">"], "/": ["?"], "\\": ["|"], "[": ["{"], "]": ["}"], "#": ["~"] };
function sg(e) {
  return qw[e] || [e.length === 1 ? e.toUpperCase() : e];
}
function ir(e, t) {
  return e.hasOwnProperty(t);
}
function bc(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, r) {
    var i = e[r];
    return i.forEach(function(a) {
      ir(n, a) || (n[a] = []), n[a].push(r);
    }), t.includeOriginal && (!ir(n, r) && (n[r] = []), n[r] = [].concat(on(n[r]), on(i))), n;
  }, {});
}
var wW = bc(qw);
function wc(e) {
  return wW[e] || [e.length === 1 ? e.toLowerCase() : e];
}
var kW = {}, Vw = bc(kW, { includeOriginal: !0 });
function Xw(e) {
  return typeof e == "string";
}
function xW(e) {
  return Xw(e) ? e.trim().replace(/\s+/g, " ") : e;
}
var SW = { tab: "Tab", capslock: "CapsLock", shift: "Shift", meta: "Meta", alt: "Alt", ctrl: "Control", space: " ", spacebar: " ", escape: "Escape", esc: "Escape", left: "ArrowLeft", right: "ArrowRight", up: "ArrowUp", down: "ArrowDown", return: "Enter", del: "Delete", command: "Meta", option: "Alt", enter: "Enter", backspace: "Backspace", ins: "Insert", pageup: "PageUp", pagedown: "PageDown", end: "End", home: "Home", contextmenu: "ContextMenu", numlock: "Clear" }, CW = { cmd: "Meta" };
function Zw(e) {
  var t = e.toLowerCase();
  return SW[t] || CW[t] || (e.match(/^f\d+$/) ? e.toUpperCase() : e);
}
var Jw = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, EW = fa(Object.values(Jw), !0);
function Qw(e) {
  return !!EW[e];
}
function OW(e) {
  return Qe.option("_customKeyNamesDict")[e];
}
function ek(e) {
  return Qw(e) || String.fromCharCode(e.charCodeAt(0)) === e || OW(e);
}
var tk = function(e) {
  function t() {
    var n, r;
    nt(this, t);
    for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
    return r = jr(this, (n = Pt(t)).call.apply(n, [this].concat(a))), Ft(Mt(Mt(r)), "name", "InvalidKeyNameError"), r;
  }
  return Ur(t, e), t;
}(Sh(Error));
function cb(e) {
  return e.sort().join("+");
}
var nk = function() {
  function e() {
    nt(this, e);
  }
  return tt(e, null, [{ key: "parse", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, i = xW(n), a = i.split(" ");
    try {
      var l = a.slice(0, a.length - 1), u = a[a.length - 1], f = l.map(function(_) {
        var y = fb(_, r);
        return cb(Object.keys(y));
      }).join(" "), d = fb(u, r), p = cb(Object.keys(d)), g = { id: p, keyDictionary: d, keyEventType: r.keyEventType, size: Object.keys(d).length };
      return { sequence: { prefix: f, size: l.length + 1 }, combination: g };
    } catch {
      return { sequence: null, combination: null };
    }
  } }]), e;
}();
function fb(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  return e.replace(/^\+|(\s|[^+]\+)\+/, "$1plus").split("+").reduce(function(n, r) {
    var i = Zw(r);
    if (t.ensureValidKeys && !ek(i)) throw new tk();
    return n[i] = !0, n;
  }, {});
}
var rk = { "`": ["`"], 1: ["¡"], 2: ["™"], 3: ["£"], 4: ["¢"], 5: ["∞"], 6: ["§"], 7: ["¶"], 8: ["•"], 9: ["ª"], 0: ["º"], "-": ["–"], "=": ["≠"], a: ["å"], b: ["∫"], c: ["ç"], d: ["∂"], e: ["´"], f: ["ƒ"], g: ["©"], h: ["˙"], i: ["ˆ"], j: ["∆"], k: ["˚"], l: ["¬"], m: ["µ"], n: ["˜"], o: ["ø"], p: ["π"], q: ["œ"], r: ["®"], s: ["ß"], t: ["†"], u: ["¨"], v: ["√"], w: ["∑"], x: ["≈"], y: ["¥"], z: ["Ω"], "[": ["“"], "]": ["‘"], "\\": ["«"], "'": ["æ"], ";": ["…"], ",": ["≤"], ".": ["≥"], "/": ["÷"] }, PW = bc(rk);
function lg(e) {
  return PW[e] || [e];
}
function ug(e) {
  return rk[e] || [e];
}
var ik = { "`": ["`"], 1: ["⁄"], 2: ["€"], 3: ["‹"], 4: ["›"], 5: ["ﬁ"], 6: ["ﬂ"], 7: ["‡"], 8: ["°"], 9: ["·"], 0: ["‚"], "-": ["—"], "=": ["±"], a: ["Å"], b: ["ı"], c: ["Ç"], d: ["Î"], e: ["´"], f: ["Ï"], g: ["˝"], h: ["Ó"], i: ["ˆ"], j: ["Ô"], k: [""], l: ["Ò"], m: ["Â"], n: ["˜"], o: ["Ø"], p: ["π"], q: ["Œ"], r: ["‰"], s: ["Í"], t: ["Î"], u: ["¨"], v: ["◊"], w: ["„"], x: ["˛"], y: ["Á"], z: ["¸"], "[": ["”"], "]": ["’"], "\\": ["»"], "'": ["Æ"], ";": ["Ú"], ",": ["¯"], ".": ["˘"] }, IW = bc(ik);
function cg(e) {
  return IW[e] || wc(e);
}
function fg(e) {
  return ik[e] || [e];
}
var kc = function() {
  function e() {
    nt(this, e);
  }
  return tt(e, null, [{ key: "serialize", value: function(n) {
    var r = n.Shift, i = n.Alt, a = {}, l = Object.keys(n).sort();
    return l.forEach(function(u) {
      var f = [];
      if (r)
        if (i) {
          var d = cg(u), p = fg(u);
          f = [].concat(on(f), [u], on(d), on(p));
        } else {
          var g = wc(u), _ = sg(u);
          f = [].concat(on(f), [u], on(g), on(_));
        }
      else if (i) {
        var y = lg(u), k = ug(u);
        f = [].concat(on(f), [u], on(y), on(k));
      } else {
        f.push(u);
        var x = Vw[u];
        x && (f = [].concat(on(f), on(x)));
      }
      var O = Object.keys(a);
      0 < O.length ? O.forEach(function(S) {
        f.forEach(function(M) {
          a[S + "+".concat(M)] = cr({}, a[S], Ft({}, M, !0));
        }), delete a[S];
      }) : f.forEach(function(S) {
        a[S] = Ft({}, S, !0);
      });
    }), Object.values(a).map(function(u) {
      return Object.keys(u).sort().join("+");
    });
  } }, { key: "isValidKeySerialization", value: function(n) {
    return 0 < n.length && !!nk.parse(n, { ensureValidKeys: !0 }).combination;
  } }]), e;
}(), db = { previous: 0, current: 1 };
function TW(e) {
  return Vw[e] || [e];
}
function MW(e) {
  if (e.Shift) return e.Alt ? [fg, cg] : [sg, wc];
  if (e.Alt) return [ug, lg];
  var t = function(n) {
    return [n];
  };
  return [t, t];
}
function sr(e) {
  return typeof e > "u";
}
var fi = { unseen: 0, seen: 1, simulated: 2 }, Li = function() {
  function e() {
    nt(this, e);
  }
  return tt(e, null, [{ key: "newRecord", value: function(n, r) {
    var i = [fi.unseen, fi.unseen, fi.unseen];
    if (!sr(n)) for (var a = 0; a <= n; a++) i[a] = r;
    return i;
  } }, { key: "setBit", value: function(n, r, i) {
    return n[r] = i, n;
  } }, { key: "clone", value: function(n) {
    for (var r = this.newRecord(), i = 0; i < n.length; i++) r[i] = n[i];
    return r;
  } }]), e;
}();
function ji(e) {
  return !Array.isArray(e) && nu(e) === "object" && e !== null;
}
function cs(e) {
  return ji(e) ? Object.keys(e).length === 0 : !e || e.length === 0;
}
function ok(e) {
  return ji(e) ? Object.keys(e).length : e.length;
}
var iu = function() {
  function e() {
    var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    nt(this, e), this._keys = t, this._includesKeyUp = !1, this._update();
  }
  return tt(e, [{ key: "getIds", value: function() {
    return this._ids;
  } }, { key: "getKeyAliases", value: function() {
    return this._keyAliases;
  } }, { key: "getNormalizedKeyName", value: function(n) {
    var r = this._keys[n];
    if (r) return n;
    var i = this._keyAliases[n];
    return i || n;
  } }, { key: "getNumberOfKeys", value: function() {
    return ok(this._keys);
  } }, { key: "any", value: function() {
    return 0 < Object.keys(this._getKeyStates()).length;
  } }, { key: "isEnding", value: function() {
    return this._includesKeyUp;
  } }, { key: "hasEnded", value: function() {
    return cs(this.keysStillPressedDict());
  } }, { key: "addKey", value: function(n, r) {
    this._setKeyState(n, [Li.newRecord(), Li.newRecord(xe.keydown, r)]);
  } }, { key: "setKeyState", value: function(n, r, i) {
    var a = this._getKeyState(n);
    if (this.isKeyIncluded(n)) {
      var l = Li.clone(a[1]), u = Li.clone(l);
      Li.setBit(u, r, i), this._setKeyState(n, [l, u]);
    } else this.addKey(n, i);
    r === xe.keyup && (this._includesKeyUp = !0);
  } }, { key: "forEachKey", value: function(n) {
    return Object.keys(this._keys).forEach(n);
  } }, { key: "some", value: function(n) {
    return Object.keys(this._keys).some(n);
  } }, { key: "getKeyDictionary", value: function() {
    return fa(Object.keys(this._getKeyStates()), !0);
  } }, { key: "keysStillPressedDict", value: function() {
    var n = this;
    return Object.keys(this._keys).reduce(function(r, i) {
      return n.isKeyStillPressed(i) && (r[i] = n._getKeyState(i)), r;
    }, {});
  } }, { key: "isKeyIncluded", value: function(n) {
    return !!this._getKeyState(n);
  } }, { key: "isKeyStillPressed", value: function(n) {
    return this.isEventTriggered(n, xe.keypress) && !this.isKeyReleased(n);
  } }, { key: "isKeyReleased", value: function(n) {
    return this.isEventTriggered(n, xe.keyup);
  } }, { key: "isEventTriggered", value: function(n, r) {
    return this._getKeyStateType(n, db.current, r);
  } }, { key: "wasEventPreviouslyTriggered", value: function(n, r) {
    return this._getKeyStateType(n, db.previous, r);
  } }, { key: "isKeyPressSimulated", value: function(n) {
    return this._isKeyEventSimulated(n, xe.keypress);
  } }, { key: "isKeyUpSimulated", value: function(n) {
    return this._isKeyEventSimulated(n, xe.keyup);
  } }, { key: "describe", value: function() {
    return this.getIds()[0];
  } }, { key: "toJSON", value: function() {
    return { keys: this._getKeyStates(), ids: this.getIds(), keyAliases: this.getKeyAliases() };
  } }, { key: "_getKeyStateType", value: function(n, r, i) {
    var a = this._getKeyState(n);
    return a && a[r][i];
  } }, { key: "_update", value: function() {
    this._ids = kc.serialize(this._keys), this._keyAliases = AW(this._keys);
  } }, { key: "_isKeyEventSimulated", value: function(n, r) {
    return this.isEventTriggered(n, r) === fi.simulated;
  } }, { key: "_getKeyStates", value: function() {
    return this._keys;
  } }, { key: "_getKeyState", value: function(n) {
    var r = this._keys[n];
    if (r) return r;
    var i = this._keyAliases[n];
    if (i) return this._keys[i];
  } }, { key: "_setKeyState", value: function(n, r) {
    var i = this.getNormalizedKeyName(n);
    this._keys[i] = r, this._update();
  } }]), e;
}();
function AW(e) {
  return Object.keys(e).reduce(function(t, n) {
    return TW(n).forEach(function(r) {
      MW(e).forEach(function(i) {
        i(r).forEach(function(a) {
          (a !== n || n !== r) && (t[a] = n);
        });
      });
    }), t;
  }, {});
}
var hb = function() {
  function e(t) {
    var n = t.maxLength, r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null;
    nt(this, e), this._records = [], this._maxLength = n, r ? this._push(r) : this._push(new iu());
  }
  return tt(e, [{ key: "getMostRecentCombinations", value: function(n) {
    return this._records.slice(-n, -1);
  } }, { key: "any", value: function() {
    return this._records.some(function(n) {
      return n.any();
    });
  } }, { key: "getLength", value: function() {
    return this._records.length;
  } }, { key: "getCurrentCombination", value: function() {
    return this._records[this.getLength() - 1];
  } }, { key: "addKeyToCurrentCombination", value: function(n, r, i) {
    this._ensureInitialKeyCombination(), this.getCurrentCombination().setKeyState(n, r, i);
  } }, { key: "setMaxLength", value: function(n) {
    this._maxLength = n, this._trimHistory();
  } }, { key: "startNewKeyCombination", value: function(n, r) {
    this._ensureInitialKeyCombination();
    var i = new iu(this.getCurrentCombination().keysStillPressedDict());
    i.addKey(n, r), this._push(i);
  } }, { key: "toJSON", value: function() {
    return this._records.map(function(n) {
      return n.toJSON();
    });
  } }, { key: "_ensureInitialKeyCombination", value: function() {
    this.getLength() === 0 && this._push(new iu());
  } }, { key: "_push", value: function(n) {
    this._trimHistory(), this._records.push(n);
  } }, { key: "_trimHistory", value: function() {
    for (; this.getLength() > this._maxLength; ) this._shift();
  } }, { key: "_shift", value: function() {
    this._records.shift();
  } }]), e;
}(), DW = function() {
  function e() {
    nt(this, e), this._registry = {};
  }
  return tt(e, [{ key: "get", value: function(n) {
    return this._registry[n];
  } }, { key: "set", value: function(n, r) {
    this._registry[n] = r;
  } }, { key: "remove", value: function(n) {
    delete this._registry[n];
  } }, { key: "toJSON", value: function() {
    return this._registry;
  } }]), e;
}();
function xs(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function LW(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : [], n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, r = fa(xs(t));
  return Array.isArray(e) ? e.reduce(function(i, a) {
    return r[a] && (n.stringifyFirst || r[a].value === a) || i.push(a), i;
  }, []) : ji(e) ? Object.keys(e).reduce(function(i, a) {
    return r[a] || (i[a] = e[a]), i;
  }, {}) : e;
}
var RW = function(e) {
  function t() {
    return nt(this, t), jr(this, Pt(t).apply(this, arguments));
  }
  return Ur(t, e), tt(t, [{ key: "add", value: function(r, i) {
    si(Pt(t.prototype), "set", this).call(this, r, { childIds: [], parentId: null, keyMap: i });
  } }, { key: "update", value: function(r, i) {
    var a = si(Pt(t.prototype), "get", this).call(this, r);
    si(Pt(t.prototype), "set", this).call(this, r, cr({}, a, { keyMap: i }));
  } }, { key: "setParent", value: function(r, i) {
    this.get(r).parentId = i, this._addChildId(i, r);
  } }, { key: "remove", value: function(r) {
    var i = this._getParentId(r);
    this._removeChildId(i, r), si(Pt(t.prototype), "remove", this).call(this, r);
  } }, { key: "_getParentId", value: function(r) {
    var i = this.get(r);
    return i && i.parentId;
  } }, { key: "_addChildId", value: function(r, i) {
    this.get(r).childIds.push(i);
  } }, { key: "_removeChildId", value: function(r, i) {
    var a = this.get(r);
    a && (a.childIds = LW(a.childIds, i));
  } }]), t;
}(DW);
function NW(e, t) {
  return [].concat(on(e.slice(0, t)), on(e.slice(t + 1)));
}
var KW = function() {
  function e(t) {
    nt(this, e), this._list = t, this._position = -1;
  }
  return tt(e, [{ key: "getPosition", value: function() {
    return this._position;
  } }, { key: "getComponent", value: function() {
    return this._list.getAtPosition(this.getPosition());
  } }, { key: "next", value: function() {
    return this.getPosition() + 1 < this._list.getLength() ? (this._position++, this.getComponent()) : null;
  } }]), e;
}(), FW = function() {
  function e() {
    nt(this, e), this._list = [], this._idToIndex = {}, this._longestSequence = 1, this._longestSequenceComponentId = null, this._keyMapEventRecord = Li.newRecord();
  }
  return tt(e, [{ key: "getNewIterator", value: function() {
    return new KW(this);
  } }, { key: "add", value: function(n, r, i, a) {
    if (this.containsId(n)) return this.update(n, r, i, a);
    var l = this._build(n, r, i, a);
    this._list.push(l);
    var u = this._getLastIndex();
    return this._idToIndex[n] = u;
  } }, { key: "containsId", value: function(n) {
    return !!this.get(n);
  } }, { key: "get", value: function(n) {
    return this.getAtPosition(this.getIndexById(n));
  } }, { key: "getIndexById", value: function(n) {
    return this._idToIndex[n];
  } }, { key: "update", value: function(n, r, i, a) {
    var l = this._isUpdatingComponentWithLongestSequence(n), u = this.getLongestSequence(), f = this._build(n, r, i, a);
    l && f.sequenceLength !== u && (f.sequenceLength > u ? this._longestSequence = f.sequenceLength : this._recalculateLongestSequence()), this._list[this.getIndexById(n)] = f;
  } }, { key: "remove", value: function(n) {
    var r = this._isUpdatingComponentWithLongestSequence(n);
    this.removeAtPosition(this.getIndexById(n)), r && this._recalculateLongestSequence();
  } }, { key: "any", value: function() {
    return this.getLength() !== 0;
  } }, { key: "isRoot", value: function(n) {
    return this.getIndexById(n) >= this.getLength() - 1;
  } }, { key: "getLongestSequence", value: function() {
    return this._longestSequence;
  } }, { key: "anyActionsForEventType", value: function(n) {
    return !!this._keyMapEventRecord[n];
  } }, { key: "getLength", value: function() {
    return this._list.length;
  } }, { key: "getAtPosition", value: function(n) {
    return this._list[n];
  } }, { key: "removeAtPosition", value: function(n) {
    this._list = NW(this._list, n);
    for (var r = n; r < this.getLength(); ) this._idToIndex[this.getAtPosition(r).componentId] = r, r++;
  } }, { key: "toJSON", value: function() {
    return this._list;
  } }, { key: "_getLastIndex", value: function() {
    return this.getLength() - 1;
  } }, { key: "_build", value: function(n, r, i, a) {
    var l = this._applyHardSequences(r, i), u = l.keyMap, f = l.handlers, d = this._buildActionDictionary(cr({}, r, u), a, n);
    return { actions: d, handlers: f, componentId: n, options: a };
  } }, { key: "_isUpdatingComponentWithLongestSequence", value: function(n) {
    return n === this._getLongestSequenceComponentId();
  } }, { key: "_getLongestSequenceComponentId", value: function() {
    return this._longestSequenceComponentId;
  } }, { key: "_recalculateLongestSequence", value: function() {
    for (var n = this.getNewIterator(); n.next(); ) {
      var r = n.getComponent(), i = r.longestSequence, a = r.componentId;
      i > this.getLongestSequence() && (this._longestSequenceComponentId = a, this._longestSequence = i);
    }
  } }, { key: "_applyHardSequences", value: function(n, r) {
    return Qe.option("enableHardSequences") ? Object.keys(r).reduce(function(i, a) {
      var l = !!n[a];
      return !l && kc.isValidKeySerialization(a) && (i.keyMap[a] = a), i.handlers[a] = r[a], i;
    }, { keyMap: {}, handlers: {} }) : { keyMap: n, handlers: r };
  } }, { key: "_buildActionDictionary", value: function(n, r, i) {
    var a = this;
    return Object.keys(n).reduce(function(l, u) {
      var f = n[u], d = function() {
        return ji(f) && ir(f, "sequences") ? xs(f.sequences) : xs(f);
      }();
      return d.forEach(function(p) {
        var g = $W(p, r), _ = g.keySequence, y = g.keyEventType;
        a._addActionOptions(l, i, u, _, y);
      }), l;
    }, {});
  } }, { key: "_addActionOptions", value: function(n, r, i, a, l) {
    var u = nk.parse(a, { keyEventType: l }), f = u.sequence, d = u.combination;
    f.size > this.getLongestSequence() && (this._longestSequence = f.size, this._longestSequenceComponentId = r), this._keyMapEventRecord[l] = fi.seen, n[i] || (n[i] = []), n[i].push(cr({ prefix: f.prefix, actionName: i, sequenceLength: f.size }, d));
  } }]), e;
}();
function $W(e, t) {
  if (ji(e)) {
    var n = e.sequence, r = e.action;
    return { keySequence: n, keyEventType: sr(r) ? xe[t.defaultKeyEvent] : xe[r] };
  }
  return { keySequence: e, keyEventType: xe[t.defaultKeyEvent] };
}
function pb(e, t) {
  return e[e.length - (t + 1)];
}
for (var ak = { Enter: !0, Backspace: !0, ArrowRight: !0, ArrowLeft: !0, ArrowUp: !0, ArrowDown: !0, CapsLock: !0 }, md = 1; 13 > md; md++) ak["F".concat(md)] = !0;
function sk(e) {
  return e.length === 1 || ir(ak, e);
}
var HW = function() {
  function e() {
    nt(this, e), this._actionConfigs = {}, this._order = null;
  }
  return tt(e, [{ key: "addMatch", value: function(n, r) {
    if (this._includesMatcherForCombination(n.id)) {
      var i = n.keyEventType, a = n.actionName, l = n.id;
      this._addHandlerToActionConfig(l, { keyEventType: i, actionName: a, handler: r });
    } else this._addNewActionConfig(n, r);
  } }, { key: "findMatch", value: function(n, r, i) {
    this._order || this._setOrder();
    var a = !0, l = !1, u = void 0;
    try {
      for (var f, d = this._order[Symbol.iterator](); !(a = (f = d.next()).done); a = !0) {
        var p = f.value, g = this._actionConfigs[p];
        if (this._matchesActionConfig(n, r, i, g)) return g;
      }
    } catch (_) {
      l = !0, u = _;
    } finally {
      try {
        a || d.return == null || d.return();
      } finally {
        if (l) throw u;
      }
    }
    return null;
  } }, { key: "toJSON", value: function() {
    return { actionConfigs: this._actionConfigs, order: this._order };
  } }, { key: "_matchesActionConfig", value: function(n, r, i, a) {
    if (!zW(n, a)) return !1;
    var l = a.events[i];
    if (!l) return !1;
    var u = !1, f = Object.keys(a.keyDictionary).every(function(d) {
      return !!n.isEventTriggered(d, i) && (r && r === n.getNormalizedKeyName(d) && (u = !n.wasEventPreviouslyTriggered(d, i)), !0);
    });
    return f && u;
  } }, { key: "_setOrder", value: function() {
    var n = Object.values(this._actionConfigs).reduce(function(r, i) {
      var a = i.id, l = i.size;
      return r[l] || (r[l] = []), r[l].push(a), r;
    }, {});
    this._order = Object.keys(n).sort(function(r, i) {
      return i - r;
    }).reduce(function(r, i) {
      return r.concat(n[i]);
    }, []);
  } }, { key: "_addNewActionConfig", value: function(n, r) {
    var i = n.prefix, a = n.sequenceLength, l = n.id, u = n.keyDictionary, f = n.size, d = n.keyEventType, p = n.actionName;
    this._setCombinationMatcher(l, { prefix: i, sequenceLength: a, id: l, keyDictionary: u, size: f, events: {} }), this._addHandlerToActionConfig(l, { keyEventType: d, actionName: p, handler: r });
  } }, { key: "_addHandlerToActionConfig", value: function(n, r) {
    var i = r.keyEventType, a = r.actionName, l = r.handler, u = this._getCombinationMatcher(n);
    this._setCombinationMatcher(n, cr({}, u, { events: cr({}, u.events, Ft({}, i, { actionName: a, handler: l })) }));
  } }, { key: "_setCombinationMatcher", value: function(n, r) {
    this._actionConfigs[n] = r;
  } }, { key: "_getCombinationMatcher", value: function(n) {
    return this._actionConfigs[n];
  } }, { key: "_includesMatcherForCombination", value: function(n) {
    return !!this._getCombinationMatcher(n);
  } }]), e;
}();
function zW(e, t) {
  var n = ok(t.keyDictionary);
  return Qe.option("allowCombinationSubmatches") || BW(e) ? e.getNumberOfKeys() >= n : e.getNumberOfKeys() === n;
}
function BW(e) {
  return !!e.isKeyStillPressed("Meta") && e.some(function(t) {
    return sk(t);
  });
}
var UW = function() {
  function e() {
    nt(this, e), this._combinationMatchers = {}, this._eventRecord = Li.newRecord();
  }
  return tt(e, [{ key: "addMatch", value: function(n, r) {
    var i = this._getOrCreateCombinationMatcher(n.prefix);
    i.addMatch(n, r), Li.setBit(this._eventRecord, n.keyEventType, fi.seen), (!this._longestSequence || this._longestSequence < n.sequenceLength) && (this._longestSequence = n.sequenceLength);
  } }, { key: "findMatch", value: function(n, r, i) {
    var a = this._findCombinationMatcher(n);
    return a ? a.findMatch(n.getCurrentCombination(), n.getCurrentCombination().getNormalizedKeyName(r), i) : null;
  } }, { key: "hasMatchesForEventType", value: function(n) {
    return !!this._eventRecord[n];
  } }, { key: "getLongestSequence", value: function() {
    return this._longestSequence;
  } }, { key: "toJSON", value: function() {
    var n = this;
    return Object.keys(this._combinationMatchers).reduce(function(r, i) {
      var a = n._combinationMatchers[i];
      return r[i] = a.toJSON(), r;
    }, {});
  } }, { key: "_getOrCreateCombinationMatcher", value: function(n) {
    return this._combinationMatchers[n] || (this._combinationMatchers[n] = new HW()), this._combinationMatchers[n];
  } }, { key: "_findCombinationMatcher", value: function(n) {
    var r = n.getMostRecentCombinations(this.getLongestSequence());
    if (r.length === 0) return this._combinationMatchers[""];
    for (var i = r.map(function(k) {
      return k.getIds();
    }), a = i.map(function(k) {
      return k.length;
    }), l = Array(i.length).fill(0), u = !1; !u; ) {
      var f = l.map(function(k, x) {
        return i[x][k];
      }), d = f.join(" ");
      if (this._combinationMatchers[d]) return this._combinationMatchers[d];
      for (var p = 0, g = !0; g && p < l.length; ) {
        var _ = pb(l, p), y = (_ + 1) % (pb(a, p) || 1);
        l[l.length - (p + 1)] = y, g = y == 0, g && p++;
      }
      u = p === l.length;
    }
  } }]), e;
}(), jW = function() {
  function e(t) {
    nt(this, e), this._keyMapMatchers = [], this._unmatchedHandlerStatus = [], this._handlersDictionary = {}, this._keySequencesDictionary = {};
    for (var n = t.getNewIterator(); n.next(); ) {
      var r = n.getComponent(), i = r.handlers;
      this._unmatchedHandlerStatus.push([Object.keys(i).length, {}]), this._keyMapMatchers.push(new UW());
    }
    this._componentList = t, this._componentListIterator = t.getNewIterator();
  }
  return tt(e, [{ key: "getKeyHistoryMatcher", value: function(n) {
    if (this._componentHasUnmatchedHandlers(n)) for (; this._componentListIterator.next(); ) this._addHandlersFromComponent(), this._addActionsFromComponent();
    return this._getKeyHistoryMatcher(n);
  } }, { key: "componentHasActionsBoundToEventType", value: function(n, r) {
    return this.getKeyHistoryMatcher(n).hasMatchesForEventType(r);
  } }, { key: "findMatchingKeySequenceInComponent", value: function(n, r, i, a) {
    return this.componentHasActionsBoundToEventType(n, a) ? this.getKeyHistoryMatcher(n).findMatch(r, i, a) : null;
  } }, { key: "_getKeyHistoryMatcher", value: function(n) {
    return this._keyMapMatchers[n];
  } }, { key: "_addActionsFromComponent", value: function() {
    var n = this, r = this._componentListIterator.getComponent(), i = r.actions;
    Object.keys(i).forEach(function(a) {
      var l = n._getHandlers(a);
      if (l) {
        var u = l[0], f = n._componentList.getAtPosition(u).handlers[a], d = n._getKeyHistoryMatcher(u), p = i[a];
        p.forEach(function(g) {
          var _ = [g.prefix, g.id].join(" ");
          n._isClosestHandlerFound(_, g) || (d.addMatch(g, f), n._addKeySequence(_, [u, g.keyEventType]));
        }), l.forEach(function(g) {
          var _ = n._getUnmatchedHandlerStatus(g);
          _[1][a] || (_[1][a] = !0, _[0]--);
        });
      }
    });
  } }, { key: "_getHandlers", value: function(n) {
    return this._handlersDictionary[n];
  } }, { key: "_addHandlersFromComponent", value: function() {
    var n = this, r = this._componentListIterator.getComponent(), i = r.handlers;
    Object.keys(i).forEach(function(a) {
      n._addHandler(a);
    });
  } }, { key: "_addHandler", value: function(n) {
    this._handlersDictionary[n] || (this._handlersDictionary[n] = []), this._handlersDictionary[n].push(this._componentListIterator.getPosition());
  } }, { key: "_addKeySequence", value: function(n, r) {
    this._keySequencesDictionary[n] || (this._keySequencesDictionary[n] = []), this._keySequencesDictionary[n].push(r);
  } }, { key: "_componentHasUnmatchedHandlers", value: function(n) {
    return 0 < this._getUnmatchedHandlerStatus(n)[0];
  } }, { key: "_getUnmatchedHandlerStatus", value: function(n) {
    return this._unmatchedHandlerStatus[n];
  } }, { key: "_isClosestHandlerFound", value: function(n, r) {
    return this._keySequencesDictionary[n] && this._keySequencesDictionary[n].some(function(i) {
      return i[1] === r.keyEventType;
    });
  } }]), e;
}();
function Wl(e, t, n) {
  return n.forEach(function(r) {
    ir(e, r) && (t[r] = e[r]);
  }), t;
}
function gb(e) {
  switch (parseInt(e, 10)) {
    case 0:
      return "keydown";
    case 1:
      return "keypress";
    default:
      return "keyup";
  }
}
function WW(e) {
  return !Qw(e);
}
function yo(e) {
  return e.simulated ? fi.simulated : fi.seen;
}
var yb = ["sequence", "action"], mb = ["name", "description", "group"], lk = function() {
  function e() {
    var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, n = 1 < arguments.length ? arguments[1] : void 0;
    nt(this, e), this.logger = t.logger || new wr("warn"), this.componentId = -1, this.keyEventManager = n, this._componentTree = new RW(), this.rootComponentId = null, this._reset(), this.resetKeyHistory();
  }
  return tt(e, [{ key: "_reset", value: function() {
    this.componentList = new FW(), this._initHandlerResolutionState();
  } }, { key: "_newKeyHistory", value: function() {
    return new hb({ maxLength: this.componentList.getLongestSequence() });
  } }, { key: "getKeyHistory", value: function() {
    return this._keyHistory ? this._keyHistory : (this._keyHistory = this._newKeyHistory(), this._keyHistory);
  } }, { key: "_initHandlerResolutionState", value: function() {
    this._actionResolver = null;
  } }, { key: "resetKeyHistory", value: function() {
    var n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    this.keypressEventsToSimulate = [], this.keyupEventsToSimulate = [], this._keyHistory = this.getKeyHistory().any() && !n.force ? new hb({ maxLength: this.componentList.getLongestSequence() }, new iu(this.getCurrentCombination().keysStillPressedDict())) : this._newKeyHistory();
  } }, { key: "getApplicationKeyMap", value: function() {
    return this.rootComponentId === null ? {} : this._buildApplicationKeyMap([this.rootComponentId], {});
  } }, { key: "_buildApplicationKeyMap", value: function(n, r) {
    var i = this;
    return n.forEach(function(a) {
      var l = i._componentTree.get(a), u = l.childIds, f = l.keyMap;
      f && Object.keys(f).forEach(function(d) {
        var p = f[d];
        r[d] = {}, ji(p) ? ir(p, "sequences") ? (Wl(p, r[d], mb), r[d].sequences = i._createSequenceFromConfig(p.sequences)) : (Wl(p, r[d], mb), r[d].sequences = [Wl(p, {}, yb)]) : r[d].sequences = i._createSequenceFromConfig(p);
      }), i._buildApplicationKeyMap(u, r);
    }), r;
  } }, { key: "_createSequenceFromConfig", value: function(n) {
    return xs(n).map(function(r) {
      return ji(r) ? Wl(r, {}, yb) : { sequence: r };
    });
  } }, { key: "registerKeyMap", value: function(n) {
    return this.componentId += 1, this._componentTree.add(this.componentId, n), this.componentId;
  } }, { key: "reregisterKeyMap", value: function(n, r) {
    this._componentTree.update(n, r);
  } }, { key: "registerComponentMount", value: function(n, r) {
    sr(r) ? this.rootComponentId = n : this._componentTree.setParent(n, r);
  } }, { key: "deregisterKeyMap", value: function(n) {
    this._componentTree.remove(n), n === this.rootComponentId && (this.rootComponentId = null);
  } }, { key: "_addComponent", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, a = 3 < arguments.length ? arguments[3] : void 0;
    this.componentList.add(n, r, i, a), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
  } }, { key: "_allKeysAreReleased", value: function() {
    return this.getCurrentCombination().hasEnded();
  } }, { key: "getCurrentCombination", value: function() {
    return this.getKeyHistory().getCurrentCombination();
  } }, { key: "_shouldSimulate", value: function(n, r) {
    var i = WW(r), a = this.getCurrentCombination();
    return n === xe.keypress ? !i || i && a.isKeyStillPressed("Meta") : n === xe.keyup && sk(r) && a.isKeyReleased("Meta");
  } }, { key: "_cloneAndMergeEvent", value: function(n, r) {
    var i = Object.keys(yd).reduce(function(a, l) {
      return a[l] = n[l], a;
    }, {});
    return cr({}, i, r);
  } }, { key: "_callClosestMatchingHandler", value: function(n, r, i, a, l) {
    for (this._actionResolver || (this._actionResolver = new jW(this.componentList)); l <= a; ) {
      this._actionResolver.getKeyHistoryMatcher(l);
      var u = this._actionResolver.findMatchingKeySequenceInComponent(l, this.getKeyHistory(), r, i);
      if (this.getCurrentCombination(), u) {
        var f = u.events[i];
        return Qe.option("allowCombinationSubmatches") && kc.serialize(u.keyDictionary), f.handler(n), this._stopEventPropagationAfterHandlingIfEnabled(n, l), !0;
      }
      this._actionResolver.componentHasActionsBoundToEventType(l, i), l++;
    }
  } }, { key: "_stopEventPropagationAfterHandlingIfEnabled", value: function(n, r) {
    return !!Qe.option("stopEventPropagationAfterHandling") && (this._stopEventPropagation(n, r), !0);
  } }, { key: "_stopEventPropagation", value: function() {
    throw new Error("_stopEventPropagation must be overridden by a subclass");
  } }, { key: "_checkForModifierFlagDiscrepancies", value: function(n, r, i) {
    var a = this;
    Object.keys(yd).forEach(function(l) {
      if (r !== l || i !== xe.keyup) {
        var u = a.getCurrentCombination(), f = u.isKeyStillPressed(l);
        yd[l].forEach(function(d) {
          n[d] === !1 && f && u.setKeyState(l, xe.keyup, yo(n));
        });
      }
    });
  } }, { key: "_logPrefix", value: function() {
  } }]), e;
}(), Ss = function() {
  function e() {
    nt(this, e);
  }
  return tt(e, null, [{ key: "getId", value: function() {
    return sr(this._id) && (this._id = 0), this._id;
  } }, { key: "incrementId", value: function() {
    this._id = this.getId() + 1;
  } }]), e;
}();
function YW(e) {
  var t, n = e.keyCode;
  return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
}
var GW = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" };
function qW(e) {
  if (e.key) {
    var t = GW[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  if (e.type === "keypress") {
    var n = YW(e);
    return n === 13 ? "Enter" : String.fromCharCode(n);
  }
  return e.type === "keydown" || e.type === "keyup" ? Jw[e.keyCode] || "Unidentified" : "";
}
function sa(e) {
  var t = function() {
    var n = Qe.option("customKeyCodes"), r = e.keyCode || e.charCode;
    return ir(n, r) ? n[r] : e.nativeEvent ? e.key : qW(e);
  }();
  return t === "+" ? "plus" : t;
}
function $u(e) {
  return e === "Meta";
}
var yt = { unseen: 0, ignored: 1, seen: 2, handled: 4 }, VW = function() {
  function e(t, n) {
    var r = n.logger, i = n.logPrefix;
    nt(this, e), this._componentList = t, this._previousPropagation = null, this.logger = r, this._logPrefix = i, this._reset();
  }
  return tt(e, [{ key: "_reset", value: function() {
    this._previousPosition = -1, this._position = -1, this._actionHandled = !1, this._ignoreEvent = !1, this._observeIgnoredEvents = !1, this._stopping = !1, this._componentId = null, this._key = null, this._type = null;
  } }, { key: "isFirstPropagationStep", value: function() {
    var n = this.getPreviousPosition();
    return n === -1 || n >= this._position;
  } }, { key: "isForKey", value: function(n) {
    return this._key === n;
  } }, { key: "isForEventType", value: function(n) {
    return this._type === n;
  } }, { key: "startNewPropagationStep", value: function(n, r, i, a) {
    return this._position = this._componentList.getIndexById(n), this._componentId = n, this.isFirstPropagationStep() && (Ss.incrementId(), this._key = r.key, this._type = a), !(r.repeat && Qe.option("ignoreRepeatedEventsWhenKeyHeldDown")) || (this.ignoreEvent(r), !1);
  } }, { key: "finishPropagationStep", value: function() {
    this.isStopped() || this._componentList.isRoot(this._componentId) ? (this._previousPropagation = this._clone(), this._reset()) : this._previousPosition = this._position;
  } }, { key: "getPreviousPropagation", value: function() {
    return this._previousPropagation || (this._previousPropagation = this._clone({ copyState: !1 })), this._previousPropagation;
  } }, { key: "getPreviousPosition", value: function() {
    return this._previousPosition;
  } }, { key: "observeIgnoredEvents", value: function() {
    this._observeIgnoredEvents = !0;
  } }, { key: "ignoreEvent", value: function(n) {
    return this.setIgnoreEvent(!0), !!(this.isIgnoringEvent() && Qe.option("stopEventPropagationAfterIgnoring")) && (this.stop(n), this.finishPropagationStep(), !0);
  } }, { key: "setIgnoreEvent", value: function(n) {
    this._ignoreEvent = n;
  } }, { key: "isIgnoringEvent", value: function() {
    return !this._observeIgnoredEvents && this._ignoreEvent;
  } }, { key: "isStopped", value: function() {
    return this._stopping;
  } }, { key: "stop", value: function(n) {
    return !this.isStopped() && (this._stopping = !0, n.simulated || n.stopPropagation(), !0);
  } }, { key: "isPendingPropagation", value: function() {
    var n = this.getPreviousPosition();
    return n !== -1 && n + 1 < this._position;
  } }, { key: "isHandled", value: function() {
    return this._actionHandled;
  } }, { key: "setHandled", value: function() {
    this._actionHandled = !0;
  } }, { key: "_clone", value: function() {
    var n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, r = n.copyState, i = new e(this._componentList, { logger: this.logger, logPrefix: this._logPrefix });
    return (r === void 0 || r) && Object.assign(i, this), i;
  } }]), e;
}(), XW = function(e) {
  function t() {
    var n, r = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, i = 1 < arguments.length ? arguments[1] : void 0;
    return nt(this, t), n = jr(this, Pt(t).call(this, r, i)), n.focusTreeId = 0, n;
  }
  return Ur(t, e), tt(t, [{ key: "_reset", value: function() {
    si(Pt(t.prototype), "_reset", this).call(this), this.keypressEventsToSimulate = [], this.focusTreeId += 1, this.eventPropagator = new VW(this.componentList, { logger: this.logger, logPrefix: this._logPrefix.bind(this) });
  } }, { key: "enableHotKeys", value: function(r) {
    var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, l = 3 < arguments.length ? arguments[3] : void 0;
    if (this.resetOnNextFocus && (this._reset(), this.resetOnNextFocus = !1), !this.componentList.containsId(r)) return this._addComponent(r, i, a, l), this.focusTreeId;
  } }, { key: "updateEnabledHotKeys", value: function(r, i) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {}, u = 4 < arguments.length ? arguments[4] : void 0;
    r === this.focusTreeId && this.componentList.containsId(i) && (this.componentList.update(i, a, l, u), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this._initHandlerResolutionState());
  } }, { key: "disableHotKeys", value: function(r, i) {
    this.resetOnNextFocus || (this.resetOnNextFocus = !0);
    var a = this.eventPropagator.isPendingPropagation();
    return a;
  } }, { key: "handleKeydown", value: function(r, i, a) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {}, u = sa(r);
    if (i !== this.focusTreeId) return this.eventPropagator.ignoreEvent(r), !0;
    var f = this.eventPropagator.startNewPropagationStep(a, r, u, xe.keydown);
    if (f) {
      var d = this._howToHandleKeyEvent(r, i, a, u, l, xe.keydown);
      if (d === yt.handled) {
        var p = yo(r), g = this.getCurrentCombination();
        g.isKeyIncluded(u) || g.isEnding() ? this._startAndLogNewKeyCombination(u, i, a, p) : this._addToAndLogCurrentKeyCombination(u, xe.keydown, i, a, p), this._callHandlerIfActionNotHandled(r, u, xe.keydown, a, i);
      }
      return this._simulateKeyPressForNonPrintableKeys(r, u, i, a, l), this.eventPropagator.finishPropagationStep(), !1;
    }
  } }, { key: "_howToHandleKeyEvent", value: function(r, i, a, l, u, f) {
    if (this.eventPropagator.isFirstPropagationStep()) {
      if (u.ignoreEventsCondition(r) && this.eventPropagator.ignoreEvent(r)) return this._eventIsToBeIgnored(r, a, l, f);
      this._checkForModifierFlagDiscrepancies(r, l, f);
    } else if (this.eventPropagator.isIgnoringEvent()) return this._eventIsToBeIgnored(r, a, l, f);
    return yt.handled;
  } }, { key: "_eventIsToBeIgnored", value: function(r, i, a, l) {
    return yt.ignored;
  } }, { key: "handleKeyPress", value: function(r, i, a, l) {
    var u = sa(r), f = this.getCurrentCombination();
    if (f.isKeyPressSimulated(u)) return this.eventPropagator.ignoreEvent(r), !0;
    var d = this.eventPropagator.startNewPropagationStep(a, r, u, xe.keypress);
    if (d) {
      var p = i !== this.focusTreeId, g = this._howToHandleKeyEvent(r, i, a, u, l, xe.keypress);
      return this.eventPropagator.isFirstPropagationStep(a) && f.isKeyIncluded(u) && this._addToAndLogCurrentKeyCombination(u, xe.keypress, i, a, yo(r)), g === yt.handled && this._callHandlerIfActionNotHandled(r, u, xe.keypress, a, i), this.eventPropagator.finishPropagationStep(), p;
    }
  } }, { key: "handleKeyUp", value: function(r, i, a, l) {
    var u = sa(r), f = this.getCurrentCombination();
    if (f.isKeyUpSimulated(u)) return this.eventPropagator.ignoreEvent(r), !0;
    var d = this.eventPropagator.startNewPropagationStep(a, r, u, xe.keyup);
    if (d) {
      var p = i !== this.focusTreeId, g = this._howToHandleKeyEvent(r, i, a, u, l, xe.keyup);
      return this.eventPropagator.isFirstPropagationStep(a) && f.isKeyIncluded(u) && this._addToAndLogCurrentKeyCombination(u, xe.keyup, i, a, yo(r)), g === yt.handled && this._callHandlerIfActionNotHandled(r, u, xe.keyup, a, i), this._simulateKeyUpEventsHiddenByCmd(r, u, i, a, l), this.eventPropagator.finishPropagationStep(), p;
    }
  } }, { key: "closeHangingKeyCombination", value: function(r, i) {
    var a = this.getCurrentCombination();
    a.isKeyIncluded(r) && !a.isEventTriggered(r, i) && a.setKeyState(r, i, fi.simulated);
  } }, { key: "_simulateKeyPressForNonPrintableKeys", value: function(r, i, a, l, u) {
    this._handleEventSimulation("keypressEventsToSimulate", "simulatePendingKeyPressEvents", this._shouldSimulate(xe.keypress, i), { event: r, key: i, focusTreeId: a, componentId: l, options: u });
  } }, { key: "_simulateKeyUpEventsHiddenByCmd", value: function(r, i, a, l, u) {
    var f = this;
    $u(i) && this.getCurrentCombination().forEachKey(function(d) {
      $u(d) || f._handleEventSimulation("keyupEventsToSimulate", "simulatePendingKeyUpEvents", f._shouldSimulate(xe.keyup, d), { event: r, key: d, focusTreeId: a, componentId: l, options: u });
    });
  } }, { key: "_stopEventPropagation", value: function(r, i) {
    this.eventPropagator.stop(r);
  } }, { key: "getEventPropagator", value: function() {
    return this.eventPropagator;
  } }, { key: "_startAndLogNewKeyCombination", value: function(r, i, a, l) {
    this.getKeyHistory().startNewKeyCombination(r, l);
  } }, { key: "_addToAndLogCurrentKeyCombination", value: function(r, i, a, l, u) {
    this.getKeyHistory().addKeyToCurrentCombination(r, i, u);
  } }, { key: "_handleEventSimulation", value: function(r, i, a, l) {
    var u = l.event, f = l.key, d = l.focusTreeId, p = l.componentId, g = l.options;
    if (a && Qe.option("simulateMissingKeyPressEvents")) {
      var _ = this._cloneAndMergeEvent(u, { key: f, simulated: !0 });
      this[r].push({ event: _, focusTreeId: d, componentId: p, options: g });
    }
    (this.componentList.isRoot(p) || this.eventPropagator.isStopped()) && !this.keyEventManager.isGlobalListenersBound() && this[i]();
  } }, { key: "simulatePendingKeyPressEvents", value: function() {
    this._simulatePendingKeyEvents("keypressEventsToSimulate", "handleKeyPress");
  } }, { key: "simulatePendingKeyUpEvents", value: function() {
    this._simulatePendingKeyEvents("keyupEventsToSimulate", "handleKeyUp");
  } }, { key: "_simulatePendingKeyEvents", value: function(r, i) {
    var a = this;
    0 < this[r].length && Ss.incrementId(), this[r].forEach(function(l) {
      var u = l.event, f = l.focusTreeId, d = l.componentId, p = l.options;
      a[i](u, f, d, p);
    }), this[r] = [];
  } }, { key: "_callHandlerIfActionNotHandled", value: function(r, i, a, l, u) {
    if (this.getCurrentCombination().describe(), !!this.componentList.anyActionsForEventType(a) && !this.eventPropagator.isHandled()) {
      var f = this.eventPropagator.getPreviousPosition(), d = this.componentList.getIndexById(l), p = this._callClosestMatchingHandler(r, i, a, d, f === -1 ? 0 : f);
      p && this.eventPropagator.setHandled();
    }
  } }, { key: "_logPrefix", value: function(r) {
    var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = wr.logIcons, l = wr.eventIcons, u = wr.componentIcons, f = "HotKeys (";
    if (i.focusTreeId !== !1) {
      var d = sr(i.focusTreeId) ? this.focusTreeId : i.focusTreeId;
      f += "F".concat(d).concat(a[d % a.length], "-");
    }
    if (i.eventId !== !1) {
      var p = sr(i.eventId) ? Ss.getId() : i.eventId;
      f += "E".concat(p).concat(l[p % l.length], "-");
    }
    f += "C".concat(r).concat(u[r % u.length]);
    var g = this.componentList.getIndexById(r);
    return sr(g) || (f += "-P".concat(g).concat(u[g % u.length], ":")), "".concat(f, ")");
  } }]), t;
}(lk);
function Yl(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {};
  return Array.isArray(e) || Xw(e) ? n.stringifyFirst ? !sr(e.find(function(r) {
    return r.toString() === t.toString();
  })) : e.indexOf(t) !== -1 : ji(e) ? ir(e, t) : n.stringifyFirst ? e.toString() === t.toString() : e === t;
}
function vb(e) {
  return e.replace(/\b\w/g, function(t) {
    return t.toUpperCase();
  });
}
function ZW(e) {
  return "".concat(vb(e.slice(0, 3))).concat(vb(e.slice(3)));
}
var JW = function(e) {
  function t() {
    var n, r = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {}, i = 1 < arguments.length ? arguments[1] : void 0;
    return nt(this, t), n = jr(this, Pt(t).call(this, r, i)), n.listenersBound = !1, n.eventOptions = { ignoreEventsCondition: Qe.option("ignoreEventsCondition") }, n.listeners = {}, n;
  }
  return Ur(t, e), tt(t, [{ key: "enableHotKeys", value: function(r) {
    var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, l = 3 < arguments.length ? arguments[3] : void 0, u = 4 < arguments.length ? arguments[4] : void 0;
    this.eventOptions = u, this._addComponent(r, i, a, l), this._updateDocumentHandlers(), this._initHandlerResolutionState();
  } }, { key: "updateEnabledHotKeys", value: function(r) {
    var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, l = 3 < arguments.length ? arguments[3] : void 0, u = 4 < arguments.length ? arguments[4] : void 0;
    this.eventOptions = u, this.componentList.update(r, i, a, l), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this._updateDocumentHandlers(), this._initHandlerResolutionState();
  } }, { key: "disableHotKeys", value: function(r) {
    this.componentList.remove(r), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this._updateDocumentHandlers(), this._initHandlerResolutionState();
  } }, { key: "_updateDocumentHandlers", value: function() {
    var r = this, i = this._listenersShouldBeBound();
    !this.listenersBound && i ? (Object.values(xe).forEach(function(a) {
      var l = gb(a);
      document["on".concat(l)] = function(u) {
        r.keyEventManager["handleGlobal".concat(ZW(l))](u);
      };
    }), this.listenersBound = !0) : this.listenersBound && !i && (Object.values(xe).forEach(function(a) {
      var l = gb(a);
      delete document["on".concat(l)];
    }), this.listenersBound = !1);
  } }, { key: "_listenersShouldBeBound", value: function() {
    return this.componentList.any() || this.listeners.keyCombination;
  } }, { key: "handleKeydown", value: function(r) {
    var i = sa(r);
    if (r.repeat && Qe.option("ignoreRepeatedEventsWhenKeyHeldDown")) return !0;
    this._checkForModifierFlagDiscrepancies(r, i, xe.keydown);
    var a = this._howReactAppRespondedTo(r, i, xe.keydown);
    if (!(a === yt.unseen && this.eventOptions.ignoreEventsCondition(r))) {
      if (a !== yt.ignored) {
        var l = yo(r), u = this.getCurrentCombination();
        u.isKeyIncluded(i) || u.isEnding() ? this._startAndLogNewKeyCombination(i, l) : this._addToAndLogCurrentKeyCombination(i, xe.keydown, l);
      }
      Yl([yt.ignored, yt.handled], a) || this._callHandlerIfExists(r, i, xe.keydown), this._simulateKeyPressForNonPrintableKeys(r, i);
    }
  } }, { key: "_howReactAppRespondedTo", value: function(r, i, a) {
    var l = this.keyEventManager.reactAppHistoryWithEvent(i, a);
    return l === yt.handled || l === yt.ignored || l === yt.seen || Ss.incrementId(), l;
  } }, { key: "handleKeyPress", value: function(r) {
    var i = sa(r);
    if (r.repeat && Qe.option("ignoreRepeatedEventsWhenKeyHeldDown")) return !0;
    var a = this.getCurrentCombination();
    if (a.isKeyPressSimulated(i)) return !0;
    var l = this._howReactAppRespondedTo(r, i, xe.keypress);
    return a.isKeyIncluded(i) && this._addToAndLogCurrentKeyCombination(i, xe.keypress, yo(r)), l === yt.unseen && (this.keyEventManager.closeHangingKeyCombination(i, xe.keypress), this.eventOptions.ignoreEventsCondition(r)) ? void 0 : void (!Yl([yt.ignored, yt.handled], l) && this._callHandlerIfExists(r, i, xe.keypress));
  } }, { key: "handleKeyUp", value: function(r) {
    var i = sa(r), a = this.getCurrentCombination();
    if (a.isKeyUpSimulated(i)) return !0;
    var l = this._howReactAppRespondedTo(r, i, xe.keyup);
    a.isKeyIncluded(i) && this._addToAndLogCurrentKeyCombination(i, xe.keyup, yo(r)), l === yt.unseen ? (this.keyEventManager.closeHangingKeyCombination(i, xe.keyup), this.eventOptions.ignoreEventsCondition(r) || !Yl([yt.ignored, yt.handled], l) && this._callHandlerIfExists(r, i, xe.keyup)) : !Yl([yt.ignored, yt.handled], l) && this._callHandlerIfExists(r, i, xe.keyup), this._simulateKeyUpEventsHiddenByCmd(r, i), this.listeners.keyCombination && this._allKeysAreReleased() && this.listeners.keyCombination({ keys: a.getKeyDictionary(), id: a.describe() });
  } }, { key: "_simulateKeyPressForNonPrintableKeys", value: function(r, i) {
    this.keyEventManager.simulatePendingKeyPressEvents(), this._handleEventSimulation("handleKeyPress", this._shouldSimulate(xe.keypress, i), { event: r, key: i });
  } }, { key: "_simulateKeyUpEventsHiddenByCmd", value: function(r, i) {
    var a = this;
    $u(i) && (this.keyEventManager.simulatePendingKeyUpEvents(), this.getCurrentCombination().forEachKey(function(l) {
      $u(l) || a._handleEventSimulation("handleKeyUp", a._shouldSimulate(xe.keyup, l), { event: r, key: l });
    }));
  } }, { key: "_startAndLogNewKeyCombination", value: function(r, i) {
    this.getKeyHistory().startNewKeyCombination(r, i);
  } }, { key: "_addToAndLogCurrentKeyCombination", value: function(r, i, a) {
    this.getKeyHistory().addKeyToCurrentCombination(r, i, a);
  } }, { key: "_handleEventSimulation", value: function(r, i, a) {
    var l = a.event, u = a.key;
    if (i && Qe.option("simulateMissingKeyPressEvents")) {
      var f = this._cloneAndMergeEvent(l, { key: u, simulated: !0 });
      this[r](f);
    }
  } }, { key: "_callHandlerIfExists", value: function(r, i, a) {
    return this.getCurrentCombination().describe(), this.componentList.anyActionsForEventType(a) ? void this._callClosestMatchingHandler(r, i, a) : void 0;
  } }, { key: "_callClosestMatchingHandler", value: function(r, i, a) {
    for (var l, u = this.componentList.getNewIterator(); u.next(); ) if (l = si(Pt(t.prototype), "_callClosestMatchingHandler", this).call(this, r, i, a, u.getPosition(), 0), l) return;
  } }, { key: "_stopEventPropagation", value: function(r, i) {
    r.simulated || r.stopPropagation();
  } }, { key: "addKeyCombinationListener", value: function(r) {
    var i = this, a = function() {
      delete i.listeners.keyCombination;
    };
    return this.listeners.keyCombination = function(l) {
      r(l), a();
    }, this._updateDocumentHandlers(), a;
  } }, { key: "_logPrefix", value: function(r) {
    var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = wr.eventIcons, l = wr.componentIcons, u = "HotKeys (GLOBAL";
    if (i.eventId !== !1) {
      var f = sr(i.eventId) ? Ss.getId() : i.eventId;
      u = "".concat(u, "-E").concat(f).concat(a[f % a.length]);
    }
    return sr(r) ? "".concat(u, "):") : "".concat(u, "-C").concat(r).concat(l[r % l.length], "):");
  } }]), t;
}(lk);
function vd(e) {
  return !sr(e);
}
var qt = function() {
  function e() {
    var t = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    nt(this, e), this.logger = t.logger || new wr(Qe.option("logLevel")), this._focusOnlyEventStrategy = new XW({ configuration: t, logger: this.logger }, this), this._globalEventStrategy = new JW({ configuration: t, logger: this.logger }, this), this.mountedComponentsCount = 0;
  }
  return tt(e, null, [{ key: "getInstance", value: function() {
    var n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    return this.instance || (this.instance = new e(n)), this.instance;
  } }, { key: "clear", value: function() {
    delete this.instance;
  } }]), tt(e, [{ key: "getApplicationKeyMap", value: function() {
    return Object.assign(this._globalEventStrategy.getApplicationKeyMap(), this._focusOnlyEventStrategy.getApplicationKeyMap());
  } }, { key: "registerKeyMap", value: function() {
    var n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    return this._focusOnlyEventStrategy.registerKeyMap(n);
  } }, { key: "reregisterKeyMap", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
    this._focusOnlyEventStrategy.reregisterKeyMap(n, r);
  } }, { key: "deregisterKeyMap", value: function(n) {
    this._focusOnlyEventStrategy.deregisterKeyMap(n);
  } }, { key: "registerComponentMount", value: function(n, r) {
    return this._incrementComponentCount(), this._focusOnlyEventStrategy.registerComponentMount(n, r);
  } }, { key: "registerComponentUnmount", value: function() {
    this._decrementComponentCount();
  } }, { key: "_incrementComponentCount", value: function() {
    var n = this, r = this.mountedComponentsCount;
    this.mountedComponentsCount += 1, r === 0 && this.mountedComponentsCount === 1 && (window.onblur = function() {
      return n._clearKeyHistory();
    });
  } }, { key: "_decrementComponentCount", value: function() {
    var n = this.mountedComponentsCount;
    this.mountedComponentsCount -= 1, n === 1 && this.mountedComponentsCount === 0 && delete window.onblur;
  } }, { key: "_clearKeyHistory", value: function() {
    this._focusOnlyEventStrategy.resetKeyHistory({ force: !0 }), this._globalEventStrategy.resetKeyHistory({ force: !0 });
  } }, { key: "registerGlobalKeyMap", value: function() {
    var n = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
    return this._globalEventStrategy.registerKeyMap(n);
  } }, { key: "registerGlobalComponentUnmount", value: function() {
    this._decrementComponentCount();
  } }, { key: "registerGlobalComponentMount", value: function(n, r) {
    return this._incrementComponentCount(), this._globalEventStrategy.registerComponentMount(n, r);
  } }, { key: "reregisterGlobalKeyMap", value: function(n, r) {
    this._globalEventStrategy.reregisterKeyMap(n, r);
  } }, { key: "deregisterGlobalKeyMap", value: function(n) {
    this._globalEventStrategy.deregisterKeyMap(n);
  } }, { key: "addKeyCombinationListener", value: function(n) {
    return this._globalEventStrategy.addKeyCombinationListener(n);
  } }, { key: "enableHotKeys", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, a = 3 < arguments.length ? arguments[3] : void 0;
    return this._focusOnlyEventStrategy.enableHotKeys(n, r, i, a);
  } }, { key: "updateEnabledHotKeys", value: function(n, r) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : {}, l = 4 < arguments.length ? arguments[4] : void 0;
    return this._focusOnlyEventStrategy.updateEnabledHotKeys(n, r, i, a, l);
  } }, { key: "disableHotKeys", value: function(n, r) {
    return this._focusOnlyEventStrategy.disableHotKeys(n, r);
  } }, { key: "handleKeydown", value: function(n, r, i, a) {
    if (vd(r)) return this._focusOnlyEventStrategy.handleKeydown(n, r, i, a);
  } }, { key: "handleKeyPress", value: function(n, r, i, a) {
    if (vd(r)) return this._focusOnlyEventStrategy.handleKeyPress(n, r, i, a);
  } }, { key: "handleKeyUp", value: function(n, r, i, a) {
    if (vd(r)) return this._focusOnlyEventStrategy.handleKeyUp(n, r, i, a);
  } }, { key: "enableGlobalHotKeys", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, a = 3 < arguments.length ? arguments[3] : void 0, l = 4 < arguments.length ? arguments[4] : void 0;
    return this._globalEventStrategy.enableHotKeys(n, r, i, a, l);
  } }, { key: "updateEnabledGlobalHotKeys", value: function(n) {
    var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : {}, a = 3 < arguments.length ? arguments[3] : void 0, l = 4 < arguments.length ? arguments[4] : void 0;
    return this._globalEventStrategy.updateEnabledHotKeys(n, r, i, a, l);
  } }, { key: "disableGlobalHotKeys", value: function(n) {
    return this._globalEventStrategy.disableHotKeys(n);
  } }, { key: "handleGlobalKeyDown", value: function(n) {
    return this._globalEventStrategy.handleKeydown(n);
  } }, { key: "handleGlobalKeyPress", value: function(n) {
    return this._globalEventStrategy.handleKeyPress(n);
  } }, { key: "handleGlobalKeyUp", value: function(n) {
    return this._globalEventStrategy.handleKeyUp(n);
  } }, { key: "ignoreEvent", value: function(n) {
    this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(n);
  } }, { key: "observeIgnoredEvents", value: function(n) {
    this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(n);
  } }, { key: "closeHangingKeyCombination", value: function(n, r) {
    this._focusOnlyEventStrategy.closeHangingKeyCombination(n, r);
  } }, { key: "reactAppHistoryWithEvent", value: function(n, r) {
    var i = this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();
    return i.isForKey(n) && i.isForEventType(r) ? i.isHandled() ? yt.handled : i.isIgnoringEvent() ? yt.ignored : yt.seen : yt.unseen;
  } }, { key: "simulatePendingKeyPressEvents", value: function() {
    this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();
  } }, { key: "simulatePendingKeyUpEvents", value: function() {
    this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();
  } }, { key: "isGlobalListenersBound", value: function() {
    return this._globalEventStrategy.listenersBound;
  } }]), e;
}();
function uk(e, t) {
  var n = t.deprecatedAPI, r = n.contextTypes, i = n.childContextTypes, a = t.newAPI.contextType;
  if (typeof Dt.createContext > "u") e.contextTypes = r, e.childContextTypes = i, e.prototype.getChildContext = function() {
    return this._childContext;
  };
  else {
    var l = Dt.createContext(a);
    e.contextType = l, e.prototype._originalRender = e.prototype.render, e.prototype.render = function() {
      var u = this._originalRender();
      return u ? Dt.createElement(l.Provider, { value: this._childContext }, u) : null;
    };
  }
  return e;
}
function ck(e) {
  function t(l, u) {
    return cr({}, i[l] || {}, u[l] || {});
  }
  function n(l) {
    return t("handlers", l);
  }
  function r(l) {
    return t("keyMap", l);
  }
  var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = function(l) {
    function u(f) {
      var d;
      return nt(this, u), d = jr(this, Pt(u).call(this, f)), d._handleFocus = d._handleFocus.bind(Mt(Mt(d))), d._handleBlur = d._handleBlur.bind(Mt(Mt(d))), d._handleKeyDown = d._handleKeyDown.bind(Mt(Mt(d))), d._handleKeyPress = d._handleKeyPress.bind(Mt(Mt(d))), d._handleKeyUp = d._handleKeyUp.bind(Mt(Mt(d))), d._componentIsFocused = d._componentIsFocused.bind(Mt(Mt(d))), d._id = qt.getInstance().registerKeyMap(f.keyMap), d._childContext = { hotKeysParentId: d._id }, d;
    }
    return Ur(u, l), tt(u, [{ key: "render", value: function() {
      var d = this.props;
      d.keyMap, d.handlers, d.allowChanges, d.root;
      var p = Ws(d, ["keyMap", "handlers", "allowChanges", "root"]), g = { onFocus: this._wrapFunction("onFocus", this._handleFocus), onBlur: this._wrapFunction("onBlur", this._handleBlur), tabIndex: Qe.option("defaultTabIndex") };
      return this._shouldBindKeyListeners() && (g.onKeyDown = this._handleKeyDown, g.onKeyPress = this._handleKeyPress, g.onKeyUp = this._handleKeyUp), Dt.createElement(e, Fu({ hotKeys: g }, p));
    } }, { key: "_shouldBindKeyListeners", value: function() {
      var d = r(this.props);
      return !cs(d) || this.props.root || Qe.option("enableHardSequences") && this._handlersIncludeHardSequences(d, n(this.props));
    } }, { key: "_handlersIncludeHardSequences", value: function(d, p) {
      return Object.keys(p).some(function(g) {
        return !d[g] && kc.isValidKeySerialization(g);
      });
    } }, { key: "_wrapFunction", value: function(d, p) {
      var g = this;
      return typeof this.props[d] == "function" ? function(_) {
        g.props[d](_), p(_);
      } : p;
    } }, { key: "_focusTreeIdsPush", value: function(d) {
      this._focusTreeIds || (this._focusTreeIds = []), this._focusTreeIds.push(d);
    } }, { key: "_focusTreeIdsShift", value: function() {
      this._focusTreeIds && this._focusTreeIds.shift();
    } }, { key: "_getFocusTreeId", value: function() {
      if (this._focusTreeIds) return this._focusTreeIds[0];
    } }, { key: "componentDidUpdate", value: function() {
      var d = qt.getInstance();
      if (d.reregisterKeyMap(this._id, this.props.keyMap), this._componentIsFocused() && (this.props.allowChanges || !Qe.option("ignoreKeymapAndHandlerChangesByDefault"))) {
        var p = this.props, g = p.keyMap, _ = p.handlers;
        d.updateEnabledHotKeys(this._getFocusTreeId(), this._id, g, _, this._getComponentOptions());
      }
    } }, { key: "_componentIsFocused", value: function() {
      return this._focused === !0;
    } }, { key: "componentDidMount", value: function() {
      var d = qt.getInstance(), p = this.context.hotKeysParentId;
      d.registerComponentMount(this._id, p);
    } }, { key: "_handleFocus", value: function() {
      if (this.props.onFocus) {
        var d;
        (d = this.props).onFocus.apply(d, arguments);
      }
      var p = qt.getInstance().enableHotKeys(this._id, r(this.props), n(this.props), this._getComponentOptions());
      sr(p) || this._focusTreeIdsPush(p), this._focused = !0;
    } }, { key: "componentWillUnmount", value: function() {
      var d = qt.getInstance();
      d.deregisterKeyMap(this._id), d.registerComponentUnmount(), this._handleBlur();
    } }, { key: "_handleBlur", value: function() {
      if (this.props.onBlur) {
        var d;
        (d = this.props).onBlur.apply(d, arguments);
      }
      var p = qt.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);
      p || this._focusTreeIdsShift(), this._focused = !1;
    } }, { key: "_handleKeyDown", value: function(d) {
      var p = qt.getInstance().handleKeydown(d, this._getFocusTreeId(), this._id, this._getEventOptions());
      p && this._focusTreeIdsShift();
    } }, { key: "_handleKeyPress", value: function(d) {
      var p = qt.getInstance().handleKeyPress(d, this._getFocusTreeId(), this._id, this._getEventOptions());
      p && this._focusTreeIdsShift();
    } }, { key: "_handleKeyUp", value: function(d) {
      var p = qt.getInstance().handleKeyUp(d, this._getFocusTreeId(), this._id, this._getEventOptions());
      p && this._focusTreeIdsShift();
    } }, { key: "_getComponentOptions", value: function() {
      return { defaultKeyEvent: Qe.option("defaultKeyEvent") };
    } }, { key: "_getEventOptions", value: function() {
      return { ignoreEventsCondition: Qe.option("ignoreEventsCondition") };
    } }]), u;
  }(Yu);
  return Ft(a, "propTypes", { keyMap: m.object, handlers: m.object, onFocus: m.func, onBlur: m.func, allowChanges: m.bool, root: m.bool }), uk(a, { deprecatedAPI: { contextTypes: { hotKeysParentId: m.number }, childContextTypes: { hotKeysParentId: m.number } }, newAPI: { contextType: { hotKeysParentId: void 0 } } });
}
var QW = function(e) {
  function t() {
    return nt(this, t), jr(this, Pt(t).apply(this, arguments));
  }
  return Ur(t, e), tt(t, [{ key: "render", value: function() {
    var r = this.props, i = r.hotKeys, a = r.innerRef, l = r.component, u = Ws(r, ["hotKeys", "innerRef", "component"]), f = l || Qe.option("defaultComponent");
    return Dt.createElement(f, cr({}, i, { ref: a }, u));
  } }]), t;
}(Yi), fk = ck(QW);
fk.propTypes = { innerRef: m.oneOfType([m.object, m.func]) };
var dk = function(e) {
  function t(n) {
    var r;
    return nt(this, t), r = jr(this, Pt(t).call(this, n)), r._id = qt.getInstance().registerGlobalKeyMap(n.keyMap), r._childContext = { globalHotKeysParentId: r._id }, r;
  }
  return Ur(t, e), tt(t, [{ key: "render", value: function() {
    return this.props.children || null;
  } }, { key: "componentDidUpdate", value: function() {
    var r = qt.getInstance();
    if (r.reregisterGlobalKeyMap(this._id, this.props.keyMap), this.props.allowChanges || !Qe.option("ignoreKeymapAndHandlerChangesByDefault")) {
      var i = this.props, a = i.keyMap, l = i.handlers;
      r.updateEnabledGlobalHotKeys(this._id, a, l, this._getComponentOptions(), this._getEventOptions());
    }
  } }, { key: "componentDidMount", value: function() {
    var r = this.props, i = r.keyMap, a = r.handlers, l = this.context.globalHotKeysParentId, u = qt.getInstance();
    u.registerGlobalComponentMount(this._id, l), u.enableGlobalHotKeys(this._id, i, a, this._getComponentOptions(), this._getEventOptions());
  } }, { key: "componentWillUnmount", value: function() {
    var r = qt.getInstance();
    r.deregisterGlobalKeyMap(this._id), r.disableGlobalHotKeys(this._id), r.registerGlobalComponentUnmount();
  } }, { key: "_getComponentOptions", value: function() {
    return { defaultKeyEvent: Qe.option("defaultKeyEvent") };
  } }, { key: "_getEventOptions", value: function() {
    return { ignoreEventsCondition: Qe.option("ignoreEventsCondition") };
  } }]), t;
}(Yi);
Ft(dk, "propTypes", { keyMap: m.object, handlers: m.object, allowChanges: m.bool });
var e8 = uk(dk, { deprecatedAPI: { contextTypes: { globalHotKeysParentId: m.number }, childContextTypes: { globalHotKeysParentId: m.number } }, newAPI: { contextType: { globalHotKeysParentId: void 0 } } });
function xc(e) {
  var t, n, r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { only: [], except: [] }, i = 2 < arguments.length ? arguments[2] : void 0;
  return n = t = function(a) {
    function l(u) {
      var f;
      return nt(this, l), f = jr(this, Pt(l).call(this, u)), f._handleKeyEvent = f._handleKeyEvent.bind(Mt(Mt(f))), f._reloadDictionaries = f._reloadDictionaries.bind(Mt(Mt(f))), f;
    }
    return Ur(l, a), tt(l, [{ key: "render", value: function() {
      var f = this.props;
      f.only, f.except;
      var d = Ws(f, ["only", "except"]), p = { onKeyDown: this._handleKeyEvent, onKeyPress: this._handleKeyEvent, onKeyUp: this._handleKeyEvent, onFocus: this._reloadDictionaries };
      return Dt.createElement(e, Fu({ hotKeys: p }, d));
    } }, { key: "_reloadDictionaries", value: function() {
      var f = this.props, d = f.only, p = f.except;
      this._onlyDict = _b(d), this._exceptDict = _b(p);
    } }, { key: "_shouldIgnoreEvent", value: function(f) {
      var d = f.key;
      return cs(this._onlyDict) ? !!cs(this._exceptDict) || !ir(this._exceptDict, d) : cs(this._exceptDict) ? ir(this._onlyDict, d) : ir(this._onlyDict, d) && !ir(this._exceptDict, d);
    } }, { key: "_handleKeyEvent", value: function(f) {
      this._shouldIgnoreEvent(f) && qt.getInstance()[i](f);
    } }]), l;
  }(Yu), Ft(t, "propTypes", { only: m.oneOfType([m.string, m.arrayOf(m.string)]), except: m.oneOfType([m.string, m.arrayOf(m.string)]) }), Ft(t, "defaultProps", r), n;
}
function _b(e) {
  return xs(e).reduce(function(t, n) {
    var r = Zw(n);
    if (!ek(r)) throw new tk(n);
    return [fg, cg, sg, wc, ug, lg].forEach(function(i) {
      t[i(r)] = !0;
    }), t;
  }, {});
}
var t8 = function(e) {
  function t() {
    return nt(this, t), jr(this, Pt(t).apply(this, arguments));
  }
  return Ur(t, e), tt(t, [{ key: "render", value: function() {
    var r = this.props, i = r.hotKeys, a = Ws(r, ["hotKeys"]), l = a.component || Qe.option("defaultComponent");
    return Dt.createElement(l, cr({}, i, a));
  } }]), t;
}(Yi), n8 = xc(t8, {}, "ignoreEvent"), r8 = function(e) {
  function t() {
    return nt(this, t), jr(this, Pt(t).apply(this, arguments));
  }
  return Ur(t, e), tt(t, [{ key: "render", value: function() {
    var r = this.props, i = r.hotKeys, a = Ws(r, ["hotKeys"]), l = a.component || Qe.option("defaultComponent");
    return Dt.createElement(l, cr({}, i, a));
  } }]), t;
}(Yi), i8 = xc(r8, {}, "observeIgnoredEvents");
function o8(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { only: [], except: [] };
  return xc(e, t, "ignoreEvent");
}
function a8(e) {
  var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : { only: [], except: [] };
  return xc(e, t, "observeIgnoredEvents");
}
function s8() {
  var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
  Qe.init(e);
}
function l8() {
  return qt.getInstance().getApplicationKeyMap();
}
function u8(e) {
  var t = qt.getInstance();
  return t.addKeyCombinationListener(e);
}
const c8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalHotKeys: e8,
  HotKeys: fk,
  IgnoreKeys: n8,
  ObserveKeys: i8,
  configure: s8,
  getApplicationKeyMap: l8,
  recordKeyCombination: u8,
  withHotKeys: ck,
  withIgnoreKeys: o8,
  withObserveKeys: a8
}, Symbol.toStringTag, { value: "Module" })), f8 = /* @__PURE__ */ e1(c8);
function da(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  return e.reduce(function(n, r) {
    return n[r] = t || {
      value: r
    }, n;
  }, {});
}
function d8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function p8(e, t, n) {
  return n && h8(e, n), e;
}
function g8(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      y8(e, i, n[i]);
    });
  }
  return e;
}
function y8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hk = {
  /**
   * The level of logging of its own behaviour React HotKeys should perform.
   * @type {LogLevel}
   */
  logLevel: "warn",
  /**
   * Default key event key maps are bound to, if left unspecified
   * @type {KeyEventName}
   */
  defaultKeyEvent: "keydown",
  /**
   * The default component type to wrap HotKey components' children in, to provide
   * the required focus and keyboard event listening for HotKeys to function
   */
  defaultComponent: "div",
  /**
   * The default tabIndex value passed to the wrapping component used to contain
   * HotKey components' children. -1 skips focusing the element when tabbing through
   * the DOM, but allows focusing programmatically.
   */
  defaultTabIndex: "-1",
  /**
   * The HTML tags that React HotKeys should ignore key events from. This only works
   * if you are using the default ignoreEventsCondition function.
   * @type {String[]}
   */
  ignoreTags: ["input", "select", "textarea"],
  /**
   * Whether to allow hard sequences, or the binding of handlers to actions that have
   * names that are valid key sequences, which implicitly define actions that are
   * triggered by that key sequence
   */
  enableHardSequences: !1,
  /**
   * Whether to ignore changes to keyMap and handlers props by default (this reduces
   * a significant amount of unnecessarily resetting internal state)
   *
   * @type {boolean}
   */
  ignoreKeymapAndHandlerChangesByDefault: !0,
  /**
   * The function used to determine whether a key event should be ignored by React
   * Hotkeys. By default, keyboard events originating elements with a tag name in
   * ignoreTags, or a isContentEditable property of true, are ignored.
   *
   * @type {Function<KeyboardEvent>}
   */
  ignoreEventsCondition: function(t) {
    var n = t.target;
    if (n && n.tagName) {
      var r = n.tagName.toLowerCase();
      return et.option("_ignoreTagsDict")[r] || n.isContentEditable;
    } else
      return !1;
  },
  /**
   * Whether to ignore repeated keyboard events when a key is being held down
   * @type {boolean}
   */
  ignoreRepeatedEventsWhenKeyHeldDown: !0,
  /**
   * Whether React HotKeys should simulate keypress events for the keys that do not
   * natively emit them.
   * @type {boolean}
   */
  simulateMissingKeyPressEvents: !0,
  /**
   * Whether to call stopPropagation() on events after they are handled (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   * @type {boolean}
   */
  stopEventPropagationAfterHandling: !0,
  /**
   * Whether to call stopPropagation() on events after they are ignored (preventing
   * the event from bubbling up any further, both within React Hotkeys and any other
   * event listeners bound in React).
   *
   * This does not affect the behaviour of React Hotkeys, but rather what happens to
   * the event once React Hotkeys is done with it (whether it's allowed to propagate
   * any further through the Render tree).
   * @type {boolean}
   */
  stopEventPropagationAfterIgnoring: !0,
  /**
   * Whether to allow combination submatches - e.g. if there is an action bound to
   * cmd, pressing shift+cmd will *not* trigger that action when
   * allowCombinationSubmatches is false.
   *
   * @note This option is ignored for combinations involving command (Meta) and
   *      submatches are <i>always</i> allowed because Meta hides keyup events
   *      of other keys, so until Command is released, it's impossible to know
   *      if one of the keys that has also been pressed has been released.
   *      @see https://github.com/greena13/react-hotkeys/pull/207
   * @type {boolean}
   */
  allowCombinationSubmatches: !1,
  /**
   * A mapping of custom key codes to key names that you can then use in your
   * key sequences
   * @type {Object.<Number, KeyName>}
   */
  customKeyCodes: {}
}, fs = g8({}, hk);
fs._ignoreTagsDict = da(fs.ignoreTags, !0);
var et = /* @__PURE__ */ function() {
  function e() {
    d8(this, e);
  }
  return p8(e, null, [{
    key: "init",
    /**
     * Merges the specified configuration options with the current values.
     * @see _configuration
     */
    value: function(n) {
      var r = this, i = n.ignoreTags, a = n.customKeyCodes;
      i && (n._ignoreTagsDict = da(n.ignoreTags)), a && (n._customKeyNamesDict = da(Object.values(n.customKeyCodes))), Object.keys(n).forEach(function(l) {
        r.set(l, n[l]);
      });
    }
    /**
     * Sets a single configuration value by name
     * @param {string} key - Name of the configuration value to set
     * @param {*} value - New value to set
     */
  }, {
    key: "set",
    value: function(n, r) {
      fs[n] = r;
    }
  }, {
    key: "reset",
    value: function(n) {
      fs[n] = hk[n];
    }
    /**
     * Gets a single configuration value by name
     * @param {string} key - Name of the configuration value
     * @returns {*} Configuration value
     */
  }, {
    key: "option",
    value: function(n) {
      return fs[n];
    }
  }]), e;
}();
function m8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _8(e, t, n) {
  return t && v8(e.prototype, t), e;
}
function ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kr = /* @__PURE__ */ function() {
  _8(e, [{
    key: "noop",
    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time a focus tree changes, making it easier to quickly spot events related
     * to the same focus tree.
     */
    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time a component ID changes, making it easier to quickly spot events related
     * to the same component.
     */
    /**
     * Icons prefixed to the start of logging statements that cycled through each
     * time an event ID changes, making it easier to quickly trace the path of KeyEvent
     * objects as they propagate through multiple components.
     */
    /**
     * The level of logging to perform
     * @typedef {'none'|'error'|'warn'|'info'|'debug'|'verbose'} LogLevel
     */
    /**
     * Levels of log severity - the higher the log level, the greater the amount (and
     * lesser the importance) of information logged to the console about React HotKey's
     * behaviour
     * @enum {number} LogLevel
     */
    value: function() {
    }
    /**
     * By default, calls to all log severities are a no-operation. It's only when the
     * user specifies a log level, are they replaced with logging statements
     * @type {Logger.noop}
     */
  }]);
  function e() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "warn";
    if (m8(this, e), ii(this, "verbose", this.noop), ii(this, "debug", this.noop), ii(this, "info", this.noop), ii(this, "warn", this.noop), ii(this, "error", this.noop), this.logLevel = this.constructor.levels[n], this.logLevel >= this.constructor.levels.error)
      this.error = console.error;
    else
      return;
    if (this.logLevel >= this.constructor.levels.warn)
      this.warn = console.warn;
    else
      return;
    ["info", "debug", "verbose"].some(function(r) {
      return t.logLevel >= t.constructor.levels[r] ? (t[r] = console.log, !1) : !0;
    });
  }
  return e;
}();
ii(kr, "logIcons", ["📕", "📗", "📘", "📙"]);
ii(kr, "componentIcons", ["🔺", "⭐️", "🔷", "🔶", "⬛️"]);
ii(kr, "eventIcons", ["❤️", "💚", "💙", "💛", "💜", "🧡"]);
ii(kr, "levels", {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  verbose: 5
});
var ue = {
  keydown: 0,
  keypress: 1,
  keyup: 2
}, _d = {
  Shift: ["shiftKey"],
  Meta: ["metaKey"],
  Control: ["ctrlKey"],
  Alt: ["altKey"]
}, pk = {
  "`": ["~"],
  1: ["!"],
  2: [
    "@",
    /** UK Keyboard: **/
    '"'
  ],
  3: [
    "#",
    /** UK Keyboard: **/
    "£"
  ],
  4: ["$"],
  5: ["%"],
  6: ["^"],
  7: ["&"],
  8: ["*"],
  9: ["("],
  0: [")"],
  "-": ["_"],
  "=": ["plus"],
  ";": [":"],
  "'": [
    '"',
    /** UK Keyboard: **/
    "@"
  ],
  ",": ["<"],
  ".": [">"],
  "/": ["?"],
  "\\": ["|"],
  "[": ["{"],
  "]": ["}"],
  /**
   * UK Keyboard:
   */
  "#": ["~"]
};
function dg(e) {
  return pk[e] || [e.length === 1 ? e.toUpperCase() : e];
}
function or(e, t) {
  return e.hasOwnProperty(t);
}
function bb(e) {
  return k8(e) || w8(e) || b8();
}
function b8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function w8(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function k8(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
      n[t] = e[t];
    return n;
  }
}
function Sc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(e).reduce(function(n, r) {
    var i = e[r];
    return i.forEach(function(a) {
      or(n, a) || (n[a] = []), n[a].push(r);
    }), t.includeOriginal && (or(n, r) || (n[r] = []), n[r] = [].concat(bb(n[r]), bb(i))), n;
  }, {});
}
var x8 = Sc(pk);
function Cc(e) {
  return x8[e] || [e.length === 1 ? e.toLowerCase() : e];
}
var S8 = {};
const gk = Sc(S8, {
  includeOriginal: !0
});
function yk(e) {
  return typeof e == "string";
}
function C8(e) {
  return yk(e) ? e.trim().replace(/\s+/g, " ") : e;
}
var E8 = {
  /**
   * Generic
   */
  tab: "Tab",
  capslock: "CapsLock",
  shift: "Shift",
  meta: "Meta",
  alt: "Alt",
  ctrl: "Control",
  space: " ",
  spacebar: " ",
  escape: "Escape",
  esc: "Escape",
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
  /**
   * Mac
   */
  return: "Enter",
  del: "Delete",
  command: "Meta",
  option: "Alt",
  /**
   * Windows
   */
  enter: "Enter",
  backspace: "Backspace",
  ins: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  end: "End",
  home: "Home",
  contextmenu: "ContextMenu",
  numlock: "Clear"
}, O8 = {
  cmd: "Meta"
};
function mk(e) {
  var t = e.toLowerCase();
  return E8[t] || O8[t] || (e.match(/^f\d+$/) ? e.toUpperCase() : e);
}
var vk = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, P8 = da(Object.values(vk), !0);
function _k(e) {
  return !!P8[e];
}
function I8(e) {
  return et.option("_customKeyNamesDict")[e];
}
function ou(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ou = function(n) {
    return typeof n;
  } : ou = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ou(e);
}
function T8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M8(e, t) {
  return t && (ou(t) === "object" || typeof t == "function") ? t : Ch(e);
}
function A8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Cs(e, t);
}
function Ch(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eh(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Eh = function(r) {
    if (r === null || !L8(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, i);
    }
    function i() {
      return au(r, arguments, Hu(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), Cs(i, r);
  }, Eh(e);
}
function D8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function au(e, t, n) {
  return D8() ? au = Reflect.construct : au = function(i, a, l) {
    var u = [null];
    u.push.apply(u, a);
    var f = Function.bind.apply(i, u), d = new f();
    return l && Cs(d, l.prototype), d;
  }, au.apply(null, arguments);
}
function L8(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Cs(e, t) {
  return Cs = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Cs(e, t);
}
function Hu(e) {
  return Hu = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hu(e);
}
function R8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bk(e) {
  return _k(e) || String.fromCharCode(e.charCodeAt(0)) === e || I8(e);
}
var wk = /* @__PURE__ */ function(e) {
  A8(t, e);
  function t() {
    var n, r;
    T8(this, t);
    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++)
      a[l] = arguments[l];
    return r = M8(this, (n = Hu(t)).call.apply(n, [this].concat(a))), R8(Ch(Ch(r)), "name", "InvalidKeyNameError"), r;
  }
  return t;
}(Eh(Error));
function N8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function F8(e, t, n) {
  return n && K8(e, n), e;
}
function wb(e) {
  return e.sort().join("+");
}
var kk = /* @__PURE__ */ function() {
  function e() {
    N8(this, e);
  }
  return F8(e, null, [{
    key: "parse",
    /**
     * @typedef {Object} BasicKeyCombination Object containing the basic information that
     *          describes a key combination
     * @property {KeyCombinationString} id - String description of keys involved in the key
     *          combination
     * @property {number} size - Number of keys involved in the combination
     * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
     *           in the key combination
     * @property {KeyEventType} keyEventType - Record index for key event that
     *          the matcher should match on
     */
    /**
     * @typedef {string} KeySequenceString String describing a sequence of one or more key
     * combinations with whitespace separating key combinations in the sequence and '+'
     * separating keys within a key combination.
     */
    /**
     * @typedef {KeySequenceString} NormalizedKeySequenceId key sequence id with all of the
     * combination id's normalized
     */
    /**
     * @typedef {Object} BasicKeySequence Object containing the basic information that
     *          describes a key sequence
     * @property {NormalizedKeySequenceId} prefix - Normalized key sequence id
     * @property {number} size - Number of combinations involved in the sequence
     */
    /**
     * @typedef {Object} KeySequenceObject Object containing description of a key sequence
     *          to compared against key events
     * @property {KeySequenceString} id Id describing key sequence used for matching against
     *            key events
     * @property {ComponentId} componentId Id associated with the HotKeys component
     *          that registered the key sequence
     * @property {BasicKeyCombination[]} sequence A list of key combinations involved in
     *            the sequence
     * @property {number} size Number of key combinations in the key sequence
     * @property {KeyEventType} keyEventType Index that matches key event type
     * @property {ActionName} actionName Name of the action that should be triggered if a
     *           keyboard event matching the sequence and event type occur
     */
    /**
     * @typedef {Object} KeySequenceOptions Object containing the results of parsing a
     *          KeySequenceString
     * @property {BasicKeyCombination} combination Properties of the final combination in
     *        the sequence
     * @property {BasicKeySequence} sequence Properties of the sequence of keys leading
     *        up to the final combination
     */
    /**
     * Parses a KeySequenceString and returns a KeySequenceOptions object containing
     * information about the sequence in a format that is easier to query
     * @param {KeySequenceString} sequenceString String describing a key sequence to
     *        parse
     * @param {Object} options Configuration object describing how the KeySequenceString
     *        should be parsed.
     * @param {KeyEventType} options.keyEventType Event record index indicating
     *        what key event the sequence should match
     * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
     *        key name is found in the key combination string.
     * @returns {KeySequenceOptions} Object containing information about the key
     *        sequence described by the KeySequenceString
     */
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = C8(n), a = i.split(" ");
      try {
        var l = a.slice(0, a.length - 1), u = a[a.length - 1], f = l.map(function(_) {
          var y = kb(_, r);
          return wb(Object.keys(y));
        }).join(" "), d = kb(u, r), p = wb(Object.keys(d)), g = {
          id: p,
          keyDictionary: d,
          keyEventType: r.keyEventType,
          size: Object.keys(d).length
        };
        return {
          sequence: {
            prefix: f,
            size: l.length + 1
          },
          combination: g
        };
      } catch {
        return {
          sequence: null,
          combination: null
        };
      }
    }
  }]), e;
}();
function kb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e.replace(/^\+|(\s|[^+]\+)\+/, "$1plus").split("+").reduce(function(n, r) {
    var i = mk(r);
    if (t.ensureValidKeys && !bk(i))
      throw new wk();
    return n[i] = !0, n;
  }, {});
}
var xk = {
  "`": ["`"],
  1: ["¡"],
  2: ["™"],
  3: ["£"],
  4: ["¢"],
  5: ["∞"],
  6: ["§"],
  7: ["¶"],
  8: ["•"],
  9: ["ª"],
  0: ["º"],
  "-": ["–"],
  "=": ["≠"],
  a: ["å"],
  b: ["∫"],
  c: ["ç"],
  d: ["∂"],
  e: ["´"],
  f: ["ƒ"],
  g: ["©"],
  h: ["˙"],
  i: ["ˆ"],
  j: ["∆"],
  k: ["˚"],
  l: ["¬"],
  m: ["µ"],
  n: ["˜"],
  o: ["ø"],
  p: ["π"],
  q: ["œ"],
  r: ["®"],
  s: ["ß"],
  t: ["†"],
  u: ["¨"],
  v: ["√"],
  w: ["∑"],
  x: ["≈"],
  y: ["¥"],
  z: ["Ω"],
  "[": ["“"],
  "]": ["‘"],
  "\\": ["«"],
  "'": ["æ"],
  ";": ["…"],
  ",": ["≤"],
  ".": ["≥"],
  "/": ["÷"]
}, $8 = Sc(xk);
function hg(e) {
  return $8[e] || [e];
}
function pg(e) {
  return xk[e] || [e];
}
var Sk = {
  "`": ["`"],
  1: ["⁄"],
  2: ["€"],
  3: ["‹"],
  4: ["›"],
  5: ["ﬁ"],
  6: ["ﬂ"],
  7: ["‡"],
  8: ["°"],
  9: ["·"],
  0: ["‚"],
  "-": ["—"],
  "=": ["±"],
  a: ["Å"],
  b: ["ı"],
  c: ["Ç"],
  d: ["Î"],
  e: ["´"],
  f: ["Ï"],
  g: ["˝"],
  h: ["Ó"],
  i: ["ˆ"],
  j: ["Ô"],
  k: [""],
  l: ["Ò"],
  m: ["Â"],
  n: ["˜"],
  o: ["Ø"],
  p: ["π"],
  q: ["Œ"],
  r: ["‰"],
  s: ["Í"],
  t: ["Î"],
  u: ["¨"],
  v: ["◊"],
  w: ["„"],
  x: ["˛"],
  y: ["Á"],
  z: ["¸"],
  "[": ["”"],
  "]": ["’"],
  "\\": ["»"],
  "'": ["Æ"],
  ";": ["Ú"],
  ",": ["¯"],
  ".": ["˘"]
}, H8 = Sc(Sk);
function gg(e) {
  return H8[e] || Cc(e);
}
function yg(e) {
  return Sk[e] || [e];
}
function z8(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      Oh(e, i, n[i]);
    });
  }
  return e;
}
function Oh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _r(e) {
  return j8(e) || U8(e) || B8();
}
function B8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function U8(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function j8(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
      n[t] = e[t];
    return n;
  }
}
function W8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Y8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function G8(e, t, n) {
  return n && Y8(e, n), e;
}
var Ec = /* @__PURE__ */ function() {
  function e() {
    W8(this, e);
  }
  return G8(e, null, [{
    key: "serialize",
    /**
     * Returns a string representation of a single KeyCombination
     * @param {KeyCombination} keyCombination KeyCombination to serialize
     * @returns {string[]} Serialization of KeyCombination
     */
    value: function(n) {
      var r = n.Shift, i = n.Alt, a = {}, l = Object.keys(n).sort();
      return l.forEach(function(u) {
        var f = [];
        if (r)
          if (i) {
            var d = gg(u), p = yg(u);
            f = [].concat(_r(f), [u], _r(d), _r(p));
          } else {
            var g = Cc(u), _ = dg(u);
            f = [].concat(_r(f), [u], _r(g), _r(_));
          }
        else if (i) {
          var y = hg(u), k = pg(u);
          f = [].concat(_r(f), [u], _r(y), _r(k));
        } else {
          f.push(u);
          var x = gk[u];
          x && (f = [].concat(_r(f), _r(x)));
        }
        var O = Object.keys(a);
        O.length > 0 ? O.forEach(function(S) {
          f.forEach(function(M) {
            a[S + "+".concat(M)] = z8({}, a[S], Oh({}, M, !0));
          }), delete a[S];
        }) : f.forEach(function(S) {
          a[S] = Oh({}, S, !0);
        });
      }), Object.values(a).map(function(u) {
        return Object.keys(u).sort().join("+");
      });
    }
    /**
     * Whether the specified key sequence is valid (is of the correct format and contains
     * combinations consisting entirely of valid keys)
     * @param {KeySequenceString} keySequence Key sequence to validate
     * @returns {boolean} Whether the key sequence is valid
     */
  }, {
    key: "isValidKeySerialization",
    value: function(n) {
      return n.length > 0 ? !!kk.parse(n, {
        ensureValidKeys: !0
      }).combination : !1;
    }
  }]), e;
}(), xb = {
  previous: 0,
  current: 1
};
function q8(e) {
  return gk[e] || [e];
}
function V8(e) {
  if (e.Shift)
    return e.Alt ? [yg, gg] : [dg, Cc];
  if (e.Alt)
    return [pg, hg];
  var t = function(r) {
    return [r];
  };
  return [t, t];
}
function lr(e) {
  return typeof e > "u";
}
var di = {
  unseen: 0,
  seen: 1,
  simulated: 2
};
function X8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z8(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function J8(e, t, n) {
  return n && Z8(e, n), e;
}
var Ri = /* @__PURE__ */ function() {
  function e() {
    X8(this, e);
  }
  return J8(e, null, [{
    key: "newRecord",
    /**
     * Makes a new KeyEvent with one of the bits set to true
     * @param {KeyEventType=} keyEventType Index of bit to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     * @returns {KeyEvent} New key event record with bit set to true
     */
    value: function(n, r) {
      var i = [di.unseen, di.unseen, di.unseen];
      if (!lr(n))
        for (var a = 0; a <= n; a++)
          i[a] = r;
      return i;
    }
    /**
     * Sets a bit in the map to true
     * @param {KeyEvent} record Map to set a bit to true
     * @param {KeyEventType} index Index of bit to set
     * @param {KeyEventState} keyEventState The state to set the key event to
     */
  }, {
    key: "setBit",
    value: function(n, r, i) {
      return n[r] = i, n;
    }
    /**
     * Returns a new record with the same values as the one passed to it
     * @param {KeyEvent} original Record to copy
     * @returns {KeyEvent} Record with the same values as the original
     */
  }, {
    key: "clone",
    value: function(n) {
      for (var r = this.newRecord(), i = 0; i < n.length; i++)
        r[i] = n[i];
      return r;
    }
  }]), e;
}();
function su(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? su = function(n) {
    return typeof n;
  } : su = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, su(e);
}
function Wi(e) {
  return !Array.isArray(e) && su(e) === "object" && e !== null;
}
function ds(e) {
  return Wi(e) ? Object.keys(e).length === 0 : e ? e.length === 0 : !0;
}
function Ck(e) {
  return Wi(e) ? Object.keys(e).length : e.length;
}
function Q8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tY(e, t, n) {
  return t && eY(e.prototype, t), e;
}
var lu = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Q8(this, e), this._keys = t, this._includesKeyUp = !1, this._update();
  }
  return tY(e, [{
    key: "getIds",
    value: function() {
      return this._ids;
    }
    /**
     * Dictionary mapping keys to their acceptable aliases. This includes "shifted" or
     * "alted" key characters.
     * @returns {Object.<ReactKeyName, ReactKeyName[]>}
     */
  }, {
    key: "getKeyAliases",
    value: function() {
      return this._keyAliases;
    }
    /**
     * A normalized version of the key, achieved by comparing it to the list of known
     * aliases for the keys in the combination
     * @param {ReactKeyName} keyName Name of the key to normalize
     * @returns {ReactKeyName} Normalized key name
     */
  }, {
    key: "getNormalizedKeyName",
    value: function(n) {
      var r = this._keys[n];
      if (r)
        return n;
      var i = this._keyAliases[n];
      return i || n;
    }
    /********************************************************************************
     * Query attributes of entire combination
     *********************************************************************************/
    /**
     * Number of keys involved in the combination
     * @returns {number} Number of keys
     */
  }, {
    key: "getNumberOfKeys",
    value: function() {
      return Ck(this._keys);
    }
    /**
     * Whether there are any keys in the combination
     * @returns {boolean} true if there is 1 or more keys involved in the combination,
     *          else false.
     */
  }, {
    key: "any",
    value: function() {
      return Object.keys(this._getKeyStates()).length > 0;
    }
    /**
     * Whether any of the keys in the combination have been released
     * @returns {boolean} true if at least 1 key has been released in the combination
     */
  }, {
    key: "isEnding",
    value: function() {
      return this._includesKeyUp;
    }
    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     */
  }, {
    key: "hasEnded",
    value: function() {
      return ds(this.keysStillPressedDict());
    }
    /********************************************************************************
     * Adding & modifying key states
     *********************************************************************************/
    /**
     * Add a new key to the combination (starting with a state of keydown)
     * @param {ReactKeyName} keyName Name of key
     * @param {KeyEventState} keyEventState State key is in
     * @returns {void}
     */
  }, {
    key: "addKey",
    value: function(n, r) {
      this._setKeyState(n, [Ri.newRecord(), Ri.newRecord(ue.keydown, r)]);
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */
  }, {
    key: "setKeyState",
    value: function(n, r, i) {
      var a = this._getKeyState(n);
      if (this.isKeyIncluded(n)) {
        var l = Ri.clone(a[1]), u = Ri.clone(l);
        Ri.setBit(u, r, i), this._setKeyState(n, [l, u]);
      } else
        this.addKey(n, i);
      r === ue.keyup && (this._includesKeyUp = !0);
    }
    /********************************************************************************
     * Iteration and subsets
     *********************************************************************************/
    /**
     * @callback forEachHandler
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {void}
     */
    /**
     * Iterates over every key in the combination, calling an function with each
     * key name
     * @param {forEachHandler} handler Function to call with the name of each key
     *        in the combination
     * @returns {void}
     */
  }, {
    key: "forEachKey",
    value: function(n) {
      return Object.keys(this._keys).forEach(n);
    }
    /**
     * @callback evaluator
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {boolean}
     */
    /**
     * Whether at least one of the keys causes a evaluator function to return true
     * @callback {evaluator} evaluator Function to evaluate each key
     * @returns {boolean} Whether at least one key satisfies the evaluator
     */
  }, {
    key: "some",
    value: function(n) {
      return Object.keys(this._keys).some(n);
    }
    /**
     * Dictionary of keys included in the combination record
     * @returns {Object.<ReactKeyName, boolean>}
     */
  }, {
    key: "getKeyDictionary",
    value: function() {
      return da(Object.keys(this._getKeyStates()), !0);
    }
    /**
     * Returns a new KeyCombination without the keys that have been
     * released (had the keyup event recorded). Essentially, the keys that are
     * currently still pressed down at the time a key event is being handled.
     * @returns {KeyCombination} New KeyCombination with all of the
     *        keys with keyup events omitted
     */
  }, {
    key: "keysStillPressedDict",
    value: function() {
      var n = this;
      return Object.keys(this._keys).reduce(function(r, i) {
        return n.isKeyStillPressed(i) && (r[i] = n._getKeyState(i)), r;
      }, {});
    }
    /********************************************************************************
     * Query individual keys
     *********************************************************************************/
    /**
     * Whether key is in the combination
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination
     */
  }, {
    key: "isKeyIncluded",
    value: function(n) {
      return !!this._getKeyState(n);
    }
    /**
     * Whether key is in the combination and has yet to be released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and yet to be released
     */
  }, {
    key: "isKeyStillPressed",
    value: function(n) {
      return this.isEventTriggered(n, ue.keypress) && !this.isKeyReleased(n);
    }
    /**
     * Whether key is in the combination and been released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and has been released
     */
  }, {
    key: "isKeyReleased",
    value: function(n) {
      return this.isEventTriggered(n, ue.keyup);
    }
    /**
     * Whether an event has been recorded for a key yet
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been recorded for the key
     */
  }, {
    key: "isEventTriggered",
    value: function(n, r) {
      return this._getKeyStateType(n, xb.current, r);
    }
    /**
     * Whether an event has been previously recorded for a key (the second most recent
     * event to occur for the key)
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been previously recorded for the key
     */
  }, {
    key: "wasEventPreviouslyTriggered",
    value: function(n, r) {
      return this._getKeyStateType(n, xb.previous, r);
    }
    /**
     * Whether a keypress event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keypress event is currently being simulated for the
     *        key
     */
  }, {
    key: "isKeyPressSimulated",
    value: function(n) {
      return this._isKeyEventSimulated(n, ue.keypress);
    }
    /**
     * Whether a keyup event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keyup event is currently being simulated for the
     *        key
     */
  }, {
    key: "isKeyUpSimulated",
    value: function(n) {
      return this._isKeyEventSimulated(n, ue.keyup);
    }
    /********************************************************************************
     * Presentation
     *********************************************************************************/
    /**
     * Return a serialized description of the keys in the combination
     * @returns {KeySequence}
     */
  }, {
    key: "describe",
    value: function() {
      return this.getIds()[0];
    }
    /**
     * A plain JavaScript representation of the key combination record, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the combination record
     */
  }, {
    key: "toJSON",
    value: function() {
      return {
        keys: this._getKeyStates(),
        ids: this.getIds(),
        keyAliases: this.getKeyAliases()
      };
    }
    /********************************************************************************
     * Private methods
     *********************************************************************************/
  }, {
    key: "_getKeyStateType",
    value: function(n, r, i) {
      var a = this._getKeyState(n);
      return a && a[r][i];
    }
  }, {
    key: "_update",
    value: function() {
      this._ids = Ec.serialize(this._keys), this._keyAliases = nY(this._keys);
    }
  }, {
    key: "_isKeyEventSimulated",
    value: function(n, r) {
      return this.isEventTriggered(n, r) === di.simulated;
    }
  }, {
    key: "_getKeyStates",
    value: function() {
      return this._keys;
    }
  }, {
    key: "_getKeyState",
    value: function(n) {
      var r = this._keys[n];
      if (r)
        return r;
      var i = this._keyAliases[n];
      if (i)
        return this._keys[i];
    }
  }, {
    key: "_setKeyState",
    value: function(n, r) {
      var i = this.getNormalizedKeyName(n);
      this._keys[i] = r, this._update();
    }
  }]), e;
}();
function nY(e) {
  return Object.keys(e).reduce(function(t, n) {
    return q8(n).forEach(function(r) {
      V8(e).forEach(function(i) {
        i(r).forEach(function(a) {
          (a !== n || n !== r) && (t[a] = n);
        });
      });
    }), t;
  }, {});
}
function rY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function oY(e, t, n) {
  return t && iY(e.prototype, t), e;
}
var Sb = /* @__PURE__ */ function() {
  function e(t) {
    var n = t.maxLength, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    rY(this, e), this._records = [], this._maxLength = n, r ? this._push(r) : this._push(new lu());
  }
  return oY(e, [{
    key: "getMostRecentCombinations",
    value: function(n) {
      return this._records.slice(-n, -1);
    }
    /**
     * Whether any keys have been stored in the key history
     * @returns {boolean} true if there is at least one key combination, else false
     */
  }, {
    key: "any",
    value: function() {
      return this._records.some(function(n) {
        return n.any();
      });
    }
    /**
     * The number of key combinations in the history (limited by the max length)
     * @returns {number} Number of key combinations
     */
  }, {
    key: "getLength",
    value: function() {
      return this._records.length;
    }
    /**
     * Most recent or current key combination
     * @returns {KeyCombination} Key combination record
     */
  }, {
    key: "getCurrentCombination",
    value: function() {
      return this._records[this.getLength() - 1];
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */
  }, {
    key: "addKeyToCurrentCombination",
    value: function(n, r, i) {
      this._ensureInitialKeyCombination(), this.getCurrentCombination().setKeyState(n, r, i);
    }
    /**
     * Sets a new maximum length for the key combination history. Once the number of
     * key combinations exceeds this length, the oldest is dropped.
     * @param {Number} length New maximum length of the key history
     */
  }, {
    key: "setMaxLength",
    value: function(n) {
      this._maxLength = n, this._trimHistory();
    }
    /**
     * Adds a new KeyCombination to the event history.
     * @param {ReactKeyName} keyName - Name of the keyboard key to add to the new
     *        KeyCombination
     * @param {KeyEventState} keyEventState The state to set the key event to
     */
  }, {
    key: "startNewKeyCombination",
    value: function(n, r) {
      this._ensureInitialKeyCombination();
      var i = new lu(this.getCurrentCombination().keysStillPressedDict());
      i.addKey(n, r), this._push(i);
    }
    /**
     * A plain JavaScript representation of the key combination history, useful for
     * serialization or debugging
     * @returns {Object[]} Serialized representation of the registry
     */
  }, {
    key: "toJSON",
    value: function() {
      return this._records.map(function(n) {
        return n.toJSON();
      });
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_ensureInitialKeyCombination",
    value: function() {
      this.getLength() === 0 && this._push(new lu());
    }
  }, {
    key: "_push",
    value: function(n) {
      this._trimHistory(), this._records.push(n);
    }
  }, {
    key: "_trimHistory",
    value: function() {
      for (; this.getLength() > this._maxLength; )
        this._shift();
    }
  }, {
    key: "_shift",
    value: function() {
      this._records.shift();
    }
  }]), e;
}();
function aY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lY(e, t, n) {
  return t && sY(e.prototype, t), e;
}
var uY = /* @__PURE__ */ function() {
  function e() {
    aY(this, e), this._registry = {};
  }
  return lY(e, [{
    key: "get",
    value: function(n) {
      return this._registry[n];
    }
    /**
     * Add an item to the registry
     * @param {*} id Key to store the item against
     * @param {*} item Item to store in the registry
     */
  }, {
    key: "set",
    value: function(n, r) {
      this._registry[n] = r;
    }
    /**
     * Remove an item from the registry
     * @param {*} id Key of the item to remove from the registry
     */
  }, {
    key: "remove",
    value: function(n) {
      delete this._registry[n];
    }
    /**
     * A plain JavaScript representation of the registry, useful for serialization or
     * debugging
     * @returns {Object.<*,*>} Serialized representation of the registry
     */
  }, {
    key: "toJSON",
    value: function() {
      return this._registry;
    }
  }]), e;
}();
function Es(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function cY(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = da(Es(t));
  return Array.isArray(e) ? e.reduce(function(i, a) {
    return r[a] && (n.stringifyFirst || r[a].value === a) || i.push(a), i;
  }, []) : Wi(e) ? Object.keys(e).reduce(function(i, a) {
    return r[a] || (i[a] = e[a]), i;
  }, {}) : e;
}
function uu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uu = function(n) {
    return typeof n;
  } : uu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, uu(e);
}
function fY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      dY(e, i, n[i]);
    });
  }
  return e;
}
function dY(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gY(e, t, n) {
  return t && pY(e.prototype, t), e;
}
function yY(e, t) {
  return t && (uu(t) === "object" || typeof t == "function") ? t : mY(e);
}
function mY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function po(e, t, n) {
  return typeof Reflect < "u" && Reflect.get ? po = Reflect.get : po = function(i, a, l) {
    var u = vY(i, a);
    if (u) {
      var f = Object.getOwnPropertyDescriptor(u, a);
      return f.get ? f.get.call(l) : f.value;
    }
  }, po(e, t, n || e);
}
function vY(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Ni(e), e !== null); )
    ;
  return e;
}
function Ni(e) {
  return Ni = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ni(e);
}
function _Y(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ph(e, t);
}
function Ph(e, t) {
  return Ph = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Ph(e, t);
}
var bY = /* @__PURE__ */ function(e) {
  _Y(t, e);
  function t() {
    return hY(this, t), yY(this, Ni(t).apply(this, arguments));
  }
  return gY(t, [{
    key: "add",
    /**
     * Register a component
     * @param {ComponentId} componentId Id of the component to register
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {void}
     */
    value: function(r, i) {
      po(Ni(t.prototype), "set", this).call(this, r, {
        childIds: [],
        parentId: null,
        keyMap: i
      });
    }
    /**
     * Updates an existing component's key map
     * @param {ComponentId} componentId Id of the component to register
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {void}
     */
  }, {
    key: "update",
    value: function(r, i) {
      var a = po(Ni(t.prototype), "get", this).call(this, r);
      po(Ni(t.prototype), "set", this).call(this, r, fY({}, a, {
        keyMap: i
      }));
    }
    /**
     * Set the parent ID of a component
     * @param {ComponentId} componentId Id of the component
     * @param {ComponentId} parentId Id of the parent
     * @returns {void}
     */
  }, {
    key: "setParent",
    value: function(r, i) {
      this.get(r).parentId = i, this._addChildId(i, r);
    }
    /**
     * Deregister a component
     * @param {ComponentId} componentId Id of the component to remove
     * @returns {void}
     */
  }, {
    key: "remove",
    value: function(r) {
      var i = this._getParentId(r);
      this._removeChildId(i, r), po(Ni(t.prototype), "remove", this).call(this, r);
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_getParentId",
    value: function(r) {
      var i = this.get(r);
      return i && i.parentId;
    }
  }, {
    key: "_addChildId",
    value: function(r, i) {
      this.get(r).childIds.push(i);
    }
  }, {
    key: "_removeChildId",
    value: function(r, i) {
      var a = this.get(r);
      a && (a.childIds = cY(a.childIds, i));
    }
  }]), t;
}(uY);
function Cb(e) {
  return xY(e) || kY(e) || wY();
}
function wY() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function kY(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function xY(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
      n[t] = e[t];
    return n;
  }
}
function SY(e, t) {
  return [].concat(Cb(e.slice(0, t)), Cb(e.slice(t + 1)));
}
function CY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function OY(e, t, n) {
  return t && EY(e.prototype, t), e;
}
var PY = /* @__PURE__ */ function() {
  function e(t) {
    CY(this, e), this._list = t, this._position = -1;
  }
  return OY(e, [{
    key: "getPosition",
    value: function() {
      return this._position;
    }
    /**
     * The component options the iterator is currently pointed at
     * @returns {ComponentOptions} The current component options
     */
  }, {
    key: "getComponent",
    value: function() {
      return this._list.getAtPosition(this.getPosition());
    }
    /**
     * Move to the next component options in the list, if not already at the end of the
     * list.
     * @returns {ComponentOptionsList|null} The next component options the iterator is now
     *        pointed at. If the iterator is already at the last component options, null
     *        is returned.
     */
  }, {
    key: "next",
    value: function() {
      return this.getPosition() + 1 < this._list.getLength() ? (this._position++, this.getComponent()) : null;
    }
  }]), e;
}();
function Eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      IY(e, i, n[i]);
    });
  }
  return e;
}
function IY(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function TY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function MY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function AY(e, t, n) {
  return t && MY(e.prototype, t), e;
}
var DY = /* @__PURE__ */ function() {
  function e() {
    TY(this, e), this._list = [], this._idToIndex = {}, this._longestSequence = 1, this._longestSequenceComponentId = null, this._keyMapEventRecord = Ri.newRecord();
  }
  return AY(e, [{
    key: "getNewIterator",
    value: function() {
      return new PY(this);
    }
    /**
     * Adds a new hot key component's options, to be parsed and standardised before being
     * added to the list
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */
  }, {
    key: "add",
    value: function(n, r, i, a) {
      if (this.containsId(n))
        return this.update(n, r, i, a);
      var l = this._build(n, r, i, a);
      this._list.push(l);
      var u = this._getLastIndex();
      return this._idToIndex[n] = u;
    }
    /**
     * Whether the list contains options for a component with the specified id
     * @param {ComponentId} id Id of the component
     * @returns {boolean} True if the list contains options for the component with the
     *        specified id
     */
  }, {
    key: "containsId",
    value: function(n) {
      return !!this.get(n);
    }
    /**
     * Retrieves options for a component from the list
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {ComponentOptions} Options for the component with the specified id
     */
  }, {
    key: "get",
    value: function(n) {
      return this.getAtPosition(this.getIndexById(n));
    }
    /**
     * Returns the position of the options belonging to the component with the specified
     * id.
     * @param {ComponentId} id Id of the component to retrieve the options for
     * @returns {number} The position of the component options in the list.
     */
  }, {
    key: "getIndexById",
    value: function(n) {
      return this._idToIndex[n];
    }
    /**
     * Replaces the options of a component already in the list with new values
     * @param {ComponentId} componentId - Id of the component to replace the options of
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @returns {number} The position the component options have in the list
     */
  }, {
    key: "update",
    value: function(n, r, i, a) {
      var l = this._isUpdatingComponentWithLongestSequence(n), u = this.getLongestSequence(), f = this._build(n, r, i, a);
      l && f.sequenceLength !== u && (f.sequenceLength > u ? this._longestSequence = f.sequenceLength : this._recalculateLongestSequence()), this._list[this.getIndexById(n)] = f;
    }
    /**
     * Removes the options of a component from the list
     * @param {ComponentId} id The id of the component whose options are removed
     * @returns {void}
     */
  }, {
    key: "remove",
    value: function(n) {
      var r = this._isUpdatingComponentWithLongestSequence(n);
      this.removeAtPosition(this.getIndexById(n)), r && this._recalculateLongestSequence();
    }
    /**
     * Whether the list has any options in it (non-empty)
     * @returns {boolean} true if the list has one or more options in it
     */
  }, {
    key: "any",
    value: function() {
      return this.getLength() !== 0;
    }
    /**
     * Whether a component is the root component (the last one in the list)
     * @param {ComponentId} id Id of the component to query if it is the root
     * @returns {boolean} true if the component is the last in the list
     */
  }, {
    key: "isRoot",
    value: function(n) {
      return this.getIndexById(n) >= this.getLength() - 1;
    }
    /**
     * The length of the longest sequence currently defined.
     * @returns {number} The sequence length
     */
  }, {
    key: "getLongestSequence",
    value: function() {
      return this._longestSequence;
    }
    /**
     * Whether the list contains at least one component with an action bound to a
     * particular keyboard event type.
     * @param {KeyEventType} keyEventType Index of the keyboard event type
     * @returns {boolean} true when the list contains a component with an action bound
     *          to the event type
     */
  }, {
    key: "anyActionsForEventType",
    value: function(n) {
      return !!this._keyMapEventRecord[n];
    }
    /**
     * The number of components in the list
     * @returns {number} Number of components in the list
     */
  }, {
    key: "getLength",
    value: function() {
      return this._list.length;
    }
    /**
     * The component options at particular position in the list
     * @param {number} position The position in the list
     * @returns {ComponentOptions} The component options at the position in the list
     */
  }, {
    key: "getAtPosition",
    value: function(n) {
      return this._list[n];
    }
    /**
     * Remove the component options at a position in the list
     * @param {number} position The position in the list to remove the options
     * return {void}
     */
  }, {
    key: "removeAtPosition",
    value: function(n) {
      this._list = SY(this._list, n);
      for (var r = n; r < this.getLength(); )
        this._idToIndex[this.getAtPosition(r).componentId] = r, r++;
    }
    /**
     * A plain JavaScript object representation of the component options list that can
     * be used for serialization or debugging
     * @returns {ComponentOptions[]} plain JavaScript object representation of the list
     */
  }, {
    key: "toJSON",
    value: function() {
      return this._list;
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_getLastIndex",
    value: function() {
      return this.getLength() - 1;
    }
    /**
     * Builds the internal representation that described the options passed to a hot keys
     * component
     * @param {ComponentId} componentId - Id of the component the options belong to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key maps
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handlers
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @returns {ComponentOptions} Options for the specified component
     * @private
     */
  }, {
    key: "_build",
    value: function(n, r, i, a) {
      var l = this._applyHardSequences(r, i), u = l.keyMap, f = l.handlers, d = this._buildActionDictionary(Eb({}, r, u), a, n);
      return {
        actions: d,
        handlers: f,
        componentId: n,
        options: a
      };
    }
  }, {
    key: "_isUpdatingComponentWithLongestSequence",
    value: function(n) {
      return n === this._getLongestSequenceComponentId();
    }
  }, {
    key: "_getLongestSequenceComponentId",
    value: function() {
      return this._longestSequenceComponentId;
    }
  }, {
    key: "_recalculateLongestSequence",
    value: function() {
      for (var n = this.getNewIterator(); n.next(); ) {
        var r = n.getComponent(), i = r.longestSequence, a = r.componentId;
        i > this.getLongestSequence() && (this._longestSequenceComponentId = a, this._longestSequence = i);
      }
    }
    /**
     * Applies hard sequences (handlers attached to actions with names that are valid
     * KeySequenceStrings) that implicitly define a corresponding action name.
     * @param {KeyMap} actionNameToKeyMap - KeyMap specified by HotKeys component
     * @param {HandlersMap} actionMap - HandlersMap specified by HotKeys component
     * @returns {{keyMap: {}, handlers: {}}} Object containing keymap and handlers map
     *        with the hard sequence actions applied
     * @private
     */
  }, {
    key: "_applyHardSequences",
    value: function(n, r) {
      return et.option("enableHardSequences") ? Object.keys(r).reduce(function(i, a) {
        var l = !!n[a];
        return !l && Ec.isValidKeySerialization(a) && (i.keyMap[a] = a), i.handlers[a] = r[a], i;
      }, {
        keyMap: {},
        handlers: {}
      }) : {
        keyMap: n,
        handlers: r
      };
    }
    /**
     * Returns a mapping between ActionNames and ActionConfiguration
     * @param {KeyMap} actionNameToKeyMap - Mapping of ActionNames to key sequences.
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @param {string} options.defaultKeyEvent - The default key event to use for any
     *        action that does not explicitly define one.
     * @param {ComponentId} componentId Index of the component the matcher belongs to
     * @returns {ActionDictionary} Map from ActionNames to ActionConfiguration
     * @private
     */
  }, {
    key: "_buildActionDictionary",
    value: function(n, r, i) {
      var a = this;
      return Object.keys(n).reduce(function(l, u) {
        var f = n[u], d = function() {
          return Wi(f) && or(f, "sequences") ? Es(f.sequences) : Es(f);
        }();
        return d.forEach(function(p) {
          var g = LY(p, r), _ = g.keySequence, y = g.keyEventType;
          a._addActionOptions(l, i, u, _, y);
        }), l;
      }, {});
    }
  }, {
    key: "_addActionOptions",
    value: function(n, r, i, a, l) {
      var u = kk.parse(a, {
        keyEventType: l
      }), f = u.sequence, d = u.combination;
      f.size > this.getLongestSequence() && (this._longestSequence = f.size, this._longestSequenceComponentId = r), this._keyMapEventRecord[l] = di.seen, n[i] || (n[i] = []), n[i].push(Eb({
        prefix: f.prefix,
        actionName: i,
        sequenceLength: f.size
      }, d));
    }
  }]), e;
}();
function LY(e, t) {
  if (Wi(e)) {
    var n = e.sequence, r = e.action;
    return {
      keySequence: n,
      keyEventType: lr(r) ? ue[t.defaultKeyEvent] : ue[r]
    };
  } else
    return {
      keySequence: e,
      keyEventType: ue[t.defaultKeyEvent]
    };
}
function Ob(e, t) {
  return e[e.length - (t + 1)];
}
var Ek = {
  Enter: !0,
  Backspace: !0,
  ArrowRight: !0,
  ArrowLeft: !0,
  ArrowUp: !0,
  ArrowDown: !0,
  /**
   * Caps lock is a strange case where it not only fails to trigger a keyup event when,
   * pressed with cmd, but it's keyup event is triggered when caps lock is toggled off
   */
  CapsLock: !0
};
for (var bd = 1; bd < 13; bd++)
  Ek["F".concat(bd)] = !0;
function Ok(e) {
  return e.length === 1 || or(Ek, e);
}
function Pb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      Pk(e, i, n[i]);
    });
  }
  return e;
}
function Pk(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function RY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function NY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function KY(e, t, n) {
  return t && NY(e.prototype, t), e;
}
var FY = /* @__PURE__ */ function() {
  function e() {
    RY(this, e), this._actionConfigs = {}, this._order = null;
  }
  return KY(e, [{
    key: "addMatch",
    value: function(n, r) {
      if (this._includesMatcherForCombination(n.id)) {
        var i = n.keyEventType, a = n.actionName, l = n.id;
        this._addHandlerToActionConfig(l, {
          keyEventType: i,
          actionName: a,
          handler: r
        });
      } else
        this._addNewActionConfig(n, r);
    }
    /**
     * Finds a MatchingActionConfig for a KeyCombination, ReactKeyName and
     * KeyEventType
     * @param {KeyCombination} keyCombination Record of key combinations
     *         to use in the match
     * @param {ReactKeyName} keyName Name of the key to use in the match
     * @param {KeyEventType} keyEventType The type of key event to use in the match
     * @returns {MatchingActionConfig|null} A MatchingActionOptions that matches the
     *          KeyCombination, ReactKeyName and KeyEventType
     */
  }, {
    key: "findMatch",
    value: function(n, r, i) {
      this._order || this._setOrder();
      var a = !0, l = !1, u = void 0;
      try {
        for (var f = this._order[Symbol.iterator](), d; !(a = (d = f.next()).done); a = !0) {
          var p = d.value, g = this._actionConfigs[p];
          if (this._matchesActionConfig(n, r, i, g))
            return g;
        }
      } catch (_) {
        l = !0, u = _;
      } finally {
        try {
          !a && f.return != null && f.return();
        } finally {
          if (l)
            throw u;
        }
      }
      return null;
    }
    /********************************************************************************
     * Presentation
     ********************************************************************************/
    /**
     * A plain JavaScript representation of the KeyCombinationMatcher, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the key combination matcher
     */
  }, {
    key: "toJSON",
    value: function() {
      return {
        actionConfigs: this._actionConfigs,
        order: this._order
      };
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_matchesActionConfig",
    value: function(n, r, i, a) {
      if (!$Y(n, a))
        return !1;
      var l = a.events[i];
      if (!l)
        return !1;
      var u = !1, f = Object.keys(a.keyDictionary).every(function(d) {
        return n.isEventTriggered(d, i) ? (r && r === n.getNormalizedKeyName(d) && (u = !n.wasEventPreviouslyTriggered(d, i)), !0) : !1;
      });
      return f && u;
    }
  }, {
    key: "_setOrder",
    value: function() {
      var n = Object.values(this._actionConfigs).reduce(function(r, i) {
        var a = i.id, l = i.size;
        return r[l] || (r[l] = []), r[l].push(a), r;
      }, {});
      this._order = Object.keys(n).sort(function(r, i) {
        return i - r;
      }).reduce(function(r, i) {
        return r.concat(n[i]);
      }, []);
    }
  }, {
    key: "_addNewActionConfig",
    value: function(n, r) {
      var i = n.prefix, a = n.sequenceLength, l = n.id, u = n.keyDictionary, f = n.size, d = n.keyEventType, p = n.actionName;
      this._setCombinationMatcher(l, {
        prefix: i,
        sequenceLength: a,
        id: l,
        keyDictionary: u,
        size: f,
        events: {}
      }), this._addHandlerToActionConfig(l, {
        keyEventType: d,
        actionName: p,
        handler: r
      });
    }
  }, {
    key: "_addHandlerToActionConfig",
    value: function(n, r) {
      var i = r.keyEventType, a = r.actionName, l = r.handler, u = this._getCombinationMatcher(n);
      this._setCombinationMatcher(n, Pb({}, u, {
        events: Pb({}, u.events, Pk({}, i, {
          actionName: a,
          handler: l
        }))
      }));
    }
  }, {
    key: "_setCombinationMatcher",
    value: function(n, r) {
      this._actionConfigs[n] = r;
    }
  }, {
    key: "_getCombinationMatcher",
    value: function(n) {
      return this._actionConfigs[n];
    }
  }, {
    key: "_includesMatcherForCombination",
    value: function(n) {
      return !!this._getCombinationMatcher(n);
    }
  }]), e;
}();
function $Y(e, t) {
  var n = Ck(t.keyDictionary);
  return et.option("allowCombinationSubmatches") || HY(e) ? e.getNumberOfKeys() >= n : e.getNumberOfKeys() === n;
}
function HY(e) {
  return e.isKeyStillPressed("Meta") ? e.some(function(t) {
    return Ok(t);
  }) : !1;
}
function zY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function UY(e, t, n) {
  return t && BY(e.prototype, t), e;
}
var jY = /* @__PURE__ */ function() {
  function e() {
    zY(this, e), this._combinationMatchers = {}, this._eventRecord = Ri.newRecord();
  }
  return UY(e, [{
    key: "addMatch",
    value: function(n, r) {
      var i = this._getOrCreateCombinationMatcher(n.prefix);
      i.addMatch(n, r), Ri.setBit(this._eventRecord, n.keyEventType, di.seen), (!this._longestSequence || this._longestSequence < n.sequenceLength) && (this._longestSequence = n.sequenceLength);
    }
    /**
     * Attempts to find a match from the list of possible matches previously registered
     * for a given key event and key combination history
     * @param {KeyHistory} keyHistory History to attempt to
     *        find a match for
     * @param {ReactKeyName} key Name of the key to find a match for
     * @param {KeyEventType} keyEventType Type of event to find a match
     * @returns {MatchingActionConfig|null} First MatchingActionOptions that matches
     */
  }, {
    key: "findMatch",
    value: function(n, r, i) {
      var a = this._findCombinationMatcher(n);
      return a ? a.findMatch(n.getCurrentCombination(), n.getCurrentCombination().getNormalizedKeyName(r), i) : null;
    }
    /**
     * Whether a possible match has been registered for a key event type
     * @param {KeyEventType} eventType Type of event
     * @returns {boolean} true if at least one possible match has been registered for
     *        the event
     */
  }, {
    key: "hasMatchesForEventType",
    value: function(n) {
      return !!this._eventRecord[n];
    }
    /**
     * The number of combinations involved for the ActionConfiguration with the longest
     * key sequence
     * @returns {number} Number of combinations in the longest sequence
     */
  }, {
    key: "getLongestSequence",
    value: function() {
      return this._longestSequence;
    }
    /********************************************************************************
     * Presentation
     ********************************************************************************/
    /**
     * A plain JavaScript representation of the KeyMapMatcher, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the key map matcher
     */
  }, {
    key: "toJSON",
    value: function() {
      var n = this;
      return Object.keys(this._combinationMatchers).reduce(function(r, i) {
        var a = n._combinationMatchers[i];
        return r[i] = a.toJSON(), r;
      }, {});
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_getOrCreateCombinationMatcher",
    value: function(n) {
      return this._combinationMatchers[n] || (this._combinationMatchers[n] = new FY()), this._combinationMatchers[n];
    }
  }, {
    key: "_findCombinationMatcher",
    value: function(n) {
      var r = n.getMostRecentCombinations(this.getLongestSequence());
      if (r.length === 0)
        return this._combinationMatchers[""];
      for (var i = r.map(function(k) {
        return k.getIds();
      }), a = i.map(function(k) {
        return k.length;
      }), l = new Array(i.length).fill(0), u = !1; !u; ) {
        var f = l.map(function(k, x) {
          return i[x][k];
        }), d = f.join(" ");
        if (this._combinationMatchers[d])
          return this._combinationMatchers[d];
        for (var p = 0, g = !0; g && p < l.length; ) {
          var _ = Ob(l, p), y = (_ + 1) % (Ob(a, p) || 1);
          l[l.length - (p + 1)] = y, g = y === 0, g && p++;
        }
        u = p === l.length;
      }
    }
  }]), e;
}();
function WY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YY(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function GY(e, t, n) {
  return t && YY(e.prototype, t), e;
}
var qY = /* @__PURE__ */ function() {
  function e(t) {
    WY(this, e), this._keyMapMatchers = [], this._unmatchedHandlerStatus = [], this._handlersDictionary = {}, this._keySequencesDictionary = {};
    for (var n = t.getNewIterator(); n.next(); ) {
      var r = n.getComponent(), i = r.handlers;
      this._unmatchedHandlerStatus.push([Object.keys(i).length, {}]), this._keyMapMatchers.push(new jY());
    }
    this._componentList = t, this._componentListIterator = t.getNewIterator();
  }
  return GY(e, [{
    key: "getKeyHistoryMatcher",
    value: function(n) {
      if (this._componentHasUnmatchedHandlers(n))
        for (; this._componentListIterator.next(); )
          this._addHandlersFromComponent(), this._addActionsFromComponent();
      return this._getKeyHistoryMatcher(n);
    }
    /**
     * Whether a component has one or more actions bound to an event type
     * @param {number} componentPosition Position of the component
     * @param {KeyEventType} keyEventType
     * @returns {boolean} true if the component has an action bound to the event type
     */
  }, {
    key: "componentHasActionsBoundToEventType",
    value: function(n, r) {
      return this.getKeyHistoryMatcher(n).hasMatchesForEventType(r);
    }
    /**
     * Finds matcher for sequence and current key event for a component at a position
     * @param {number} componentPosition Position of the component
     * @param {KeyHistory} keyHistory History of key combinations to match
     *        against actions defined in component
     * @param {ReactKeyName} keyName Name of the key the current event relates to
     * @param {KeyEventType} keyEventType Type of key event
     * @returns {Object|null}
     */
  }, {
    key: "findMatchingKeySequenceInComponent",
    value: function(n, r, i, a) {
      return this.componentHasActionsBoundToEventType(n, a) ? this.getKeyHistoryMatcher(n).findMatch(r, i, a) : null;
    }
    /********************************************************************************
     * Private methods
     *********************************************************************************/
  }, {
    key: "_getKeyHistoryMatcher",
    value: function(n) {
      return this._keyMapMatchers[n];
    }
  }, {
    key: "_addActionsFromComponent",
    value: function() {
      var n = this, r = this._componentListIterator.getComponent(), i = r.actions;
      Object.keys(i).forEach(function(a) {
        var l = n._getHandlers(a);
        if (l) {
          var u = l[0], f = n._componentList.getAtPosition(u).handlers[a], d = n._getKeyHistoryMatcher(u), p = i[a];
          p.forEach(function(g) {
            var _ = [g.prefix, g.id].join(" ");
            n._isClosestHandlerFound(_, g) || (d.addMatch(g, f), n._addKeySequence(_, [u, g.keyEventType]));
          }), l.forEach(function(g) {
            var _ = n._getUnmatchedHandlerStatus(g);
            _[1][a] || (_[1][a] = !0, _[0]--);
          });
        }
      });
    }
  }, {
    key: "_getHandlers",
    value: function(n) {
      return this._handlersDictionary[n];
    }
  }, {
    key: "_addHandlersFromComponent",
    value: function() {
      var n = this, r = this._componentListIterator.getComponent(), i = r.handlers;
      Object.keys(i).forEach(function(a) {
        n._addHandler(a);
      });
    }
  }, {
    key: "_addHandler",
    value: function(n) {
      this._handlersDictionary[n] || (this._handlersDictionary[n] = []), this._handlersDictionary[n].push(this._componentListIterator.getPosition());
    }
  }, {
    key: "_addKeySequence",
    value: function(n, r) {
      this._keySequencesDictionary[n] || (this._keySequencesDictionary[n] = []), this._keySequencesDictionary[n].push(r);
    }
  }, {
    key: "_componentHasUnmatchedHandlers",
    value: function(n) {
      return this._getUnmatchedHandlerStatus(n)[0] > 0;
    }
  }, {
    key: "_getUnmatchedHandlerStatus",
    value: function(n) {
      return this._unmatchedHandlerStatus[n];
    }
  }, {
    key: "_isClosestHandlerFound",
    value: function(n, r) {
      return this._keySequencesDictionary[n] && this._keySequencesDictionary[n].some(function(i) {
        return i[1] === r.keyEventType;
      });
    }
  }]), e;
}();
function Gl(e, t, n) {
  return n.forEach(function(r) {
    or(e, r) && (t[r] = e[r]);
  }), t;
}
function mo(e) {
  switch (parseInt(e, 10)) {
    case 0:
      return "keydown";
    case 1:
      return "keypress";
    default:
      return "keyup";
  }
}
function ar(e) {
  return JSON.stringify(e, VY, 4);
}
function VY(e, t) {
  return typeof t == "function" ? t.toString() : t;
}
function XY(e) {
  return !_k(e);
}
function vo(e) {
  return e.simulated ? di.simulated : di.seen;
}
function ZY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      JY(e, i, n[i]);
    });
  }
  return e;
}
function JY(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function QY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tG(e, t, n) {
  return t && eG(e.prototype, t), e;
}
var Ib = ["sequence", "action"], Tb = ["name", "description", "group"], Ik = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    QY(this, e), this.logger = t.logger || new kr("warn"), this.componentId = -1, this.keyEventManager = n, this._componentTree = new bY(), this.rootComponentId = null, this._reset(), this.resetKeyHistory();
  }
  return tG(e, [{
    key: "_reset",
    value: function() {
      this.componentList = new DY(), this._initHandlerResolutionState();
    }
  }, {
    key: "_newKeyHistory",
    value: function() {
      return new Sb({
        maxLength: this.componentList.getLongestSequence()
      });
    }
  }, {
    key: "getKeyHistory",
    value: function() {
      return this._keyHistory ? this._keyHistory : (this._keyHistory = this._newKeyHistory(), this._keyHistory);
    }
    /**
     * Resets the state of the values used to resolve which handler function should be
     * called when key events match a registered key map
     * @protected
     */
  }, {
    key: "_initHandlerResolutionState",
    value: function() {
      this._actionResolver = null;
    }
    /**
     * Reset the state values that record the current and recent state of key events
     * @param {Object} options An options hash
     * @param {boolean} options.force Whether to force a hard reset of the key
     *        combination history.
     */
  }, {
    key: "resetKeyHistory",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.keypressEventsToSimulate = [], this.keyupEventsToSimulate = [], this.getKeyHistory().any() && !n.force ? this._keyHistory = new Sb({
        maxLength: this.componentList.getLongestSequence()
      }, new lu(this.getCurrentCombination().keysStillPressedDict())) : this._keyHistory = this._newKeyHistory();
    }
    /********************************************************************************
     * Generating key maps
     ********************************************************************************/
    /**
     * Returns a mapping of all of the application's actions and the key sequences
     * needed to trigger them.
     *
     * @returns {ApplicationKeyMap} The application's key map
     */
  }, {
    key: "getApplicationKeyMap",
    value: function() {
      return this.rootComponentId === null ? {} : this._buildApplicationKeyMap([this.rootComponentId], {});
    }
  }, {
    key: "_buildApplicationKeyMap",
    value: function(n, r) {
      var i = this;
      return n.forEach(function(a) {
        var l = i._componentTree.get(a), u = l.childIds, f = l.keyMap;
        f && Object.keys(f).forEach(function(d) {
          var p = f[d];
          r[d] = {}, Wi(p) ? or(p, "sequences") ? (Gl(p, r[d], Tb), r[d].sequences = i._createSequenceFromConfig(p.sequences)) : (Gl(p, r[d], Tb), r[d].sequences = [Gl(p, {}, Ib)]) : r[d].sequences = i._createSequenceFromConfig(p);
        }), i._buildApplicationKeyMap(u, r);
      }), r;
    }
  }, {
    key: "_createSequenceFromConfig",
    value: function(n) {
      return Es(n).map(function(r) {
        return Wi(r) ? Gl(r, {}, Ib) : {
          sequence: r
        };
      });
    }
    /********************************************************************************
     * Registering key maps
     ********************************************************************************/
    /**
     * Registers a new mounted component's key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */
  }, {
    key: "registerKeyMap",
    value: function(n) {
      return this.componentId += 1, this._componentTree.add(this.componentId, n), this.logger.verbose(this._logPrefix(this.componentId), `Registered component:
`, "".concat(ar(this._componentTree.get(this.componentId)))), this.componentId;
    }
    /**
     * Re-registers (updates) a mounted component's key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */
  }, {
    key: "reregisterKeyMap",
    value: function(n, r) {
      this._componentTree.update(n, r);
    }
    /**
     * Registers that a component has now mounted, and declares its parent hot keys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent hot keys component
     */
  }, {
    key: "registerComponentMount",
    value: function(n, r) {
      lr(r) ? this.rootComponentId = n : this._componentTree.setParent(n, r), this.logger.verbose(this._logPrefix(n), `Registered component mount:
`, "".concat(ar(this._componentTree.get(n))));
    }
    /**
     * De-registers (removes) a mounted component's key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap
     *        belongs to
     */
  }, {
    key: "deregisterKeyMap",
    value: function(n) {
      this._componentTree.remove(n), this.logger.verbose(this._logPrefix(n), `De-registered component. Remaining component Registry:
`, "".concat(ar(this._componentTree.toJSON()))), n === this.rootComponentId && (this.rootComponentId = null);
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/
    /**
     * Registers the hotkeys defined by a HotKeys component
     * @param {ComponentId} componentId - Index of the component
     * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
     *        in the HotKeys component
     * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
     *        defined in the HotKeys component
     * @param {Object} options - Hash of options that configure how the key map is built.
     * @protected
     */
  }, {
    key: "_addComponent",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
      this.componentList.add(n, r, i, a), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence());
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/
    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     * @protected
     */
  }, {
    key: "_allKeysAreReleased",
    value: function() {
      return this.getCurrentCombination().hasEnded();
    }
  }, {
    key: "getCurrentCombination",
    value: function() {
      return this.getKeyHistory().getCurrentCombination();
    }
  }, {
    key: "_shouldSimulate",
    value: function(n, r) {
      var i = XY(r), a = this.getCurrentCombination();
      return n === ue.keypress ? !i || i && a.isKeyStillPressed("Meta") : n === ue.keyup ? Ok(r) && a.isKeyReleased("Meta") : !1;
    }
  }, {
    key: "_cloneAndMergeEvent",
    value: function(n, r) {
      var i = Object.keys(_d).reduce(function(a, l) {
        return a[l] = n[l], a;
      }, {});
      return ZY({}, i, r);
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/
  }, {
    key: "_callClosestMatchingHandler",
    value: function(n, r, i, a, l) {
      for (this._actionResolver || (this._actionResolver = new qY(this.componentList)); l <= a; ) {
        var u = this._actionResolver.getKeyHistoryMatcher(l);
        this.logger.verbose(this._logPrefix(l), `Internal key mapping:
`, "".concat(ar(u.toJSON())));
        var f = this._actionResolver.findMatchingKeySequenceInComponent(l, this.getKeyHistory(), r, i), d = this.getCurrentCombination();
        if (f) {
          var p = f.events[i];
          if (et.option("allowCombinationSubmatches")) {
            var g = Ec.serialize(f.keyDictionary);
            this.logger.debug(this._logPrefix(l), "Found action that matches '".concat(d.describe(), "' (sub-match: '").concat(g, "'): ").concat(p.actionName, ". Calling handler . . ."));
          } else
            this.logger.debug(this._logPrefix(l), "Found action that matches '".concat(d.describe(), "': ").concat(p.actionName, ". Calling handler . . ."));
          return p.handler(n), this._stopEventPropagationAfterHandlingIfEnabled(n, l), !0;
        } else if (this._actionResolver.componentHasActionsBoundToEventType(l, i)) {
          var _ = mo(i);
          this.logger.debug(this._logPrefix(l), "No matching actions found for '".concat(d.describe(), "' ").concat(_, "."));
        } else
          this.logger.debug(this._logPrefix(l), "Doesn't define a handler for '".concat(d.describe(), "' ").concat(mo(i), "."));
        l++;
      }
    }
  }, {
    key: "_stopEventPropagationAfterHandlingIfEnabled",
    value: function(n, r) {
      return et.option("stopEventPropagationAfterHandling") ? (this._stopEventPropagation(n, r), !0) : !1;
    }
  }, {
    key: "_stopEventPropagation",
    value: function(n, r) {
      throw new Error("_stopEventPropagation must be overridden by a subclass");
    }
    /**
     * Synchronises the key combination history to match the modifier key flag attributes
     * on new key events
     * @param {KeyboardEvent} event - Event to check the modifier flags for
     * @param {string} key - Name of key that events relates to
     * @param {KeyEventType} keyEventType - The record index of the current
     *        key event type
     * @protected
     */
  }, {
    key: "_checkForModifierFlagDiscrepancies",
    value: function(n, r, i) {
      var a = this;
      Object.keys(_d).forEach(function(l) {
        if (!(r === l && i === ue.keyup)) {
          var u = a.getCurrentCombination(), f = u.isKeyStillPressed(l);
          _d[l].forEach(function(d) {
            n[d] === !1 && f && u.setKeyState(l, ue.keyup, vo(n));
          });
        }
      });
    }
    /**
     * Returns a prefix for all log entries related to the current event strategy
     * @protected
     * @abstract
     */
  }, {
    key: "_logPrefix",
    value: function() {
    }
  }]), e;
}();
function nG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function iG(e, t, n) {
  return n && rG(e, n), e;
}
var Os = /* @__PURE__ */ function() {
  function e() {
    nG(this, e);
  }
  return iG(e, null, [{
    key: "getId",
    /**
     * Globally unique event id
     * @typedef {number} EventId
     */
    /**
     * Get the current event id
     * @returns {EventId} The current event ID
     */
    value: function() {
      return lr(this._id) && (this._id = 0), this._id;
    }
    /**
     * Increment the current event id
     */
  }, {
    key: "incrementId",
    value: function() {
      this._id = this.getId() + 1;
    }
  }]), e;
}();
function oG(e) {
  var t, n = e.keyCode;
  return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
}
var aG = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
function sG(e) {
  if (e.key) {
    var t = aG[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  if (e.type === "keypress") {
    var n = oG(e);
    return n === 13 ? "Enter" : String.fromCharCode(n);
  }
  return e.type === "keydown" || e.type === "keyup" ? vk[e.keyCode] || "Unidentified" : "";
}
function la(e) {
  var t = function() {
    var n = et.option("customKeyCodes"), r = e.keyCode || e.charCode;
    return or(n, r) ? n[r] : e.nativeEvent ? e.key : sG(e);
  }();
  return t === "+" ? "plus" : t;
}
function zu(e) {
  return e === "Meta";
}
function Bt(e, t, n) {
  var r = "'".concat(t, "' ").concat(mo(n));
  return e.simulated ? "(simulated) ".concat(r) : r;
}
var mt = {
  unseen: 0,
  ignored: 1,
  seen: 2,
  handled: 4
};
function lG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cG(e, t, n) {
  return t && uG(e.prototype, t), e;
}
var fG = /* @__PURE__ */ function() {
  function e(t, n) {
    var r = n.logger, i = n.logPrefix;
    lG(this, e), this._componentList = t, this._previousPropagation = null, this.logger = r, this._logPrefix = i, this._reset();
  }
  return cG(e, [{
    key: "_reset",
    value: function() {
      this._previousPosition = -1, this._position = -1, this._actionHandled = !1, this._ignoreEvent = !1, this._observeIgnoredEvents = !1, this._stopping = !1, this._componentId = null, this._key = null, this._type = null;
    }
    /********************************************************************************
     * New event propagation
     *********************************************************************************/
    /**
     * Whether the current propagation step is the first one
     * @returns {boolean} true if this is the first propagation step
     */
  }, {
    key: "isFirstPropagationStep",
    value: function() {
      var n = this.getPreviousPosition();
      return n === -1 || n >= this._position;
    }
    /**
     * Whether the propagation is for a particular key
     * @param {ReactKeyName} keyName The name of the key to query
     * @returns {boolean} true if the event propagation is for the key
     */
  }, {
    key: "isForKey",
    value: function(n) {
      return this._key === n;
    }
    /**
     * The type of keyboard event that is propagating
     * @param {KeyEventType} keyEventType The type of keyboard event to query
     * @returns {boolean} true if the keyboard event propagating is that type
     */
  }, {
    key: "isForEventType",
    value: function(n) {
      return this._type === n;
    }
    /********************************************************************************
     * Propagation steps
     *********************************************************************************/
    /**
     * Begin a new propagation step, called as a before callback. i.e. the first thing
     * after an event has propagated to a new hot keys component
     * @param {ComponentId} componentId The id of the component that has just had the
     *        event propagate up to it
     * @param {KeyboardEvent} event The actual KeyboardEvent that is propagating
     * @param {ReactKeyName} key The name of the key the event relates to
     * @param {KeyEventType} type The type of keyboard event
     * @returns {boolean} true if the event should be observed, otherwise false if it
     *        should be ignored.
     */
  }, {
    key: "startNewPropagationStep",
    value: function(n, r, i, a) {
      return this._position = this._componentList.getIndexById(n), this._componentId = n, this.isFirstPropagationStep() && (Os.incrementId(), this._key = r.key, this._type = a), r.repeat && et.option("ignoreRepeatedEventsWhenKeyHeldDown") ? (this.logger.debug(this._logPrefix(n), "Ignored repeated ".concat(Bt(r, i, ue.keydown), " event.")), this.ignoreEvent(r), !1) : !0;
    }
    /**
     * Ends handling of a propagation step and performs cleanup. Called as a after callback.
     * @returns {void}
     */
  }, {
    key: "finishPropagationStep",
    value: function() {
      this.isStopped() || this._componentList.isRoot(this._componentId) ? (this._previousPropagation = this._clone(), this._reset()) : this._previousPosition = this._position;
    }
    /********************************************************************************
     * Previous propagation
     *********************************************************************************/
    /**
     * The previous event propagation, either for an earlier event type of the same key
     * or a different key's event propagation
     * @returns {EventPropagator} The propagator for the previous event propagation
     */
  }, {
    key: "getPreviousPropagation",
    value: function() {
      return this._previousPropagation || (this._previousPropagation = this._clone({
        copyState: !1
      })), this._previousPropagation;
    }
    /**
     * The position of the component that last had the current propagating event
     * propagate through it
     * @returns {number}
     */
  }, {
    key: "getPreviousPosition",
    value: function() {
      return this._previousPosition;
    }
    /********************************************************************************
     * Ignoring events
     *********************************************************************************/
    /**
     * Set the observeIgnoredEvents flag, to observe (not ignore) keyboard events that
     * match the ignored events filter
     * @returns {void}
     */
  }, {
    key: "observeIgnoredEvents",
    value: function() {
      this._observeIgnoredEvents = !0;
    }
    /**
     * Record that an event is being ignored for the rest of its propagation and, if
     * enabled, stop it from further propagation entirely.
     * @param {KeyboardEvent} event Event to ignore
     * @returns {boolean} true if the event was stopped from further propagation,
     *          otherwise false.
     */
  }, {
    key: "ignoreEvent",
    value: function(n) {
      return this.setIgnoreEvent(!0), this.isIgnoringEvent() && et.option("stopEventPropagationAfterIgnoring") ? (this.logger.debug(this._logPrefix(this._componentId), "Stopping further event propagation."), this.stop(n), this.finishPropagationStep(), !0) : !1;
    }
    /**
     * Set the ignore event flag, to ignore the current event for the rest of its
     * propagation
     * @param {boolean} ignore true to ignore the event, or false to not ignore it
     * @returns {void}
     */
  }, {
    key: "setIgnoreEvent",
    value: function(n) {
      this._ignoreEvent = n;
    }
    /**
     * Whether to ignore the currently propagating event or not
     * @returns {boolean} true if the event is being ignored for the current propagation
     */
  }, {
    key: "isIgnoringEvent",
    value: function() {
      return !this._observeIgnoredEvents && this._ignoreEvent;
    }
    /********************************************************************************
     * Stopping propagation
     *********************************************************************************/
    /**
     * Whether the event has been stopped from further propagation
     * @returns {boolean} true if the event is being stopped
     */
  }, {
    key: "isStopped",
    value: function() {
      return this._stopping;
    }
    /**
     * Stop an event from further propagation
     * @param {KeyboardEvent} event Event to call stopPropagation() on
     * @returns {boolean} true if the event was stopped and false if it was already
     *          stopped
     */
  }, {
    key: "stop",
    value: function(n) {
      return this.isStopped() ? !1 : (this._stopping = !0, n.simulated || n.stopPropagation(), !0);
    }
    /**
     * Whether the keyboard event has yet propagated to the root hot keys component
     * @returns {boolean} true if it still has hotkeys components to propagate to
     *          before being complete.
     */
  }, {
    key: "isPendingPropagation",
    value: function() {
      var n = this.getPreviousPosition();
      return n !== -1 && n + 1 < this._position;
    }
    /**
     * If the action has already been handled
     * @returns {boolean} true if the action has already been handled
     */
  }, {
    key: "isHandled",
    value: function() {
      return this._actionHandled;
    }
    /**
     * Record that the current propagating event matched and action and its handler
     * has been called.
     * @returns {void}
     */
  }, {
    key: "setHandled",
    value: function() {
      this._actionHandled = !0;
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/
  }, {
    key: "_clone",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.copyState, i = r === void 0 ? !0 : r, a = new e(this._componentList, {
        logger: this.logger,
        logPrefix: this._logPrefix
      });
      return i && Object.assign(a, this), a;
    }
  }]), e;
}();
function cu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cu = function(n) {
    return typeof n;
  } : cu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, cu(e);
}
function dG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function pG(e, t, n) {
  return t && hG(e.prototype, t), e;
}
function gG(e, t) {
  return t && (cu(t) === "object" || typeof t == "function") ? t : yG(e);
}
function yG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fu(e, t, n) {
  return typeof Reflect < "u" && Reflect.get ? fu = Reflect.get : fu = function(i, a, l) {
    var u = mG(i, a);
    if (u) {
      var f = Object.getOwnPropertyDescriptor(u, a);
      return f.get ? f.get.call(l) : f.value;
    }
  }, fu(e, t, n || e);
}
function mG(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Ps(e), e !== null); )
    ;
  return e;
}
function Ps(e) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ps(e);
}
function vG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ih(e, t);
}
function Ih(e, t) {
  return Ih = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Ih(e, t);
}
var _G = /* @__PURE__ */ function(e) {
  vG(t, e);
  function t() {
    var n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    return dG(this, t), n = gG(this, Ps(t).call(this, r, i)), n.focusTreeId = 0, n;
  }
  return pG(t, [{
    key: "_reset",
    value: function() {
      fu(Ps(t.prototype), "_reset", this).call(this), this.keypressEventsToSimulate = [], this.focusTreeId += 1, this.eventPropagator = new fG(this.componentList, {
        logger: this.logger,
        logPrefix: this._logPrefix.bind(this)
      });
    }
    /********************************************************************************
     * Registering key maps and handlers
     ********************************************************************************/
    /**
     * Registers the actions and handlers of a HotKeys component that has gained focus
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @returns {FocusTreeId|undefined} The current focus tree's ID or undefined if the
     *        the <tt>componentId</tt> has already been registered (shouldn't normally
     *        occur).
     */
  }, {
    key: "enableHotKeys",
    value: function(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
      if (this.resetOnNextFocus && (this._reset(), this.resetOnNextFocus = !1), !this.componentList.containsId(r))
        return this._addComponent(r, i, a, l), this.logger.debug(this._logPrefix(r, {
          eventId: !1
        }), `Focused. 
`), this.logger.verbose(this._logPrefix(r, {
          eventId: !1
        }), `Component options:
`, ar(this.componentList.get(r))), this.focusTreeId;
    }
    /**
     * Handles when a HotKeys component that is in focus updates its props and changes
     * either the keyMap or handlers prop value
     * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
     *        Used to identify (and ignore) stale updates.
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
     * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
     *        functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     */
  }, {
    key: "updateEnabledHotKeys",
    value: function(r, i) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 ? arguments[4] : void 0;
      r !== this.focusTreeId || !this.componentList.containsId(i) || (this.componentList.update(i, a, l, u), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this.logger.debug(this._logPrefix(i, {
        focusTreeId: r,
        eventId: !1
      }), "Received new props."), this._initHandlerResolutionState(), this.logger.verbose(this._logPrefix(i, {
        focusTreeId: r,
        eventId: !1
      }), `Component options:
`, ar(this.componentList.get(i))));
    }
    /**
     * Handles when a component loses focus by resetting the internal state, ready to
     * receive the next tree of focused HotKeys components
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
     *        apart of
     * @param {ComponentId} componentId - Index of component that is blurring
     * @returns {boolean} Whether the component still has event propagation yet to handle
     */
  }, {
    key: "disableHotKeys",
    value: function(r, i) {
      this.resetOnNextFocus || (this.resetOnNextFocus = !0);
      var a = this.eventPropagator.isPendingPropagation();
      return this.logger.debug("".concat(this._logPrefix(i, {
        focusTreeId: r,
        eventId: !1
      })), "Lost focus".concat(a ? " (Key event has yet to propagate through it)" : "", ".")), a;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/
    /**
     * @typedef {KeyboardEvent} SyntheticKeyboardEvent
     * @property {function} persist
     */
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {SyntheticKeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The id of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event is handled.
     * @returns Whether the event was discarded because it was part of an old focus tree
     */
  }, {
    key: "handleKeydown",
    value: function(r, i, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = la(r);
      if (i !== this.focusTreeId)
        return this.logger.debug(this._logPrefix(a), "Ignored ".concat(Bt(r, u, ue.keydown), " event because it had an old focus tree id: ").concat(i, ".")), this.eventPropagator.ignoreEvent(r), !0;
      var f = this.eventPropagator.startNewPropagationStep(a, r, u, ue.keydown);
      if (f) {
        var d = this._howToHandleKeyEvent(r, i, a, u, l, ue.keydown);
        if (d === mt.handled) {
          var p = vo(r), g = this.getCurrentCombination();
          g.isKeyIncluded(u) || g.isEnding() ? this._startAndLogNewKeyCombination(u, i, a, p) : this._addToAndLogCurrentKeyCombination(u, ue.keydown, i, a, p), this._callHandlerIfActionNotHandled(r, u, ue.keydown, a, i);
        }
        return this._simulateKeyPressForNonPrintableKeys(r, u, i, a, l), this.eventPropagator.finishPropagationStep(), !1;
      }
    }
  }, {
    key: "_howToHandleKeyEvent",
    value: function(r, i, a, l, u, f) {
      if (this.eventPropagator.isFirstPropagationStep()) {
        if (u.ignoreEventsCondition(r) && this.eventPropagator.ignoreEvent(r))
          return this._eventIsToBeIgnored(r, a, l, f);
        this.logger.debug(this._logPrefix(a), "New ".concat(Bt(r, l, f), " event.")), this._checkForModifierFlagDiscrepancies(r, l, f);
      } else if (this.eventPropagator.isIgnoringEvent())
        return this._eventIsToBeIgnored(r, a, l, f);
      return mt.handled;
    }
  }, {
    key: "_eventIsToBeIgnored",
    value: function(r, i, a, l) {
      return this.logger.debug(this._logPrefix(i), "Ignored ".concat(Bt(r, a, l), " event because ignoreEventsFilter rejected it.")), mt.ignored;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether the HotKeys component should discard its current focus
     *        tree Id, because it belongs to an old focus tree.
     */
  }, {
    key: "handleKeyPress",
    value: function(r, i, a, l) {
      var u = la(r), f = this.getCurrentCombination();
      if (f.isKeyPressSimulated(u))
        return this.logger.debug(this._logPrefix(a), "Ignored ".concat(Bt(r, u, ue.keypress), " as it was not expected, and has already been simulated.")), this.eventPropagator.ignoreEvent(r), !0;
      var d = this.eventPropagator.startNewPropagationStep(a, r, u, ue.keypress);
      if (d) {
        var p = i !== this.focusTreeId, g = this._howToHandleKeyEvent(r, i, a, u, l, ue.keypress);
        return this.eventPropagator.isFirstPropagationStep(a) && f.isKeyIncluded(u) && this._addToAndLogCurrentKeyCombination(u, ue.keypress, i, a, vo(r)), g === mt.handled && this._callHandlerIfActionNotHandled(r, u, ue.keypress, a, i), this.eventPropagator.finishPropagationStep(), p;
      }
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options Hash of options that configure how the event
     *        is handled.
     * @returns {boolean} Whether HotKeys component should discard its current focusTreeId
     *        because it's stale (part of an old focus tree)
     */
  }, {
    key: "handleKeyUp",
    value: function(r, i, a, l) {
      var u = la(r), f = this.getCurrentCombination();
      if (f.isKeyUpSimulated(u))
        return this.logger.debug(this._logPrefix(a), "Ignored ".concat(Bt(r, u, ue.keyup), " as it was not expected, and has already been simulated.")), this.eventPropagator.ignoreEvent(r), !0;
      var d = this.eventPropagator.startNewPropagationStep(a, r, u, ue.keyup);
      if (d) {
        var p = i !== this.focusTreeId, g = this._howToHandleKeyEvent(r, i, a, u, l, ue.keyup);
        return this.eventPropagator.isFirstPropagationStep(a) && f.isKeyIncluded(u) && this._addToAndLogCurrentKeyCombination(u, ue.keyup, i, a, vo(r)), g === mt.handled && this._callHandlerIfActionNotHandled(r, u, ue.keyup, a, i), this._simulateKeyUpEventsHiddenByCmd(r, u, i, a, l), this.eventPropagator.finishPropagationStep(), p;
      }
    }
    /**
     * Closes any hanging key combinations that have not received the key event indicated
     * by recordIndex.
     * @param {KeyName} keyName The name of the key whose state should be updated if it
     *        is currently set to keydown or keypress.
     * @param {KeyEventType} recordIndex Index of key event to move the key state
     *        up to.
     */
  }, {
    key: "closeHangingKeyCombination",
    value: function(r, i) {
      var a = this.getCurrentCombination();
      a.isKeyIncluded(r) && !a.isEventTriggered(r, i) && a.setKeyState(r, i, di.simulated);
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function(r, i, a, l, u) {
      this._handleEventSimulation("keypressEventsToSimulate", "simulatePendingKeyPressEvents", this._shouldSimulate(ue.keypress, i), {
        event: r,
        key: i,
        focusTreeId: a,
        componentId: l,
        options: u
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function(r, i, a, l, u) {
      var f = this;
      zu(i) && this.getCurrentCombination().forEachKey(function(d) {
        zu(d) || f._handleEventSimulation("keyupEventsToSimulate", "simulatePendingKeyUpEvents", f._shouldSimulate(ue.keyup, d), {
          event: r,
          key: d,
          focusTreeId: a,
          componentId: l,
          options: u
        });
      });
    }
  }, {
    key: "_stopEventPropagation",
    value: function(r, i) {
      this.eventPropagator.stop(r) && this.logger.debug(this._logPrefix(i), "Stopping further event propagation.");
    }
  }, {
    key: "getEventPropagator",
    value: function() {
      return this.eventPropagator;
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function(r, i, a, l) {
      this.getKeyHistory().startNewKeyCombination(r, l), this.logger.verbose(this._logPrefix(a, {
        focusTreeId: i
      }), "Started a new combination with '".concat(r, "'.")), this.logger.verbose(this._logPrefix(a, {
        focusTreeId: i
      }), "Key history: ".concat(ar(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function(r, i, a, l, u) {
      this.getKeyHistory().addKeyToCurrentCombination(r, i, u), i === ue.keydown && this.logger.verbose(this._logPrefix(l, {
        focusTreeId: a
      }), "Added '".concat(r, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'.")), this.logger.verbose(this._logPrefix(l, {
        focusTreeId: a
      }), "Key history: ".concat(ar(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/
  }, {
    key: "_handleEventSimulation",
    value: function(r, i, a, l) {
      var u = l.event, f = l.key, d = l.focusTreeId, p = l.componentId, g = l.options;
      if (a && et.option("simulateMissingKeyPressEvents")) {
        var _ = this._cloneAndMergeEvent(u, {
          key: f,
          simulated: !0
        });
        this[r].push({
          event: _,
          focusTreeId: d,
          componentId: p,
          options: g
        });
      }
      (this.componentList.isRoot(p) || this.eventPropagator.isStopped()) && (this.keyEventManager.isGlobalListenersBound() || this[i]());
    }
  }, {
    key: "simulatePendingKeyPressEvents",
    value: function() {
      this._simulatePendingKeyEvents("keypressEventsToSimulate", "handleKeyPress");
    }
  }, {
    key: "simulatePendingKeyUpEvents",
    value: function() {
      this._simulatePendingKeyEvents("keyupEventsToSimulate", "handleKeyUp");
    }
  }, {
    key: "_simulatePendingKeyEvents",
    value: function(r, i) {
      var a = this;
      this[r].length > 0 && Os.incrementId(), this[r].forEach(function(l) {
        var u = l.event, f = l.focusTreeId, d = l.componentId, p = l.options;
        a[i](u, f, d, p);
      }), this[r] = [];
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/
    /**
     * Calls the first handler that matches the current key event if the action has not
     * already been handled in a more deeply nested component
     * @param {KeyboardEvent} event Keyboard event object to be passed to the handler
     * @param {NormalizedKeyName} keyName Normalized key name
     * @param {KeyEventType} keyEventType The record index of the current key event type
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId Index of the component that is currently handling
     *        the keyboard event
     * @private
     */
  }, {
    key: "_callHandlerIfActionNotHandled",
    value: function(r, i, a, l, u) {
      var f = mo(a), d = this.getCurrentCombination().describe();
      if (!this.componentList.anyActionsForEventType(a)) {
        this.logger.verbose(this._logPrefix(l, {
          focusTreeId: u
        }), "Ignored '".concat(d, "' ").concat(f, " because it doesn't have any ").concat(f, " handlers."));
        return;
      }
      if (this.eventPropagator.isHandled())
        this.logger.debug(this._logPrefix(l, {
          focusTreeId: u
        }), "Ignored '".concat(d, "' ").concat(f, " as it has already been handled."));
      else {
        this.logger.verbose(this._logPrefix(l, {
          focusTreeId: u
        }), "Attempting to find action matching '".concat(d, "' ").concat(f, " . . ."));
        var p = this.eventPropagator.getPreviousPosition(), g = this.componentList.getIndexById(l), _ = this._callClosestMatchingHandler(r, i, a, g, p === -1 ? 0 : p);
        _ && this.eventPropagator.setHandled();
      }
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/
  }, {
    key: "_logPrefix",
    value: function(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = kr.logIcons, l = kr.eventIcons, u = kr.componentIcons, f = "HotKeys (";
      if (i.focusTreeId !== !1) {
        var d = lr(i.focusTreeId) ? this.focusTreeId : i.focusTreeId;
        f += "F".concat(d).concat(a[d % a.length], "-");
      }
      if (i.eventId !== !1) {
        var p = lr(i.eventId) ? Os.getId() : i.eventId;
        f += "E".concat(p).concat(l[p % l.length], "-");
      }
      f += "C".concat(r).concat(u[r % u.length]);
      var g = this.componentList.getIndexById(r);
      return lr(g) || (f += "-P".concat(g).concat(u[g % u.length], ":")), "".concat(f, ")");
    }
  }]), t;
}(Ik);
function ql(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return Array.isArray(e) || yk(e) ? n.stringifyFirst ? !lr(e.find(function(r) {
    return r.toString() === t.toString();
  })) : e.indexOf(t) !== -1 : Wi(e) ? or(e, t) : n.stringifyFirst ? e.toString() === t.toString() : e === t;
}
function Mb(e) {
  return e.replace(/\b\w/g, function(t) {
    return t.toUpperCase();
  });
}
function wd(e) {
  return "".concat(Mb(e.slice(0, 3))).concat(Mb(e.slice(3)));
}
function du(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? du = function(n) {
    return typeof n;
  } : du = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, du(e);
}
function bG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function kG(e, t, n) {
  return t && wG(e.prototype, t), e;
}
function xG(e, t) {
  return t && (du(t) === "object" || typeof t == "function") ? t : SG(e);
}
function SG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hu(e, t, n) {
  return typeof Reflect < "u" && Reflect.get ? hu = Reflect.get : hu = function(i, a, l) {
    var u = CG(i, a);
    if (u) {
      var f = Object.getOwnPropertyDescriptor(u, a);
      return f.get ? f.get.call(l) : f.value;
    }
  }, hu(e, t, n || e);
}
function CG(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Is(e), e !== null); )
    ;
  return e;
}
function Is(e) {
  return Is = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Is(e);
}
function EG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Th(e, t);
}
function Th(e, t) {
  return Th = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Th(e, t);
}
var OG = /* @__PURE__ */ function(e) {
  EG(t, e);
  function t() {
    var n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    return bG(this, t), n = xG(this, Is(t).call(this, r, i)), n.listenersBound = !1, n.eventOptions = {
      ignoreEventsCondition: et.option("ignoreEventsCondition")
    }, n.listeners = {}, n;
  }
  return kG(t, [{
    key: "enableHotKeys",
    value: function(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0;
      this.eventOptions = u, this._addComponent(r, i, a, l), this._updateDocumentHandlers(), this._initHandlerResolutionState(), this.logger.debug(this._logPrefix(r, {
        eventId: !1
      }), "Mounted."), this.logger.verbose(this._logPrefix(r, {
        eventId: !1
      }), `Component options: 
`, ar(this.componentList.get(r)));
    }
    /**
     * Handles when a mounted global HotKeys component updates its props and changes
     * either the keyMap or handlers prop value
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */
  }, {
    key: "updateEnabledHotKeys",
    value: function(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0;
      this.eventOptions = u, this.componentList.update(r, i, a, l), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this._updateDocumentHandlers(), this._initHandlerResolutionState(), this.logger.debug(this._logPrefix(r, {
        eventId: !1
      }), "Global component ".concat(r, " updated.")), this.logger.verbose(this._logPrefix(r, {
        eventId: !1
      }), `Component options: 
`, ar(this.componentList.get(r)));
    }
    /**
     * Handles when a component is unmounted
     * @param {ComponentId} componentId - Index of component that is being unmounted
     */
  }, {
    key: "disableHotKeys",
    value: function(r) {
      this.componentList.remove(r), this.getKeyHistory().setMaxLength(this.componentList.getLongestSequence()), this._updateDocumentHandlers(), this._initHandlerResolutionState(), this.logger.debug(this._logPrefix(r, {
        eventId: !1
      }), "Unmounted global component ".concat(r));
    }
  }, {
    key: "_updateDocumentHandlers",
    value: function() {
      var r = this, i = this._listenersShouldBeBound();
      !this.listenersBound && i ? (Object.values(ue).forEach(function(a) {
        var l = mo(a);
        document["on".concat(l)] = function(u) {
          r.keyEventManager["handleGlobal".concat(wd(l))](u);
        }, r.logger.debug(r._logPrefix(r.componentId, {
          eventId: !1
        }), "Bound handler handleGlobal".concat(wd(l), "() to document.on").concat(l, "()"));
      }), this.listenersBound = !0) : this.listenersBound && !i && (Object.values(ue).forEach(function(a) {
        var l = mo(a);
        delete document["on".concat(l)], r.logger.debug(r._logPrefix(r.componentId, {
          eventId: !1
        }), "Removed handler handleGlobal".concat(wd(l), "() from document.on").concat(l, "()"));
      }), this.listenersBound = !1);
    }
    /**
     * Whether the document listeners should be bound, to record key events. Basically a check
     * to see if there are any global key maps, or whether the user is currently rebinding to
     * a new key combination.
     * @returns {boolean} True if the document listeners should be bound
     * @private
     */
  }, {
    key: "_listenersShouldBeBound",
    value: function() {
      return this.componentList.any() || this.listeners.keyCombination;
    }
    /********************************************************************************
     * Recording key events
     ********************************************************************************/
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleKeydown",
    value: function(r) {
      var i = la(r);
      if (r.repeat && et.option("ignoreRepeatedEventsWhenKeyHeldDown"))
        return this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(Bt(r, i, ue.keydown), " event.")), !0;
      this._checkForModifierFlagDiscrepancies(r, i, ue.keydown);
      var a = this._howReactAppRespondedTo(r, i, ue.keydown);
      if (a === mt.unseen && this.eventOptions.ignoreEventsCondition(r)) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, ue.keydown), " event because ignoreEventsFilter rejected it."));
        return;
      }
      if (a !== mt.ignored) {
        var l = vo(r), u = this.getCurrentCombination();
        u.isKeyIncluded(i) || u.isEnding() ? this._startAndLogNewKeyCombination(i, l) : this._addToAndLogCurrentKeyCombination(i, ue.keydown, l);
      }
      ql([mt.ignored, mt.handled], a) || this._callHandlerIfExists(r, i, ue.keydown), this._simulateKeyPressForNonPrintableKeys(r, i);
    }
  }, {
    key: "_howReactAppRespondedTo",
    value: function(r, i, a) {
      var l = this.keyEventManager.reactAppHistoryWithEvent(i, a);
      switch (l) {
        case mt.handled:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, a), " event because React app has already handled it."));
          break;
        case mt.ignored:
          this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, a), " event because React app has declared it should be ignored."));
          break;
        case mt.seen:
          this.logger.debug(this._logPrefix(), "Received ".concat(Bt(r, i, a), " event (that has already passed through React app)."));
          break;
        default:
          Os.incrementId(), this.logger.debug(this._logPrefix(), "New ".concat(Bt(r, i, a), " event (that has NOT passed through React app)."));
      }
      return l;
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleKeyPress",
    value: function(r) {
      var i = la(r);
      if (r.repeat && et.option("ignoreRepeatedEventsWhenKeyHeldDown"))
        return this.logger.debug(this._logPrefix(), "Ignored repeated ".concat(Bt(r, i, ue.keypress), " event.")), !0;
      var a = this.getCurrentCombination();
      if (a.isKeyPressSimulated(i))
        return this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, ue.keypress), " as it was not expected, and has already been simulated.")), !0;
      var l = this._howReactAppRespondedTo(r, i, ue.keypress);
      if (a.isKeyIncluded(i) && this._addToAndLogCurrentKeyCombination(i, ue.keypress, vo(r)), l === mt.unseen && (this.keyEventManager.closeHangingKeyCombination(i, ue.keypress), this.eventOptions.ignoreEventsCondition(r))) {
        this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, ue.keypress), " event because ignoreEventsFilter rejected it."));
        return;
      }
      ql([mt.ignored, mt.handled], l) || this._callHandlerIfExists(r, i, ue.keypress);
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleKeyUp",
    value: function(r) {
      var i = la(r), a = this.getCurrentCombination();
      if (a.isKeyUpSimulated(i))
        return this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, ue.keyup), " as it was not expected, and has already been simulated.")), !0;
      var l = this._howReactAppRespondedTo(r, i, ue.keyup);
      a.isKeyIncluded(i) && this._addToAndLogCurrentKeyCombination(i, ue.keyup, vo(r)), l === mt.unseen ? (this.keyEventManager.closeHangingKeyCombination(i, ue.keyup), this.eventOptions.ignoreEventsCondition(r) ? this.logger.debug(this._logPrefix(), "Ignored ".concat(Bt(r, i, ue.keyup), " event because ignoreEventsFilter rejected it.")) : ql([mt.ignored, mt.handled], l) || this._callHandlerIfExists(r, i, ue.keyup)) : ql([mt.ignored, mt.handled], l) || this._callHandlerIfExists(r, i, ue.keyup), this._simulateKeyUpEventsHiddenByCmd(r, i), this.listeners.keyCombination && this._allKeysAreReleased() && this.listeners.keyCombination({
        keys: a.getKeyDictionary(),
        id: a.describe()
      });
    }
  }, {
    key: "_simulateKeyPressForNonPrintableKeys",
    value: function(r, i) {
      this.keyEventManager.simulatePendingKeyPressEvents(), this._handleEventSimulation("handleKeyPress", this._shouldSimulate(ue.keypress, i), {
        event: r,
        key: i
      });
    }
  }, {
    key: "_simulateKeyUpEventsHiddenByCmd",
    value: function(r, i) {
      var a = this;
      zu(i) && (this.keyEventManager.simulatePendingKeyUpEvents(), this.getCurrentCombination().forEachKey(function(l) {
        zu(l) || a._handleEventSimulation("handleKeyUp", a._shouldSimulate(ue.keyup, l), {
          event: r,
          key: l
        });
      }));
    }
  }, {
    key: "_startAndLogNewKeyCombination",
    value: function(r, i) {
      this.getKeyHistory().startNewKeyCombination(r, i), this.logger.verbose(this._logPrefix(), "Started a new combination with '".concat(r, "'.")), this.logger.verbose(this._logPrefix(), "Key history: ".concat(ar(this.getKeyHistory().toJSON()), "."));
    }
  }, {
    key: "_addToAndLogCurrentKeyCombination",
    value: function(r, i, a) {
      this.getKeyHistory().addKeyToCurrentCombination(r, i, a), i === ue.keydown && this.logger.verbose(this._logPrefix(), "Added '".concat(r, "' to current combination: '").concat(this.getCurrentCombination().describe(), "'.")), this.logger.verbose(this._logPrefix(), "Key history: ".concat(ar(this.getKeyHistory().toJSON()), "."));
    }
    /********************************************************************************
     * Event simulation
     ********************************************************************************/
  }, {
    key: "_handleEventSimulation",
    value: function(r, i, a) {
      var l = a.event, u = a.key;
      if (i && et.option("simulateMissingKeyPressEvents")) {
        var f = this._cloneAndMergeEvent(l, {
          key: u,
          simulated: !0
        });
        this[r](f);
      }
    }
    /********************************************************************************
     * Matching and calling handlers
     ********************************************************************************/
  }, {
    key: "_callHandlerIfExists",
    value: function(r, i, a) {
      var l = mo(a), u = this.getCurrentCombination().describe();
      if (!this.componentList.anyActionsForEventType(a)) {
        this.logger.debug(this._logPrefix(), "Ignored '".concat(u, "' ").concat(l, " because it doesn't have any ").concat(l, " handlers."));
        return;
      }
      this.logger.verbose(this._logPrefix(), "Attempting to find action matching '".concat(u, "' ").concat(l, " . . .")), this._callClosestMatchingHandler(r, i, a);
    }
  }, {
    key: "_callClosestMatchingHandler",
    value: function(r, i, a) {
      for (var l = this.componentList.getNewIterator(); l.next(); ) {
        var u = hu(Is(t.prototype), "_callClosestMatchingHandler", this).call(this, r, i, a, l.getPosition(), 0);
        if (u) {
          this.logger.debug(this._logPrefix(), "Searching no further, as handler has been found (and called).");
          return;
        }
      }
    }
  }, {
    key: "_stopEventPropagation",
    value: function(r, i) {
      this.logger.debug(this._logPrefix(i), "Stopping further event propagation."), r.simulated || r.stopPropagation();
    }
    /********************************************************************************
     * Recording key combination
     ********************************************************************************/
    /**
     * Add a new key combination listener function to be called the next time a key
     * combination completes (assuming the cancel function is not called).
     * @param {keyCombinationListener} callbackFunction Function to call with the next
     *        completed key combination
     * @returns {function} Function to call to cancel listening for the next key
     *        combination
     */
  }, {
    key: "addKeyCombinationListener",
    value: function(r) {
      var i = this, a = function() {
        delete i.listeners.keyCombination;
      };
      return this.listeners.keyCombination = function(l) {
        r(l), a();
      }, this._updateDocumentHandlers(), a;
    }
    /********************************************************************************
     * Logging
     ********************************************************************************/
  }, {
    key: "_logPrefix",
    value: function(r) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = kr.eventIcons, l = kr.componentIcons, u = "HotKeys (GLOBAL";
      if (i.eventId !== !1) {
        var f = lr(i.eventId) ? Os.getId() : i.eventId;
        u = "".concat(u, "-E").concat(f).concat(a[f % a.length]);
      }
      return lr(r) ? "".concat(u, "):") : "".concat(u, "-C").concat(r).concat(l[r % l.length], "):");
    }
  }]), t;
}(Ik);
function kd(e) {
  return !lr(e);
}
function PG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ab(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Db(e, t, n) {
  return t && Ab(e.prototype, t), n && Ab(e, n), e;
}
var Vt = /* @__PURE__ */ function() {
  Db(e, null, [{
    key: "getInstance",
    /**
     * Creates a new KeyEventManager instance if one does not already exist or returns the
     * instance that already exists.
     * @param {Object} configuration Configuration object
     * @param {Logger} configuration.logger Logger instance
     * @returns {KeyEventManager} The key event manager instance
     */
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.instance || (this.instance = new e(n)), this.instance;
    }
  }, {
    key: "clear",
    value: function() {
      delete this.instance;
    }
    /**
     * Creates a new KeyEventManager instance. It is expected that only a single instance
     * will be used with a render tree.
     */
  }]);
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    PG(this, e), this.logger = t.logger || new kr(et.option("logLevel")), this._focusOnlyEventStrategy = new _G({
      configuration: t,
      logger: this.logger
    }, this), this._globalEventStrategy = new OG({
      configuration: t,
      logger: this.logger
    }, this), this.mountedComponentsCount = 0;
  }
  return Db(e, [{
    key: "getApplicationKeyMap",
    value: function() {
      return Object.assign(this._globalEventStrategy.getApplicationKeyMap(), this._focusOnlyEventStrategy.getApplicationKeyMap());
    }
    /********************************************************************************
     * Registering key maps
     ********************************************************************************/
    /**
     * Registers a new mounted component's key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */
  }, {
    key: "registerKeyMap",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._focusOnlyEventStrategy.registerKeyMap(n);
    }
    /**
     * Re-registers (updates) a mounted component's key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */
  }, {
    key: "reregisterKeyMap",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this._focusOnlyEventStrategy.reregisterKeyMap(n, r);
    }
    /**
     * De-registers (removes) a mounted component's key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     */
  }, {
    key: "deregisterKeyMap",
    value: function(n) {
      this._focusOnlyEventStrategy.deregisterKeyMap(n);
    }
    /**
     * Registers that a component has now mounted, and declares its parent HotKeys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent HotKeys component
     */
  }, {
    key: "registerComponentMount",
    value: function(n, r) {
      return this._incrementComponentCount(), this._focusOnlyEventStrategy.registerComponentMount(n, r);
    }
  }, {
    key: "registerComponentUnmount",
    value: function() {
      this._decrementComponentCount();
    }
  }, {
    key: "_incrementComponentCount",
    value: function() {
      var n = this, r = this.mountedComponentsCount;
      this.mountedComponentsCount += 1, r === 0 && this.mountedComponentsCount === 1 && (window.onblur = function() {
        return n._clearKeyHistory();
      });
    }
  }, {
    key: "_decrementComponentCount",
    value: function() {
      var n = this.mountedComponentsCount;
      this.mountedComponentsCount -= 1, n === 1 && this.mountedComponentsCount === 0 && delete window.onblur;
    }
  }, {
    key: "_clearKeyHistory",
    value: function() {
      this.logger.info("HotKeys: Window focused - clearing key history"), this._focusOnlyEventStrategy.resetKeyHistory({
        force: !0
      }), this._globalEventStrategy.resetKeyHistory({
        force: !0
      });
    }
    /**
     * Registers a new mounted component's global key map so that it can be included in the
     * application's key map
     * @param {KeyMap} keyMap - Map of actions to key expressions
     * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
     *          component and passed back when handling a key event
     */
  }, {
    key: "registerGlobalKeyMap",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._globalEventStrategy.registerKeyMap(n);
    }
  }, {
    key: "registerGlobalComponentUnmount",
    value: function() {
      this._decrementComponentCount();
    }
    /**
     * Registers that a component has now mounted, and declares its parent GlobalHotKeys
     * component id so that actions may be properly resolved
     * @param {ComponentId} componentId - Id of the component that has mounted
     * @param {ComponentId} parentId - Id of the parent GlobalHotKeys component
     */
  }, {
    key: "registerGlobalComponentMount",
    value: function(n, r) {
      return this._incrementComponentCount(), this._globalEventStrategy.registerComponentMount(n, r);
    }
    /**
     * Re-registers (updates) a mounted component's global key map
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} keyMap - Map of actions to key expressions
     */
  }, {
    key: "reregisterGlobalKeyMap",
    value: function(n, r) {
      this._globalEventStrategy.reregisterKeyMap(n, r);
    }
    /**
     * De-registers (removes) a mounted component's global key map from the registry
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     */
  }, {
    key: "deregisterGlobalKeyMap",
    value: function(n) {
      this._globalEventStrategy.deregisterKeyMap(n);
    }
    /********************************************************************************
     * Recording key combination
     ********************************************************************************/
    /**
     * Adds a listener function that will be called the next time a key combination completes
     * @param {keyCombinationListener} callbackFunction Listener function to be called
     * @returns {function} Function to call to cancel listening to the next key combination
     */
  }, {
    key: "addKeyCombinationListener",
    value: function(n) {
      return this._globalEventStrategy.addKeyCombinationListener(n);
    }
    /********************************************************************************
     * Focus key events
     ********************************************************************************/
    /**
     * Registers the actions and handlers of a HotKeys component that has gained focus
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @returns {FocusTreeId} The current focus tree's ID
     */
  }, {
    key: "enableHotKeys",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
      return this._focusOnlyEventStrategy.enableHotKeys(n, r, i, a);
    }
    /**
     * Handles when a HotKeys component that is in focus updates its props and changes
     * either the keyMap or handlers prop value
     * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
     *        Used to identify (and ignore) stale updates.
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
     * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
     *        functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     */
  }, {
    key: "updateEnabledHotKeys",
    value: function(n, r) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = arguments.length > 4 ? arguments[4] : void 0;
      return this._focusOnlyEventStrategy.updateEnabledHotKeys(n, r, i, a, l);
    }
    /**
     * Handles when a component loses focus by resetting the internal state, ready to
     * receive the next tree of focused HotKeys components
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
     *        apart of
     * @param {ComponentId} componentId - Index of component that is blurring
     * @returns {boolean} Whether the component still has event propagation yet to handle
     */
  }, {
    key: "disableHotKeys",
    value: function(n, r) {
      return this._focusOnlyEventStrategy.disableHotKeys(n, r);
    }
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The id of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event is handled.
     * @returns Whether the event was discarded because it was part of an old focus tree
     */
  }, {
    key: "handleKeydown",
    value: function(n, r, i, a) {
      if (kd(r))
        return this._focusOnlyEventStrategy.handleKeydown(n, r, i, a);
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event - Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
     * @param {ComponentId} componentId - The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options - Hash of options that configure how the event
     *        is handled.
     */
  }, {
    key: "handleKeyPress",
    value: function(n, r, i, a) {
      if (kd(r))
        return this._focusOnlyEventStrategy.handleKeyPress(n, r, i, a);
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called many times as a keyboard event bubbles up through the React
     * render tree. The event is only registered the first time it is seen and results
     * of some calculations are cached. The event is matched against the handlers registered
     * at each component level, to ensure the proper handler declaration scoping.
     * @param {KeyboardEvent} event Event containing the key name and state
     * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
     * @param {ComponentId} componentId The index of the component that is currently handling
     *        the keyboard event as it bubbles towards the document root.
     * @param {Object} options Hash of options that configure how the event
     *        is handled.
     */
  }, {
    key: "handleKeyUp",
    value: function(n, r, i, a) {
      if (kd(r))
        return this._focusOnlyEventStrategy.handleKeyUp(n, r, i, a);
    }
    /********************************************************************************
     * Global key events
     ********************************************************************************/
    /**
     * Registers the actions and handlers of a HotKeys component that has mounted
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     * @returns {ComponentId} A unique component ID to assign to the focused HotKeys
     *        component and passed back when handling a key event
     */
  }, {
    key: "enableGlobalHotKeys",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0, l = arguments.length > 4 ? arguments[4] : void 0;
      return this._globalEventStrategy.enableHotKeys(n, r, i, a, l);
    }
    /**
     * Handles when a mounted global HotKeys component updates its props and changes
     * either the keyMap or handlers prop value
     * @param {ComponentId} componentId - The component index of the component to
     *        update
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */
  }, {
    key: "updateEnabledGlobalHotKeys",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0, l = arguments.length > 4 ? arguments[4] : void 0;
      return this._globalEventStrategy.updateEnabledHotKeys(n, r, i, a, l);
    }
    /**
     * Handles when a component is unmounted
     * @param {ComponentId} componentId - Index of component that is being unmounted
     */
  }, {
    key: "disableGlobalHotKeys",
    value: function(n) {
      return this._globalEventStrategy.disableHotKeys(n);
    }
    /**
     * Records a keydown keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleGlobalKeyDown",
    value: function(n) {
      return this._globalEventStrategy.handleKeydown(n);
    }
    /**
     * Records a keypress keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleGlobalKeyPress",
    value: function(n) {
      return this._globalEventStrategy.handleKeyPress(n);
    }
    /**
     * Records a keyup keyboard event and matches it against the list of pre-registered
     * event handlers, calling the first matching handler with the highest priority if
     * one exists.
     *
     * This method is called once when a keyboard event bubbles up to document, and checks
     * the keymaps for all of the mounted global HotKey components.
     * @param {KeyboardEvent} event - Event containing the key name and state
     */
  }, {
    key: "handleGlobalKeyUp",
    value: function(n) {
      return this._globalEventStrategy.handleKeyUp(n);
    }
    /**
     * Ignores the next keyboard event immediately, rather than waiting for it to
     * match the ignoreEventsCondition
     * @param {KeyboardEvent} event keyboard event to ignore
     * @see Configuration.ignoreEventsCondition
     */
  }, {
    key: "ignoreEvent",
    value: function(n) {
      this._focusOnlyEventStrategy.getEventPropagator().ignoreEvent(n);
    }
    /**
     * Forces the observation of the next keyboard event immediately, disregarding whether
     * the event matches the ignoreKeyEventsCondition
     * @param {KeyboardEvent} event keyboard event to force the observation of
     * @see Configuration.ignoreEventsCondition
     */
  }, {
    key: "observeIgnoredEvents",
    value: function(n) {
      this._focusOnlyEventStrategy.getEventPropagator().observeIgnoredEvents(n);
    }
    /**
     * Closes any hanging key combinations that have not received the key event indicated
     * by recordIndex.
     * @param {KeyName} keyName The name of the key whose state should be updated if it
     *        is currently set to keydown or keypress.
     * @param {KeyEventType} recordIndex Index of key event to move the key state
     *        up to.
     */
  }, {
    key: "closeHangingKeyCombination",
    value: function(n, r) {
      this._focusOnlyEventStrategy.closeHangingKeyCombination(n, r);
    }
  }, {
    key: "reactAppHistoryWithEvent",
    value: function(n, r) {
      var i = this._focusOnlyEventStrategy.eventPropagator.getPreviousPropagation();
      return i.isForKey(n) && i.isForEventType(r) ? i.isHandled() ? mt.handled : i.isIgnoringEvent() ? mt.ignored : mt.seen : mt.unseen;
    }
  }, {
    key: "simulatePendingKeyPressEvents",
    value: function() {
      this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();
    }
  }, {
    key: "simulatePendingKeyUpEvents",
    value: function() {
      this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();
    }
  }, {
    key: "isGlobalListenersBound",
    value: function() {
      return this._globalEventStrategy.listenersBound;
    }
  }]), e;
}();
function Tk(e, t) {
  var n = t.deprecatedAPI, r = n.contextTypes, i = n.childContextTypes, a = t.newAPI.contextType;
  if (typeof Dt.createContext > "u")
    e.contextTypes = r, e.childContextTypes = i, e.prototype.getChildContext = function() {
      return this._childContext;
    };
  else {
    var l = Dt.createContext(a);
    e.contextType = l, e.prototype._originalRender = e.prototype.render, e.prototype.render = function() {
      var u = this._originalRender();
      return u ? Dt.createElement(l.Provider, {
        value: this._childContext
      }, u) : null;
    };
  }
  return e;
}
function pu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pu = function(n) {
    return typeof n;
  } : pu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pu(e);
}
function Mh() {
  return Mh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mh.apply(this, arguments);
}
function IG(e, t) {
  if (e == null) return {};
  var n = TG(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function TG(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function MG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function AG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function DG(e, t, n) {
  return t && AG(e.prototype, t), e;
}
function LG(e, t) {
  return t && (pu(t) === "object" || typeof t == "function") ? t : Nn(e);
}
function Ah(e) {
  return Ah = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ah(e);
}
function RG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Dh(e, t);
}
function Dh(e, t) {
  return Dh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Dh(e, t);
}
function Nn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NG(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      Mk(e, i, n[i]);
    });
  }
  return e;
}
function Mk(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ak(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  function n(l, u) {
    return NG({}, t[l] || {}, u[l] || {});
  }
  function r(l) {
    return n("handlers", l);
  }
  function i(l) {
    return n("keyMap", l);
  }
  var a = /* @__PURE__ */ function(l) {
    RG(u, l);
    function u(f) {
      var d;
      return MG(this, u), d = LG(this, Ah(u).call(this, f)), d._handleFocus = d._handleFocus.bind(Nn(Nn(d))), d._handleBlur = d._handleBlur.bind(Nn(Nn(d))), d._handleKeyDown = d._handleKeyDown.bind(Nn(Nn(d))), d._handleKeyPress = d._handleKeyPress.bind(Nn(Nn(d))), d._handleKeyUp = d._handleKeyUp.bind(Nn(Nn(d))), d._componentIsFocused = d._componentIsFocused.bind(Nn(Nn(d))), d._id = Vt.getInstance().registerKeyMap(f.keyMap), d._childContext = {
        hotKeysParentId: d._id
      }, d;
    }
    return DG(u, [{
      key: "render",
      value: function() {
        var d = this.props;
        d.keyMap, d.handlers, d.allowChanges, d.root;
        var p = IG(d, ["keyMap", "handlers", "allowChanges", "root"]), g = {
          onFocus: this._wrapFunction("onFocus", this._handleFocus),
          onBlur: this._wrapFunction("onBlur", this._handleBlur),
          tabIndex: et.option("defaultTabIndex")
        };
        return this._shouldBindKeyListeners() && (g.onKeyDown = this._handleKeyDown, g.onKeyPress = this._handleKeyPress, g.onKeyUp = this._handleKeyUp), Dt.createElement(e, Mh({
          hotKeys: g
        }, p));
      }
    }, {
      key: "_shouldBindKeyListeners",
      value: function() {
        var d = i(this.props);
        return !ds(d) || this.props.root || et.option("enableHardSequences") && this._handlersIncludeHardSequences(d, r(this.props));
      }
    }, {
      key: "_handlersIncludeHardSequences",
      value: function(d, p) {
        return Object.keys(p).some(function(g) {
          return !d[g] && Ec.isValidKeySerialization(g);
        });
      }
    }, {
      key: "_wrapFunction",
      value: function(d, p) {
        var g = this;
        return typeof this.props[d] == "function" ? function(_) {
          g.props[d](_), p(_);
        } : p;
      }
    }, {
      key: "_focusTreeIdsPush",
      value: function(d) {
        this._focusTreeIds || (this._focusTreeIds = []), this._focusTreeIds.push(d);
      }
    }, {
      key: "_focusTreeIdsShift",
      value: function() {
        this._focusTreeIds && this._focusTreeIds.shift();
      }
    }, {
      key: "_getFocusTreeId",
      value: function() {
        if (this._focusTreeIds)
          return this._focusTreeIds[0];
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        var d = Vt.getInstance();
        if (d.reregisterKeyMap(this._id, this.props.keyMap), this._componentIsFocused() && (this.props.allowChanges || !et.option("ignoreKeymapAndHandlerChangesByDefault"))) {
          var p = this.props, g = p.keyMap, _ = p.handlers;
          d.updateEnabledHotKeys(this._getFocusTreeId(), this._id, g, _, this._getComponentOptions());
        }
      }
    }, {
      key: "_componentIsFocused",
      value: function() {
        return this._focused === !0;
      }
    }, {
      key: "componentDidMount",
      value: function() {
        var d = Vt.getInstance(), p = this.context.hotKeysParentId;
        d.registerComponentMount(this._id, p);
      }
      /**
       * Handles when the component gains focus by calling onFocus prop, if defined, and
       * registering itself with the KeyEventManager
       * @private
       */
    }, {
      key: "_handleFocus",
      value: function() {
        if (this.props.onFocus) {
          var d;
          (d = this.props).onFocus.apply(d, arguments);
        }
        var p = Vt.getInstance().enableHotKeys(this._id, i(this.props), r(this.props), this._getComponentOptions());
        lr(p) || this._focusTreeIdsPush(p), this._focused = !0;
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        var d = Vt.getInstance();
        d.deregisterKeyMap(this._id), d.registerComponentUnmount(), this._handleBlur();
      }
      /**
       * Handles when the component loses focus by calling the onBlur prop, if defined
       * and removing itself from the KeyEventManager
       * @private
       */
    }, {
      key: "_handleBlur",
      value: function() {
        if (this.props.onBlur) {
          var d;
          (d = this.props).onBlur.apply(d, arguments);
        }
        var p = Vt.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);
        p || this._focusTreeIdsShift(), this._focused = !1;
      }
      /**
       * Delegates handing the keydown event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */
    }, {
      key: "_handleKeyDown",
      value: function(d) {
        var p = Vt.getInstance().handleKeydown(d, this._getFocusTreeId(), this._id, this._getEventOptions());
        p && this._focusTreeIdsShift();
      }
      /**
       * Delegates handing the keypress event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */
    }, {
      key: "_handleKeyPress",
      value: function(d) {
        var p = Vt.getInstance().handleKeyPress(d, this._getFocusTreeId(), this._id, this._getEventOptions());
        p && this._focusTreeIdsShift();
      }
      /**
       * Delegates handing the keyup event to the KeyEventManager
       * @param {KeyboardEvent} event Key board event containing key name and state
       * @private
       */
    }, {
      key: "_handleKeyUp",
      value: function(d) {
        var p = Vt.getInstance().handleKeyUp(d, this._getFocusTreeId(), this._id, this._getEventOptions());
        p && this._focusTreeIdsShift();
      }
    }, {
      key: "_getComponentOptions",
      value: function() {
        return {
          defaultKeyEvent: et.option("defaultKeyEvent")
        };
      }
    }, {
      key: "_getEventOptions",
      value: function() {
        return {
          ignoreEventsCondition: et.option("ignoreEventsCondition")
        };
      }
    }]), u;
  }(Yu);
  return Mk(a, "propTypes", {
    /**
     * A unique key to associate with KeyEventMatchers that allows associating handler
     * functions at a later stage
     * @typedef {string} ActionName
     */
    /**
     * Name of a key event
     * @typedef {'keyup'|'keydown'|'keypress'} KeyEventName
     */
    /**
     * A string or list of strings, that represent a sequence of one or more keys
     * @typedef {String | Array.<String>} MouseTrapKeySequence
     * @see {@link https://craig.is/killing/mice} for support key sequences
     */
    /**
     * Options for the mapping of a key sequence and event
     * @typedef {Object} KeyEventOptions
     * @property {MouseTrapKeySequence} sequence - The key sequence required to satisfy a
     *           KeyEventDescription
     * @property {KeyEventName} action - The keyboard state required to satisfy a
     *           KeyEventDescription
     * @property {string} name - The name of the action, to be displayed to the end user
     * @property {string} description - A description of the action, to be displayed to
     *           the end user
     * @property {string} group - A group the action belongs to, to aid in showing similar
     *           actions to the user
     */
    /**
     * A description of key sequence of one or more key combinations
     * @typedef {MouseTrapKeySequence|KeyEventOptions|Array.<MouseTrapKeySequence>} KeyEventDescription
     */
    /**
     * A mapping from ActionName to KeyEventDescription
     * @typedef {Object.<ActionName, KeyEventDescription>} KeyMap
     */
    /**
     * A map from action names to Mousetrap or Browser key sequences
     * @type {KeyMap}
     */
    keyMap: m.object,
    /**
     * A map from action names to event handler functions
     * @typedef {Object.<ActionName, Function>} HandlersMap
     */
    /**
     * A map from action names to event handler functions
     * @type {HandlersMap}
     */
    handlers: m.object,
    /**
     * Function to call when this component gains focus in the browser
     * @type {function}
     */
    onFocus: m.func,
    /**
     * Function to call when this component loses focus in the browser
     * @type {function}
     */
    onBlur: m.func,
    /**
     * Whether the keyMap or handlers are permitted to change after the
     * component mounts. If false, changes to the keyMap and handlers
     * props will be ignored
     */
    allowChanges: m.bool,
    /**
     * Whether this is the root HotKeys node - this enables some special behaviour
     */
    root: m.bool
  }), Tk(a, {
    deprecatedAPI: {
      contextTypes: {
        hotKeysParentId: m.number
      },
      childContextTypes: {
        hotKeysParentId: m.number
      }
    },
    newAPI: {
      contextType: {
        hotKeysParentId: void 0
      }
    }
  });
}
function gu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gu = function(n) {
    return typeof n;
  } : gu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gu(e);
}
function KG(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      FG(e, i, n[i]);
    });
  }
  return e;
}
function FG(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $G(e, t) {
  if (e == null) return {};
  var n = HG(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function HG(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function zG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function UG(e, t, n) {
  return t && BG(e.prototype, t), e;
}
function jG(e, t) {
  return t && (gu(t) === "object" || typeof t == "function") ? t : WG(e);
}
function WG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lh(e) {
  return Lh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lh(e);
}
function YG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Rh(e, t);
}
function Rh(e, t) {
  return Rh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Rh(e, t);
}
var GG = /* @__PURE__ */ function(e) {
  YG(t, e);
  function t() {
    return zG(this, t), jG(this, Lh(t).apply(this, arguments));
  }
  return UG(t, [{
    key: "render",
    value: function() {
      var r = this.props, i = r.hotKeys, a = r.innerRef, l = r.component, u = $G(r, ["hotKeys", "innerRef", "component"]), f = l || et.option("defaultComponent");
      return Dt.createElement(f, KG({}, i, {
        ref: a
      }, u));
    }
  }]), t;
}(Yi), Dk = Ak(GG);
Dk.propTypes = {
  /**
   * A ref to add to the underlying DOM-mountable node
   */
  innerRef: m.oneOfType([m.object, m.func])
};
function yu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yu = function(n) {
    return typeof n;
  } : yu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yu(e);
}
function qG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VG(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function XG(e, t, n) {
  return t && VG(e.prototype, t), e;
}
function ZG(e, t) {
  return t && (yu(t) === "object" || typeof t == "function") ? t : JG(e);
}
function JG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nh(e) {
  return Nh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nh(e);
}
function QG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Kh(e, t);
}
function Kh(e, t) {
  return Kh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Kh(e, t);
}
function eq(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Lk = /* @__PURE__ */ function(e) {
  QG(t, e);
  function t(n) {
    var r;
    return qG(this, t), r = ZG(this, Nh(t).call(this, n)), r._id = Vt.getInstance().registerGlobalKeyMap(n.keyMap), r._childContext = {
      globalHotKeysParentId: r._id
    }, r;
  }
  return XG(t, [{
    key: "render",
    value: function() {
      return this.props.children || null;
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r = Vt.getInstance();
      if (r.reregisterGlobalKeyMap(this._id, this.props.keyMap), this.props.allowChanges || !et.option("ignoreKeymapAndHandlerChangesByDefault")) {
        var i = this.props, a = i.keyMap, l = i.handlers;
        r.updateEnabledGlobalHotKeys(this._id, a, l, this._getComponentOptions(), this._getEventOptions());
      }
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var r = this.props, i = r.keyMap, a = r.handlers, l = this.context.globalHotKeysParentId, u = Vt.getInstance();
      u.registerGlobalComponentMount(this._id, l), u.enableGlobalHotKeys(this._id, i, a, this._getComponentOptions(), this._getEventOptions());
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      var r = Vt.getInstance();
      r.deregisterGlobalKeyMap(this._id), r.disableGlobalHotKeys(this._id), r.registerGlobalComponentUnmount();
    }
  }, {
    key: "_getComponentOptions",
    value: function() {
      return {
        defaultKeyEvent: et.option("defaultKeyEvent")
      };
    }
  }, {
    key: "_getEventOptions",
    value: function() {
      return {
        ignoreEventsCondition: et.option("ignoreEventsCondition")
      };
    }
  }]), t;
}(Yi);
eq(Lk, "propTypes", {
  /**
   * A map from action names to Mousetrap or Browser key sequences
   * @type {KeyMap}
   */
  keyMap: m.object,
  /**
   * A map from action names to event handler functions
   * @typedef {Object.<ActionName, Function>} HandlersMap
   */
  /**
   * A map from action names to event handler functions
   * @type {HandlersMap}
   */
  handlers: m.object,
  /**
   * Whether the keyMap or handlers are permitted to change after the
   * component mounts. If false, changes to the keyMap and handlers
   * props will be ignored
   */
  allowChanges: m.bool
});
const tq = Tk(Lk, {
  deprecatedAPI: {
    contextTypes: {
      globalHotKeysParentId: m.number
    },
    childContextTypes: {
      globalHotKeysParentId: m.number
    }
  },
  newAPI: {
    contextType: {
      globalHotKeysParentId: void 0
    }
  }
});
function mu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mu = function(n) {
    return typeof n;
  } : mu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mu(e);
}
function Fh() {
  return Fh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fh.apply(this, arguments);
}
function nq(e, t) {
  if (e == null) return {};
  var n = rq(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rq(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function iq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oq(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function aq(e, t, n) {
  return t && oq(e.prototype, t), e;
}
function sq(e, t) {
  return t && (mu(t) === "object" || typeof t == "function") ? t : ts(e);
}
function $h(e) {
  return $h = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $h(e);
}
function lq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Hh(e, t);
}
function Hh(e, t) {
  return Hh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Hh(e, t);
}
function ts(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oc(e) {
  var t, n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    only: [],
    except: []
  }, i = arguments.length > 2 ? arguments[2] : void 0;
  return n = t = /* @__PURE__ */ function(a) {
    lq(l, a);
    function l(u) {
      var f;
      return iq(this, l), f = sq(this, $h(l).call(this, u)), f._handleKeyEvent = f._handleKeyEvent.bind(ts(ts(f))), f._reloadDictionaries = f._reloadDictionaries.bind(ts(ts(f))), f;
    }
    return aq(l, [{
      key: "render",
      value: function() {
        var f = this.props;
        f.only, f.except;
        var d = nq(f, ["only", "except"]), p = {
          onKeyDown: this._handleKeyEvent,
          onKeyPress: this._handleKeyEvent,
          onKeyUp: this._handleKeyEvent,
          onFocus: this._reloadDictionaries
        };
        return Dt.createElement(e, Fh({
          hotKeys: p
        }, d));
      }
    }, {
      key: "_reloadDictionaries",
      value: function() {
        var f = this.props, d = f.only, p = f.except;
        this._onlyDict = Rb(d), this._exceptDict = Rb(p);
      }
    }, {
      key: "_shouldIgnoreEvent",
      value: function(f) {
        var d = f.key;
        return ds(this._onlyDict) ? ds(this._exceptDict) ? !0 : !or(this._exceptDict, d) : ds(this._exceptDict) ? or(this._onlyDict, d) : or(this._onlyDict, d) && !or(this._exceptDict, d);
      }
    }, {
      key: "_handleKeyEvent",
      value: function(f) {
        this._shouldIgnoreEvent(f) && Vt.getInstance()[i](f);
      }
    }]), l;
  }(Yu), Lb(t, "propTypes", {
    /**
     * The whitelist of keys that keyevents should be ignored. i.e. if you place
     * a key in this list, all events related to it will be ignored by react hotkeys
     */
    only: m.oneOfType([m.string, m.arrayOf(m.string)]),
    /**
     * The blacklist of keys that keyevents should be not ignored. i.e. if you place
     * a key in this list, all events related to it will be still be observed by react
     * hotkeys
     */
    except: m.oneOfType([m.string, m.arrayOf(m.string)])
  }), Lb(t, "defaultProps", r), n;
}
function Rb(e) {
  return Es(e).reduce(function(t, n) {
    var r = mk(n);
    if (!bk(r))
      throw new wk(n);
    return [yg, gg, dg, Cc, pg, hg].forEach(function(i) {
      t[i(r)] = !0;
    }), t;
  }, {});
}
function vu(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vu = function(n) {
    return typeof n;
  } : vu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vu(e);
}
function uq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      cq(e, i, n[i]);
    });
  }
  return e;
}
function cq(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fq(e, t) {
  if (e == null) return {};
  var n = dq(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function dq(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pq(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gq(e, t, n) {
  return t && pq(e.prototype, t), e;
}
function yq(e, t) {
  return t && (vu(t) === "object" || typeof t == "function") ? t : mq(e);
}
function mq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zh(e) {
  return zh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zh(e);
}
function vq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bh(e, t);
}
function Bh(e, t) {
  return Bh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Bh(e, t);
}
var _q = /* @__PURE__ */ function(e) {
  vq(t, e);
  function t() {
    return hq(this, t), yq(this, zh(t).apply(this, arguments));
  }
  return gq(t, [{
    key: "render",
    value: function() {
      var r = this.props, i = r.hotKeys, a = fq(r, ["hotKeys"]), l = a.component || et.option("defaultComponent");
      return Dt.createElement(l, uq({}, i, a));
    }
  }]), t;
}(Yi);
const bq = Oc(_q, {}, "ignoreEvent");
function _u(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _u = function(n) {
    return typeof n;
  } : _u = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _u(e);
}
function wq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    }))), r.forEach(function(i) {
      kq(e, i, n[i]);
    });
  }
  return e;
}
function kq(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xq(e, t) {
  if (e == null) return {};
  var n = Sq(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Sq(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Cq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eq(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Oq(e, t, n) {
  return t && Eq(e.prototype, t), e;
}
function Pq(e, t) {
  return t && (_u(t) === "object" || typeof t == "function") ? t : Iq(e);
}
function Iq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uh(e) {
  return Uh = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Uh(e);
}
function Tq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && jh(e, t);
}
function jh(e, t) {
  return jh = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, jh(e, t);
}
var Mq = /* @__PURE__ */ function(e) {
  Tq(t, e);
  function t() {
    return Cq(this, t), Pq(this, Uh(t).apply(this, arguments));
  }
  return Oq(t, [{
    key: "render",
    value: function() {
      var r = this.props, i = r.hotKeys, a = xq(r, ["hotKeys"]), l = a.component || et.option("defaultComponent");
      return Dt.createElement(l, wq({}, i, a));
    }
  }]), t;
}(Yi);
const Aq = Oc(Mq, {}, "observeIgnoredEvents");
function Dq(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    only: [],
    except: []
  };
  return Oc(e, t, "ignoreEvent");
}
function Lq(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    only: [],
    except: []
  };
  return Oc(e, t, "observeIgnoredEvents");
}
function Rq() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  et.init(e);
}
function Nq() {
  return Vt.getInstance().getApplicationKeyMap();
}
function Kq(e) {
  var t = Vt.getInstance();
  return t.addKeyCombinationListener(e);
}
const Fq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalHotKeys: tq,
  HotKeys: Dk,
  IgnoreKeys: bq,
  ObserveKeys: Aq,
  configure: Rq,
  getApplicationKeyMap: Nq,
  recordKeyCombination: Kq,
  withHotKeys: Ak,
  withIgnoreKeys: Dq,
  withObserveKeys: Lq
}, Symbol.toStringTag, { value: "Module" })), $q = /* @__PURE__ */ e1(Fq);
Ve.env.NODE_ENV === "production" ? xh.exports = f8 : xh.exports = $q;
var Rk = xh.exports;
const Hq = [
  {
    id: "select_tool",
    description: "Switch to the Select Tool",
    binding: "escape"
  },
  {
    id: "zoom_tool",
    description: "Select the Zoom Tool",
    binding: "z"
  },
  {
    id: "create_point",
    description: "Create a point"
  },
  {
    id: "create_bounding_box",
    description: "Create a bounding box",
    binding: "b"
  },
  {
    id: "pan_tool",
    description: "Select the Pan Tool",
    binding: "m"
  },
  {
    id: "create_polygon",
    description: "Create a Polygon",
    binding: "p"
  },
  {
    id: "create_pixel",
    description: "Create a Pixel Mask"
  },
  {
    id: "save_and_previous_sample",
    description: "Save and go to previous sample",
    binding: "ArrowLeft"
  },
  {
    id: "save_and_next_sample",
    description: "Save and go to next sample",
    binding: "ArrowRight"
  },
  {
    id: "save_and_exit_sample",
    description: "Save and exit current sample"
  },
  {
    id: "exit_sample",
    description: "Exit sample without saving"
  },
  {
    id: "delete_region",
    description: "Delete selected region",
    binding: "d"
  },
  {
    id: "undo",
    description: "Undo latest change",
    binding: "Ctrl+z"
  }
];
for (const { id: e, binding: t } of Hq) ;
const zq = ({
  dispatch: e
}) => Ki(
  () => ({
    select_tool: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "select"
      });
    },
    zoom_tool: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "zoom"
      });
    },
    create_point: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "create-point"
      });
    },
    create_bounding_box: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "create-box"
      });
    },
    pan_tool: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "pan"
      });
    },
    create_polygon: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "create-polygon"
      });
    },
    create_pixel: () => {
      e({
        type: "SELECT_TOOL",
        selectedTool: "create-pixel"
      });
    },
    save_and_previous_sample: () => {
      e({
        type: "HEADER_BUTTON_CLICKED",
        buttonName: "Prev"
      });
    },
    save_and_next_sample: () => {
      e({
        type: "HEADER_BUTTON_CLICKED",
        buttonName: "Next"
      });
    },
    save_and_exit_sample: () => {
      e({
        type: "HEADER_BUTTON_CLICKED",
        buttonName: "Save"
      });
    },
    delete_region: () => {
      e({
        type: "DELETE_SELECTED_REGION"
      });
    },
    undo: () => {
      e({
        type: "RESTORE_HISTORY"
      });
    }
    // TODO
    // exit_sample: () => {
    //   dispatch({
    //     type: "",
    //   })
    // }
  }),
  [e]
), Bq = 65, Uq = 122, jq = (e, t = []) => !!(t === null || t.includes(e) || t.length === 0), Wq = (e, t, n, r) => {
  jq(e, n) && t(e, r);
};
function Yq(e) {
  let t = e.which;
  return t >= Bq && t <= Uq && (t = e.key.charCodeAt(0)), t;
}
function Gq(e) {
  return e.map((t) => {
    const n = t;
    return typeof n == "string" ? n.charCodeAt(0) : n;
  });
}
const qq = ["keydown", "keyup", "keypress"], Vq = (e, { detectKeys: t, keyevent: n }, { dependencies: r = [] } = {}) => {
  const i = n || "keydown";
  if (!(qq.indexOf(i) > -1))
    throw new Error(`Invalid keyevent ${n}. Defaulting to keydown`);
  if (!e)
    throw new Error("Callback is required");
  if (!Array.isArray(r))
    throw new Error("Dependencies should be an array");
  let l = t;
  Array.isArray(t) || (l = [], console.warn("Keys should be array!")), l = Gq(l);
  const u = (f) => {
    const d = Yq(f);
    return Wq(d, e, l, f);
  };
  xo(() => !(typeof window < "u" && window.document && window.document.createElement) ? (console.error("Window is not defined"), () => {
  }) : (window.document.addEventListener(i, u), () => {
    window.document.removeEventListener(i, u);
  }), r);
}, Xq = (e) => e != null, Yo = (e) => {
  var n, r, i;
  const t = (i = (r = (n = Rk.getApplicationKeyMap()[e]) == null ? void 0 : n.sequences) == null ? void 0 : r[0]) == null ? void 0 : i.sequence;
  return t ? ` (${t})` : "";
}, Zq = [
  {
    name: "select",
    helperText: "Select" + Yo("select_tool"),
    alwaysShowing: !0
  },
  {
    name: "pan",
    helperText: "Drag/Pan (right or middle click)" + Yo("pan_tool"),
    alwaysShowing: !0
  },
  {
    name: "zoom",
    helperText: "Zoom In/Out (scroll)" + Yo("zoom_tool"),
    alwaysShowing: !0
  },
  {
    name: "show-tags",
    helperText: "Show / Hide Tags",
    alwaysShowing: !0
  },
  {
    name: "create-point",
    helperText: "Add Point" + Yo("create_point")
  },
  {
    name: "create-box",
    helperText: "Add Bounding Box" + Yo("create_bounding_box")
  },
  {
    name: "create-polygon",
    helperText: "Add Polygon" + Yo("create_polygon")
  },
  {
    name: "create-line",
    helperText: "Add Line"
  },
  {
    name: "create-expanding-line",
    helperText: "Add Expanding Line"
  },
  {
    name: "create-keypoints",
    helperText: "Add Keypoints (Pose)"
  },
  {
    name: "show-mask",
    alwaysShowing: !0,
    helperText: "Show / Hide Mask"
  },
  {
    name: "modify-allowed-area",
    helperText: "Modify Allowed Area"
  }
];
function Jq(e) {
  return bn("PrivateSwitchBase", e);
}
Jt("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Qq = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: i
  } = e, a = {
    root: ["root", n && "checked", r && "disabled", i && `edge${Fn(i)}`],
    input: ["input"]
  };
  return wn(a, Jq, t);
}, eV = We(Qh)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), tV = We("input", {
  shouldForwardProp: Ds
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Nk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: i,
    checkedIcon: a,
    defaultChecked: l,
    disabled: u,
    disableFocusRipple: f = !1,
    edge: d = !1,
    icon: p,
    id: g,
    inputProps: _,
    inputRef: y,
    name: k,
    onBlur: x,
    onChange: O,
    onFocus: S,
    readOnly: M,
    required: T = !1,
    tabIndex: L,
    type: K,
    value: N,
    slots: W = {},
    slotProps: ne = {},
    ...oe
  } = t, [le, Q] = t1({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), V = qu(), he = (de) => {
    S && S(de), V && V.onFocus && V.onFocus(de);
  }, me = (de) => {
    x && x(de), V && V.onBlur && V.onBlur(de);
  }, ce = (de) => {
    if (de.nativeEvent.defaultPrevented)
      return;
    const Pe = de.target.checked;
    Q(Pe), O && O(de, Pe);
  };
  let Me = u;
  V && typeof Me > "u" && (Me = V.disabled);
  const $e = K === "checkbox" || K === "radio", Ye = {
    ...t,
    checked: le,
    disabled: Me,
    disableFocusRipple: f,
    edge: d
  }, ve = Qq(Ye), C = {
    slots: W,
    slotProps: {
      input: _,
      ...ne
    }
  }, [Ae, pt] = rr("root", {
    ref: n,
    elementType: eV,
    className: ve.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...C,
      component: "span",
      ...oe
    },
    getSlotProps: (de) => ({
      ...de,
      onFocus: (Pe) => {
        var st;
        (st = de.onFocus) == null || st.call(de, Pe), he(Pe);
      },
      onBlur: (Pe) => {
        var st;
        (st = de.onBlur) == null || st.call(de, Pe), me(Pe);
      }
    }),
    ownerState: Ye,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !f,
      disabled: Me,
      role: void 0,
      tabIndex: null
    }
  }), [P, be] = rr("input", {
    ref: y,
    elementType: tV,
    className: ve.input,
    externalForwardedProps: C,
    getSlotProps: (de) => ({
      onChange: (Pe) => {
        var st;
        (st = de.onChange) == null || st.call(de, Pe), ce(Pe);
      }
    }),
    ownerState: Ye,
    additionalProps: {
      autoFocus: r,
      checked: i,
      defaultChecked: l,
      disabled: Me,
      id: $e ? g : void 0,
      name: k,
      readOnly: M,
      required: T,
      tabIndex: L,
      type: K,
      ...K === "checkbox" && N === void 0 ? {} : {
        value: N
      }
    }
  });
  return /* @__PURE__ */ He(Ae, {
    ...pt,
    children: [/* @__PURE__ */ A(P, {
      ...be
    }), le ? a : p]
  });
});
Ve.env.NODE_ENV !== "production" && (Nk.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: m.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: m.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: m.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * @ignore
   */
  defaultChecked: m.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: m.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: m.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: m.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: m.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: m.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: m.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: tp,
  /*
   * @ignore
   */
  name: m.string,
  /**
   * @ignore
   */
  onBlur: m.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: m.func,
  /**
   * @ignore
   */
  onFocus: m.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: m.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: m.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: m.shape({
    input: m.oneOfType([m.func, m.object]),
    root: m.oneOfType([m.func, m.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: m.shape({
    input: m.elementType,
    root: m.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.object,
  /**
   * @ignore
   */
  tabIndex: m.oneOfType([m.number, m.string]),
  /**
   * The input component prop `type`.
   */
  type: m.string.isRequired,
  /**
   * The value of the component.
   */
  value: m.any
});
function nV(e) {
  return bn("MuiDialog", e);
}
const xd = Jt("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), mg = /* @__PURE__ */ Ne.createContext({});
Ve.env.NODE_ENV !== "production" && (mg.displayName = "DialogContext");
const rV = We(XI, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), iV = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: a
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${Fn(n)}`],
    paper: ["paper", `paperScroll${Fn(n)}`, `paperWidth${Fn(String(r))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return wn(l, nV, t);
}, oV = We(VI, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), aV = We("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${Fn(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), sV = We(a1, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${Fn(n.scroll)}`], t[`paperWidth${Fn(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Gi(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${xd.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${xd.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${xd.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Kk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiDialog"
  }), i = Qb(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": l,
    "aria-labelledby": u,
    "aria-modal": f = !0,
    BackdropComponent: d,
    BackdropProps: p,
    children: g,
    className: _,
    disableEscapeKeyDown: y = !1,
    fullScreen: k = !1,
    fullWidth: x = !1,
    maxWidth: O = "sm",
    onBackdropClick: S,
    onClick: M,
    onClose: T,
    open: L,
    PaperComponent: K = a1,
    PaperProps: N = {},
    scroll: W = "paper",
    slots: ne = {},
    slotProps: oe = {},
    TransitionComponent: le = ev,
    transitionDuration: Q = a,
    TransitionProps: V,
    ...he
  } = r, me = {
    ...r,
    disableEscapeKeyDown: y,
    fullScreen: k,
    fullWidth: x,
    maxWidth: O,
    scroll: W
  }, ce = iV(me), Me = Ne.useRef(), $e = (bt) => {
    Me.current = bt.target === bt.currentTarget;
  }, Ye = (bt) => {
    M && M(bt), Me.current && (Me.current = null, S && S(bt), T && T(bt, "backdropClick"));
  }, ve = n1(u), C = Ne.useMemo(() => ({
    titleId: ve
  }), [ve]), Ae = {
    transition: le,
    ...ne
  }, pt = {
    transition: V,
    paper: N,
    backdrop: p,
    ...oe
  }, P = {
    slots: Ae,
    slotProps: pt
  }, [be, de] = rr("root", {
    elementType: oV,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: me,
    className: $t(ce.root, _),
    ref: n
  }), [Pe, st] = rr("backdrop", {
    elementType: rV,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: me
  }), [Lt, Rt] = rr("paper", {
    elementType: sV,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: me,
    className: $t(ce.paper, N.className)
  }), [Un, lt] = rr("container", {
    elementType: aV,
    externalForwardedProps: P,
    ownerState: me,
    className: $t(ce.container)
  }), [xn, ki] = rr("transition", {
    elementType: ev,
    externalForwardedProps: P,
    ownerState: me,
    additionalProps: {
      appear: !0,
      in: L,
      timeout: Q,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ A(be, {
    closeAfterTransition: !0,
    slots: {
      backdrop: Pe
    },
    slotProps: {
      backdrop: {
        transitionDuration: Q,
        as: d,
        ...st
      }
    },
    disableEscapeKeyDown: y,
    onClose: T,
    open: L,
    onClick: Ye,
    ...de,
    ...he,
    children: /* @__PURE__ */ A(xn, {
      ...ki,
      children: /* @__PURE__ */ A(Un, {
        onMouseDown: $e,
        ...lt,
        children: /* @__PURE__ */ A(Lt, {
          as: K,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": ve,
          "aria-modal": f,
          ...Rt,
          children: /* @__PURE__ */ A(mg.Provider, {
            value: C,
            children: g
          })
        })
      })
    })
  });
});
Ve.env.NODE_ENV !== "production" && (Kk.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": m.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": m.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": m.oneOfType([m.oneOf(["false", "true"]), m.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: m.elementType,
  /**
   * @ignore
   */
  BackdropProps: m.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: m.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: m.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: m.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: m.oneOfType([m.oneOf(["xs", "sm", "md", "lg", "xl", !1]), m.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: m.func,
  /**
   * @ignore
   */
  onClick: m.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: m.func,
  /**
   * If `true`, the component is shown.
   */
  open: m.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: m.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: m.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: m.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: m.shape({
    backdrop: m.oneOfType([m.func, m.object]),
    container: m.oneOfType([m.func, m.object]),
    paper: m.oneOfType([m.func, m.object]),
    root: m.oneOfType([m.func, m.object]),
    transition: m.oneOfType([m.func, m.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: m.shape({
    backdrop: m.elementType,
    container: m.elementType,
    paper: m.elementType,
    root: m.elementType,
    transition: m.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: m.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: m.oneOfType([m.number, m.shape({
    appear: m.number,
    enter: m.number,
    exit: m.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: m.object
});
function lV(e) {
  return bn("MuiDialogActions", e);
}
Jt("MuiDialogActions", ["root", "spacing"]);
const uV = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return wn({
    root: ["root", !n && "spacing"]
  }, lV, t);
}, cV = We("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), Fk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...l
  } = r, u = {
    ...r,
    disableSpacing: a
  }, f = uV(u);
  return /* @__PURE__ */ A(cV, {
    className: $t(f.root, i),
    ownerState: u,
    ref: n,
    ...l
  });
});
Ve.env.NODE_ENV !== "production" && (Fk.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
function fV(e) {
  return bn("MuiDialogContent", e);
}
Jt("MuiDialogContent", ["root", "dividers"]);
function dV(e) {
  return bn("MuiDialogTitle", e);
}
const hV = Jt("MuiDialogTitle", ["root"]), pV = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return wn({
    root: ["root", n && "dividers"]
  }, fV, t);
}, gV = We("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Gi(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${hV.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), $k = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...l
  } = r, u = {
    ...r,
    dividers: a
  }, f = pV(u);
  return /* @__PURE__ */ A(gV, {
    className: $t(f.root, i),
    ownerState: u,
    ref: n,
    ...l
  });
});
Ve.env.NODE_ENV !== "production" && ($k.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const yV = (e) => {
  const {
    classes: t
  } = e;
  return wn({
    root: ["root"]
  }, dV, t);
}, mV = We(uo, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Hk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...l
  } = r, u = r, f = yV(u), {
    titleId: d = a
  } = Ne.useContext(mg);
  return /* @__PURE__ */ A(mV, {
    component: "h2",
    className: $t(f.root, i),
    ownerState: u,
    ref: n,
    variant: "h6",
    id: a ?? d,
    ...l
  });
});
Ve.env.NODE_ENV !== "production" && (Hk.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * @ignore
   */
  id: m.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const Nb = Jt("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function vV(e) {
  return bn("MuiFormControlLabel", e);
}
const ns = Jt("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), _V = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: i,
    required: a
  } = e, l = {
    root: ["root", n && "disabled", `labelPlacement${Fn(r)}`, i && "error", a && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return wn(l, vV, t);
}, bV = We("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ns.label}`]: t.label
    }, t.root, t[`labelPlacement${Fn(n.labelPlacement)}`]];
  }
})(Gi(({
  theme: e
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${ns.disabled}`]: {
    cursor: "default"
  },
  [`& .${ns.label}`]: {
    [`&.${ns.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement: t
    }) => t === "start" || t === "top" || t === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
}))), wV = We("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Gi(({
  theme: e
}) => ({
  [`&.${ns.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), bu = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: i,
    className: a,
    componentsProps: l = {},
    control: u,
    disabled: f,
    disableTypography: d,
    inputRef: p,
    label: g,
    labelPlacement: _ = "end",
    name: y,
    onChange: k,
    required: x,
    slots: O = {},
    slotProps: S = {},
    value: M,
    ...T
  } = r, L = qu(), K = f ?? u.props.disabled ?? (L == null ? void 0 : L.disabled), N = x ?? u.props.required, W = {
    disabled: K,
    required: N
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((ce) => {
    typeof u.props[ce] > "u" && typeof r[ce] < "u" && (W[ce] = r[ce]);
  });
  const ne = s1({
    props: r,
    muiFormControl: L,
    states: ["error"]
  }), oe = {
    ...r,
    disabled: K,
    labelPlacement: _,
    required: N,
    error: ne.error
  }, le = _V(oe), Q = {
    slots: O,
    slotProps: {
      ...l,
      ...S
    }
  }, [V, he] = rr("typography", {
    elementType: uo,
    externalForwardedProps: Q,
    ownerState: oe
  });
  let me = g;
  return me != null && me.type !== uo && !d && (me = /* @__PURE__ */ A(V, {
    component: "span",
    ...he,
    className: $t(le.label, he == null ? void 0 : he.className),
    children: me
  })), /* @__PURE__ */ He(bV, {
    className: $t(le.root, a),
    ownerState: oe,
    ref: n,
    ...T,
    children: [/* @__PURE__ */ Ne.cloneElement(u, W), N ? /* @__PURE__ */ He("div", {
      children: [me, /* @__PURE__ */ He(wV, {
        ownerState: oe,
        "aria-hidden": !0,
        className: le.asterisk,
        children: [" ", "*"]
      })]
    }) : me]
  });
});
Ve.env.NODE_ENV !== "production" && (bu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: m.shape({
    typography: m.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: m.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: m.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: m.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: tp,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: m.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: m.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: m.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: m.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: m.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: m.shape({
    typography: m.oneOfType([m.func, m.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: m.shape({
    typography: m.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The value of the component.
   */
  value: m.any
});
function kV(e) {
  return bn("MuiFormGroup", e);
}
Jt("MuiFormGroup", ["root", "row", "error"]);
const xV = (e) => {
  const {
    classes: t,
    row: n,
    error: r
  } = e;
  return wn({
    root: ["root", n && "row", r && "error"]
  }, kV, t);
}, SV = We("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), zk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: i,
    row: a = !1,
    ...l
  } = r, u = qu(), f = s1({
    props: r,
    muiFormControl: u,
    states: ["error"]
  }), d = {
    ...r,
    row: a,
    error: f.error
  }, p = xV(d);
  return /* @__PURE__ */ A(SV, {
    className: $t(p.root, i),
    ownerState: d,
    ref: n,
    ...l
  });
});
Ve.env.NODE_ENV !== "production" && (zk.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * Display group of elements in a compact row.
   * @default false
   */
  row: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object])
});
const Kb = Jt("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function CV(e) {
  return bn("MuiMenuItem", e);
}
const Qa = Jt("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), EV = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, OV = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: a,
    classes: l
  } = e, f = wn({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", a && "selected"]
  }, CV, l);
  return {
    ...l,
    ...f
  };
}, PV = We(Qh, {
  shouldForwardProp: (e) => Ds(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: EV
})(Gi(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Qa.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Qa.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Qa.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Lr(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Qa.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qa.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Nb.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Nb.inset}`]: {
    marginLeft: 52
  },
  [`& .${Xo.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Xo.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Kb.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${Kb.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Bk = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: a = "li",
    dense: l = !1,
    divider: u = !1,
    disableGutters: f = !1,
    focusVisibleClassName: d,
    role: p = "menuitem",
    tabIndex: g,
    className: _,
    ...y
  } = r, k = Ne.useContext(ua), x = Ne.useMemo(() => ({
    dense: l || k.dense || !1,
    disableGutters: f
  }), [k.dense, l, f]), O = Ne.useRef(null);
  Jb(() => {
    i && (O.current ? O.current.focus() : Ve.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const S = {
    ...r,
    dense: x.dense,
    divider: u,
    disableGutters: f
  }, M = OV(r), T = Jh(O, n);
  let L;
  return r.disabled || (L = g !== void 0 ? g : -1), /* @__PURE__ */ A(ua.Provider, {
    value: x,
    children: /* @__PURE__ */ A(PV, {
      ref: T,
      role: p,
      tabIndex: L,
      component: a,
      focusVisibleClassName: $t(M.focusVisible, d),
      className: $t(M.root, _),
      ...y,
      ownerState: S,
      classes: M
    })
  });
});
Ve.env.NODE_ENV !== "production" && (Bk.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: m.bool,
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: m.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: m.bool,
  /**
   * @ignore
   */
  disabled: m.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: m.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: m.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: m.string,
  /**
   * @ignore
   */
  role: m.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: m.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * @default 0
   */
  tabIndex: m.number
});
const IV = fr(/* @__PURE__ */ A("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), TV = fr(/* @__PURE__ */ A("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), MV = We("span", {
  shouldForwardProp: Ds
})({
  position: "relative",
  display: "flex"
}), AV = We(IV)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), DV = We(TV)(Gi(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      transition: e.transitions.create("transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function vg(e) {
  const {
    checked: t = !1,
    classes: n = {},
    fontSize: r
  } = e, i = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ He(MV, {
    className: n.root,
    ownerState: i,
    children: [/* @__PURE__ */ A(AV, {
      fontSize: r,
      className: n.background,
      ownerState: i
    }), /* @__PURE__ */ A(DV, {
      fontSize: r,
      className: n.dot,
      ownerState: i
    })]
  });
}
Ve.env.NODE_ENV !== "production" && (vg.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: m.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: m.oneOf(["small", "medium"])
});
const _g = /* @__PURE__ */ Ne.createContext(void 0);
Ve.env.NODE_ENV !== "production" && (_g.displayName = "RadioGroupContext");
function LV() {
  return Ne.useContext(_g);
}
function RV(e) {
  return bn("MuiRadio", e);
}
const Fb = Jt("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), NV = (e) => {
  const {
    classes: t,
    color: n,
    size: r
  } = e, i = {
    root: ["root", `color${Fn(n)}`, r !== "medium" && `size${Fn(r)}`]
  };
  return {
    ...t,
    ...wn(i, RV, t)
  };
}, KV = We(Nk, {
  shouldForwardProp: (e) => Ds(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size !== "medium" && t[`size${Fn(n.size)}`], t[`color${Fn(n.color)}`]];
  }
})(Gi(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Fb.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Lr(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Jm()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Lr(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Jm()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Fb.checked}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function FV(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const $V = /* @__PURE__ */ A(vg, {
  checked: !0
}), HV = /* @__PURE__ */ A(vg, {}), wu = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const r = dr({
    props: t,
    name: "MuiRadio"
  }), {
    checked: i,
    checkedIcon: a = $V,
    color: l = "primary",
    icon: u = HV,
    name: f,
    onChange: d,
    size: p = "medium",
    className: g,
    disabled: _,
    disableRipple: y = !1,
    slots: k = {},
    slotProps: x = {},
    inputProps: O,
    ...S
  } = r, M = qu();
  let T = _;
  M && typeof T > "u" && (T = M.disabled), T ?? (T = !1);
  const L = {
    ...r,
    disabled: T,
    disableRipple: y,
    color: l,
    size: p
  }, K = NV(L), N = LV();
  let W = i;
  const ne = ZI(d, N && N.onChange);
  let oe = f;
  N && (typeof W > "u" && (W = FV(N.value, r.value)), typeof oe > "u" && (oe = N.name));
  const le = x.input ?? O, [Q, V] = rr("root", {
    ref: n,
    elementType: KV,
    className: $t(K.root, g),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: k,
      slotProps: x,
      ...S
    },
    getSlotProps: (he) => ({
      ...he,
      onChange: (me, ...ce) => {
        var Me;
        (Me = he.onChange) == null || Me.call(he, me, ...ce), ne(me, ...ce);
      }
    }),
    ownerState: L,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ Ne.cloneElement(u, {
        fontSize: u.props.fontSize ?? p
      }),
      checkedIcon: /* @__PURE__ */ Ne.cloneElement(a, {
        fontSize: a.props.fontSize ?? p
      }),
      disabled: T,
      name: oe,
      checked: W,
      slots: k,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof le == "function" ? le(L) : le
      }
    }
  });
  return /* @__PURE__ */ A(Q, {
    ...V,
    classes: K
  });
});
Ve.env.NODE_ENV !== "production" && (wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: m.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: m.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: m.object,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: m.oneOfType([m.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), m.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: m.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: m.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: m.node,
  /**
   * The id of the `input` element.
   */
  id: m.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: m.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: tp,
  /**
   * Name attribute of the `input` element.
   */
  name: m.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: m.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: m.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: m.oneOfType([m.oneOf(["medium", "small"]), m.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: m.shape({
    input: m.oneOfType([m.func, m.object]),
    root: m.oneOfType([m.func, m.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: m.shape({
    input: m.elementType,
    root: m.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: m.oneOfType([m.arrayOf(m.oneOfType([m.func, m.object, m.bool])), m.func, m.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: m.any
});
function zV(e) {
  return bn("MuiRadioGroup", e);
}
Jt("MuiRadioGroup", ["root", "row", "error"]);
const BV = (e) => {
  const {
    classes: t,
    row: n,
    error: r
  } = e;
  return wn({
    root: ["root", n && "row", r && "error"]
  }, zV, t);
}, ku = /* @__PURE__ */ Ne.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    children: i,
    className: a,
    defaultValue: l,
    name: u,
    onChange: f,
    value: d,
    ...p
  } = t, g = Ne.useRef(null), _ = BV(t), [y, k] = t1({
    controlled: d,
    default: l,
    name: "RadioGroup"
  });
  Ne.useImperativeHandle(r, () => ({
    focus: () => {
      let M = g.current.querySelector("input:not(:disabled):checked");
      M || (M = g.current.querySelector("input:not(:disabled)")), M && M.focus();
    }
  }), []);
  const x = Jh(n, g), O = n1(u), S = Ne.useMemo(() => ({
    name: O,
    onChange(M) {
      k(M.target.value), f && f(M, M.target.value);
    },
    value: y
  }), [O, f, k, y]);
  return /* @__PURE__ */ A(_g.Provider, {
    value: S,
    children: /* @__PURE__ */ A(zk, {
      role: "radiogroup",
      ref: x,
      className: $t(_.root, a),
      ...p,
      children: i
    })
  });
});
Ve.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: m.node,
  /**
   * @ignore
   */
  className: m.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: m.any,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: m.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: m.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: m.any
});
const Ts = {
  YES: "1",
  NO: "2"
}, Sd = (e) => e === Ts.YES, Cd = (e) => e ? Ts.YES : Ts.NO, Ed = [
  {
    value: Ts.YES,
    label: "Yes"
  },
  {
    value: Ts.NO,
    label: "No"
  }
], $b = ["0.25x", "0.5x", "1x", "2x"], UV = ({ open: e, onClose: t }) => {
  const n = np(), [r, i] = Vo(
    Cd(n.showCrosshairs)
  ), [a, l] = Vo(
    Cd(n.showHighlightBox)
  ), [u, f] = Vo(
    Cd(n.wasdMode)
  ), [d, p] = Vo(
    n.videoPlaybackSpeed ?? $b[2]
  );
  return /* @__PURE__ */ He(Kk, { open: e || !1, onClose: t, children: [
    /* @__PURE__ */ A(Hk, { children: "Settings" }),
    /* @__PURE__ */ He($k, { style: { minWidth: 400 }, children: [
      /* @__PURE__ */ He(Rl, { fullWidth: !0, children: [
        /* @__PURE__ */ A(Wf, { id: "row-radio-buttons-group-label", children: "Show Crosshairs" }),
        /* @__PURE__ */ A(
          ku,
          {
            row: !0,
            value: r,
            "aria-labelledby": "row-radio-buttons-group-label",
            name: "row-radio-buttons-group",
            onChange: (g, _) => {
              if (i(_), n.changeSetting) {
                const y = Sd(_);
                n.changeSetting("showCrosshairs", y);
              }
            },
            children: Ed.map((g) => /* @__PURE__ */ A(
              bu,
              {
                value: g.value,
                control: /* @__PURE__ */ A(wu, {}),
                label: g.label
              },
              g.value
            ))
          }
        )
      ] }),
      /* @__PURE__ */ He(Rl, { fullWidth: !0, children: [
        /* @__PURE__ */ A(Wf, { id: "row-radio-buttons-group-label", children: "Show Highlight Box" }),
        /* @__PURE__ */ A(
          ku,
          {
            row: !0,
            value: a,
            "aria-labelledby": "row-radio-buttons-group-label",
            name: "row-radio-buttons-group",
            onChange: (g, _) => {
              if (l(_), n.changeSetting) {
                const y = Sd(_);
                n.changeSetting("showHighlightBox", y);
              }
            },
            children: Ed.map((g) => /* @__PURE__ */ A(
              bu,
              {
                value: g.value,
                control: /* @__PURE__ */ A(wu, {}),
                label: g.label
              },
              g.value
            ))
          }
        )
      ] }),
      /* @__PURE__ */ He(Rl, { fullWidth: !0, children: [
        /* @__PURE__ */ A(Wf, { id: "row-radio-buttons-group-label", children: "WASD Mode" }),
        /* @__PURE__ */ A(
          ku,
          {
            row: !0,
            value: u,
            "aria-labelledby": "row-radio-buttons-group-label",
            name: "row-radio-buttons-group",
            onChange: (g, _) => {
              if (f(_), n.changeSetting) {
                const y = Sd(_);
                n.changeSetting("wasdMode", y);
              }
            },
            children: Ed.map((g) => /* @__PURE__ */ A(
              bu,
              {
                value: g.value,
                control: /* @__PURE__ */ A(wu, {}),
                label: g.label
              },
              g.value
            ))
          }
        )
      ] }),
      /* @__PURE__ */ He(Rl, { fullWidth: !0, children: [
        /* @__PURE__ */ A(JI, { id: "simple-select-label", children: "Video Playback Speed" }),
        /* @__PURE__ */ A(
          QI,
          {
            labelId: "simple-select-label",
            id: "simple-select",
            value: d,
            label: "Video Playback Speed",
            onChange: (g) => {
              const _ = g.target.value;
              p(_), n.changeSetting && n.changeSetting("videoPlaybackSpeed", _);
            },
            children: $b.map((g) => /* @__PURE__ */ A(Bk, { value: g, children: g }, g))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ A(Fk, { children: /* @__PURE__ */ A($I, { onClick: t, children: "Close" }) })
  ] });
}, jV = $r(), WV = Ls.create({
  container: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    maxHeight: "100vh",
    backgroundColor: "#fff",
    overflow: "hidden",
    "&.fullscreen": {
      position: "absolute",
      zIndex: 99999,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  headerTitle: {
    fontWeight: "bold",
    color: ur[700],
    paddingLeft: 16
  }
}), YV = We("div")(() => ({
  width: "100%",
  height: "100%",
  "& .fullscreen": {
    width: "100%",
    height: "100%"
  }
})), GV = Xb(({
  state: e,
  dispatch: t,
  RegionEditLabel: n,
  onRegionClassAdded: r,
  hideHeader: i,
  hideHeaderText: a,
  hideNext: l = !1,
  hidePrev: u = !1,
  hideClone: f = !1,
  hideSettings: d = !1,
  hideFullScreen: p = !1,
  hideSave: g = !1,
  customeHeaderItem: _
}, y) => {
  const { classes: k } = WV(), x = np(), O = nT(), S = li(
    {}
  ), M = li(null);
  Zb(y, () => ({
    clickHeaderButton(ve) {
      var C;
      (C = M.current) == null || C.clickHeaderButton(ve);
    }
  }));
  const T = (ve, ...C) => {
    const Ae = `${ve}(${C.join(",")})`;
    if (S.current[Ae])
      return S.current[Ae];
    const pt = (...P) => C.length > 0 ? t({
      type: ve,
      ...C.reduce((be, de, Pe) => (be[de] = P[Pe], be), {})
    }) : t({ type: ve, ...P[0] });
    return S.current[Ae] = pt, pt;
  }, { currentImageIndex: L, activeImage: K } = Vp(e);
  let N;
  L !== null && "images" in e && (N = e.images[+L + 1]), Vq(() => t({ type: "CANCEL" }), {
    detectKeys: [27]
  });
  const W = li(null), ne = zq({ dispatch: t }), oe = Id(
    (ve) => {
      const C = ve.target;
      W.current && (W.current.contains(document.activeElement) || W.current.contains(C) && (W.current.focus(), C.focus()));
    },
    []
  ), le = /* @__PURE__ */ OI(
    $H,
    {
      ...x,
      showCrosshairs: x.showCrosshairs && !["select", "pan", "zoom"].includes(e.selectedTool),
      key: e.selectedImage,
      showMask: e.showMask,
      fullImageSegmentationMode: e.fullImageSegmentationMode,
      autoSegmentationOptions: e.autoSegmentationOptions,
      showTags: e.showTags,
      allowedArea: e.allowedArea,
      modifyingAllowedArea: e.selectedTool === "modify-allowed-area",
      regionClsList: e.regionClsList,
      regionTagList: e.regionTagList,
      regionTagSingleSelection: e.regionTagSingleSelection,
      regions: (K == null ? void 0 : K.regions) || [],
      realSize: K && "realSize" in K ? K.realSize : void 0,
      imageSrc: K && "src" in K ? K.src : null,
      pointDistancePrecision: e.pointDistancePrecision,
      createWithPrimary: e.selectedTool.includes("create"),
      dragWithPrimary: e.selectedTool === "pan",
      zoomWithPrimary: e.selectedTool === "zoom",
      showPointDistances: e.showPointDistances,
      keypointDefinitions: e.keypointDefinitions,
      onMouseMove: T("MOUSE_MOVE"),
      onMouseDown: T("MOUSE_DOWN"),
      onMouseUp: T("MOUSE_UP"),
      onChangeRegion: T("CHANGE_REGION", "region"),
      onBeginRegionEdit: T("OPEN_REGION_EDITOR", "region"),
      onCloseRegionEdit: T("CLOSE_REGION_EDITOR", "region"),
      onDeleteRegion: T("DELETE_REGION", "region"),
      onBeginBoxTransform: T("BEGIN_BOX_TRANSFORM", "box", "directions"),
      onBeginMovePolygonPoint: T(
        "BEGIN_MOVE_POLYGON_POINT",
        "polygon",
        "pointIndex"
      ),
      onBeginMoveKeypoint: T(
        "BEGIN_MOVE_KEYPOINT",
        "region",
        "keypointId"
      ),
      onAddPolygonPoint: T(
        "ADD_POLYGON_POINT",
        "polygon",
        "point",
        "pointIndex"
      ),
      onSelectRegion: T("SELECT_REGION", "region"),
      onBeginMovePoint: T("BEGIN_MOVE_POINT", "point"),
      RegionEditLabel: n,
      onImageLoaded: T("IMAGE_LOADED", "metadata"),
      onRegionClassAdded: r,
      allowComments: e.allowComments
    }
  ), Q = hi((ve) => {
    t({ type: "SELECT_TOOL", selectedTool: ve.name });
  }), V = hi((ve) => {
    const C = ve.name.toLowerCase();
    C === "fullscreen" ? O.enter() : C === "window" && O.exit(), t({
      type: "HEADER_BUTTON_CLICKED",
      buttonName: ve.name
    });
  }), he = !!(window.localStorage.$ANNOTATE_DEBUG_MODE && e), me = !N || N.regions && N.regions.length > 0, ce = Ki(
    () => [
      !u && { name: "Prev" },
      !l && { name: "Next" },
      !f && !me && (K == null ? void 0 : K.regions) && { name: "Clone" },
      !d && { name: "Settings" },
      !p && (e.fullScreen ? { name: "Window" } : { name: "Fullscreen" }),
      !g && { name: "Save" }
    ].reduce((ve, C) => (C && ve.push(C), ve), []),
    [
      e.fullScreen,
      u,
      l,
      f,
      d,
      p,
      g
    ]
  ), Me = Zq.filter((ve) => ve.name === "show-mask" ? e.fullImageSegmentationMode : "alwaysShowing" in ve || e.enabledTools.includes(ve.name)), $e = [
    K ? /* @__PURE__ */ A("div", { className: k.headerTitle, children: "name" in K ? K.name : "" }, "active-item-name") : null
  ].filter(Xq), Ye = [
    he && /* @__PURE__ */ A(JM, { state: e, lastAction: e.lastAction }, "debuxBox"),
    e.taskDescription && /* @__PURE__ */ A(
      oU,
      {
        description: e.taskDescription
      },
      "taskDescription"
    ),
    e.regionClsList && /* @__PURE__ */ A(
      ZM,
      {
        selectedCls: e.selectedCls,
        regionClsList: e.regionClsList,
        onSelectCls: T("SELECT_CLASSIFICATION", "cls")
      },
      "classSelectionMenu"
    ),
    e.labelImages && /* @__PURE__ */ A(
      p6,
      {
        currentImage: K,
        imageClsList: e.imageClsList,
        imageTagList: e.imageTagList,
        onChangeImage: T("CHANGE_IMAGE", "delta"),
        expandedByDefault: !0
      },
      "tagsSidebarBox"
    ),
    /* @__PURE__ */ A(
      c6,
      {
        regionClsList: e.regionClsList,
        regions: K ? K.regions : [],
        regionAllowedActions: e.regionAllowedActions,
        onSelectRegion: T("SELECT_REGION", "region"),
        onDeleteRegion: T("DELETE_REGION", "region"),
        onChangeRegion: T("CHANGE_REGION", "region")
      },
      "regionSelector"
    ),
    /* @__PURE__ */ A(
      bH,
      {
        history: e.history,
        onRestoreHistory: T("RESTORE_HISTORY")
      },
      "historySidebarBox"
    )
  ].reduce((ve, C) => (C && ve.push(C), ve), []);
  return /* @__PURE__ */ A(Hr, { theme: jV, children: /* @__PURE__ */ A(YV, { children: /* @__PURE__ */ A(
    rT,
    {
      handle: O,
      onChange: (ve) => {
        ve || (O.exit(), T("HEADER_BUTTON_CLICKED", "buttonName")("window"));
      },
      children: /* @__PURE__ */ He(
        Rk.HotKeys,
        {
          tabIndex: -1,
          innerRef: W,
          onMouseDown: oe,
          onMouseOver: oe,
          allowChanges: !0,
          handlers: ne,
          className: ea(
            k.container,
            e.fullScreen && "Fullscreen"
          ),
          children: [
            /* @__PURE__ */ A(
              AI,
              {
                ref: M,
                allowFullscreen: !0,
                iconDictionary: hW,
                hideHeader: i,
                hideHeaderText: a,
                headerLeftSide: $e,
                headerItems: ce,
                onClickHeaderItem: V,
                onClickIconSidebarItem: Q,
                selectedTools: [
                  e.selectedTool,
                  e.showTags && "show-tags",
                  e.showMask && "show-mask"
                ].filter(Boolean),
                iconSidebarItems: Me,
                rightSidebarItems: Ye,
                customeHeaderItem: _,
                children: le
              }
            ),
            /* @__PURE__ */ A(
              UV,
              {
                open: e.settingsOpen || !1,
                onClose: () => t({
                  type: "HEADER_BUTTON_CLICKED",
                  buttonName: "Settings"
                })
              }
            )
          ]
        }
      )
    }
  ) }) });
}), qV = (...e) => (t, n) => {
  for (const r of e)
    t = r(t, n);
  return t;
};
var Uk = Symbol.for("immer-nothing"), Hb = Symbol.for("immer-draftable"), $n = Symbol.for("immer-state"), VV = Ve.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function vn(e, ...t) {
  if (Ve.env.NODE_ENV !== "production") {
    const n = VV[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ha = Object.getPrototypeOf;
function pa(e) {
  return !!e && !!e[$n];
}
function wo(e) {
  var t;
  return e ? jk(e) || Array.isArray(e) || !!e[Hb] || !!((t = e.constructor) != null && t[Hb]) || Ic(e) || Tc(e) : !1;
}
var XV = Object.prototype.constructor.toString();
function jk(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ha(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === XV;
}
function Bu(e, t) {
  Pc(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Pc(e) {
  const t = e[$n];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ic(e) ? 2 : Tc(e) ? 3 : 0;
}
function Wh(e, t) {
  return Pc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Wk(e, t, n) {
  const r = Pc(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function ZV(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ic(e) {
  return e instanceof Map;
}
function Tc(e) {
  return e instanceof Set;
}
function so(e) {
  return e.copy_ || e.base_;
}
function Yh(e, t) {
  if (Ic(e))
    return new Map(e);
  if (Tc(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = jk(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[$n];
    let i = Reflect.ownKeys(r);
    for (let a = 0; a < i.length; a++) {
      const l = i[a], u = r[l];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (r[l] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[l]
      });
    }
    return Object.create(ha(e), r);
  } else {
    const r = ha(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function bg(e, t = !1) {
  return Mc(e) || pa(e) || !wo(e) || (Pc(e) > 1 && (e.set = e.add = e.clear = e.delete = JV), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => bg(r, !0))), e;
}
function JV() {
  vn(2);
}
function Mc(e) {
  return Object.isFrozen(e);
}
var QV = {};
function ko(e) {
  const t = QV[e];
  return t || vn(0, e), t;
}
var Ms;
function Yk() {
  return Ms;
}
function eX(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function zb(e, t) {
  t && (ko("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Gh(e) {
  qh(e), e.drafts_.forEach(tX), e.drafts_ = null;
}
function qh(e) {
  e === Ms && (Ms = e.parent_);
}
function Bb(e) {
  return Ms = eX(Ms, e);
}
function tX(e) {
  const t = e[$n];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ub(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[$n].modified_ && (Gh(t), vn(4)), wo(e) && (e = Uu(t, e), t.parent_ || ju(t, e)), t.patches_ && ko("Patches").generateReplacementPatches_(
    n[$n].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Uu(t, n, []), Gh(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Uk ? e : void 0;
}
function Uu(e, t, n) {
  if (Mc(t))
    return t;
  const r = t[$n];
  if (!r)
    return Bu(
      t,
      (i, a) => jb(e, r, t, i, a, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return ju(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let a = i, l = !1;
    r.type_ === 3 && (a = new Set(i), i.clear(), l = !0), Bu(
      a,
      (u, f) => jb(e, r, i, u, f, n, l)
    ), ju(e, i, !1), n && e.patches_ && ko("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function jb(e, t, n, r, i, a, l) {
  if (Ve.env.NODE_ENV !== "production" && i === n && vn(5), pa(i)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Wh(t.assigned_, r) ? a.concat(r) : void 0, f = Uu(e, i, u);
    if (Wk(n, r, f), pa(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else l && n.add(i);
  if (wo(i) && !Mc(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Uu(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && ju(e, i);
  }
}
function ju(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bg(t, n);
}
function nX(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Yk(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, a = wg;
  n && (i = [r], a = As);
  const { revoke: l, proxy: u } = Proxy.revocable(i, a);
  return r.draft_ = u, r.revoke_ = l, u;
}
var wg = {
  get(e, t) {
    if (t === $n)
      return e;
    const n = so(e);
    if (!Wh(n, t))
      return rX(e, n, t);
    const r = n[t];
    return e.finalized_ || !wo(r) ? r : r === Od(e.base_, t) ? (Pd(e), e.copy_[t] = Xh(r, e)) : r;
  },
  has(e, t) {
    return t in so(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(so(e));
  },
  set(e, t, n) {
    const r = Gk(so(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Od(so(e), t), a = i == null ? void 0 : i[$n];
      if (a && a.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (ZV(n, i) && (n !== void 0 || Wh(e.base_, t)))
        return !0;
      Pd(e), Vh(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Od(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Pd(e), Vh(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = so(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    vn(11);
  },
  getPrototypeOf(e) {
    return ha(e.base_);
  },
  setPrototypeOf() {
    vn(12);
  }
}, As = {};
Bu(wg, (e, t) => {
  As[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
As.deleteProperty = function(e, t) {
  return Ve.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && vn(13), As.set.call(this, e, t, void 0);
};
As.set = function(e, t, n) {
  return Ve.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && vn(14), wg.set.call(this, e[0], t, n, e[0]);
};
function Od(e, t) {
  const n = e[$n];
  return (n ? so(n) : e)[t];
}
function rX(e, t, n) {
  var i;
  const r = Gk(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Gk(e, t) {
  if (!(t in e))
    return;
  let n = ha(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ha(n);
  }
}
function Vh(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Vh(e.parent_));
}
function Pd(e) {
  e.copy_ || (e.copy_ = Yh(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var iX = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const a = n;
        n = t;
        const l = this;
        return function(f = a, ...d) {
          return l.produce(f, (p) => n.call(this, p, ...d));
        };
      }
      typeof n != "function" && vn(6), r !== void 0 && typeof r != "function" && vn(7);
      let i;
      if (wo(t)) {
        const a = Bb(this), l = Xh(t, void 0);
        let u = !0;
        try {
          i = n(l), u = !1;
        } finally {
          u ? Gh(a) : qh(a);
        }
        return zb(a, r), Ub(i, a);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === Uk && (i = void 0), this.autoFreeze_ && bg(i, !0), r) {
          const a = [], l = [];
          ko("Patches").generateReplacementPatches_(t, i, a, l), r(a, l);
        }
        return i;
      } else
        vn(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (l, ...u) => this.produceWithPatches(l, (f) => t(f, ...u));
      let r, i;
      return [this.produce(t, n, (l, u) => {
        r = l, i = u;
      }), r, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    wo(e) || vn(8), pa(e) && (e = oX(e));
    const t = Bb(this), n = Xh(e, void 0);
    return n[$n].isManual_ = !0, qh(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[$n];
    (!n || !n.isManual_) && vn(9);
    const { scope_: r } = n;
    return zb(r, t), Ub(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ko("Patches").applyPatches_;
    return pa(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function Xh(e, t) {
  const n = Ic(e) ? ko("MapSet").proxyMap_(e, t) : Tc(e) ? ko("MapSet").proxySet_(e, t) : nX(e, t);
  return (t ? t.scope_ : Yk()).drafts_.push(n), n;
}
function oX(e) {
  return pa(e) || vn(10, e), qk(e);
}
function qk(e) {
  if (!wo(e) || Mc(e))
    return e;
  const t = e[$n];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Yh(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Yh(e, !0);
  return Bu(n, (r, i) => {
    Wk(n, r, qk(i));
  }), t && (t.finalized_ = !1), n;
}
var Hn = new iX(), X = Hn.produce;
Hn.produceWithPatches.bind(
  Hn
);
Hn.setAutoFreeze.bind(Hn);
Hn.setUseStrictShallowCopy.bind(Hn);
Hn.applyPatches.bind(Hn);
Hn.createDraft.bind(Hn);
Hn.finishDraft.bind(Hn);
var aX = Co, sX = function() {
  try {
    var e = aX(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), lX = sX, Wb = lX;
function uX(e, t, n) {
  t == "__proto__" && Wb ? Wb(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var cX = uX, fX = cX, dX = Pp, hX = Object.prototype, pX = hX.hasOwnProperty;
function gX(e, t, n) {
  var r = e[t];
  (!(pX.call(e, t) && dX(r, n)) || n === void 0 && !(t in e)) && fX(e, t, n);
}
var yX = gX, mX = yX, vX = lw, _X = y0, Yb = Ip, bX = uw;
function wX(e, t, n, r) {
  if (!Yb(e))
    return e;
  t = vX(t, e);
  for (var i = -1, a = t.length, l = a - 1, u = e; u != null && ++i < a; ) {
    var f = bX(t[i]), d = n;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (i != l) {
      var p = u[f];
      d = r ? r(p, f, u) : void 0, d === void 0 && (d = Yb(p) ? p : _X(t[i + 1]) ? [] : {});
    }
    mX(u, f, d), u = u[f];
  }
  return e;
}
var kX = wX, xX = kX;
function SX(e, t, n) {
  return e == null ? e : xX(e, t, n);
}
var CX = SX;
const qe = /* @__PURE__ */ ga(CX);
var Wu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Wu.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", d = 500, p = "__lodash_placeholder__", g = 1, _ = 2, y = 4, k = 1, x = 2, O = 1, S = 2, M = 4, T = 8, L = 16, K = 32, N = 64, W = 128, ne = 256, oe = 512, le = 30, Q = "...", V = 800, he = 16, me = 1, ce = 2, Me = 3, $e = 1 / 0, Ye = 9007199254740991, ve = 17976931348623157e292, C = NaN, Ae = 4294967295, pt = Ae - 1, P = Ae >>> 1, be = [
      ["ary", W],
      ["bind", O],
      ["bindKey", S],
      ["curry", T],
      ["curryRight", L],
      ["flip", oe],
      ["partial", K],
      ["partialRight", N],
      ["rearg", ne]
    ], de = "[object Arguments]", Pe = "[object Array]", st = "[object AsyncFunction]", Lt = "[object Boolean]", Rt = "[object Date]", Un = "[object DOMException]", lt = "[object Error]", xn = "[object Function]", ki = "[object GeneratorFunction]", bt = "[object Map]", Sn = "[object Number]", Oo = "[object Null]", Ut = "[object Object]", Cn = "[object Promise]", Vi = "[object Proxy]", an = "[object RegExp]", en = "[object Set]", Wr = "[object String]", sn = "[object Symbol]", Nt = "[object Undefined]", jn = "[object WeakMap]", H = "[object WeakSet]", j = "[object ArrayBuffer]", ae = "[object DataView]", re = "[object Float32Array]", we = "[object Float64Array]", rt = "[object Int8Array]", Et = "[object Int16Array]", jt = "[object Int32Array]", Wn = "[object Uint8Array]", ln = "[object Uint8ClampedArray]", wt = "[object Uint16Array]", En = "[object Uint32Array]", un = /\b__p \+= '';/g, Ia = /\b(__p \+=) '' \+/g, Po = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Io = /&(?:amp|lt|gt|quot|#39);/g, kg = /[&<>"']/g, Xk = RegExp(Io.source), Zk = RegExp(kg.source), Jk = /<%-([\s\S]+?)%>/g, Qk = /<%([\s\S]+?)%>/g, xg = /<%=([\s\S]+?)%>/g, ex = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tx = /^\w*$/, nx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ac = /[\\^$.*+?()[\]{}|]/g, rx = RegExp(Ac.source), Dc = /^\s+/, ix = /\s/, ox = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ax = /\{\n\/\* \[wrapped with (.+)\] \*/, sx = /,? & /, lx = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ux = /[()=,{}\[\]\/\s]/, cx = /\\(\\)?/g, fx = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Sg = /\w*$/, dx = /^[-+]0x[0-9a-f]+$/i, hx = /^0b[01]+$/i, px = /^\[object .+?Constructor\]$/, gx = /^0o[0-7]+$/i, yx = /^(?:0|[1-9]\d*)$/, mx = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ys = /($^)/, vx = /['\n\r\u2028\u2029\\]/g, Gs = "\\ud800-\\udfff", _x = "\\u0300-\\u036f", bx = "\\ufe20-\\ufe2f", wx = "\\u20d0-\\u20ff", Cg = _x + bx + wx, Eg = "\\u2700-\\u27bf", Og = "a-z\\xdf-\\xf6\\xf8-\\xff", kx = "\\xac\\xb1\\xd7\\xf7", xx = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Sx = "\\u2000-\\u206f", Cx = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Pg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ig = "\\ufe0e\\ufe0f", Tg = kx + xx + Sx + Cx, Lc = "['’]", Ex = "[" + Gs + "]", Mg = "[" + Tg + "]", qs = "[" + Cg + "]", Ag = "\\d+", Ox = "[" + Eg + "]", Dg = "[" + Og + "]", Lg = "[^" + Gs + Tg + Ag + Eg + Og + Pg + "]", Rc = "\\ud83c[\\udffb-\\udfff]", Px = "(?:" + qs + "|" + Rc + ")", Rg = "[^" + Gs + "]", Nc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Kc = "[\\ud800-\\udbff][\\udc00-\\udfff]", To = "[" + Pg + "]", Ng = "\\u200d", Kg = "(?:" + Dg + "|" + Lg + ")", Ix = "(?:" + To + "|" + Lg + ")", Fg = "(?:" + Lc + "(?:d|ll|m|re|s|t|ve))?", $g = "(?:" + Lc + "(?:D|LL|M|RE|S|T|VE))?", Hg = Px + "?", zg = "[" + Ig + "]?", Tx = "(?:" + Ng + "(?:" + [Rg, Nc, Kc].join("|") + ")" + zg + Hg + ")*", Mx = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ax = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Bg = zg + Hg + Tx, Dx = "(?:" + [Ox, Nc, Kc].join("|") + ")" + Bg, Lx = "(?:" + [Rg + qs + "?", qs, Nc, Kc, Ex].join("|") + ")", Rx = RegExp(Lc, "g"), Nx = RegExp(qs, "g"), Fc = RegExp(Rc + "(?=" + Rc + ")|" + Lx + Bg, "g"), Kx = RegExp([
      To + "?" + Dg + "+" + Fg + "(?=" + [Mg, To, "$"].join("|") + ")",
      Ix + "+" + $g + "(?=" + [Mg, To + Kg, "$"].join("|") + ")",
      To + "?" + Kg + "+" + Fg,
      To + "+" + $g,
      Ax,
      Mx,
      Ag,
      Dx
    ].join("|"), "g"), Fx = RegExp("[" + Ng + Gs + Cg + Ig + "]"), $x = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Hx = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], zx = -1, ut = {};
    ut[re] = ut[we] = ut[rt] = ut[Et] = ut[jt] = ut[Wn] = ut[ln] = ut[wt] = ut[En] = !0, ut[de] = ut[Pe] = ut[j] = ut[Lt] = ut[ae] = ut[Rt] = ut[lt] = ut[xn] = ut[bt] = ut[Sn] = ut[Ut] = ut[an] = ut[en] = ut[Wr] = ut[jn] = !1;
    var it = {};
    it[de] = it[Pe] = it[j] = it[ae] = it[Lt] = it[Rt] = it[re] = it[we] = it[rt] = it[Et] = it[jt] = it[bt] = it[Sn] = it[Ut] = it[an] = it[en] = it[Wr] = it[sn] = it[Wn] = it[ln] = it[wt] = it[En] = !0, it[lt] = it[xn] = it[jn] = !1;
    var Bx = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ux = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, jx = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Wx = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Yx = parseFloat, Gx = parseInt, Ug = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, qx = typeof self == "object" && self && self.Object === Object && self, Ht = Ug || qx || Function("return this")(), $c = t && !t.nodeType && t, Xi = $c && !0 && e && !e.nodeType && e, jg = Xi && Xi.exports === $c, Hc = jg && Ug.process, Yn = function() {
      try {
        var D = Xi && Xi.require && Xi.require("util").types;
        return D || Hc && Hc.binding && Hc.binding("util");
      } catch {
      }
    }(), Wg = Yn && Yn.isArrayBuffer, Yg = Yn && Yn.isDate, Gg = Yn && Yn.isMap, qg = Yn && Yn.isRegExp, Vg = Yn && Yn.isSet, Xg = Yn && Yn.isTypedArray;
    function On(D, $, F) {
      switch (F.length) {
        case 0:
          return D.call($);
        case 1:
          return D.call($, F[0]);
        case 2:
          return D.call($, F[0], F[1]);
        case 3:
          return D.call($, F[0], F[1], F[2]);
      }
      return D.apply($, F);
    }
    function Vx(D, $, F, ee) {
      for (var ke = -1, Ue = D == null ? 0 : D.length; ++ke < Ue; ) {
        var It = D[ke];
        $(ee, It, F(It), D);
      }
      return ee;
    }
    function Gn(D, $) {
      for (var F = -1, ee = D == null ? 0 : D.length; ++F < ee && $(D[F], F, D) !== !1; )
        ;
      return D;
    }
    function Xx(D, $) {
      for (var F = D == null ? 0 : D.length; F-- && $(D[F], F, D) !== !1; )
        ;
      return D;
    }
    function Zg(D, $) {
      for (var F = -1, ee = D == null ? 0 : D.length; ++F < ee; )
        if (!$(D[F], F, D))
          return !1;
      return !0;
    }
    function xi(D, $) {
      for (var F = -1, ee = D == null ? 0 : D.length, ke = 0, Ue = []; ++F < ee; ) {
        var It = D[F];
        $(It, F, D) && (Ue[ke++] = It);
      }
      return Ue;
    }
    function Vs(D, $) {
      var F = D == null ? 0 : D.length;
      return !!F && Mo(D, $, 0) > -1;
    }
    function zc(D, $, F) {
      for (var ee = -1, ke = D == null ? 0 : D.length; ++ee < ke; )
        if (F($, D[ee]))
          return !0;
      return !1;
    }
    function gt(D, $) {
      for (var F = -1, ee = D == null ? 0 : D.length, ke = Array(ee); ++F < ee; )
        ke[F] = $(D[F], F, D);
      return ke;
    }
    function Si(D, $) {
      for (var F = -1, ee = $.length, ke = D.length; ++F < ee; )
        D[ke + F] = $[F];
      return D;
    }
    function Bc(D, $, F, ee) {
      var ke = -1, Ue = D == null ? 0 : D.length;
      for (ee && Ue && (F = D[++ke]); ++ke < Ue; )
        F = $(F, D[ke], ke, D);
      return F;
    }
    function Zx(D, $, F, ee) {
      var ke = D == null ? 0 : D.length;
      for (ee && ke && (F = D[--ke]); ke--; )
        F = $(F, D[ke], ke, D);
      return F;
    }
    function Uc(D, $) {
      for (var F = -1, ee = D == null ? 0 : D.length; ++F < ee; )
        if ($(D[F], F, D))
          return !0;
      return !1;
    }
    var Jx = jc("length");
    function Qx(D) {
      return D.split("");
    }
    function eS(D) {
      return D.match(lx) || [];
    }
    function Jg(D, $, F) {
      var ee;
      return F(D, function(ke, Ue, It) {
        if ($(ke, Ue, It))
          return ee = Ue, !1;
      }), ee;
    }
    function Xs(D, $, F, ee) {
      for (var ke = D.length, Ue = F + (ee ? 1 : -1); ee ? Ue-- : ++Ue < ke; )
        if ($(D[Ue], Ue, D))
          return Ue;
      return -1;
    }
    function Mo(D, $, F) {
      return $ === $ ? dS(D, $, F) : Xs(D, Qg, F);
    }
    function tS(D, $, F, ee) {
      for (var ke = F - 1, Ue = D.length; ++ke < Ue; )
        if (ee(D[ke], $))
          return ke;
      return -1;
    }
    function Qg(D) {
      return D !== D;
    }
    function ey(D, $) {
      var F = D == null ? 0 : D.length;
      return F ? Yc(D, $) / F : C;
    }
    function jc(D) {
      return function($) {
        return $ == null ? n : $[D];
      };
    }
    function Wc(D) {
      return function($) {
        return D == null ? n : D[$];
      };
    }
    function ty(D, $, F, ee, ke) {
      return ke(D, function(Ue, It, Je) {
        F = ee ? (ee = !1, Ue) : $(F, Ue, It, Je);
      }), F;
    }
    function nS(D, $) {
      var F = D.length;
      for (D.sort($); F--; )
        D[F] = D[F].value;
      return D;
    }
    function Yc(D, $) {
      for (var F, ee = -1, ke = D.length; ++ee < ke; ) {
        var Ue = $(D[ee]);
        Ue !== n && (F = F === n ? Ue : F + Ue);
      }
      return F;
    }
    function Gc(D, $) {
      for (var F = -1, ee = Array(D); ++F < D; )
        ee[F] = $(F);
      return ee;
    }
    function rS(D, $) {
      return gt($, function(F) {
        return [F, D[F]];
      });
    }
    function ny(D) {
      return D && D.slice(0, ay(D) + 1).replace(Dc, "");
    }
    function Pn(D) {
      return function($) {
        return D($);
      };
    }
    function qc(D, $) {
      return gt($, function(F) {
        return D[F];
      });
    }
    function Ta(D, $) {
      return D.has($);
    }
    function ry(D, $) {
      for (var F = -1, ee = D.length; ++F < ee && Mo($, D[F], 0) > -1; )
        ;
      return F;
    }
    function iy(D, $) {
      for (var F = D.length; F-- && Mo($, D[F], 0) > -1; )
        ;
      return F;
    }
    function iS(D, $) {
      for (var F = D.length, ee = 0; F--; )
        D[F] === $ && ++ee;
      return ee;
    }
    var oS = Wc(Bx), aS = Wc(Ux);
    function sS(D) {
      return "\\" + Wx[D];
    }
    function lS(D, $) {
      return D == null ? n : D[$];
    }
    function Ao(D) {
      return Fx.test(D);
    }
    function uS(D) {
      return $x.test(D);
    }
    function cS(D) {
      for (var $, F = []; !($ = D.next()).done; )
        F.push($.value);
      return F;
    }
    function Vc(D) {
      var $ = -1, F = Array(D.size);
      return D.forEach(function(ee, ke) {
        F[++$] = [ke, ee];
      }), F;
    }
    function oy(D, $) {
      return function(F) {
        return D($(F));
      };
    }
    function Ci(D, $) {
      for (var F = -1, ee = D.length, ke = 0, Ue = []; ++F < ee; ) {
        var It = D[F];
        (It === $ || It === p) && (D[F] = p, Ue[ke++] = F);
      }
      return Ue;
    }
    function Zs(D) {
      var $ = -1, F = Array(D.size);
      return D.forEach(function(ee) {
        F[++$] = ee;
      }), F;
    }
    function fS(D) {
      var $ = -1, F = Array(D.size);
      return D.forEach(function(ee) {
        F[++$] = [ee, ee];
      }), F;
    }
    function dS(D, $, F) {
      for (var ee = F - 1, ke = D.length; ++ee < ke; )
        if (D[ee] === $)
          return ee;
      return -1;
    }
    function hS(D, $, F) {
      for (var ee = F + 1; ee--; )
        if (D[ee] === $)
          return ee;
      return ee;
    }
    function Do(D) {
      return Ao(D) ? gS(D) : Jx(D);
    }
    function gr(D) {
      return Ao(D) ? yS(D) : Qx(D);
    }
    function ay(D) {
      for (var $ = D.length; $-- && ix.test(D.charAt($)); )
        ;
      return $;
    }
    var pS = Wc(jx);
    function gS(D) {
      for (var $ = Fc.lastIndex = 0; Fc.test(D); )
        ++$;
      return $;
    }
    function yS(D) {
      return D.match(Fc) || [];
    }
    function mS(D) {
      return D.match(Kx) || [];
    }
    var vS = function D($) {
      $ = $ == null ? Ht : Lo.defaults(Ht.Object(), $, Lo.pick(Ht, Hx));
      var F = $.Array, ee = $.Date, ke = $.Error, Ue = $.Function, It = $.Math, Je = $.Object, Xc = $.RegExp, _S = $.String, qn = $.TypeError, Js = F.prototype, bS = Ue.prototype, Ro = Je.prototype, Qs = $["__core-js_shared__"], el = bS.toString, Xe = Ro.hasOwnProperty, wS = 0, sy = function() {
        var o = /[^.]+$/.exec(Qs && Qs.keys && Qs.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), tl = Ro.toString, kS = el.call(Je), xS = Ht._, SS = Xc(
        "^" + el.call(Xe).replace(Ac, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), nl = jg ? $.Buffer : n, Ei = $.Symbol, rl = $.Uint8Array, ly = nl ? nl.allocUnsafe : n, il = oy(Je.getPrototypeOf, Je), uy = Je.create, cy = Ro.propertyIsEnumerable, ol = Js.splice, fy = Ei ? Ei.isConcatSpreadable : n, Ma = Ei ? Ei.iterator : n, Zi = Ei ? Ei.toStringTag : n, al = function() {
        try {
          var o = no(Je, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), CS = $.clearTimeout !== Ht.clearTimeout && $.clearTimeout, ES = ee && ee.now !== Ht.Date.now && ee.now, OS = $.setTimeout !== Ht.setTimeout && $.setTimeout, sl = It.ceil, ll = It.floor, Zc = Je.getOwnPropertySymbols, PS = nl ? nl.isBuffer : n, dy = $.isFinite, IS = Js.join, TS = oy(Je.keys, Je), Tt = It.max, Wt = It.min, MS = ee.now, AS = $.parseInt, hy = It.random, DS = Js.reverse, Jc = no($, "DataView"), Aa = no($, "Map"), Qc = no($, "Promise"), No = no($, "Set"), Da = no($, "WeakMap"), La = no(Je, "create"), ul = Da && new Da(), Ko = {}, LS = ro(Jc), RS = ro(Aa), NS = ro(Qc), KS = ro(No), FS = ro(Da), cl = Ei ? Ei.prototype : n, Ra = cl ? cl.valueOf : n, py = cl ? cl.toString : n;
      function b(o) {
        if (kt(o) && !Se(o) && !(o instanceof Le)) {
          if (o instanceof Vn)
            return o;
          if (Xe.call(o, "__wrapped__"))
            return gm(o);
        }
        return new Vn(o);
      }
      var Fo = /* @__PURE__ */ function() {
        function o() {
        }
        return function(s) {
          if (!_t(s))
            return {};
          if (uy)
            return uy(s);
          o.prototype = s;
          var c = new o();
          return o.prototype = n, c;
        };
      }();
      function fl() {
      }
      function Vn(o, s) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
      }
      b.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Jk,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Qk,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: xg,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: b
        }
      }, b.prototype = fl.prototype, b.prototype.constructor = b, Vn.prototype = Fo(fl.prototype), Vn.prototype.constructor = Vn;
      function Le(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
      }
      function $S() {
        var o = new Le(this.__wrapped__);
        return o.__actions__ = cn(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = cn(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = cn(this.__views__), o;
      }
      function HS() {
        if (this.__filtered__) {
          var o = new Le(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function zS() {
        var o = this.__wrapped__.value(), s = this.__dir__, c = Se(o), h = s < 0, v = c ? o.length : 0, w = QC(0, v, this.__views__), E = w.start, I = w.end, R = I - E, z = h ? I : E - 1, B = this.__iteratees__, U = B.length, Z = 0, ie = Wt(R, this.__takeCount__);
        if (!c || !h && v == R && ie == R)
          return Fy(o, this.__actions__);
        var ge = [];
        e:
          for (; R-- && Z < ie; ) {
            z += s;
            for (var Ie = -1, ye = o[z]; ++Ie < U; ) {
              var De = B[Ie], Ke = De.iteratee, Mn = De.type, rn = Ke(ye);
              if (Mn == ce)
                ye = rn;
              else if (!rn) {
                if (Mn == me)
                  continue e;
                break e;
              }
            }
            ge[Z++] = ye;
          }
        return ge;
      }
      Le.prototype = Fo(fl.prototype), Le.prototype.constructor = Le;
      function Ji(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var h = o[s];
          this.set(h[0], h[1]);
        }
      }
      function BS() {
        this.__data__ = La ? La(null) : {}, this.size = 0;
      }
      function US(o) {
        var s = this.has(o) && delete this.__data__[o];
        return this.size -= s ? 1 : 0, s;
      }
      function jS(o) {
        var s = this.__data__;
        if (La) {
          var c = s[o];
          return c === f ? n : c;
        }
        return Xe.call(s, o) ? s[o] : n;
      }
      function WS(o) {
        var s = this.__data__;
        return La ? s[o] !== n : Xe.call(s, o);
      }
      function YS(o, s) {
        var c = this.__data__;
        return this.size += this.has(o) ? 0 : 1, c[o] = La && s === n ? f : s, this;
      }
      Ji.prototype.clear = BS, Ji.prototype.delete = US, Ji.prototype.get = jS, Ji.prototype.has = WS, Ji.prototype.set = YS;
      function Yr(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var h = o[s];
          this.set(h[0], h[1]);
        }
      }
      function GS() {
        this.__data__ = [], this.size = 0;
      }
      function qS(o) {
        var s = this.__data__, c = dl(s, o);
        if (c < 0)
          return !1;
        var h = s.length - 1;
        return c == h ? s.pop() : ol.call(s, c, 1), --this.size, !0;
      }
      function VS(o) {
        var s = this.__data__, c = dl(s, o);
        return c < 0 ? n : s[c][1];
      }
      function XS(o) {
        return dl(this.__data__, o) > -1;
      }
      function ZS(o, s) {
        var c = this.__data__, h = dl(c, o);
        return h < 0 ? (++this.size, c.push([o, s])) : c[h][1] = s, this;
      }
      Yr.prototype.clear = GS, Yr.prototype.delete = qS, Yr.prototype.get = VS, Yr.prototype.has = XS, Yr.prototype.set = ZS;
      function Gr(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.clear(); ++s < c; ) {
          var h = o[s];
          this.set(h[0], h[1]);
        }
      }
      function JS() {
        this.size = 0, this.__data__ = {
          hash: new Ji(),
          map: new (Aa || Yr)(),
          string: new Ji()
        };
      }
      function QS(o) {
        var s = Sl(this, o).delete(o);
        return this.size -= s ? 1 : 0, s;
      }
      function eC(o) {
        return Sl(this, o).get(o);
      }
      function tC(o) {
        return Sl(this, o).has(o);
      }
      function nC(o, s) {
        var c = Sl(this, o), h = c.size;
        return c.set(o, s), this.size += c.size == h ? 0 : 1, this;
      }
      Gr.prototype.clear = JS, Gr.prototype.delete = QS, Gr.prototype.get = eC, Gr.prototype.has = tC, Gr.prototype.set = nC;
      function Qi(o) {
        var s = -1, c = o == null ? 0 : o.length;
        for (this.__data__ = new Gr(); ++s < c; )
          this.add(o[s]);
      }
      function rC(o) {
        return this.__data__.set(o, f), this;
      }
      function iC(o) {
        return this.__data__.has(o);
      }
      Qi.prototype.add = Qi.prototype.push = rC, Qi.prototype.has = iC;
      function yr(o) {
        var s = this.__data__ = new Yr(o);
        this.size = s.size;
      }
      function oC() {
        this.__data__ = new Yr(), this.size = 0;
      }
      function aC(o) {
        var s = this.__data__, c = s.delete(o);
        return this.size = s.size, c;
      }
      function sC(o) {
        return this.__data__.get(o);
      }
      function lC(o) {
        return this.__data__.has(o);
      }
      function uC(o, s) {
        var c = this.__data__;
        if (c instanceof Yr) {
          var h = c.__data__;
          if (!Aa || h.length < i - 1)
            return h.push([o, s]), this.size = ++c.size, this;
          c = this.__data__ = new Gr(h);
        }
        return c.set(o, s), this.size = c.size, this;
      }
      yr.prototype.clear = oC, yr.prototype.delete = aC, yr.prototype.get = sC, yr.prototype.has = lC, yr.prototype.set = uC;
      function gy(o, s) {
        var c = Se(o), h = !c && io(o), v = !c && !h && Mi(o), w = !c && !h && !v && Bo(o), E = c || h || v || w, I = E ? Gc(o.length, _S) : [], R = I.length;
        for (var z in o)
          (s || Xe.call(o, z)) && !(E && // Safari 9 has enumerable `arguments.length` in strict mode.
          (z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          v && (z == "offset" || z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          w && (z == "buffer" || z == "byteLength" || z == "byteOffset") || // Skip index properties.
          Zr(z, R))) && I.push(z);
        return I;
      }
      function yy(o) {
        var s = o.length;
        return s ? o[ff(0, s - 1)] : n;
      }
      function cC(o, s) {
        return Cl(cn(o), eo(s, 0, o.length));
      }
      function fC(o) {
        return Cl(cn(o));
      }
      function ef(o, s, c) {
        (c !== n && !mr(o[s], c) || c === n && !(s in o)) && qr(o, s, c);
      }
      function Na(o, s, c) {
        var h = o[s];
        (!(Xe.call(o, s) && mr(h, c)) || c === n && !(s in o)) && qr(o, s, c);
      }
      function dl(o, s) {
        for (var c = o.length; c--; )
          if (mr(o[c][0], s))
            return c;
        return -1;
      }
      function dC(o, s, c, h) {
        return Oi(o, function(v, w, E) {
          s(h, v, c(v), E);
        }), h;
      }
      function my(o, s) {
        return o && Or(s, Kt(s), o);
      }
      function hC(o, s) {
        return o && Or(s, dn(s), o);
      }
      function qr(o, s, c) {
        s == "__proto__" && al ? al(o, s, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : o[s] = c;
      }
      function tf(o, s) {
        for (var c = -1, h = s.length, v = F(h), w = o == null; ++c < h; )
          v[c] = w ? n : Nf(o, s[c]);
        return v;
      }
      function eo(o, s, c) {
        return o === o && (c !== n && (o = o <= c ? o : c), s !== n && (o = o >= s ? o : s)), o;
      }
      function Xn(o, s, c, h, v, w) {
        var E, I = s & g, R = s & _, z = s & y;
        if (c && (E = v ? c(o, h, v, w) : c(o)), E !== n)
          return E;
        if (!_t(o))
          return o;
        var B = Se(o);
        if (B) {
          if (E = tE(o), !I)
            return cn(o, E);
        } else {
          var U = Yt(o), Z = U == xn || U == ki;
          if (Mi(o))
            return zy(o, I);
          if (U == Ut || U == de || Z && !v) {
            if (E = R || Z ? {} : am(o), !I)
              return R ? jC(o, hC(E, o)) : UC(o, my(E, o));
          } else {
            if (!it[U])
              return v ? o : {};
            E = nE(o, U, I);
          }
        }
        w || (w = new yr());
        var ie = w.get(o);
        if (ie)
          return ie;
        w.set(o, E), Rm(o) ? o.forEach(function(ye) {
          E.add(Xn(ye, s, c, ye, o, w));
        }) : Dm(o) && o.forEach(function(ye, De) {
          E.set(De, Xn(ye, s, c, De, o, w));
        });
        var ge = z ? R ? kf : wf : R ? dn : Kt, Ie = B ? n : ge(o);
        return Gn(Ie || o, function(ye, De) {
          Ie && (De = ye, ye = o[De]), Na(E, De, Xn(ye, s, c, De, o, w));
        }), E;
      }
      function pC(o) {
        var s = Kt(o);
        return function(c) {
          return vy(c, o, s);
        };
      }
      function vy(o, s, c) {
        var h = c.length;
        if (o == null)
          return !h;
        for (o = Je(o); h--; ) {
          var v = c[h], w = s[v], E = o[v];
          if (E === n && !(v in o) || !w(E))
            return !1;
        }
        return !0;
      }
      function _y(o, s, c) {
        if (typeof o != "function")
          throw new qn(l);
        return Ua(function() {
          o.apply(n, c);
        }, s);
      }
      function Ka(o, s, c, h) {
        var v = -1, w = Vs, E = !0, I = o.length, R = [], z = s.length;
        if (!I)
          return R;
        c && (s = gt(s, Pn(c))), h ? (w = zc, E = !1) : s.length >= i && (w = Ta, E = !1, s = new Qi(s));
        e:
          for (; ++v < I; ) {
            var B = o[v], U = c == null ? B : c(B);
            if (B = h || B !== 0 ? B : 0, E && U === U) {
              for (var Z = z; Z--; )
                if (s[Z] === U)
                  continue e;
              R.push(B);
            } else w(s, U, h) || R.push(B);
          }
        return R;
      }
      var Oi = Yy(Er), by = Yy(rf, !0);
      function gC(o, s) {
        var c = !0;
        return Oi(o, function(h, v, w) {
          return c = !!s(h, v, w), c;
        }), c;
      }
      function hl(o, s, c) {
        for (var h = -1, v = o.length; ++h < v; ) {
          var w = o[h], E = s(w);
          if (E != null && (I === n ? E === E && !Tn(E) : c(E, I)))
            var I = E, R = w;
        }
        return R;
      }
      function yC(o, s, c, h) {
        var v = o.length;
        for (c = Ee(c), c < 0 && (c = -c > v ? 0 : v + c), h = h === n || h > v ? v : Ee(h), h < 0 && (h += v), h = c > h ? 0 : Km(h); c < h; )
          o[c++] = s;
        return o;
      }
      function wy(o, s) {
        var c = [];
        return Oi(o, function(h, v, w) {
          s(h, v, w) && c.push(h);
        }), c;
      }
      function zt(o, s, c, h, v) {
        var w = -1, E = o.length;
        for (c || (c = iE), v || (v = []); ++w < E; ) {
          var I = o[w];
          s > 0 && c(I) ? s > 1 ? zt(I, s - 1, c, h, v) : Si(v, I) : h || (v[v.length] = I);
        }
        return v;
      }
      var nf = Gy(), ky = Gy(!0);
      function Er(o, s) {
        return o && nf(o, s, Kt);
      }
      function rf(o, s) {
        return o && ky(o, s, Kt);
      }
      function pl(o, s) {
        return xi(s, function(c) {
          return Jr(o[c]);
        });
      }
      function to(o, s) {
        s = Ii(s, o);
        for (var c = 0, h = s.length; o != null && c < h; )
          o = o[Pr(s[c++])];
        return c && c == h ? o : n;
      }
      function xy(o, s, c) {
        var h = s(o);
        return Se(o) ? h : Si(h, c(o));
      }
      function tn(o) {
        return o == null ? o === n ? Nt : Oo : Zi && Zi in Je(o) ? JC(o) : fE(o);
      }
      function of(o, s) {
        return o > s;
      }
      function mC(o, s) {
        return o != null && Xe.call(o, s);
      }
      function vC(o, s) {
        return o != null && s in Je(o);
      }
      function _C(o, s, c) {
        return o >= Wt(s, c) && o < Tt(s, c);
      }
      function af(o, s, c) {
        for (var h = c ? zc : Vs, v = o[0].length, w = o.length, E = w, I = F(w), R = 1 / 0, z = []; E--; ) {
          var B = o[E];
          E && s && (B = gt(B, Pn(s))), R = Wt(B.length, R), I[E] = !c && (s || v >= 120 && B.length >= 120) ? new Qi(E && B) : n;
        }
        B = o[0];
        var U = -1, Z = I[0];
        e:
          for (; ++U < v && z.length < R; ) {
            var ie = B[U], ge = s ? s(ie) : ie;
            if (ie = c || ie !== 0 ? ie : 0, !(Z ? Ta(Z, ge) : h(z, ge, c))) {
              for (E = w; --E; ) {
                var Ie = I[E];
                if (!(Ie ? Ta(Ie, ge) : h(o[E], ge, c)))
                  continue e;
              }
              Z && Z.push(ge), z.push(ie);
            }
          }
        return z;
      }
      function bC(o, s, c, h) {
        return Er(o, function(v, w, E) {
          s(h, c(v), w, E);
        }), h;
      }
      function Fa(o, s, c) {
        s = Ii(s, o), o = cm(o, s);
        var h = o == null ? o : o[Pr(Jn(s))];
        return h == null ? n : On(h, o, c);
      }
      function Sy(o) {
        return kt(o) && tn(o) == de;
      }
      function wC(o) {
        return kt(o) && tn(o) == j;
      }
      function kC(o) {
        return kt(o) && tn(o) == Rt;
      }
      function $a(o, s, c, h, v) {
        return o === s ? !0 : o == null || s == null || !kt(o) && !kt(s) ? o !== o && s !== s : xC(o, s, c, h, $a, v);
      }
      function xC(o, s, c, h, v, w) {
        var E = Se(o), I = Se(s), R = E ? Pe : Yt(o), z = I ? Pe : Yt(s);
        R = R == de ? Ut : R, z = z == de ? Ut : z;
        var B = R == Ut, U = z == Ut, Z = R == z;
        if (Z && Mi(o)) {
          if (!Mi(s))
            return !1;
          E = !0, B = !1;
        }
        if (Z && !B)
          return w || (w = new yr()), E || Bo(o) ? rm(o, s, c, h, v, w) : XC(o, s, R, c, h, v, w);
        if (!(c & k)) {
          var ie = B && Xe.call(o, "__wrapped__"), ge = U && Xe.call(s, "__wrapped__");
          if (ie || ge) {
            var Ie = ie ? o.value() : o, ye = ge ? s.value() : s;
            return w || (w = new yr()), v(Ie, ye, c, h, w);
          }
        }
        return Z ? (w || (w = new yr()), ZC(o, s, c, h, v, w)) : !1;
      }
      function SC(o) {
        return kt(o) && Yt(o) == bt;
      }
      function sf(o, s, c, h) {
        var v = c.length, w = v, E = !h;
        if (o == null)
          return !w;
        for (o = Je(o); v--; ) {
          var I = c[v];
          if (E && I[2] ? I[1] !== o[I[0]] : !(I[0] in o))
            return !1;
        }
        for (; ++v < w; ) {
          I = c[v];
          var R = I[0], z = o[R], B = I[1];
          if (E && I[2]) {
            if (z === n && !(R in o))
              return !1;
          } else {
            var U = new yr();
            if (h)
              var Z = h(z, B, R, o, s, U);
            if (!(Z === n ? $a(B, z, k | x, h, U) : Z))
              return !1;
          }
        }
        return !0;
      }
      function Cy(o) {
        if (!_t(o) || aE(o))
          return !1;
        var s = Jr(o) ? SS : px;
        return s.test(ro(o));
      }
      function CC(o) {
        return kt(o) && tn(o) == an;
      }
      function EC(o) {
        return kt(o) && Yt(o) == en;
      }
      function OC(o) {
        return kt(o) && Ml(o.length) && !!ut[tn(o)];
      }
      function Ey(o) {
        return typeof o == "function" ? o : o == null ? hn : typeof o == "object" ? Se(o) ? Iy(o[0], o[1]) : Py(o) : qm(o);
      }
      function lf(o) {
        if (!Ba(o))
          return TS(o);
        var s = [];
        for (var c in Je(o))
          Xe.call(o, c) && c != "constructor" && s.push(c);
        return s;
      }
      function PC(o) {
        if (!_t(o))
          return cE(o);
        var s = Ba(o), c = [];
        for (var h in o)
          h == "constructor" && (s || !Xe.call(o, h)) || c.push(h);
        return c;
      }
      function uf(o, s) {
        return o < s;
      }
      function Oy(o, s) {
        var c = -1, h = fn(o) ? F(o.length) : [];
        return Oi(o, function(v, w, E) {
          h[++c] = s(v, w, E);
        }), h;
      }
      function Py(o) {
        var s = Sf(o);
        return s.length == 1 && s[0][2] ? lm(s[0][0], s[0][1]) : function(c) {
          return c === o || sf(c, o, s);
        };
      }
      function Iy(o, s) {
        return Ef(o) && sm(s) ? lm(Pr(o), s) : function(c) {
          var h = Nf(c, o);
          return h === n && h === s ? Kf(c, o) : $a(s, h, k | x);
        };
      }
      function gl(o, s, c, h, v) {
        o !== s && nf(s, function(w, E) {
          if (v || (v = new yr()), _t(w))
            IC(o, s, E, c, gl, h, v);
          else {
            var I = h ? h(Pf(o, E), w, E + "", o, s, v) : n;
            I === n && (I = w), ef(o, E, I);
          }
        }, dn);
      }
      function IC(o, s, c, h, v, w, E) {
        var I = Pf(o, c), R = Pf(s, c), z = E.get(R);
        if (z) {
          ef(o, c, z);
          return;
        }
        var B = w ? w(I, R, c + "", o, s, E) : n, U = B === n;
        if (U) {
          var Z = Se(R), ie = !Z && Mi(R), ge = !Z && !ie && Bo(R);
          B = R, Z || ie || ge ? Se(I) ? B = I : xt(I) ? B = cn(I) : ie ? (U = !1, B = zy(R, !0)) : ge ? (U = !1, B = By(R, !0)) : B = [] : ja(R) || io(R) ? (B = I, io(I) ? B = Fm(I) : (!_t(I) || Jr(I)) && (B = am(R))) : U = !1;
        }
        U && (E.set(R, B), v(B, R, h, w, E), E.delete(R)), ef(o, c, B);
      }
      function Ty(o, s) {
        var c = o.length;
        if (c)
          return s += s < 0 ? c : 0, Zr(s, c) ? o[s] : n;
      }
      function My(o, s, c) {
        s.length ? s = gt(s, function(w) {
          return Se(w) ? function(E) {
            return to(E, w.length === 1 ? w[0] : w);
          } : w;
        }) : s = [hn];
        var h = -1;
        s = gt(s, Pn(pe()));
        var v = Oy(o, function(w, E, I) {
          var R = gt(s, function(z) {
            return z(w);
          });
          return { criteria: R, index: ++h, value: w };
        });
        return nS(v, function(w, E) {
          return BC(w, E, c);
        });
      }
      function TC(o, s) {
        return Ay(o, s, function(c, h) {
          return Kf(o, h);
        });
      }
      function Ay(o, s, c) {
        for (var h = -1, v = s.length, w = {}; ++h < v; ) {
          var E = s[h], I = to(o, E);
          c(I, E) && Ha(w, Ii(E, o), I);
        }
        return w;
      }
      function MC(o) {
        return function(s) {
          return to(s, o);
        };
      }
      function cf(o, s, c, h) {
        var v = h ? tS : Mo, w = -1, E = s.length, I = o;
        for (o === s && (s = cn(s)), c && (I = gt(o, Pn(c))); ++w < E; )
          for (var R = 0, z = s[w], B = c ? c(z) : z; (R = v(I, B, R, h)) > -1; )
            I !== o && ol.call(I, R, 1), ol.call(o, R, 1);
        return o;
      }
      function Dy(o, s) {
        for (var c = o ? s.length : 0, h = c - 1; c--; ) {
          var v = s[c];
          if (c == h || v !== w) {
            var w = v;
            Zr(v) ? ol.call(o, v, 1) : pf(o, v);
          }
        }
        return o;
      }
      function ff(o, s) {
        return o + ll(hy() * (s - o + 1));
      }
      function AC(o, s, c, h) {
        for (var v = -1, w = Tt(sl((s - o) / (c || 1)), 0), E = F(w); w--; )
          E[h ? w : ++v] = o, o += c;
        return E;
      }
      function df(o, s) {
        var c = "";
        if (!o || s < 1 || s > Ye)
          return c;
        do
          s % 2 && (c += o), s = ll(s / 2), s && (o += o);
        while (s);
        return c;
      }
      function Te(o, s) {
        return If(um(o, s, hn), o + "");
      }
      function DC(o) {
        return yy(Uo(o));
      }
      function LC(o, s) {
        var c = Uo(o);
        return Cl(c, eo(s, 0, c.length));
      }
      function Ha(o, s, c, h) {
        if (!_t(o))
          return o;
        s = Ii(s, o);
        for (var v = -1, w = s.length, E = w - 1, I = o; I != null && ++v < w; ) {
          var R = Pr(s[v]), z = c;
          if (R === "__proto__" || R === "constructor" || R === "prototype")
            return o;
          if (v != E) {
            var B = I[R];
            z = h ? h(B, R, I) : n, z === n && (z = _t(B) ? B : Zr(s[v + 1]) ? [] : {});
          }
          Na(I, R, z), I = I[R];
        }
        return o;
      }
      var Ly = ul ? function(o, s) {
        return ul.set(o, s), o;
      } : hn, RC = al ? function(o, s) {
        return al(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: $f(s),
          writable: !0
        });
      } : hn;
      function NC(o) {
        return Cl(Uo(o));
      }
      function Zn(o, s, c) {
        var h = -1, v = o.length;
        s < 0 && (s = -s > v ? 0 : v + s), c = c > v ? v : c, c < 0 && (c += v), v = s > c ? 0 : c - s >>> 0, s >>>= 0;
        for (var w = F(v); ++h < v; )
          w[h] = o[h + s];
        return w;
      }
      function KC(o, s) {
        var c;
        return Oi(o, function(h, v, w) {
          return c = s(h, v, w), !c;
        }), !!c;
      }
      function yl(o, s, c) {
        var h = 0, v = o == null ? h : o.length;
        if (typeof s == "number" && s === s && v <= P) {
          for (; h < v; ) {
            var w = h + v >>> 1, E = o[w];
            E !== null && !Tn(E) && (c ? E <= s : E < s) ? h = w + 1 : v = w;
          }
          return v;
        }
        return hf(o, s, hn, c);
      }
      function hf(o, s, c, h) {
        var v = 0, w = o == null ? 0 : o.length;
        if (w === 0)
          return 0;
        s = c(s);
        for (var E = s !== s, I = s === null, R = Tn(s), z = s === n; v < w; ) {
          var B = ll((v + w) / 2), U = c(o[B]), Z = U !== n, ie = U === null, ge = U === U, Ie = Tn(U);
          if (E)
            var ye = h || ge;
          else z ? ye = ge && (h || Z) : I ? ye = ge && Z && (h || !ie) : R ? ye = ge && Z && !ie && (h || !Ie) : ie || Ie ? ye = !1 : ye = h ? U <= s : U < s;
          ye ? v = B + 1 : w = B;
        }
        return Wt(w, pt);
      }
      function Ry(o, s) {
        for (var c = -1, h = o.length, v = 0, w = []; ++c < h; ) {
          var E = o[c], I = s ? s(E) : E;
          if (!c || !mr(I, R)) {
            var R = I;
            w[v++] = E === 0 ? 0 : E;
          }
        }
        return w;
      }
      function Ny(o) {
        return typeof o == "number" ? o : Tn(o) ? C : +o;
      }
      function In(o) {
        if (typeof o == "string")
          return o;
        if (Se(o))
          return gt(o, In) + "";
        if (Tn(o))
          return py ? py.call(o) : "";
        var s = o + "";
        return s == "0" && 1 / o == -1 / 0 ? "-0" : s;
      }
      function Pi(o, s, c) {
        var h = -1, v = Vs, w = o.length, E = !0, I = [], R = I;
        if (c)
          E = !1, v = zc;
        else if (w >= i) {
          var z = s ? null : qC(o);
          if (z)
            return Zs(z);
          E = !1, v = Ta, R = new Qi();
        } else
          R = s ? [] : I;
        e:
          for (; ++h < w; ) {
            var B = o[h], U = s ? s(B) : B;
            if (B = c || B !== 0 ? B : 0, E && U === U) {
              for (var Z = R.length; Z--; )
                if (R[Z] === U)
                  continue e;
              s && R.push(U), I.push(B);
            } else v(R, U, c) || (R !== I && R.push(U), I.push(B));
          }
        return I;
      }
      function pf(o, s) {
        return s = Ii(s, o), o = cm(o, s), o == null || delete o[Pr(Jn(s))];
      }
      function Ky(o, s, c, h) {
        return Ha(o, s, c(to(o, s)), h);
      }
      function ml(o, s, c, h) {
        for (var v = o.length, w = h ? v : -1; (h ? w-- : ++w < v) && s(o[w], w, o); )
          ;
        return c ? Zn(o, h ? 0 : w, h ? w + 1 : v) : Zn(o, h ? w + 1 : 0, h ? v : w);
      }
      function Fy(o, s) {
        var c = o;
        return c instanceof Le && (c = c.value()), Bc(s, function(h, v) {
          return v.func.apply(v.thisArg, Si([h], v.args));
        }, c);
      }
      function gf(o, s, c) {
        var h = o.length;
        if (h < 2)
          return h ? Pi(o[0]) : [];
        for (var v = -1, w = F(h); ++v < h; )
          for (var E = o[v], I = -1; ++I < h; )
            I != v && (w[v] = Ka(w[v] || E, o[I], s, c));
        return Pi(zt(w, 1), s, c);
      }
      function $y(o, s, c) {
        for (var h = -1, v = o.length, w = s.length, E = {}; ++h < v; ) {
          var I = h < w ? s[h] : n;
          c(E, o[h], I);
        }
        return E;
      }
      function yf(o) {
        return xt(o) ? o : [];
      }
      function mf(o) {
        return typeof o == "function" ? o : hn;
      }
      function Ii(o, s) {
        return Se(o) ? o : Ef(o, s) ? [o] : pm(Ge(o));
      }
      var FC = Te;
      function Ti(o, s, c) {
        var h = o.length;
        return c = c === n ? h : c, !s && c >= h ? o : Zn(o, s, c);
      }
      var Hy = CS || function(o) {
        return Ht.clearTimeout(o);
      };
      function zy(o, s) {
        if (s)
          return o.slice();
        var c = o.length, h = ly ? ly(c) : new o.constructor(c);
        return o.copy(h), h;
      }
      function vf(o) {
        var s = new o.constructor(o.byteLength);
        return new rl(s).set(new rl(o)), s;
      }
      function $C(o, s) {
        var c = s ? vf(o.buffer) : o.buffer;
        return new o.constructor(c, o.byteOffset, o.byteLength);
      }
      function HC(o) {
        var s = new o.constructor(o.source, Sg.exec(o));
        return s.lastIndex = o.lastIndex, s;
      }
      function zC(o) {
        return Ra ? Je(Ra.call(o)) : {};
      }
      function By(o, s) {
        var c = s ? vf(o.buffer) : o.buffer;
        return new o.constructor(c, o.byteOffset, o.length);
      }
      function Uy(o, s) {
        if (o !== s) {
          var c = o !== n, h = o === null, v = o === o, w = Tn(o), E = s !== n, I = s === null, R = s === s, z = Tn(s);
          if (!I && !z && !w && o > s || w && E && R && !I && !z || h && E && R || !c && R || !v)
            return 1;
          if (!h && !w && !z && o < s || z && c && v && !h && !w || I && c && v || !E && v || !R)
            return -1;
        }
        return 0;
      }
      function BC(o, s, c) {
        for (var h = -1, v = o.criteria, w = s.criteria, E = v.length, I = c.length; ++h < E; ) {
          var R = Uy(v[h], w[h]);
          if (R) {
            if (h >= I)
              return R;
            var z = c[h];
            return R * (z == "desc" ? -1 : 1);
          }
        }
        return o.index - s.index;
      }
      function jy(o, s, c, h) {
        for (var v = -1, w = o.length, E = c.length, I = -1, R = s.length, z = Tt(w - E, 0), B = F(R + z), U = !h; ++I < R; )
          B[I] = s[I];
        for (; ++v < E; )
          (U || v < w) && (B[c[v]] = o[v]);
        for (; z--; )
          B[I++] = o[v++];
        return B;
      }
      function Wy(o, s, c, h) {
        for (var v = -1, w = o.length, E = -1, I = c.length, R = -1, z = s.length, B = Tt(w - I, 0), U = F(B + z), Z = !h; ++v < B; )
          U[v] = o[v];
        for (var ie = v; ++R < z; )
          U[ie + R] = s[R];
        for (; ++E < I; )
          (Z || v < w) && (U[ie + c[E]] = o[v++]);
        return U;
      }
      function cn(o, s) {
        var c = -1, h = o.length;
        for (s || (s = F(h)); ++c < h; )
          s[c] = o[c];
        return s;
      }
      function Or(o, s, c, h) {
        var v = !c;
        c || (c = {});
        for (var w = -1, E = s.length; ++w < E; ) {
          var I = s[w], R = h ? h(c[I], o[I], I, c, o) : n;
          R === n && (R = o[I]), v ? qr(c, I, R) : Na(c, I, R);
        }
        return c;
      }
      function UC(o, s) {
        return Or(o, Cf(o), s);
      }
      function jC(o, s) {
        return Or(o, im(o), s);
      }
      function vl(o, s) {
        return function(c, h) {
          var v = Se(c) ? Vx : dC, w = s ? s() : {};
          return v(c, o, pe(h, 2), w);
        };
      }
      function $o(o) {
        return Te(function(s, c) {
          var h = -1, v = c.length, w = v > 1 ? c[v - 1] : n, E = v > 2 ? c[2] : n;
          for (w = o.length > 3 && typeof w == "function" ? (v--, w) : n, E && nn(c[0], c[1], E) && (w = v < 3 ? n : w, v = 1), s = Je(s); ++h < v; ) {
            var I = c[h];
            I && o(s, I, h, w);
          }
          return s;
        });
      }
      function Yy(o, s) {
        return function(c, h) {
          if (c == null)
            return c;
          if (!fn(c))
            return o(c, h);
          for (var v = c.length, w = s ? v : -1, E = Je(c); (s ? w-- : ++w < v) && h(E[w], w, E) !== !1; )
            ;
          return c;
        };
      }
      function Gy(o) {
        return function(s, c, h) {
          for (var v = -1, w = Je(s), E = h(s), I = E.length; I--; ) {
            var R = E[o ? I : ++v];
            if (c(w[R], R, w) === !1)
              break;
          }
          return s;
        };
      }
      function WC(o, s, c) {
        var h = s & O, v = za(o);
        function w() {
          var E = this && this !== Ht && this instanceof w ? v : o;
          return E.apply(h ? c : this, arguments);
        }
        return w;
      }
      function qy(o) {
        return function(s) {
          s = Ge(s);
          var c = Ao(s) ? gr(s) : n, h = c ? c[0] : s.charAt(0), v = c ? Ti(c, 1).join("") : s.slice(1);
          return h[o]() + v;
        };
      }
      function Ho(o) {
        return function(s) {
          return Bc(Ym(Wm(s).replace(Rx, "")), o, "");
        };
      }
      function za(o) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new o();
            case 1:
              return new o(s[0]);
            case 2:
              return new o(s[0], s[1]);
            case 3:
              return new o(s[0], s[1], s[2]);
            case 4:
              return new o(s[0], s[1], s[2], s[3]);
            case 5:
              return new o(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new o(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var c = Fo(o.prototype), h = o.apply(c, s);
          return _t(h) ? h : c;
        };
      }
      function YC(o, s, c) {
        var h = za(o);
        function v() {
          for (var w = arguments.length, E = F(w), I = w, R = zo(v); I--; )
            E[I] = arguments[I];
          var z = w < 3 && E[0] !== R && E[w - 1] !== R ? [] : Ci(E, R);
          if (w -= z.length, w < c)
            return Qy(
              o,
              s,
              _l,
              v.placeholder,
              n,
              E,
              z,
              n,
              n,
              c - w
            );
          var B = this && this !== Ht && this instanceof v ? h : o;
          return On(B, this, E);
        }
        return v;
      }
      function Vy(o) {
        return function(s, c, h) {
          var v = Je(s);
          if (!fn(s)) {
            var w = pe(c, 3);
            s = Kt(s), c = function(I) {
              return w(v[I], I, v);
            };
          }
          var E = o(s, c, h);
          return E > -1 ? v[w ? s[E] : E] : n;
        };
      }
      function Xy(o) {
        return Xr(function(s) {
          var c = s.length, h = c, v = Vn.prototype.thru;
          for (o && s.reverse(); h--; ) {
            var w = s[h];
            if (typeof w != "function")
              throw new qn(l);
            if (v && !E && xl(w) == "wrapper")
              var E = new Vn([], !0);
          }
          for (h = E ? h : c; ++h < c; ) {
            w = s[h];
            var I = xl(w), R = I == "wrapper" ? xf(w) : n;
            R && Of(R[0]) && R[1] == (W | T | K | ne) && !R[4].length && R[9] == 1 ? E = E[xl(R[0])].apply(E, R[3]) : E = w.length == 1 && Of(w) ? E[I]() : E.thru(w);
          }
          return function() {
            var z = arguments, B = z[0];
            if (E && z.length == 1 && Se(B))
              return E.plant(B).value();
            for (var U = 0, Z = c ? s[U].apply(this, z) : B; ++U < c; )
              Z = s[U].call(this, Z);
            return Z;
          };
        });
      }
      function _l(o, s, c, h, v, w, E, I, R, z) {
        var B = s & W, U = s & O, Z = s & S, ie = s & (T | L), ge = s & oe, Ie = Z ? n : za(o);
        function ye() {
          for (var De = arguments.length, Ke = F(De), Mn = De; Mn--; )
            Ke[Mn] = arguments[Mn];
          if (ie)
            var rn = zo(ye), An = iS(Ke, rn);
          if (h && (Ke = jy(Ke, h, v, ie)), w && (Ke = Wy(Ke, w, E, ie)), De -= An, ie && De < z) {
            var St = Ci(Ke, rn);
            return Qy(
              o,
              s,
              _l,
              ye.placeholder,
              c,
              Ke,
              St,
              I,
              R,
              z - De
            );
          }
          var vr = U ? c : this, ei = Z ? vr[o] : o;
          return De = Ke.length, I ? Ke = dE(Ke, I) : ge && De > 1 && Ke.reverse(), B && R < De && (Ke.length = R), this && this !== Ht && this instanceof ye && (ei = Ie || za(ei)), ei.apply(vr, Ke);
        }
        return ye;
      }
      function Zy(o, s) {
        return function(c, h) {
          return bC(c, o, s(h), {});
        };
      }
      function bl(o, s) {
        return function(c, h) {
          var v;
          if (c === n && h === n)
            return s;
          if (c !== n && (v = c), h !== n) {
            if (v === n)
              return h;
            typeof c == "string" || typeof h == "string" ? (c = In(c), h = In(h)) : (c = Ny(c), h = Ny(h)), v = o(c, h);
          }
          return v;
        };
      }
      function _f(o) {
        return Xr(function(s) {
          return s = gt(s, Pn(pe())), Te(function(c) {
            var h = this;
            return o(s, function(v) {
              return On(v, h, c);
            });
          });
        });
      }
      function wl(o, s) {
        s = s === n ? " " : In(s);
        var c = s.length;
        if (c < 2)
          return c ? df(s, o) : s;
        var h = df(s, sl(o / Do(s)));
        return Ao(s) ? Ti(gr(h), 0, o).join("") : h.slice(0, o);
      }
      function GC(o, s, c, h) {
        var v = s & O, w = za(o);
        function E() {
          for (var I = -1, R = arguments.length, z = -1, B = h.length, U = F(B + R), Z = this && this !== Ht && this instanceof E ? w : o; ++z < B; )
            U[z] = h[z];
          for (; R--; )
            U[z++] = arguments[++I];
          return On(Z, v ? c : this, U);
        }
        return E;
      }
      function Jy(o) {
        return function(s, c, h) {
          return h && typeof h != "number" && nn(s, c, h) && (c = h = n), s = Qr(s), c === n ? (c = s, s = 0) : c = Qr(c), h = h === n ? s < c ? 1 : -1 : Qr(h), AC(s, c, h, o);
        };
      }
      function kl(o) {
        return function(s, c) {
          return typeof s == "string" && typeof c == "string" || (s = Qn(s), c = Qn(c)), o(s, c);
        };
      }
      function Qy(o, s, c, h, v, w, E, I, R, z) {
        var B = s & T, U = B ? E : n, Z = B ? n : E, ie = B ? w : n, ge = B ? n : w;
        s |= B ? K : N, s &= ~(B ? N : K), s & M || (s &= -4);
        var Ie = [
          o,
          s,
          v,
          ie,
          U,
          ge,
          Z,
          I,
          R,
          z
        ], ye = c.apply(n, Ie);
        return Of(o) && fm(ye, Ie), ye.placeholder = h, dm(ye, o, s);
      }
      function bf(o) {
        var s = It[o];
        return function(c, h) {
          if (c = Qn(c), h = h == null ? 0 : Wt(Ee(h), 292), h && dy(c)) {
            var v = (Ge(c) + "e").split("e"), w = s(v[0] + "e" + (+v[1] + h));
            return v = (Ge(w) + "e").split("e"), +(v[0] + "e" + (+v[1] - h));
          }
          return s(c);
        };
      }
      var qC = No && 1 / Zs(new No([, -0]))[1] == $e ? function(o) {
        return new No(o);
      } : Bf;
      function em(o) {
        return function(s) {
          var c = Yt(s);
          return c == bt ? Vc(s) : c == en ? fS(s) : rS(s, o(s));
        };
      }
      function Vr(o, s, c, h, v, w, E, I) {
        var R = s & S;
        if (!R && typeof o != "function")
          throw new qn(l);
        var z = h ? h.length : 0;
        if (z || (s &= -97, h = v = n), E = E === n ? E : Tt(Ee(E), 0), I = I === n ? I : Ee(I), z -= v ? v.length : 0, s & N) {
          var B = h, U = v;
          h = v = n;
        }
        var Z = R ? n : xf(o), ie = [
          o,
          s,
          c,
          h,
          v,
          B,
          U,
          w,
          E,
          I
        ];
        if (Z && uE(ie, Z), o = ie[0], s = ie[1], c = ie[2], h = ie[3], v = ie[4], I = ie[9] = ie[9] === n ? R ? 0 : o.length : Tt(ie[9] - z, 0), !I && s & (T | L) && (s &= -25), !s || s == O)
          var ge = WC(o, s, c);
        else s == T || s == L ? ge = YC(o, s, I) : (s == K || s == (O | K)) && !v.length ? ge = GC(o, s, c, h) : ge = _l.apply(n, ie);
        var Ie = Z ? Ly : fm;
        return dm(Ie(ge, ie), o, s);
      }
      function tm(o, s, c, h) {
        return o === n || mr(o, Ro[c]) && !Xe.call(h, c) ? s : o;
      }
      function nm(o, s, c, h, v, w) {
        return _t(o) && _t(s) && (w.set(s, o), gl(o, s, n, nm, w), w.delete(s)), o;
      }
      function VC(o) {
        return ja(o) ? n : o;
      }
      function rm(o, s, c, h, v, w) {
        var E = c & k, I = o.length, R = s.length;
        if (I != R && !(E && R > I))
          return !1;
        var z = w.get(o), B = w.get(s);
        if (z && B)
          return z == s && B == o;
        var U = -1, Z = !0, ie = c & x ? new Qi() : n;
        for (w.set(o, s), w.set(s, o); ++U < I; ) {
          var ge = o[U], Ie = s[U];
          if (h)
            var ye = E ? h(Ie, ge, U, s, o, w) : h(ge, Ie, U, o, s, w);
          if (ye !== n) {
            if (ye)
              continue;
            Z = !1;
            break;
          }
          if (ie) {
            if (!Uc(s, function(De, Ke) {
              if (!Ta(ie, Ke) && (ge === De || v(ge, De, c, h, w)))
                return ie.push(Ke);
            })) {
              Z = !1;
              break;
            }
          } else if (!(ge === Ie || v(ge, Ie, c, h, w))) {
            Z = !1;
            break;
          }
        }
        return w.delete(o), w.delete(s), Z;
      }
      function XC(o, s, c, h, v, w, E) {
        switch (c) {
          case ae:
            if (o.byteLength != s.byteLength || o.byteOffset != s.byteOffset)
              return !1;
            o = o.buffer, s = s.buffer;
          case j:
            return !(o.byteLength != s.byteLength || !w(new rl(o), new rl(s)));
          case Lt:
          case Rt:
          case Sn:
            return mr(+o, +s);
          case lt:
            return o.name == s.name && o.message == s.message;
          case an:
          case Wr:
            return o == s + "";
          case bt:
            var I = Vc;
          case en:
            var R = h & k;
            if (I || (I = Zs), o.size != s.size && !R)
              return !1;
            var z = E.get(o);
            if (z)
              return z == s;
            h |= x, E.set(o, s);
            var B = rm(I(o), I(s), h, v, w, E);
            return E.delete(o), B;
          case sn:
            if (Ra)
              return Ra.call(o) == Ra.call(s);
        }
        return !1;
      }
      function ZC(o, s, c, h, v, w) {
        var E = c & k, I = wf(o), R = I.length, z = wf(s), B = z.length;
        if (R != B && !E)
          return !1;
        for (var U = R; U--; ) {
          var Z = I[U];
          if (!(E ? Z in s : Xe.call(s, Z)))
            return !1;
        }
        var ie = w.get(o), ge = w.get(s);
        if (ie && ge)
          return ie == s && ge == o;
        var Ie = !0;
        w.set(o, s), w.set(s, o);
        for (var ye = E; ++U < R; ) {
          Z = I[U];
          var De = o[Z], Ke = s[Z];
          if (h)
            var Mn = E ? h(Ke, De, Z, s, o, w) : h(De, Ke, Z, o, s, w);
          if (!(Mn === n ? De === Ke || v(De, Ke, c, h, w) : Mn)) {
            Ie = !1;
            break;
          }
          ye || (ye = Z == "constructor");
        }
        if (Ie && !ye) {
          var rn = o.constructor, An = s.constructor;
          rn != An && "constructor" in o && "constructor" in s && !(typeof rn == "function" && rn instanceof rn && typeof An == "function" && An instanceof An) && (Ie = !1);
        }
        return w.delete(o), w.delete(s), Ie;
      }
      function Xr(o) {
        return If(um(o, n, vm), o + "");
      }
      function wf(o) {
        return xy(o, Kt, Cf);
      }
      function kf(o) {
        return xy(o, dn, im);
      }
      var xf = ul ? function(o) {
        return ul.get(o);
      } : Bf;
      function xl(o) {
        for (var s = o.name + "", c = Ko[s], h = Xe.call(Ko, s) ? c.length : 0; h--; ) {
          var v = c[h], w = v.func;
          if (w == null || w == o)
            return v.name;
        }
        return s;
      }
      function zo(o) {
        var s = Xe.call(b, "placeholder") ? b : o;
        return s.placeholder;
      }
      function pe() {
        var o = b.iteratee || Hf;
        return o = o === Hf ? Ey : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function Sl(o, s) {
        var c = o.__data__;
        return oE(s) ? c[typeof s == "string" ? "string" : "hash"] : c.map;
      }
      function Sf(o) {
        for (var s = Kt(o), c = s.length; c--; ) {
          var h = s[c], v = o[h];
          s[c] = [h, v, sm(v)];
        }
        return s;
      }
      function no(o, s) {
        var c = lS(o, s);
        return Cy(c) ? c : n;
      }
      function JC(o) {
        var s = Xe.call(o, Zi), c = o[Zi];
        try {
          o[Zi] = n;
          var h = !0;
        } catch {
        }
        var v = tl.call(o);
        return h && (s ? o[Zi] = c : delete o[Zi]), v;
      }
      var Cf = Zc ? function(o) {
        return o == null ? [] : (o = Je(o), xi(Zc(o), function(s) {
          return cy.call(o, s);
        }));
      } : Uf, im = Zc ? function(o) {
        for (var s = []; o; )
          Si(s, Cf(o)), o = il(o);
        return s;
      } : Uf, Yt = tn;
      (Jc && Yt(new Jc(new ArrayBuffer(1))) != ae || Aa && Yt(new Aa()) != bt || Qc && Yt(Qc.resolve()) != Cn || No && Yt(new No()) != en || Da && Yt(new Da()) != jn) && (Yt = function(o) {
        var s = tn(o), c = s == Ut ? o.constructor : n, h = c ? ro(c) : "";
        if (h)
          switch (h) {
            case LS:
              return ae;
            case RS:
              return bt;
            case NS:
              return Cn;
            case KS:
              return en;
            case FS:
              return jn;
          }
        return s;
      });
      function QC(o, s, c) {
        for (var h = -1, v = c.length; ++h < v; ) {
          var w = c[h], E = w.size;
          switch (w.type) {
            case "drop":
              o += E;
              break;
            case "dropRight":
              s -= E;
              break;
            case "take":
              s = Wt(s, o + E);
              break;
            case "takeRight":
              o = Tt(o, s - E);
              break;
          }
        }
        return { start: o, end: s };
      }
      function eE(o) {
        var s = o.match(ax);
        return s ? s[1].split(sx) : [];
      }
      function om(o, s, c) {
        s = Ii(s, o);
        for (var h = -1, v = s.length, w = !1; ++h < v; ) {
          var E = Pr(s[h]);
          if (!(w = o != null && c(o, E)))
            break;
          o = o[E];
        }
        return w || ++h != v ? w : (v = o == null ? 0 : o.length, !!v && Ml(v) && Zr(E, v) && (Se(o) || io(o)));
      }
      function tE(o) {
        var s = o.length, c = new o.constructor(s);
        return s && typeof o[0] == "string" && Xe.call(o, "index") && (c.index = o.index, c.input = o.input), c;
      }
      function am(o) {
        return typeof o.constructor == "function" && !Ba(o) ? Fo(il(o)) : {};
      }
      function nE(o, s, c) {
        var h = o.constructor;
        switch (s) {
          case j:
            return vf(o);
          case Lt:
          case Rt:
            return new h(+o);
          case ae:
            return $C(o, c);
          case re:
          case we:
          case rt:
          case Et:
          case jt:
          case Wn:
          case ln:
          case wt:
          case En:
            return By(o, c);
          case bt:
            return new h();
          case Sn:
          case Wr:
            return new h(o);
          case an:
            return HC(o);
          case en:
            return new h();
          case sn:
            return zC(o);
        }
      }
      function rE(o, s) {
        var c = s.length;
        if (!c)
          return o;
        var h = c - 1;
        return s[h] = (c > 1 ? "& " : "") + s[h], s = s.join(c > 2 ? ", " : " "), o.replace(ox, `{
/* [wrapped with ` + s + `] */
`);
      }
      function iE(o) {
        return Se(o) || io(o) || !!(fy && o && o[fy]);
      }
      function Zr(o, s) {
        var c = typeof o;
        return s = s ?? Ye, !!s && (c == "number" || c != "symbol" && yx.test(o)) && o > -1 && o % 1 == 0 && o < s;
      }
      function nn(o, s, c) {
        if (!_t(c))
          return !1;
        var h = typeof s;
        return (h == "number" ? fn(c) && Zr(s, c.length) : h == "string" && s in c) ? mr(c[s], o) : !1;
      }
      function Ef(o, s) {
        if (Se(o))
          return !1;
        var c = typeof o;
        return c == "number" || c == "symbol" || c == "boolean" || o == null || Tn(o) ? !0 : tx.test(o) || !ex.test(o) || s != null && o in Je(s);
      }
      function oE(o) {
        var s = typeof o;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? o !== "__proto__" : o === null;
      }
      function Of(o) {
        var s = xl(o), c = b[s];
        if (typeof c != "function" || !(s in Le.prototype))
          return !1;
        if (o === c)
          return !0;
        var h = xf(c);
        return !!h && o === h[0];
      }
      function aE(o) {
        return !!sy && sy in o;
      }
      var sE = Qs ? Jr : jf;
      function Ba(o) {
        var s = o && o.constructor, c = typeof s == "function" && s.prototype || Ro;
        return o === c;
      }
      function sm(o) {
        return o === o && !_t(o);
      }
      function lm(o, s) {
        return function(c) {
          return c == null ? !1 : c[o] === s && (s !== n || o in Je(c));
        };
      }
      function lE(o) {
        var s = Il(o, function(h) {
          return c.size === d && c.clear(), h;
        }), c = s.cache;
        return s;
      }
      function uE(o, s) {
        var c = o[1], h = s[1], v = c | h, w = v < (O | S | W), E = h == W && c == T || h == W && c == ne && o[7].length <= s[8] || h == (W | ne) && s[7].length <= s[8] && c == T;
        if (!(w || E))
          return o;
        h & O && (o[2] = s[2], v |= c & O ? 0 : M);
        var I = s[3];
        if (I) {
          var R = o[3];
          o[3] = R ? jy(R, I, s[4]) : I, o[4] = R ? Ci(o[3], p) : s[4];
        }
        return I = s[5], I && (R = o[5], o[5] = R ? Wy(R, I, s[6]) : I, o[6] = R ? Ci(o[5], p) : s[6]), I = s[7], I && (o[7] = I), h & W && (o[8] = o[8] == null ? s[8] : Wt(o[8], s[8])), o[9] == null && (o[9] = s[9]), o[0] = s[0], o[1] = v, o;
      }
      function cE(o) {
        var s = [];
        if (o != null)
          for (var c in Je(o))
            s.push(c);
        return s;
      }
      function fE(o) {
        return tl.call(o);
      }
      function um(o, s, c) {
        return s = Tt(s === n ? o.length - 1 : s, 0), function() {
          for (var h = arguments, v = -1, w = Tt(h.length - s, 0), E = F(w); ++v < w; )
            E[v] = h[s + v];
          v = -1;
          for (var I = F(s + 1); ++v < s; )
            I[v] = h[v];
          return I[s] = c(E), On(o, this, I);
        };
      }
      function cm(o, s) {
        return s.length < 2 ? o : to(o, Zn(s, 0, -1));
      }
      function dE(o, s) {
        for (var c = o.length, h = Wt(s.length, c), v = cn(o); h--; ) {
          var w = s[h];
          o[h] = Zr(w, c) ? v[w] : n;
        }
        return o;
      }
      function Pf(o, s) {
        if (!(s === "constructor" && typeof o[s] == "function") && s != "__proto__")
          return o[s];
      }
      var fm = hm(Ly), Ua = OS || function(o, s) {
        return Ht.setTimeout(o, s);
      }, If = hm(RC);
      function dm(o, s, c) {
        var h = s + "";
        return If(o, rE(h, hE(eE(h), c)));
      }
      function hm(o) {
        var s = 0, c = 0;
        return function() {
          var h = MS(), v = he - (h - c);
          if (c = h, v > 0) {
            if (++s >= V)
              return arguments[0];
          } else
            s = 0;
          return o.apply(n, arguments);
        };
      }
      function Cl(o, s) {
        var c = -1, h = o.length, v = h - 1;
        for (s = s === n ? h : s; ++c < s; ) {
          var w = ff(c, v), E = o[w];
          o[w] = o[c], o[c] = E;
        }
        return o.length = s, o;
      }
      var pm = lE(function(o) {
        var s = [];
        return o.charCodeAt(0) === 46 && s.push(""), o.replace(nx, function(c, h, v, w) {
          s.push(v ? w.replace(cx, "$1") : h || c);
        }), s;
      });
      function Pr(o) {
        if (typeof o == "string" || Tn(o))
          return o;
        var s = o + "";
        return s == "0" && 1 / o == -1 / 0 ? "-0" : s;
      }
      function ro(o) {
        if (o != null) {
          try {
            return el.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function hE(o, s) {
        return Gn(be, function(c) {
          var h = "_." + c[0];
          s & c[1] && !Vs(o, h) && o.push(h);
        }), o.sort();
      }
      function gm(o) {
        if (o instanceof Le)
          return o.clone();
        var s = new Vn(o.__wrapped__, o.__chain__);
        return s.__actions__ = cn(o.__actions__), s.__index__ = o.__index__, s.__values__ = o.__values__, s;
      }
      function pE(o, s, c) {
        (c ? nn(o, s, c) : s === n) ? s = 1 : s = Tt(Ee(s), 0);
        var h = o == null ? 0 : o.length;
        if (!h || s < 1)
          return [];
        for (var v = 0, w = 0, E = F(sl(h / s)); v < h; )
          E[w++] = Zn(o, v, v += s);
        return E;
      }
      function gE(o) {
        for (var s = -1, c = o == null ? 0 : o.length, h = 0, v = []; ++s < c; ) {
          var w = o[s];
          w && (v[h++] = w);
        }
        return v;
      }
      function yE() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var s = F(o - 1), c = arguments[0], h = o; h--; )
          s[h - 1] = arguments[h];
        return Si(Se(c) ? cn(c) : [c], zt(s, 1));
      }
      var mE = Te(function(o, s) {
        return xt(o) ? Ka(o, zt(s, 1, xt, !0)) : [];
      }), vE = Te(function(o, s) {
        var c = Jn(s);
        return xt(c) && (c = n), xt(o) ? Ka(o, zt(s, 1, xt, !0), pe(c, 2)) : [];
      }), _E = Te(function(o, s) {
        var c = Jn(s);
        return xt(c) && (c = n), xt(o) ? Ka(o, zt(s, 1, xt, !0), n, c) : [];
      });
      function bE(o, s, c) {
        var h = o == null ? 0 : o.length;
        return h ? (s = c || s === n ? 1 : Ee(s), Zn(o, s < 0 ? 0 : s, h)) : [];
      }
      function wE(o, s, c) {
        var h = o == null ? 0 : o.length;
        return h ? (s = c || s === n ? 1 : Ee(s), s = h - s, Zn(o, 0, s < 0 ? 0 : s)) : [];
      }
      function kE(o, s) {
        return o && o.length ? ml(o, pe(s, 3), !0, !0) : [];
      }
      function xE(o, s) {
        return o && o.length ? ml(o, pe(s, 3), !0) : [];
      }
      function SE(o, s, c, h) {
        var v = o == null ? 0 : o.length;
        return v ? (c && typeof c != "number" && nn(o, s, c) && (c = 0, h = v), yC(o, s, c, h)) : [];
      }
      function ym(o, s, c) {
        var h = o == null ? 0 : o.length;
        if (!h)
          return -1;
        var v = c == null ? 0 : Ee(c);
        return v < 0 && (v = Tt(h + v, 0)), Xs(o, pe(s, 3), v);
      }
      function mm(o, s, c) {
        var h = o == null ? 0 : o.length;
        if (!h)
          return -1;
        var v = h - 1;
        return c !== n && (v = Ee(c), v = c < 0 ? Tt(h + v, 0) : Wt(v, h - 1)), Xs(o, pe(s, 3), v, !0);
      }
      function vm(o) {
        var s = o == null ? 0 : o.length;
        return s ? zt(o, 1) : [];
      }
      function CE(o) {
        var s = o == null ? 0 : o.length;
        return s ? zt(o, $e) : [];
      }
      function EE(o, s) {
        var c = o == null ? 0 : o.length;
        return c ? (s = s === n ? 1 : Ee(s), zt(o, s)) : [];
      }
      function OE(o) {
        for (var s = -1, c = o == null ? 0 : o.length, h = {}; ++s < c; ) {
          var v = o[s];
          h[v[0]] = v[1];
        }
        return h;
      }
      function _m(o) {
        return o && o.length ? o[0] : n;
      }
      function PE(o, s, c) {
        var h = o == null ? 0 : o.length;
        if (!h)
          return -1;
        var v = c == null ? 0 : Ee(c);
        return v < 0 && (v = Tt(h + v, 0)), Mo(o, s, v);
      }
      function IE(o) {
        var s = o == null ? 0 : o.length;
        return s ? Zn(o, 0, -1) : [];
      }
      var TE = Te(function(o) {
        var s = gt(o, yf);
        return s.length && s[0] === o[0] ? af(s) : [];
      }), ME = Te(function(o) {
        var s = Jn(o), c = gt(o, yf);
        return s === Jn(c) ? s = n : c.pop(), c.length && c[0] === o[0] ? af(c, pe(s, 2)) : [];
      }), AE = Te(function(o) {
        var s = Jn(o), c = gt(o, yf);
        return s = typeof s == "function" ? s : n, s && c.pop(), c.length && c[0] === o[0] ? af(c, n, s) : [];
      });
      function DE(o, s) {
        return o == null ? "" : IS.call(o, s);
      }
      function Jn(o) {
        var s = o == null ? 0 : o.length;
        return s ? o[s - 1] : n;
      }
      function LE(o, s, c) {
        var h = o == null ? 0 : o.length;
        if (!h)
          return -1;
        var v = h;
        return c !== n && (v = Ee(c), v = v < 0 ? Tt(h + v, 0) : Wt(v, h - 1)), s === s ? hS(o, s, v) : Xs(o, Qg, v, !0);
      }
      function RE(o, s) {
        return o && o.length ? Ty(o, Ee(s)) : n;
      }
      var NE = Te(bm);
      function bm(o, s) {
        return o && o.length && s && s.length ? cf(o, s) : o;
      }
      function KE(o, s, c) {
        return o && o.length && s && s.length ? cf(o, s, pe(c, 2)) : o;
      }
      function FE(o, s, c) {
        return o && o.length && s && s.length ? cf(o, s, n, c) : o;
      }
      var $E = Xr(function(o, s) {
        var c = o == null ? 0 : o.length, h = tf(o, s);
        return Dy(o, gt(s, function(v) {
          return Zr(v, c) ? +v : v;
        }).sort(Uy)), h;
      });
      function HE(o, s) {
        var c = [];
        if (!(o && o.length))
          return c;
        var h = -1, v = [], w = o.length;
        for (s = pe(s, 3); ++h < w; ) {
          var E = o[h];
          s(E, h, o) && (c.push(E), v.push(h));
        }
        return Dy(o, v), c;
      }
      function Tf(o) {
        return o == null ? o : DS.call(o);
      }
      function zE(o, s, c) {
        var h = o == null ? 0 : o.length;
        return h ? (c && typeof c != "number" && nn(o, s, c) ? (s = 0, c = h) : (s = s == null ? 0 : Ee(s), c = c === n ? h : Ee(c)), Zn(o, s, c)) : [];
      }
      function BE(o, s) {
        return yl(o, s);
      }
      function UE(o, s, c) {
        return hf(o, s, pe(c, 2));
      }
      function jE(o, s) {
        var c = o == null ? 0 : o.length;
        if (c) {
          var h = yl(o, s);
          if (h < c && mr(o[h], s))
            return h;
        }
        return -1;
      }
      function WE(o, s) {
        return yl(o, s, !0);
      }
      function YE(o, s, c) {
        return hf(o, s, pe(c, 2), !0);
      }
      function GE(o, s) {
        var c = o == null ? 0 : o.length;
        if (c) {
          var h = yl(o, s, !0) - 1;
          if (mr(o[h], s))
            return h;
        }
        return -1;
      }
      function qE(o) {
        return o && o.length ? Ry(o) : [];
      }
      function VE(o, s) {
        return o && o.length ? Ry(o, pe(s, 2)) : [];
      }
      function XE(o) {
        var s = o == null ? 0 : o.length;
        return s ? Zn(o, 1, s) : [];
      }
      function ZE(o, s, c) {
        return o && o.length ? (s = c || s === n ? 1 : Ee(s), Zn(o, 0, s < 0 ? 0 : s)) : [];
      }
      function JE(o, s, c) {
        var h = o == null ? 0 : o.length;
        return h ? (s = c || s === n ? 1 : Ee(s), s = h - s, Zn(o, s < 0 ? 0 : s, h)) : [];
      }
      function QE(o, s) {
        return o && o.length ? ml(o, pe(s, 3), !1, !0) : [];
      }
      function e2(o, s) {
        return o && o.length ? ml(o, pe(s, 3)) : [];
      }
      var t2 = Te(function(o) {
        return Pi(zt(o, 1, xt, !0));
      }), n2 = Te(function(o) {
        var s = Jn(o);
        return xt(s) && (s = n), Pi(zt(o, 1, xt, !0), pe(s, 2));
      }), r2 = Te(function(o) {
        var s = Jn(o);
        return s = typeof s == "function" ? s : n, Pi(zt(o, 1, xt, !0), n, s);
      });
      function i2(o) {
        return o && o.length ? Pi(o) : [];
      }
      function o2(o, s) {
        return o && o.length ? Pi(o, pe(s, 2)) : [];
      }
      function a2(o, s) {
        return s = typeof s == "function" ? s : n, o && o.length ? Pi(o, n, s) : [];
      }
      function Mf(o) {
        if (!(o && o.length))
          return [];
        var s = 0;
        return o = xi(o, function(c) {
          if (xt(c))
            return s = Tt(c.length, s), !0;
        }), Gc(s, function(c) {
          return gt(o, jc(c));
        });
      }
      function wm(o, s) {
        if (!(o && o.length))
          return [];
        var c = Mf(o);
        return s == null ? c : gt(c, function(h) {
          return On(s, n, h);
        });
      }
      var s2 = Te(function(o, s) {
        return xt(o) ? Ka(o, s) : [];
      }), l2 = Te(function(o) {
        return gf(xi(o, xt));
      }), u2 = Te(function(o) {
        var s = Jn(o);
        return xt(s) && (s = n), gf(xi(o, xt), pe(s, 2));
      }), c2 = Te(function(o) {
        var s = Jn(o);
        return s = typeof s == "function" ? s : n, gf(xi(o, xt), n, s);
      }), f2 = Te(Mf);
      function d2(o, s) {
        return $y(o || [], s || [], Na);
      }
      function h2(o, s) {
        return $y(o || [], s || [], Ha);
      }
      var p2 = Te(function(o) {
        var s = o.length, c = s > 1 ? o[s - 1] : n;
        return c = typeof c == "function" ? (o.pop(), c) : n, wm(o, c);
      });
      function km(o) {
        var s = b(o);
        return s.__chain__ = !0, s;
      }
      function g2(o, s) {
        return s(o), o;
      }
      function El(o, s) {
        return s(o);
      }
      var y2 = Xr(function(o) {
        var s = o.length, c = s ? o[0] : 0, h = this.__wrapped__, v = function(w) {
          return tf(w, o);
        };
        return s > 1 || this.__actions__.length || !(h instanceof Le) || !Zr(c) ? this.thru(v) : (h = h.slice(c, +c + (s ? 1 : 0)), h.__actions__.push({
          func: El,
          args: [v],
          thisArg: n
        }), new Vn(h, this.__chain__).thru(function(w) {
          return s && !w.length && w.push(n), w;
        }));
      });
      function m2() {
        return km(this);
      }
      function v2() {
        return new Vn(this.value(), this.__chain__);
      }
      function _2() {
        this.__values__ === n && (this.__values__ = Nm(this.value()));
        var o = this.__index__ >= this.__values__.length, s = o ? n : this.__values__[this.__index__++];
        return { done: o, value: s };
      }
      function b2() {
        return this;
      }
      function w2(o) {
        for (var s, c = this; c instanceof fl; ) {
          var h = gm(c);
          h.__index__ = 0, h.__values__ = n, s ? v.__wrapped__ = h : s = h;
          var v = h;
          c = c.__wrapped__;
        }
        return v.__wrapped__ = o, s;
      }
      function k2() {
        var o = this.__wrapped__;
        if (o instanceof Le) {
          var s = o;
          return this.__actions__.length && (s = new Le(this)), s = s.reverse(), s.__actions__.push({
            func: El,
            args: [Tf],
            thisArg: n
          }), new Vn(s, this.__chain__);
        }
        return this.thru(Tf);
      }
      function x2() {
        return Fy(this.__wrapped__, this.__actions__);
      }
      var S2 = vl(function(o, s, c) {
        Xe.call(o, c) ? ++o[c] : qr(o, c, 1);
      });
      function C2(o, s, c) {
        var h = Se(o) ? Zg : gC;
        return c && nn(o, s, c) && (s = n), h(o, pe(s, 3));
      }
      function E2(o, s) {
        var c = Se(o) ? xi : wy;
        return c(o, pe(s, 3));
      }
      var O2 = Vy(ym), P2 = Vy(mm);
      function I2(o, s) {
        return zt(Ol(o, s), 1);
      }
      function T2(o, s) {
        return zt(Ol(o, s), $e);
      }
      function M2(o, s, c) {
        return c = c === n ? 1 : Ee(c), zt(Ol(o, s), c);
      }
      function xm(o, s) {
        var c = Se(o) ? Gn : Oi;
        return c(o, pe(s, 3));
      }
      function Sm(o, s) {
        var c = Se(o) ? Xx : by;
        return c(o, pe(s, 3));
      }
      var A2 = vl(function(o, s, c) {
        Xe.call(o, c) ? o[c].push(s) : qr(o, c, [s]);
      });
      function D2(o, s, c, h) {
        o = fn(o) ? o : Uo(o), c = c && !h ? Ee(c) : 0;
        var v = o.length;
        return c < 0 && (c = Tt(v + c, 0)), Al(o) ? c <= v && o.indexOf(s, c) > -1 : !!v && Mo(o, s, c) > -1;
      }
      var L2 = Te(function(o, s, c) {
        var h = -1, v = typeof s == "function", w = fn(o) ? F(o.length) : [];
        return Oi(o, function(E) {
          w[++h] = v ? On(s, E, c) : Fa(E, s, c);
        }), w;
      }), R2 = vl(function(o, s, c) {
        qr(o, c, s);
      });
      function Ol(o, s) {
        var c = Se(o) ? gt : Oy;
        return c(o, pe(s, 3));
      }
      function N2(o, s, c, h) {
        return o == null ? [] : (Se(s) || (s = s == null ? [] : [s]), c = h ? n : c, Se(c) || (c = c == null ? [] : [c]), My(o, s, c));
      }
      var K2 = vl(function(o, s, c) {
        o[c ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function F2(o, s, c) {
        var h = Se(o) ? Bc : ty, v = arguments.length < 3;
        return h(o, pe(s, 4), c, v, Oi);
      }
      function $2(o, s, c) {
        var h = Se(o) ? Zx : ty, v = arguments.length < 3;
        return h(o, pe(s, 4), c, v, by);
      }
      function H2(o, s) {
        var c = Se(o) ? xi : wy;
        return c(o, Tl(pe(s, 3)));
      }
      function z2(o) {
        var s = Se(o) ? yy : DC;
        return s(o);
      }
      function B2(o, s, c) {
        (c ? nn(o, s, c) : s === n) ? s = 1 : s = Ee(s);
        var h = Se(o) ? cC : LC;
        return h(o, s);
      }
      function U2(o) {
        var s = Se(o) ? fC : NC;
        return s(o);
      }
      function j2(o) {
        if (o == null)
          return 0;
        if (fn(o))
          return Al(o) ? Do(o) : o.length;
        var s = Yt(o);
        return s == bt || s == en ? o.size : lf(o).length;
      }
      function W2(o, s, c) {
        var h = Se(o) ? Uc : KC;
        return c && nn(o, s, c) && (s = n), h(o, pe(s, 3));
      }
      var Y2 = Te(function(o, s) {
        if (o == null)
          return [];
        var c = s.length;
        return c > 1 && nn(o, s[0], s[1]) ? s = [] : c > 2 && nn(s[0], s[1], s[2]) && (s = [s[0]]), My(o, zt(s, 1), []);
      }), Pl = ES || function() {
        return Ht.Date.now();
      };
      function G2(o, s) {
        if (typeof s != "function")
          throw new qn(l);
        return o = Ee(o), function() {
          if (--o < 1)
            return s.apply(this, arguments);
        };
      }
      function Cm(o, s, c) {
        return s = c ? n : s, s = o && s == null ? o.length : s, Vr(o, W, n, n, n, n, s);
      }
      function Em(o, s) {
        var c;
        if (typeof s != "function")
          throw new qn(l);
        return o = Ee(o), function() {
          return --o > 0 && (c = s.apply(this, arguments)), o <= 1 && (s = n), c;
        };
      }
      var Af = Te(function(o, s, c) {
        var h = O;
        if (c.length) {
          var v = Ci(c, zo(Af));
          h |= K;
        }
        return Vr(o, h, s, c, v);
      }), Om = Te(function(o, s, c) {
        var h = O | S;
        if (c.length) {
          var v = Ci(c, zo(Om));
          h |= K;
        }
        return Vr(s, h, o, c, v);
      });
      function Pm(o, s, c) {
        s = c ? n : s;
        var h = Vr(o, T, n, n, n, n, n, s);
        return h.placeholder = Pm.placeholder, h;
      }
      function Im(o, s, c) {
        s = c ? n : s;
        var h = Vr(o, L, n, n, n, n, n, s);
        return h.placeholder = Im.placeholder, h;
      }
      function Tm(o, s, c) {
        var h, v, w, E, I, R, z = 0, B = !1, U = !1, Z = !0;
        if (typeof o != "function")
          throw new qn(l);
        s = Qn(s) || 0, _t(c) && (B = !!c.leading, U = "maxWait" in c, w = U ? Tt(Qn(c.maxWait) || 0, s) : w, Z = "trailing" in c ? !!c.trailing : Z);
        function ie(St) {
          var vr = h, ei = v;
          return h = v = n, z = St, E = o.apply(ei, vr), E;
        }
        function ge(St) {
          return z = St, I = Ua(De, s), B ? ie(St) : E;
        }
        function Ie(St) {
          var vr = St - R, ei = St - z, Vm = s - vr;
          return U ? Wt(Vm, w - ei) : Vm;
        }
        function ye(St) {
          var vr = St - R, ei = St - z;
          return R === n || vr >= s || vr < 0 || U && ei >= w;
        }
        function De() {
          var St = Pl();
          if (ye(St))
            return Ke(St);
          I = Ua(De, Ie(St));
        }
        function Ke(St) {
          return I = n, Z && h ? ie(St) : (h = v = n, E);
        }
        function Mn() {
          I !== n && Hy(I), z = 0, h = R = v = I = n;
        }
        function rn() {
          return I === n ? E : Ke(Pl());
        }
        function An() {
          var St = Pl(), vr = ye(St);
          if (h = arguments, v = this, R = St, vr) {
            if (I === n)
              return ge(R);
            if (U)
              return Hy(I), I = Ua(De, s), ie(R);
          }
          return I === n && (I = Ua(De, s)), E;
        }
        return An.cancel = Mn, An.flush = rn, An;
      }
      var q2 = Te(function(o, s) {
        return _y(o, 1, s);
      }), V2 = Te(function(o, s, c) {
        return _y(o, Qn(s) || 0, c);
      });
      function X2(o) {
        return Vr(o, oe);
      }
      function Il(o, s) {
        if (typeof o != "function" || s != null && typeof s != "function")
          throw new qn(l);
        var c = function() {
          var h = arguments, v = s ? s.apply(this, h) : h[0], w = c.cache;
          if (w.has(v))
            return w.get(v);
          var E = o.apply(this, h);
          return c.cache = w.set(v, E) || w, E;
        };
        return c.cache = new (Il.Cache || Gr)(), c;
      }
      Il.Cache = Gr;
      function Tl(o) {
        if (typeof o != "function")
          throw new qn(l);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !o.call(this);
            case 1:
              return !o.call(this, s[0]);
            case 2:
              return !o.call(this, s[0], s[1]);
            case 3:
              return !o.call(this, s[0], s[1], s[2]);
          }
          return !o.apply(this, s);
        };
      }
      function Z2(o) {
        return Em(2, o);
      }
      var J2 = FC(function(o, s) {
        s = s.length == 1 && Se(s[0]) ? gt(s[0], Pn(pe())) : gt(zt(s, 1), Pn(pe()));
        var c = s.length;
        return Te(function(h) {
          for (var v = -1, w = Wt(h.length, c); ++v < w; )
            h[v] = s[v].call(this, h[v]);
          return On(o, this, h);
        });
      }), Df = Te(function(o, s) {
        var c = Ci(s, zo(Df));
        return Vr(o, K, n, s, c);
      }), Mm = Te(function(o, s) {
        var c = Ci(s, zo(Mm));
        return Vr(o, N, n, s, c);
      }), Q2 = Xr(function(o, s) {
        return Vr(o, ne, n, n, n, s);
      });
      function eO(o, s) {
        if (typeof o != "function")
          throw new qn(l);
        return s = s === n ? s : Ee(s), Te(o, s);
      }
      function tO(o, s) {
        if (typeof o != "function")
          throw new qn(l);
        return s = s == null ? 0 : Tt(Ee(s), 0), Te(function(c) {
          var h = c[s], v = Ti(c, 0, s);
          return h && Si(v, h), On(o, this, v);
        });
      }
      function nO(o, s, c) {
        var h = !0, v = !0;
        if (typeof o != "function")
          throw new qn(l);
        return _t(c) && (h = "leading" in c ? !!c.leading : h, v = "trailing" in c ? !!c.trailing : v), Tm(o, s, {
          leading: h,
          maxWait: s,
          trailing: v
        });
      }
      function rO(o) {
        return Cm(o, 1);
      }
      function iO(o, s) {
        return Df(mf(s), o);
      }
      function oO() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return Se(o) ? o : [o];
      }
      function aO(o) {
        return Xn(o, y);
      }
      function sO(o, s) {
        return s = typeof s == "function" ? s : n, Xn(o, y, s);
      }
      function lO(o) {
        return Xn(o, g | y);
      }
      function uO(o, s) {
        return s = typeof s == "function" ? s : n, Xn(o, g | y, s);
      }
      function cO(o, s) {
        return s == null || vy(o, s, Kt(s));
      }
      function mr(o, s) {
        return o === s || o !== o && s !== s;
      }
      var fO = kl(of), dO = kl(function(o, s) {
        return o >= s;
      }), io = Sy(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Sy : function(o) {
        return kt(o) && Xe.call(o, "callee") && !cy.call(o, "callee");
      }, Se = F.isArray, hO = Wg ? Pn(Wg) : wC;
      function fn(o) {
        return o != null && Ml(o.length) && !Jr(o);
      }
      function xt(o) {
        return kt(o) && fn(o);
      }
      function pO(o) {
        return o === !0 || o === !1 || kt(o) && tn(o) == Lt;
      }
      var Mi = PS || jf, gO = Yg ? Pn(Yg) : kC;
      function yO(o) {
        return kt(o) && o.nodeType === 1 && !ja(o);
      }
      function mO(o) {
        if (o == null)
          return !0;
        if (fn(o) && (Se(o) || typeof o == "string" || typeof o.splice == "function" || Mi(o) || Bo(o) || io(o)))
          return !o.length;
        var s = Yt(o);
        if (s == bt || s == en)
          return !o.size;
        if (Ba(o))
          return !lf(o).length;
        for (var c in o)
          if (Xe.call(o, c))
            return !1;
        return !0;
      }
      function vO(o, s) {
        return $a(o, s);
      }
      function _O(o, s, c) {
        c = typeof c == "function" ? c : n;
        var h = c ? c(o, s) : n;
        return h === n ? $a(o, s, n, c) : !!h;
      }
      function Lf(o) {
        if (!kt(o))
          return !1;
        var s = tn(o);
        return s == lt || s == Un || typeof o.message == "string" && typeof o.name == "string" && !ja(o);
      }
      function bO(o) {
        return typeof o == "number" && dy(o);
      }
      function Jr(o) {
        if (!_t(o))
          return !1;
        var s = tn(o);
        return s == xn || s == ki || s == st || s == Vi;
      }
      function Am(o) {
        return typeof o == "number" && o == Ee(o);
      }
      function Ml(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= Ye;
      }
      function _t(o) {
        var s = typeof o;
        return o != null && (s == "object" || s == "function");
      }
      function kt(o) {
        return o != null && typeof o == "object";
      }
      var Dm = Gg ? Pn(Gg) : SC;
      function wO(o, s) {
        return o === s || sf(o, s, Sf(s));
      }
      function kO(o, s, c) {
        return c = typeof c == "function" ? c : n, sf(o, s, Sf(s), c);
      }
      function xO(o) {
        return Lm(o) && o != +o;
      }
      function SO(o) {
        if (sE(o))
          throw new ke(a);
        return Cy(o);
      }
      function CO(o) {
        return o === null;
      }
      function EO(o) {
        return o == null;
      }
      function Lm(o) {
        return typeof o == "number" || kt(o) && tn(o) == Sn;
      }
      function ja(o) {
        if (!kt(o) || tn(o) != Ut)
          return !1;
        var s = il(o);
        if (s === null)
          return !0;
        var c = Xe.call(s, "constructor") && s.constructor;
        return typeof c == "function" && c instanceof c && el.call(c) == kS;
      }
      var Rf = qg ? Pn(qg) : CC;
      function OO(o) {
        return Am(o) && o >= -9007199254740991 && o <= Ye;
      }
      var Rm = Vg ? Pn(Vg) : EC;
      function Al(o) {
        return typeof o == "string" || !Se(o) && kt(o) && tn(o) == Wr;
      }
      function Tn(o) {
        return typeof o == "symbol" || kt(o) && tn(o) == sn;
      }
      var Bo = Xg ? Pn(Xg) : OC;
      function PO(o) {
        return o === n;
      }
      function IO(o) {
        return kt(o) && Yt(o) == jn;
      }
      function TO(o) {
        return kt(o) && tn(o) == H;
      }
      var MO = kl(uf), AO = kl(function(o, s) {
        return o <= s;
      });
      function Nm(o) {
        if (!o)
          return [];
        if (fn(o))
          return Al(o) ? gr(o) : cn(o);
        if (Ma && o[Ma])
          return cS(o[Ma]());
        var s = Yt(o), c = s == bt ? Vc : s == en ? Zs : Uo;
        return c(o);
      }
      function Qr(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Qn(o), o === $e || o === -1 / 0) {
          var s = o < 0 ? -1 : 1;
          return s * ve;
        }
        return o === o ? o : 0;
      }
      function Ee(o) {
        var s = Qr(o), c = s % 1;
        return s === s ? c ? s - c : s : 0;
      }
      function Km(o) {
        return o ? eo(Ee(o), 0, Ae) : 0;
      }
      function Qn(o) {
        if (typeof o == "number")
          return o;
        if (Tn(o))
          return C;
        if (_t(o)) {
          var s = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = _t(s) ? s + "" : s;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = ny(o);
        var c = hx.test(o);
        return c || gx.test(o) ? Gx(o.slice(2), c ? 2 : 8) : dx.test(o) ? C : +o;
      }
      function Fm(o) {
        return Or(o, dn(o));
      }
      function DO(o) {
        return o ? eo(Ee(o), -9007199254740991, Ye) : o === 0 ? o : 0;
      }
      function Ge(o) {
        return o == null ? "" : In(o);
      }
      var LO = $o(function(o, s) {
        if (Ba(s) || fn(s)) {
          Or(s, Kt(s), o);
          return;
        }
        for (var c in s)
          Xe.call(s, c) && Na(o, c, s[c]);
      }), $m = $o(function(o, s) {
        Or(s, dn(s), o);
      }), Dl = $o(function(o, s, c, h) {
        Or(s, dn(s), o, h);
      }), RO = $o(function(o, s, c, h) {
        Or(s, Kt(s), o, h);
      }), NO = Xr(tf);
      function KO(o, s) {
        var c = Fo(o);
        return s == null ? c : my(c, s);
      }
      var FO = Te(function(o, s) {
        o = Je(o);
        var c = -1, h = s.length, v = h > 2 ? s[2] : n;
        for (v && nn(s[0], s[1], v) && (h = 1); ++c < h; )
          for (var w = s[c], E = dn(w), I = -1, R = E.length; ++I < R; ) {
            var z = E[I], B = o[z];
            (B === n || mr(B, Ro[z]) && !Xe.call(o, z)) && (o[z] = w[z]);
          }
        return o;
      }), $O = Te(function(o) {
        return o.push(n, nm), On(Hm, n, o);
      });
      function HO(o, s) {
        return Jg(o, pe(s, 3), Er);
      }
      function zO(o, s) {
        return Jg(o, pe(s, 3), rf);
      }
      function BO(o, s) {
        return o == null ? o : nf(o, pe(s, 3), dn);
      }
      function UO(o, s) {
        return o == null ? o : ky(o, pe(s, 3), dn);
      }
      function jO(o, s) {
        return o && Er(o, pe(s, 3));
      }
      function WO(o, s) {
        return o && rf(o, pe(s, 3));
      }
      function YO(o) {
        return o == null ? [] : pl(o, Kt(o));
      }
      function GO(o) {
        return o == null ? [] : pl(o, dn(o));
      }
      function Nf(o, s, c) {
        var h = o == null ? n : to(o, s);
        return h === n ? c : h;
      }
      function qO(o, s) {
        return o != null && om(o, s, mC);
      }
      function Kf(o, s) {
        return o != null && om(o, s, vC);
      }
      var VO = Zy(function(o, s, c) {
        s != null && typeof s.toString != "function" && (s = tl.call(s)), o[s] = c;
      }, $f(hn)), XO = Zy(function(o, s, c) {
        s != null && typeof s.toString != "function" && (s = tl.call(s)), Xe.call(o, s) ? o[s].push(c) : o[s] = [c];
      }, pe), ZO = Te(Fa);
      function Kt(o) {
        return fn(o) ? gy(o) : lf(o);
      }
      function dn(o) {
        return fn(o) ? gy(o, !0) : PC(o);
      }
      function JO(o, s) {
        var c = {};
        return s = pe(s, 3), Er(o, function(h, v, w) {
          qr(c, s(h, v, w), h);
        }), c;
      }
      function QO(o, s) {
        var c = {};
        return s = pe(s, 3), Er(o, function(h, v, w) {
          qr(c, v, s(h, v, w));
        }), c;
      }
      var eP = $o(function(o, s, c) {
        gl(o, s, c);
      }), Hm = $o(function(o, s, c, h) {
        gl(o, s, c, h);
      }), tP = Xr(function(o, s) {
        var c = {};
        if (o == null)
          return c;
        var h = !1;
        s = gt(s, function(w) {
          return w = Ii(w, o), h || (h = w.length > 1), w;
        }), Or(o, kf(o), c), h && (c = Xn(c, g | _ | y, VC));
        for (var v = s.length; v--; )
          pf(c, s[v]);
        return c;
      });
      function nP(o, s) {
        return zm(o, Tl(pe(s)));
      }
      var rP = Xr(function(o, s) {
        return o == null ? {} : TC(o, s);
      });
      function zm(o, s) {
        if (o == null)
          return {};
        var c = gt(kf(o), function(h) {
          return [h];
        });
        return s = pe(s), Ay(o, c, function(h, v) {
          return s(h, v[0]);
        });
      }
      function iP(o, s, c) {
        s = Ii(s, o);
        var h = -1, v = s.length;
        for (v || (v = 1, o = n); ++h < v; ) {
          var w = o == null ? n : o[Pr(s[h])];
          w === n && (h = v, w = c), o = Jr(w) ? w.call(o) : w;
        }
        return o;
      }
      function oP(o, s, c) {
        return o == null ? o : Ha(o, s, c);
      }
      function aP(o, s, c, h) {
        return h = typeof h == "function" ? h : n, o == null ? o : Ha(o, s, c, h);
      }
      var Bm = em(Kt), Um = em(dn);
      function sP(o, s, c) {
        var h = Se(o), v = h || Mi(o) || Bo(o);
        if (s = pe(s, 4), c == null) {
          var w = o && o.constructor;
          v ? c = h ? new w() : [] : _t(o) ? c = Jr(w) ? Fo(il(o)) : {} : c = {};
        }
        return (v ? Gn : Er)(o, function(E, I, R) {
          return s(c, E, I, R);
        }), c;
      }
      function lP(o, s) {
        return o == null ? !0 : pf(o, s);
      }
      function uP(o, s, c) {
        return o == null ? o : Ky(o, s, mf(c));
      }
      function cP(o, s, c, h) {
        return h = typeof h == "function" ? h : n, o == null ? o : Ky(o, s, mf(c), h);
      }
      function Uo(o) {
        return o == null ? [] : qc(o, Kt(o));
      }
      function fP(o) {
        return o == null ? [] : qc(o, dn(o));
      }
      function dP(o, s, c) {
        return c === n && (c = s, s = n), c !== n && (c = Qn(c), c = c === c ? c : 0), s !== n && (s = Qn(s), s = s === s ? s : 0), eo(Qn(o), s, c);
      }
      function hP(o, s, c) {
        return s = Qr(s), c === n ? (c = s, s = 0) : c = Qr(c), o = Qn(o), _C(o, s, c);
      }
      function pP(o, s, c) {
        if (c && typeof c != "boolean" && nn(o, s, c) && (s = c = n), c === n && (typeof s == "boolean" ? (c = s, s = n) : typeof o == "boolean" && (c = o, o = n)), o === n && s === n ? (o = 0, s = 1) : (o = Qr(o), s === n ? (s = o, o = 0) : s = Qr(s)), o > s) {
          var h = o;
          o = s, s = h;
        }
        if (c || o % 1 || s % 1) {
          var v = hy();
          return Wt(o + v * (s - o + Yx("1e-" + ((v + "").length - 1))), s);
        }
        return ff(o, s);
      }
      var gP = Ho(function(o, s, c) {
        return s = s.toLowerCase(), o + (c ? jm(s) : s);
      });
      function jm(o) {
        return Ff(Ge(o).toLowerCase());
      }
      function Wm(o) {
        return o = Ge(o), o && o.replace(mx, oS).replace(Nx, "");
      }
      function yP(o, s, c) {
        o = Ge(o), s = In(s);
        var h = o.length;
        c = c === n ? h : eo(Ee(c), 0, h);
        var v = c;
        return c -= s.length, c >= 0 && o.slice(c, v) == s;
      }
      function mP(o) {
        return o = Ge(o), o && Zk.test(o) ? o.replace(kg, aS) : o;
      }
      function vP(o) {
        return o = Ge(o), o && rx.test(o) ? o.replace(Ac, "\\$&") : o;
      }
      var _P = Ho(function(o, s, c) {
        return o + (c ? "-" : "") + s.toLowerCase();
      }), bP = Ho(function(o, s, c) {
        return o + (c ? " " : "") + s.toLowerCase();
      }), wP = qy("toLowerCase");
      function kP(o, s, c) {
        o = Ge(o), s = Ee(s);
        var h = s ? Do(o) : 0;
        if (!s || h >= s)
          return o;
        var v = (s - h) / 2;
        return wl(ll(v), c) + o + wl(sl(v), c);
      }
      function xP(o, s, c) {
        o = Ge(o), s = Ee(s);
        var h = s ? Do(o) : 0;
        return s && h < s ? o + wl(s - h, c) : o;
      }
      function SP(o, s, c) {
        o = Ge(o), s = Ee(s);
        var h = s ? Do(o) : 0;
        return s && h < s ? wl(s - h, c) + o : o;
      }
      function CP(o, s, c) {
        return c || s == null ? s = 0 : s && (s = +s), AS(Ge(o).replace(Dc, ""), s || 0);
      }
      function EP(o, s, c) {
        return (c ? nn(o, s, c) : s === n) ? s = 1 : s = Ee(s), df(Ge(o), s);
      }
      function OP() {
        var o = arguments, s = Ge(o[0]);
        return o.length < 3 ? s : s.replace(o[1], o[2]);
      }
      var PP = Ho(function(o, s, c) {
        return o + (c ? "_" : "") + s.toLowerCase();
      });
      function IP(o, s, c) {
        return c && typeof c != "number" && nn(o, s, c) && (s = c = n), c = c === n ? Ae : c >>> 0, c ? (o = Ge(o), o && (typeof s == "string" || s != null && !Rf(s)) && (s = In(s), !s && Ao(o)) ? Ti(gr(o), 0, c) : o.split(s, c)) : [];
      }
      var TP = Ho(function(o, s, c) {
        return o + (c ? " " : "") + Ff(s);
      });
      function MP(o, s, c) {
        return o = Ge(o), c = c == null ? 0 : eo(Ee(c), 0, o.length), s = In(s), o.slice(c, c + s.length) == s;
      }
      function AP(o, s, c) {
        var h = b.templateSettings;
        c && nn(o, s, c) && (s = n), o = Ge(o), s = Dl({}, s, h, tm);
        var v = Dl({}, s.imports, h.imports, tm), w = Kt(v), E = qc(v, w), I, R, z = 0, B = s.interpolate || Ys, U = "__p += '", Z = Xc(
          (s.escape || Ys).source + "|" + B.source + "|" + (B === xg ? fx : Ys).source + "|" + (s.evaluate || Ys).source + "|$",
          "g"
        ), ie = "//# sourceURL=" + (Xe.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zx + "]") + `
`;
        o.replace(Z, function(ye, De, Ke, Mn, rn, An) {
          return Ke || (Ke = Mn), U += o.slice(z, An).replace(vx, sS), De && (I = !0, U += `' +
__e(` + De + `) +
'`), rn && (R = !0, U += `';
` + rn + `;
__p += '`), Ke && (U += `' +
((__t = (` + Ke + `)) == null ? '' : __t) +
'`), z = An + ye.length, ye;
        }), U += `';
`;
        var ge = Xe.call(s, "variable") && s.variable;
        if (!ge)
          U = `with (obj) {
` + U + `
}
`;
        else if (ux.test(ge))
          throw new ke(u);
        U = (R ? U.replace(un, "") : U).replace(Ia, "$1").replace(Po, "$1;"), U = "function(" + (ge || "obj") + `) {
` + (ge ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (R ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
        var Ie = Gm(function() {
          return Ue(w, ie + "return " + U).apply(n, E);
        });
        if (Ie.source = U, Lf(Ie))
          throw Ie;
        return Ie;
      }
      function DP(o) {
        return Ge(o).toLowerCase();
      }
      function LP(o) {
        return Ge(o).toUpperCase();
      }
      function RP(o, s, c) {
        if (o = Ge(o), o && (c || s === n))
          return ny(o);
        if (!o || !(s = In(s)))
          return o;
        var h = gr(o), v = gr(s), w = ry(h, v), E = iy(h, v) + 1;
        return Ti(h, w, E).join("");
      }
      function NP(o, s, c) {
        if (o = Ge(o), o && (c || s === n))
          return o.slice(0, ay(o) + 1);
        if (!o || !(s = In(s)))
          return o;
        var h = gr(o), v = iy(h, gr(s)) + 1;
        return Ti(h, 0, v).join("");
      }
      function KP(o, s, c) {
        if (o = Ge(o), o && (c || s === n))
          return o.replace(Dc, "");
        if (!o || !(s = In(s)))
          return o;
        var h = gr(o), v = ry(h, gr(s));
        return Ti(h, v).join("");
      }
      function FP(o, s) {
        var c = le, h = Q;
        if (_t(s)) {
          var v = "separator" in s ? s.separator : v;
          c = "length" in s ? Ee(s.length) : c, h = "omission" in s ? In(s.omission) : h;
        }
        o = Ge(o);
        var w = o.length;
        if (Ao(o)) {
          var E = gr(o);
          w = E.length;
        }
        if (c >= w)
          return o;
        var I = c - Do(h);
        if (I < 1)
          return h;
        var R = E ? Ti(E, 0, I).join("") : o.slice(0, I);
        if (v === n)
          return R + h;
        if (E && (I += R.length - I), Rf(v)) {
          if (o.slice(I).search(v)) {
            var z, B = R;
            for (v.global || (v = Xc(v.source, Ge(Sg.exec(v)) + "g")), v.lastIndex = 0; z = v.exec(B); )
              var U = z.index;
            R = R.slice(0, U === n ? I : U);
          }
        } else if (o.indexOf(In(v), I) != I) {
          var Z = R.lastIndexOf(v);
          Z > -1 && (R = R.slice(0, Z));
        }
        return R + h;
      }
      function $P(o) {
        return o = Ge(o), o && Xk.test(o) ? o.replace(Io, pS) : o;
      }
      var HP = Ho(function(o, s, c) {
        return o + (c ? " " : "") + s.toUpperCase();
      }), Ff = qy("toUpperCase");
      function Ym(o, s, c) {
        return o = Ge(o), s = c ? n : s, s === n ? uS(o) ? mS(o) : eS(o) : o.match(s) || [];
      }
      var Gm = Te(function(o, s) {
        try {
          return On(o, n, s);
        } catch (c) {
          return Lf(c) ? c : new ke(c);
        }
      }), zP = Xr(function(o, s) {
        return Gn(s, function(c) {
          c = Pr(c), qr(o, c, Af(o[c], o));
        }), o;
      });
      function BP(o) {
        var s = o == null ? 0 : o.length, c = pe();
        return o = s ? gt(o, function(h) {
          if (typeof h[1] != "function")
            throw new qn(l);
          return [c(h[0]), h[1]];
        }) : [], Te(function(h) {
          for (var v = -1; ++v < s; ) {
            var w = o[v];
            if (On(w[0], this, h))
              return On(w[1], this, h);
          }
        });
      }
      function UP(o) {
        return pC(Xn(o, g));
      }
      function $f(o) {
        return function() {
          return o;
        };
      }
      function jP(o, s) {
        return o == null || o !== o ? s : o;
      }
      var WP = Xy(), YP = Xy(!0);
      function hn(o) {
        return o;
      }
      function Hf(o) {
        return Ey(typeof o == "function" ? o : Xn(o, g));
      }
      function GP(o) {
        return Py(Xn(o, g));
      }
      function qP(o, s) {
        return Iy(o, Xn(s, g));
      }
      var VP = Te(function(o, s) {
        return function(c) {
          return Fa(c, o, s);
        };
      }), XP = Te(function(o, s) {
        return function(c) {
          return Fa(o, c, s);
        };
      });
      function zf(o, s, c) {
        var h = Kt(s), v = pl(s, h);
        c == null && !(_t(s) && (v.length || !h.length)) && (c = s, s = o, o = this, v = pl(s, Kt(s)));
        var w = !(_t(c) && "chain" in c) || !!c.chain, E = Jr(o);
        return Gn(v, function(I) {
          var R = s[I];
          o[I] = R, E && (o.prototype[I] = function() {
            var z = this.__chain__;
            if (w || z) {
              var B = o(this.__wrapped__), U = B.__actions__ = cn(this.__actions__);
              return U.push({ func: R, args: arguments, thisArg: o }), B.__chain__ = z, B;
            }
            return R.apply(o, Si([this.value()], arguments));
          });
        }), o;
      }
      function ZP() {
        return Ht._ === this && (Ht._ = xS), this;
      }
      function Bf() {
      }
      function JP(o) {
        return o = Ee(o), Te(function(s) {
          return Ty(s, o);
        });
      }
      var QP = _f(gt), eI = _f(Zg), tI = _f(Uc);
      function qm(o) {
        return Ef(o) ? jc(Pr(o)) : MC(o);
      }
      function nI(o) {
        return function(s) {
          return o == null ? n : to(o, s);
        };
      }
      var rI = Jy(), iI = Jy(!0);
      function Uf() {
        return [];
      }
      function jf() {
        return !1;
      }
      function oI() {
        return {};
      }
      function aI() {
        return "";
      }
      function sI() {
        return !0;
      }
      function lI(o, s) {
        if (o = Ee(o), o < 1 || o > Ye)
          return [];
        var c = Ae, h = Wt(o, Ae);
        s = pe(s), o -= Ae;
        for (var v = Gc(h, s); ++c < o; )
          s(c);
        return v;
      }
      function uI(o) {
        return Se(o) ? gt(o, Pr) : Tn(o) ? [o] : cn(pm(Ge(o)));
      }
      function cI(o) {
        var s = ++wS;
        return Ge(o) + s;
      }
      var fI = bl(function(o, s) {
        return o + s;
      }, 0), dI = bf("ceil"), hI = bl(function(o, s) {
        return o / s;
      }, 1), pI = bf("floor");
      function gI(o) {
        return o && o.length ? hl(o, hn, of) : n;
      }
      function yI(o, s) {
        return o && o.length ? hl(o, pe(s, 2), of) : n;
      }
      function mI(o) {
        return ey(o, hn);
      }
      function vI(o, s) {
        return ey(o, pe(s, 2));
      }
      function _I(o) {
        return o && o.length ? hl(o, hn, uf) : n;
      }
      function bI(o, s) {
        return o && o.length ? hl(o, pe(s, 2), uf) : n;
      }
      var wI = bl(function(o, s) {
        return o * s;
      }, 1), kI = bf("round"), xI = bl(function(o, s) {
        return o - s;
      }, 0);
      function SI(o) {
        return o && o.length ? Yc(o, hn) : 0;
      }
      function CI(o, s) {
        return o && o.length ? Yc(o, pe(s, 2)) : 0;
      }
      return b.after = G2, b.ary = Cm, b.assign = LO, b.assignIn = $m, b.assignInWith = Dl, b.assignWith = RO, b.at = NO, b.before = Em, b.bind = Af, b.bindAll = zP, b.bindKey = Om, b.castArray = oO, b.chain = km, b.chunk = pE, b.compact = gE, b.concat = yE, b.cond = BP, b.conforms = UP, b.constant = $f, b.countBy = S2, b.create = KO, b.curry = Pm, b.curryRight = Im, b.debounce = Tm, b.defaults = FO, b.defaultsDeep = $O, b.defer = q2, b.delay = V2, b.difference = mE, b.differenceBy = vE, b.differenceWith = _E, b.drop = bE, b.dropRight = wE, b.dropRightWhile = kE, b.dropWhile = xE, b.fill = SE, b.filter = E2, b.flatMap = I2, b.flatMapDeep = T2, b.flatMapDepth = M2, b.flatten = vm, b.flattenDeep = CE, b.flattenDepth = EE, b.flip = X2, b.flow = WP, b.flowRight = YP, b.fromPairs = OE, b.functions = YO, b.functionsIn = GO, b.groupBy = A2, b.initial = IE, b.intersection = TE, b.intersectionBy = ME, b.intersectionWith = AE, b.invert = VO, b.invertBy = XO, b.invokeMap = L2, b.iteratee = Hf, b.keyBy = R2, b.keys = Kt, b.keysIn = dn, b.map = Ol, b.mapKeys = JO, b.mapValues = QO, b.matches = GP, b.matchesProperty = qP, b.memoize = Il, b.merge = eP, b.mergeWith = Hm, b.method = VP, b.methodOf = XP, b.mixin = zf, b.negate = Tl, b.nthArg = JP, b.omit = tP, b.omitBy = nP, b.once = Z2, b.orderBy = N2, b.over = QP, b.overArgs = J2, b.overEvery = eI, b.overSome = tI, b.partial = Df, b.partialRight = Mm, b.partition = K2, b.pick = rP, b.pickBy = zm, b.property = qm, b.propertyOf = nI, b.pull = NE, b.pullAll = bm, b.pullAllBy = KE, b.pullAllWith = FE, b.pullAt = $E, b.range = rI, b.rangeRight = iI, b.rearg = Q2, b.reject = H2, b.remove = HE, b.rest = eO, b.reverse = Tf, b.sampleSize = B2, b.set = oP, b.setWith = aP, b.shuffle = U2, b.slice = zE, b.sortBy = Y2, b.sortedUniq = qE, b.sortedUniqBy = VE, b.split = IP, b.spread = tO, b.tail = XE, b.take = ZE, b.takeRight = JE, b.takeRightWhile = QE, b.takeWhile = e2, b.tap = g2, b.throttle = nO, b.thru = El, b.toArray = Nm, b.toPairs = Bm, b.toPairsIn = Um, b.toPath = uI, b.toPlainObject = Fm, b.transform = sP, b.unary = rO, b.union = t2, b.unionBy = n2, b.unionWith = r2, b.uniq = i2, b.uniqBy = o2, b.uniqWith = a2, b.unset = lP, b.unzip = Mf, b.unzipWith = wm, b.update = uP, b.updateWith = cP, b.values = Uo, b.valuesIn = fP, b.without = s2, b.words = Ym, b.wrap = iO, b.xor = l2, b.xorBy = u2, b.xorWith = c2, b.zip = f2, b.zipObject = d2, b.zipObjectDeep = h2, b.zipWith = p2, b.entries = Bm, b.entriesIn = Um, b.extend = $m, b.extendWith = Dl, zf(b, b), b.add = fI, b.attempt = Gm, b.camelCase = gP, b.capitalize = jm, b.ceil = dI, b.clamp = dP, b.clone = aO, b.cloneDeep = lO, b.cloneDeepWith = uO, b.cloneWith = sO, b.conformsTo = cO, b.deburr = Wm, b.defaultTo = jP, b.divide = hI, b.endsWith = yP, b.eq = mr, b.escape = mP, b.escapeRegExp = vP, b.every = C2, b.find = O2, b.findIndex = ym, b.findKey = HO, b.findLast = P2, b.findLastIndex = mm, b.findLastKey = zO, b.floor = pI, b.forEach = xm, b.forEachRight = Sm, b.forIn = BO, b.forInRight = UO, b.forOwn = jO, b.forOwnRight = WO, b.get = Nf, b.gt = fO, b.gte = dO, b.has = qO, b.hasIn = Kf, b.head = _m, b.identity = hn, b.includes = D2, b.indexOf = PE, b.inRange = hP, b.invoke = ZO, b.isArguments = io, b.isArray = Se, b.isArrayBuffer = hO, b.isArrayLike = fn, b.isArrayLikeObject = xt, b.isBoolean = pO, b.isBuffer = Mi, b.isDate = gO, b.isElement = yO, b.isEmpty = mO, b.isEqual = vO, b.isEqualWith = _O, b.isError = Lf, b.isFinite = bO, b.isFunction = Jr, b.isInteger = Am, b.isLength = Ml, b.isMap = Dm, b.isMatch = wO, b.isMatchWith = kO, b.isNaN = xO, b.isNative = SO, b.isNil = EO, b.isNull = CO, b.isNumber = Lm, b.isObject = _t, b.isObjectLike = kt, b.isPlainObject = ja, b.isRegExp = Rf, b.isSafeInteger = OO, b.isSet = Rm, b.isString = Al, b.isSymbol = Tn, b.isTypedArray = Bo, b.isUndefined = PO, b.isWeakMap = IO, b.isWeakSet = TO, b.join = DE, b.kebabCase = _P, b.last = Jn, b.lastIndexOf = LE, b.lowerCase = bP, b.lowerFirst = wP, b.lt = MO, b.lte = AO, b.max = gI, b.maxBy = yI, b.mean = mI, b.meanBy = vI, b.min = _I, b.minBy = bI, b.stubArray = Uf, b.stubFalse = jf, b.stubObject = oI, b.stubString = aI, b.stubTrue = sI, b.multiply = wI, b.nth = RE, b.noConflict = ZP, b.noop = Bf, b.now = Pl, b.pad = kP, b.padEnd = xP, b.padStart = SP, b.parseInt = CP, b.random = pP, b.reduce = F2, b.reduceRight = $2, b.repeat = EP, b.replace = OP, b.result = iP, b.round = kI, b.runInContext = D, b.sample = z2, b.size = j2, b.snakeCase = PP, b.some = W2, b.sortedIndex = BE, b.sortedIndexBy = UE, b.sortedIndexOf = jE, b.sortedLastIndex = WE, b.sortedLastIndexBy = YE, b.sortedLastIndexOf = GE, b.startCase = TP, b.startsWith = MP, b.subtract = xI, b.sum = SI, b.sumBy = CI, b.template = AP, b.times = lI, b.toFinite = Qr, b.toInteger = Ee, b.toLength = Km, b.toLower = DP, b.toNumber = Qn, b.toSafeInteger = DO, b.toString = Ge, b.toUpper = LP, b.trim = RP, b.trimEnd = NP, b.trimStart = KP, b.truncate = FP, b.unescape = $P, b.uniqueId = cI, b.upperCase = HP, b.upperFirst = Ff, b.each = xm, b.eachRight = Sm, b.first = _m, zf(b, function() {
        var o = {};
        return Er(b, function(s, c) {
          Xe.call(b.prototype, c) || (o[c] = s);
        }), o;
      }(), { chain: !1 }), b.VERSION = r, Gn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        b[o].placeholder = b;
      }), Gn(["drop", "take"], function(o, s) {
        Le.prototype[o] = function(c) {
          c = c === n ? 1 : Tt(Ee(c), 0);
          var h = this.__filtered__ && !s ? new Le(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = Wt(c, h.__takeCount__) : h.__views__.push({
            size: Wt(c, Ae),
            type: o + (h.__dir__ < 0 ? "Right" : "")
          }), h;
        }, Le.prototype[o + "Right"] = function(c) {
          return this.reverse()[o](c).reverse();
        };
      }), Gn(["filter", "map", "takeWhile"], function(o, s) {
        var c = s + 1, h = c == me || c == Me;
        Le.prototype[o] = function(v) {
          var w = this.clone();
          return w.__iteratees__.push({
            iteratee: pe(v, 3),
            type: c
          }), w.__filtered__ = w.__filtered__ || h, w;
        };
      }), Gn(["head", "last"], function(o, s) {
        var c = "take" + (s ? "Right" : "");
        Le.prototype[o] = function() {
          return this[c](1).value()[0];
        };
      }), Gn(["initial", "tail"], function(o, s) {
        var c = "drop" + (s ? "" : "Right");
        Le.prototype[o] = function() {
          return this.__filtered__ ? new Le(this) : this[c](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(hn);
      }, Le.prototype.find = function(o) {
        return this.filter(o).head();
      }, Le.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Le.prototype.invokeMap = Te(function(o, s) {
        return typeof o == "function" ? new Le(this) : this.map(function(c) {
          return Fa(c, o, s);
        });
      }), Le.prototype.reject = function(o) {
        return this.filter(Tl(pe(o)));
      }, Le.prototype.slice = function(o, s) {
        o = Ee(o);
        var c = this;
        return c.__filtered__ && (o > 0 || s < 0) ? new Le(c) : (o < 0 ? c = c.takeRight(-o) : o && (c = c.drop(o)), s !== n && (s = Ee(s), c = s < 0 ? c.dropRight(-s) : c.take(s - o)), c);
      }, Le.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(Ae);
      }, Er(Le.prototype, function(o, s) {
        var c = /^(?:filter|find|map|reject)|While$/.test(s), h = /^(?:head|last)$/.test(s), v = b[h ? "take" + (s == "last" ? "Right" : "") : s], w = h || /^find/.test(s);
        v && (b.prototype[s] = function() {
          var E = this.__wrapped__, I = h ? [1] : arguments, R = E instanceof Le, z = I[0], B = R || Se(E), U = function(De) {
            var Ke = v.apply(b, Si([De], I));
            return h && Z ? Ke[0] : Ke;
          };
          B && c && typeof z == "function" && z.length != 1 && (R = B = !1);
          var Z = this.__chain__, ie = !!this.__actions__.length, ge = w && !Z, Ie = R && !ie;
          if (!w && B) {
            E = Ie ? E : new Le(this);
            var ye = o.apply(E, I);
            return ye.__actions__.push({ func: El, args: [U], thisArg: n }), new Vn(ye, Z);
          }
          return ge && Ie ? o.apply(this, I) : (ye = this.thru(U), ge ? h ? ye.value()[0] : ye.value() : ye);
        });
      }), Gn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var s = Js[o], c = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(o);
        b.prototype[o] = function() {
          var v = arguments;
          if (h && !this.__chain__) {
            var w = this.value();
            return s.apply(Se(w) ? w : [], v);
          }
          return this[c](function(E) {
            return s.apply(Se(E) ? E : [], v);
          });
        };
      }), Er(Le.prototype, function(o, s) {
        var c = b[s];
        if (c) {
          var h = c.name + "";
          Xe.call(Ko, h) || (Ko[h] = []), Ko[h].push({ name: s, func: c });
        }
      }), Ko[_l(n, S).name] = [{
        name: "wrapper",
        func: n
      }], Le.prototype.clone = $S, Le.prototype.reverse = HS, Le.prototype.value = zS, b.prototype.at = y2, b.prototype.chain = m2, b.prototype.commit = v2, b.prototype.next = _2, b.prototype.plant = w2, b.prototype.reverse = k2, b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = x2, b.prototype.first = b.prototype.head, Ma && (b.prototype[Ma] = b2), b;
    }, Lo = vS();
    Xi ? ((Xi.exports = Lo)._ = Lo, $c._ = Lo) : Ht._ = Lo;
  }).call(hs);
})(Wu, Wu.exports);
var Vk = Wu.exports;
const Gb = {
  BEGIN_BOX_TRANSFORM: "Transform/Move Box",
  BEGIN_MOVE_POINT: "Move Point",
  DELETE_REGION: "Delete Region"
}, Dn = (e, t) => X(e, (n) => {
  const r = {
    time: J().toDate(),
    state: { ...e, history: void 0 },
    name: t
  }, i = n.history || [];
  n.history = [r, ...i].slice(0, 9);
}), EX = (e) => (t, n) => {
  const r = t, i = e(t, n);
  if (n.type === "RESTORE_HISTORY") {
    if (t.history.length > 0)
      return X(i.history[0].state, (l) => {
        l.history = i.history.slice(1);
      });
  } else if (r !== i && Object.keys(Gb).includes(n.type)) {
    const a = {
      time: J().toDate(),
      state: Vk.omit(r, "history"),
      name: Gb[n.type] || n.type
    };
    return X(i, (u) => {
      const f = u.history || [];
      u.history = [a, ...f].slice(0, 9);
    });
  }
  return i;
}, OX = (e) => e, qb = (e) => {
  const t = e.expandingWidth || 5e-3, n = e.points.map(({ x: l, y: u, angle: f, width: d }, p) => {
    if (!f) {
      const y = e.points[xu(p + 1, 0, e.points.length - 1)], k = e.points[xu(p - 1, 0, e.points.length - 1)];
      f = Math.atan2(k.x - y.x, k.y - y.y) + Math.PI / 2;
    }
    const g = Math.sin(f) * (d || t) / 2, _ = Math.cos(f) * (d || t) / 2;
    return [
      { x: l + g, y: u + _ },
      { x: l - g, y: u - _ }
    ];
  }), r = n.map(([l]) => l), i = n.map(([l, u]) => u);
  i.reverse();
  const a = r.concat(i).map(({ x: l, y: u }) => [l, u]);
  return {
    ...e,
    type: "polygon",
    open: !1,
    points: a,
    unfinished: void 0,
    candidatePoint: void 0
  };
}, Vb = ({ center: e, scale: t, landmarks: n }) => {
  const r = {};
  for (const [i, { defaultPosition: a }] of Object.entries(n))
    r[i] = {
      x: a[0] * t + e.x,
      y: a[1] * t + e.y
    };
  return r;
}, PX = (e, t) => {
  window.localStorage.setItem(
    `__REACT_IMAGE_ANNOTATE_${e}`,
    JSON.stringify(t)
  );
}, Go = () => Math.random().toString().split(".")[1], IX = (e, t) => {
  var p, g, _;
  if (e.allowedArea && e.selectedTool !== "modify-allowed-area" && ["MOUSE_DOWN", "MOUSE_UP", "MOUSE_MOVE"].includes(t.type) && "x" in t) {
    const y = e.allowedArea;
    t.x = xu(t.x, y.x, y.x + y.w), t.y = xu(t.y, y.y, y.y + y.h);
  }
  if (t.type === "ON_CLS_ADDED" && t.cls) {
    const y = e.regionClsList;
    return (y == null ? void 0 : y.every(
      (x) => typeof x == "string"
    )) ? {
      ...e,
      regionClsList: (y || []).concat(t.cls)
    } : e;
  }
  if (t.type === "MOUSE_MOVE") {
    if (Date.now() - (e.lastMouseMoveCall || 0) < 16) return e;
    e = X(e, (y) => {
      y.lastMouseMoveCall = Date.now();
    });
  }
  t.type.includes("MOUSE") || (e = X(e, (y) => {
    y.lastAction = t;
  }));
  const { currentImageIndex: n, pathToActiveImage: r, activeImage: i } = Vp(e), a = (y) => {
    const k = typeof y == "string" || typeof y == "number" ? y : y.id;
    if (!i) return null;
    const x = (i.regions || []).findIndex(
      (O) => O.id === k
    );
    return x === -1 ? null : x;
  }, l = (y) => {
    if (!i) return null;
    const k = a(y);
    return k === null || !i.regions ? [null, null] : [i.regions[k], k];
  }, u = (y, k) => {
    const [x, O] = l(y) ?? [null, null];
    if (!x || O === null) return e;
    if (k !== null)
      return X(e, (S) => {
        qe(S, [...r, "regions", O], {
          ...x,
          ...k
        });
      });
    {
      const S = i == null ? void 0 : i.regions;
      return X(
        e,
        (M) => qe(
          M,
          [...r, "regions"],
          (S || []).filter((T) => T.id !== x.id)
        )
      );
    }
  }, f = (y) => n === null ? y : X(
    y,
    (k) => {
      qe(
        k,
        [...r, "regions"],
        ((i == null ? void 0 : i.regions) || []).map((x) => ({
          ...x,
          editingLabels: !1
        }))
      );
    }
  ), d = (y) => X(
    e,
    (k) => {
      k.selectedImage = y;
    }
  );
  switch (t.type) {
    case "@@INIT":
      return e;
    case "SELECT_IMAGE":
      return d(t.imageIndex);
    case "SELECT_CLASSIFICATION":
      return X(e, (y) => {
        y.selectedCls = t.cls;
      });
    case "CHANGE_REGION": {
      const y = Vk.cloneDeep(t), k = a(y.region);
      if (k === null) return e;
      const x = (p = i == null ? void 0 : i.regions) == null ? void 0 : p[k];
      if ((x == null ? void 0 : x.cls) !== y.region.cls) {
        e = Dn(e, "Change Region Classification");
        const O = y.region.cls ? (g = e.regionClsList) == null ? void 0 : g.findIndex(
          (S) => typeof S == "string" ? S === y.region.cls : S.id === y.region.cls
        ) : void 0;
        if (O !== void 0 && O !== -1 && (e = X(e, (S) => {
          S.selectedCls = y.region.cls;
        }), O !== -1 && e.regionClsList)) {
          const S = e.regionClsList[O];
          y.region.color = typeof S != "string" ? S.color : co[O % co.length];
        }
      }
      return Au(x == null ? void 0 : x.tags, y.region.tags) || (e = Dn(e, "Change Region Tags")), Au(x == null ? void 0 : x.comment, y.region.comment) || (e = Dn(e, "Change Region Comment")), X(
        e,
        (O) => {
          qe(
            O,
            [...r, "regions", k],
            y.region
          );
        }
      );
    }
    case "CHANGE_IMAGE": {
      if (!i) return e;
      const { delta: y } = t;
      for (const k of Object.keys(y))
        k === "cls" && Dn(e, "Change Image Class"), k === "tags" && Dn(e, "Change Image Tags"), e = X(e, (x) => {
          qe(x, [...r, k], y[k]);
        });
      return e;
    }
    case "SELECT_REGION": {
      const { region: y } = t;
      if (a(t.region) === null) return e;
      const x = [...(i == null ? void 0 : i.regions) || []].map((O) => ({
        ...O,
        highlighted: O.id === y.id,
        editingLabels: O.id === y.id
      }));
      return X(e, (O) => {
        qe(O, [...r, "regions"], x);
      });
    }
    case "BEGIN_MOVE_POINT":
      return e = f(e), X(e, (y) => {
        y.mode = {
          mode: "MOVE_REGION",
          regionId: t.point.id
        };
      });
    case "BEGIN_BOX_TRANSFORM": {
      const { box: y, directions: k } = t;
      return e = f(e), k[0] === 0 && k[1] === 0 ? X(e, (x) => {
        x.mode = { mode: "MOVE_REGION", regionId: y.id };
      }) : X(e, (x) => {
        x.mode = {
          mode: "RESIZE_BOX",
          regionId: y.id,
          freedom: k,
          original: { x: y.x, y: y.y, w: y.w, h: y.h }
        };
      });
    }
    case "BEGIN_MOVE_POLYGON_POINT": {
      const { polygon: y, pointIndex: k } = t;
      return e = f(e), e.mode && e.mode.mode === "DRAW_POLYGON" && k === 0 ? X(
        u(y, {
          points: y.points.slice(0, -1),
          editingLabels: !0,
          open: !1
        }),
        (x) => {
          x.mode = null;
        }
      ) : (e = Dn(e, "Move Polygon Point"), X(e, (x) => {
        x.mode = {
          mode: "MOVE_POLYGON_POINT",
          regionId: y.id,
          pointIndex: k
        };
      }));
    }
    case "BEGIN_MOVE_KEYPOINT": {
      const { region: y, keypointId: k } = t;
      return e = f(e), e = Dn(e, "Move Keypoint"), X(e, (x) => {
        x.mode = {
          mode: "MOVE_KEYPOINT",
          regionId: y.id,
          keypointId: k
        };
      });
    }
    case "ADD_POLYGON_POINT": {
      const { polygon: y, point: k, pointIndex: x } = t, O = a(y);
      if (O === null) return e;
      const S = [...y.points];
      return S.splice(x, 0, k), X(e, (M) => {
        qe(M, [...r, "regions", O], {
          ...y,
          points: S
        });
      });
    }
    case "MOUSE_MOVE": {
      const { x: y, y: k } = t;
      if (!e.mode || !i) return e;
      switch (e.mode.mode) {
        case "MOVE_POLYGON_POINT": {
          const { pointIndex: x, regionId: O } = e.mode, S = a(O);
          return S === null ? e : X(
            e,
            (M) => {
              qe(
                M,
                [
                  ...r,
                  "regions",
                  S,
                  "points",
                  x
                ],
                [y, k]
              );
            }
          );
        }
        case "MOVE_KEYPOINT": {
          const { keypointId: x, regionId: O } = e.mode, [S, M] = l(O) || [null, null];
          return S === null || M === null || S.type !== "keypoints" || typeof S != "object" || !("points" in S) ? e : X(
            e,
            (T) => {
              qe(
                T,
                [
                  ...r,
                  "regions",
                  M,
                  "points",
                  x
                ],
                { ...S.points[x], x: y, y: k }
              );
            }
          );
        }
        case "MOVE_REGION": {
          const { regionId: x } = e.mode;
          if (x === "$$allowed_area") {
            const { allowedArea: { w: S, h: M } = { w: 0, h: 0 } } = e;
            return X(e, (T) => {
              T.allowedArea = {
                x: y - S / 2,
                y: k - M / 2,
                w: S,
                h: M
              };
            });
          }
          const O = a(x);
          return O === null || !i.regions ? e : X(
            e,
            (S) => {
              qe(
                S,
                [...r, "regions", O],
                eT(i.regions[O], y, k)
              );
            }
          );
        }
        case "RESIZE_BOX": {
          const {
            regionId: x,
            freedom: [O, S],
            original: { x: M, y: T, w: L, h: K }
          } = e.mode, N = O === 0 ? M : O === -1 ? Math.min(M + L, y) : M, W = O === 0 ? L : O === -1 ? L + (M - N) : Math.max(0, L + (y - M - L)), ne = S === 0 ? T : S === -1 ? Math.min(T + K, k) : T, oe = S === 0 ? K : S === -1 ? K + (T - ne) : Math.max(0, K + (k - T - K));
          if (W <= 1e-3 && (e = X(e, (V) => {
            var he;
            ((he = V.mode) == null ? void 0 : he.mode) === "RESIZE_BOX" && (V.mode.freedom = [O * -1, S]);
          })), oe <= 1e-3 && (e = X(e, (V) => {
            var he;
            ((he = V.mode) == null ? void 0 : he.mode) === "RESIZE_BOX" && (V.mode.freedom = [O, S * -1]);
          })), x === "$$allowed_area")
            return X(e, (V) => {
              V.allowedArea = {
                x: N,
                w: W,
                y: ne,
                h: oe
              };
            });
          const le = a(x);
          if (le === null || !i.regions) return e;
          const Q = i.regions[le];
          return X(e, (V) => {
            qe(V, [...r, "regions", le], {
              ...Q,
              x: N,
              w: W,
              y: ne,
              h: oe
            });
          });
        }
        case "RESIZE_KEYPOINTS": {
          const { regionId: x, landmarks: O, centerX: S, centerY: M } = e.mode, L = Math.sqrt(
            (S - y) ** 2 + (M - k) ** 2
          ) / 0.15;
          return u(x, {
            points: Vb({
              landmarks: O,
              center: { x: S, y: M },
              scale: L
            })
          });
        }
        case "DRAW_POLYGON": {
          const { regionId: x } = e.mode, [O, S] = l(x) || [null, null];
          if (!O) return X(e, (T) => {
            T.mode = null;
          });
          if (typeof O != "object" || O.type !== "polygon" || S === null)
            return e;
          const { points: M } = O;
          return Array.isArray(M) ? X(
            e,
            (T) => {
              qe(
                T,
                [
                  ...r,
                  "regions",
                  S,
                  "points",
                  M.length - 1
                ],
                [y, k]
              );
            }
          ) : e;
        }
        case "DRAW_LINE": {
          const { regionId: x } = e.mode, [O, S] = l(x) || [null, null];
          return !O || typeof O != "object" || S === null ? X(e, (M) => {
            M.mode = null;
          }) : X(e, (M) => {
            qe(M, [...r, "regions", S], {
              ...O,
              x2: y,
              y2: k
            });
          });
        }
        case "DRAW_EXPANDING_LINE": {
          const { regionId: x } = e.mode, [O, S] = l(x) || [
            null,
            null
          ];
          if (!O || typeof O != "object" || O.type !== "expanding-line" || S === null)
            return e;
          if (!!e.mouseDownAt) {
            const T = O.points.slice(-1)[0], L = Math.sqrt(
              (T.x - y) ** 2 + (T.y - k) ** 2
            );
            return L < 2e-3 && !T.width ? e : X(
              e,
              (N) => {
                qe(
                  N,
                  [...r, "regions", S, "points"],
                  O.points.slice(0, -1).concat([
                    {
                      ...T,
                      width: L * 2,
                      angle: Math.atan2(T.x - y, T.y - k)
                    }
                  ])
                );
              }
            );
          }
          return X(
            e,
            (T) => {
              qe(
                T,
                [...r, "regions", S],
                {
                  ...O,
                  candidatePoint: { x: y, y: k }
                }
              );
            }
          );
        }
        case "SET_EXPANDING_LINE_WIDTH": {
          const { regionId: x } = e.mode, [O, S] = l(x) || [
            null,
            null
          ];
          if (S === null || !O || typeof O != "object" || O.type !== "expanding-line")
            return e;
          const M = O.points.slice(-1)[0];
          return X(
            e,
            (T) => {
              qe(
                T,
                [...r, "regions", S, "expandingWidth"],
                Math.sqrt((M.x - y) ** 2 + (M.y - k) ** 2)
              );
            }
          );
        }
        default:
          return e;
      }
    }
    case "MOUSE_DOWN": {
      if (!i) return e;
      const { x: y, y: k } = t;
      if (e = X(e, (L) => {
        L.mouseDownAt = { x: y, y: k };
      }), e.mode)
        switch (e.mode.mode) {
          case "DRAW_POLYGON": {
            const [L, K] = l(e.mode.regionId) || [
              null,
              null
            ];
            if (K === null || !L || typeof L != "object" || L.type !== "polygon")
              break;
            return X(
              e,
              (N) => {
                qe(
                  N,
                  [...r, "regions", K],
                  { ...L, points: L.points.concat([[y, k]]) }
                );
              }
            );
          }
          case "DRAW_LINE": {
            const [L, K] = l(e.mode.regionId) || [
              null,
              null
            ];
            if (!L || typeof L != "object" || K === null)
              break;
            const N = X(e, (W) => {
              qe(W, [...r, "regions", K], { ...L, x2: y, y2: k });
            });
            return X(N, (W) => {
              W.mode = null;
            });
          }
          case "DRAW_EXPANDING_LINE": {
            const [L, K] = l(
              e.mode.regionId
            ) || [null, null];
            if (K === null || !L || typeof L != "object" || L.type !== "expanding-line")
              break;
            const N = L.points.slice(-1)[0];
            return L.points.length > 1 && Math.sqrt((N.x - y) ** 2 + (N.y - k) ** 2) < 2e-3 ? N.width ? X(e, (W) => {
              qe(
                W,
                [...r, "regions", K],
                qb(L)
              ), W.mode = null;
            }) : X(e, (W) => {
              var ne;
              W.mode = {
                mode: "SET_EXPANDING_LINE_WIDTH",
                regionId: ((ne = e.mode) == null ? void 0 : ne.mode) !== "CREATE_POINT_LINE" ? e.mode.regionId : ""
              };
            }) : X(
              e,
              (W) => {
                qe(
                  W,
                  [...r, "regions", K, "points"],
                  L.points.concat([{ x: y, y: k, angle: null, width: null }])
                );
              }
            );
          }
          case "SET_EXPANDING_LINE_WIDTH": {
            const [L, K] = l(
              e.mode.regionId
            ) || [null, null];
            if (K === null || !L || typeof L != "object" || L.type !== "expanding-line")
              break;
            const { expandingWidth: N } = L;
            return X(e, (W) => {
              qe(
                W,
                [...r, "regions", K],
                qb({
                  ...L,
                  points: L.points.map(
                    (ne) => ne.width ? ne : { ...ne, width: N || null }
                  ),
                  expandingWidth: void 0
                })
              ), W.mode = null;
            });
          }
        }
      let x, O = e.selectedCls, S = "#ff0000";
      console.debug(S);
      const M = O && e.regionClsList ? e.regionClsList.findIndex(
        (L) => typeof L == "string" ? L === O : L.id === O
      ) : -1;
      if (M !== -1 && O && e.regionClsList) {
        const L = e.regionClsList[M];
        S = typeof L != "string" ? L.color : co[M % co.length];
      }
      switch (e.selectedTool) {
        case "create-point": {
          e = Dn(e, "Create Point"), x = {
            // @ts-ignore
            type: "point",
            x: y,
            y: k,
            highlighted: !0,
            editingLabels: !0,
            color: S,
            id: Go(),
            cls: O
          };
          break;
        }
        case "create-box": {
          e = Dn(e, "Create Box"), x = {
            type: "box",
            x: y,
            y: k,
            w: 0,
            h: 0,
            highlighted: !0,
            editingLabels: !1,
            color: S,
            cls: O,
            id: Go()
          }, e = X(e, (L) => {
            L.mode = {
              mode: "RESIZE_BOX",
              editLabelEditorAfter: !0,
              regionId: x.id,
              freedom: [1, 1],
              original: { x: y, y: k, w: x.w, h: x.h },
              isNew: !0
            };
          });
          break;
        }
        case "create-polygon": {
          if (e.mode && e.mode.mode === "DRAW_POLYGON") break;
          e = Dn(e, "Create Polygon"), x = {
            type: "polygon",
            points: [
              [y, k],
              [y, k]
            ],
            open: !0,
            highlighted: !0,
            color: S,
            cls: O,
            id: Go()
          }, e = X(e, (L) => {
            L.mode = {
              mode: "DRAW_POLYGON",
              regionId: x.id
            };
          });
          break;
        }
        case "create-expanding-line": {
          e = Dn(e, "Create Expanding Line"), x = {
            type: "expanding-line",
            unfinished: !0,
            points: [{ x: y, y: k, angle: null, width: null }],
            open: !0,
            highlighted: !0,
            color: S,
            cls: O,
            id: Go()
          }, e = X(e, (L) => {
            L.mode = {
              mode: "DRAW_EXPANDING_LINE",
              regionId: x.id
            };
          });
          break;
        }
        case "create-line": {
          if (e.mode && e.mode.mode === "DRAW_LINE") break;
          e = Dn(e, "Create Line"), x = {
            type: "line",
            x1: y,
            y1: k,
            x2: y,
            y2: k,
            highlighted: !0,
            editingLabels: !1,
            color: S,
            cls: O,
            id: Go()
          }, e = X(e, (L) => {
            L.mode = {
              mode: "DRAW_LINE",
              regionId: x.id
            };
          });
          break;
        }
        case "create-keypoints": {
          if (!e.keypointDefinitions)
            return console.error("No keypoint definitions"), e;
          e = Dn(e, "Create Keypoints");
          const [[L, { landmarks: K }]] = Object.entries(
            e.keypointDefinitions
          );
          x = {
            type: "keypoints",
            keypointsDefinitionId: L,
            points: Vb({
              landmarks: K,
              center: { x: y, y: k },
              scale: 1
            }),
            highlighted: !0,
            editingLabels: !1,
            id: Go()
          }, e = X(e, (N) => {
            N.mode = {
              mode: "RESIZE_KEYPOINTS",
              landmarks: K,
              centerX: y,
              centerY: k,
              regionId: x.id,
              isNew: !0
            };
          });
          break;
        }
      }
      const T = [...cw(e, r).regions || []].map(
        (L) => X(L, (K) => {
          K.editingLabels = !1, K.highlighted = !1;
        })
      ).concat(x ? [x] : []);
      return X(e, (L) => {
        qe(L, [...r, "regions"], T);
      });
    }
    case "MOUSE_UP": {
      const { x: y, y: k } = t, { mouseDownAt: x = { x: y, y: k } } = e;
      if (!e.mode) return e;
      switch (e = X(e, (O) => {
        O.mouseDownAt = void 0;
      }), (_ = e.mode) == null ? void 0 : _.mode) {
        case "RESIZE_BOX":
          return e.mode.isNew && (Math.abs(e.mode.original.x - y) < 2e-3 || Math.abs(e.mode.original.y - k) < 2e-3) ? X(
            u(e.mode.regionId, null),
            (O) => {
              O.mode = null;
            }
          ) : e.mode.editLabelEditorAfter ? {
            ...u(e.mode.regionId, { editingLabels: !0 }),
            mode: null
          } : { ...e, mode: null };
        case "MOVE_REGION":
        case "RESIZE_KEYPOINTS":
        case "MOVE_POLYGON_POINT":
          return { ...e, mode: null };
        case "MOVE_KEYPOINT":
          return { ...e, mode: null };
        case "CREATE_POINT_LINE":
          return e;
        case "DRAW_EXPANDING_LINE": {
          const [O, S] = l(
            e.mode.regionId
          ) || [null, null];
          if (S === null || !O || typeof O != "object" || O.type !== "expanding-line")
            return e;
          let M = O;
          const T = O.points.length !== 0 ? O.points.slice(-1)[0] : x;
          if (Math.sqrt(
            (T.x - y) ** 2 + (T.y - k) ** 2
          ) > 2e-3) {
            const K = [...O.points];
            for (let N = 0; N < K.length - 1; N++)
              K[N].width || (K[N] = {
                ...K[N],
                width: "width" in T ? T.width : 2e-3
              });
            M = X(
              O,
              (N) => {
                N.points = OX(K);
              }
            );
          } else
            return e;
          return X(
            e,
            (K) => {
              qe(
                K,
                [...r, "regions", S],
                M
              );
            }
          );
        }
        default:
          return e;
      }
    }
    case "OPEN_REGION_EDITOR": {
      const y = a(t.region);
      if (y === null || !(i != null && i.regions)) return e;
      const k = X(
        i.regions.map((x) => ({
          ...x,
          highlighted: !1,
          editingLabels: !1
        })),
        (x) => {
          x[y] = {
            ...(i.regions || [])[y],
            highlighted: !0,
            editingLabels: !0
          };
        }
      );
      return X(e, (x) => {
        qe(x, [...r, "regions"], k);
      });
    }
    case "CLOSE_REGION_EDITOR": {
      const y = a(t.region);
      return y === null ? e : X(e, (k) => {
        qe(k, [...r, "regions", y], {
          ...((i == null ? void 0 : i.regions) || [])[y],
          editingLabels: !1
        });
      });
    }
    case "DELETE_REGION":
      return a(t.region) === null ? e : X(
        e,
        (k) => {
          qe(
            k,
            [...r, "regions"],
            ((i == null ? void 0 : i.regions) || []).filter((x) => x.id !== t.region.id)
          );
        }
      );
    case "DELETE_SELECTED_REGION":
      return X(
        e,
        (y) => {
          qe(
            y,
            [...r, "regions"],
            ((i == null ? void 0 : i.regions) || []).filter((k) => !k.highlighted)
          );
        }
      );
    case "HEADER_BUTTON_CLICKED":
      switch (t.buttonName.toLowerCase()) {
        case "prev":
          return n === null || !("images" in e) || !e.images || n === 0 ? e : "images" in e ? d(n - 1) : e;
        case "next":
          return n === null || !("images" in e) || n === e.images.length - 1 ? e : d(+n + 1);
        case "clone": {
          if (n === null || !("images" in e) || n === e.images.length - 1) return e;
          const k = d(+n + 1);
          return X(
            k,
            (x) => {
              qe(
                x,
                ["images", n + 1, "regions"],
                (i == null ? void 0 : i.regions) || []
              );
            }
          );
        }
        case "settings":
          return X(e, (k) => {
            k.settingsOpen = !e.settingsOpen;
          });
        case "help":
          return e;
        case "fullscreen":
          return X(e, (k) => {
            k.fullScreen = !0;
          });
        case "exit fullscreen":
        case "window":
          return X(e, (k) => {
            k.fullScreen = !1;
          });
        case "hotkeys":
          return e;
        case "exit":
        case "done":
          return e;
        default:
          return e;
      }
    case "SELECT_TOOL":
      return t.selectedTool === "show-tags" ? (PX("showTags", !e.showTags), X(e, (y) => {
        y.showTags = !e.showTags;
      })) : t.selectedTool === "show-mask" ? X(e, (y) => {
        y.showMask = !e.showMask;
      }) : (t.selectedTool === "modify-allowed-area" && !e.allowedArea && (e = X(e, (y) => {
        y.allowedArea = { x: 0, y: 0, w: 1, h: 1 };
      })), e = X(e, (y) => {
        y.mode = null;
      }), X(e, (y) => {
        y.selectedTool = t.selectedTool;
      }));
    case "CANCEL": {
      const { mode: y } = e;
      if (y)
        switch (y.mode) {
          case "DRAW_EXPANDING_LINE":
          case "SET_EXPANDING_LINE_WIDTH":
          case "DRAW_POLYGON": {
            const { regionId: x } = y;
            return u(x, null);
          }
          case "MOVE_POLYGON_POINT":
          case "RESIZE_BOX":
          case "MOVE_REGION":
            return X(e, (x) => {
              x.mode = null;
            });
          default:
            return e;
        }
      const k = i == null ? void 0 : i.regions;
      if (k && k.some((x) => x.editingLabels))
        return X(
          e,
          (x) => {
            qe(
              x,
              [...r, "regions"],
              k.map((O) => ({
                ...O,
                editingLabels: !1
              }))
            );
          }
        );
      if (k)
        return X(
          e,
          (x) => {
            qe(
              x,
              [...r, "regions"],
              k.map((O) => ({
                ...O,
                highlighted: !1
              }))
            );
          }
        );
      break;
    }
  }
  return e;
}, TX = (e, t) => {
  try {
    return JSON.parse(window.localStorage[`__REACT_IMAGE_ANNOTATE_${e}`]);
  } catch {
    return t;
  }
}, MX = (e, t) => {
  const { currentImageIndex: n } = Vp(e);
  switch (t.type) {
    case "IMAGE_LOADED":
      return n ? X(e, (r) => {
        const i = n;
        r.images[i] && (r.images[i].pixelSize = {
          w: t.metadata.naturalWidth,
          h: t.metadata.naturalHeight
        });
      }) : e;
  }
  return e;
}, KX = Xb(({
  images: e,
  allowedArea: t,
  selectedImage: n = e && e.length > 0 ? 0 : void 0,
  showPointDistances: r,
  pointDistancePrecision: i,
  showTags: a = TX("showTags", !0),
  selectedCls: l,
  enabledTools: u = [
    "select",
    "create-point",
    "create-box",
    "create-polygon",
    "create-line",
    "create-expanding-line",
    "show-mask"
  ],
  selectedTool: f = "create-box",
  regionTagSingleSelection: d = !1,
  regionTagList: p = [],
  regionClsList: g = [],
  regionAllowedActions: _ = {
    remove: !0,
    lock: !0,
    visibility: !0
  },
  imageTagList: y = [],
  imageClsList: k = [],
  taskDescription: x = "",
  fullImageSegmentationMode: O = !1,
  RegionEditLabel: S,
  onExit: M,
  onNextImage: T,
  onPrevImage: L,
  autoSegmentationOptions: K = { type: "autoseg" },
  hideHeader: N,
  hideHeaderText: W,
  hideNext: ne,
  hidePrev: oe,
  hideClone: le,
  hideSettings: Q,
  hideFullScreen: V,
  hideSave: he,
  allowComments: me,
  customeHeaderItem: ce
}, Me) => {
  typeof n == "string" && (n = (e || []).findIndex(
    (be) => be.name === n
  ), n === -1 && (n = void 0));
  const $e = li(null);
  Zb(Me, () => ({
    clickHeaderButton(be) {
      var de;
      (de = $e.current) == null || de.clickHeaderButton(be);
    }
  }));
  const Ye = qV(MX, IX), ve = {
    showTags: a,
    selectedCls: l,
    allowedArea: t,
    showPointDistances: r,
    pointDistancePrecision: i,
    selectedTool: f,
    fullImageSegmentationMode: O,
    autoSegmentationOptions: K,
    mode: null,
    taskDescription: x,
    showMask: !0,
    labelImages: k.length > 0 || y.length > 0,
    regionClsList: g,
    regionTagList: p,
    regionTagSingleSelection: d,
    imageClsList: k,
    imageTagList: y,
    enabledTools: u,
    history: [],
    allowComments: me,
    regionAllowedActions: {
      remove: (_ == null ? void 0 : _.remove) ?? !0,
      lock: (_ == null ? void 0 : _.lock) ?? !0,
      visibility: (_ == null ? void 0 : _.visibility) ?? !0
    },
    selectedImage: n,
    images: e
  }, [C, Ae] = PI(
    EX(Ye),
    ve
  ), pt = hi((be) => {
    if (be.type === "HEADER_BUTTON_CLICKED") {
      if (["Exit", "Done", "Save", "Complete"].includes(be.buttonName))
        return M(X(C, (de) => {
          de.history.splice(0);
        }));
      if (be.buttonName === "Next" && T)
        return T(X(C, (de) => {
          de.history.splice(0);
        }));
      if (be.buttonName === "Prev" && L)
        return L(X(C, (de) => {
          de.history.splice(0);
        }));
    }
    Ae(be);
  }), P = hi((be) => {
    Ae({
      type: "ON_CLS_ADDED",
      cls: be
    });
  });
  return xo(() => {
    if (n === void 0) return;
    const be = C.images[n];
    Ae({
      type: "SELECT_IMAGE",
      imageIndex: +n,
      image: be
    });
  }, [n, C.images]), e ? /* @__PURE__ */ A(tT, { children: /* @__PURE__ */ A(
    GV,
    {
      ref: $e,
      RegionEditLabel: S,
      alwaysShowNextButton: !!T,
      alwaysShowPrevButton: !!L,
      state: C,
      dispatch: pt,
      onRegionClassAdded: P,
      hideHeader: N,
      hideHeaderText: W,
      hideNext: ne,
      hidePrev: oe,
      hideClone: le,
      hideSettings: Q,
      hideFullScreen: V,
      hideSave: he,
      customeHeaderItem: ce
    }
  ) }) : /* @__PURE__ */ A("div", { children: 'Missing required "images"' });
});
export {
  KX as Annotator,
  KX as default
};

import { jsx as S, jsxs as de, Fragment as Di } from "react/jsx-runtime";
import * as C from "react";
import Hi, { useRef as pe, useMemo as Ae, createContext as Pn, useContext as Nn, forwardRef as Wn, createElement as Zi, useState as Ee, useCallback as ce, useEffect as Ne, useLayoutEffect as zi, Component as ji, Fragment as Sn, memo as _e } from "react";
import { Z as Oe, p as W, m as fe, j as ve, i as Ie, u as ye, s as j, n as be, P as i, a9 as Yi, aa as Ji, ab as Ui, ac as $i, y as $t, c as Xn, x as Nt, T as kn, v as ao, ad as so, t as xe, a0 as dr, d as Qt, l as Ye, a3 as Rn, k as Wt, ae as Qi, G as we, af as pr, H as Je, X as fr, ag as Ln, q as De, K as _t, ah as Dn, a5 as Hn, a8 as Zn, ai as _i, U as qi, W as lo, aj as Ki, w as Ce, ak as ea, _ as ta, a1 as Xt, a6 as na, a2 as oa, $ as ra, F as uo, J as br, al as ia, am as aa, an as sa, ao as la, ap as X, aq as D, ar as gr, as as ua, f as co, h as ca, I as da, L as pa, e as fa } from "./Portal-IhUi94Sd.js";
import { createPortal as ba } from "react-dom";
function po(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function mr(e, t = 166) {
  let n;
  function r(...o) {
    const a = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(a, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function pn(e, t) {
  var n, r, o;
  return /* @__PURE__ */ C.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function ke(e) {
  return Oe(e).defaultView || window;
}
function hr(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ga(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function vr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const a = ga(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${a}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ir(e, t, ...n) {
  return e[t] === void 0 ? null : vr(e, t, ...n);
}
function Tn() {
  return null;
}
Ir.isRequired = vr;
Tn.isRequired = Tn;
const yr = W.env.NODE_ENV === "production" ? Tn : Ir;
function ma(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (o) => {
      const a = typeof t == "function" ? t(o) : t, s = typeof e == "function" ? e({
        ...o,
        ...a
      }) : e, u = fe(o == null ? void 0 : o.className, a == null ? void 0 : a.className, s == null ? void 0 : s.className);
      return {
        ...a,
        ...s,
        ...!!u && {
          className: u
        },
        ...(a == null ? void 0 : a.style) && (s == null ? void 0 : s.style) && {
          style: {
            ...a.style,
            ...s.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (s == null ? void 0 : s.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(s.sx) ? s.sx : [s.sx]]
        }
      };
    };
  const n = t, r = fe(n == null ? void 0 : n.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...!!r && {
      className: r
    },
    ...(n == null ? void 0 : n.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...n.style,
        ...e.style
      }
    },
    ...(n == null ? void 0 : n.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(n.sx) ? n.sx : [n.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const Cr = /* @__PURE__ */ C.createContext({});
W.env.NODE_ENV !== "production" && (Cr.displayName = "ListContext");
function ha(e) {
  return ve("MuiList", e);
}
Ie("MuiList", ["root", "padding", "dense", "subheader"]);
const va = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return be({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, ha, t);
}, Ia = j("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), xr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: a,
    component: s = "ul",
    dense: u = !1,
    disablePadding: l = !1,
    subheader: c,
    ...d
  } = r, p = C.useMemo(() => ({
    dense: u
  }), [u]), f = {
    ...r,
    component: s,
    dense: u,
    disablePadding: l
  }, b = va(f);
  return /* @__PURE__ */ S(Cr.Provider, {
    value: p,
    children: /* @__PURE__ */ de(Ia, {
      as: s,
      className: fe(b.root, a),
      ref: n,
      ownerState: f,
      ...d,
      children: [c, o]
    })
  });
});
W.env.NODE_ENV !== "production" && (xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Ar = Object.fromEntries ? Object.fromEntries : (e) => {
  if (!e || !e[Symbol.iterator])
    throw new Error("Object.fromEntries() requires a single iterable argument");
  const t = {};
  return Object.keys(e).forEach((n) => {
    const [r, o] = e[n];
    t[r] = o;
  }), t;
};
function ze(e) {
  return Object.keys(e);
}
function qe(e, t) {
  if (!e)
    throw new Error(t);
}
function zn(e, t) {
  return t;
}
const jn = (e) => {
  const t = e.length;
  let n = 0, r = "";
  for (; n < t; n++) {
    const o = e[n];
    if (o == null)
      continue;
    let a;
    switch (typeof o) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(o))
          a = jn(o);
        else {
          qe(!zn(o, !1)), W.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
          for (const s in o)
            o[s] && s && (a && (a += " "), a += s);
        }
        break;
      }
      default:
        a = o;
    }
    a && (r && (r += " "), r += a);
  }
  return r;
};
function ya(e, t) {
  var n;
  const r = pe();
  return (!r.current || t.length !== ((n = r.current.prevDeps) === null || n === void 0 ? void 0 : n.length) || r.current.prevDeps.map((o, a) => o === t[a]).indexOf(!1) >= 0) && (r.current = {
    v: e(),
    prevDeps: [...t]
  }), r.current.v;
}
function Ca(e) {
  return e instanceof Object && !("styles" in e) && !("length" in e) && !("__emotion_styles" in e);
}
const { createCssAndCx: xa } = /* @__PURE__ */ (() => {
  function e(n, r, o) {
    const a = [], s = Ui(n, a, o);
    return a.length < 2 ? o : s + r(a);
  }
  function t(n) {
    const { cache: r } = n, o = (...s) => {
      const u = Yi(s, r.registered);
      Ji(r, u, !1);
      const l = `${r.key}-${u.name}`;
      e: {
        const c = s[0];
        if (!Ca(c))
          break e;
        fo.saveClassNameCSSObjectMapping(r, l, c);
      }
      return l;
    };
    return { css: o, cx: (...s) => {
      const u = jn(s), l = fo.fixClassName(r, u, o);
      return e(r.registered, o, l);
    } };
  }
  return { createCssAndCx: t };
})();
function Er(e) {
  const { useCache: t } = e;
  function n() {
    const r = t(), { css: o, cx: a } = ya(() => xa({ cache: r }), [r]);
    return { css: o, cx: a };
  }
  return { useCssAndCx: n };
}
const fo = /* @__PURE__ */ (() => {
  const e = /* @__PURE__ */ new WeakMap();
  return {
    saveClassNameCSSObjectMapping: (t, n, r) => {
      let o = e.get(t);
      o === void 0 && (o = /* @__PURE__ */ new Map(), e.set(t, o)), o.set(n, r);
    },
    fixClassName: /* @__PURE__ */ (() => {
      function t(n) {
        let r = !1;
        return n.map(([o, a]) => {
          if (a === void 0)
            return o;
          let s;
          if (r)
            s = {
              "&&": a
            };
          else {
            s = o;
            for (const u in a)
              if (u.startsWith("@media")) {
                r = !0;
                break;
              }
          }
          return s;
        });
      }
      return (n, r, o) => {
        const a = e.get(n);
        return jn(t(r.split(" ").map((s) => [
          s,
          a == null ? void 0 : a.get(s)
        ])).map((s) => typeof s == "string" ? s : o(s)));
      };
    })()
  };
})();
function je(e) {
  if (!(e instanceof Object) || typeof e == "function")
    return e;
  const t = [];
  for (const n in e) {
    const r = e[n], o = typeof r;
    if (!(o === "string" || o === "number" && !isNaN(r) || o === "boolean" || r === void 0 || r === null))
      return e;
    t.push(`${n}:${o}_${r}`);
  }
  return "xSqLiJdLMd9s" + t.join("|");
}
function Yn(e, t, n) {
  if (!(t instanceof Object))
    return e;
  const r = {};
  return ze(e).forEach((o) => r[o] = n(e[o], t[o])), ze(t).forEach((o) => {
    if (o in e)
      return;
    const a = t[o];
    typeof a == "string" && (r[o] = a);
  }), r;
}
const wr = ({ classes: e, theme: t, muiStyleOverridesParams: n, css: r, cx: o, name: a }) => {
  var s, u;
  e: {
    if (a === "makeStyle no name") {
      a = void 0;
      break e;
    }
    if (n !== void 0 && a === void 0)
      throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')");
  }
  let l;
  try {
    l = a === void 0 ? void 0 : ((u = (s = t.components) === null || s === void 0 ? void 0 : s[
      a
      /*example*/
    ]) === null || u === void 0 ? void 0 : u.styleOverrides) || void 0;
  } catch {
  }
  const c = Ae(() => {
    if (l === void 0)
      return;
    const d = {};
    for (const p in l) {
      const f = l[p];
      f instanceof Object && (d[p] = r(typeof f == "function" ? f({
        theme: t,
        ownerState: n == null ? void 0 : n.ownerState,
        ...n == null ? void 0 : n.props
      }) : f));
    }
    return d;
  }, [
    l,
    je(n == null ? void 0 : n.props),
    je(n == null ? void 0 : n.ownerState),
    r
  ]);
  return e = Ae(() => Yn(e, c, o), [e, c, o]), { classes: e };
};
let Aa = 0;
function Sr(e) {
  const { useTheme: t, cache: n } = e, { useCache: r } = Rr({ cacheProvidedAtInception: n }), { useCssAndCx: o } = Er({ useCache: r });
  function a(u) {
    const { name: l, uniqId: c = `${Aa++}` } = u ?? {}, d = typeof l != "object" ? l : Object.keys(l)[0];
    return function(p) {
      const f = typeof p == "function" ? p : () => p;
      return function(g, h) {
        const m = t();
        let { css: v, cx: y } = o();
        const I = r();
        let x = Ae(() => {
          const A = {}, w = typeof Proxy < "u" && new Proxy({}, {
            get: (T, B) => (typeof B == "symbol" && qe(!1), A[B] = `${I.key}-${c}${d !== void 0 ? `-${d}` : ""}-${B}-ref`)
          }), R = f(m, g, w || {}), E = Ar(ze(R).map((T) => {
            const B = R[T];
            return B.label || (B.label = `${d !== void 0 ? `${d}-` : ""}${T}`), [
              T,
              `${v(B)}${zn(T, T in A) ? ` ${A[T]}` : ""}`
            ];
          }));
          return ze(A).forEach((T) => {
            T in E || (E[T] = A[T]);
          }), E;
        }, [I, v, y, m, je(g)]);
        {
          const A = h == null ? void 0 : h.props.classes;
          x = Ae(() => Yn(x, A, y), [x, je(A), y]);
        }
        {
          const A = wr({
            classes: x,
            css: v,
            cx: y,
            name: d ?? "makeStyle no name",
            muiStyleOverridesParams: h,
            // NOTE: If it's not a Mui Theme the plugin is resilient, it will not crash
            theme: m
          });
          A.classes !== void 0 && (x = A.classes), A.css !== void 0 && (v = A.css), A.cx !== void 0 && (y = A.cx);
        }
        return {
          classes: x,
          theme: m,
          css: v,
          cx: y
        };
      };
    };
  }
  function s() {
    const u = t(), { css: l, cx: c } = o();
    return { theme: u, css: l, cx: c };
  }
  return { makeStyles: a, useStyles: s };
}
const Ea = Pn(void 0), { createUseCache: Rr } = /* @__PURE__ */ (() => {
  function e() {
    return Nn(Ea);
  }
  function t(n) {
    const { cacheProvidedAtInception: r } = n;
    function o() {
      var a;
      const s = $i(), u = e(), l = (a = r ?? u) !== null && a !== void 0 ? a : s;
      if (l === null)
        throw new Error([
          "In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.",
          "MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,",
          "MUI needs an Emotion cache to be provided for SSR to work.",
          "Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/",
          "TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"
        ].join(`
`));
      return l;
    }
    return { useCache: o };
  }
  return { createUseCache: t };
})();
function bo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function wa(e) {
  const { useTheme: t, cache: n } = e, { makeStyles: r } = Sr({ useTheme: t, cache: n });
  function o(a, s, u) {
    const l = typeof a == "string" ? (() => {
      const b = a, g = function({ children: h, ...m }) {
        return Zi(b, m, h);
      };
      return Object.defineProperty(g, "name", {
        value: bo(b)
      }), g;
    })() : a, c = (() => {
      {
        const { name: g } = u ?? {};
        if (g !== void 0)
          return typeof g != "object" ? g : Object.keys(g)[0];
      }
      let b;
      e: {
        const g = l.displayName;
        if (typeof g != "string" || g === "")
          break e;
        b = g;
      }
      e: {
        if (b !== void 0)
          break e;
        const g = l.name;
        if (typeof g != "string" || g === "")
          break e;
        b = g;
      }
      if (b !== void 0)
        return b = b.replace(/\$/g, "usd"), b = b.replace(/\(/g, "_").replace(/\)/g, "_"), b = b.replace(/[^a-zA-Z0-9-_]/g, "_"), b;
    })(), d = r({ ...u, name: c })(typeof s == "function" ? (b, g, h) => mo(s(b, g, h)) : mo(s));
    function p(b) {
      for (const g in b)
        if (g !== "root")
          return !0;
      return !1;
    }
    const f = Wn(function(b, g) {
      const { className: h, classes: m, ...v } = b, { classes: y, cx: I } = d(b, { props: b }), x = I(y.root, h);
      return Tr.set(y, {
        ...y,
        root: x
      }), Hi.createElement(l, { ref: g, className: p(y) ? h : x, ...typeof a == "string" ? {} : { classes: y }, ...v });
    });
    return c !== void 0 && (f.displayName = `${bo(c)}WithStyles`, Object.defineProperty(f, "name", { value: f.displayName })), f;
  }
  return o.getClasses = Sa, { withStyles: o };
}
const Tr = /* @__PURE__ */ new WeakMap(), go = "getClasses should only be used in conjunction with withStyles";
function Sa(e) {
  const t = e.classes;
  if (t === void 0)
    throw new Error(go);
  const n = Tr.get(t);
  if (n === void 0)
    throw new Error(go);
  return n;
}
function mo(e) {
  const t = {}, n = {};
  return Object.keys(e).forEach((r) => (r.startsWith("@media") ? n : t)[r] = e[r]), Object.keys(n).forEach((r) => {
    const o = n[r];
    Object.keys(o).forEach((a) => {
      var s;
      return t[a] = {
        ...(s = t[a]) !== null && s !== void 0 ? s : {},
        [r]: o[a]
      };
    });
  }), t;
}
const Ra = !(typeof document == "object" && typeof (document == null ? void 0 : document.getElementById) == "function") && !(typeof jest < "u") && !(typeof mocha < "u") && !(typeof __vitest_worker__ < "u");
function Gr(e) {
  Fr = 0, Ze.splice(0, Ze.length);
  const { useContext: t, usePlugin: n, cache: r } = e, { useCache: o } = Rr({ cacheProvidedAtInception: r }), { useCssAndCx: a } = Er({ useCache: o });
  return { tss: Bt({
    useContext: t,
    useCache: o,
    useCssAndCx: a,
    usePlugin: n ?? (({ classes: l, cx: c, css: d }) => ({ classes: l, cx: c, css: d })),
    name: void 0,
    doesUseNestedSelectors: !1
  }) };
}
let Fr = 0;
const Ze = [];
function Bt(e) {
  const { useContext: t, useCache: n, useCssAndCx: r, usePlugin: o, name: a, doesUseNestedSelectors: s } = e;
  return {
    withParams: () => Bt({ ...e }),
    withName: (u) => Bt({
      ...e,
      name: typeof u != "object" ? u : Object.keys(u)[0]
    }),
    withNestedSelectors: () => Bt({
      ...e,
      doesUseNestedSelectors: !0
    }),
    create: (u) => {
      const l = `x${Fr++}`;
      if (a !== void 0)
        for (; ; ) {
          const d = Ze.find((p) => p.name === a);
          if (d === void 0)
            break;
          Ze.splice(Ze.indexOf(d), 1);
        }
      const c = typeof u == "function" ? u : () => u;
      return function(p) {
        var f, b, g;
        const { classesOverrides: h, ...m } = p ?? {}, v = t(), { css: y, cx: I } = r(), x = n(), A = () => {
          const E = {}, T = c({
            ...p,
            ...v,
            ...s ? {
              classes: typeof Proxy > "u" ? {} : new Proxy({}, {
                get: (V, F) => {
                  if (typeof F == "symbol" && qe(!1), Ra && a === void 0)
                    throw new Error([
                      "tss-react: In SSR setups, in order to use nested selectors, you must also give a unique name to the useStyle function.",
                      'Solution: Use tss.withName("ComponentName").withNestedSelectors<...>()... to set a name.'
                    ].join(`
`));
                  e: {
                    if (a === void 0)
                      break e;
                    let k = Ze.find((P) => P.name === a && P.idOfUseStyles === l);
                    k === void 0 && (k = { name: a, idOfUseStyles: l, nestedSelectorRuleNames: /* @__PURE__ */ new Set() }, Ze.push(k)), k.nestedSelectorRuleNames.add(F);
                  }
                  e: {
                    if (a === void 0 || !(Ze.find((P) => P.name === a && P.idOfUseStyles !== l && P.nestedSelectorRuleNames.has(F)) !== void 0))
                      break e;
                    throw new Error([
                      `tss-react: There are in your codebase two different useStyles named "${a}" that`,
                      `both use use the nested selector ${F}.
`,
                      `This may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.
`,
                      `Solution: Ensure each useStyles using nested selectors has a unique name.
`,
                      'Use: tss.withName("UniqueName").withNestedSelectors<...>()...'
                    ].join(" "));
                  }
                  return E[F] = `${x.key}-${a !== void 0 ? a : l}-${F}-ref`;
                }
              })
            } : {}
          });
          let B = Ar(ze(T).map((V) => {
            const F = T[V];
            return F.label || (F.label = `${a !== void 0 ? `${a}-` : ""}${V}`), [
              V,
              `${y(F)}${zn(V, V in E) ? ` ${E[V]}` : ""}`
            ];
          }));
          return ze(E).forEach((V) => {
            V in B || (B[V] = E[V]);
          }), B = Yn(B, h, I), B;
        }, w = Ta({
          cache: x,
          cssObjectByRuleNameOrGetCssObjectByRuleName: u,
          classesOverridesRef: je(h),
          paramsAndPluginParamsRef: je(m),
          idOfUseStyles: l,
          context: v,
          getClasses: A
        }), R = o({
          classes: w,
          css: y,
          cx: I,
          idOfUseStyles: l,
          name: a,
          ...v,
          ...m
        });
        return {
          classes: (f = R.classes) !== null && f !== void 0 ? f : w,
          css: (b = R.css) !== null && b !== void 0 ? b : y,
          cx: (g = R.cx) !== null && g !== void 0 ? g : I,
          ...v
        };
      };
    }
  };
}
const Et = /* @__PURE__ */ new WeakMap();
function Ta(e) {
  const { cache: t, cssObjectByRuleNameOrGetCssObjectByRuleName: n, classesOverridesRef: r, paramsAndPluginParamsRef: o, idOfUseStyles: a, context: s, getClasses: u } = e;
  e: {
    const c = Et.get(t);
    if (c === void 0)
      break e;
    const d = c.get(n);
    if (d === void 0)
      break e;
    const p = d.get(r);
    if (p === void 0)
      break e;
    const f = p.get(o);
    if (f === void 0)
      break e;
    const b = f.find(({ context: g }) => {
      if (g === s)
        return !0;
      if (ze(g).length !== ze(s).length)
        return !1;
      for (const h in g)
        if (je(g[h]) !== je(s[h]))
          return !1;
      return !0;
    });
    if (b === void 0)
      break e;
    if ((b == null ? void 0 : b.idOfUseStyles) !== a) {
      f.splice(f.indexOf(b), 1);
      break e;
    }
    return b.result;
  }
  const l = u();
  {
    Et.has(t) || Et.set(t, /* @__PURE__ */ new WeakMap());
    const c = Et.get(t);
    qe(c !== void 0), c.has(n) || c.set(n, /* @__PURE__ */ new Map());
    const d = c.get(n);
    qe(d !== void 0), d.has(r) || (d.size > 200 && d.clear(), d.set(r, /* @__PURE__ */ new Map()));
    const p = d.get(r);
    if (qe(p !== void 0), !p.has(o)) {
      e: {
        const b = typeof o == "string" ? 257 : 5;
        if (p.size < b)
          break e;
        p.clear();
      }
      p.set(o, []);
    }
    let f = p.get(o);
    qe(f !== void 0), f.length > 5 && (f = []), f.push({ idOfUseStyles: a, context: s, result: l });
  }
  return l;
}
function Ga(e) {
  return {
    ...Sr(e),
    ...wa(e)
  };
}
const { tss: Fa } = Gr({
  useContext: () => ({})
});
Fa.create({});
Ga({
  useTheme: $t
});
const { tss: Or } = Gr({
  useContext: function() {
    return { theme: $t() };
  },
  usePlugin: wr
});
Or.create({});
var Oa = {};
/*!
  2D Transformation Matrix v2.7.5
  (c) Epistemex.com 2014-2018
  License: MIT
*/
(function(e) {
  /**
   * 2D transformation matrix object initialized with identity matrix.
   *
   * The matrix can synchronize a canvas 2D context by supplying the context
   * as an argument, or later apply current absolute transform to an
   * existing context.
   *
   * To synchronize a DOM element you can use [`toCSS()`]{@link Matrix#toCSS} or [`toCSS3D()`]{@link Matrix#toCSS3D}.
   * together with for example the `style.transform` property.
   *
   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
   * @param {HTMLElement} [element=null] - DOM Element to synchronize
   * @prop {number} a - scale x
   * @prop {number} b - shear y
   * @prop {number} c - shear x
   * @prop {number} d - scale y
   * @prop {number} e - translate x
   * @prop {number} f - translate y
   * @prop {CanvasRenderingContext2D} [context] - set or get current synchronized 2D context
   * @prop {HTMLElement} [element] - get current synchronized DOM element
   * @prop {boolean} [useCSS3D=false] - is a DOM element is defined for sync., choose whether to use 2D (false) or 3D (true) matrix to sync it.
   * @constructor
   * @license MIT license
   * @copyright Epistemex.com 2014-2018
   */
  function t(n, r) {
    var o = this, a;
    o._t = o.transform, o.a = o.d = 1, o.b = o.c = o.e = o.f = 0, n && (o.context = n).setTransform(1, 0, 0, 1, 0, 0), Object.defineProperty(o, "element", {
      get: function() {
        return a;
      },
      set: function(s) {
        a || (o._px = o._getPX(), o.useCSS3D = !1), a = s, (o._st = a.style)[o._px] = o.toCSS();
      }
    }), r && (o.element = r);
  }
  t.fromTriangles = function(n, r, o) {
    var a = new t(), s = new t(o), u, l, c, d, p, f;
    return Array.isArray(n) ? typeof n[0] == "number" ? (c = n[4], d = n[5], p = r[4], f = r[5], u = [n[0] - c, n[1] - d, n[2] - c, n[3] - d, c, d], l = [r[0] - p, r[1] - f, r[2] - p, r[3] - f, p, f]) : (c = n[2].x, d = n[2].y, p = r[2].x, f = r[2].y, u = [n[0].x - c, n[0].y - d, n[1].x - c, n[1].y - d, c, d], l = [r[0].x - p, r[0].y - f, r[1].x - p, r[1].y - f, p, f]) : (u = [n.px - n.rx, n.py - n.ry, n.qx - n.rx, n.qy - n.ry, n.rx, n.ry], l = [r.px - r.rx, r.py - r.ry, r.qx - r.rx, r.qy - r.ry, r.rx, r.ry]), a.setTransform.apply(a, u), s.setTransform.apply(s, l), s.multiply(a.inverse());
  }, t.fromSVGTransformList = function(n, r, o) {
    for (var a = new t(r, o), s = 0; s < n.length; )
      a.multiply(n[s++].matrix);
    return a;
  }, t.from = function(n, r, o, a, s, u, l, c) {
    var d = new t(l, c), p, f, b;
    if (typeof n == "number")
      d.setTransform(n, r, o, a, s, u);
    else if (typeof n.x == "number")
      b = Math.sqrt(n.x * n.x + n.y * n.y), p = f = 1, a ? p = b : f = b, d.translate(r || 0, o || 0).rotateFromVector(n).scaleU(p).translate(f, 0);
    else {
      if (typeof n.is2D == "boolean" && !n.is2D) throw "Cannot use 3D DOMMatrix.";
      r && (d.context = r), o && (d.element = o), d.multiply(n);
    }
    return d;
  }, t.prototype = {
    _getPX: function() {
      for (var n = ["t", "oT", "msT", "mozT", "webkitT", "khtmlT"], r = 0, o, a = document.createElement("div").style; o = n[r++]; )
        if (typeof a[o + "ransform"] < "u") return o + "ransform";
    },
    /**
     * Concatenates transforms of this matrix onto the given child matrix and
     * returns a new matrix. This instance is used on left side.
     *
     * @param {Matrix|SVGMatrix} cm - child matrix to apply concatenation to
     * @returns {Matrix} - new Matrix instance
     */
    concat: function(n) {
      return this.clone().multiply(n);
    },
    /**
     * Flips the horizontal values.
     * @returns {Matrix}
     */
    flipX: function() {
      return this._t(-1, 0, 0, 1, 0, 0);
    },
    /**
     * Flips the vertical values.
     * @returns {Matrix}
     */
    flipY: function() {
      return this._t(1, 0, 0, -1, 0, 0);
    },
    /**
     * Reflects incoming (velocity) vector on the normal which will be the
     * current transformed x axis. Call when a trigger condition is met.
     *
     * @param {number} x - vector end point for x (start = 0)
     * @param {number} y - vector end point for y (start = 0)
     * @returns {{x: number, y: number}}
     */
    reflectVector: function(n, r) {
      var o = this.applyToPoint(0, 1), a = (o.x * n + o.y * r) * 2;
      return n -= a * o.x, r -= a * o.y, { x: n, y: r };
    },
    /**
     * Short-hand to reset current matrix to an identity matrix.
     * @returns {Matrix}
     */
    reset: function() {
      return this.setTransform(1, 0, 0, 1, 0, 0);
    },
    /**
     * Rotates current matrix by angle (accumulative).
     * @param {number} angle - angle in radians
     * @returns {Matrix}
     */
    rotate: function(n) {
      var r = Math.cos(n), o = Math.sin(n);
      return this._t(r, o, -o, r, 0, 0);
    },
    /**
     * Converts a vector given as `x` and `y` to angle, and
     * rotates (accumulative). x can instead contain an object with
     * properties x and y and if so, y parameter will be ignored.
     * @param {number|*} x
     * @param {number} [y]
     * @returns {Matrix}
     */
    rotateFromVector: function(n, r) {
      return this.rotate(typeof n == "number" ? Math.atan2(r, n) : Math.atan2(n.y, n.x));
    },
    /**
     * Helper method to make a rotation based on an angle in degrees.
     * @param {number} angle - angle in degrees
     * @returns {Matrix}
     */
    rotateDeg: function(n) {
      return this.rotate(n * Math.PI / 180);
    },
    /**
     * Scales current matrix uniformly and accumulative.
     * @param {number} f - scale factor for both x and y (1 does nothing)
     * @returns {Matrix}
     */
    scaleU: function(n) {
      return this._t(n, 0, 0, n, 0, 0);
    },
    /**
     * Scales current matrix accumulative.
     * @param {number} sx - scale factor x (1 does nothing)
     * @param {number} sy - scale factor y (1 does nothing)
     * @returns {Matrix}
     */
    scale: function(n, r) {
      return this._t(n, 0, 0, r, 0, 0);
    },
    /**
     * Scales current matrix on x axis accumulative.
     * @param {number} sx - scale factor x (1 does nothing)
     * @returns {Matrix}
     */
    scaleX: function(n) {
      return this._t(n, 0, 0, 1, 0, 0);
    },
    /**
     * Scales current matrix on y axis accumulative.
     * @param {number} sy - scale factor y (1 does nothing)
     * @returns {Matrix}
     */
    scaleY: function(n) {
      return this._t(1, 0, 0, n, 0, 0);
    },
    /**
     * Converts a vector given as `x` and `y` to normalized scale.
     * @param x
     * @param y
     * @returns {Matrix}
     */
    scaleFromVector: function(n, r) {
      return this.scaleU(Math.sqrt(n * n + r * r));
    },
    /**
     * Apply shear to the current matrix accumulative.
     * @param {number} sx - amount of shear for x
     * @param {number} sy - amount of shear for y
     * @returns {Matrix}
     */
    shear: function(n, r) {
      return this._t(1, r, n, 1, 0, 0);
    },
    /**
     * Apply shear for x to the current matrix accumulative.
     * @param {number} sx - amount of shear for x
     * @returns {Matrix}
     */
    shearX: function(n) {
      return this._t(1, 0, n, 1, 0, 0);
    },
    /**
     * Apply shear for y to the current matrix accumulative.
     * @param {number} sy - amount of shear for y
     * @returns {Matrix}
     */
    shearY: function(n) {
      return this._t(1, n, 0, 1, 0, 0);
    },
    /**
     * Apply skew to the current matrix accumulative. Angles in radians.
     * Also see [`skewDeg()`]{@link Matrix#skewDeg}.
     * @param {number} ax - angle of skew for x
     * @param {number} ay - angle of skew for y
     * @returns {Matrix}
     */
    skew: function(n, r) {
      return this.shear(Math.tan(n), Math.tan(r));
    },
    /**
     * Apply skew to the current matrix accumulative. Angles in degrees.
     * Also see [`skew()`]{@link Matrix#skew}.
     * @param {number} ax - angle of skew for x
     * @param {number} ay - angle of skew for y
     * @returns {Matrix}
     */
    skewDeg: function(n, r) {
      return this.shear(Math.tan(n / 180 * Math.PI), Math.tan(r / 180 * Math.PI));
    },
    /**
     * Apply skew for x to the current matrix accumulative. Angles in radians.
     * Also see [`skewDeg()`]{@link Matrix#skewDeg}.
     * @param {number} ax - angle of skew for x
     * @returns {Matrix}
     */
    skewX: function(n) {
      return this.shearX(Math.tan(n));
    },
    /**
     * Apply skew for y to the current matrix accumulative. Angles in radians.
     * Also see [`skewDeg()`]{@link Matrix#skewDeg}.
     * @param {number} ay - angle of skew for y
     * @returns {Matrix}
     */
    skewY: function(n) {
      return this.shearY(Math.tan(n));
    },
    /**
     * Set current matrix to new absolute matrix.
     * @param {number} a - scale x
     * @param {number} b - shear y
     * @param {number} c - shear x
     * @param {number} d - scale y
     * @param {number} e - translate x
     * @param {number} f - translate y
     * @returns {Matrix}
     */
    setTransform: function(n, r, o, a, s, u) {
      var l = this;
      return l.a = n, l.b = r, l.c = o, l.d = a, l.e = s, l.f = u, l._x();
    },
    /**
     * Translate current matrix accumulative.
     * @param {number} tx - translation for x
     * @param {number} ty - translation for y
     * @returns {Matrix}
     */
    translate: function(n, r) {
      return this._t(1, 0, 0, 1, n, r);
    },
    /**
     * Translate current matrix on x axis accumulative.
     * @param {number} tx - translation for x
     * @returns {Matrix}
     */
    translateX: function(n) {
      return this._t(1, 0, 0, 1, n, 0);
    },
    /**
     * Translate current matrix on y axis accumulative.
     * @param {number} ty - translation for y
     * @returns {Matrix}
     */
    translateY: function(n) {
      return this._t(1, 0, 0, 1, 0, n);
    },
    /**
     * Multiplies current matrix with new matrix values. Also see [`multiply()`]{@link Matrix#multiply}.
     *
     * @param {number} a2 - scale x
     * @param {number} b2 - skew y
     * @param {number} c2 - skew x
     * @param {number} d2 - scale y
     * @param {number} e2 - translate x
     * @param {number} f2 - translate y
     * @returns {Matrix}
     */
    transform: function(n, r, o, a, s, u) {
      var l = this, c = l.a, d = l.b, p = l.c, f = l.d, b = l.e, g = l.f;
      return l.a = c * n + p * r, l.b = d * n + f * r, l.c = c * o + p * a, l.d = d * o + f * a, l.e = c * s + p * u + b, l.f = d * s + f * u + g, l._x();
    },
    /**
     * Multiplies current matrix with source matrix.
     * @param {Matrix|DOMMatrix|SVGMatrix} m - source matrix to multiply with.
     * @returns {Matrix}
     */
    multiply: function(n) {
      return this._t(n.a, n.b, n.c, n.d, n.e, n.f);
    },
    /**
     * Divide this matrix on input matrix which must be invertible.
     * @param {Matrix} m - matrix to divide on (divisor)
     * @throws Exception if input matrix is not invertible
     * @returns {Matrix}
     */
    divide: function(n) {
      return this.multiply(n.inverse());
    },
    /**
     * Divide current matrix on scalar value != 0.
     * @param {number} d - divisor
     * @throws Exception if divisor is zero
     * @returns {Matrix}
     */
    divideScalar: function(n) {
      var r = this;
      if (!n) throw "Division on zero";
      return r.a /= n, r.b /= n, r.c /= n, r.d /= n, r.e /= n, r.f /= n, r._x();
    },
    /**
     * Get an inverse matrix of current matrix. The method returns a new
     * matrix with values you need to use to get to an identity matrix.
     * Context from parent matrix is not applied to the returned matrix.
     *
     * @param {boolean} [cloneContext=false] - clone current context to resulting matrix
     * @param {boolean} [cloneDOM=false] - clone current DOM element to resulting matrix
     * @throws Exception is input matrix is not invertible
     * @returns {Matrix} - new Matrix instance
     */
    inverse: function(n, r) {
      var o = this, a = new t(n ? o.context : null, r ? o.element : null), s = o.determinant();
      if (!s) throw "Matrix not invertible.";
      return a.a = o.d / s, a.b = -o.b / s, a.c = -o.c / s, a.d = o.a / s, a.e = (o.c * o.f - o.d * o.e) / s, a.f = -(o.a * o.f - o.b * o.e) / s, a;
    },
    /**
     * Interpolate this matrix with another and produce a new matrix.
     * `t` is a value in the range [0.0, 1.0] where 0 is this instance and
     * 1 is equal to the second matrix. The `t` value is not clamped.
     *
     * Context from parent matrix is not applied to the returned matrix.
     *
     * Note: this interpolation is naive. For animation containing rotation,
     * shear or skew use the [`interpolateAnim()`]{@link Matrix#interpolateAnim} method instead
     * to avoid unintended flipping.
     *
     * @param {Matrix|SVGMatrix} m2 - the matrix to interpolate with.
     * @param {number} t - interpolation [0.0, 1.0]
     * @param {CanvasRenderingContext2D} [context] - optional context to affect
     * @param {HTMLElement} [dom] - optional DOM element to use for the matrix
     * @returns {Matrix} - new Matrix instance with the interpolated result
     */
    interpolate: function(n, r, o, a) {
      var s = this, u = new t(o, a);
      return u.a = s.a + (n.a - s.a) * r, u.b = s.b + (n.b - s.b) * r, u.c = s.c + (n.c - s.c) * r, u.d = s.d + (n.d - s.d) * r, u.e = s.e + (n.e - s.e) * r, u.f = s.f + (n.f - s.f) * r, u._x();
    },
    /**
     * Interpolate this matrix with another and produce a new matrix.
     * `t` is a value in the range [0.0, 1.0] where 0 is this instance and
     * 1 is equal to the second matrix. The `t` value is not constrained.
     *
     * Context from parent matrix is not applied to the returned matrix.
     *
     * To obtain easing `t` can be preprocessed using easing-functions
     * before being passed to this method.
     *
     * Note: this interpolation method uses decomposition which makes
     * it suitable for animations (in particular where rotation takes
     * places).
     *
     * @param {Matrix} m2 - the matrix to interpolate with.
     * @param {number} t - interpolation [0.0, 1.0]
     * @param {CanvasRenderingContext2D} [context] - optional context to affect
     * @param {HTMLElement} [dom] - optional DOM element to use for the matrix
     * @returns {Matrix} - new Matrix instance with the interpolated result
     */
    interpolateAnim: function(n, r, o, a) {
      var s = new t(o, a), u = this.decompose(), l = n.decompose(), c = u.translate, d = l.translate, p = u.scale;
      return s.translate(c.x + (d.x - c.x) * r, c.y + (d.y - c.y) * r), s.rotate(u.rotation + (l.rotation - u.rotation) * r), s.scale(p.x + (l.scale.x - p.x) * r, p.y + (l.scale.y - p.y) * r), s._x();
    },
    /**
     * Decompose the current matrix into simple transforms using either
     * QR (default) or LU decomposition.
     *
     * @param {boolean} [useLU=false] - set to true to use LU rather than QR decomposition
     * @returns {*} - an object containing current decomposed values (translate, rotation, scale, skew)
     * @see {@link https://en.wikipedia.org/wiki/QR_decomposition|More on QR decomposition}
     * @see {@link https://en.wikipedia.org/wiki/LU_decomposition|More on LU decomposition}
     */
    decompose: function(n) {
      var r = this, o = r.a, a = r.b, s = r.c, u = r.d, l = Math.acos, c = Math.atan, d = Math.sqrt, p = Math.PI, f = { x: r.e, y: r.f }, b = 0, g = { x: 1, y: 1 }, h = { x: 0, y: 0 }, m = o * u - a * s, v, y;
      return n ? o ? (h = { x: c(s / o), y: c(a / o) }, g = { x: o, y: m / o }) : a ? (b = p * 0.5, g = { x: a, y: m / a }, h.x = c(u / a)) : (g = { x: s, y: u }, h.x = p * 0.25) : o || a ? (v = d(o * o + a * a), b = a > 0 ? l(o / v) : -l(o / v), g = { x: v, y: m / v }, h.x = c((o * s + a * u) / (v * v))) : s || u ? (y = d(s * s + u * u), b = p * 0.5 - (u > 0 ? l(-s / y) : -l(s / y)), g = { x: m / y, y }, h.y = c((o * s + a * u) / (y * y))) : g = { x: 0, y: 0 }, {
        translate: f,
        rotation: b,
        scale: g,
        skew: h
      };
    },
    /**
     * Returns the determinant of the current matrix.
     * @returns {number}
     */
    determinant: function() {
      return this.a * this.d - this.b * this.c;
    },
    /**
     * Apply current matrix to `x` and `y` of a point.
     * Returns a point object.
     *
     * @param {number} x - value for x
     * @param {number} y - value for y
     * @returns {{x: number, y: number}} A new transformed point object
     */
    applyToPoint: function(n, r) {
      var o = this;
      return {
        x: n * o.a + r * o.c + o.e,
        y: n * o.b + r * o.d + o.f
      };
    },
    /**
     * Apply current matrix to array with point objects or point pairs.
     * Returns a new array with points in the same format as the input array.
     *
     * A point object is an object literal:
     *
     *     {x: x, y: y}
     *
     * so an array would contain either:
     *
     *     [{x: x1, y: y1}, {x: x2, y: y2}, ... {x: xn, y: yn}]
     *
     * or
     *
     *     [x1, y1, x2, y2, ... xn, yn]
     *
     * @param {Array} points - array with point objects or pairs
     * @returns {Array} A new array with transformed points
     */
    applyToArray: function(n) {
      var r = 0, o, a, s = [];
      if (typeof n[0] == "number")
        for (a = n.length; r < a; )
          o = this.applyToPoint(n[r++], n[r++]), s.push(o.x, o.y);
      else
        for (; o = n[r++]; )
          s.push(this.applyToPoint(o.x, o.y));
      return s;
    },
    /**
     * Apply current matrix to a typed array with point pairs. Although
     * the input array may be an ordinary array, this method is intended
     * for more performant use where typed arrays are used. The returned
     * array is regardless always returned as a `Float32Array`.
     *
     * @param {*} points - (typed) array with point pairs [x1, y1, ..., xn, yn]
     * @param {boolean} [use64=false] - use Float64Array instead of Float32Array
     * @returns {*} A new typed array with transformed points
     */
    applyToTypedArray: function(n, r) {
      for (var o = 0, a, s = n.length, u = r ? new Float64Array(s) : new Float32Array(s); o < s; )
        a = this.applyToPoint(n[o], n[o + 1]), u[o++] = a.x, u[o++] = a.y;
      return u;
    },
    /**
     * Apply to any canvas 2D context object. This does not affect the
     * context that optionally was referenced in constructor unless it is
     * the same context.
     *
     * @param {CanvasRenderingContext2D} context - target context
     * @returns {Matrix}
     */
    applyToContext: function(n) {
      var r = this;
      return n.setTransform(r.a, r.b, r.c, r.d, r.e, r.f), r;
    },
    /**
     * Apply to any DOM element. This does not affect the DOM element
     * that optionally was referenced in constructor unless it is
     * the same element.
     *
     * The method will auto-detect the correct browser prefix if any.
     *
     * @param {HTMLElement} element - target DOM element
     * @param {boolean} [use3D=false] - use 3D transformation matrix instead of 2D
     * @returns {Matrix}
     */
    applyToElement: function(n, r) {
      var o = this;
      return o._px || (o._px = o._getPX()), n.style[o._px] = r ? o.toCSS3D() : o.toCSS(), o;
    },
    /**
     * Instead of creating a new instance of a Matrix, DOMMatrix or SVGMatrix
     * the current settings of this instance can be applied to an external
     * object of a different (or same) type. You can also pass in an
     * empty literal object.
     *
     * Note that the properties a-f will be set regardless of if they
     * already exist or not.
     *
     * @param {*} obj - target object.
     * @returns {Matrix}
     */
    applyToObject: function(n) {
      var r = this;
      return n.a = r.a, n.b = r.b, n.c = r.c, n.d = r.d, n.e = r.e, n.f = r.f, r;
    },
    /**
     * Returns true if matrix is an identity matrix (no transforms applied).
     * @returns {boolean}
     */
    isIdentity: function() {
      var n = this;
      return n.a === 1 && !n.b && !n.c && n.d === 1 && !n.e && !n.f;
    },
    /**
     * Returns true if matrix is invertible
     * @returns {boolean}
     */
    isInvertible: function() {
      return !this._q(this.determinant(), 0);
    },
    /**
     * The method is intended for situations where scale is accumulated
     * via multiplications, to detect situations where scale becomes
     * "trapped" with a value of zero. And in which case scale must be
     * set explicitly to a non-zero value.
     *
     * @returns {boolean}
     */
    isValid: function() {
      return !(this.a * this.d);
    },
    /**
     * Compares current matrix with another matrix. Returns true if equal
     * (within epsilon tolerance).
     * @param {Matrix|SVGMatrix} m - matrix to compare this matrix with
     * @returns {boolean}
     */
    isEqual: function(n) {
      var r = this, o = r._q;
      return o(r.a, n.a) && o(r.b, n.b) && o(r.c, n.c) && o(r.d, n.d) && o(r.e, n.e) && o(r.f, n.f);
    },
    /**
     * Clones current instance and returning a new matrix.
     * @param {boolean} [noContext=false] don't clone context reference if true
     * @returns {Matrix} - a new Matrix instance with identical transformations as this instance
     */
    clone: function(n) {
      return new t(n ? null : this.context).multiply(this);
    },
    /**
     * Returns an array with current matrix values.
     * @returns {Array}
     */
    toArray: function() {
      var n = this;
      return [n.a, n.b, n.c, n.d, n.e, n.f];
    },
    /**
     * Returns a binary 32-bit floating point typed array.
     * @returns {*}
     */
    toTypedArray: function() {
      var n = this;
      return new Float32Array([n.a, n.b, n.c, n.d, n.e, n.f]);
    },
    /**
     * Generates a string that can be used with CSS `transform`.
     * @example
     *     element.style.transform = m.toCSS();
     * @returns {string}
     */
    toCSS: function() {
      return "matrix(" + this.toArray() + ")";
    },
    /**
     * Generates a `matrix3d()` string that can be used with CSS `transform`.
     * Although the matrix is for 2D use you may see performance benefits
     * on some devices using a 3D CSS transform instead of a 2D.
     * @example
     *     element.style.transform = m.toCSS3D();
     * @returns {string}
     */
    toCSS3D: function() {
      var n = this, r = ",0,0,";
      return "matrix3d(" + n.a + "," + n.b + r + n.c + "," + n.d + r + r + ",1,0," + n.e + "," + n.f + ",0,1)";
    },
    /**
     * Returns a JSON compatible string of current matrix.
     * @returns {string}
     */
    toJSON: function() {
      var n = this;
      return '{"a":' + n.a + ',"b":' + n.b + ',"c":' + n.c + ',"d":' + n.d + ',"e":' + n.e + ',"f":' + n.f + "}";
    },
    /**
     * Returns a string with current matrix as comma-separated list.
     * @param {number} [fixLen=4] - truncate decimal values to number of digits
     * @returns {string}
     */
    toString: function(n) {
      var r = this;
      return n = n || 4, "a=" + r.a.toFixed(n) + " b=" + r.b.toFixed(n) + " c=" + r.c.toFixed(n) + " d=" + r.d.toFixed(n) + " e=" + r.e.toFixed(n) + " f=" + r.f.toFixed(n);
    },
    /**
     * Returns a string with current matrix as comma-separated values
     * string with line-end (CR+LF).
     * @returns {string}
     */
    toCSV: function() {
      return this.toArray().join() + `\r
`;
    },
    /**
     * Convert current matrix into a `DOMMatrix`. If `DOMMatrix` is not
     * supported, a `null` is returned.
     *
     * @returns {DOMMatrix}
     * @see {@link https://drafts.fxtf.org/geometry/#dommatrix|MDN / SVGMatrix}
     */
    toDOMMatrix: function() {
      var n = null;
      return "DOMMatrix" in window && (n = new DOMMatrix(), n.a = this.a, n.b = this.b, n.c = this.c, n.d = this.d, n.e = this.e, n.f = this.f), n;
    },
    /**
     * Convert current matrix into a `SVGMatrix`. If `SVGMatrix` is not
     * supported, a `null` is returned.
     *
     * @returns {SVGMatrix}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix|MDN / SVGMatrix}
     */
    toSVGMatrix: function() {
      var n = this, r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), o = null;
      return r && (o = r.createSVGMatrix(), o.a = n.a, o.b = n.b, o.c = n.c, o.d = n.d, o.e = n.e, o.f = n.f), o;
    },
    /**
     * Compares floating point values with some tolerance (epsilon)
     * @param {number} f1 - float 1
     * @param {number} f2 - float 2
     * @returns {boolean}
     * @private
     */
    _q: function(n, r) {
      return Math.abs(n - r) < 1e-14;
    },
    /**
     * Apply current absolute matrix to context if defined, to sync it.
     * Apply current absolute matrix to element if defined, to sync it.
     * @returns {Matrix}
     * @private
     */
    _x: function() {
      var n = this;
      return n.context && n.context.setTransform(n.a, n.b, n.c, n.d, n.e, n.f), n._st && (n._st[n._px] = n.useCSS3D ? n.toCSS3D() : n.toCSS()), n;
    }
  }, e.Matrix = t;
})(Oa);
var Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Pe.apply(this, arguments);
};
function Br(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ba(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Vt = "right-scroll-bar-position", Mt = "width-before-scroll-bar", Va = "with-scroll-bars-hidden", Ma = "--removed-body-scroll-bar-size";
function fn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Pa(e, t) {
  var n = Ee(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Na = typeof window < "u" ? C.useLayoutEffect : C.useEffect, ho = /* @__PURE__ */ new WeakMap();
function Wa(e, t) {
  var n = Pa(null, function(r) {
    return e.forEach(function(o) {
      return fn(o, r);
    });
  });
  return Na(function() {
    var r = ho.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(u) {
        a.has(u) || fn(u, null);
      }), a.forEach(function(u) {
        o.has(u) || fn(u, s);
      });
    }
    ho.set(n, e);
  }, [e]), n;
}
function Xa(e) {
  return e;
}
function ka(e, t) {
  t === void 0 && (t = Xa);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(u) {
          return u !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(u) {
          return a(u);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var u = n;
        n = [], u.forEach(a), s = n;
      }
      var l = function() {
        var d = s;
        s = [], d.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          s.push(d), c();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function La(e) {
  e === void 0 && (e = {});
  var t = ka(null);
  return t.options = Pe({ async: !0, ssr: !1 }, e), t;
}
var Vr = function(e) {
  var t = e.sideCar, n = Br(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Pe({}, n));
};
Vr.isSideCarExport = !0;
function Da(e, t) {
  return e.useMedium(t), Vr;
}
var Mr = La(), bn = function() {
}, qt = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: bn,
    onWheelCapture: bn,
    onTouchMoveCapture: bn
  }), o = r[0], a = r[1], s = e.forwardProps, u = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, p = e.shards, f = e.sideCar, b = e.noIsolation, g = e.inert, h = e.allowPinchZoom, m = e.as, v = m === void 0 ? "div" : m, y = e.gapMode, I = Br(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, A = Wa([n, t]), w = Pe(Pe({}, I), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement(x, { sideCar: Mr, removeScrollBar: c, shards: p, noIsolation: b, inert: g, setCallbacks: a, allowPinchZoom: !!h, lockRef: n, gapMode: y }),
    s ? C.cloneElement(C.Children.only(u), Pe(Pe({}, w), { ref: A })) : C.createElement(v, Pe({}, w, { className: l, ref: A }), u)
  );
});
qt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qt.classNames = {
  fullWidth: Mt,
  zeroRight: Vt
};
var Ha = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Za() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ha();
  return t && e.setAttribute("nonce", t), e;
}
function za(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ja(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ya = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Za()) && (za(t, n), ja(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ja = function() {
  var e = Ya();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Pr = function() {
  var e = Ja(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ua = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, gn = function(e) {
  return parseInt(e || "", 10) || 0;
}, $a = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [gn(n), gn(r), gn(o)];
}, Qa = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ua;
  var t = $a(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _a = Pr(), st = "data-scroll-locked", qa = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, u = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Va, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(u, "px ").concat(r, `;
  }
  body[`).concat(st, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(u, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vt, ` {
    right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Mt, ` {
    margin-right: `).concat(u, "px ").concat(r, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(st, `] {
    `).concat(Ma, ": ").concat(u, `px;
  }
`);
}, vo = function() {
  var e = parseInt(document.body.getAttribute(st) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ka = function() {
  C.useEffect(function() {
    return document.body.setAttribute(st, (vo() + 1).toString()), function() {
      var e = vo() - 1;
      e <= 0 ? document.body.removeAttribute(st) : document.body.setAttribute(st, e.toString());
    };
  }, []);
}, es = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ka();
  var a = C.useMemo(function() {
    return Qa(o);
  }, [o]);
  return C.createElement(_a, { styles: qa(a, !t, o, n ? "" : "!important") });
}, Gn = !1;
if (typeof window < "u")
  try {
    var wt = Object.defineProperty({}, "passive", {
      get: function() {
        return Gn = !0, !0;
      }
    });
    window.addEventListener("test", wt, wt), window.removeEventListener("test", wt, wt);
  } catch {
    Gn = !1;
  }
var rt = Gn ? { passive: !1 } : !1, ts = function(e) {
  return e.tagName === "TEXTAREA";
}, Nr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ts(e) && n[t] === "visible")
  );
}, ns = function(e) {
  return Nr(e, "overflowY");
}, os = function(e) {
  return Nr(e, "overflowX");
}, Io = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Wr(e, r);
    if (o) {
      var a = Xr(e, r), s = a[1], u = a[2];
      if (s > u)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, rs = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, is = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wr = function(e, t) {
  return e === "v" ? ns(t) : os(t);
}, Xr = function(e, t) {
  return e === "v" ? rs(t) : is(t);
}, as = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ss = function(e, t, n, r, o) {
  var a = as(e, window.getComputedStyle(t).direction), s = a * r, u = n.target, l = t.contains(u), c = !1, d = s > 0, p = 0, f = 0;
  do {
    var b = Xr(e, u), g = b[0], h = b[1], m = b[2], v = h - m - a * g;
    (g || v) && Wr(e, u) && (p += v, f += g), u instanceof ShadowRoot ? u = u.host : u = u.parentNode;
  } while (
    // portaled content
    !l && u !== document.body || // self content
    l && (t.contains(u) || t === u)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(f) < 1) && (c = !0), c;
}, St = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yo = function(e) {
  return [e.deltaX, e.deltaY];
}, Co = function(e) {
  return e && "current" in e ? e.current : e;
}, ls = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, us = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cs = 0, it = [];
function ds(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(cs++)[0], a = C.useState(Pr)[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Ba([e.lockRef.current], (e.shards || []).map(Co), !0).filter(Boolean);
      return h.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = C.useCallback(function(h, m) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var v = St(h), y = n.current, I = "deltaX" in h ? h.deltaX : y[0] - v[0], x = "deltaY" in h ? h.deltaY : y[1] - v[1], A, w = h.target, R = Math.abs(I) > Math.abs(x) ? "h" : "v";
    if ("touches" in h && R === "h" && w.type === "range")
      return !1;
    var E = Io(R, w);
    if (!E)
      return !0;
    if (E ? A = R : (A = R === "v" ? "h" : "v", E = Io(R, w)), !E)
      return !1;
    if (!r.current && "changedTouches" in h && (I || x) && (r.current = A), !A)
      return !0;
    var T = r.current || A;
    return ss(T, m, h, T === "h" ? I : x);
  }, []), l = C.useCallback(function(h) {
    var m = h;
    if (!(!it.length || it[it.length - 1] !== a)) {
      var v = "deltaY" in m ? yo(m) : St(m), y = t.current.filter(function(A) {
        return A.name === m.type && (A.target === m.target || m.target === A.shadowParent) && ls(A.delta, v);
      })[0];
      if (y && y.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!y) {
        var I = (s.current.shards || []).map(Co).filter(Boolean).filter(function(A) {
          return A.contains(m.target);
        }), x = I.length > 0 ? u(m, I[0]) : !s.current.noIsolation;
        x && m.cancelable && m.preventDefault();
      }
    }
  }, []), c = C.useCallback(function(h, m, v, y) {
    var I = { name: h, delta: m, target: v, should: y, shadowParent: ps(v) };
    t.current.push(I), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== I;
      });
    }, 1);
  }, []), d = C.useCallback(function(h) {
    n.current = St(h), r.current = void 0;
  }, []), p = C.useCallback(function(h) {
    c(h.type, yo(h), h.target, u(h, e.lockRef.current));
  }, []), f = C.useCallback(function(h) {
    c(h.type, St(h), h.target, u(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return it.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, rt), document.addEventListener("touchmove", l, rt), document.addEventListener("touchstart", d, rt), function() {
      it = it.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, rt), document.removeEventListener("touchmove", l, rt), document.removeEventListener("touchstart", d, rt);
    };
  }, []);
  var b = e.removeScrollBar, g = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    g ? C.createElement(a, { styles: us(o) }) : null,
    b ? C.createElement(es, { gapMode: e.gapMode }) : null
  );
}
function ps(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const fs = Da(Mr, ds);
var kr = C.forwardRef(function(e, t) {
  return C.createElement(qt, Pe({}, e, { ref: t, sideCar: fs }));
});
kr.classNames = qt.classNames;
const bs = Xn(), gs = j("div")(() => ({
  "& > div": {
    width: "100%",
    height: "100%"
  }
})), xp = ({
  children: e,
  ...t
}) => {
  const [n, r] = Ee(!1), o = Nt((s) => {
    n || r(!0), t.onMouseMove && t.onMouseMove(s);
  }), a = Nt(() => {
    setTimeout(() => {
      n && r(!1);
    }, 100);
  });
  return /* @__PURE__ */ S(kn, { theme: bs, children: /* @__PURE__ */ S(
    gs,
    {
      ...t,
      onMouseMove: o,
      onMouseLeave: a,
      children: /* @__PURE__ */ S(kr, { enabled: n, removeScrollBar: !1, children: e })
    }
  ) });
};
function ms(e, t) {
  var n = pe(!1), r = pe(), o = pe(e), a = ce(function() {
    return n.current;
  }, []), s = ce(function() {
    n.current = !1, r.current && clearTimeout(r.current), r.current = setTimeout(function() {
      n.current = !0, o.current();
    }, t);
  }, [t]), u = ce(function() {
    n.current = null, r.current && clearTimeout(r.current);
  }, []);
  return Ne(function() {
    o.current = e;
  }, [e]), Ne(function() {
    return s(), u;
  }, [t]), [a, u, s];
}
function hs(e, t, n) {
  n === void 0 && (n = []);
  var r = ms(e, t), o = r[0], a = r[1], s = r[2];
  return Ne(s, n), [o, a];
}
var vs = function(e) {
  Ne(e, []);
}, Is = function(e, t) {
  var n = pe(function() {
  });
  Ne(function() {
    n.current = e;
  }), Ne(function() {
    {
      var r = setInterval(function() {
        return n.current();
      }, t);
      return function() {
        return clearInterval(r);
      };
    }
  }, [t]);
}, ys = function(e) {
  var t = pe(e);
  t.current = e, vs(function() {
    return function() {
      return t.current();
    };
  });
}, Cs = function(e) {
  var t = pe(0), n = Ee(e), r = n[0], o = n[1], a = ce(function(s) {
    cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function() {
      o(s);
    });
  }, []);
  return ys(function() {
    cancelAnimationFrame(t.current);
  }), [r, a];
};
const Ap = (e = 1 / 0, t = 1 / 0) => {
  const n = typeof window < "u", [r, o] = Cs({
    width: n ? window.innerWidth : e,
    height: n ? window.innerHeight : t
  });
  return Ne(() => {
    if (!n) return;
    const a = () => {
      o({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), Is(() => {
    n && (window.innerWidth !== r.width || window.innerHeight !== r.height) && o({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, 100), r;
}, Ep = (e) => {
  switch (e.type) {
    case "polygon": {
      const t = {
        x: Math.min(...e.points.map(([n]) => n)),
        y: Math.min(...e.points.map(([n, r]) => r)),
        w: 0,
        h: 0
      };
      return t.w = Math.max(...e.points.map(([n]) => n)) - t.x, t.h = Math.max(...e.points.map(([n, r]) => r)) - t.y, t;
    }
    case "keypoints": {
      const t = Math.min(...Object.values(e.points).map(({ x: a }) => a)), n = Math.min(...Object.values(e.points).map(({ y: a }) => a)), r = Math.max(...Object.values(e.points).map(({ x: a }) => a)), o = Math.max(...Object.values(e.points).map(({ y: a }) => a));
      return {
        x: t,
        y: n,
        w: r - t,
        h: o - n
      };
    }
    case "expanding-line": {
      const t = {
        x: Math.min(...e.points.map(({ x: n }) => n)),
        y: Math.min(...e.points.map(({ y: n }) => n)),
        w: 0,
        h: 0
      };
      return t.w = Math.max(...e.points.map(({ x: n }) => n)) - t.x, t.h = Math.max(...e.points.map(({ y: n }) => n)) - t.y, t;
    }
    case "line":
      return { x: e.x1, y: e.y1, w: 0, h: 0 };
    case "box":
      return { x: e.x, y: e.y, w: e.w, h: e.h };
    case "point":
      return { x: e.x, y: e.y, w: 0, h: 0 };
    default:
      return { x: 0, y: 0, w: 0, h: 0 };
  }
}, wp = (e, t, n) => {
  switch (e.type) {
    case "point":
      return { ...e, x: t, y: n };
    case "box":
      return { ...e, x: t - e.w / 2, y: n - e.h / 2 };
  }
  return e;
}, xs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wMSAxY5oG+lzgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAcSURBVAjXY/jPwPCfAQnA+TAGugLcAhhakRUAAK3lEe8m9qZhAAAAAElFTkSuQmCC", Sp = () => {
  const e = pe(null);
  if (e.current === null) {
    e.current = {
      image: new Image(),
      pattern: null
    };
    const t = document.createElement("canvas");
    t.width = 100, t.height = 100;
    const n = t.getContext("2d");
    if (!n) return null;
    e.current.image.onload = () => {
      e.current && (e.current.pattern = n.createPattern(
        e.current.image,
        "repeat"
      ));
    }, e.current.image.src = xs;
  }
  return e.current.pattern;
};
function As(e) {
  return ve("MuiPaper", e);
}
Ie("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Es = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, a = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return be(a, As, o);
}, ws = j("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(xe(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Kt = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var b;
  const r = ye({
    props: t,
    name: "MuiPaper"
  }), o = $t(), {
    className: a,
    component: s = "div",
    elevation: u = 1,
    square: l = !1,
    variant: c = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: s,
    elevation: u,
    square: l,
    variant: c
  }, f = Es(p);
  return W.env.NODE_ENV !== "production" && o.shadows[u] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${u}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${u}]\` is defined.`].join(`
`)), /* @__PURE__ */ S(ws, {
    as: s,
    ownerState: p,
    className: fe(f.root, a),
    ref: n,
    ...d,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[u],
        ...o.vars && {
          "--Paper-overlay": (b = o.vars.overlays) == null ? void 0 : b[u]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ao("#fff", so(u))}, ${ao("#fff", so(u))})`
        }
      },
      ...d.style
    }
  });
});
W.env.NODE_ENV !== "production" && (Kt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: dr(yr, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
const Ss = Qt(/* @__PURE__ */ S("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), Rs = Qt(/* @__PURE__ */ S("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
function Rt(e) {
  return parseInt(e, 10) || 0;
}
const Ts = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Gs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function xo(e) {
  return Gs(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Lr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: a = 1,
    style: s,
    value: u,
    ...l
  } = t, {
    current: c
  } = C.useRef(u != null), d = C.useRef(null), p = Ye(n, d), f = C.useRef(null), b = C.useRef(null), g = C.useCallback(() => {
    const I = d.current, x = b.current;
    if (!I || !x)
      return;
    const w = ke(I).getComputedStyle(I);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    x.style.width = w.width, x.value = I.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const R = w.boxSizing, E = Rt(w.paddingBottom) + Rt(w.paddingTop), T = Rt(w.borderBottomWidth) + Rt(w.borderTopWidth), B = x.scrollHeight;
    x.value = "x";
    const V = x.scrollHeight;
    let F = B;
    a && (F = Math.max(Number(a) * V, F)), o && (F = Math.min(Number(o) * V, F)), F = Math.max(F, V);
    const k = F + (R === "border-box" ? E + T : 0), P = Math.abs(F - B) <= 1;
    return {
      outerHeightStyle: k,
      overflowing: P
    };
  }, [o, a, t.placeholder]), h = Rn(() => {
    const I = d.current, x = g();
    if (!I || !x || xo(x))
      return !1;
    const A = x.outerHeightStyle;
    return f.current != null && f.current !== A;
  }), m = C.useCallback(() => {
    const I = d.current, x = g();
    if (!I || !x || xo(x))
      return;
    const A = x.outerHeightStyle;
    f.current !== A && (f.current = A, I.style.height = `${A}px`), I.style.overflow = x.overflowing ? "hidden" : "";
  }, [g]), v = C.useRef(-1);
  Wt(() => {
    const I = mr(m), x = d == null ? void 0 : d.current;
    if (!x)
      return;
    const A = ke(x);
    A.addEventListener("resize", I);
    let w;
    return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
      h() && (w.unobserve(x), cancelAnimationFrame(v.current), m(), v.current = requestAnimationFrame(() => {
        w.observe(x);
      }));
    }), w.observe(x)), () => {
      I.clear(), cancelAnimationFrame(v.current), A.removeEventListener("resize", I), w && w.disconnect();
    };
  }, [g, m, h]), Wt(() => {
    m();
  });
  const y = (I) => {
    c || m(), r && r(I);
  };
  return /* @__PURE__ */ de(C.Fragment, {
    children: [/* @__PURE__ */ S("textarea", {
      value: u,
      onChange: y,
      ref: p,
      rows: a,
      style: s,
      ...l
    }), /* @__PURE__ */ S("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: {
        ...Ts.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
W.env.NODE_ENV !== "production" && (Lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function Fn(e) {
  return typeof e == "string";
}
function ct({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const en = /* @__PURE__ */ C.createContext(void 0);
W.env.NODE_ENV !== "production" && (en.displayName = "FormControlContext");
function dt() {
  return C.useContext(en);
}
function Ao(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function kt(e, t = !1) {
  return e && (Ao(e.value) && e.value !== "" || t && Ao(e.defaultValue) && e.defaultValue !== "");
}
function Fs(e) {
  return e.startAdornment;
}
function Os(e) {
  return ve("MuiInputBase", e);
}
const ut = Ie("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Eo;
const tn = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${we(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, nn = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Bs = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: a,
    focused: s,
    formControl: u,
    fullWidth: l,
    hiddenLabel: c,
    multiline: d,
    readOnly: p,
    size: f,
    startAdornment: b,
    type: g
  } = e, h = {
    root: ["root", `color${we(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", u && "formControl", f && f !== "medium" && `size${we(f)}`, d && "multiline", b && "adornedStart", a && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", f === "small" && "inputSizeSmall", c && "inputHiddenLabel", b && "inputAdornedStart", a && "inputAdornedEnd", p && "readOnly"]
  };
  return be(h, Os, t);
}, on = j("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: tn
})(xe(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ut.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), rn = j("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: nn
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ut.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${ut.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: a
      }) => !a.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: a
      }) => a.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), wo = Qi({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), an = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: a,
    autoFocus: s,
    className: u,
    color: l,
    components: c = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: f,
    disableInjectingGlobalStyles: b,
    endAdornment: g,
    error: h,
    fullWidth: m = !1,
    id: v,
    inputComponent: y = "input",
    inputProps: I = {},
    inputRef: x,
    margin: A,
    maxRows: w,
    minRows: R,
    multiline: E = !1,
    name: T,
    onBlur: B,
    onChange: V,
    onClick: F,
    onFocus: k,
    onKeyDown: P,
    onKeyUp: O,
    placeholder: G,
    readOnly: H,
    renderSuffix: Y,
    rows: M,
    size: q,
    slotProps: oe = {},
    slots: ee = {},
    startAdornment: J,
    type: Q = "text",
    value: _,
    ...re
  } = r, ie = I.value != null ? I.value : _, {
    current: ue
  } = C.useRef(ie != null), ne = C.useRef(), Z = C.useCallback((te) => {
    W.env.NODE_ENV !== "production" && te && te.nodeName !== "INPUT" && !te.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), z = Ye(ne, x, I.ref, Z), [U, se] = C.useState(!1), $ = dt();
  W.env.NODE_ENV !== "production" && C.useEffect(() => {
    if ($)
      return $.registerEffect();
  }, [$]);
  const ae = ct({
    props: r,
    muiFormControl: $,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ae.focused = $ ? $.focused : U, C.useEffect(() => {
    !$ && f && U && (se(!1), B && B());
  }, [$, f, U, B]);
  const Se = $ && $.onFilled, Be = $ && $.onEmpty, Re = C.useCallback((te) => {
    kt(te) ? Se && Se() : Be && Be();
  }, [Se, Be]);
  Wt(() => {
    ue && Re({
      value: ie
    });
  }, [ie, Re, ue]);
  const Ge = (te) => {
    k && k(te), I.onFocus && I.onFocus(te), $ && $.onFocus ? $.onFocus(te) : se(!0);
  }, Te = (te) => {
    B && B(te), I.onBlur && I.onBlur(te), $ && $.onBlur ? $.onBlur(te) : se(!1);
  }, ge = (te, ...tt) => {
    if (!ue) {
      const nt = te.target || ne.current;
      if (nt == null)
        throw new Error(W.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : pr(1));
      Re({
        value: nt.value
      });
    }
    I.onChange && I.onChange(te, ...tt), V && V(te, ...tt);
  };
  C.useEffect(() => {
    Re(ne.current);
  }, []);
  const Ve = (te) => {
    ne.current && te.currentTarget === te.target && ne.current.focus(), F && F(te);
  };
  let He = y, me = I;
  E && He === "input" && (M ? (W.env.NODE_ENV !== "production" && (R || w) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), me = {
    type: void 0,
    minRows: M,
    maxRows: M,
    ...me
  }) : me = {
    type: void 0,
    maxRows: w,
    minRows: R,
    ...me
  }, He = Lr);
  const et = (te) => {
    Re(te.animationName === "mui-auto-fill-cancel" ? ne.current : {
      value: "x"
    });
  };
  C.useEffect(() => {
    $ && $.setAdornedStart(!!J);
  }, [$, J]);
  const Ue = {
    ...r,
    color: ae.color || "primary",
    disabled: ae.disabled,
    endAdornment: g,
    error: ae.error,
    focused: ae.focused,
    formControl: $,
    fullWidth: m,
    hiddenLabel: ae.hiddenLabel,
    multiline: E,
    size: ae.size,
    startAdornment: J,
    type: Q
  }, At = Bs(Ue), pt = ee.root || c.Root || on, $e = oe.root || d.root || {}, ft = ee.input || c.Input || rn;
  return me = {
    ...me,
    ...oe.input ?? d.input
  }, /* @__PURE__ */ de(C.Fragment, {
    children: [!b && typeof wo == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Eo || (Eo = /* @__PURE__ */ S(wo, {}))), /* @__PURE__ */ de(pt, {
      ...$e,
      ref: n,
      onClick: Ve,
      ...re,
      ...!Fn(pt) && {
        ownerState: {
          ...Ue,
          ...$e.ownerState
        }
      },
      className: fe(At.root, $e.className, u, H && "MuiInputBase-readOnly"),
      children: [J, /* @__PURE__ */ S(en.Provider, {
        value: null,
        children: /* @__PURE__ */ S(ft, {
          "aria-invalid": ae.error,
          "aria-describedby": o,
          autoComplete: a,
          autoFocus: s,
          defaultValue: p,
          disabled: ae.disabled,
          id: v,
          onAnimationStart: et,
          name: T,
          placeholder: G,
          readOnly: H,
          required: ae.required,
          rows: M,
          value: ie,
          onKeyDown: P,
          onKeyUp: O,
          type: Q,
          ...me,
          ...!Fn(ft) && {
            as: He,
            ownerState: {
              ...Ue,
              ...me.ownerState
            }
          },
          ref: z,
          className: fe(At.input, me.className, H && "MuiInputBase-readOnly"),
          onBlur: Te,
          onChange: ge,
          onFocus: Ge
        })
      }), g, Y ? Y({
        ...ae,
        startAdornment: J
      }) : null]
    })]
  });
});
W.env.NODE_ENV !== "production" && (an.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: fr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Je,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
function Vs(e) {
  return ve("MuiInput", e);
}
const bt = {
  ...ut,
  ...Ie("MuiInput", ["root", "underline", "input"])
}, Ms = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = be({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Vs, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, Ps = j(on, {
  shouldForwardProp: (e) => De(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tn(e, t), !n.disableUnderline && t.underline];
  }
})(xe(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${bt.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${bt.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${bt.disabled}, .${bt.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${bt.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), Ns = j(rn, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: nn
})({}), sn = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: u = !1,
    inputComponent: l = "input",
    multiline: c = !1,
    slotProps: d,
    slots: p = {},
    type: f = "text",
    ...b
  } = r, g = Ms(r), m = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, v = d ?? s ? Ln(d ?? s, m) : m, y = p.root ?? a.Root ?? Ps, I = p.input ?? a.Input ?? Ns;
  return /* @__PURE__ */ S(an, {
    slots: {
      root: y,
      input: I
    },
    slotProps: v,
    fullWidth: u,
    inputComponent: l,
    multiline: c,
    ref: n,
    type: f,
    ...b,
    classes: g
  });
});
W.env.NODE_ENV !== "production" && (sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Je,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
sn.muiName = "Input";
function Ws(e) {
  return ve("MuiFilledInput", e);
}
const Qe = {
  ...ut,
  ...Ie("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, Xs = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: a,
    hiddenLabel: s,
    multiline: u
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", a === "small" && `size${we(a)}`, s && "hiddenLabel", u && "multiline"],
    input: ["input"]
  }, c = be(l, Ws, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, ks = j(on, {
  shouldForwardProp: (e) => De(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tn(e, t), !n.disableUnderline && t.underline];
  }
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", a = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Qe.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Qe.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Qe.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Qe.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Qe.disabled}, .${Qe.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Qe.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(_t()).map(([s]) => {
      var u;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(u = (e.vars || e).palette[s]) == null ? void 0 : u.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: u
      }) => s.multiline && u === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), Ls = j(rn, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: nn
})(xe(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ln = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: a = {},
    componentsProps: s,
    fullWidth: u = !1,
    hiddenLabel: l,
    // declare here to prevent spreading to DOM
    inputComponent: c = "input",
    multiline: d = !1,
    slotProps: p,
    slots: f = {},
    type: b = "text",
    ...g
  } = r, h = {
    ...r,
    disableUnderline: o,
    fullWidth: u,
    inputComponent: c,
    multiline: d,
    type: b
  }, m = Xs(r), v = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, y = p ?? s ? Ln(v, p ?? s) : v, I = f.root ?? a.Root ?? ks, x = f.input ?? a.Input ?? Ls;
  return /* @__PURE__ */ S(an, {
    slots: {
      root: I,
      input: x
    },
    slotProps: y,
    fullWidth: u,
    inputComponent: c,
    multiline: d,
    ref: n,
    type: b,
    ...g,
    classes: m
  });
});
W.env.NODE_ENV !== "production" && (ln.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Je,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
ln.muiName = "Input";
var So;
const Ds = j("fieldset", {
  shouldForwardProp: De
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Hs = j("legend", {
  shouldForwardProp: De
})(xe(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function Dr(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: a,
    ...s
  } = e, u = o != null && o !== "", l = {
    ...e,
    notched: a,
    withLabel: u
  };
  return /* @__PURE__ */ S(Ds, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: /* @__PURE__ */ S(Hs, {
      ownerState: l,
      children: u ? /* @__PURE__ */ S("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        So || (So = /* @__PURE__ */ S("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
W.env.NODE_ENV !== "production" && (Dr.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
function Zs(e) {
  return ve("MuiOutlinedInput", e);
}
const Me = {
  ...ut,
  ...Ie("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, zs = (e) => {
  const {
    classes: t
  } = e, r = be({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Zs, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, js = j(on, {
  shouldForwardProp: (e) => De(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: tn
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Me.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Me.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Me.focused} .${Me.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(_t()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Me.focused} .${Me.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Me.error} .${Me.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Me.disabled} .${Me.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), Ys = j(Dr, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), Js = j(rn, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: nn
})(xe(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), un = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var r;
  const o = ye({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: a = {},
    fullWidth: s = !1,
    inputComponent: u = "input",
    label: l,
    multiline: c = !1,
    notched: d,
    slots: p = {},
    type: f = "text",
    ...b
  } = o, g = zs(o), h = dt(), m = ct({
    props: o,
    muiFormControl: h,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), v = {
    ...o,
    color: m.color || "primary",
    disabled: m.disabled,
    error: m.error,
    focused: m.focused,
    formControl: h,
    fullWidth: s,
    hiddenLabel: m.hiddenLabel,
    multiline: c,
    size: m.size,
    type: f
  }, y = p.root ?? a.Root ?? js, I = p.input ?? a.Input ?? Js;
  return /* @__PURE__ */ S(an, {
    slots: {
      root: y,
      input: I
    },
    renderSuffix: (x) => /* @__PURE__ */ S(Ys, {
      ownerState: v,
      className: g.notchedOutline,
      label: l != null && l !== "" && m.required ? r || (r = /* @__PURE__ */ de(C.Fragment, {
        children: [l, " ", "*"]
      })) : l,
      notched: typeof d < "u" ? d : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: s,
    inputComponent: u,
    multiline: c,
    ref: n,
    type: f,
    ...b,
    classes: {
      ...g,
      notchedOutline: null
    }
  });
});
W.env.NODE_ENV !== "production" && (un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Je,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
un.muiName = "Input";
function Us(e) {
  return ve("MuiFormLabel", e);
}
const Ct = Ie("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), $s = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: a,
    filled: s,
    required: u
  } = e, l = {
    root: ["root", `color${we(n)}`, o && "disabled", a && "error", s && "filled", r && "focused", u && "required"],
    asterisk: ["asterisk", a && "error"]
  };
  return be(l, Us, t);
}, Qs = j("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ct.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ct.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ct.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), _s = j("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(xe(({
  theme: e
}) => ({
  [`&.${Ct.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Hr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: a,
    color: s,
    component: u = "label",
    disabled: l,
    error: c,
    filled: d,
    focused: p,
    required: f,
    ...b
  } = r, g = dt(), h = ct({
    props: r,
    muiFormControl: g,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), m = {
    ...r,
    color: h.color || "primary",
    component: u,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  }, v = $s(m);
  return /* @__PURE__ */ de(Qs, {
    as: u,
    ownerState: m,
    className: fe(v.root, a),
    ref: n,
    ...b,
    children: [o, h.required && /* @__PURE__ */ de(_s, {
      ownerState: m,
      "aria-hidden": !0,
      className: v.asterisk,
      children: [" ", "*"]
    })]
  });
});
W.env.NODE_ENV !== "production" && (Hr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function qs(e) {
  return ve("MuiInputLabel", e);
}
Ie("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Ks = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: a,
    variant: s,
    required: u
  } = e, l = {
    root: ["root", n && "formControl", !a && "animated", o && "shrink", r && r !== "normal" && `size${we(r)}`, s],
    asterisk: [u && "asterisk"]
  }, c = be(l, qs, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, el = j(Hr, {
  shouldForwardProp: (e) => De(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ct.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(xe(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Zr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: a,
    shrink: s,
    variant: u,
    className: l,
    ...c
  } = r, d = dt();
  let p = s;
  typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
  const f = ct({
    props: r,
    muiFormControl: d,
    states: ["size", "variant", "required", "focused"]
  }), b = {
    ...r,
    disableAnimation: o,
    formControl: d,
    shrink: p,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, g = Ks(b);
  return /* @__PURE__ */ S(el, {
    "data-shrink": p,
    ref: n,
    className: fe(g.root, l),
    ...c,
    ownerState: b,
    classes: g
  });
});
W.env.NODE_ENV !== "production" && (Zr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function tl(e) {
  return ve("MuiFormControl", e);
}
Ie("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const nl = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${we(n)}`, r && "fullWidth"]
  };
  return be(o, tl, t);
}, ol = j("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${we(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), zr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: a,
    color: s = "primary",
    component: u = "div",
    disabled: l = !1,
    error: c = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: f = !1,
    margin: b = "none",
    required: g = !1,
    size: h = "medium",
    variant: m = "outlined",
    ...v
  } = r, y = {
    ...r,
    color: s,
    component: u,
    disabled: l,
    error: c,
    fullWidth: p,
    hiddenLabel: f,
    margin: b,
    required: g,
    size: h,
    variant: m
  }, I = nl(y), [x, A] = C.useState(() => {
    let G = !1;
    return o && C.Children.forEach(o, (H) => {
      if (!pn(H, ["Input", "Select"]))
        return;
      const Y = pn(H, ["Select"]) ? H.props.input : H;
      Y && Fs(Y.props) && (G = !0);
    }), G;
  }), [w, R] = C.useState(() => {
    let G = !1;
    return o && C.Children.forEach(o, (H) => {
      pn(H, ["Input", "Select"]) && (kt(H.props, !0) || kt(H.props.inputProps, !0)) && (G = !0);
    }), G;
  }), [E, T] = C.useState(!1);
  l && E && T(!1);
  const B = d !== void 0 && !l ? d : E;
  let V;
  const F = C.useRef(!1);
  W.env.NODE_ENV !== "production" && (V = () => (F.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), F.current = !0, () => {
    F.current = !1;
  }));
  const k = C.useCallback(() => {
    R(!0);
  }, []), P = C.useCallback(() => {
    R(!1);
  }, []), O = C.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: A,
    color: s,
    disabled: l,
    error: c,
    filled: w,
    focused: B,
    fullWidth: p,
    hiddenLabel: f,
    size: h,
    onBlur: () => {
      T(!1);
    },
    onFocus: () => {
      T(!0);
    },
    onEmpty: P,
    onFilled: k,
    registerEffect: V,
    required: g,
    variant: m
  }), [x, s, l, c, w, B, p, f, V, P, k, g, h, m]);
  return /* @__PURE__ */ S(en.Provider, {
    value: O,
    children: /* @__PURE__ */ S(ol, {
      as: u,
      ownerState: y,
      className: fe(I.root, a),
      ref: n,
      ...v,
      children: o
    })
  });
});
W.env.NODE_ENV !== "production" && (zr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function rl(e) {
  return ve("MuiFormHelperText", e);
}
const Ro = Ie("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var To;
const il = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: a,
    filled: s,
    focused: u,
    required: l
  } = e, c = {
    root: ["root", o && "disabled", a && "error", r && `size${we(r)}`, n && "contained", u && "focused", s && "filled", l && "required"]
  };
  return be(c, rl, t);
}, al = j("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${we(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(xe(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ro.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ro.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), jr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: a,
    component: s = "p",
    disabled: u,
    error: l,
    filled: c,
    focused: d,
    margin: p,
    required: f,
    variant: b,
    ...g
  } = r, h = dt(), m = ct({
    props: r,
    muiFormControl: h,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), v = {
    ...r,
    component: s,
    contained: m.variant === "filled" || m.variant === "outlined",
    variant: m.variant,
    size: m.size,
    disabled: m.disabled,
    error: m.error,
    filled: m.filled,
    focused: m.focused,
    required: m.required
  };
  delete v.ownerState;
  const y = il(v);
  return /* @__PURE__ */ S(al, {
    as: s,
    className: fe(y.root, a),
    ref: n,
    ...g,
    ownerState: v,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      To || (To = /* @__PURE__ */ S("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
});
W.env.NODE_ENV !== "production" && (jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
function mn(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Go(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Yr(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function gt(e, t, n, r, o, a) {
  let s = !1, u = o(e, t, t ? n : !1);
  for (; u; ) {
    if (u === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = r ? !1 : u.disabled || u.getAttribute("aria-disabled") === "true";
    if (!u.hasAttribute("tabindex") || !Yr(u, a) || l)
      u = o(e, u, n);
    else
      return u.focus(), !0;
  }
  return !1;
}
const Jr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: a = !1,
    children: s,
    className: u,
    disabledItemsFocusable: l = !1,
    disableListWrap: c = !1,
    onKeyDown: d,
    variant: p = "selectedMenu",
    ...f
  } = t, b = C.useRef(null), g = C.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Wt(() => {
    o && b.current.focus();
  }, [o]), C.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (I, {
      direction: x
    }) => {
      const A = !b.current.style.width;
      if (I.clientHeight < b.current.clientHeight && A) {
        const w = `${hr(ke(I))}px`;
        b.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = w, b.current.style.width = `calc(100% + ${w})`;
      }
      return b.current;
    }
  }), []);
  const h = (I) => {
    const x = b.current, A = I.key;
    if (I.ctrlKey || I.metaKey || I.altKey) {
      d && d(I);
      return;
    }
    const R = Oe(x).activeElement;
    if (A === "ArrowDown")
      I.preventDefault(), gt(x, R, c, l, mn);
    else if (A === "ArrowUp")
      I.preventDefault(), gt(x, R, c, l, Go);
    else if (A === "Home")
      I.preventDefault(), gt(x, null, c, l, mn);
    else if (A === "End")
      I.preventDefault(), gt(x, null, c, l, Go);
    else if (A.length === 1) {
      const E = g.current, T = A.toLowerCase(), B = performance.now();
      E.keys.length > 0 && (B - E.lastTime > 500 ? (E.keys = [], E.repeating = !0, E.previousKeyMatched = !0) : E.repeating && T !== E.keys[0] && (E.repeating = !1)), E.lastTime = B, E.keys.push(T);
      const V = R && !E.repeating && Yr(R, E);
      E.previousKeyMatched && (V || gt(x, R, !1, l, mn, E)) ? I.preventDefault() : E.previousKeyMatched = !1;
    }
    d && d(I);
  }, m = Ye(b, n);
  let v = -1;
  C.Children.forEach(s, (I, x) => {
    if (!/* @__PURE__ */ C.isValidElement(I)) {
      v === x && (v += 1, v >= s.length && (v = -1));
      return;
    }
    W.env.NODE_ENV !== "production" && Dn.isFragment(I) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), I.props.disabled || (p === "selectedMenu" && I.props.selected || v === -1) && (v = x), v === x && (I.props.disabled || I.props.muiSkipListHighlight || I.type.muiSkipListHighlight) && (v += 1, v >= s.length && (v = -1));
  });
  const y = C.Children.map(s, (I, x) => {
    if (x === v) {
      const A = {};
      return a && (A.autoFocus = !0), I.props.tabIndex === void 0 && p === "selectedMenu" && (A.tabIndex = 0), /* @__PURE__ */ C.cloneElement(I, A);
    }
    return I;
  });
  return /* @__PURE__ */ S(xr, {
    role: "menu",
    ref: m,
    className: u,
    onKeyDown: h,
    tabIndex: o ? 0 : -1,
    ...f,
    children: y
  });
});
W.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function sl(e) {
  const t = Oe(e);
  return t.body === e ? ke(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function xt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Fo(e) {
  return parseInt(ke(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ll(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Oo(e, t, n, r, o) {
  const a = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const u = !a.includes(s), l = !ll(s);
    u && l && xt(s, o);
  });
}
function hn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function ul(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (sl(r)) {
      const s = hr(ke(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Fo(r) + s}px`;
      const u = Oe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(u, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Fo(l) + s}px`;
      });
    }
    let a;
    if (r.parentNode instanceof DocumentFragment)
      a = Oe(r).body;
    else {
      const s = r.parentElement, u = ke(r);
      a = (s == null ? void 0 : s.nodeName) === "HTML" && u.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: a,
      el: s,
      property: u
    }) => {
      a ? s.style.setProperty(u, a) : s.style.removeProperty(u);
    });
  };
}
function cl(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class dl {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && xt(t.modalRef, !1);
    const o = cl(n);
    Oo(n, t.mount, t.modalRef, o, !0);
    const a = hn(this.containers, (s) => s.container === n);
    return a !== -1 ? (this.containers[a].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = hn(this.containers, (a) => a.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = ul(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = hn(this.containers, (s) => s.modals.includes(t)), a = this.containers[o];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(r, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && xt(t.modalRef, n), Oo(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = a.modals[a.modals.length - 1];
      s.modalRef && xt(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const pl = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function fl(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function bl(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function gl(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || bl(e));
}
function ml(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(pl)).forEach((r, o) => {
    const a = fl(r);
    a === -1 || !gl(r) || (a === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: a,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function hl() {
  return !0;
}
function Lt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: a = ml,
    isEnabled: s = hl,
    open: u
  } = e, l = C.useRef(!1), c = C.useRef(null), d = C.useRef(null), p = C.useRef(null), f = C.useRef(null), b = C.useRef(!1), g = C.useRef(null), h = Ye(Hn(t), g), m = C.useRef(null);
  C.useEffect(() => {
    !u || !g.current || (b.current = !n);
  }, [n, u]), C.useEffect(() => {
    if (!u || !g.current)
      return;
    const I = Oe(g.current);
    return g.current.contains(I.activeElement) || (g.current.hasAttribute("tabIndex") || (W.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), b.current && g.current.focus()), () => {
      o || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null);
    };
  }, [u]), C.useEffect(() => {
    if (!u || !g.current)
      return;
    const I = Oe(g.current), x = (R) => {
      m.current = R, !(r || !s() || R.key !== "Tab") && I.activeElement === g.current && R.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, A = () => {
      var T, B;
      const R = g.current;
      if (R === null)
        return;
      if (!I.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (R.contains(I.activeElement) || r && I.activeElement !== c.current && I.activeElement !== d.current)
        return;
      if (I.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!b.current)
        return;
      let E = [];
      if ((I.activeElement === c.current || I.activeElement === d.current) && (E = a(g.current)), E.length > 0) {
        const V = !!((T = m.current) != null && T.shiftKey && ((B = m.current) == null ? void 0 : B.key) === "Tab"), F = E[0], k = E[E.length - 1];
        typeof F != "string" && typeof k != "string" && (V ? k.focus() : F.focus());
      } else
        R.focus();
    };
    I.addEventListener("focusin", A), I.addEventListener("keydown", x, !0);
    const w = setInterval(() => {
      I.activeElement && I.activeElement.tagName === "BODY" && A();
    }, 50);
    return () => {
      clearInterval(w), I.removeEventListener("focusin", A), I.removeEventListener("keydown", x, !0);
    };
  }, [n, r, o, s, u, a]);
  const v = (I) => {
    p.current === null && (p.current = I.relatedTarget), b.current = !0, f.current = I.target;
    const x = t.props.onFocus;
    x && x(I);
  }, y = (I) => {
    p.current === null && (p.current = I.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ de(C.Fragment, {
    children: [/* @__PURE__ */ S("div", {
      tabIndex: u ? 0 : -1,
      onFocus: y,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ C.cloneElement(t, {
      ref: h,
      onFocus: v
    }), /* @__PURE__ */ S("div", {
      tabIndex: u ? 0 : -1,
      onFocus: y,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
W.env.NODE_ENV !== "production" && (Lt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Zn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
W.env.NODE_ENV !== "production" && (Lt.propTypes = _i(Lt.propTypes));
const vl = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ur = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = $t(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: s = !0,
    children: u,
    easing: l,
    in: c,
    onEnter: d,
    onEntered: p,
    onEntering: f,
    onExit: b,
    onExited: g,
    onExiting: h,
    style: m,
    timeout: v = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = qi,
    ...I
  } = t, x = C.useRef(null), A = Ye(x, Hn(u), n), w = (P) => (O) => {
    if (P) {
      const G = x.current;
      O === void 0 ? P(G) : P(G, O);
    }
  }, R = w(f), E = w((P, O) => {
    Ki(P);
    const G = lo({
      style: m,
      timeout: v,
      easing: l
    }, {
      mode: "enter"
    });
    P.style.webkitTransition = r.transitions.create("opacity", G), P.style.transition = r.transitions.create("opacity", G), d && d(P, O);
  }), T = w(p), B = w(h), V = w((P) => {
    const O = lo({
      style: m,
      timeout: v,
      easing: l
    }, {
      mode: "exit"
    });
    P.style.webkitTransition = r.transitions.create("opacity", O), P.style.transition = r.transitions.create("opacity", O), b && b(P);
  }), F = w(g);
  return /* @__PURE__ */ S(y, {
    appear: s,
    in: c,
    nodeRef: x,
    onEnter: E,
    onEntered: T,
    onEntering: R,
    onExit: V,
    onExited: F,
    onExiting: B,
    addEndListener: (P) => {
      a && a(x.current, P);
    },
    timeout: v,
    ...I,
    children: (P, {
      ownerState: O,
      ...G
    }) => /* @__PURE__ */ C.cloneElement(u, {
      style: {
        opacity: 0,
        visibility: P === "exited" && !c ? "hidden" : void 0,
        ...vl[P],
        ...m,
        ...u.props.style
      },
      ref: A,
      ...G
    })
  });
});
W.env.NODE_ENV !== "production" && (Ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: Zn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function Il(e) {
  return ve("MuiBackdrop", e);
}
Ie("MuiBackdrop", ["root", "invisible"]);
const yl = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return be({
    root: ["root", n && "invisible"]
  }, Il, t);
}, Cl = j("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), $r = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: a,
    component: s = "div",
    invisible: u = !1,
    open: l,
    components: c = {},
    componentsProps: d = {},
    slotProps: p = {},
    slots: f = {},
    TransitionComponent: b,
    transitionDuration: g,
    ...h
  } = r, m = {
    ...r,
    component: s,
    invisible: u
  }, v = yl(m), y = {
    transition: b,
    root: c.Root,
    ...f
  }, I = {
    ...d,
    ...p
  }, x = {
    slots: y,
    slotProps: I
  }, [A, w] = Ce("root", {
    elementType: Cl,
    externalForwardedProps: x,
    className: fe(v.root, a),
    ownerState: m
  }), [R, E] = Ce("transition", {
    elementType: Ur,
    externalForwardedProps: x,
    ownerState: m
  });
  return /* @__PURE__ */ S(R, {
    in: l,
    timeout: g,
    ...h,
    ...E,
    children: /* @__PURE__ */ S(A, {
      "aria-hidden": !0,
      ...w,
      classes: v,
      ref: n,
      children: o
    })
  });
});
W.env.NODE_ENV !== "production" && ($r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function xl(e) {
  return typeof e == "function" ? e() : e;
}
function Al(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Bo = () => {
}, Tt = new dl();
function El(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: u,
    onClose: l,
    open: c,
    rootRef: d
  } = e, p = C.useRef({}), f = C.useRef(null), b = C.useRef(null), g = Ye(b, d), [h, m] = C.useState(!c), v = Al(u);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const I = () => Oe(f.current), x = () => (p.current.modalRef = b.current, p.current.mount = f.current, p.current), A = () => {
    Tt.mount(x(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, w = Rn(() => {
    const O = xl(t) || I().body;
    Tt.add(x(), O), b.current && A();
  }), R = () => Tt.isTopModal(x()), E = Rn((O) => {
    f.current = O, O && (c && R() ? A() : b.current && xt(b.current, y));
  }), T = C.useCallback(() => {
    Tt.remove(x(), y);
  }, [y]);
  C.useEffect(() => () => {
    T();
  }, [T]), C.useEffect(() => {
    c ? w() : (!v || !o) && T();
  }, [c, T, v, o, w]);
  const B = (O) => (G) => {
    var H;
    (H = O.onKeyDown) == null || H.call(O, G), !(G.key !== "Escape" || G.which === 229 || // Wait until IME is settled.
    !R()) && (n || (G.stopPropagation(), l && l(G, "escapeKeyDown")));
  }, V = (O) => (G) => {
    var H;
    (H = O.onClick) == null || H.call(O, G), G.target === G.currentTarget && l && l(G, "backdropClick");
  };
  return {
    getRootProps: (O = {}) => {
      const G = ea(e);
      delete G.onTransitionEnter, delete G.onTransitionExited;
      const H = {
        ...G,
        ...O
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...H,
        onKeyDown: B(H),
        ref: g
      };
    },
    getBackdropProps: (O = {}) => {
      const G = O;
      return {
        "aria-hidden": !0,
        ...G,
        onClick: V(G),
        open: c
      };
    },
    getTransitionProps: () => {
      const O = () => {
        m(!1), a && a();
      }, G = () => {
        m(!0), s && s(), o && T();
      };
      return {
        onEnter: po(O, (u == null ? void 0 : u.props.onEnter) ?? Bo),
        onExited: po(G, (u == null ? void 0 : u.props.onExited) ?? Bo)
      };
    },
    rootRef: g,
    portalRef: E,
    isTopModal: R,
    exited: h,
    hasTransition: v
  };
}
function wl(e) {
  return ve("MuiModal", e);
}
Ie("MuiModal", ["root", "hidden", "backdrop"]);
const Sl = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return be({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, wl, r);
}, Rl = j("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(xe(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Tl = j($r, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Qr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = Tl,
    BackdropProps: a,
    classes: s,
    className: u,
    closeAfterTransition: l = !1,
    children: c,
    container: d,
    component: p,
    components: f = {},
    componentsProps: b = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: m = !1,
    disablePortal: v = !1,
    disableRestoreFocus: y = !1,
    disableScrollLock: I = !1,
    hideBackdrop: x = !1,
    keepMounted: A = !1,
    onBackdropClick: w,
    onClose: R,
    onTransitionEnter: E,
    onTransitionExited: T,
    open: B,
    slotProps: V = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: k,
    ...P
  } = r, O = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: g,
    disableEnforceFocus: h,
    disableEscapeKeyDown: m,
    disablePortal: v,
    disableRestoreFocus: y,
    disableScrollLock: I,
    hideBackdrop: x,
    keepMounted: A
  }, {
    getRootProps: G,
    getBackdropProps: H,
    getTransitionProps: Y,
    portalRef: M,
    isTopModal: q,
    exited: oe,
    hasTransition: ee
  } = El({
    ...O,
    rootRef: n
  }), J = {
    ...O,
    exited: oe
  }, Q = Sl(J), _ = {};
  if (c.props.tabIndex === void 0 && (_.tabIndex = "-1"), ee) {
    const {
      onEnter: z,
      onExited: U
    } = Y();
    _.onEnter = z, _.onExited = U;
  }
  const re = {
    slots: {
      root: f.Root,
      backdrop: f.Backdrop,
      ...F
    },
    slotProps: {
      ...b,
      ...V
    }
  }, [ie, ue] = Ce("root", {
    ref: n,
    elementType: Rl,
    externalForwardedProps: {
      ...re,
      ...P,
      component: p
    },
    getSlotProps: G,
    ownerState: J,
    className: fe(u, Q == null ? void 0 : Q.root, !J.open && J.exited && (Q == null ? void 0 : Q.hidden))
  }), [ne, Z] = Ce("backdrop", {
    ref: a == null ? void 0 : a.ref,
    elementType: o,
    externalForwardedProps: re,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (z) => H({
      ...z,
      onClick: (U) => {
        w && w(U), z != null && z.onClick && z.onClick(U);
      }
    }),
    className: fe(a == null ? void 0 : a.className, Q == null ? void 0 : Q.backdrop),
    ownerState: J
  });
  return !A && !B && (!ee || oe) ? null : /* @__PURE__ */ S(ta, {
    ref: M,
    container: d,
    disablePortal: v,
    children: /* @__PURE__ */ de(ie, {
      ...ue,
      children: [!x && o ? /* @__PURE__ */ S(ne, {
        ...Z
      }) : null, /* @__PURE__ */ S(Lt, {
        disableEnforceFocus: h,
        disableAutoFocus: g,
        disableRestoreFocus: y,
        isEnabled: q,
        open: B,
        children: /* @__PURE__ */ C.cloneElement(c, _)
      })]
    })
  });
});
W.env.NODE_ENV !== "production" && (Qr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: Zn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xt, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Gl(e) {
  return ve("MuiPopover", e);
}
Ie("MuiPopover", ["root", "paper"]);
function Vo(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Mo(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Po(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function vt(e) {
  return typeof e == "function" ? e() : e;
}
const Fl = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"]
  }, Gl, t);
}, Ol = j(Qr, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _r = j(Kt, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: a,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: u,
    anchorReference: l = "anchorEl",
    children: c,
    className: d,
    container: p,
    elevation: f = 8,
    marginThreshold: b = 16,
    open: g,
    PaperProps: h = {},
    // TODO: remove in v7
    slots: m = {},
    slotProps: v = {},
    transformOrigin: y = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: I,
    // TODO: remove in v7
    transitionDuration: x = "auto",
    TransitionProps: A = {},
    // TODO: remove in v7
    disableScrollLock: w = !1,
    ...R
  } = r, E = C.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: b,
    transformOrigin: y,
    TransitionComponent: I,
    transitionDuration: x,
    TransitionProps: A
  }, B = Fl(T), V = C.useCallback(() => {
    if (l === "anchorPosition")
      return W.env.NODE_ENV !== "production" && (u || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), u;
    const Z = vt(a), z = Z && Z.nodeType === 1 ? Z : Oe(E.current).body, U = z.getBoundingClientRect();
    if (W.env.NODE_ENV !== "production") {
      const se = z.getBoundingClientRect();
      W.env.NODE_ENV !== "test" && se.top === 0 && se.left === 0 && se.right === 0 && se.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: U.top + Vo(U, s.vertical),
      left: U.left + Mo(U, s.horizontal)
    };
  }, [a, s.horizontal, s.vertical, u, l]), F = C.useCallback((Z) => ({
    vertical: Vo(Z, y.vertical),
    horizontal: Mo(Z, y.horizontal)
  }), [y.horizontal, y.vertical]), k = C.useCallback((Z) => {
    const z = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, U = F(z);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Po(U)
      };
    const se = V();
    let $ = se.top - U.vertical, ae = se.left - U.horizontal;
    const Se = $ + z.height, Be = ae + z.width, Re = ke(vt(a)), Ge = Re.innerHeight - b, Te = Re.innerWidth - b;
    if (b !== null && $ < b) {
      const ge = $ - b;
      $ -= ge, U.vertical += ge;
    } else if (b !== null && Se > Ge) {
      const ge = Se - Ge;
      $ -= ge, U.vertical += ge;
    }
    if (W.env.NODE_ENV !== "production" && z.height > Ge && z.height && Ge && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${z.height - Ge}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && ae < b) {
      const ge = ae - b;
      ae -= ge, U.horizontal += ge;
    } else if (Be > Te) {
      const ge = Be - Te;
      ae -= ge, U.horizontal += ge;
    }
    return {
      top: `${Math.round($)}px`,
      left: `${Math.round(ae)}px`,
      transformOrigin: Po(U)
    };
  }, [a, l, V, F, b]), [P, O] = C.useState(g), G = C.useCallback(() => {
    const Z = E.current;
    if (!Z)
      return;
    const z = k(Z);
    z.top !== null && Z.style.setProperty("top", z.top), z.left !== null && (Z.style.left = z.left), Z.style.transformOrigin = z.transformOrigin, O(!0);
  }, [k]);
  C.useEffect(() => (w && window.addEventListener("scroll", G), () => window.removeEventListener("scroll", G)), [a, w, G]);
  const H = () => {
    G();
  }, Y = () => {
    O(!1);
  };
  C.useEffect(() => {
    g && G();
  }), C.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      G();
    }
  } : null, [g, G]), C.useEffect(() => {
    if (!g)
      return;
    const Z = mr(() => {
      G();
    }), z = ke(vt(a));
    return z.addEventListener("resize", Z), () => {
      Z.clear(), z.removeEventListener("resize", Z);
    };
  }, [a, g, G]);
  let M = x;
  const q = {
    slots: {
      transition: I,
      ...m
    },
    slotProps: {
      transition: A,
      paper: h,
      ...v
    }
  }, [oe, ee] = Ce("transition", {
    elementType: na,
    externalForwardedProps: q,
    ownerState: T,
    getSlotProps: (Z) => ({
      ...Z,
      onEntering: (z, U) => {
        var se;
        (se = Z.onEntering) == null || se.call(Z, z, U), H();
      },
      onExited: (z) => {
        var U;
        (U = Z.onExited) == null || U.call(Z, z), Y();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  x === "auto" && !oe.muiSupportAuto && (M = void 0);
  const J = p || (a ? Oe(vt(a)).body : void 0), [Q, {
    slots: _,
    slotProps: re,
    ...ie
  }] = Ce("root", {
    ref: n,
    elementType: Ol,
    externalForwardedProps: {
      ...q,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: m.backdrop
      },
      slotProps: {
        backdrop: ma(typeof v.backdrop == "function" ? v.backdrop(T) : v.backdrop, {
          invisible: !0
        })
      },
      container: J,
      open: g
    },
    ownerState: T,
    className: fe(B.root, d)
  }), [ue, ne] = Ce("paper", {
    ref: E,
    className: B.paper,
    elementType: _r,
    externalForwardedProps: q,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: P ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ S(Q, {
    ...ie,
    ...!Fn(Q) && {
      slots: _,
      slotProps: re,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ S(oe, {
      ...ee,
      timeout: M,
      children: /* @__PURE__ */ S(ue, {
        ...ne,
        children: c
      })
    })
  });
});
W.env.NODE_ENV !== "production" && (qr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Je,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: dr(i.oneOfType([Xt, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = vt(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (W.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
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
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Xt, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: yr,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: fr
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object
});
function Bl(e) {
  return ve("MuiMenu", e);
}
Ie("MuiMenu", ["root", "paper", "list"]);
const Vl = {
  vertical: "top",
  horizontal: "right"
}, Ml = {
  vertical: "top",
  horizontal: "left"
}, Pl = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Bl, t);
}, Nl = j(qr, {
  shouldForwardProp: (e) => De(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Wl = j(_r, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Xl = j(Jr, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Kr = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: a,
    className: s,
    disableAutoFocusItem: u = !1,
    MenuListProps: l = {},
    onClose: c,
    open: d,
    PaperProps: p = {},
    PopoverClasses: f,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: g,
      ...h
    } = {},
    variant: m = "selectedMenu",
    slots: v = {},
    slotProps: y = {},
    ...I
  } = r, x = oa(), A = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: u,
    MenuListProps: l,
    onEntering: g,
    PaperProps: p,
    transitionDuration: b,
    TransitionProps: h,
    variant: m
  }, w = Pl(A), R = o && !u && d, E = C.useRef(null), T = (M, q) => {
    E.current && E.current.adjustStyleForScrollbar(M, {
      direction: x ? "rtl" : "ltr"
    }), g && g(M, q);
  }, B = (M) => {
    M.key === "Tab" && (M.preventDefault(), c && c(M, "tabKeyDown"));
  };
  let V = -1;
  C.Children.map(a, (M, q) => {
    /* @__PURE__ */ C.isValidElement(M) && (W.env.NODE_ENV !== "production" && Dn.isFragment(M) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), M.props.disabled || (m === "selectedMenu" && M.props.selected || V === -1) && (V = q));
  });
  const F = {
    slots: v,
    slotProps: {
      list: l,
      transition: h,
      paper: p,
      ...y
    }
  }, k = ra({
    elementType: v.root,
    externalSlotProps: y.root,
    ownerState: A,
    className: [w.root, s]
  }), [P, O] = Ce("paper", {
    className: w.paper,
    elementType: Wl,
    externalForwardedProps: F,
    shouldForwardComponentProp: !0,
    ownerState: A
  }), [G, H] = Ce("list", {
    className: fe(w.list, l.className),
    elementType: Xl,
    shouldForwardComponentProp: !0,
    externalForwardedProps: F,
    getSlotProps: (M) => ({
      ...M,
      onKeyDown: (q) => {
        var oe;
        B(q), (oe = M.onKeyDown) == null || oe.call(M, q);
      }
    }),
    ownerState: A
  }), Y = typeof F.slotProps.transition == "function" ? F.slotProps.transition(A) : F.slotProps.transition;
  return /* @__PURE__ */ S(Nl, {
    onClose: c,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? Vl : Ml,
    slots: {
      root: v.root,
      paper: P,
      backdrop: v.backdrop,
      ...v.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: v.transition
      }
    },
    slotProps: {
      root: k,
      paper: O,
      backdrop: typeof y.backdrop == "function" ? y.backdrop(A) : y.backdrop,
      transition: {
        ...Y,
        onEntering: (...M) => {
          var q;
          T(...M), (q = Y == null ? void 0 : Y.onEntering) == null || q.call(Y, ...M);
        }
      }
    },
    open: d,
    ref: n,
    transitionDuration: b,
    ownerState: A,
    ...I,
    classes: f,
    children: /* @__PURE__ */ S(G, {
      actions: E,
      autoFocus: o && (V === -1 || u),
      autoFocusItem: R,
      variant: m,
      ...H,
      children: a
    })
  });
});
W.env.NODE_ENV !== "production" && (Kr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([Xt, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    list: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    list: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function kl(e) {
  return ve("MuiNativeSelect", e);
}
const Jn = Ie("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Ll = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: a,
    error: s
  } = e, u = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${we(n)}`, a && "iconOpen", r && "disabled"]
  };
  return be(u, kl, t);
}, ei = j("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Jn.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), Dl = j(ei, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: De,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Jn.multiple}`]: t.multiple
    }];
  }
})({}), ti = j("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${Jn.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), Hl = j(ti, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${we(n.variant)}`], n.open && t.iconOpen];
  }
})({}), ni = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: a,
    IconComponent: s,
    inputRef: u,
    variant: l = "standard",
    ...c
  } = t, d = {
    ...t,
    disabled: o,
    variant: l,
    error: a
  }, p = Ll(d);
  return /* @__PURE__ */ de(C.Fragment, {
    children: [/* @__PURE__ */ S(Dl, {
      ownerState: d,
      className: fe(p.select, r),
      disabled: o,
      ref: u || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ S(Hl, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
W.env.NODE_ENV !== "production" && (ni.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Je,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
function oi(e) {
  return ve("MuiSelect", e);
}
const mt = Ie("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var No;
const Zl = j(ei, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${mt.select}`]: t.select
      },
      {
        [`&.${mt.select}`]: t[n.variant]
      },
      {
        [`&.${mt.error}`]: t.error
      },
      {
        [`&.${mt.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${mt.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), zl = j(ti, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${we(n.variant)}`], n.open && t.iconOpen];
  }
})({}), jl = j("input", {
  shouldForwardProp: (e) => ia(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Wo(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Yl(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Jl = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: a,
    error: s
  } = e, u = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${we(n)}`, a && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return be(u, oi, t);
}, ri = /* @__PURE__ */ C.forwardRef(function(t, n) {
  var ro;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: a,
    autoWidth: s,
    children: u,
    className: l,
    defaultOpen: c,
    defaultValue: d,
    disabled: p,
    displayEmpty: f,
    error: b = !1,
    IconComponent: g,
    inputRef: h,
    labelId: m,
    MenuProps: v = {},
    multiple: y,
    name: I,
    onBlur: x,
    onChange: A,
    onClose: w,
    onFocus: R,
    onOpen: E,
    open: T,
    readOnly: B,
    renderValue: V,
    required: F,
    SelectDisplayProps: k = {},
    tabIndex: P,
    // catching `type` from Input which makes no sense for SelectInput
    type: O,
    value: G,
    variant: H = "standard",
    ...Y
  } = t, [M, q] = uo({
    controlled: G,
    default: d,
    name: "Select"
  }), [oe, ee] = uo({
    controlled: T,
    default: c,
    name: "Select"
  }), J = C.useRef(null), Q = C.useRef(null), [_, re] = C.useState(null), {
    current: ie
  } = C.useRef(T != null), [ue, ne] = C.useState(), Z = Ye(n, h), z = C.useCallback((L) => {
    Q.current = L, L && re(L);
  }, []), U = _ == null ? void 0 : _.parentNode;
  C.useImperativeHandle(Z, () => ({
    focus: () => {
      Q.current.focus();
    },
    node: J.current,
    value: M
  }), [M]), C.useEffect(() => {
    c && oe && _ && !ie && (ne(s ? null : U.clientWidth), Q.current.focus());
  }, [_, s]), C.useEffect(() => {
    a && Q.current.focus();
  }, [a]), C.useEffect(() => {
    if (!m)
      return;
    const L = Oe(Q.current).getElementById(m);
    if (L) {
      const K = () => {
        getSelection().isCollapsed && Q.current.focus();
      };
      return L.addEventListener("click", K), () => {
        L.removeEventListener("click", K);
      };
    }
  }, [m]);
  const se = (L, K) => {
    L ? E && E(K) : w && w(K), ie || (ne(s ? null : U.clientWidth), ee(L));
  }, $ = (L) => {
    L.button === 0 && (L.preventDefault(), Q.current.focus(), se(!0, L));
  }, ae = (L) => {
    se(!1, L);
  }, Se = C.Children.toArray(u), Be = (L) => {
    const K = Se.find((he) => he.props.value === L.target.value);
    K !== void 0 && (q(K.props.value), A && A(L, K));
  }, Re = (L) => (K) => {
    let he;
    if (K.currentTarget.hasAttribute("tabindex")) {
      if (y) {
        he = Array.isArray(M) ? M.slice() : [];
        const ot = M.indexOf(L.props.value);
        ot === -1 ? he.push(L.props.value) : he.splice(ot, 1);
      } else
        he = L.props.value;
      if (L.props.onClick && L.props.onClick(K), M !== he && (q(he), A)) {
        const ot = K.nativeEvent || K, io = new ot.constructor(ot.type, ot);
        Object.defineProperty(io, "target", {
          writable: !0,
          value: {
            value: he,
            name: I
          }
        }), A(io, L);
      }
      y || se(!1, K);
    }
  }, Ge = (L) => {
    B || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(L.key) && (L.preventDefault(), se(!0, L));
  }, Te = _ !== null && oe, ge = (L) => {
    !Te && x && (Object.defineProperty(L, "target", {
      writable: !0,
      value: {
        value: M,
        name: I
      }
    }), x(L));
  };
  delete Y["aria-invalid"];
  let Ve, He;
  const me = [];
  let et = !1, Ue = !1;
  (kt({
    value: M
  }) || f) && (V ? Ve = V(M) : et = !0);
  const At = Se.map((L) => {
    if (!/* @__PURE__ */ C.isValidElement(L))
      return null;
    W.env.NODE_ENV !== "production" && Dn.isFragment(L) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let K;
    if (y) {
      if (!Array.isArray(M))
        throw new Error(W.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : pr(2));
      K = M.some((he) => Wo(he, L.props.value)), K && et && me.push(L.props.children);
    } else
      K = Wo(M, L.props.value), K && et && (He = L.props.children);
    return K && (Ue = !0), /* @__PURE__ */ C.cloneElement(L, {
      "aria-selected": K ? "true" : "false",
      onClick: Re(L),
      onKeyUp: (he) => {
        he.key === " " && he.preventDefault(), L.props.onKeyUp && L.props.onKeyUp(he);
      },
      role: "option",
      selected: K,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": L.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  W.env.NODE_ENV !== "production" && C.useEffect(() => {
    if (!Ue && !y && M !== "") {
      const L = Se.map((K) => K.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${M}\` for the select ${I ? `(name="${I}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${L.filter((K) => K != null).map((K) => `\`${K}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ue, Se, y, I, M]), et && (y ? me.length === 0 ? Ve = null : Ve = me.reduce((L, K, he) => (L.push(K), he < me.length - 1 && L.push(", "), L), []) : Ve = He);
  let pt = ue;
  !s && ie && _ && (pt = U.clientWidth);
  let $e;
  typeof P < "u" ? $e = P : $e = p ? null : 0;
  const ft = k.id || (I ? `mui-component-select-${I}` : void 0), te = {
    ...t,
    variant: H,
    value: M,
    open: Te,
    error: b
  }, tt = Jl(te), nt = {
    ...v.PaperProps,
    ...(ro = v.slotProps) == null ? void 0 : ro.paper
  }, oo = br();
  return /* @__PURE__ */ de(C.Fragment, {
    children: [/* @__PURE__ */ S(Zl, {
      as: "div",
      ref: z,
      tabIndex: $e,
      role: "combobox",
      "aria-controls": Te ? oo : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Te ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [m, ft].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": F ? "true" : void 0,
      "aria-invalid": b ? "true" : void 0,
      onKeyDown: Ge,
      onMouseDown: p || B ? null : $,
      onBlur: ge,
      onFocus: R,
      ...k,
      ownerState: te,
      className: fe(k.className, tt.select, l),
      id: ft,
      children: Yl(Ve) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        No || (No = /* @__PURE__ */ S("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ve
    }), /* @__PURE__ */ S(jl, {
      "aria-invalid": b,
      value: Array.isArray(M) ? M.join(",") : M,
      name: I,
      ref: J,
      "aria-hidden": !0,
      onChange: Be,
      tabIndex: -1,
      disabled: p,
      className: tt.nativeInput,
      autoFocus: a,
      required: F,
      ...Y,
      ownerState: te
    }), /* @__PURE__ */ S(zl, {
      as: g,
      className: tt.icon,
      ownerState: te
    }), /* @__PURE__ */ S(Kr, {
      id: `menu-${I || ""}`,
      anchorEl: U,
      open: Te,
      onClose: ae,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...v,
      slotProps: {
        ...v.slotProps,
        list: {
          "aria-labelledby": m,
          role: "listbox",
          "aria-multiselectable": y ? "true" : void 0,
          disableListWrap: !0,
          id: oo,
          ...v.MenuListProps
        },
        paper: {
          ...nt,
          style: {
            minWidth: pt,
            ...nt != null ? nt.style : null
          }
        }
      },
      children: At
    })]
  });
});
W.env.NODE_ENV !== "production" && (ri.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Je,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * If `true`, the component is required.
   */
  required: i.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const Ul = Qt(/* @__PURE__ */ S("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), $l = (e) => {
  const {
    classes: t
  } = e, r = be({
    root: ["root"]
  }, oi, t);
  return {
    ...t,
    ...r
  };
}, Un = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => De(e) && e !== "variant",
  slot: "Root"
}, Ql = j(sn, Un)(""), _l = j(un, Un)(""), ql = j(ln, Un)(""), $n = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: a,
    classes: s = {},
    className: u,
    defaultOpen: l = !1,
    displayEmpty: c = !1,
    IconComponent: d = Ul,
    id: p,
    input: f,
    inputProps: b,
    label: g,
    labelId: h,
    MenuProps: m,
    multiple: v = !1,
    native: y = !1,
    onClose: I,
    onOpen: x,
    open: A,
    renderValue: w,
    SelectDisplayProps: R,
    variant: E = "outlined",
    ...T
  } = r, B = y ? ni : ri, V = dt(), F = ct({
    props: r,
    muiFormControl: V,
    states: ["variant", "error"]
  }), k = F.variant || E, P = {
    ...r,
    variant: k,
    classes: s
  }, O = $l(P), {
    root: G,
    ...H
  } = O, Y = f || {
    standard: /* @__PURE__ */ S(Ql, {
      ownerState: P
    }),
    outlined: /* @__PURE__ */ S(_l, {
      label: g,
      ownerState: P
    }),
    filled: /* @__PURE__ */ S(ql, {
      ownerState: P
    })
  }[k], M = Ye(n, Hn(Y));
  return /* @__PURE__ */ S(C.Fragment, {
    children: /* @__PURE__ */ C.cloneElement(Y, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: B,
      inputProps: {
        children: a,
        error: F.error,
        IconComponent: d,
        variant: k,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: v,
        ...y ? {
          id: p
        } : {
          autoWidth: o,
          defaultOpen: l,
          displayEmpty: c,
          labelId: h,
          MenuProps: m,
          onClose: I,
          onOpen: x,
          open: A,
          renderValue: w,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...b,
        classes: b ? Ln(H, b.classes) : H,
        ...f ? f.props.inputProps : {}
      },
      ...(v && y || c) && k === "outlined" ? {
        notched: !0
      } : {},
      ref: M,
      className: fe(Y.props.className, u, O.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!f && {
        variant: k
      },
      ...T
    })
  });
});
W.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
$n.muiName = "Select";
function Kl(e) {
  return ve("MuiTextField", e);
}
Ie("MuiTextField", ["root"]);
const eu = {
  standard: sn,
  filled: ln,
  outlined: un
}, tu = (e) => {
  const {
    classes: t
  } = e;
  return be({
    root: ["root"]
  }, Kl, t);
}, nu = j(zr, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ii = /* @__PURE__ */ C.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: a = !1,
    children: s,
    className: u,
    color: l = "primary",
    defaultValue: c,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: f,
    fullWidth: b = !1,
    helperText: g,
    id: h,
    InputLabelProps: m,
    inputProps: v,
    InputProps: y,
    inputRef: I,
    label: x,
    maxRows: A,
    minRows: w,
    multiline: R = !1,
    name: E,
    onBlur: T,
    onChange: B,
    onFocus: V,
    placeholder: F,
    required: k = !1,
    rows: P,
    select: O = !1,
    SelectProps: G,
    slots: H = {},
    slotProps: Y = {},
    type: M,
    value: q,
    variant: oe = "outlined",
    ...ee
  } = r, J = {
    ...r,
    autoFocus: a,
    color: l,
    disabled: d,
    error: p,
    fullWidth: b,
    multiline: R,
    required: k,
    select: O,
    variant: oe
  }, Q = tu(J);
  W.env.NODE_ENV !== "production" && O && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const _ = br(h), re = g && _ ? `${_}-helper-text` : void 0, ie = x && _ ? `${_}-label` : void 0, ue = eu[oe], ne = {
    slots: H,
    slotProps: {
      input: y,
      inputLabel: m,
      htmlInput: v,
      formHelperText: f,
      select: G,
      ...Y
    }
  }, Z = {}, z = ne.slotProps.inputLabel;
  oe === "outlined" && (z && typeof z.shrink < "u" && (Z.notched = z.shrink), Z.label = x), O && ((!G || !G.native) && (Z.id = void 0), Z["aria-describedby"] = void 0);
  const [U, se] = Ce("root", {
    elementType: nu,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...ne,
      ...ee
    },
    ownerState: J,
    className: fe(Q.root, u),
    ref: n,
    additionalProps: {
      disabled: d,
      error: p,
      fullWidth: b,
      required: k,
      color: l,
      variant: oe
    }
  }), [$, ae] = Ce("input", {
    elementType: ue,
    externalForwardedProps: ne,
    additionalProps: Z,
    ownerState: J
  }), [Se, Be] = Ce("inputLabel", {
    elementType: Zr,
    externalForwardedProps: ne,
    ownerState: J
  }), [Re, Ge] = Ce("htmlInput", {
    elementType: "input",
    externalForwardedProps: ne,
    ownerState: J
  }), [Te, ge] = Ce("formHelperText", {
    elementType: jr,
    externalForwardedProps: ne,
    ownerState: J
  }), [Ve, He] = Ce("select", {
    elementType: $n,
    externalForwardedProps: ne,
    ownerState: J
  }), me = /* @__PURE__ */ S($, {
    "aria-describedby": re,
    autoComplete: o,
    autoFocus: a,
    defaultValue: c,
    fullWidth: b,
    multiline: R,
    name: E,
    rows: P,
    maxRows: A,
    minRows: w,
    type: M,
    value: q,
    id: _,
    inputRef: I,
    onBlur: T,
    onChange: B,
    onFocus: V,
    placeholder: F,
    inputProps: Ge,
    slots: {
      input: H.htmlInput ? Re : void 0
    },
    ...ae
  });
  return /* @__PURE__ */ de(U, {
    ...se,
    children: [x != null && x !== "" && /* @__PURE__ */ S(Se, {
      htmlFor: _,
      id: ie,
      ...Be,
      children: x
    }), O ? /* @__PURE__ */ S(Ve, {
      "aria-describedby": re,
      id: _,
      labelId: ie,
      value: q,
      input: me,
      ...He,
      children: s
    }) : me, g && /* @__PURE__ */ S(Te, {
      id: re,
      ...ge,
      children: g
    })]
  });
});
W.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Je,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    formHelperText: i.oneOfType([i.func, i.object]),
    htmlInput: i.oneOfType([i.func, i.object]),
    input: i.oneOfType([i.func, i.object]),
    inputLabel: i.oneOfType([i.func, i.object]),
    select: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    formHelperText: i.elementType,
    htmlInput: i.elementType,
    input: i.elementType,
    inputLabel: i.elementType,
    root: i.elementType,
    select: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function Ke(e) {
  "@babel/helpers - typeof";
  return Ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ke(e);
}
function ou(e, t) {
  if (Ke(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ke(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ai(e) {
  var t = ou(e, "string");
  return Ke(t) == "symbol" ? t : t + "";
}
function It(e, t, n) {
  return (t = ai(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Xo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xo(Object(n), !0).forEach(function(r) {
      It(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ru(e) {
  if (Array.isArray(e)) return e;
}
function iu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, u = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = a.call(n)).done) && (u.push(r.value), u.length !== t); l = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return u;
  }
}
function On(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function si(e, t) {
  if (e) {
    if (typeof e == "string") return On(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? On(e, t) : void 0;
  }
}
function au() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xe(e, t) {
  return ru(e) || iu(e, t) || si(e, t) || au();
}
function We(e, t) {
  if (e == null) return {};
  var n, r, o = aa(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var su = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function li(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, a = e.defaultValue, s = a === void 0 ? null : a, u = e.inputValue, l = e.menuIsOpen, c = e.onChange, d = e.onInputChange, p = e.onMenuClose, f = e.onMenuOpen, b = e.value, g = We(e, su), h = Ee(u !== void 0 ? u : n), m = Xe(h, 2), v = m[0], y = m[1], I = Ee(l !== void 0 ? l : o), x = Xe(I, 2), A = x[0], w = x[1], R = Ee(b !== void 0 ? b : s), E = Xe(R, 2), T = E[0], B = E[1], V = ce(function(Y, M) {
    typeof c == "function" && c(Y, M), B(Y);
  }, [c]), F = ce(function(Y, M) {
    var q;
    typeof d == "function" && (q = d(Y, M)), y(q !== void 0 ? q : Y);
  }, [d]), k = ce(function() {
    typeof f == "function" && f(), w(!0);
  }, [f]), P = ce(function() {
    typeof p == "function" && p(), w(!1);
  }, [p]), O = u !== void 0 ? u : v, G = l !== void 0 ? l : A, H = b !== void 0 ? b : T;
  return N(N({}, g), {}, {
    inputValue: O,
    menuIsOpen: G,
    onChange: V,
    onInputChange: F,
    onMenuClose: P,
    onMenuOpen: k,
    value: H
  });
}
function lu(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ko(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ai(r.key), r);
  }
}
function uu(e, t, n) {
  return t && ko(e.prototype, t), n && ko(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function cu(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && sa(e, t);
}
function Dt(e) {
  return Dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Dt(e);
}
function ui() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ui = function() {
    return !!e;
  })();
}
function du(e, t) {
  if (t && (Ke(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return la(e);
}
function pu(e) {
  var t = ui();
  return function() {
    var n, r = Dt(e);
    if (t) {
      var o = Dt(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return du(this, n);
  };
}
function fu(e) {
  if (Array.isArray(e)) return On(e);
}
function bu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lt(e) {
  return fu(e) || bu(e) || si(e) || gu();
}
function mu(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const hu = Math.min, vu = Math.max, Ht = Math.round, Gt = Math.floor, Zt = (e) => ({
  x: e,
  y: e
});
function Iu(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function cn() {
  return typeof window < "u";
}
function ci(e) {
  return pi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function di(e) {
  var t;
  return (t = (pi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pi(e) {
  return cn() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function yu(e) {
  return cn() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Qn(e) {
  return cn() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function Lo(e) {
  return !cn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function fi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = _n(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Cu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xu(e) {
  return ["html", "body", "#document"].includes(ci(e));
}
function _n(e) {
  return Le(e).getComputedStyle(e);
}
function Au(e) {
  if (ci(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Lo(e) && e.host || // Fallback.
    di(e)
  );
  return Lo(t) ? t.host : t;
}
function bi(e) {
  const t = Au(e);
  return xu(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qn(t) && fi(t) ? t : bi(t);
}
function zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bi(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Le(o);
  if (a) {
    const u = Bn(s);
    return t.concat(s, s.visualViewport || [], fi(o) ? o : [], u && n ? zt(u) : []);
  }
  return t.concat(o, zt(o, [], n));
}
function Bn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Eu(e) {
  const t = _n(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, u = Ht(n) !== a || Ht(r) !== s;
  return u && (n = a, r = s), {
    width: n,
    height: r,
    $: u
  };
}
function qn(e) {
  return yu(e) ? e : e.contextElement;
}
function Do(e) {
  const t = qn(e);
  if (!Qn(t))
    return Zt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Eu(t);
  let s = (a ? Ht(n.width) : n.width) / r, u = (a ? Ht(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: s,
    y: u
  };
}
const wu = /* @__PURE__ */ Zt(0);
function Su(e) {
  const t = Le(e);
  return !Cu() || !t.visualViewport ? wu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ru(e, t, n) {
  return !1;
}
function Ho(e, t, n, r) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = qn(e);
  let s = Zt(1);
  t && (s = Do(e));
  const u = Ru() ? Su(a) : Zt(0);
  let l = (o.left + u.x) / s.x, c = (o.top + u.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (a) {
    const f = Le(a), b = r;
    let g = f, h = Bn(g);
    for (; h && r && b !== g; ) {
      const m = Do(h), v = h.getBoundingClientRect(), y = _n(h), I = v.left + (h.clientLeft + parseFloat(y.paddingLeft)) * m.x, x = v.top + (h.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, d *= m.x, p *= m.y, l += I, c += x, g = Le(h), h = Bn(g);
    }
  }
  return Iu({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function gi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Tu(e, t) {
  let n = null, r;
  const o = di(e);
  function a() {
    var u;
    clearTimeout(r), (u = n) == null || u.disconnect(), n = null;
  }
  function s(u, l) {
    u === void 0 && (u = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: p,
      width: f,
      height: b
    } = c;
    if (u || t(), !f || !b)
      return;
    const g = Gt(p), h = Gt(o.clientWidth - (d + f)), m = Gt(o.clientHeight - (p + b)), v = Gt(d), I = {
      rootMargin: -g + "px " + -h + "px " + -m + "px " + -v + "px",
      threshold: vu(0, hu(1, l)) || 1
    };
    let x = !0;
    function A(w) {
      const R = w[0].intersectionRatio;
      if (R !== l) {
        if (!x)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !gi(c, e.getBoundingClientRect()) && s(), x = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...I,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, I);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Gu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = qn(e), d = o || a ? [...c ? zt(c) : [], ...zt(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), a && v.addEventListener("resize", n);
  });
  const p = c && u ? Tu(c, n) : null;
  let f = -1, b = null;
  s && (b = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === c && b && (b.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var I;
      (I = b) == null || I.observe(t);
    })), n();
  }), c && !l && b.observe(c), b.observe(t));
  let g, h = l ? Ho(e) : null;
  l && m();
  function m() {
    const v = Ho(e);
    h && !gi(h, v) && n(), h = v, g = requestAnimationFrame(m);
  }
  return n(), () => {
    var v;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), p == null || p(), (v = b) == null || v.disconnect(), b = null, l && cancelAnimationFrame(g);
  };
}
var Vn = zi, Fu = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], jt = function() {
};
function Ou(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function Bu(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var a = [].concat(r);
  if (t && e)
    for (var s in t)
      t.hasOwnProperty(s) && t[s] && a.push("".concat(Ou(e, s)));
  return a.filter(function(u) {
    return u;
  }).map(function(u) {
    return String(u).trim();
  }).join(" ");
}
var Yt = function(t) {
  return Du(t) ? t.filter(Boolean) : Ke(t) === "object" && t !== null ? [t] : [];
}, mi = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = We(t, Fu);
  return N({}, n);
}, le = function(t, n, r) {
  var o = t.cx, a = t.getStyles, s = t.getClassNames, u = t.className;
  return {
    css: a(n, t),
    className: o(r ?? {}, s(n, t), u)
  };
};
function dn(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Vu(e) {
  return dn(e) ? window.innerHeight : e.clientHeight;
}
function hi(e) {
  return dn(e) ? window.pageYOffset : e.scrollTop;
}
function Jt(e, t) {
  if (dn(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function Mu(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function Pu(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function Ft(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : jt, o = hi(e), a = t - o, s = 10, u = 0;
  function l() {
    u += s;
    var c = Pu(u, o, a, n);
    Jt(e, c), u < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function Zo(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Jt(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Jt(e, Math.max(t.offsetTop - o, 0));
}
function Nu(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function zo() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Wu() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var vi = !1, Xu = {
  get passive() {
    return vi = !0;
  }
}, Ot = typeof window < "u" ? window : {};
Ot.addEventListener && Ot.removeEventListener && (Ot.addEventListener("p", jt, Xu), Ot.removeEventListener("p", jt, !1));
var ku = vi;
function Lu(e) {
  return e != null;
}
function Du(e) {
  return Array.isArray(e);
}
function yt(e, t, n) {
  return e ? t : n;
}
var Hu = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var a = Object.entries(t).filter(function(s) {
    var u = Xe(s, 1), l = u[0];
    return !r.includes(l);
  });
  return a.reduce(function(s, u) {
    var l = Xe(u, 2), c = l[0], d = l[1];
    return s[c] = d, s;
  }, {});
}, Zu = ["children", "innerProps"], zu = ["children", "innerProps"];
function ju(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, a = e.shouldScroll, s = e.isFixedPosition, u = e.controlHeight, l = Mu(n), c = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return c;
  var d = l.getBoundingClientRect(), p = d.height, f = n.getBoundingClientRect(), b = f.bottom, g = f.height, h = f.top, m = n.offsetParent.getBoundingClientRect(), v = m.top, y = s ? window.innerHeight : Vu(l), I = hi(l), x = parseInt(getComputedStyle(n).marginBottom, 10), A = parseInt(getComputedStyle(n).marginTop, 10), w = v - A, R = y - h, E = w + I, T = p - I - h, B = b - y + I + x, V = I + h - A, F = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (R >= g)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (T >= g && !s)
        return a && Ft(l, B, F), {
          placement: "bottom",
          maxHeight: t
        };
      if (!s && T >= r || s && R >= r) {
        a && Ft(l, B, F);
        var k = s ? R - x : T - x;
        return {
          placement: "bottom",
          maxHeight: k
        };
      }
      if (o === "auto" || s) {
        var P = t, O = s ? w : E;
        return O >= r && (P = Math.min(O - x - u, t)), {
          placement: "top",
          maxHeight: P
        };
      }
      if (o === "bottom")
        return a && Jt(l, B), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (w >= g)
        return {
          placement: "top",
          maxHeight: t
        };
      if (E >= g && !s)
        return a && Ft(l, V, F), {
          placement: "top",
          maxHeight: t
        };
      if (!s && E >= r || s && w >= r) {
        var G = t;
        return (!s && E >= r || s && w >= r) && (G = s ? w - A : E - A), a && Ft(l, V, F), {
          placement: "top",
          maxHeight: G
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return c;
}
function Yu(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Ii = function(t) {
  return t === "auto" ? "bottom" : t;
}, Ju = function(t, n) {
  var r, o = t.placement, a = t.theme, s = a.borderRadius, u = a.spacing, l = a.colors;
  return N((r = {
    label: "menu"
  }, It(r, Yu(o), "100%"), It(r, "position", "absolute"), It(r, "width", "100%"), It(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: s,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: u.menuGutter,
    marginTop: u.menuGutter
  });
}, yi = /* @__PURE__ */ Pn(null), Uu = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, s = t.menuPosition, u = t.menuShouldScrollIntoView, l = t.theme, c = Nn(yi) || {}, d = c.setPortalPlacement, p = pe(null), f = Ee(o), b = Xe(f, 2), g = b[0], h = b[1], m = Ee(null), v = Xe(m, 2), y = v[0], I = v[1], x = l.spacing.controlHeight;
  return Vn(function() {
    var A = p.current;
    if (A) {
      var w = s === "fixed", R = u && !w, E = ju({
        maxHeight: o,
        menuEl: A,
        minHeight: r,
        placement: a,
        shouldScroll: R,
        isFixedPosition: w,
        controlHeight: x
      });
      h(E.maxHeight), I(E.placement), d == null || d(E.placement);
    }
  }, [o, a, s, u, r, d, x]), n({
    ref: p,
    placerProps: N(N({}, t), {}, {
      placement: y || Ii(a),
      maxHeight: g
    })
  });
}, $u = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return X("div", D({}, le(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, Qu = $u, _u = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return N({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, qu = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, a = t.isMulti;
  return X("div", D({}, le(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, r), n);
}, Ci = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, a = r.colors;
  return N({
    textAlign: "center"
  }, n ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, Ku = Ci, ec = Ci, tc = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, a = We(t, Zu);
  return X("div", D({}, le(N(N({}, a), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, nc = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, a = We(t, zu);
  return X("div", D({}, le(N(N({}, a), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, oc = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, rc = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, a = t.innerProps, s = t.menuPlacement, u = t.menuPosition, l = pe(null), c = pe(null), d = Ee(Ii(s)), p = Xe(d, 2), f = p[0], b = p[1], g = Ae(function() {
    return {
      setPortalPlacement: b
    };
  }, []), h = Ee(null), m = Xe(h, 2), v = m[0], y = m[1], I = ce(function() {
    if (o) {
      var R = Nu(o), E = u === "fixed" ? 0 : window.pageYOffset, T = R[f] + E;
      (T !== (v == null ? void 0 : v.offset) || R.left !== (v == null ? void 0 : v.rect.left) || R.width !== (v == null ? void 0 : v.rect.width)) && y({
        offset: T,
        rect: R
      });
    }
  }, [o, u, f, v == null ? void 0 : v.offset, v == null ? void 0 : v.rect.left, v == null ? void 0 : v.rect.width]);
  Vn(function() {
    I();
  }, [I]);
  var x = ce(function() {
    typeof c.current == "function" && (c.current(), c.current = null), o && l.current && (c.current = Gu(o, l.current, I, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, I]);
  Vn(function() {
    x();
  }, [x]);
  var A = ce(function(R) {
    l.current = R, x();
  }, [x]);
  if (!n && u !== "fixed" || !v) return null;
  var w = X("div", D({
    ref: A
  }, le(N(N({}, t), {}, {
    offset: v.offset,
    position: u,
    rect: v.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), r);
  return X(yi.Provider, {
    value: g
  }, n ? /* @__PURE__ */ ba(w, n) : w);
}, ic = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, ac = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, a = t.isRtl;
  return X("div", D({}, le(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), r), n);
}, sc = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, a = t.hasValue, s = t.selectProps.controlShouldRenderValue;
  return N({
    alignItems: "center",
    display: o && a && s ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, lc = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, a = t.hasValue;
  return X("div", D({}, le(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": a
  }), r), n);
}, uc = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, cc = function(t) {
  var n = t.children, r = t.innerProps;
  return X("div", D({}, le(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, jo, dc = ["size"], pc = ["innerProps", "isRtl", "size"];
function fc() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var bc = W.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: fc
}, xi = function(t) {
  var n = t.size, r = We(t, dc);
  return X("svg", D({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: bc
  }, r));
}, Kn = function(t) {
  return X(xi, D({
    size: 20
  }, t), X("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Ai = function(t) {
  return X(xi, D({
    size: 20
  }, t), X("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Ei = function(t, n) {
  var r = t.isFocused, o = t.theme, a = o.spacing.baseUnit, s = o.colors;
  return N({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? s.neutral60 : s.neutral20,
    padding: a * 2,
    ":hover": {
      color: r ? s.neutral80 : s.neutral40
    }
  });
}, gc = Ei, mc = function(t) {
  var n = t.children, r = t.innerProps;
  return X("div", D({}, le(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || X(Ai, null));
}, hc = Ei, vc = function(t) {
  var n = t.children, r = t.innerProps;
  return X("div", D({}, le(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || X(Kn, null));
}, Ic = function(t, n) {
  var r = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, s = o.colors;
  return N({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? s.neutral10 : s.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, yc = function(t) {
  var n = t.innerProps;
  return X("span", D({}, n, le(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, Cc = ua(jo || (jo = mu([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), xc = function(t, n) {
  var r = t.isFocused, o = t.size, a = t.theme, s = a.colors, u = a.spacing.baseUnit;
  return N({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? s.neutral60 : s.neutral20,
    padding: u * 2
  });
}, vn = function(t) {
  var n = t.delay, r = t.offset;
  return X("span", {
    css: /* @__PURE__ */ gr({
      animation: "".concat(Cc, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, W.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", W.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, Ac = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, a = o === void 0 ? 4 : o, s = We(t, pc);
  return X("div", D({}, le(N(N({}, s), {}, {
    innerProps: n,
    isRtl: r,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), X(vn, {
    delay: 0,
    offset: r
  }), X(vn, {
    delay: 160,
    offset: !0
  }), X(vn, {
    delay: 320,
    offset: !r
  }));
}, Ec = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, a = t.theme, s = a.colors, u = a.borderRadius, l = a.spacing;
  return N({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? s.neutral5 : s.neutral0,
    borderColor: r ? s.neutral10 : o ? s.primary : s.neutral20,
    borderRadius: u,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(s.primary) : void 0,
    "&:hover": {
      borderColor: o ? s.primary : s.neutral30
    }
  });
}, wc = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, a = t.innerRef, s = t.innerProps, u = t.menuIsOpen;
  return X("div", D({
    ref: a
  }, le(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": u
  }), s, {
    "aria-disabled": r || void 0
  }), n);
}, Sc = wc, Rc = ["data"], Tc = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, Gc = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, a = t.getClassNames, s = t.Heading, u = t.headingProps, l = t.innerProps, c = t.label, d = t.theme, p = t.selectProps;
  return X("div", D({}, le(t, "group", {
    group: !0
  }), l), X(s, D({}, u, {
    selectProps: p,
    theme: d,
    getStyles: o,
    getClassNames: a,
    cx: r
  }), c), X("div", null, n));
}, Fc = function(t, n) {
  var r = t.theme, o = r.colors, a = r.spacing;
  return N({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Oc = function(t) {
  var n = mi(t);
  n.data;
  var r = We(n, Rc);
  return X("div", D({}, le(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, Bc = Gc, Vc = ["innerRef", "isDisabled", "isHidden", "inputClassName"], Mc = function(t, n) {
  var r = t.isDisabled, o = t.value, a = t.theme, s = a.spacing, u = a.colors;
  return N(N({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, Pc), n ? {} : {
    margin: s.baseUnit / 2,
    paddingBottom: s.baseUnit / 2,
    paddingTop: s.baseUnit / 2,
    color: u.neutral80
  });
}, wi = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, Pc = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": N({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, wi)
}, Nc = function(t) {
  return N({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, wi);
}, Wc = function(t) {
  var n = t.cx, r = t.value, o = mi(t), a = o.innerRef, s = o.isDisabled, u = o.isHidden, l = o.inputClassName, c = We(o, Vc);
  return X("div", D({}, le(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), X("input", D({
    className: n({
      input: !0
    }, l),
    ref: a,
    style: Nc(u),
    disabled: s
  }, c)));
}, Xc = Wc, kc = function(t, n) {
  var r = t.theme, o = r.spacing, a = r.borderRadius, s = r.colors;
  return N({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: s.neutral10,
    borderRadius: a / 2,
    margin: o.baseUnit / 2
  });
}, Lc = function(t, n) {
  var r = t.theme, o = r.borderRadius, a = r.colors, s = t.cropWithEllipsis;
  return N({
    overflow: "hidden",
    textOverflow: s || s === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, Dc = function(t, n) {
  var r = t.theme, o = r.spacing, a = r.borderRadius, s = r.colors, u = t.isFocused;
  return N({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: a / 2,
    backgroundColor: u ? s.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: s.dangerLight,
      color: s.danger
    }
  });
}, Si = function(t) {
  var n = t.children, r = t.innerProps;
  return X("div", r, n);
}, Hc = Si, Zc = Si;
function zc(e) {
  var t = e.children, n = e.innerProps;
  return X("div", D({
    role: "button"
  }, n), t || X(Kn, {
    size: 14
  }));
}
var jc = function(t) {
  var n = t.children, r = t.components, o = t.data, a = t.innerProps, s = t.isDisabled, u = t.removeProps, l = t.selectProps, c = r.Container, d = r.Label, p = r.Remove;
  return X(c, {
    data: o,
    innerProps: N(N({}, le(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": s
    })), a),
    selectProps: l
  }, X(d, {
    data: o,
    innerProps: N({}, le(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, n), X(p, {
    data: o,
    innerProps: N(N({}, le(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, u),
    selectProps: l
  }));
}, Yc = jc, Jc = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, a = t.isSelected, s = t.theme, u = s.spacing, l = s.colors;
  return N({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: a ? l.primary : o ? l.primary25 : "transparent",
    color: r ? l.neutral20 : a ? l.neutral0 : "inherit",
    padding: "".concat(u.baseUnit * 2, "px ").concat(u.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : a ? l.primary : l.primary50
    }
  });
}, Uc = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, a = t.isSelected, s = t.innerRef, u = t.innerProps;
  return X("div", D({}, le(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": a
  }), {
    ref: s,
    "aria-disabled": r
  }, u), n);
}, $c = Uc, Qc = function(t, n) {
  var r = t.theme, o = r.spacing, a = r.colors;
  return N({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, _c = function(t) {
  var n = t.children, r = t.innerProps;
  return X("div", D({}, le(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, qc = _c, Kc = function(t, n) {
  var r = t.isDisabled, o = t.theme, a = o.spacing, s = o.colors;
  return N({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? s.neutral40 : s.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, ed = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return X("div", D({}, le(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, td = ed, nd = {
  ClearIndicator: vc,
  Control: Sc,
  DropdownIndicator: mc,
  DownChevron: Ai,
  CrossIcon: Kn,
  Group: Bc,
  GroupHeading: Oc,
  IndicatorsContainer: cc,
  IndicatorSeparator: yc,
  Input: Xc,
  LoadingIndicator: Ac,
  Menu: Qu,
  MenuList: qu,
  MenuPortal: rc,
  LoadingMessage: nc,
  NoOptionsMessage: tc,
  MultiValue: Yc,
  MultiValueContainer: Hc,
  MultiValueLabel: Zc,
  MultiValueRemove: zc,
  Option: $c,
  Placeholder: qc,
  SelectContainer: ac,
  SingleValue: td,
  ValueContainer: lc
}, od = function(t) {
  return N(N({}, nd), t.components);
}, Yo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function rd(e, t) {
  return !!(e === t || Yo(e) && Yo(t));
}
function id(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!rd(e[n], t[n]))
      return !1;
  return !0;
}
function ad(e, t) {
  t === void 0 && (t = id);
  var n = null;
  function r() {
    for (var o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
function sd() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ld = W.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: sd
}, ud = function(t) {
  return X("span", D({
    css: ld
  }, t));
}, Jo = ud, cd = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.tabSelectsValue, a = t.context, s = t.isInitialFocus;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return s ? "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, a = t.labels, s = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return s ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, a = t.label, s = a === void 0 ? "" : a, u = t.selectValue, l = t.isDisabled, c = t.isSelected, d = t.isAppleDevice, p = function(h, m) {
      return h && h.length ? "".concat(h.indexOf(m) + 1, " of ").concat(h.length) : "";
    };
    if (n === "value" && u)
      return "value ".concat(s, " focused, ").concat(p(u, r), ".");
    if (n === "menu" && d) {
      var f = l ? " disabled" : "", b = "".concat(c ? " selected" : "").concat(f);
      return "".concat(s).concat(b, ", ").concat(p(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, dd = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, s = t.isFocused, u = t.selectValue, l = t.selectProps, c = t.id, d = t.isAppleDevice, p = l.ariaLiveMessages, f = l.getOptionLabel, b = l.inputValue, g = l.isMulti, h = l.isOptionDisabled, m = l.isSearchable, v = l.menuIsOpen, y = l.options, I = l.screenReaderStatus, x = l.tabSelectsValue, A = l.isLoading, w = l["aria-label"], R = l["aria-live"], E = Ae(function() {
    return N(N({}, cd), p || {});
  }, [p]), T = Ae(function() {
    var O = "";
    if (n && E.onChange) {
      var G = n.option, H = n.options, Y = n.removedValue, M = n.removedValues, q = n.value, oe = function(ue) {
        return Array.isArray(ue) ? null : ue;
      }, ee = Y || G || oe(q), J = ee ? f(ee) : "", Q = H || M || void 0, _ = Q ? Q.map(f) : [], re = N({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ee && h(ee, u),
        label: J,
        labels: _
      }, n);
      O = E.onChange(re);
    }
    return O;
  }, [n, E, h, u, f]), B = Ae(function() {
    var O = "", G = r || o, H = !!(r && u && u.includes(r));
    if (G && E.onFocus) {
      var Y = {
        focused: G,
        label: f(G),
        isDisabled: h(G, u),
        isSelected: H,
        options: a,
        context: G === r ? "menu" : "value",
        selectValue: u,
        isAppleDevice: d
      };
      O = E.onFocus(Y);
    }
    return O;
  }, [r, o, f, h, E, a, u, d]), V = Ae(function() {
    var O = "";
    if (v && y.length && !A && E.onFilter) {
      var G = I({
        count: a.length
      });
      O = E.onFilter({
        inputValue: b,
        resultsMessage: G
      });
    }
    return O;
  }, [a, b, v, E, y, I, A]), F = (n == null ? void 0 : n.action) === "initial-input-focus", k = Ae(function() {
    var O = "";
    if (E.guidance) {
      var G = o ? "value" : v ? "menu" : "input";
      O = E.guidance({
        "aria-label": w,
        context: G,
        isDisabled: r && h(r, u),
        isMulti: g,
        isSearchable: m,
        tabSelectsValue: x,
        isInitialFocus: F
      });
    }
    return O;
  }, [w, r, o, g, h, m, v, E, u, x, F]), P = X(Sn, null, X("span", {
    id: "aria-selection"
  }, T), X("span", {
    id: "aria-focused"
  }, B), X("span", {
    id: "aria-results"
  }, V), X("span", {
    id: "aria-guidance"
  }, k));
  return X(Sn, null, X(Jo, {
    id: c
  }, F && P), X(Jo, {
    "aria-live": R,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, s && !F && P));
}, pd = dd, Mn = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], fd = new RegExp("[" + Mn.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Ri = {};
for (var In = 0; In < Mn.length; In++)
  for (var yn = Mn[In], Cn = 0; Cn < yn.letters.length; Cn++)
    Ri[yn.letters[Cn]] = yn.base;
var Ti = function(t) {
  return t.replace(fd, function(n) {
    return Ri[n];
  });
}, bd = ad(Ti), Uo = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, gd = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, md = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var o = N({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: gd,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, s = o.ignoreAccents, u = o.stringify, l = o.trim, c = o.matchFrom, d = l ? Uo(r) : r, p = l ? Uo(u(n)) : u(n);
    return a && (d = d.toLowerCase(), p = p.toLowerCase()), s && (d = bd(d), p = Ti(p)), c === "start" ? p.substr(0, d.length) === d : p.indexOf(d) > -1;
  };
}, hd = ["innerRef"];
function vd(e) {
  var t = e.innerRef, n = We(e, hd), r = Hu(n, "onExited", "in", "enter", "exit", "appear");
  return X("input", D({
    ref: t
  }, r, {
    css: /* @__PURE__ */ gr({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, W.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", W.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var Id = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function yd(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, s = pe(!1), u = pe(!1), l = pe(0), c = pe(null), d = ce(function(m, v) {
    if (c.current !== null) {
      var y = c.current, I = y.scrollTop, x = y.scrollHeight, A = y.clientHeight, w = c.current, R = v > 0, E = x - A - I, T = !1;
      E > v && s.current && (r && r(m), s.current = !1), R && u.current && (a && a(m), u.current = !1), R && v > E ? (n && !s.current && n(m), w.scrollTop = x, T = !0, s.current = !0) : !R && -v > I && (o && !u.current && o(m), w.scrollTop = 0, T = !0, u.current = !0), T && Id(m);
    }
  }, [n, r, o, a]), p = ce(function(m) {
    d(m, m.deltaY);
  }, [d]), f = ce(function(m) {
    l.current = m.changedTouches[0].clientY;
  }, []), b = ce(function(m) {
    var v = l.current - m.changedTouches[0].clientY;
    d(m, v);
  }, [d]), g = ce(function(m) {
    if (m) {
      var v = ku ? {
        passive: !1
      } : !1;
      m.addEventListener("wheel", p, v), m.addEventListener("touchstart", f, v), m.addEventListener("touchmove", b, v);
    }
  }, [b, f, p]), h = ce(function(m) {
    m && (m.removeEventListener("wheel", p, !1), m.removeEventListener("touchstart", f, !1), m.removeEventListener("touchmove", b, !1));
  }, [b, f, p]);
  return Ne(function() {
    if (t) {
      var m = c.current;
      return g(m), function() {
        h(m);
      };
    }
  }, [t, g, h]), function(m) {
    c.current = m;
  };
}
var $o = ["boxSizing", "height", "overflow", "paddingRight", "position"], Qo = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function _o(e) {
  e.cancelable && e.preventDefault();
}
function qo(e) {
  e.stopPropagation();
}
function Ko() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function er() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var tr = !!(typeof window < "u" && window.document && window.document.createElement), ht = 0, at = {
  capture: !1,
  passive: !1
};
function Cd(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = pe({}), a = pe(null), s = ce(function(l) {
    if (tr) {
      var c = document.body, d = c && c.style;
      if (r && $o.forEach(function(g) {
        var h = d && d[g];
        o.current[g] = h;
      }), r && ht < 1) {
        var p = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, b = window.innerWidth - f + p || 0;
        Object.keys(Qo).forEach(function(g) {
          var h = Qo[g];
          d && (d[g] = h);
        }), d && (d.paddingRight = "".concat(b, "px"));
      }
      c && er() && (c.addEventListener("touchmove", _o, at), l && (l.addEventListener("touchstart", Ko, at), l.addEventListener("touchmove", qo, at))), ht += 1;
    }
  }, [r]), u = ce(function(l) {
    if (tr) {
      var c = document.body, d = c && c.style;
      ht = Math.max(ht - 1, 0), r && ht < 1 && $o.forEach(function(p) {
        var f = o.current[p];
        d && (d[p] = f);
      }), c && er() && (c.removeEventListener("touchmove", _o, at), l && (l.removeEventListener("touchstart", Ko, at), l.removeEventListener("touchmove", qo, at)));
    }
  }, [r]);
  return Ne(function() {
    if (t) {
      var l = a.current;
      return s(l), function() {
        u(l);
      };
    }
  }, [t, s, u]), function(l) {
    a.current = l;
  };
}
function xd() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ad = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, Ed = W.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: xd
};
function wd(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, a = e.onBottomArrive, s = e.onBottomLeave, u = e.onTopArrive, l = e.onTopLeave, c = yd({
    isEnabled: o,
    onBottomArrive: a,
    onBottomLeave: s,
    onTopArrive: u,
    onTopLeave: l
  }), d = Cd({
    isEnabled: n
  }), p = function(b) {
    c(b), d(b);
  };
  return X(Sn, null, n && X("div", {
    onClick: Ad,
    css: Ed
  }), t(p));
}
function Sd() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Rd = W.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Sd
}, Td = function(t) {
  var n = t.name, r = t.onFocus;
  return X("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: Rd,
    value: "",
    onChange: function() {
    }
  });
}, Gd = Td;
function eo(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Fd() {
  return eo(/^iPhone/i);
}
function Gi() {
  return eo(/^Mac/i);
}
function Od() {
  return eo(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Gi() && navigator.maxTouchPoints > 1;
}
function Bd() {
  return Fd() || Od();
}
function Vd() {
  return Gi() || Bd();
}
var Md = function(t) {
  return t.label;
}, Fi = function(t) {
  return t.label;
}, Oi = function(t) {
  return t.value;
}, Pd = function(t) {
  return !!t.isDisabled;
}, Nd = {
  clearIndicator: hc,
  container: ic,
  control: Ec,
  dropdownIndicator: gc,
  group: Tc,
  groupHeading: Fc,
  indicatorsContainer: uc,
  indicatorSeparator: Ic,
  input: Mc,
  loadingIndicator: xc,
  loadingMessage: ec,
  menu: Ju,
  menuList: _u,
  menuPortal: oc,
  multiValue: kc,
  multiValueLabel: Lc,
  multiValueRemove: Dc,
  noOptionsMessage: Ku,
  option: Jc,
  placeholder: Qc,
  singleValue: Kc,
  valueContainer: sc
}, Wd = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, Xd = 4, Bi = 4, kd = 38, Ld = Bi * 2, Dd = {
  baseUnit: Bi,
  controlHeight: kd,
  menuGutter: Ld
}, xn = {
  borderRadius: Xd,
  colors: Wd,
  spacing: Dd
}, Hd = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: zo(),
  captureMenuScroll: !zo(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: md(),
  formatGroupLabel: Md,
  getOptionLabel: Fi,
  getOptionValue: Oi,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Pd,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Wu(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function nr(e, t, n, r) {
  var o = Pi(e, t, n), a = Ni(e, t, n), s = Mi(e, t), u = Ut(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: a,
    label: s,
    value: u,
    index: r
  };
}
function Pt(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(s, u) {
        return nr(e, s, t, u);
      }).filter(function(s) {
        return rr(e, s);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var a = nr(e, n, t, r);
    return rr(e, a) ? a : void 0;
  }).filter(Lu);
}
function Vi(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, lt(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function or(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, lt(r.options.map(function(o) {
      return {
        data: o.data,
        id: "".concat(t, "-").concat(r.index, "-").concat(o.index)
      };
    }))) : n.push({
      data: r.data,
      id: "".concat(t, "-").concat(r.index)
    }), n;
  }, []);
}
function Zd(e, t) {
  return Vi(Pt(e, t));
}
function rr(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, a = t.isSelected, s = t.label, u = t.value;
  return (!Xi(e) || !a) && Wi(e, {
    label: s,
    value: u,
    data: o
  }, r);
}
function zd(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var a = t.indexOf(n);
    if (a > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function jd(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var An = function(t, n) {
  var r, o = (r = t.find(function(a) {
    return a.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return o || null;
}, Mi = function(t, n) {
  return t.getOptionLabel(n);
}, Ut = function(t, n) {
  return t.getOptionValue(n);
};
function Pi(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function Ni(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Ut(e, t);
  return n.some(function(o) {
    return Ut(e, o) === r;
  });
}
function Wi(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var Xi = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, Yd = 1, to = /* @__PURE__ */ function(e) {
  cu(n, e);
  var t = pu(n);
  function n(r) {
    var o;
    if (lu(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.isAppleDevice = Vd(), o.controlRef = null, o.getControlRef = function(l) {
      o.controlRef = l;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(l) {
      o.focusedOptionRef = l;
    }, o.menuListRef = null, o.getMenuListRef = function(l) {
      o.menuListRef = l;
    }, o.inputRef = null, o.getInputRef = function(l) {
      o.inputRef = l;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(l, c) {
      var d = o.props, p = d.onChange, f = d.name;
      c.name = f, o.ariaOnChange(l, c), p(l, c);
    }, o.setValue = function(l, c, d) {
      var p = o.props, f = p.closeMenuOnSelect, b = p.isMulti, g = p.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: g
      }), f && (o.setState({
        inputIsHiddenAfterUpdate: !b
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(l, {
        action: c,
        option: d
      });
    }, o.selectOption = function(l) {
      var c = o.props, d = c.blurInputOnSelect, p = c.isMulti, f = c.name, b = o.state.selectValue, g = p && o.isOptionSelected(l, b), h = o.isOptionDisabled(l, b);
      if (g) {
        var m = o.getOptionValue(l);
        o.setValue(b.filter(function(v) {
          return o.getOptionValue(v) !== m;
        }), "deselect-option", l);
      } else if (!h)
        p ? o.setValue([].concat(lt(b), [l]), "select-option", l) : o.setValue(l, "select-option");
      else {
        o.ariaOnChange(l, {
          action: "select-option",
          option: l,
          name: f
        });
        return;
      }
      d && o.blurInput();
    }, o.removeValue = function(l) {
      var c = o.props.isMulti, d = o.state.selectValue, p = o.getOptionValue(l), f = d.filter(function(g) {
        return o.getOptionValue(g) !== p;
      }), b = yt(c, f, f[0] || null);
      o.onChange(b, {
        action: "remove-value",
        removedValue: l
      }), o.focusInput();
    }, o.clearValue = function() {
      var l = o.state.selectValue;
      o.onChange(yt(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: l
      });
    }, o.popValue = function() {
      var l = o.props.isMulti, c = o.state.selectValue, d = c[c.length - 1], p = c.slice(0, c.length - 1), f = yt(l, p, p[0] || null);
      d && o.onChange(f, {
        action: "pop-value",
        removedValue: d
      });
    }, o.getFocusedOptionId = function(l) {
      return An(o.state.focusableOptionsWithIds, l);
    }, o.getFocusableOptionsWithIds = function() {
      return or(Pt(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var l = arguments.length, c = new Array(l), d = 0; d < l; d++)
        c[d] = arguments[d];
      return Bu.apply(void 0, [o.props.classNamePrefix].concat(c));
    }, o.getOptionLabel = function(l) {
      return Mi(o.props, l);
    }, o.getOptionValue = function(l) {
      return Ut(o.props, l);
    }, o.getStyles = function(l, c) {
      var d = o.props.unstyled, p = Nd[l](c, d);
      p.boxSizing = "border-box";
      var f = o.props.styles[l];
      return f ? f(p, c) : p;
    }, o.getClassNames = function(l, c) {
      var d, p;
      return (d = (p = o.props.classNames)[l]) === null || d === void 0 ? void 0 : d.call(p, c);
    }, o.getElementId = function(l) {
      return "".concat(o.state.instancePrefix, "-").concat(l);
    }, o.getComponents = function() {
      return od(o.props);
    }, o.buildCategorizedOptions = function() {
      return Pt(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return Vi(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(l, c) {
      o.setState({
        ariaSelection: N({
          value: l
        }, c)
      });
    }, o.onMenuMouseDown = function(l) {
      l.button === 0 && (l.stopPropagation(), l.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(l) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(l) {
      if (!l.defaultPrevented) {
        var c = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && o.onMenuClose() : c && o.openMenu("first") : (c && (o.openAfterFocus = !0), o.focusInput()), l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && l.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(l) {
      if (!(l && l.type === "mousedown" && l.button !== 0) && !o.props.isDisabled) {
        var c = o.props, d = c.isMulti, p = c.menuIsOpen;
        o.focusInput(), p ? (o.setState({
          inputIsHiddenAfterUpdate: !d
        }), o.onMenuClose()) : o.openMenu("first"), l.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(l) {
      l && l.type === "mousedown" && l.button !== 0 || (o.clearValue(), l.preventDefault(), o.openAfterFocus = !1, l.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(l) {
      typeof o.props.closeMenuOnScroll == "boolean" ? l.target instanceof HTMLElement && dn(l.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(l) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(l) {
      var c = l.touches, d = c && c.item(0);
      d && (o.initialTouchX = d.clientX, o.initialTouchY = d.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(l) {
      var c = l.touches, d = c && c.item(0);
      if (d) {
        var p = Math.abs(d.clientX - o.initialTouchX), f = Math.abs(d.clientY - o.initialTouchY), b = 5;
        o.userIsDragging = p > b || f > b;
      }
    }, o.onTouchEnd = function(l) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(l.target) && o.menuListRef && !o.menuListRef.contains(l.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(l) {
      o.userIsDragging || o.onControlMouseDown(l);
    }, o.onClearIndicatorTouchEnd = function(l) {
      o.userIsDragging || o.onClearIndicatorMouseDown(l);
    }, o.onDropdownIndicatorTouchEnd = function(l) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(l);
    }, o.handleInputChange = function(l) {
      var c = o.props.inputValue, d = l.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(d, {
        action: "input-change",
        prevInputValue: c
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(l) {
      o.props.onFocus && o.props.onFocus(l), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(l) {
      var c = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(l), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: c
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(l) {
      if (!(o.blockOptionHover || o.state.focusedOption === l)) {
        var c = o.getFocusableOptions(), d = c.indexOf(l);
        o.setState({
          focusedOption: l,
          focusedOptionId: d > -1 ? o.getFocusedOptionId(l) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return Xi(o.props);
    }, o.onValueInputFocus = function(l) {
      l.preventDefault(), l.stopPropagation(), o.focus();
    }, o.onKeyDown = function(l) {
      var c = o.props, d = c.isMulti, p = c.backspaceRemovesValue, f = c.escapeClearsValue, b = c.inputValue, g = c.isClearable, h = c.isDisabled, m = c.menuIsOpen, v = c.onKeyDown, y = c.tabSelectsValue, I = c.openMenuOnFocus, x = o.state, A = x.focusedOption, w = x.focusedValue, R = x.selectValue;
      if (!h && !(typeof v == "function" && (v(l), l.defaultPrevented))) {
        switch (o.blockOptionHover = !0, l.key) {
          case "ArrowLeft":
            if (!d || b) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!d || b) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (w)
              o.removeValue(w);
            else {
              if (!p) return;
              d ? o.popValue() : g && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || l.shiftKey || !m || !y || !A || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            I && o.isOptionSelected(A, R))
              return;
            o.selectOption(A);
            break;
          case "Enter":
            if (l.keyCode === 229)
              break;
            if (m) {
              if (!A || o.isComposing) return;
              o.selectOption(A);
              break;
            }
            return;
          case "Escape":
            m ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), o.onMenuClose()) : g && f && o.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!m) {
              o.openMenu("first");
              break;
            }
            if (!A) return;
            o.selectOption(A);
            break;
          case "ArrowUp":
            m ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            m ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!m) return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!m) return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!m) return;
            o.focusOption("first");
            break;
          case "End":
            if (!m) return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        l.preventDefault();
      }
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++Yd), o.state.selectValue = Yt(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var a = o.getFocusableOptionsWithIds(), s = o.buildFocusableOptions(), u = s.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = a, o.state.focusedOption = s[u], o.state.focusedOptionId = An(a, s[u]);
    }
    return o;
  }
  return uu(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Zo(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var a = this.props, s = a.isDisabled, u = a.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !s && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && u && !o.menuIsOpen) && this.focusInput(), l && s && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !s && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Zo(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, a) {
      this.props.onInputChange(o, a);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var a = this, s = this.state, u = s.selectValue, l = s.isFocused, c = this.buildFocusableOptions(), d = o === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var p = c.indexOf(u[0]);
        p > -1 && (d = p);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[d],
        focusedOptionId: this.getFocusedOptionId(c[d])
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var a = this.state, s = a.selectValue, u = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = s.indexOf(u);
        u || (l = -1);
        var c = s.length - 1, d = -1;
        if (s.length) {
          switch (o) {
            case "previous":
              l === 0 ? d = 0 : l === -1 ? d = c : d = l - 1;
              break;
            case "next":
              l > -1 && l < c && (d = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: d !== -1,
            focusedValue: s[d]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, s = this.state.focusedOption, u = this.getFocusableOptions();
      if (u.length) {
        var l = 0, c = u.indexOf(s);
        s || (c = -1), o === "up" ? l = c > 0 ? c - 1 : u.length - 1 : o === "down" ? l = (c + 1) % u.length : o === "pageup" ? (l = c - a, l < 0 && (l = 0)) : o === "pagedown" ? (l = c + a, l > u.length - 1 && (l = u.length - 1)) : o === "last" && (l = u.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: u[l],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(u[l])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(xn) : N(N({}, xn), this.props.theme) : xn;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, a = this.cx, s = this.getStyles, u = this.getClassNames, l = this.getValue, c = this.selectOption, d = this.setValue, p = this.props, f = p.isMulti, b = p.isRtl, g = p.options, h = this.hasValue();
      return {
        clearValue: o,
        cx: a,
        getStyles: s,
        getClassNames: u,
        getValue: l,
        hasValue: h,
        isMulti: f,
        isRtl: b,
        options: g,
        selectOption: c,
        selectProps: p,
        setValue: d,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, a = o.isClearable, s = o.isMulti;
      return a === void 0 ? s : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, a) {
      return Pi(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return Ni(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return Wi(this.props, o, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var s = this.props.inputValue, u = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: a,
          inputValue: s,
          selectValue: u
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, a = o.isDisabled, s = o.isSearchable, u = o.inputId, l = o.inputValue, c = o.tabIndex, d = o.form, p = o.menuIsOpen, f = o.required, b = this.getComponents(), g = b.Input, h = this.state, m = h.inputIsHidden, v = h.ariaSelection, y = this.commonProps, I = u || this.getElementId("input"), x = N(N(N({
          "aria-autocomplete": "list",
          "aria-expanded": p,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, p && {
          "aria-controls": this.getElementId("listbox")
        }), !s && {
          "aria-readonly": !0
        }), this.hasValue() ? (v == null ? void 0 : v.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return s ? /* @__PURE__ */ C.createElement(g, D({}, y, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: I,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: m,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: d,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ C.createElement(vd, D({
          id: I,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: jt,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: c,
          inputMode: "none",
          form: d,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, a = this.getComponents(), s = a.MultiValue, u = a.MultiValueContainer, l = a.MultiValueLabel, c = a.MultiValueRemove, d = a.SingleValue, p = a.Placeholder, f = this.commonProps, b = this.props, g = b.controlShouldRenderValue, h = b.isDisabled, m = b.isMulti, v = b.inputValue, y = b.placeholder, I = this.state, x = I.selectValue, A = I.focusedValue, w = I.isFocused;
      if (!this.hasValue() || !g)
        return v ? null : /* @__PURE__ */ C.createElement(p, D({}, f, {
          key: "placeholder",
          isDisabled: h,
          isFocused: w,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), y);
      if (m)
        return x.map(function(E, T) {
          var B = E === A, V = "".concat(o.getOptionLabel(E), "-").concat(o.getOptionValue(E));
          return /* @__PURE__ */ C.createElement(s, D({}, f, {
            components: {
              Container: u,
              Label: l,
              Remove: c
            },
            isFocused: B,
            isDisabled: h,
            key: V,
            index: T,
            removeProps: {
              onClick: function() {
                return o.removeValue(E);
              },
              onTouchEnd: function() {
                return o.removeValue(E);
              },
              onMouseDown: function(k) {
                k.preventDefault();
              }
            },
            data: E
          }), o.formatOptionLabel(E, "value"));
        });
      if (v)
        return null;
      var R = x[0];
      return /* @__PURE__ */ C.createElement(d, D({}, f, {
        data: R,
        isDisabled: h
      }), this.formatOptionLabel(R, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), a = o.ClearIndicator, s = this.commonProps, u = this.props, l = u.isDisabled, c = u.isLoading, d = this.state.isFocused;
      if (!this.isClearable() || !a || l || !this.hasValue() || c)
        return null;
      var p = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(a, D({}, s, {
        innerProps: p,
        isFocused: d
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), a = o.LoadingIndicator, s = this.commonProps, u = this.props, l = u.isDisabled, c = u.isLoading, d = this.state.isFocused;
      if (!a || !c) return null;
      var p = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(a, D({}, s, {
        innerProps: p,
        isDisabled: l,
        isFocused: d
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator, s = o.IndicatorSeparator;
      if (!a || !s) return null;
      var u = this.commonProps, l = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ C.createElement(s, D({}, u, {
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator;
      if (!a) return null;
      var s = this.commonProps, u = this.props.isDisabled, l = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ C.createElement(a, D({}, s, {
        innerProps: c,
        isDisabled: u,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), s = a.Group, u = a.GroupHeading, l = a.Menu, c = a.MenuList, d = a.MenuPortal, p = a.LoadingMessage, f = a.NoOptionsMessage, b = a.Option, g = this.commonProps, h = this.state.focusedOption, m = this.props, v = m.captureMenuScroll, y = m.inputValue, I = m.isLoading, x = m.loadingMessage, A = m.minMenuHeight, w = m.maxMenuHeight, R = m.menuIsOpen, E = m.menuPlacement, T = m.menuPosition, B = m.menuPortalTarget, V = m.menuShouldBlockScroll, F = m.menuShouldScrollIntoView, k = m.noOptionsMessage, P = m.onMenuScrollToTop, O = m.onMenuScrollToBottom;
      if (!R) return null;
      var G = function(J, Q) {
        var _ = J.type, re = J.data, ie = J.isDisabled, ue = J.isSelected, ne = J.label, Z = J.value, z = h === re, U = ie ? void 0 : function() {
          return o.onOptionHover(re);
        }, se = ie ? void 0 : function() {
          return o.selectOption(re);
        }, $ = "".concat(o.getElementId("option"), "-").concat(Q), ae = {
          id: $,
          onClick: se,
          onMouseMove: U,
          onMouseOver: U,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : ue
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ C.createElement(b, D({}, g, {
          innerProps: ae,
          data: re,
          isDisabled: ie,
          isSelected: ue,
          key: $,
          label: ne,
          type: _,
          value: Z,
          isFocused: z,
          innerRef: z ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(J.data, "menu"));
      }, H;
      if (this.hasOptions())
        H = this.getCategorizedOptions().map(function(ee) {
          if (ee.type === "group") {
            var J = ee.data, Q = ee.options, _ = ee.index, re = "".concat(o.getElementId("group"), "-").concat(_), ie = "".concat(re, "-heading");
            return /* @__PURE__ */ C.createElement(s, D({}, g, {
              key: re,
              data: J,
              options: Q,
              Heading: u,
              headingProps: {
                id: ie,
                data: ee.data
              },
              label: o.formatGroupLabel(ee.data)
            }), ee.options.map(function(ue) {
              return G(ue, "".concat(_, "-").concat(ue.index));
            }));
          } else if (ee.type === "option")
            return G(ee, "".concat(ee.index));
        });
      else if (I) {
        var Y = x({
          inputValue: y
        });
        if (Y === null) return null;
        H = /* @__PURE__ */ C.createElement(p, g, Y);
      } else {
        var M = k({
          inputValue: y
        });
        if (M === null) return null;
        H = /* @__PURE__ */ C.createElement(f, g, M);
      }
      var q = {
        minMenuHeight: A,
        maxMenuHeight: w,
        menuPlacement: E,
        menuPosition: T,
        menuShouldScrollIntoView: F
      }, oe = /* @__PURE__ */ C.createElement(Uu, D({}, g, q), function(ee) {
        var J = ee.ref, Q = ee.placerProps, _ = Q.placement, re = Q.maxHeight;
        return /* @__PURE__ */ C.createElement(l, D({}, g, q, {
          innerRef: J,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: I,
          placement: _
        }), /* @__PURE__ */ C.createElement(wd, {
          captureEnabled: v,
          onTopArrive: P,
          onBottomArrive: O,
          lockEnabled: V
        }, function(ie) {
          return /* @__PURE__ */ C.createElement(c, D({}, g, {
            innerRef: function(ne) {
              o.getMenuListRef(ne), ie(ne);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": g.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: I,
            maxHeight: re,
            focusedOption: h
          }), H);
        }));
      });
      return B || T === "fixed" ? /* @__PURE__ */ C.createElement(d, D({}, g, {
        appendTo: B,
        controlElement: this.controlRef,
        menuPlacement: E,
        menuPosition: T
      }), oe) : oe;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, s = a.delimiter, u = a.isDisabled, l = a.isMulti, c = a.name, d = a.required, p = this.state.selectValue;
      if (d && !this.hasValue() && !u)
        return /* @__PURE__ */ C.createElement(Gd, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || u))
        if (l)
          if (s) {
            var f = p.map(function(h) {
              return o.getOptionValue(h);
            }).join(s);
            return /* @__PURE__ */ C.createElement("input", {
              name: c,
              type: "hidden",
              value: f
            });
          } else {
            var b = p.length > 0 ? p.map(function(h, m) {
              return /* @__PURE__ */ C.createElement("input", {
                key: "i-".concat(m),
                name: c,
                type: "hidden",
                value: o.getOptionValue(h)
              });
            }) : /* @__PURE__ */ C.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ C.createElement("div", null, b);
          }
        else {
          var g = p[0] ? this.getOptionValue(p[0]) : "";
          return /* @__PURE__ */ C.createElement("input", {
            name: c,
            type: "hidden",
            value: g
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, a = this.state, s = a.ariaSelection, u = a.focusedOption, l = a.focusedValue, c = a.isFocused, d = a.selectValue, p = this.getFocusableOptions();
      return /* @__PURE__ */ C.createElement(pd, D({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: s,
        focusedOption: u,
        focusedValue: l,
        isFocused: c,
        selectValue: d,
        focusableOptions: p,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), a = o.Control, s = o.IndicatorsContainer, u = o.SelectContainer, l = o.ValueContainer, c = this.props, d = c.className, p = c.id, f = c.isDisabled, b = c.menuIsOpen, g = this.state.isFocused, h = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ C.createElement(u, D({}, h, {
        className: d,
        innerProps: {
          id: p,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: g
      }), this.renderLiveRegion(), /* @__PURE__ */ C.createElement(a, D({}, h, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: g,
        menuIsOpen: b
      }), /* @__PURE__ */ C.createElement(l, D({}, h, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ C.createElement(s, D({}, h, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var s = a.prevProps, u = a.clearFocusValueOnUpdate, l = a.inputIsHiddenAfterUpdate, c = a.ariaSelection, d = a.isFocused, p = a.prevWasFocused, f = a.instancePrefix, b = o.options, g = o.value, h = o.menuIsOpen, m = o.inputValue, v = o.isMulti, y = Yt(g), I = {};
      if (s && (g !== s.value || b !== s.options || h !== s.menuIsOpen || m !== s.inputValue)) {
        var x = h ? Zd(o, y) : [], A = h ? or(Pt(o, y), "".concat(f, "-option")) : [], w = u ? zd(a, y) : null, R = jd(a, x), E = An(A, R);
        I = {
          selectValue: y,
          focusedOption: R,
          focusedOptionId: E,
          focusableOptionsWithIds: A,
          focusedValue: w,
          clearFocusValueOnUpdate: !1
        };
      }
      var T = l != null && o !== s ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, B = c, V = d && p;
      return d && !V && (B = {
        value: yt(v, y, y[0] || null),
        options: y,
        action: "initial-input-focus"
      }, V = !p), (c == null ? void 0 : c.action) === "initial-input-focus" && (B = null), N(N(N({}, I), T), {}, {
        prevProps: o,
        ariaSelection: B,
        prevWasFocused: V
      });
    }
  }]), n;
}(ji);
to.defaultProps = Hd;
var Jd = /* @__PURE__ */ Wn(function(e, t) {
  var n = li(e);
  return /* @__PURE__ */ C.createElement(to, D({
    ref: t
  }, n));
}), ir = Jd, Ud = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], ar = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), a = String(r.getOptionValue(n)).toLowerCase(), s = String(r.getOptionLabel(n)).toLowerCase();
  return a === o || s === o;
}, En = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, n, r, o) {
    return !(!t || n.some(function(a) {
      return ar(t, a, o);
    }) || r.some(function(a) {
      return ar(t, a, o);
    }));
  },
  getNewOptionData: function(t, n) {
    return {
      label: n,
      value: t,
      __isNew__: !0
    };
  }
};
function $d(e) {
  var t = e.allowCreateWhileLoading, n = t === void 0 ? !1 : t, r = e.createOptionPosition, o = r === void 0 ? "last" : r, a = e.formatCreateLabel, s = a === void 0 ? En.formatCreateLabel : a, u = e.isValidNewOption, l = u === void 0 ? En.isValidNewOption : u, c = e.getNewOptionData, d = c === void 0 ? En.getNewOptionData : c, p = e.onCreateOption, f = e.options, b = f === void 0 ? [] : f, g = e.onChange, h = We(e, Ud), m = h.getOptionValue, v = m === void 0 ? Oi : m, y = h.getOptionLabel, I = y === void 0 ? Fi : y, x = h.inputValue, A = h.isLoading, w = h.isMulti, R = h.value, E = h.name, T = Ae(function() {
    return l(x, Yt(R), b, {
      getOptionValue: v,
      getOptionLabel: I
    }) ? d(x, s(x)) : void 0;
  }, [s, d, I, v, x, l, b, R]), B = Ae(function() {
    return (n || !A) && T ? o === "first" ? [T].concat(lt(b)) : [].concat(lt(b), [T]) : b;
  }, [n, o, A, T, b]), V = ce(function(F, k) {
    if (k.action !== "select-option")
      return g(F, k);
    var P = Array.isArray(F) ? F : [F];
    if (P[P.length - 1] === T) {
      if (p) p(x);
      else {
        var O = d(x, x), G = {
          action: "create-option",
          name: E,
          option: O
        };
        g(yt(w, [].concat(lt(Yt(R)), [O]), O), G);
      }
      return;
    }
    g(F, k);
  }, [d, x, w, E, T, p, g, R]);
  return N(N({}, h), {}, {
    options: B,
    onChange: V
  });
}
var Qd = /* @__PURE__ */ Wn(function(e, t) {
  var n = li(e), r = $d(n);
  return /* @__PURE__ */ C.createElement(to, D({
    ref: t
  }, r));
}), _d = Qd;
const qd = Xn(), Kd = Or.create({
  regionInfo: {
    fontSize: 12,
    cursor: "default",
    transition: "opacity 200ms",
    opacity: 0.5,
    "&:hover": {
      opacity: 0.9,
      cursor: "pointer"
    },
    "&.highlighted": {
      opacity: 0.9,
      "&:hover": {
        opacity: 1
      }
    },
    // pointerEvents: "none",
    fontWeight: 600,
    color: co[900],
    padding: 8,
    "& .name": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& .circle": {
        marginRight: 4,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.4)",
        width: 10,
        height: 10,
        borderRadius: 5
      }
    },
    "& .tags": {
      "& .tag": {
        color: co[700],
        display: "inline-block",
        margin: 1,
        fontSize: 10,
        textDecoration: "underline"
      }
    }
  },
  commentBox: {
    fontWeight: 400,
    fontSize: 13
  }
}), ep = ({
  region: e,
  editing: t,
  allowedClasses: n,
  allowedTags: r,
  tagSingleSelection: o,
  onDelete: a,
  onChange: s,
  onClose: u,
  onOpen: l,
  onRegionClassAdded: c,
  allowComments: d
}) => {
  const { classes: p } = Kd(), f = pe(null), b = () => {
    var I, x, A, w;
    const y = (w = (A = (x = (I = f.current) == null ? void 0 : I.children) == null ? void 0 : x[0]) == null ? void 0 : A.children) == null ? void 0 : w[0];
    if (y) return y.focus();
  }, g = typeof (n == null ? void 0 : n[0]) == "string", h = (n == null ? void 0 : n.find((y) => typeof y == "object" && y.id === e.cls)) || e.cls, m = h && typeof h == "object" ? h.label : e.cls, v = h && typeof h == "object" ? { label: h.label, value: h.id } : e.cls ? { label: e.cls, value: e.cls } : null;
  return /* @__PURE__ */ S(kn, { theme: qd, children: /* @__PURE__ */ S(
    Kt,
    {
      onClick: () => !t && l ? l(e) : null,
      className: ca(p.regionInfo, {
        highlighted: e.highlighted
      }),
      children: t ? /* @__PURE__ */ de("div", { style: { width: 200 }, children: [
        /* @__PURE__ */ de("div", { style: { display: "flex", flexDirection: "row" }, children: [
          /* @__PURE__ */ S(
            "div",
            {
              style: {
                display: "flex",
                backgroundColor: e.color || "#888",
                color: "#fff",
                padding: 4,
                paddingLeft: 8,
                paddingRight: 8,
                borderRadius: 4,
                fontWeight: "bold",
                textShadow: "0px 0px 5px rgba(0,0,0,0.4)"
              },
              children: e.type
            }
          ),
          /* @__PURE__ */ S("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S(
            da,
            {
              onClick: () => a(e),
              tabIndex: -1,
              style: { width: 22, height: 22 },
              size: "small",
              children: /* @__PURE__ */ S(Ss, { style: { marginTop: -8, width: 16, height: 16 } })
            }
          )
        ] }),
        (n || []).length > 0 && /* @__PURE__ */ S("div", { style: { marginTop: 6 }, children: g ? /* @__PURE__ */ S(
          _d,
          {
            placeholder: "Classification",
            onChange: (y, I) => {
              y && (I.action == "create-option" && c && c(y.value), s({
                ...e,
                cls: y.value
              }));
            },
            value: v,
            options: n == null ? void 0 : n.map(
              (y) => typeof y == "string" ? { value: y, label: y } : { value: y.id, label: y.label }
            )
          }
        ) : /* @__PURE__ */ S(
          ir,
          {
            placeholder: "Classification",
            onChange: (y) => {
              y && s({
                ...e,
                cls: y.value
              });
            },
            value: v,
            options: n == null ? void 0 : n.map((y) => typeof y == "string" ? { value: y, label: y } : { value: y.id, label: y.label })
          }
        ) }),
        (r || []).length > 0 && /* @__PURE__ */ S("div", { style: { marginTop: 4 }, children: /* @__PURE__ */ S(
          ir,
          {
            onChange: (y) => {
              if (Array.isArray(y)) {
                s({
                  ...e,
                  tags: y.map((I) => I.value)
                });
                return;
              }
              y && "value" in y && s({
                ...e,
                tags: [y.value]
              });
            },
            placeholder: "Tags",
            value: (e.tags || []).map((y) => ({
              label: y,
              value: y
            })),
            isMulti: !o,
            options: r == null ? void 0 : r.map((y) => ({ value: y, label: y }))
          }
        ) }),
        d && /* @__PURE__ */ S(
          ii,
          {
            InputProps: {
              className: p.commentBox
            },
            fullWidth: !0,
            multiline: !0,
            rows: 3,
            ref: f,
            onClick: b,
            value: e.comment || "",
            onChange: (y) => s({ ...e, comment: y.target.value })
          }
        ),
        u && /* @__PURE__ */ de("div", { style: { marginTop: 4, display: "flex" }, children: [
          /* @__PURE__ */ S("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S(
            pa,
            {
              onClick: () => u(e),
              size: "small",
              variant: "contained",
              color: "primary",
              children: /* @__PURE__ */ S(Rs, {})
            }
          )
        ] })
      ] }) : /* @__PURE__ */ de("div", { children: [
        e.cls && /* @__PURE__ */ de("div", { className: "name", children: [
          /* @__PURE__ */ S(
            "div",
            {
              className: "circle",
              style: { backgroundColor: e.color }
            }
          ),
          m
        ] }),
        e.tags && /* @__PURE__ */ S("div", { className: "tags", children: e.tags.map((y) => /* @__PURE__ */ S("div", { className: "tag", children: y }, y)) })
      ] })
    }
  ) });
}, tp = _e(
  ep,
  (e, t) => e.editing === t.editing && e.region === t.region
), np = Qt(/* @__PURE__ */ S("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
}), "Lock"), op = (e, ...t) => {
  const n = { ...e };
  for (const r of t)
    delete n[r];
  return n;
}, Rp = ({
  regions: e,
  projectRegionBox: t,
  mouseEvents: n,
  regionClsList: r,
  regionTagList: o,
  regionTagSingleSelection: a,
  onBeginRegionEdit: s,
  onChangeRegion: u,
  onCloseRegionEdit: l,
  onDeleteRegion: c,
  RegionEditLabel: d,
  onRegionClassAdded: p,
  allowComments: f
}) => {
  const b = d ?? tp;
  return e.filter((g) => g.visible || g.visible === void 0).map((g) => {
    const h = t(g);
    let m = 8;
    g.highlighted && g.type === "box" && (m += 6);
    const v = g.editingLabels && !g.locked ? 170 : g.tags ? 60 : 50, y = h.y > v, I = y ? {
      left: h.x,
      top: h.y - m / 2
    } : { left: h.x, top: h.y + h.h + m / 2 };
    return g.locked ? /* @__PURE__ */ S(
      "div",
      {
        style: {
          position: "absolute",
          ...I,
          zIndex: 10 + (g.editingLabels ? 5 : 0)
        },
        children: /* @__PURE__ */ S(
          Kt,
          {
            style: {
              position: "absolute",
              left: 0,
              ...y ? { bottom: 0 } : { top: 0 },
              zIndex: 10,
              backgroundColor: "#fff",
              borderRadius: 4,
              padding: 2,
              paddingBottom: 0,
              opacity: 0.5,
              pointerEvents: "none"
            },
            children: /* @__PURE__ */ S(np, { style: { width: 16, height: 16, color: "#333" } })
          }
        )
      },
      g.id
    ) : /* @__PURE__ */ S(
      "div",
      {
        style: {
          position: "absolute",
          ...I,
          zIndex: 10 + (g.editingLabels ? 5 : 0),
          width: 200
        },
        onMouseDown: (x) => x.preventDefault(),
        onMouseUp: (x) => x.preventDefault(),
        onMouseEnter: (x) => {
          g.editingLabels && (n.onMouseUp(x), x.button = 1, n.onMouseUp(x));
        },
        children: /* @__PURE__ */ S(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 20,
              left: 0,
              ...y ? { bottom: 0 } : { top: 0 }
            },
            ...g.editingLabels ? {} : op(n, "onMouseDown", "onMouseUp"),
            children: /* @__PURE__ */ S(
              b,
              {
                allowedClasses: r,
                allowedTags: o,
                tagSingleSelection: a,
                onOpen: s,
                onChange: u,
                onClose: l,
                onDelete: c,
                editing: g.editingLabels,
                region: g,
                onRegionClassAdded: p,
                allowComments: f
              }
            )
          }
        )
      },
      g.id
    );
  });
}, rp = (e) => {
  const t = document.createElement("canvas"), n = t.getContext("2d"), r = new Image();
  return r.crossOrigin = "anonymous", r.src = e, new Promise((o) => {
    r.onload = () => {
      t.width = r.naturalWidth, t.height = r.naturalHeight, n.drawImage(r, 0, 0);
      const a = n.getImageData(
        0,
        0,
        r.naturalWidth,
        r.naturalHeight
      );
      o(a);
    };
  });
};
var no = { exports: {} };
const ip = "0.0.12", ap = {
  version: ip
}, { version: sp } = ap;
let lp = -1;
function ki(e) {
  try {
    e.match(/^[0-9]+\.[0-9]+\.[0-9]+$/) && (e = `https://unpkg.com/autoseg@${e}/webworker-worker-bundle.js`);
    const t = new Blob([`importScripts('${e}')`], {
      type: "application/javascript"
    }), n = window.URL.createObjectURL(t), r = new Worker(n), o = ["setConfig", "loadImage", "getMask"], a = {};
    for (const s of o) {
      const u = lp++;
      a[s] = (...l) => (r.postMessage({ functionName: s, args: l, id: u }), new Promise((c, d) => {
        const p = (f) => {
          const { data: b } = f;
          if (b && b.id === u)
            if (r.removeEventListener("message", p), b.error)
              d(new Error(b.error));
            else if (s === "getMask") {
              const { data: g, width: h, height: m } = b.returnValue;
              c(new ImageData(g, h, m));
            } else
              c(b.returnValue);
        };
        r.addEventListener("message", p);
      }));
    }
    return a;
  } catch (t) {
    return console.log(`error loading autoseg: ${t.toString()}`), {};
  }
}
no.exports = ki(
  `https://unpkg.com/autoseg@${sp}/webworker-worker-bundle.js`
);
no.exports.wrapAutoseg = ki;
var up = no.exports;
const wn = /* @__PURE__ */ fa(up);
function cp(e) {
  return e.map((t) => {
    switch (t.type) {
      case "point":
        return {
          regionType: "point",
          classification: t.cls,
          x: t.x,
          y: t.y
        };
      case "polygon":
        return {
          regionType: "polygon",
          classification: t.cls,
          points: t.points.map(([n, r]) => ({ x: n, y: r }))
        };
      case "box":
        return {
          regionType: "bounding-box",
          classification: t.cls,
          centerX: t.x + t.w / 2,
          centerY: t.y + t.h / 2,
          width: t.w,
          height: t.h
        };
      default:
        return null;
    }
  }).filter(Boolean);
}
const Tp = ({
  regions: e,
  regionClsList: t,
  imageSrc: n,
  imagePosition: r,
  zIndex: o = 5,
  hide: a = !1,
  autoSegmentationOptions: s = { type: "simple" }
}) => {
  const [u, l] = Ee(null), [c, d] = Ee(
    null
  );
  Ne(() => {
    n && rp(n).then((f) => {
      wn.setConfig({
        classNames: t ?? [],
        ...s
      }), wn.loadImage(f), d(f);
    });
  }, [n]), hs(
    () => {
      if (a || !u || !c || e.filter((b) => b.cls).length < 2) return;
      const f = cp(e);
      wn.getMask(f).then((b) => {
        const g = u.getContext("2d");
        g && (g.clearRect(0, 0, b.width, b.height), g.putImageData(b, 0, 0));
      });
    },
    1e3,
    [u, c, e, a]
  );
  const p = Ae(() => {
    let f = r.bottomRight.x - r.topLeft.x, b = r.bottomRight.y - r.topLeft.y;
    return {
      display: a ? "none" : void 0,
      imageRendering: "pixelated",
      transform: "translateZ(0px)",
      left: r.topLeft.x,
      top: r.topLeft.y,
      width: isNaN(f) ? 0 : f,
      height: isNaN(b) ? 0 : b,
      zIndex: o,
      position: "absolute",
      pointerEvents: "none"
    };
  }, [
    r.topLeft.x,
    r.topLeft.y,
    r.bottomRight.x,
    r.bottomRight.y,
    o,
    a
  ]);
  return /* @__PURE__ */ S(
    "canvas",
    {
      id: "autoseg",
      style: p,
      width: c ? c.width : 0,
      height: c ? c.height : 0,
      ref: l
    }
  );
}, dp = Xn(), pp = j("img")(() => ({
  zIndex: 0,
  position: "absolute"
})), sr = j("div")(() => ({
  zIndex: 0,
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  backgroundColor: "#ffffff",
  color: "#303030",
  fontWeight: "bold",
  whiteSpace: "pre-wrap",
  padding: 50
})), Gp = ({
  imagePosition: e,
  mouseEvents: t,
  imageSrc: n,
  onLoad: r,
  useCrossOrigin: o = !1
}) => {
  const a = pe(null), [s, u] = Ee(null), l = Nt((p) => {
    const f = p.currentTarget;
    r && r({
      naturalWidth: f.naturalWidth,
      naturalHeight: f.naturalHeight
    });
  }), c = Nt(() => {
    u(
      `Could not load image

Make sure your image works by visiting ${n} in a web browser.`
    );
  }), d = Ae(() => {
    var b, g, h, m, v, y;
    let p = (((b = e == null ? void 0 : e.bottomRight) == null ? void 0 : b.x) ?? 0) - (((g = e == null ? void 0 : e.topLeft) == null ? void 0 : g.x) ?? 0), f = (((h = e == null ? void 0 : e.bottomRight) == null ? void 0 : h.y) ?? 0) - (((m = e == null ? void 0 : e.topLeft) == null ? void 0 : m.y) ?? 0);
    return {
      imageRendering: "pixelated",
      left: (v = e == null ? void 0 : e.topLeft) == null ? void 0 : v.x,
      top: (y = e == null ? void 0 : e.topLeft) == null ? void 0 : y.y,
      width: isNaN(p) ? 0 : p,
      height: isNaN(f) ? 0 : f
    };
  }, [e]);
  return n ? s ? /* @__PURE__ */ S(sr, { children: s }) : /* @__PURE__ */ S(kn, { theme: dp, children: /* @__PURE__ */ S(
    pp,
    {
      ...t,
      src: n,
      ref: a,
      style: d,
      onLoad: l,
      onError: c,
      crossOrigin: o ? "anonymous" : void 0
    }
  ) }) : /* @__PURE__ */ S(sr, { children: "Unable to load image" });
}, lr = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};
var ur = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300
};
function fp(e) {
  var d, p;
  var t, n = [], r = 1, o;
  if (typeof e == "number")
    return { space: "rgb", values: [e >>> 16, (e & 65280) >>> 8, e & 255], alpha: 1 };
  if (typeof e == "number") return { space: "rgb", values: [e >>> 16, (e & 65280) >>> 8, e & 255], alpha: 1 };
  if (e = String(e).toLowerCase(), lr[e])
    n = lr[e].slice(), o = "rgb";
  else if (e === "transparent")
    r = 0, o = "rgb", n = [0, 0, 0];
  else if (e[0] === "#") {
    var a = e.slice(1), s = a.length, u = s <= 4;
    r = 1, u ? (n = [
      parseInt(a[0] + a[0], 16),
      parseInt(a[1] + a[1], 16),
      parseInt(a[2] + a[2], 16)
    ], s === 4 && (r = parseInt(a[3] + a[3], 16) / 255)) : (n = [
      parseInt(a[0] + a[1], 16),
      parseInt(a[2] + a[3], 16),
      parseInt(a[4] + a[5], 16)
    ], s === 8 && (r = parseInt(a[6] + a[7], 16) / 255)), n[0] || (n[0] = 0), n[1] || (n[1] = 0), n[2] || (n[2] = 0), o = "rgb";
  } else if (t = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e)) {
    var l = t[1];
    o = l.replace(/a$/, "");
    var c = o === "cmyk" ? 4 : o === "gray" ? 1 : 3;
    n = t[2].trim().split(/\s*[,\/]\s*|\s+/), o === "color" && (o = n.shift()), n = n.map(function(f, b) {
      if (f[f.length - 1] === "%")
        return f = parseFloat(f) / 100, b === 3 ? f : o === "rgb" ? f * 255 : o[0] === "h" || o[0] === "l" && !b ? f * 100 : o === "lab" ? f * 125 : o === "lch" ? b < 2 ? f * 150 : f * 360 : o[0] === "o" && !b ? f : o === "oklab" ? f * 0.4 : o === "oklch" ? b < 2 ? f * 0.4 : f * 360 : f;
      if (o[b] === "h" || b === 2 && o[o.length - 1] === "h") {
        if (ur[f] !== void 0) return ur[f];
        if (f.endsWith("deg")) return parseFloat(f);
        if (f.endsWith("turn")) return parseFloat(f) * 360;
        if (f.endsWith("grad")) return parseFloat(f) * 360 / 400;
        if (f.endsWith("rad")) return parseFloat(f) * 180 / Math.PI;
      }
      return f === "none" ? 0 : parseFloat(f);
    }), r = n.length > c ? n.pop() : 1;
  } else /[0-9](?:\s|\/|,)/.test(e) && (n = e.match(/([0-9]+)/g).map(function(f) {
    return parseFloat(f);
  }), o = ((p = (d = e.match(/([a-z])/ig)) == null ? void 0 : d.join("")) == null ? void 0 : p.toLowerCase()) || "rgb");
  return {
    space: o,
    values: n,
    alpha: r
  };
}
function Fe(e, t) {
  var { space: n, values: r, alpha: o } = fp(e);
  return n[0] === "h" ? `${n}a(${r[0]}, ${r[1]}%, ${r[2]}%, ${t})` : `${n}a(${r}, ${t})`;
}
const cr = (e, t, n) => t < n ? e < t ? t : e > n ? n : e : e < n ? n : e > t ? t : e, bp = {
  point: _e(({ region: e, iw: t, ih: n }) => e.type !== "point" ? null : /* @__PURE__ */ S("g", { transform: `translate(${e.x * t} ${e.y * n})`, children: /* @__PURE__ */ S(
    "path",
    {
      d: "M0 8L8 0L0 -8L-8 0Z",
      strokeWidth: 2,
      stroke: e.color,
      fill: "transparent"
    }
  ) })),
  line: _e(({ region: e, iw: t, ih: n }) => e.type !== "line" ? null : /* @__PURE__ */ S("g", { transform: `translate(${e.x1 * t} ${e.y1 * n})`, children: /* @__PURE__ */ S(
    "line",
    {
      strokeWidth: 2,
      x1: 0,
      y1: 0,
      x2: (e.x2 - e.x1) * t,
      y2: (e.y2 - e.y1) * n,
      stroke: Fe(e.color, 0.75),
      fill: Fe(e.color, 0.25)
    }
  ) })),
  box: _e(({ region: e, iw: t, ih: n }) => e.type !== "box" ? null : /* @__PURE__ */ S("g", { transform: `translate(${e.x * t} ${e.y * n})`, children: /* @__PURE__ */ S(
    "rect",
    {
      strokeWidth: 2,
      x: 0,
      y: 0,
      width: Math.max(e.w * t, 0),
      height: Math.max(e.h * n, 0),
      stroke: Fe(e.color, 0.75),
      fill: Fe(e.color, 0.25)
    }
  ) })),
  polygon: _e(({ region: e, iw: t, ih: n }) => {
    if (e.type !== "polygon") return null;
    const r = e.open ? "polyline" : "polygon";
    return /* @__PURE__ */ S(
      r,
      {
        points: e.points.map(([o, a]) => [o * t, a * n]).map((o) => o.join(" ")).join(" "),
        strokeWidth: 2,
        stroke: Fe(e.color, 0.75),
        fill: Fe(e.color, 0.25)
      }
    );
  }),
  keypoints: ({
    region: e,
    iw: t,
    ih: n,
    keypointDefinitions: r
  }) => {
    if (e.type !== "keypoints") return null;
    const { points: o, keypointsDefinitionId: a } = e;
    if (!(r != null && r[a]))
      throw new Error(
        `No definition for keypoint configuration "${a}"`
      );
    const { landmarks: s, connections: u } = r[a];
    return /* @__PURE__ */ de("g", { children: [
      Object.entries(o).map(([l, { x: c, y: d }], p) => {
        var f;
        return /* @__PURE__ */ S("g", { transform: `translate(${c * t} ${d * n})`, children: /* @__PURE__ */ S(
          "path",
          {
            d: "M0 8L8 0L0 -8L-8 0Z",
            strokeWidth: 2,
            stroke: (f = s[l]) == null ? void 0 : f.color,
            fill: "transparent"
          }
        ) }, p);
      }),
      u.map(([l, c]) => {
        const d = o[l], p = o[c], f = { x: (d.x + p.x) / 2, y: (d.y + p.y) / 2 };
        return /* @__PURE__ */ de("g", { children: [
          /* @__PURE__ */ S(
            "line",
            {
              x1: d.x * t,
              y1: d.y * n,
              x2: f.x * t,
              y2: f.y * n,
              strokeWidth: 2,
              stroke: s[l].color
            }
          ),
          /* @__PURE__ */ S(
            "line",
            {
              x1: p.x * t,
              y1: p.y * n,
              x2: f.x * t,
              y2: f.y * n,
              strokeWidth: 2,
              stroke: s[c].color
            }
          )
        ] }, `${d.x},${d.y}.${p.x},${p.y}`);
      })
    ] });
  },
  "expanding-line": _e(({ region: e, iw: t, ih: n }) => {
    if (e.type !== "expanding-line") return null;
    let { expandingWidth: r = 5e-3, points: o } = e;
    r = o.slice(-1)[0].width || r;
    const a = o.map(({ x: c, y: d, angle: p, width: f }, b) => {
      if (!p) {
        const m = o[cr(b + 1, 0, o.length - 1)], v = o[cr(b - 1, 0, o.length - 1)];
        p = Math.atan2(v.x - m.x, v.y - m.y) + Math.PI / 2;
      }
      const g = Math.sin(p) * (f || r) / 2, h = Math.cos(p) * (f || r) / 2;
      return [
        { x: c + g, y: d + h },
        { x: c - g, y: d - h }
      ];
    }), s = a.map(([c]) => c), u = a.map(([c, d]) => d);
    u.reverse();
    const l = o.slice(-1)[0];
    return /* @__PURE__ */ de(Di, { children: [
      /* @__PURE__ */ S(
        "polygon",
        {
          points: s.concat(e.candidatePoint ? [e.candidatePoint] : []).concat(u).map((c) => `${c.x * t} ${c.y * n}`).join(" "),
          strokeWidth: 2,
          stroke: Fe(e.color, 0.75),
          fill: Fe(e.color, 0.25)
        }
      ),
      o.map(({ x: c, y: d, angle: p }, f) => /* @__PURE__ */ S(
        "g",
        {
          transform: `translate(${c * t} ${d * n}) rotate(${-(p || 0) * 180 / Math.PI})`,
          children: /* @__PURE__ */ S("g", { children: /* @__PURE__ */ S(
            "rect",
            {
              x: -5,
              y: -5,
              width: 10,
              height: 10,
              strokeWidth: 2,
              stroke: Fe(e.color, 0.75),
              fill: Fe(e.color, 0.25)
            }
          ) })
        },
        f
      )),
      /* @__PURE__ */ S(
        "rect",
        {
          x: l.x * t - 8,
          y: l.y * n - 8,
          width: 16,
          height: 16,
          strokeWidth: 4,
          stroke: Fe(e.color, 0.5),
          fill: "transparent"
        }
      )
    ] });
  }),
  pixel: () => null
}, gp = _e(
  ({ regions: e, keypointDefinitions: t, iw: n, ih: r }) => e.filter((o) => o.visible !== !1).map((o) => {
    const a = bp[o.type];
    return /* @__PURE__ */ S(
      a,
      {
        region: o,
        iw: n,
        ih: r,
        keypointDefinitions: t
      },
      o.id
    );
  }),
  (e, t) => e.regions === t.regions && e.iw === t.iw && e.ih === t.ih
), Fp = ({
  imagePosition: e,
  regions: t = [],
  keypointDefinitions: n
}) => {
  if (!e) return null;
  const r = e.bottomRight.x - e.topLeft.x, o = e.bottomRight.y - e.topLeft.y;
  return isNaN(r) || isNaN(o) ? null : /* @__PURE__ */ S(
    "svg",
    {
      width: r,
      height: o,
      style: {
        position: "absolute",
        zIndex: 2,
        left: e.topLeft.x,
        top: e.topLeft.y,
        pointerEvents: "none",
        width: r,
        height: o
      },
      children: /* @__PURE__ */ S(
        gp,
        {
          regions: t,
          iw: r,
          ih: o,
          keypointDefinitions: n
        },
        "wrapped-region-list"
      )
    }
  );
}, mp = {
  showCrosshairs: !1,
  showHighlightBox: !0,
  wasdMode: !0,
  changeSetting: () => {
  }
}, Li = Pn(mp), hp = () => {
  if (!window || !window.localStorage) return {};
  let e = {};
  for (let t = 0; t < window.localStorage.length; t++) {
    const n = window.localStorage.key(t);
    if (n && (n != null && n.startsWith("settings_")))
      try {
        const r = window.localStorage.getItem(n);
        r && (e[n.replace("settings_", "")] = JSON.parse(r));
      } catch {
      }
  }
  return e;
}, Op = () => Nn(Li), Bp = ({ children: e }) => {
  const [t, n] = Ee(
    () => hp()
  ), r = (o, a) => {
    n({ ...t, [o]: a }), window.localStorage.setItem(`settings_${o}`, JSON.stringify(a));
  };
  return /* @__PURE__ */ S(Li.Provider, { value: { ...t, changeSetting: r }, children: e });
};
export {
  $r as B,
  Ur as F,
  Tp as I,
  Cr as L,
  Qr as M,
  xp as P,
  Rp as R,
  ir as S,
  Ss as T,
  xr as a,
  Cs as b,
  Ap as c,
  Sp as d,
  tp as e,
  Fp as f,
  Ep as g,
  Gp as h,
  np as i,
  dt as j,
  Kt as k,
  ct as l,
  Oa as m,
  po as n,
  zr as o,
  Hr as p,
  Zr as q,
  $n as r,
  cr as s,
  Or as t,
  Op as u,
  wp as v,
  Bp as w
};

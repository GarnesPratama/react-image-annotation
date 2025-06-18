import { jsx as d, jsxs as le, Fragment as Fo } from "react/jsx-runtime";
import * as M from "react";
import { createContext as Uo, useContext as qo, memo as _o, useState as Rt, useCallback as Yo, useLayoutEffect as Xo, useEffect as so, useMemo as po, forwardRef as Je, useRef as lo, useImperativeHandle as co, useReducer as Ko } from "react";
import { M as Go, N as Jo, O as Qo, z as Zo, m as Ye, i as Qe, Q as er, R as tr, c as ye, p as Q, P as r, d as de, j as yt, u as bt, S as or, U as rr, y as fo, V as Ue, l as ut, s as j, n as wt, W as zt, t as Ze, X as nr, Y as ir, G as Xe, K as ar, f as se, h as Ht, x as sr, T as Pe, I as uo, Z as Vt, _ as pr, k as Ft, $ as lr, H as ho, a0 as cr, a1 as ht, a2 as mo, F as fr, J as dr, a3 as Ut, a4 as ur, a5 as hr, w as at, a6 as mr, v as vo, a7 as qt, a8 as vr, L as gr, B as yr } from "./Portal-IhUi94Sd.js";
function br(t = {}) {
  const {
    themeId: e,
    defaultTheme: o,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = t, p = Go("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Jo);
  return /* @__PURE__ */ M.forwardRef(function(s, f) {
    const c = Qo(o), {
      className: h,
      component: y = "div",
      ...u
    } = Zo(s);
    return /* @__PURE__ */ d(p, {
      as: y,
      ref: f,
      className: Ye(h, i ? i(n) : n),
      theme: e && c[e] || c,
      ...u
    });
  });
}
const wr = Qe("MuiBox", ["root"]), xr = ye(), go = br({
  themeId: tr,
  defaultTheme: xr,
  defaultClassName: wr.root,
  generateClassName: er.generate
});
Q.env.NODE_ENV !== "production" && (go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: r.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Or = de(/* @__PURE__ */ d("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
function Tr(t) {
  return yt("MuiCollapse", t);
}
Qe("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Er = (t) => {
  const {
    orientation: e,
    classes: o
  } = t, n = {
    root: ["root", `${e}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${e}`],
    wrapperInner: ["wrapperInner", `${e}`]
  };
  return wt(n, Tr, o);
}, Rr = j("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.root, e[o.orientation], o.state === "entered" && e.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && e.hidden];
  }
})(Ze(({
  theme: t
}) => ({
  height: 0,
  overflow: "hidden",
  transition: t.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: t.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.state === "exited" && !e.in && e.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), Pr = j("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (t, e) => e.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), Cr = j("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (t, e) => e.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), mt = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const n = bt({
    props: e,
    name: "MuiCollapse"
  }), {
    addEndListener: i,
    children: p,
    className: l,
    collapsedSize: a = "0px",
    component: s,
    easing: f,
    in: c,
    onEnter: h,
    onEntered: y,
    onEntering: u,
    onExit: w,
    onExited: m,
    onExiting: v,
    orientation: x = "vertical",
    style: C,
    timeout: b = or.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = rr,
    ...R
  } = n, O = {
    ...n,
    orientation: x,
    collapsedSize: a
  }, S = Er(O), B = fo(), A = Ue(), T = M.useRef(null), D = M.useRef(), W = typeof a == "number" ? `${a}px` : a, $ = x === "horizontal", F = $ ? "width" : "height", U = M.useRef(null), I = ut(o, U), N = (P) => (H) => {
    if (P) {
      const L = U.current;
      H === void 0 ? P(L) : P(L, H);
    }
  }, z = () => T.current ? T.current[$ ? "clientWidth" : "clientHeight"] : 0, oe = N((P, H) => {
    T.current && $ && (T.current.style.position = "absolute"), P.style[F] = W, h && h(P, H);
  }), V = N((P, H) => {
    const L = z();
    T.current && $ && (T.current.style.position = "");
    const {
      duration: G,
      easing: ge
    } = zt({
      style: C,
      timeout: b,
      easing: f
    }, {
      mode: "enter"
    });
    if (b === "auto") {
      const ue = B.transitions.getAutoHeightDuration(L);
      P.style.transitionDuration = `${ue}ms`, D.current = ue;
    } else
      P.style.transitionDuration = typeof G == "string" ? G : `${G}ms`;
    P.style[F] = `${L}px`, P.style.transitionTimingFunction = ge, u && u(P, H);
  }), me = N((P, H) => {
    P.style[F] = "auto", y && y(P, H);
  }), re = N((P) => {
    P.style[F] = `${z()}px`, w && w(P);
  }), ve = N(m), Y = N((P) => {
    const H = z(), {
      duration: L,
      easing: G
    } = zt({
      style: C,
      timeout: b,
      easing: f
    }, {
      mode: "exit"
    });
    if (b === "auto") {
      const ge = B.transitions.getAutoHeightDuration(H);
      P.style.transitionDuration = `${ge}ms`, D.current = ge;
    } else
      P.style.transitionDuration = typeof L == "string" ? L : `${L}ms`;
    P.style[F] = W, P.style.transitionTimingFunction = G, v && v(P);
  });
  return /* @__PURE__ */ d(g, {
    in: c,
    onEnter: oe,
    onEntered: me,
    onEntering: V,
    onExit: re,
    onExited: ve,
    onExiting: Y,
    addEndListener: (P) => {
      b === "auto" && A.start(D.current || 0, P), i && i(U.current, P);
    },
    nodeRef: U,
    timeout: b === "auto" ? null : b,
    ...R,
    children: (P, {
      ownerState: H,
      ...L
    }) => /* @__PURE__ */ d(Rr, {
      as: s,
      className: Ye(S.root, l, {
        entered: S.entered,
        exited: !c && W === "0px" && S.hidden
      }[P]),
      style: {
        [$ ? "minWidth" : "minHeight"]: W,
        ...C
      },
      ref: I,
      ownerState: {
        ...O,
        state: P
      },
      ...L,
      children: /* @__PURE__ */ d(Pr, {
        ownerState: {
          ...O,
          state: P
        },
        className: S.wrapper,
        ref: T,
        children: /* @__PURE__ */ d(Cr, {
          ownerState: {
            ...O,
            state: P
          },
          className: S.wrapperInner,
          children: p
        })
      })
    })
  });
});
Q.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: r.func,
  /**
   * The content node to be collapsed.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: r.oneOfType([r.number, r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: nr,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: r.oneOfType([r.shape({
    enter: r.string,
    exit: r.string
  }), r.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: r.bool,
  /**
   * @ignore
   */
  onEnter: r.func,
  /**
   * @ignore
   */
  onEntered: r.func,
  /**
   * @ignore
   */
  onEntering: r.func,
  /**
   * @ignore
   */
  onExit: r.func,
  /**
   * @ignore
   */
  onExited: r.func,
  /**
   * @ignore
   */
  onExiting: r.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: r.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: r.oneOfType([r.oneOf(["auto"]), r.number, r.shape({
    appear: r.number,
    enter: r.number,
    exit: r.number
  })])
});
mt && (mt.muiSupportAuto = !0);
function Sr(t) {
  return yt("MuiTypography", t);
}
const Ui = Qe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Mr = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Ar = ir(), $r = (t) => {
  const {
    align: e,
    gutterBottom: o,
    noWrap: n,
    paragraph: i,
    variant: p,
    classes: l
  } = t, a = {
    root: ["root", p, t.align !== "inherit" && `align${Xe(e)}`, o && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return wt(a, Sr, l);
}, Dr = j("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.root, o.variant && e[o.variant], o.align !== "inherit" && e[`align${Xe(o.align)}`], o.noWrap && e.noWrap, o.gutterBottom && e.gutterBottom, o.paragraph && e.paragraph];
  }
})(Ze(({
  theme: t
}) => {
  var e;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(t.typography).filter(([o, n]) => o !== "inherit" && n && typeof n == "object").map(([o, n]) => ({
      props: {
        variant: o
      },
      style: n
    })), ...Object.entries(t.palette).filter(ar()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (t.vars || t).palette[o].main
      }
    })), ...Object.entries(((e = t.palette) == null ? void 0 : e.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${Xe(o)}`
      },
      style: {
        color: (t.vars || t).palette.text[o]
      }
    })), {
      props: ({
        ownerState: o
      }) => o.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), _t = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, yo = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const {
    color: n,
    ...i
  } = bt({
    props: e,
    name: "MuiTypography"
  }), p = !Mr[n], l = Ar({
    ...i,
    ...p && {
      color: n
    }
  }), {
    align: a = "inherit",
    className: s,
    component: f,
    gutterBottom: c = !1,
    noWrap: h = !1,
    paragraph: y = !1,
    variant: u = "body1",
    variantMapping: w = _t,
    ...m
  } = l, v = {
    ...l,
    align: a,
    color: n,
    className: s,
    component: f,
    gutterBottom: c,
    noWrap: h,
    paragraph: y,
    variant: u,
    variantMapping: w
  }, x = f || (y ? "p" : w[u] || _t[u]) || "span", C = $r(v);
  return /* @__PURE__ */ d(Dr, {
    as: x,
    ref: o,
    className: Ye(C.root, s),
    ...m,
    ownerState: v,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...m.style
    }
  });
});
Q.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: r.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: r.oneOfType([r.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), r.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: r.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: r.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: r.bool,
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: r.oneOfType([r.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), r.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: r.object
});
const bo = Uo({}), Nr = {}, At = () => qo(bo) || Nr, Br = ye(), jr = j("div")(() => ({
  borderBottom: `2px solid ${se[400]}`,
  "&:firstChild": { borderTop: `1px solid ${se[400]}` }
})), Ir = j("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 4,
  paddingLeft: 16,
  paddingRight: 12,
  "& .iconContainer": {
    color: se[600],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      width: 16,
      height: 16
    }
  }
})), Lr = j("div")(() => ({
  maxHeight: 200,
  overflowY: "auto",
  "&.noScroll": {
    overflowY: "visible",
    overflow: "visible"
  }
})), kr = j(yo)(() => ({
  fontSize: 11,
  flexGrow: 1,
  fontWeight: 800,
  paddingLeft: 8,
  color: se[800],
  "& span": {
    color: se[600],
    fontSize: 11
  }
})), Wr = (t) => {
  try {
    return JSON.parse(
      window.localStorage[`__REACT_WORKSPACE_SIDEBAR_EXPANDED_${t}`]
    );
  } catch {
    return !1;
  }
}, zr = (t, e) => {
  window.localStorage[`__REACT_WORKSPACE_SIDEBAR_EXPANDED_${t}`] = JSON.stringify(e);
}, Hr = ({
  icon: t,
  title: e,
  subTitle: o,
  children: n,
  noScroll: i = !1,
  expandedByDefault: p
}) => {
  const l = /* @__PURE__ */ d(Lr, { className: Ht(i && "noScroll"), children: n }), [a, s] = Rt(
    p === void 0 ? Wr(e) : p
  ), f = Yo(
    (u) => {
      s(u), zr(e, u);
    },
    [s, e]
  ), c = sr(() => f(!a)), y = At()[e.toLowerCase()];
  return /* @__PURE__ */ d(Pe, { theme: Br, children: /* @__PURE__ */ le(jr, { children: [
    /* @__PURE__ */ le(Ir, { children: [
      /* @__PURE__ */ d("div", { className: "iconContainer", children: t || /* @__PURE__ */ d(y, {}) }),
      /* @__PURE__ */ le(kr, { children: [
        e,
        " ",
        /* @__PURE__ */ d("span", { children: o })
      ] }),
      /* @__PURE__ */ d(
        uo,
        {
          onClick: c,
          sx: {
            padding: 0,
            width: 30,
            height: 30,
            "& .icon": {
              width: 20,
              height: 20,
              transition: "500ms transform",
              "&.expanded": {
                transform: "rotate(180deg)"
              }
            }
          },
          children: /* @__PURE__ */ d(
            Or,
            {
              className: Ht("icon", a && "expanded")
            }
          )
        }
      )
    ] }),
    i ? a ? l : null : /* @__PURE__ */ d(mt, { in: a, children: /* @__PURE__ */ d(
      "div",
      {
        className: "panel",
        style: { display: "block", overflow: "hidden", height: 200 },
        children: l
      }
    ) })
  ] }) });
};
_o(
  Hr,
  (t, e) => t.title === e.title && t.children === e.children
);
var Vr = function() {
}, wo = typeof window < "u", Fr = wo ? Xo : so, xo = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function Ur() {
  var t = Rt(null), e = t[0], o = t[1], n = Rt(xo), i = n[0], p = n[1], l = po(function() {
    return new window.ResizeObserver(function(a) {
      if (a[0]) {
        var s = a[0].contentRect, f = s.x, c = s.y, h = s.width, y = s.height, u = s.top, w = s.left, m = s.bottom, v = s.right;
        p({ x: f, y: c, width: h, height: y, top: u, left: w, bottom: m, right: v });
      }
    });
  }, []);
  return Fr(function() {
    if (e)
      return l.observe(e), function() {
        l.disconnect();
      };
  }, [e]), [o, i];
}
const qr = wo && typeof window.ResizeObserver < "u" ? Ur : function() {
  return [Vr, xo];
};
var q = "top", ee = "bottom", te = "right", _ = "left", $t = "auto", et = [q, ee, te, _], $e = "start", Ke = "end", _r = "clippingParents", Oo = "viewport", Ve = "popper", Yr = "reference", Yt = /* @__PURE__ */ et.reduce(function(t, e) {
  return t.concat([e + "-" + $e, e + "-" + Ke]);
}, []), To = /* @__PURE__ */ [].concat(et, [$t]).reduce(function(t, e) {
  return t.concat([e, e + "-" + $e, e + "-" + Ke]);
}, []), Xr = "beforeRead", Kr = "read", Gr = "afterRead", Jr = "beforeMain", Qr = "main", Zr = "afterMain", en = "beforeWrite", tn = "write", on = "afterWrite", rn = [Xr, Kr, Gr, Jr, Qr, Zr, en, tn, on];
function fe(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function K(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Re(t) {
  var e = K(t).Element;
  return t instanceof e || t instanceof Element;
}
function Z(t) {
  var e = K(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Dt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = K(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function nn(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(o) {
    var n = e.styles[o] || {}, i = e.attributes[o] || {}, p = e.elements[o];
    !Z(p) || !fe(p) || (Object.assign(p.style, n), Object.keys(i).forEach(function(l) {
      var a = i[l];
      a === !1 ? p.removeAttribute(l) : p.setAttribute(l, a === !0 ? "" : a);
    }));
  });
}
function an(t) {
  var e = t.state, o = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, o.popper), e.styles = o, e.elements.arrow && Object.assign(e.elements.arrow.style, o.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var i = e.elements[n], p = e.attributes[n] || {}, l = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : o[n]), a = l.reduce(function(s, f) {
        return s[f] = "", s;
      }, {});
      !Z(i) || !fe(i) || (Object.assign(i.style, a), Object.keys(p).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const sn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nn,
  effect: an,
  requires: ["computeStyles"]
};
function ce(t) {
  return t.split("-")[0];
}
var Ee = Math.max, vt = Math.min, De = Math.round;
function Pt() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Eo() {
  return !/^((?!chrome|android).)*safari/i.test(Pt());
}
function Ne(t, e, o) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  var n = t.getBoundingClientRect(), i = 1, p = 1;
  e && Z(t) && (i = t.offsetWidth > 0 && De(n.width) / t.offsetWidth || 1, p = t.offsetHeight > 0 && De(n.height) / t.offsetHeight || 1);
  var l = Re(t) ? K(t) : window, a = l.visualViewport, s = !Eo() && o, f = (n.left + (s && a ? a.offsetLeft : 0)) / i, c = (n.top + (s && a ? a.offsetTop : 0)) / p, h = n.width / i, y = n.height / p;
  return {
    width: h,
    height: y,
    top: c,
    right: f + h,
    bottom: c + y,
    left: f,
    x: f,
    y: c
  };
}
function Nt(t) {
  var e = Ne(t), o = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - o) <= 1 && (o = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: o,
    height: n
  };
}
function Ro(t, e) {
  var o = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (o && Dt(o)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function he(t) {
  return K(t).getComputedStyle(t);
}
function pn(t) {
  return ["table", "td", "th"].indexOf(fe(t)) >= 0;
}
function be(t) {
  return ((Re(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function xt(t) {
  return fe(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Dt(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    be(t)
  );
}
function Xt(t) {
  return !Z(t) || // https://github.com/popperjs/popper-core/issues/837
  he(t).position === "fixed" ? null : t.offsetParent;
}
function ln(t) {
  var e = /firefox/i.test(Pt()), o = /Trident/i.test(Pt());
  if (o && Z(t)) {
    var n = he(t);
    if (n.position === "fixed")
      return null;
  }
  var i = xt(t);
  for (Dt(i) && (i = i.host); Z(i) && ["html", "body"].indexOf(fe(i)) < 0; ) {
    var p = he(i);
    if (p.transform !== "none" || p.perspective !== "none" || p.contain === "paint" || ["transform", "perspective"].indexOf(p.willChange) !== -1 || e && p.willChange === "filter" || e && p.filter && p.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function tt(t) {
  for (var e = K(t), o = Xt(t); o && pn(o) && he(o).position === "static"; )
    o = Xt(o);
  return o && (fe(o) === "html" || fe(o) === "body" && he(o).position === "static") ? e : o || ln(t) || e;
}
function Bt(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function qe(t, e, o) {
  return Ee(t, vt(e, o));
}
function cn(t, e, o) {
  var n = qe(t, e, o);
  return n > o ? o : n;
}
function Po() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Co(t) {
  return Object.assign({}, Po(), t);
}
function So(t, e) {
  return e.reduce(function(o, n) {
    return o[n] = t, o;
  }, {});
}
var fn = function(e, o) {
  return e = typeof e == "function" ? e(Object.assign({}, o.rects, {
    placement: o.placement
  })) : e, Co(typeof e != "number" ? e : So(e, et));
};
function dn(t) {
  var e, o = t.state, n = t.name, i = t.options, p = o.elements.arrow, l = o.modifiersData.popperOffsets, a = ce(o.placement), s = Bt(a), f = [_, te].indexOf(a) >= 0, c = f ? "height" : "width";
  if (!(!p || !l)) {
    var h = fn(i.padding, o), y = Nt(p), u = s === "y" ? q : _, w = s === "y" ? ee : te, m = o.rects.reference[c] + o.rects.reference[s] - l[s] - o.rects.popper[c], v = l[s] - o.rects.reference[s], x = tt(p), C = x ? s === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, b = m / 2 - v / 2, g = h[u], R = C - y[c] - h[w], O = C / 2 - y[c] / 2 + b, S = qe(g, O, R), B = s;
    o.modifiersData[n] = (e = {}, e[B] = S, e.centerOffset = S - O, e);
  }
}
function un(t) {
  var e = t.state, o = t.options, n = o.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ro(e.elements.popper, i) && (e.elements.arrow = i));
}
const hn = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: dn,
  effect: un,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Be(t) {
  return t.split("-")[1];
}
var mn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vn(t, e) {
  var o = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: De(o * i) / i || 0,
    y: De(n * i) / i || 0
  };
}
function Kt(t) {
  var e, o = t.popper, n = t.popperRect, i = t.placement, p = t.variation, l = t.offsets, a = t.position, s = t.gpuAcceleration, f = t.adaptive, c = t.roundOffsets, h = t.isFixed, y = l.x, u = y === void 0 ? 0 : y, w = l.y, m = w === void 0 ? 0 : w, v = typeof c == "function" ? c({
    x: u,
    y: m
  }) : {
    x: u,
    y: m
  };
  u = v.x, m = v.y;
  var x = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), b = _, g = q, R = window;
  if (f) {
    var O = tt(o), S = "clientHeight", B = "clientWidth";
    if (O === K(o) && (O = be(o), he(O).position !== "static" && a === "absolute" && (S = "scrollHeight", B = "scrollWidth")), O = O, i === q || (i === _ || i === te) && p === Ke) {
      g = ee;
      var A = h && O === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[S]
      );
      m -= A - n.height, m *= s ? 1 : -1;
    }
    if (i === _ || (i === q || i === ee) && p === Ke) {
      b = te;
      var T = h && O === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[B]
      );
      u -= T - n.width, u *= s ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: a
  }, f && mn), W = c === !0 ? vn({
    x: u,
    y: m
  }, K(o)) : {
    x: u,
    y: m
  };
  if (u = W.x, m = W.y, s) {
    var $;
    return Object.assign({}, D, ($ = {}, $[g] = C ? "0" : "", $[b] = x ? "0" : "", $.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + m + "px)" : "translate3d(" + u + "px, " + m + "px, 0)", $));
  }
  return Object.assign({}, D, (e = {}, e[g] = C ? m + "px" : "", e[b] = x ? u + "px" : "", e.transform = "", e));
}
function gn(t) {
  var e = t.state, o = t.options, n = o.gpuAcceleration, i = n === void 0 ? !0 : n, p = o.adaptive, l = p === void 0 ? !0 : p, a = o.roundOffsets, s = a === void 0 ? !0 : a, f = {
    placement: ce(e.placement),
    variation: Be(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Kt(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Kt(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const yn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: gn,
  data: {}
};
var st = {
  passive: !0
};
function bn(t) {
  var e = t.state, o = t.instance, n = t.options, i = n.scroll, p = i === void 0 ? !0 : i, l = n.resize, a = l === void 0 ? !0 : l, s = K(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return p && f.forEach(function(c) {
    c.addEventListener("scroll", o.update, st);
  }), a && s.addEventListener("resize", o.update, st), function() {
    p && f.forEach(function(c) {
      c.removeEventListener("scroll", o.update, st);
    }), a && s.removeEventListener("resize", o.update, st);
  };
}
const wn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bn,
  data: {}
};
var xn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ft(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return xn[e];
  });
}
var On = {
  start: "end",
  end: "start"
};
function Gt(t) {
  return t.replace(/start|end/g, function(e) {
    return On[e];
  });
}
function jt(t) {
  var e = K(t), o = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: n
  };
}
function It(t) {
  return Ne(be(t)).left + jt(t).scrollLeft;
}
function Tn(t, e) {
  var o = K(t), n = be(t), i = o.visualViewport, p = n.clientWidth, l = n.clientHeight, a = 0, s = 0;
  if (i) {
    p = i.width, l = i.height;
    var f = Eo();
    (f || !f && e === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: p,
    height: l,
    x: a + It(t),
    y: s
  };
}
function En(t) {
  var e, o = be(t), n = jt(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, p = Ee(o.scrollWidth, o.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = Ee(o.scrollHeight, o.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -n.scrollLeft + It(t), s = -n.scrollTop;
  return he(i || o).direction === "rtl" && (a += Ee(o.clientWidth, i ? i.clientWidth : 0) - p), {
    width: p,
    height: l,
    x: a,
    y: s
  };
}
function Lt(t) {
  var e = he(t), o = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + i + n);
}
function Mo(t) {
  return ["html", "body", "#document"].indexOf(fe(t)) >= 0 ? t.ownerDocument.body : Z(t) && Lt(t) ? t : Mo(xt(t));
}
function _e(t, e) {
  var o;
  e === void 0 && (e = []);
  var n = Mo(t), i = n === ((o = t.ownerDocument) == null ? void 0 : o.body), p = K(n), l = i ? [p].concat(p.visualViewport || [], Lt(n) ? n : []) : n, a = e.concat(l);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(_e(xt(l)))
  );
}
function Ct(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Rn(t, e) {
  var o = Ne(t, !1, e === "fixed");
  return o.top = o.top + t.clientTop, o.left = o.left + t.clientLeft, o.bottom = o.top + t.clientHeight, o.right = o.left + t.clientWidth, o.width = t.clientWidth, o.height = t.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Jt(t, e, o) {
  return e === Oo ? Ct(Tn(t, o)) : Re(e) ? Rn(e, o) : Ct(En(be(t)));
}
function Pn(t) {
  var e = _e(xt(t)), o = ["absolute", "fixed"].indexOf(he(t).position) >= 0, n = o && Z(t) ? tt(t) : t;
  return Re(n) ? e.filter(function(i) {
    return Re(i) && Ro(i, n) && fe(i) !== "body";
  }) : [];
}
function Cn(t, e, o, n) {
  var i = e === "clippingParents" ? Pn(t) : [].concat(e), p = [].concat(i, [o]), l = p[0], a = p.reduce(function(s, f) {
    var c = Jt(t, f, n);
    return s.top = Ee(c.top, s.top), s.right = vt(c.right, s.right), s.bottom = vt(c.bottom, s.bottom), s.left = Ee(c.left, s.left), s;
  }, Jt(t, l, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Ao(t) {
  var e = t.reference, o = t.element, n = t.placement, i = n ? ce(n) : null, p = n ? Be(n) : null, l = e.x + e.width / 2 - o.width / 2, a = e.y + e.height / 2 - o.height / 2, s;
  switch (i) {
    case q:
      s = {
        x: l,
        y: e.y - o.height
      };
      break;
    case ee:
      s = {
        x: l,
        y: e.y + e.height
      };
      break;
    case te:
      s = {
        x: e.x + e.width,
        y: a
      };
      break;
    case _:
      s = {
        x: e.x - o.width,
        y: a
      };
      break;
    default:
      s = {
        x: e.x,
        y: e.y
      };
  }
  var f = i ? Bt(i) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (p) {
      case $e:
        s[f] = s[f] - (e[c] / 2 - o[c] / 2);
        break;
      case Ke:
        s[f] = s[f] + (e[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function Ge(t, e) {
  e === void 0 && (e = {});
  var o = e, n = o.placement, i = n === void 0 ? t.placement : n, p = o.strategy, l = p === void 0 ? t.strategy : p, a = o.boundary, s = a === void 0 ? _r : a, f = o.rootBoundary, c = f === void 0 ? Oo : f, h = o.elementContext, y = h === void 0 ? Ve : h, u = o.altBoundary, w = u === void 0 ? !1 : u, m = o.padding, v = m === void 0 ? 0 : m, x = Co(typeof v != "number" ? v : So(v, et)), C = y === Ve ? Yr : Ve, b = t.rects.popper, g = t.elements[w ? C : y], R = Cn(Re(g) ? g : g.contextElement || be(t.elements.popper), s, c, l), O = Ne(t.elements.reference), S = Ao({
    reference: O,
    element: b,
    placement: i
  }), B = Ct(Object.assign({}, b, S)), A = y === Ve ? B : O, T = {
    top: R.top - A.top + x.top,
    bottom: A.bottom - R.bottom + x.bottom,
    left: R.left - A.left + x.left,
    right: A.right - R.right + x.right
  }, D = t.modifiersData.offset;
  if (y === Ve && D) {
    var W = D[i];
    Object.keys(T).forEach(function($) {
      var F = [te, ee].indexOf($) >= 0 ? 1 : -1, U = [q, ee].indexOf($) >= 0 ? "y" : "x";
      T[$] += W[U] * F;
    });
  }
  return T;
}
function Sn(t, e) {
  e === void 0 && (e = {});
  var o = e, n = o.placement, i = o.boundary, p = o.rootBoundary, l = o.padding, a = o.flipVariations, s = o.allowedAutoPlacements, f = s === void 0 ? To : s, c = Be(n), h = c ? a ? Yt : Yt.filter(function(w) {
    return Be(w) === c;
  }) : et, y = h.filter(function(w) {
    return f.indexOf(w) >= 0;
  });
  y.length === 0 && (y = h);
  var u = y.reduce(function(w, m) {
    return w[m] = Ge(t, {
      placement: m,
      boundary: i,
      rootBoundary: p,
      padding: l
    })[ce(m)], w;
  }, {});
  return Object.keys(u).sort(function(w, m) {
    return u[w] - u[m];
  });
}
function Mn(t) {
  if (ce(t) === $t)
    return [];
  var e = ft(t);
  return [Gt(t), e, Gt(e)];
}
function An(t) {
  var e = t.state, o = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = o.mainAxis, p = i === void 0 ? !0 : i, l = o.altAxis, a = l === void 0 ? !0 : l, s = o.fallbackPlacements, f = o.padding, c = o.boundary, h = o.rootBoundary, y = o.altBoundary, u = o.flipVariations, w = u === void 0 ? !0 : u, m = o.allowedAutoPlacements, v = e.options.placement, x = ce(v), C = x === v, b = s || (C || !w ? [ft(v)] : Mn(v)), g = [v].concat(b).reduce(function(Y, X) {
      return Y.concat(ce(X) === $t ? Sn(e, {
        placement: X,
        boundary: c,
        rootBoundary: h,
        padding: f,
        flipVariations: w,
        allowedAutoPlacements: m
      }) : X);
    }, []), R = e.rects.reference, O = e.rects.popper, S = /* @__PURE__ */ new Map(), B = !0, A = g[0], T = 0; T < g.length; T++) {
      var D = g[T], W = ce(D), $ = Be(D) === $e, F = [q, ee].indexOf(W) >= 0, U = F ? "width" : "height", I = Ge(e, {
        placement: D,
        boundary: c,
        rootBoundary: h,
        altBoundary: y,
        padding: f
      }), N = F ? $ ? te : _ : $ ? ee : q;
      R[U] > O[U] && (N = ft(N));
      var z = ft(N), oe = [];
      if (p && oe.push(I[W] <= 0), a && oe.push(I[N] <= 0, I[z] <= 0), oe.every(function(Y) {
        return Y;
      })) {
        A = D, B = !1;
        break;
      }
      S.set(D, oe);
    }
    if (B)
      for (var V = w ? 3 : 1, me = function(X) {
        var P = g.find(function(H) {
          var L = S.get(H);
          if (L)
            return L.slice(0, X).every(function(G) {
              return G;
            });
        });
        if (P)
          return A = P, "break";
      }, re = V; re > 0; re--) {
        var ve = me(re);
        if (ve === "break") break;
      }
    e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0);
  }
}
const $n = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: An,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qt(t, e, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - o.y,
    right: t.right - e.width + o.x,
    bottom: t.bottom - e.height + o.y,
    left: t.left - e.width - o.x
  };
}
function Zt(t) {
  return [q, te, ee, _].some(function(e) {
    return t[e] >= 0;
  });
}
function Dn(t) {
  var e = t.state, o = t.name, n = e.rects.reference, i = e.rects.popper, p = e.modifiersData.preventOverflow, l = Ge(e, {
    elementContext: "reference"
  }), a = Ge(e, {
    altBoundary: !0
  }), s = Qt(l, n), f = Qt(a, i, p), c = Zt(s), h = Zt(f);
  e.modifiersData[o] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: h
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": h
  });
}
const Nn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Dn
};
function Bn(t, e, o) {
  var n = ce(t), i = [_, q].indexOf(n) >= 0 ? -1 : 1, p = typeof o == "function" ? o(Object.assign({}, e, {
    placement: t
  })) : o, l = p[0], a = p[1];
  return l = l || 0, a = (a || 0) * i, [_, te].indexOf(n) >= 0 ? {
    x: a,
    y: l
  } : {
    x: l,
    y: a
  };
}
function jn(t) {
  var e = t.state, o = t.options, n = t.name, i = o.offset, p = i === void 0 ? [0, 0] : i, l = To.reduce(function(c, h) {
    return c[h] = Bn(h, e.rects, p), c;
  }, {}), a = l[e.placement], s = a.x, f = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = l;
}
const In = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jn
};
function Ln(t) {
  var e = t.state, o = t.name;
  e.modifiersData[o] = Ao({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const kn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ln,
  data: {}
};
function Wn(t) {
  return t === "x" ? "y" : "x";
}
function zn(t) {
  var e = t.state, o = t.options, n = t.name, i = o.mainAxis, p = i === void 0 ? !0 : i, l = o.altAxis, a = l === void 0 ? !1 : l, s = o.boundary, f = o.rootBoundary, c = o.altBoundary, h = o.padding, y = o.tether, u = y === void 0 ? !0 : y, w = o.tetherOffset, m = w === void 0 ? 0 : w, v = Ge(e, {
    boundary: s,
    rootBoundary: f,
    padding: h,
    altBoundary: c
  }), x = ce(e.placement), C = Be(e.placement), b = !C, g = Bt(x), R = Wn(g), O = e.modifiersData.popperOffsets, S = e.rects.reference, B = e.rects.popper, A = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, T = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (O) {
    if (p) {
      var $, F = g === "y" ? q : _, U = g === "y" ? ee : te, I = g === "y" ? "height" : "width", N = O[g], z = N + v[F], oe = N - v[U], V = u ? -B[I] / 2 : 0, me = C === $e ? S[I] : B[I], re = C === $e ? -B[I] : -S[I], ve = e.elements.arrow, Y = u && ve ? Nt(ve) : {
        width: 0,
        height: 0
      }, X = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Po(), P = X[F], H = X[U], L = qe(0, S[I], Y[I]), G = b ? S[I] / 2 - V - L - P - T.mainAxis : me - L - P - T.mainAxis, ge = b ? -S[I] / 2 + V + L + H + T.mainAxis : re + L + H + T.mainAxis, ue = e.elements.arrow && tt(e.elements.arrow), ne = ue ? g === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, Ce = ($ = D == null ? void 0 : D[g]) != null ? $ : 0, we = N + G - Ce - ne, Se = N + ge - Ce, je = qe(u ? vt(z, we) : z, N, u ? Ee(oe, Se) : oe);
      O[g] = je, W[g] = je - N;
    }
    if (a) {
      var xe, Me = g === "x" ? q : _, Ie = g === "x" ? ee : te, pe = O[R], Oe = R === "y" ? "height" : "width", Le = pe + v[Me], ke = pe - v[Ie], We = [q, _].indexOf(x) !== -1, ot = (xe = D == null ? void 0 : D[R]) != null ? xe : 0, rt = We ? Le : pe - S[Oe] - B[Oe] - ot + T.altAxis, Ae = We ? pe + S[Oe] + B[Oe] - ot - T.altAxis : ke, nt = u && We ? cn(rt, pe, Ae) : qe(u ? rt : Le, pe, u ? Ae : ke);
      O[R] = nt, W[R] = nt - pe;
    }
    e.modifiersData[n] = W;
  }
}
const Hn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zn,
  requiresIfExists: ["offset"]
};
function Vn(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function Fn(t) {
  return t === K(t) || !Z(t) ? jt(t) : Vn(t);
}
function Un(t) {
  var e = t.getBoundingClientRect(), o = De(e.width) / t.offsetWidth || 1, n = De(e.height) / t.offsetHeight || 1;
  return o !== 1 || n !== 1;
}
function qn(t, e, o) {
  o === void 0 && (o = !1);
  var n = Z(e), i = Z(e) && Un(e), p = be(e), l = Ne(t, i, o), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !o) && ((fe(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Lt(p)) && (a = Fn(e)), Z(e) ? (s = Ne(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : p && (s.x = It(p))), {
    x: l.left + a.scrollLeft - s.x,
    y: l.top + a.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function _n(t) {
  var e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(p) {
    e.set(p.name, p);
  });
  function i(p) {
    o.add(p.name);
    var l = [].concat(p.requires || [], p.requiresIfExists || []);
    l.forEach(function(a) {
      if (!o.has(a)) {
        var s = e.get(a);
        s && i(s);
      }
    }), n.push(p);
  }
  return t.forEach(function(p) {
    o.has(p.name) || i(p);
  }), n;
}
function Yn(t) {
  var e = _n(t);
  return rn.reduce(function(o, n) {
    return o.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Xn(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(o) {
      Promise.resolve().then(function() {
        e = void 0, o(t());
      });
    })), e;
  };
}
function Kn(t) {
  var e = t.reduce(function(o, n) {
    var i = o[n.name];
    return o[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, o;
  }, {});
  return Object.keys(e).map(function(o) {
    return e[o];
  });
}
var eo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function to() {
  for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
    e[o] = arguments[o];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Gn(t) {
  t === void 0 && (t = {});
  var e = t, o = e.defaultModifiers, n = o === void 0 ? [] : o, i = e.defaultOptions, p = i === void 0 ? eo : i;
  return function(a, s, f) {
    f === void 0 && (f = p);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, eo, p),
      modifiersData: {},
      elements: {
        reference: a,
        popper: s
      },
      attributes: {},
      styles: {}
    }, h = [], y = !1, u = {
      state: c,
      setOptions: function(x) {
        var C = typeof x == "function" ? x(c.options) : x;
        m(), c.options = Object.assign({}, p, c.options, C), c.scrollParents = {
          reference: Re(a) ? _e(a) : a.contextElement ? _e(a.contextElement) : [],
          popper: _e(s)
        };
        var b = Yn(Kn([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(g) {
          return g.enabled;
        }), w(), u.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var x = c.elements, C = x.reference, b = x.popper;
          if (to(C, b)) {
            c.rects = {
              reference: qn(C, tt(b), c.options.strategy === "fixed"),
              popper: Nt(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
              return c.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var g = 0; g < c.orderedModifiers.length; g++) {
              if (c.reset === !0) {
                c.reset = !1, g = -1;
                continue;
              }
              var R = c.orderedModifiers[g], O = R.fn, S = R.options, B = S === void 0 ? {} : S, A = R.name;
              typeof O == "function" && (c = O({
                state: c,
                options: B,
                name: A,
                instance: u
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Xn(function() {
        return new Promise(function(v) {
          u.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        m(), y = !0;
      }
    };
    if (!to(a, s))
      return u;
    u.setOptions(f).then(function(v) {
      !y && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function w() {
      c.orderedModifiers.forEach(function(v) {
        var x = v.name, C = v.options, b = C === void 0 ? {} : C, g = v.effect;
        if (typeof g == "function") {
          var R = g({
            state: c,
            name: x,
            instance: u,
            options: b
          }), O = function() {
          };
          h.push(R || O);
        }
      });
    }
    function m() {
      h.forEach(function(v) {
        return v();
      }), h = [];
    }
    return u;
  };
}
var Jn = [wn, kn, yn, sn, In, $n, Hn, hn, Nn], Qn = /* @__PURE__ */ Gn({
  defaultModifiers: Jn
});
function Zn(t) {
  return yt("MuiPopper", t);
}
Qe("MuiPopper", ["root"]);
function ei(t, e) {
  if (e === "ltr")
    return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function gt(t) {
  return typeof t == "function" ? t() : t;
}
function Ot(t) {
  return t.nodeType !== void 0;
}
function ti(t) {
  return !Ot(t);
}
const oi = (t) => {
  const {
    classes: e
  } = t;
  return wt({
    root: ["root"]
  }, Zn, e);
}, ri = {}, ni = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const {
    anchorEl: n,
    children: i,
    direction: p,
    disablePortal: l,
    modifiers: a,
    open: s,
    placement: f,
    popperOptions: c,
    popperRef: h,
    slotProps: y = {},
    slots: u = {},
    TransitionProps: w,
    // @ts-ignore internal logic
    ownerState: m,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = e, x = M.useRef(null), C = ut(x, o), b = M.useRef(null), g = ut(b, h), R = M.useRef(g);
  Ft(() => {
    R.current = g;
  }, [g]), M.useImperativeHandle(h, () => b.current, []);
  const O = ei(f, p), [S, B] = M.useState(O), [A, T] = M.useState(gt(n));
  M.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), M.useEffect(() => {
    n && T(gt(n));
  }, [n]), Ft(() => {
    if (!A || !s)
      return;
    const U = (z) => {
      B(z.placement);
    };
    if (Q.env.NODE_ENV !== "production" && A && Ot(A) && A.nodeType === 1) {
      const z = A.getBoundingClientRect();
      Q.env.NODE_ENV !== "test" && z.top === 0 && z.left === 0 && z.right === 0 && z.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let I = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: z
      }) => {
        U(z);
      }
    }];
    a != null && (I = I.concat(a)), c && c.modifiers != null && (I = I.concat(c.modifiers));
    const N = Qn(A, x.current, {
      placement: O,
      ...c,
      modifiers: I
    });
    return R.current(N), () => {
      N.destroy(), R.current(null);
    };
  }, [A, l, a, s, c, O]);
  const D = {
    placement: S
  };
  w !== null && (D.TransitionProps = w);
  const W = oi(e), $ = u.root ?? "div", F = lr({
    elementType: $,
    externalSlotProps: y.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: e,
    className: W.root
  });
  return /* @__PURE__ */ d($, {
    ...F,
    children: typeof i == "function" ? i(D) : i
  });
}), $o = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const {
    anchorEl: n,
    children: i,
    container: p,
    direction: l = "ltr",
    disablePortal: a = !1,
    keepMounted: s = !1,
    modifiers: f,
    open: c,
    placement: h = "bottom",
    popperOptions: y = ri,
    popperRef: u,
    style: w,
    transition: m = !1,
    slotProps: v = {},
    slots: x = {},
    ...C
  } = e, [b, g] = M.useState(!0), R = () => {
    g(!1);
  }, O = () => {
    g(!0);
  };
  if (!s && !c && (!m || b))
    return null;
  let S;
  if (p)
    S = p;
  else if (n) {
    const T = gt(n);
    S = T && Ot(T) ? Vt(T).body : Vt(null).body;
  }
  const B = !c && s && (!m || b) ? "none" : void 0, A = m ? {
    in: c,
    onEnter: R,
    onExited: O
  } : void 0;
  return /* @__PURE__ */ d(pr, {
    disablePortal: a,
    container: S,
    children: /* @__PURE__ */ d(ni, {
      anchorEl: n,
      direction: l,
      disablePortal: a,
      modifiers: f,
      ref: o,
      open: m ? !b : c,
      placement: h,
      popperOptions: y,
      popperRef: u,
      slotProps: v,
      slots: x,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: B,
        ...w
      },
      TransitionProps: A,
      children: i
    })
  });
});
Q.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: cr(r.oneOfType([ht, r.object, r.func]), (t) => {
    if (t.open) {
      const e = gt(t.anchorEl);
      if (e && Ot(e) && e.nodeType === 1) {
        const o = e.getBoundingClientRect();
        if (Q.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!e || typeof e.getBoundingClientRect != "function" || ti(e) && e.contextElement != null && e.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
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
  container: r.oneOfType([ht, r.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: r.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ho,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
const ii = j($o, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (t, e) => e.root
})({}), kt = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const n = mo(), i = bt({
    props: e,
    name: "MuiPopper"
  }), {
    anchorEl: p,
    component: l,
    components: a,
    componentsProps: s,
    container: f,
    disablePortal: c,
    keepMounted: h,
    modifiers: y,
    open: u,
    placement: w,
    popperOptions: m,
    popperRef: v,
    transition: x,
    slots: C,
    slotProps: b,
    ...g
  } = i, R = (C == null ? void 0 : C.root) ?? (a == null ? void 0 : a.Root), O = {
    anchorEl: p,
    container: f,
    disablePortal: c,
    keepMounted: h,
    modifiers: y,
    open: u,
    placement: w,
    popperOptions: m,
    popperRef: v,
    transition: x,
    ...g
  };
  return /* @__PURE__ */ d(ii, {
    as: l,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: R
    },
    slotProps: b ?? s,
    ...O,
    ref: o
  });
});
Q.env.NODE_ENV !== "production" && (kt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: r.oneOfType([ht, r.object, r.func]),
  /**
   * Popper render function or node.
   */
  children: r.oneOfType([r.node, r.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: r.shape({
    Root: r.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: r.shape({
    root: r.oneOfType([r.func, r.object])
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
  container: r.oneOfType([ht, r.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: r.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: r.arrayOf(r.shape({
    data: r.object,
    effect: r.func,
    enabled: r.bool,
    fn: r.func,
    name: r.any,
    options: r.object,
    phase: r.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: r.arrayOf(r.string),
    requiresIfExists: r.arrayOf(r.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: r.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: r.shape({
    modifiers: r.array,
    onFirstUpdate: r.func,
    placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: r.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ho,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: r.shape({
    root: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: r.shape({
    root: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: r.bool
});
function ai(t) {
  return yt("MuiTooltip", t);
}
const k = Qe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function si(t) {
  return Math.round(t * 1e5) / 1e5;
}
const pi = (t) => {
  const {
    classes: e,
    disableInteractive: o,
    arrow: n,
    touch: i,
    placement: p
  } = t, l = {
    popper: ["popper", !o && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", i && "touch", `tooltipPlacement${Xe(p.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return wt(l, ai, e);
}, li = j(kt, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.popper, !o.disableInteractive && e.popperInteractive, o.arrow && e.popperArrow, !o.open && e.popperClose];
  }
})(Ze(({
  theme: t
}) => ({
  zIndex: (t.vars || t).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: e
    }) => !e,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${k.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${k.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${k.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${k.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !e.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${k.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !!e.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${k.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !e.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${k.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !!e.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${k.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), ci = j("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.tooltip, o.touch && e.touch, o.arrow && e.tooltipArrow, e[`tooltipPlacement${Xe(o.placement.split("-")[0])}`]];
  }
})(Ze(({
  theme: t
}) => ({
  backgroundColor: t.vars ? t.vars.palette.Tooltip.bg : vo(t.palette.grey[700], 0.92),
  borderRadius: (t.vars || t).shape.borderRadius,
  color: (t.vars || t).palette.common.white,
  fontFamily: t.typography.fontFamily,
  padding: "4px 8px",
  fontSize: t.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: t.typography.fontWeightMedium,
  [`.${k.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${k.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${k.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${k.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      padding: "8px 16px",
      fontSize: t.typography.pxToRem(14),
      lineHeight: `${si(16 / 14)}em`,
      fontWeight: t.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: e
    }) => !e.isRtl,
    style: {
      [`.${k.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${k.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !e.isRtl && e.touch,
    style: {
      [`.${k.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${k.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !!e.isRtl,
    style: {
      [`.${k.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${k.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !!e.isRtl && e.touch,
    style: {
      [`.${k.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${k.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      [`.${k.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      [`.${k.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), fi = j("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (t, e) => e.arrow
})(Ze(({
  theme: t
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: t.vars ? t.vars.palette.Tooltip.bg : vo(t.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let pt = !1;
const oo = new ur();
let Fe = {
  x: 0,
  y: 0
};
function lt(t, e) {
  return (o, ...n) => {
    e && e(o, ...n), t(o, ...n);
  };
}
const Do = /* @__PURE__ */ M.forwardRef(function(e, o) {
  const n = bt({
    props: e,
    name: "MuiTooltip"
  }), {
    arrow: i = !1,
    children: p,
    classes: l,
    components: a = {},
    componentsProps: s = {},
    describeChild: f = !1,
    disableFocusListener: c = !1,
    disableHoverListener: h = !1,
    disableInteractive: y = !1,
    disableTouchListener: u = !1,
    enterDelay: w = 100,
    enterNextDelay: m = 0,
    enterTouchDelay: v = 700,
    followCursor: x = !1,
    id: C,
    leaveDelay: b = 0,
    leaveTouchDelay: g = 1500,
    onClose: R,
    onOpen: O,
    open: S,
    placement: B = "bottom",
    PopperComponent: A,
    PopperProps: T = {},
    slotProps: D = {},
    slots: W = {},
    title: $,
    TransitionComponent: F,
    TransitionProps: U,
    ...I
  } = n, N = /* @__PURE__ */ M.isValidElement(p) ? p : /* @__PURE__ */ d("span", {
    children: p
  }), z = fo(), oe = mo(), [V, me] = M.useState(), [re, ve] = M.useState(null), Y = M.useRef(!1), X = y || x, P = Ue(), H = Ue(), L = Ue(), G = Ue(), [ge, ue] = fr({
    controlled: S,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let ne = ge;
  if (Q.env.NODE_ENV !== "production") {
    const {
      current: E
    } = M.useRef(S !== void 0);
    M.useEffect(() => {
      V && V.disabled && !E && $ !== "" && V.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [$, V, E]);
  }
  const Ce = dr(C), we = M.useRef(), Se = Ut(() => {
    we.current !== void 0 && (document.body.style.WebkitUserSelect = we.current, we.current = void 0), G.clear();
  });
  M.useEffect(() => Se, [Se]);
  const je = (E) => {
    oo.clear(), pt = !0, ue(!0), O && !ne && O(E);
  }, xe = Ut(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (E) => {
      oo.start(800 + b, () => {
        pt = !1;
      }), ue(!1), R && ne && R(E), P.start(z.transitions.duration.shortest, () => {
        Y.current = !1;
      });
    }
  ), Me = (E) => {
    Y.current && E.type !== "touchstart" || (V && V.removeAttribute("title"), H.clear(), L.clear(), w || pt && m ? H.start(pt ? m : w, () => {
      je(E);
    }) : je(E));
  }, Ie = (E) => {
    H.clear(), L.start(b, () => {
      xe(E);
    });
  }, [, pe] = M.useState(!1), Oe = (E) => {
    qt(E.target) || (pe(!1), Ie(E));
  }, Le = (E) => {
    V || me(E.currentTarget), qt(E.target) && (pe(!0), Me(E));
  }, ke = (E) => {
    Y.current = !0;
    const ae = N.props;
    ae.onTouchStart && ae.onTouchStart(E);
  }, We = (E) => {
    ke(E), L.clear(), P.clear(), Se(), we.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", G.start(v, () => {
      document.body.style.WebkitUserSelect = we.current, Me(E);
    });
  }, ot = (E) => {
    N.props.onTouchEnd && N.props.onTouchEnd(E), Se(), L.start(g, () => {
      xe(E);
    });
  };
  M.useEffect(() => {
    if (!ne)
      return;
    function E(ae) {
      ae.key === "Escape" && xe(ae);
    }
    return document.addEventListener("keydown", E), () => {
      document.removeEventListener("keydown", E);
    };
  }, [xe, ne]);
  const rt = ut(hr(N), me, o);
  !$ && $ !== 0 && (ne = !1);
  const Ae = M.useRef(), nt = (E) => {
    const ae = N.props;
    ae.onMouseMove && ae.onMouseMove(E), Fe = {
      x: E.clientX,
      y: E.clientY
    }, Ae.current && Ae.current.update();
  }, ze = {}, Tt = typeof $ == "string";
  f ? (ze.title = !ne && Tt && !h ? $ : null, ze["aria-describedby"] = ne ? Ce : null) : (ze["aria-label"] = Tt ? $ : null, ze["aria-labelledby"] = ne && !Tt ? Ce : null);
  const J = {
    ...ze,
    ...I,
    ...N.props,
    className: Ye(I.className, N.props.className),
    onTouchStart: ke,
    ref: rt,
    ...x ? {
      onMouseMove: nt
    } : {}
  };
  Q.env.NODE_ENV !== "production" && (J["data-mui-internal-clone-element"] = !0, M.useEffect(() => {
    V && !V.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [V]));
  const He = {};
  u || (J.onTouchStart = We, J.onTouchEnd = ot), h || (J.onMouseOver = lt(Me, J.onMouseOver), J.onMouseLeave = lt(Ie, J.onMouseLeave), X || (He.onMouseOver = Me, He.onMouseLeave = Ie)), c || (J.onFocus = lt(Le, J.onFocus), J.onBlur = lt(Oe, J.onBlur), X || (He.onFocus = Le, He.onBlur = Oe)), Q.env.NODE_ENV !== "production" && N.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${N.props.title}\` or the Tooltip component.`].join(`
`));
  const Te = {
    ...n,
    isRtl: oe,
    arrow: i,
    disableInteractive: X,
    placement: B,
    PopperComponentProp: A,
    touch: Y.current
  }, ie = typeof D.popper == "function" ? D.popper(Te) : D.popper, No = M.useMemo(() => {
    var ae, Wt;
    let E = [{
      name: "arrow",
      enabled: !!re,
      options: {
        element: re,
        padding: 4
      }
    }];
    return (ae = T.popperOptions) != null && ae.modifiers && (E = E.concat(T.popperOptions.modifiers)), (Wt = ie == null ? void 0 : ie.popperOptions) != null && Wt.modifiers && (E = E.concat(ie.popperOptions.modifiers)), {
      ...T.popperOptions,
      ...ie == null ? void 0 : ie.popperOptions,
      modifiers: E
    };
  }, [re, T.popperOptions, ie == null ? void 0 : ie.popperOptions]), Et = pi(Te), Bo = typeof D.transition == "function" ? D.transition(Te) : D.transition, it = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? F,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...W
    },
    slotProps: {
      arrow: D.arrow ?? s.arrow,
      popper: {
        ...T,
        ...ie ?? s.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: D.tooltip ?? s.tooltip,
      transition: {
        ...U,
        ...Bo ?? s.transition
      }
    }
  }, [jo, Io] = at("popper", {
    elementType: li,
    externalForwardedProps: it,
    ownerState: Te,
    className: Ye(Et.popper, T == null ? void 0 : T.className)
  }), [Lo, ko] = at("transition", {
    elementType: mr,
    externalForwardedProps: it,
    ownerState: Te
  }), [Wo, zo] = at("tooltip", {
    elementType: ci,
    className: Et.tooltip,
    externalForwardedProps: it,
    ownerState: Te
  }), [Ho, Vo] = at("arrow", {
    elementType: fi,
    className: Et.arrow,
    externalForwardedProps: it,
    ownerState: Te,
    ref: ve
  });
  return /* @__PURE__ */ le(M.Fragment, {
    children: [/* @__PURE__ */ M.cloneElement(N, J), /* @__PURE__ */ d(jo, {
      as: A ?? kt,
      placement: B,
      anchorEl: x ? {
        getBoundingClientRect: () => ({
          top: Fe.y,
          left: Fe.x,
          right: Fe.x,
          bottom: Fe.y,
          width: 0,
          height: 0
        })
      } : V,
      popperRef: Ae,
      open: V ? ne : !1,
      id: Ce,
      transition: !0,
      ...He,
      ...Io,
      popperOptions: No,
      children: ({
        TransitionProps: E
      }) => /* @__PURE__ */ d(Lo, {
        timeout: z.transitions.duration.shorter,
        ...E,
        ...ko,
        children: /* @__PURE__ */ le(Wo, {
          ...zo,
          children: [$, i ? /* @__PURE__ */ d(Ho, {
            ...Vo
          }) : null]
        })
      })
    })]
  });
});
Q.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: r.bool,
  /**
   * Tooltip reference element.
   */
  children: vr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: r.shape({
    Arrow: r.elementType,
    Popper: r.elementType,
    Tooltip: r.elementType,
    Transition: r.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: r.shape({
    arrow: r.object,
    popper: r.object,
    tooltip: r.object,
    transition: r.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: r.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: r.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: r.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: r.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: r.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: r.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: r.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: r.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: r.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: r.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: r.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: r.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: r.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: r.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: r.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: r.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    arrow: r.oneOfType([r.func, r.object]),
    popper: r.oneOfType([r.func, r.object]),
    tooltip: r.oneOfType([r.func, r.object]),
    transition: r.oneOfType([r.func, r.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: r.shape({
    arrow: r.elementType,
    popper: r.elementType,
    tooltip: r.elementType,
    transition: r.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: r.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: r.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: r.object
});
const dt = de(/* @__PURE__ */ d("path", {
  d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"
}), "KeyboardArrowLeft"), St = de(/* @__PURE__ */ d("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
}), "KeyboardArrowRight"), di = de(/* @__PURE__ */ d("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), ui = de(/* @__PURE__ */ d("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), ro = de(/* @__PURE__ */ d("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
}), "Settings"), hi = de(/* @__PURE__ */ d("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
}), "Help"), ct = de(/* @__PURE__ */ d("path", {
  d: "M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
}), "ExitToApp"), mi = de(/* @__PURE__ */ d("path", {
  d: "M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2m-8 7V7h-2v3H8v2h3v3h2v-3h3v-2zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5z"
}), "QueuePlayNext"), no = de(/* @__PURE__ */ d("path", {
  d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-1 2H5v-2h2zm0-3H5V8h2zm9 7H8v-2h8zm0-4h-2v-2h2zm0-3h-2V8h2zm3 3h-2v-2h2zm0-3h-2V8h2z"
}), "Keyboard"), Mt = {
  back: dt,
  prev: dt,
  previous: dt,
  next: St,
  forward: St,
  play: di,
  pause: ui,
  settings: ro,
  options: ro,
  help: hi,
  exit: ct,
  quit: ct,
  save: ct,
  done: ct,
  clone: mi,
  hotkeys: no,
  shortcuts: no
}, vi = ye(), io = Mt, gi = (t, e) => {
  const o = e[t.toLowerCase()] || io[t.toLowerCase()] || io.help;
  return /* @__PURE__ */ d(o, {});
}, yi = j(
  Je((t, e) => /* @__PURE__ */ d(gr, { ref: e, ...t }))
)(() => ({
  textTransform: "none",
  width: 60,
  paddingTop: 8,
  paddingBottom: 4,
  marginLeft: 1,
  marginRight: 1
})), bi = j("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 2
})), wi = j("div")(
  ({ textHidden: t }) => ({
    color: se[700],
    height: t ? 32 : 20,
    paddingTop: t ? 8 : 0,
    "& .MuiSvgIcon-root": {
      width: 18,
      height: 18
    }
  })
), xi = j("div")(() => ({
  fontWeight: "bold",
  fontSize: 11,
  color: se[800],
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  justifyContent: "center"
})), ao = Je(({
  name: t,
  icon: e,
  disabled: o,
  onClick: n,
  hideText: i = !1
}, p) => {
  const l = At();
  return /* @__PURE__ */ d(Pe, { theme: vi, children: /* @__PURE__ */ d(yi, { onClick: n, disabled: o, ref: p, children: /* @__PURE__ */ le(bi, { children: [
    /* @__PURE__ */ d(wi, { textHidden: i, children: e || gi(t, l) }),
    !i && /* @__PURE__ */ d(xi, { children: /* @__PURE__ */ d("div", { children: t }) })
  ] }) }) }, t);
}), Oi = ye(), Ti = j("div")(() => ({
  width: "100%",
  display: "flex",
  backgroundColor: "#fff",
  borderBottom: "1px solid #ccc",
  alignItems: "center",
  flexShrink: 1,
  boxSizing: "border-box"
})), Ei = Je(({
  leftSideContent: t = null,
  hideHeaderText: e = !1,
  items: o,
  onClickItem: n,
  customeHeaderItem: i
}, p) => {
  const l = lo({});
  return co(p, () => ({
    clickButtonByName(a) {
      const s = l.current[a];
      s ? s.click() : console.warn(`No button found with name: ${a}`);
    }
  })), /* @__PURE__ */ d(Pe, { theme: Oi, children: /* @__PURE__ */ le(Ti, { children: [
    /* @__PURE__ */ d(go, { flexGrow: 1, children: t }),
    o.map((a, s) => /* @__PURE__ */ d(
      ao,
      {
        ref: (f) => {
          l.current[a.name] = f;
        },
        hideText: e,
        onClick: () => n(a),
        ...a
      },
      `${a.name}-${s}`
    )),
    i ? /* @__PURE__ */ d(
      ao,
      {
        ref: (a) => {
          l.current[i.name] = a;
        },
        hideText: e,
        onClick: () => i.onClickAction(),
        name: i.name,
        icon: i.icon
      },
      "customHeader"
    ) : /* @__PURE__ */ d(Fo, {})
  ] }) });
}), Ri = ye(), Pi = j("div")(() => ({
  width: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flexShrink: 0,
  backgroundColor: "#fff",
  position: "relative",
  transition: "width 500ms",
  "&.expanded": {
    width: 300
  }
})), Ci = j(yr)(() => ({
  width: 23,
  height: 40,
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "flex-start",
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "50%",
  boxSizing: "border-box",
  borderTop: `1px solid ${se[400]}`,
  borderBottom: `1px solid ${se[400]}`,
  borderLeft: `1px solid ${se[400]}`,
  boxShadow: "-1px 2px 5px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
  position: "absolute",
  top: "calc(50% - 20px)",
  left: -23,
  zIndex: 9999,
  transition: "opacity 500ms, left 500ms, width 500ms",
  "&.expanded": {
    left: -20,
    width: 20,
    opacity: 0.4,
    "& .icon": {
      marginLeft: 0
    }
  },
  "& .icon": {
    marginLeft: 3
  }
})), Si = j("div")(() => ({
  position: "absolute",
  right: 0,
  top: 0,
  width: 0,
  bottom: 0,
  overflow: "hidden",
  transition: "opacity 500ms, left 500ms, width 500ms",
  "&.expanded": {
    width: 300
  }
})), Mi = j("div")(() => ({
  width: 300,
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0
})), Ai = () => {
  try {
    return JSON.parse(window.localStorage.__REACT_WORKSPACE_LAYOUT_EXPANDED);
  } catch {
    return window.innerWidth > 1e3;
  }
}, $i = ({
  children: t,
  initiallyExpanded: e,
  height: o
}) => {
  const [n, i] = Ko(
    (l) => !l,
    e === void 0 ? Ai() : e
  );
  so(() => {
    e === void 0 && (window.localStorage.__REACT_WORKSPACE_LAYOUT_EXPANDED = JSON.stringify(n));
  }, [e, n]);
  const p = po(
    () => ({ height: o || "100%" }),
    [o]
  );
  return /* @__PURE__ */ d(Pe, { theme: Ri, children: /* @__PURE__ */ le(Pi, { className: n ? "expanded" : "", style: p, children: [
    /* @__PURE__ */ d(Si, { className: n ? "expanded" : "", children: /* @__PURE__ */ d(Mi, { children: t }) }),
    /* @__PURE__ */ d(
      Ci,
      {
        onClick: i,
        className: n ? "expanded" : "",
        children: n ? /* @__PURE__ */ d(St, { className: "icon" }) : /* @__PURE__ */ d(dt, { className: "icon" })
      }
    )
  ] }) });
}, Di = ye(), Ni = j("div")(() => ({
  position: "relative",
  flexGrow: 1,
  flexShrink: 1,
  height: "100%",
  backgroundColor: se[50],
  overflowY: "auto",
  // borderBottomRightRadius: "10px",
  // borderBottomLeftRadius: "10px",
  borderRadius: "10px",
  marginTop: "5px",
  boxShadow: "inset 0 3px 5px rgba(0,0,0,0.15), inset -3px 0 5px rgba(0,0,0,0.15), inset 3px 0 5px rgba(0,0,0,0.15)"
})), Bi = Je(({ children: t }, e) => /* @__PURE__ */ d(Pe, { theme: Di, children: /* @__PURE__ */ d(Ni, { ref: e, children: t }) })), ji = ye(), Ii = j("div")(() => ({
  width: 50,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  flexShrink: 0,
  marginTop: "5px"
})), Li = ({
  items: t = [],
  onClickItem: e,
  selectedTools: o = []
}) => {
  const n = At();
  return /* @__PURE__ */ d(Pe, { theme: ji, children: /* @__PURE__ */ d(Ii, { children: t.map((i) => {
    let p = n[i.name.toLowerCase()] || Mt[i.name.toLowerCase()] || Mt.help;
    const l = /* @__PURE__ */ d(
      uo,
      {
        color: i.selected || o.includes(
          i.name.toLowerCase()
        ) ? "primary" : "default",
        disabled: !!i.disabled,
        onClick: () => i.onClick ? i.onClick(i) : e(i),
        children: /* @__PURE__ */ d(p, {})
      },
      i.name
    );
    return i.helperText ? /* @__PURE__ */ d(Do, { title: i.helperText, placement: "right", children: l }, i.name) : l;
  }) }) });
}, ki = ye(), Wi = j("div")(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  maxWidth: "100vw"
})), zi = j("div")(() => ({
  display: "flex",
  flexGrow: 1,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  maxWidth: "100vw",
  paddingBottom: "10px"
})), qi = Je(({
  style: t = {},
  iconSidebarItems: e = [],
  selectedTools: o = ["select"],
  headerItems: n = [],
  rightSidebarItems: i = [],
  onClickHeaderItem: p,
  onClickIconSidebarItem: l,
  headerLeftSide: a = null,
  iconDictionary: s = {},
  rightSidebarExpanded: f,
  hideHeader: c = !1,
  hideHeaderText: h = !1,
  customeHeaderItem: y,
  children: u
}, w) => {
  const [m, v] = qr(), x = lo(null);
  return co(w, () => ({
    clickHeaderButton(C) {
      var b;
      (b = x.current) == null || b.clickButtonByName(C);
    }
  })), /* @__PURE__ */ d(Pe, { theme: ki, children: /* @__PURE__ */ d(bo.Provider, { value: s, children: /* @__PURE__ */ le(Wi, { style: t, children: [
    !c && /* @__PURE__ */ d(
      Ei,
      {
        ref: x,
        hideHeaderText: h,
        leftSideContent: a,
        onClickItem: p,
        items: n,
        customeHeaderItem: y
      }
    ),
    /* @__PURE__ */ le(zi, { ref: m, children: [
      e.length === 0 ? null : /* @__PURE__ */ d(
        Li,
        {
          onClickItem: l,
          selectedTools: o,
          items: e
        }
      ),
      /* @__PURE__ */ d(Bi, { children: u }),
      i.length === 0 ? null : /* @__PURE__ */ d(
        $i,
        {
          initiallyExpanded: f,
          height: v.height || 0,
          children: i
        }
      )
    ] })
  ] }) }) });
});
export {
  go as B,
  Ei as H,
  Li as I,
  $i as R,
  Hr as S,
  yo as T,
  qi as W,
  Do as a,
  ao as b,
  Bi as c,
  Ui as t
};

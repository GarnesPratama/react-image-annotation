var sa = Object.defineProperty;
var ca = (e, t, r) => t in e ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var kt = (e, t, r) => ca(e, typeof t != "symbol" ? t + "" : t, r);
import * as T from "react";
import Ge, { forwardRef as la, useContext as Xo, isValidElement as ar, cloneElement as sr, Children as ua, useRef as fa, useLayoutEffect as da, useMemo as pa } from "react";
import { jsx as W, jsxs as Ut } from "react/jsx-runtime";
import * as ma from "react-dom";
import er from "react-dom";
function ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jo = { exports: {} }, he = Jo.exports = {}, Be, Le;
function Qr() {
  throw new Error("setTimeout has not been defined");
}
function Zr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Be = setTimeout : Be = Qr;
  } catch {
    Be = Qr;
  }
  try {
    typeof clearTimeout == "function" ? Le = clearTimeout : Le = Zr;
  } catch {
    Le = Zr;
  }
})();
function Qo(e) {
  if (Be === setTimeout)
    return setTimeout(e, 0);
  if ((Be === Qr || !Be) && setTimeout)
    return Be = setTimeout, setTimeout(e, 0);
  try {
    return Be(e, 0);
  } catch {
    try {
      return Be.call(null, e, 0);
    } catch {
      return Be.call(this, e, 0);
    }
  }
}
function ga(e) {
  if (Le === clearTimeout)
    return clearTimeout(e);
  if ((Le === Zr || !Le) && clearTimeout)
    return Le = clearTimeout, clearTimeout(e);
  try {
    return Le(e);
  } catch {
    try {
      return Le.call(null, e);
    } catch {
      return Le.call(this, e);
    }
  }
}
var He = [], Et = !1, ut, cr = -1;
function ya() {
  !Et || !ut || (Et = !1, ut.length ? He = ut.concat(He) : cr = -1, He.length && Zo());
}
function Zo() {
  if (!Et) {
    var e = Qo(ya);
    Et = !0;
    for (var t = He.length; t; ) {
      for (ut = He, He = []; ++cr < t; )
        ut && ut[cr].run();
      cr = -1, t = He.length;
    }
    ut = null, Et = !1, ga(e);
  }
}
he.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  He.push(new ei(e, t)), He.length === 1 && !Et && Qo(Zo);
};
function ei(e, t) {
  this.fun = e, this.array = t;
}
ei.prototype.run = function() {
  this.fun.apply(null, this.array);
};
he.title = "browser";
he.browser = !0;
he.env = {};
he.argv = [];
he.version = "";
he.versions = {};
function Je() {
}
he.on = Je;
he.addListener = Je;
he.once = Je;
he.off = Je;
he.removeListener = Je;
he.removeAllListeners = Je;
he.emit = Je;
he.prependListener = Je;
he.prependOnceListener = Je;
he.listeners = function(e) {
  return [];
};
he.binding = function(e) {
  throw new Error("process.binding is not supported");
};
he.cwd = function() {
  return "/";
};
he.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
he.umask = function() {
  return 0;
};
var ba = Jo.exports;
const R = /* @__PURE__ */ ha(ba);
function ot(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Ke = "$$material";
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mr.apply(null, arguments);
}
function va(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Sa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ea = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Sa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = va(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), xe = "-ms-", hr = "-moz-", Z = "-webkit-", ti = "comm", bn = "rule", vn = "decl", Ca = "@import", ri = "@keyframes", Ta = "@layer", xa = Math.abs, wr = String.fromCharCode, wa = Object.assign;
function $a(e, t) {
  return Ee(e, 0) ^ 45 ? (((t << 2 ^ Ee(e, 0)) << 2 ^ Ee(e, 1)) << 2 ^ Ee(e, 2)) << 2 ^ Ee(e, 3) : 0;
}
function ni(e) {
  return e.trim();
}
function Oa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function en(e, t) {
  return e.indexOf(t);
}
function Ee(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lt(e, t, r) {
  return e.slice(t, r);
}
function ze(e) {
  return e.length;
}
function Sn(e) {
  return e.length;
}
function tr(e, t) {
  return t.push(e), e;
}
function Ra(e, t) {
  return e.map(t).join("");
}
var $r = 1, xt = 1, oi = 0, $e = 0, ye = 0, Ot = "";
function Or(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: $r, column: xt, length: a, return: "" };
}
function At(e, t) {
  return wa(Or("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Pa() {
  return ye;
}
function _a() {
  return ye = $e > 0 ? Ee(Ot, --$e) : 0, xt--, ye === 10 && (xt = 1, $r--), ye;
}
function _e() {
  return ye = $e < oi ? Ee(Ot, $e++) : 0, xt++, ye === 10 && (xt = 1, $r++), ye;
}
function Fe() {
  return Ee(Ot, $e);
}
function lr() {
  return $e;
}
function Wt(e, t) {
  return Lt(Ot, e, t);
}
function zt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ii(e) {
  return $r = xt = 1, oi = ze(Ot = e), $e = 0, [];
}
function ai(e) {
  return Ot = "", e;
}
function ur(e) {
  return ni(Wt($e - 1, tn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ka(e) {
  for (; (ye = Fe()) && ye < 33; )
    _e();
  return zt(e) > 2 || zt(ye) > 3 ? "" : " ";
}
function Aa(e, t) {
  for (; --t && _e() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Wt(e, lr() + (t < 6 && Fe() == 32 && _e() == 32));
}
function tn(e) {
  for (; _e(); )
    switch (ye) {
      case e:
        return $e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tn(ye);
        break;
      case 40:
        e === 41 && tn(e);
        break;
      case 92:
        _e();
        break;
    }
  return $e;
}
function Na(e, t) {
  for (; _e() && e + ye !== 57; )
    if (e + ye === 84 && Fe() === 47)
      break;
  return "/*" + Wt(t, $e - 1) + "*" + wr(e === 47 ? e : _e());
}
function Ia(e) {
  for (; !zt(Fe()); )
    _e();
  return Wt(e, $e);
}
function Ma(e) {
  return ai(fr("", null, null, null, [""], e = ii(e), 0, [0], e));
}
function fr(e, t, r, n, o, i, a, s, f) {
  for (var d = 0, m = 0, p = a, g = 0, b = 0, y = 0, u = 1, C = 1, x = 1, _ = 0, $ = "", v = o, h = i, k = n, A = $; C; )
    switch (y = _, _ = _e()) {
      case 40:
        if (y != 108 && Ee(A, p - 1) == 58) {
          en(A += ee(ur(_), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += ur(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += ka(y);
        break;
      case 92:
        A += Aa(lr() - 1, 7);
        continue;
      case 47:
        switch (Fe()) {
          case 42:
          case 47:
            tr(Da(Na(_e(), lr()), t, r), f);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * u:
        s[d++] = ze(A) * x;
      case 125 * u:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            C = 0;
          case 59 + m:
            x == -1 && (A = ee(A, /\f/g, "")), b > 0 && ze(A) - p && tr(b > 32 ? Zn(A + ";", n, r, p - 1) : Zn(ee(A, " ", "") + ";", n, r, p - 2), f);
            break;
          case 59:
            A += ";";
          default:
            if (tr(k = Qn(A, t, r, d, m, o, s, $, v = [], h = [], p), i), _ === 123)
              if (m === 0)
                fr(A, t, k, k, v, i, p, s, h);
              else
                switch (g === 99 && Ee(A, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fr(e, k, k, n && tr(Qn(e, k, k, 0, 0, o, s, $, o, v = [], p), h), o, h, p, s, n ? v : h);
                    break;
                  default:
                    fr(A, k, k, k, [""], h, 0, s, h);
                }
        }
        d = m = b = 0, u = x = 1, $ = A = "", p = a;
        break;
      case 58:
        p = 1 + ze(A), b = y;
      default:
        if (u < 1) {
          if (_ == 123)
            --u;
          else if (_ == 125 && u++ == 0 && _a() == 125)
            continue;
        }
        switch (A += wr(_), _ * u) {
          case 38:
            x = m > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[d++] = (ze(A) - 1) * x, x = 1;
            break;
          case 64:
            Fe() === 45 && (A += ur(_e())), g = Fe(), m = p = ze($ = A += Ia(lr())), _++;
            break;
          case 45:
            y === 45 && ze(A) == 2 && (u = 0);
        }
    }
  return i;
}
function Qn(e, t, r, n, o, i, a, s, f, d, m) {
  for (var p = o - 1, g = o === 0 ? i : [""], b = Sn(g), y = 0, u = 0, C = 0; y < n; ++y)
    for (var x = 0, _ = Lt(e, p + 1, p = xa(u = a[y])), $ = e; x < b; ++x)
      ($ = ni(u > 0 ? g[x] + " " + _ : ee(_, /&\f/g, g[x]))) && (f[C++] = $);
  return Or(e, t, r, o === 0 ? bn : s, f, d, m);
}
function Da(e, t, r) {
  return Or(e, t, r, ti, wr(Pa()), Lt(e, 2, -2), 0);
}
function Zn(e, t, r, n) {
  return Or(e, t, r, vn, Lt(e, 0, n), Lt(e, n + 1, -1), n);
}
function Ct(e, t) {
  for (var r = "", n = Sn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ba(e, t, r, n) {
  switch (e.type) {
    case Ta:
      if (e.children.length) break;
    case Ca:
    case vn:
      return e.return = e.return || e.value;
    case ti:
      return "";
    case ri:
      return e.return = e.value + "{" + Ct(e.children, n) + "}";
    case bn:
      e.value = e.props.join(",");
  }
  return ze(r = Ct(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function La(e) {
  var t = Sn(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function za(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function si(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Va = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Fe(), o === 38 && i === 12 && (r[n] = 1), !zt(i); )
    _e();
  return Wt(t, $e);
}, ja = function(t, r) {
  var n = -1, o = 44;
  do
    switch (zt(o)) {
      case 0:
        o === 38 && Fe() === 12 && (r[n] = 1), t[n] += Va($e - 1, r, n);
        break;
      case 2:
        t[n] += ur(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Fe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += wr(o);
    }
  while (o = _e());
  return t;
}, Fa = function(t, r) {
  return ai(ja(ii(t), r));
}, eo = /* @__PURE__ */ new WeakMap(), Ua = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !eo.get(n)) && !o) {
      eo.set(t, !0);
      for (var i = [], a = Fa(r, i), s = n.props, f = 0, d = 0; f < a.length; f++)
        for (var m = 0; m < s.length; m++, d++)
          t.props[d] = i[f] ? a[f].replace(/&\f/g, s[m]) : s[m] + " " + a[f];
    }
  }
}, Wa = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ci(e, t) {
  switch ($a(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + hr + e + xe + e + e;
    case 6828:
    case 4268:
      return Z + e + xe + e + e;
    case 6165:
      return Z + e + xe + "flex-" + e + e;
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + xe + "flex-$1$2") + e;
    case 5443:
      return Z + e + xe + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + xe + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + xe + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + xe + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + xe + ee(e, "grow", "positive") + e;
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ze(e) - 1 - t > 6) switch (Ee(e, t + 1)) {
        case 109:
          if (Ee(e, t + 4) !== 45) break;
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + hr + (Ee(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~en(e, "stretch") ? ci(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ee(e, t + 1) !== 115) break;
    case 6444:
      switch (Ee(e, ze(e) - 3 - (~en(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (Ee(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ee(e, t + 11)) {
        case 114:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + xe + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + xe + e + e;
  }
  return e;
}
var Ya = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case vn:
      t.return = ci(t.value, t.length);
      break;
    case ri:
      return Ct([At(t, {
        value: ee(t.value, "@", "@" + Z)
      })], o);
    case bn:
      if (t.length) return Ra(t.props, function(i) {
        switch (Oa(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ct([At(t, {
              props: [ee(i, /:(read-\w+)/, ":" + hr + "$1")]
            })], o);
          case "::placeholder":
            return Ct([At(t, {
              props: [ee(i, /:(plac\w+)/, ":" + Z + "input-$1")]
            }), At(t, {
              props: [ee(i, /:(plac\w+)/, ":" + hr + "$1")]
            }), At(t, {
              props: [ee(i, /:(plac\w+)/, xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, qa = [Ya], Ga = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(u) {
      var C = u.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || qa, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(u) {
      for (var C = u.getAttribute("data-emotion").split(" "), x = 1; x < C.length; x++)
        i[C[x]] = !0;
      s.push(u);
    }
  );
  var f, d = [Ua, Wa];
  {
    var m, p = [Ba, za(function(u) {
      m.insert(u);
    })], g = La(d.concat(o, p)), b = function(C) {
      return Ct(Ma(C), g);
    };
    f = function(C, x, _, $) {
      m = _, b(C ? C + "{" + x.styles + "}" : x.styles), $ && (y.inserted[x.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new Ea({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return y.sheet.hydrate(s), y;
}, cf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function lf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var rn = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function Ha() {
  if (to) return te;
  to = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function $(h) {
    if (typeof h == "object" && h !== null) {
      var k = h.$$typeof;
      switch (k) {
        case t:
          switch (h = h.type, h) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case m:
                case y:
                case b:
                case a:
                  return h;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function v(h) {
    return $(h) === d;
  }
  return te.AsyncMode = f, te.ConcurrentMode = d, te.ContextConsumer = s, te.ContextProvider = a, te.Element = t, te.ForwardRef = m, te.Fragment = n, te.Lazy = y, te.Memo = b, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = p, te.isAsyncMode = function(h) {
    return v(h) || $(h) === f;
  }, te.isConcurrentMode = v, te.isContextConsumer = function(h) {
    return $(h) === s;
  }, te.isContextProvider = function(h) {
    return $(h) === a;
  }, te.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, te.isForwardRef = function(h) {
    return $(h) === m;
  }, te.isFragment = function(h) {
    return $(h) === n;
  }, te.isLazy = function(h) {
    return $(h) === y;
  }, te.isMemo = function(h) {
    return $(h) === b;
  }, te.isPortal = function(h) {
    return $(h) === r;
  }, te.isProfiler = function(h) {
    return $(h) === i;
  }, te.isStrictMode = function(h) {
    return $(h) === o;
  }, te.isSuspense = function(h) {
    return $(h) === p;
  }, te.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === d || h === i || h === o || h === p || h === g || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === b || h.$$typeof === a || h.$$typeof === s || h.$$typeof === m || h.$$typeof === C || h.$$typeof === x || h.$$typeof === _ || h.$$typeof === u);
  }, te.typeOf = $, te;
}
var re = {}, ro;
function Ka() {
  return ro || (ro = 1, R.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function $(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === i || S === o || S === p || S === g || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === b || S.$$typeof === a || S.$$typeof === s || S.$$typeof === m || S.$$typeof === C || S.$$typeof === x || S.$$typeof === _ || S.$$typeof === u);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var be = S.$$typeof;
        switch (be) {
          case t:
            var Te = S.type;
            switch (Te) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case p:
                return Te;
              default:
                var Ue = Te && Te.$$typeof;
                switch (Ue) {
                  case s:
                  case m:
                  case y:
                  case b:
                  case a:
                    return Ue;
                  default:
                    return be;
                }
            }
          case r:
            return be;
        }
      }
    }
    var h = f, k = d, A = s, I = a, M = t, c = m, w = n, N = y, D = b, H = r, L = i, Y = o, X = p, ue = !1;
    function J(S) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(S) || v(S) === f;
    }
    function O(S) {
      return v(S) === d;
    }
    function P(S) {
      return v(S) === s;
    }
    function B(S) {
      return v(S) === a;
    }
    function j(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function z(S) {
      return v(S) === m;
    }
    function q(S) {
      return v(S) === n;
    }
    function V(S) {
      return v(S) === y;
    }
    function F(S) {
      return v(S) === b;
    }
    function G(S) {
      return v(S) === r;
    }
    function Q(S) {
      return v(S) === i;
    }
    function K(S) {
      return v(S) === o;
    }
    function de(S) {
      return v(S) === p;
    }
    re.AsyncMode = h, re.ConcurrentMode = k, re.ContextConsumer = A, re.ContextProvider = I, re.Element = M, re.ForwardRef = c, re.Fragment = w, re.Lazy = N, re.Memo = D, re.Portal = H, re.Profiler = L, re.StrictMode = Y, re.Suspense = X, re.isAsyncMode = J, re.isConcurrentMode = O, re.isContextConsumer = P, re.isContextProvider = B, re.isElement = j, re.isForwardRef = z, re.isFragment = q, re.isLazy = V, re.isMemo = F, re.isPortal = G, re.isProfiler = Q, re.isStrictMode = K, re.isSuspense = de, re.isValidElementType = $, re.typeOf = v;
  }()), re;
}
R.env.NODE_ENV === "production" ? rn.exports = Ha() : rn.exports = Ka();
var Xa = rn.exports, ui = Xa, Ja = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Qa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fi = {};
fi[ui.ForwardRef] = Ja;
fi[ui.Memo] = Qa;
var Za = !0;
function di(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var En = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Za === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Cn = function(t, r, n) {
  En(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function es(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ts = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, rs = /[A-Z]|^ms/g, ns = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pi = function(t) {
  return t.charCodeAt(1) === 45;
}, no = function(t) {
  return t != null && typeof t != "boolean";
}, zr = /* @__PURE__ */ si(function(e) {
  return pi(e) ? e : e.replace(rs, "-$&").toLowerCase();
}), oo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ns, function(n, o, i) {
          return Ve = {
            name: o,
            styles: i,
            next: Ve
          }, o;
        });
  }
  return ts[t] !== 1 && !pi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Vt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ve = {
          name: o.name,
          styles: o.styles,
          next: Ve
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ve = {
              name: a.name,
              styles: a.styles,
              next: Ve
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return os(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = Ve, d = r(e);
        return Ve = f, Vt(e, t, d);
      }
      break;
    }
  }
  var m = r;
  if (t == null)
    return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function os(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Vt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : no(s) && (n += zr(i) + ":" + oo(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var f = 0; f < a.length; f++)
          no(a[f]) && (n += zr(i) + ":" + oo(i, a[f]) + ";");
      else {
        var d = Vt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += zr(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var io = /label:\s*([^\s;{]+)\s*(;|$)/g, Ve;
function Yt(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ve = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Vt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Vt(r, t, e[s]), n) {
      var f = i;
      o += f[s];
    }
  io.lastIndex = 0;
  for (var d = "", m; (m = io.exec(o)) !== null; )
    d += "-" + m[1];
  var p = es(o) + d;
  return {
    name: p,
    styles: o,
    next: Ve
  };
}
var is = function(t) {
  return t();
}, mi = T.useInsertionEffect ? T.useInsertionEffect : !1, hi = mi || is, ao = mi || T.useLayoutEffect, Tn = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ga({
    key: "css"
  }) : null
);
Tn.Provider;
var uf = function() {
  return Xo(Tn);
}, xn = function(t) {
  return /* @__PURE__ */ la(function(r, n) {
    var o = Xo(Tn);
    return t(r, o, n);
  });
}, qt = /* @__PURE__ */ T.createContext({}), wn = {}.hasOwnProperty, nn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", as = function(t, r) {
  var n = {};
  for (var o in r)
    wn.call(r, o) && (n[o] = r[o]);
  return n[nn] = t, n;
}, ss = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return En(r, n, o), hi(function() {
    return Cn(r, n, o);
  }), null;
}, cs = /* @__PURE__ */ xn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[nn], i = [n], a = "";
  typeof e.className == "string" ? a = di(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Yt(i, void 0, T.useContext(qt));
  a += t.key + "-" + s.name;
  var f = {};
  for (var d in e)
    wn.call(e, d) && d !== "css" && d !== nn && (f[d] = e[d]);
  return f.className = a, r && (f.ref = r), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(ss, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ T.createElement(o, f));
}), ls = cs, so = function(t, r) {
  var n = arguments;
  if (r == null || !wn.call(r, "css"))
    return T.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = ls, i[1] = as(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return T.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(so || (so = {}));
var us = /* @__PURE__ */ xn(function(e, t) {
  var r = e.styles, n = Yt([r], void 0, T.useContext(qt)), o = T.useRef();
  return ao(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, f = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), f !== null && (s = !0, f.setAttribute("data-emotion", i), a.hydrate([f])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), ao(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Cn(t, n.next, !0), a.tags.length) {
      var f = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = f, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function $n() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Yt(t);
}
function Gt() {
  var e = $n.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var fs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ds = /* @__PURE__ */ si(
  function(e) {
    return fs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ps = ds, ms = function(t) {
  return t !== "theme";
}, co = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ps : ms;
}, lo = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, hs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return En(r, n, o), hi(function() {
    return Cn(r, n, o);
  }), null;
}, gs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = lo(t, r, n), f = s || co(o), d = !f("as");
  return function() {
    var m = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      p.push.apply(p, m);
    else {
      var g = m[0];
      p.push(g[0]);
      for (var b = m.length, y = 1; y < b; y++)
        p.push(m[y], g[y]);
    }
    var u = xn(function(C, x, _) {
      var $ = d && C.as || o, v = "", h = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var A in C)
          k[A] = C[A];
        k.theme = T.useContext(qt);
      }
      typeof C.className == "string" ? v = di(x.registered, h, C.className) : C.className != null && (v = C.className + " ");
      var I = Yt(p.concat(h), x.registered, k);
      v += x.key + "-" + I.name, a !== void 0 && (v += " " + a);
      var M = d && s === void 0 ? co($) : f, c = {};
      for (var w in C)
        d && w === "as" || M(w) && (c[w] = C[w]);
      return c.className = v, _ && (c.ref = _), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(hs, {
        cache: x,
        serialized: I,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ T.createElement($, c));
    });
    return u.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", u.defaultProps = t.defaultProps, u.__emotion_real = u, u.__emotion_base = o, u.__emotion_styles = p, u.__emotion_forwardProp = s, Object.defineProperty(u, "toString", {
      value: function() {
        return "." + a;
      }
    }), u.withComponent = function(C, x) {
      var _ = e(C, mr({}, r, x, {
        shouldForwardProp: lo(u, x, !0)
      }));
      return _.apply(void 0, p);
    }, u;
  };
}, ys = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], on = gs.bind(null);
ys.forEach(function(e) {
  on[e] = on(e);
});
var an = { exports: {} }, rr = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo;
function bs() {
  if (uo) return ne;
  uo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function $(h) {
    if (typeof h == "object" && h !== null) {
      var k = h.$$typeof;
      switch (k) {
        case t:
          switch (h = h.type, h) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case m:
                case y:
                case b:
                case a:
                  return h;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function v(h) {
    return $(h) === d;
  }
  return ne.AsyncMode = f, ne.ConcurrentMode = d, ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = m, ne.Fragment = n, ne.Lazy = y, ne.Memo = b, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return v(h) || $(h) === f;
  }, ne.isConcurrentMode = v, ne.isContextConsumer = function(h) {
    return $(h) === s;
  }, ne.isContextProvider = function(h) {
    return $(h) === a;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ne.isForwardRef = function(h) {
    return $(h) === m;
  }, ne.isFragment = function(h) {
    return $(h) === n;
  }, ne.isLazy = function(h) {
    return $(h) === y;
  }, ne.isMemo = function(h) {
    return $(h) === b;
  }, ne.isPortal = function(h) {
    return $(h) === r;
  }, ne.isProfiler = function(h) {
    return $(h) === i;
  }, ne.isStrictMode = function(h) {
    return $(h) === o;
  }, ne.isSuspense = function(h) {
    return $(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === d || h === i || h === o || h === p || h === g || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === b || h.$$typeof === a || h.$$typeof === s || h.$$typeof === m || h.$$typeof === C || h.$$typeof === x || h.$$typeof === _ || h.$$typeof === u);
  }, ne.typeOf = $, ne;
}
var oe = {}, fo;
function vs() {
  return fo || (fo = 1, R.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function $(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === i || S === o || S === p || S === g || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === b || S.$$typeof === a || S.$$typeof === s || S.$$typeof === m || S.$$typeof === C || S.$$typeof === x || S.$$typeof === _ || S.$$typeof === u);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var be = S.$$typeof;
        switch (be) {
          case t:
            var Te = S.type;
            switch (Te) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case p:
                return Te;
              default:
                var Ue = Te && Te.$$typeof;
                switch (Ue) {
                  case s:
                  case m:
                  case y:
                  case b:
                  case a:
                    return Ue;
                  default:
                    return be;
                }
            }
          case r:
            return be;
        }
      }
    }
    var h = f, k = d, A = s, I = a, M = t, c = m, w = n, N = y, D = b, H = r, L = i, Y = o, X = p, ue = !1;
    function J(S) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(S) || v(S) === f;
    }
    function O(S) {
      return v(S) === d;
    }
    function P(S) {
      return v(S) === s;
    }
    function B(S) {
      return v(S) === a;
    }
    function j(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function z(S) {
      return v(S) === m;
    }
    function q(S) {
      return v(S) === n;
    }
    function V(S) {
      return v(S) === y;
    }
    function F(S) {
      return v(S) === b;
    }
    function G(S) {
      return v(S) === r;
    }
    function Q(S) {
      return v(S) === i;
    }
    function K(S) {
      return v(S) === o;
    }
    function de(S) {
      return v(S) === p;
    }
    oe.AsyncMode = h, oe.ConcurrentMode = k, oe.ContextConsumer = A, oe.ContextProvider = I, oe.Element = M, oe.ForwardRef = c, oe.Fragment = w, oe.Lazy = N, oe.Memo = D, oe.Portal = H, oe.Profiler = L, oe.StrictMode = Y, oe.Suspense = X, oe.isAsyncMode = J, oe.isConcurrentMode = O, oe.isContextConsumer = P, oe.isContextProvider = B, oe.isElement = j, oe.isForwardRef = z, oe.isFragment = q, oe.isLazy = V, oe.isMemo = F, oe.isPortal = G, oe.isProfiler = Q, oe.isStrictMode = K, oe.isSuspense = de, oe.isValidElementType = $, oe.typeOf = v;
  }()), oe;
}
var po;
function gi() {
  return po || (po = 1, R.env.NODE_ENV === "production" ? rr.exports = bs() : rr.exports = vs()), rr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vr, mo;
function Ss() {
  if (mo) return Vr;
  mo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vr = o() ? Object.assign : function(i, a) {
    for (var s, f = n(i), d, m = 1; m < arguments.length; m++) {
      s = Object(arguments[m]);
      for (var p in s)
        t.call(s, p) && (f[p] = s[p]);
      if (e) {
        d = e(s);
        for (var g = 0; g < d.length; g++)
          r.call(s, d[g]) && (f[d[g]] = s[d[g]]);
      }
    }
    return f;
  }, Vr;
}
var jr, ho;
function On() {
  if (ho) return jr;
  ho = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jr = e, jr;
}
var Fr, go;
function yi() {
  return go || (go = 1, Fr = Function.call.bind(Object.prototype.hasOwnProperty)), Fr;
}
var Ur, yo;
function Es() {
  if (yo) return Ur;
  yo = 1;
  var e = function() {
  };
  if (R.env.NODE_ENV !== "production") {
    var t = On(), r = {}, n = yi();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, f, d) {
    if (R.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var g = Error(
                (f || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[m](a, m, f, s, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = d ? d() : "";
            e(
              "Failed " + s + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    R.env.NODE_ENV !== "production" && (r = {});
  }, Ur = o, Ur;
}
var Wr, bo;
function Cs() {
  if (bo) return Wr;
  bo = 1;
  var e = gi(), t = Ss(), r = On(), n = yi(), o = Es(), i = function() {
  };
  R.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Wr = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(O) {
      var P = O && (d && O[d] || O[m]);
      if (typeof P == "function")
        return P;
    }
    var g = "<<anonymous>>", b = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: _(),
      arrayOf: $,
      element: v(),
      elementType: h(),
      instanceOf: k,
      node: c(),
      objectOf: I,
      oneOf: A,
      oneOfType: M,
      shape: N,
      exact: D
    };
    function y(O, P) {
      return O === P ? O !== 0 || 1 / O === 1 / P : O !== O && P !== P;
    }
    function u(O, P) {
      this.message = O, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function C(O) {
      if (R.env.NODE_ENV !== "production")
        var P = {}, B = 0;
      function j(q, V, F, G, Q, K, de) {
        if (G = G || g, K = K || F, de !== r) {
          if (f) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (R.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = G + ":" + F;
            !P[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[be] = !0, B++);
          }
        }
        return V[F] == null ? q ? V[F] === null ? new u("The " + Q + " `" + K + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new u("The " + Q + " `" + K + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : O(V, F, G, Q, K);
      }
      var z = j.bind(null, !1);
      return z.isRequired = j.bind(null, !0), z;
    }
    function x(O) {
      function P(B, j, z, q, V, F) {
        var G = B[j], Q = Y(G);
        if (Q !== O) {
          var K = X(G);
          return new u(
            "Invalid " + q + " `" + V + "` of type " + ("`" + K + "` supplied to `" + z + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return C(P);
    }
    function _() {
      return C(a);
    }
    function $(O) {
      function P(B, j, z, q, V) {
        if (typeof O != "function")
          return new u("Property `" + V + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var F = B[j];
        if (!Array.isArray(F)) {
          var G = Y(F);
          return new u("Invalid " + q + " `" + V + "` of type " + ("`" + G + "` supplied to `" + z + "`, expected an array."));
        }
        for (var Q = 0; Q < F.length; Q++) {
          var K = O(F, Q, z, q, V + "[" + Q + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return C(P);
    }
    function v() {
      function O(P, B, j, z, q) {
        var V = P[B];
        if (!s(V)) {
          var F = Y(V);
          return new u("Invalid " + z + " `" + q + "` of type " + ("`" + F + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(O);
    }
    function h() {
      function O(P, B, j, z, q) {
        var V = P[B];
        if (!e.isValidElementType(V)) {
          var F = Y(V);
          return new u("Invalid " + z + " `" + q + "` of type " + ("`" + F + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(O);
    }
    function k(O) {
      function P(B, j, z, q, V) {
        if (!(B[j] instanceof O)) {
          var F = O.name || g, G = J(B[j]);
          return new u("Invalid " + q + " `" + V + "` of type " + ("`" + G + "` supplied to `" + z + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return C(P);
    }
    function A(O) {
      if (!Array.isArray(O))
        return R.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(B, j, z, q, V) {
        for (var F = B[j], G = 0; G < O.length; G++)
          if (y(F, O[G]))
            return null;
        var Q = JSON.stringify(O, function(de, S) {
          var be = X(S);
          return be === "symbol" ? String(S) : S;
        });
        return new u("Invalid " + q + " `" + V + "` of value `" + String(F) + "` " + ("supplied to `" + z + "`, expected one of " + Q + "."));
      }
      return C(P);
    }
    function I(O) {
      function P(B, j, z, q, V) {
        if (typeof O != "function")
          return new u("Property `" + V + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var F = B[j], G = Y(F);
        if (G !== "object")
          return new u("Invalid " + q + " `" + V + "` of type " + ("`" + G + "` supplied to `" + z + "`, expected an object."));
        for (var Q in F)
          if (n(F, Q)) {
            var K = O(F, Q, z, q, V + "." + Q, r);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return C(P);
    }
    function M(O) {
      if (!Array.isArray(O))
        return R.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < O.length; P++) {
        var B = O[P];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(B) + " at index " + P + "."
          ), a;
      }
      function j(z, q, V, F, G) {
        for (var Q = [], K = 0; K < O.length; K++) {
          var de = O[K], S = de(z, q, V, F, G, r);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && Q.push(S.data.expectedType);
        }
        var be = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new u("Invalid " + F + " `" + G + "` supplied to " + ("`" + V + "`" + be + "."));
      }
      return C(j);
    }
    function c() {
      function O(P, B, j, z, q) {
        return H(P[B]) ? null : new u("Invalid " + z + " `" + q + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return C(O);
    }
    function w(O, P, B, j, z) {
      return new u(
        (O || "React class") + ": " + P + " type `" + B + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function N(O) {
      function P(B, j, z, q, V) {
        var F = B[j], G = Y(F);
        if (G !== "object")
          return new u("Invalid " + q + " `" + V + "` of type `" + G + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var Q in O) {
          var K = O[Q];
          if (typeof K != "function")
            return w(z, q, V, Q, X(K));
          var de = K(F, Q, z, q, V + "." + Q, r);
          if (de)
            return de;
        }
        return null;
      }
      return C(P);
    }
    function D(O) {
      function P(B, j, z, q, V) {
        var F = B[j], G = Y(F);
        if (G !== "object")
          return new u("Invalid " + q + " `" + V + "` of type `" + G + "` " + ("supplied to `" + z + "`, expected `object`."));
        var Q = t({}, B[j], O);
        for (var K in Q) {
          var de = O[K];
          if (n(O, K) && typeof de != "function")
            return w(z, q, V, K, X(de));
          if (!de)
            return new u(
              "Invalid " + q + " `" + V + "` key `" + K + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(B[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var S = de(F, K, z, q, V + "." + K, r);
          if (S)
            return S;
        }
        return null;
      }
      return C(P);
    }
    function H(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(H);
          if (O === null || s(O))
            return !0;
          var P = p(O);
          if (P) {
            var B = P.call(O), j;
            if (P !== O.entries) {
              for (; !(j = B.next()).done; )
                if (!H(j.value))
                  return !1;
            } else
              for (; !(j = B.next()).done; ) {
                var z = j.value;
                if (z && !H(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(O, P) {
      return O === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function Y(O) {
      var P = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : L(P, O) ? "symbol" : P;
    }
    function X(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var P = Y(O);
      if (P === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ue(O) {
      var P = X(O);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function J(O) {
      return !O.constructor || !O.constructor.name ? g : O.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Wr;
}
var Yr, vo;
function Ts() {
  if (vo) return Yr;
  vo = 1;
  var e = On();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Yr = function() {
    function n(a, s, f, d, m, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Yr;
}
if (R.env.NODE_ENV !== "production") {
  var xs = gi(), ws = !0;
  an.exports = Cs()(xs.isElement, ws);
} else
  an.exports = Ts()();
var $s = an.exports;
const l = /* @__PURE__ */ li($s);
function Os(e) {
  return e == null || Object.keys(e).length === 0;
}
function Rn(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ W(us, {
    styles: typeof t == "function" ? (o) => t(Os(o) ? r : o) : t
  });
}
R.env.NODE_ENV !== "production" && (Rn.propTypes = {
  defaultTheme: l.object,
  styles: l.oneOfType([l.array, l.string, l.object, l.func])
});
function Rs(e, t) {
  const r = on(e, t);
  return R.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ps(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const So = [];
function Eo(e) {
  return So[0] = e, Yt(So);
}
var sn = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function _s() {
  if (Co) return ae;
  Co = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function y(u) {
    if (typeof u == "object" && u !== null) {
      var C = u.$$typeof;
      switch (C) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case f:
            case d:
            case g:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case s:
                case p:
                case m:
                  return u;
                case i:
                  return u;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ae.ContextConsumer = i, ae.ContextProvider = a, ae.Element = e, ae.ForwardRef = s, ae.Fragment = r, ae.Lazy = p, ae.Memo = m, ae.Portal = t, ae.Profiler = o, ae.StrictMode = n, ae.Suspense = f, ae.SuspenseList = d, ae.isContextConsumer = function(u) {
    return y(u) === i;
  }, ae.isContextProvider = function(u) {
    return y(u) === a;
  }, ae.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, ae.isForwardRef = function(u) {
    return y(u) === s;
  }, ae.isFragment = function(u) {
    return y(u) === r;
  }, ae.isLazy = function(u) {
    return y(u) === p;
  }, ae.isMemo = function(u) {
    return y(u) === m;
  }, ae.isPortal = function(u) {
    return y(u) === t;
  }, ae.isProfiler = function(u) {
    return y(u) === o;
  }, ae.isStrictMode = function(u) {
    return y(u) === n;
  }, ae.isSuspense = function(u) {
    return y(u) === f;
  }, ae.isSuspenseList = function(u) {
    return y(u) === d;
  }, ae.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === f || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === a || u.$$typeof === i || u.$$typeof === s || u.$$typeof === b || u.getModuleId !== void 0);
  }, ae.typeOf = y, ae;
}
var se = {}, To;
function ks() {
  return To || (To = 1, R.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var C = u.$$typeof;
        switch (C) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case d:
              case m:
              case b:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case s:
                  case f:
                  case g:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return C;
                }
            }
          case r:
            return C;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    se.ContextConsumer = a, se.ContextProvider = s, se.Element = t, se.ForwardRef = f, se.Fragment = n, se.Lazy = g, se.Memo = p, se.Portal = r, se.Profiler = i, se.StrictMode = o, se.Suspense = d, se.SuspenseList = m, se.isContextConsumer = function(u) {
      return e(u) === a;
    }, se.isContextProvider = function(u) {
      return e(u) === s;
    }, se.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, se.isForwardRef = function(u) {
      return e(u) === f;
    }, se.isFragment = function(u) {
      return e(u) === n;
    }, se.isLazy = function(u) {
      return e(u) === g;
    }, se.isMemo = function(u) {
      return e(u) === p;
    }, se.isPortal = function(u) {
      return e(u) === r;
    }, se.isProfiler = function(u) {
      return e(u) === i;
    }, se.isStrictMode = function(u) {
      return e(u) === o;
    }, se.isSuspense = function(u) {
      return e(u) === d;
    }, se.isSuspenseList = function(u) {
      return e(u) === m;
    }, se.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === d || u === m || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === s || u.$$typeof === a || u.$$typeof === f || u.$$typeof === y || u.getModuleId !== void 0);
    }, se.typeOf = e;
  }()), se;
}
R.env.NODE_ENV === "production" ? sn.exports = _s() : sn.exports = ks();
var gr = sn.exports;
function je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bi(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || gr.isValidElementType(e) || !je(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = bi(e[r]);
  }), t;
}
function ke(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return je(e) && je(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ T.isValidElement(t[o]) || gr.isValidElementType(t[o]) ? n[o] = t[o] : je(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && je(e[o]) ? n[o] = ke(e[o], t[o], r) : r.clone ? n[o] = je(t[o]) ? bi(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const As = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Ns(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = As(t), a = Object.keys(i);
  function s(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function d(g, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : b) - n / 100}${r})`;
  }
  function m(g) {
    return a.indexOf(g) + 1 < a.length ? d(g, a[a.indexOf(g) + 1]) : s(g);
  }
  function p(g) {
    const b = a.indexOf(g);
    return b === 0 ? s(a[1]) : b === a.length - 1 ? f(a[b]) : d(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: f,
    between: d,
    only: m,
    not: p,
    unit: r,
    ...o
  };
}
function Is(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Ms(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ds(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (R.env.NODE_ENV !== "production")
      throw new Error(R.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ot(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Bs(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const f = t(e.breakpoints.not(...s), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ls = {
  borderRadius: 4
}, at = R.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function Bt(e, t) {
  return t ? ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Rr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, xo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rr[e]}px)`
}, zs = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Rr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || xo;
    return t.reduce((a, s, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || xo;
    return Object.keys(t).reduce((a, s) => {
      if (Ms(i.keys, s)) {
        const f = Ds(n.containerQueries ? n : zs, s);
        f && (a[f] = r(t[s], s));
      } else if (Object.keys(i.values || Rr).includes(s)) {
        const f = i.up(s);
        a[f] = r(t[s], s);
      } else {
        const f = s;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Vs(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function js(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Fs(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (r[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (r[o] = !0);
  }), r;
}
function ff({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || Fs(e, t), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((a, s, f) => (Array.isArray(e) ? (a[s] = e[f] != null ? e[f] : e[i], i = f) : typeof e == "object" ? (a[s] = e[s] != null ? e[s] : e[i], i = s) : a[s] = e, a), {});
}
function ie(e) {
  if (typeof e != "string")
    throw new Error(R.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ot(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Pr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function yr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Pr(e, r) || n, t && (o = t(o, n, e)), o;
}
function ge(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], f = a.theme, d = Pr(f, n) || {};
    return Xe(a, s, (p) => {
      let g = yr(d, o, p);
      return p === g && typeof p == "string" && (g = yr(d, o, `${t}${p === "default" ? "" : ie(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = R.env.NODE_ENV !== "production" ? {
    [t]: at
  } : {}, i.filterProps = [t], i;
}
function Us(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ws = {
  m: "margin",
  p: "padding"
}, Ys = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, wo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qs = Us((e) => {
  if (e.length > 2)
    if (wo[e])
      e = wo[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ws[t], o = Ys[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), _r = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], kr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Gs = [..._r, ...kr];
function Ht(e, t, r, n) {
  const o = Pr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (R.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    R.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (R.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Pn(e) {
  return Ht(e, "spacing", 8, "spacing");
}
function Kt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Hs(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Kt(t, r), n), {});
}
function Ks(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = qs(r), i = Hs(o, n), a = e[r];
  return Xe(e, a, i);
}
function vi(e, t) {
  const r = Pn(e.theme);
  return Object.keys(e).map((n) => Ks(e, t, n, r)).reduce(Bt, {});
}
function pe(e) {
  return vi(e, _r);
}
pe.propTypes = R.env.NODE_ENV !== "production" ? _r.reduce((e, t) => (e[t] = at, e), {}) : {};
pe.filterProps = _r;
function me(e) {
  return vi(e, kr);
}
me.propTypes = R.env.NODE_ENV !== "production" ? kr.reduce((e, t) => (e[t] = at, e), {}) : {};
me.filterProps = kr;
R.env.NODE_ENV !== "production" && Gs.reduce((e, t) => (e[t] = at, e), {});
function Si(e = 8, t = Pn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (R.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ar(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Bt(o, t[i](n)) : o, {});
  return r.propTypes = R.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ne(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ie(e, t) {
  return ge({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xs = Ie("border", Ne), Js = Ie("borderTop", Ne), Qs = Ie("borderRight", Ne), Zs = Ie("borderBottom", Ne), ec = Ie("borderLeft", Ne), tc = Ie("borderColor"), rc = Ie("borderTopColor"), nc = Ie("borderRightColor"), oc = Ie("borderBottomColor"), ic = Ie("borderLeftColor"), ac = Ie("outline", Ne), sc = Ie("outlineColor"), Nr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ht(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kt(t, n)
    });
    return Xe(e, e.borderRadius, r);
  }
  return null;
};
Nr.propTypes = R.env.NODE_ENV !== "production" ? {
  borderRadius: at
} : {};
Nr.filterProps = ["borderRadius"];
Ar(Xs, Js, Qs, Zs, ec, tc, rc, nc, oc, ic, Nr, ac, sc);
const Ir = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ht(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kt(t, n)
    });
    return Xe(e, e.gap, r);
  }
  return null;
};
Ir.propTypes = R.env.NODE_ENV !== "production" ? {
  gap: at
} : {};
Ir.filterProps = ["gap"];
const Mr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ht(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kt(t, n)
    });
    return Xe(e, e.columnGap, r);
  }
  return null;
};
Mr.propTypes = R.env.NODE_ENV !== "production" ? {
  columnGap: at
} : {};
Mr.filterProps = ["columnGap"];
const Dr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ht(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kt(t, n)
    });
    return Xe(e, e.rowGap, r);
  }
  return null;
};
Dr.propTypes = R.env.NODE_ENV !== "production" ? {
  rowGap: at
} : {};
Dr.filterProps = ["rowGap"];
const cc = ge({
  prop: "gridColumn"
}), lc = ge({
  prop: "gridRow"
}), uc = ge({
  prop: "gridAutoFlow"
}), fc = ge({
  prop: "gridAutoColumns"
}), dc = ge({
  prop: "gridAutoRows"
}), pc = ge({
  prop: "gridTemplateColumns"
}), mc = ge({
  prop: "gridTemplateRows"
}), hc = ge({
  prop: "gridTemplateAreas"
}), gc = ge({
  prop: "gridArea"
});
Ar(Ir, Mr, Dr, cc, lc, uc, fc, dc, pc, mc, hc, gc);
function Tt(e, t) {
  return t === "grey" ? t : e;
}
const yc = ge({
  prop: "color",
  themeKey: "palette",
  transform: Tt
}), bc = ge({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tt
}), vc = ge({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tt
});
Ar(yc, bc, vc);
function Pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Sc = ge({
  prop: "width",
  transform: Pe
}), _n = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Rr[r];
      return n ? ((f = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Pe(r)
      };
    };
    return Xe(e, e.maxWidth, t);
  }
  return null;
};
_n.filterProps = ["maxWidth"];
const Ec = ge({
  prop: "minWidth",
  transform: Pe
}), Cc = ge({
  prop: "height",
  transform: Pe
}), Tc = ge({
  prop: "maxHeight",
  transform: Pe
}), xc = ge({
  prop: "minHeight",
  transform: Pe
});
ge({
  prop: "size",
  cssProperty: "width",
  transform: Pe
});
ge({
  prop: "size",
  cssProperty: "height",
  transform: Pe
});
const wc = ge({
  prop: "boxSizing"
});
Ar(Sc, _n, Ec, Cc, Tc, xc, wc);
const Xt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ne
  },
  borderTop: {
    themeKey: "borders",
    transform: Ne
  },
  borderRight: {
    themeKey: "borders",
    transform: Ne
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ne
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ne
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ne
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Nr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tt
  },
  // spacing
  p: {
    style: me
  },
  pt: {
    style: me
  },
  pr: {
    style: me
  },
  pb: {
    style: me
  },
  pl: {
    style: me
  },
  px: {
    style: me
  },
  py: {
    style: me
  },
  padding: {
    style: me
  },
  paddingTop: {
    style: me
  },
  paddingRight: {
    style: me
  },
  paddingBottom: {
    style: me
  },
  paddingLeft: {
    style: me
  },
  paddingX: {
    style: me
  },
  paddingY: {
    style: me
  },
  paddingInline: {
    style: me
  },
  paddingInlineStart: {
    style: me
  },
  paddingInlineEnd: {
    style: me
  },
  paddingBlock: {
    style: me
  },
  paddingBlockStart: {
    style: me
  },
  paddingBlockEnd: {
    style: me
  },
  m: {
    style: pe
  },
  mt: {
    style: pe
  },
  mr: {
    style: pe
  },
  mb: {
    style: pe
  },
  ml: {
    style: pe
  },
  mx: {
    style: pe
  },
  my: {
    style: pe
  },
  margin: {
    style: pe
  },
  marginTop: {
    style: pe
  },
  marginRight: {
    style: pe
  },
  marginBottom: {
    style: pe
  },
  marginLeft: {
    style: pe
  },
  marginX: {
    style: pe
  },
  marginY: {
    style: pe
  },
  marginInline: {
    style: pe
  },
  marginInlineStart: {
    style: pe
  },
  marginInlineEnd: {
    style: pe
  },
  marginBlock: {
    style: pe
  },
  marginBlockStart: {
    style: pe
  },
  marginBlockEnd: {
    style: pe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ir
  },
  rowGap: {
    style: Dr
  },
  columnGap: {
    style: Mr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Pe
  },
  maxWidth: {
    style: _n
  },
  minWidth: {
    transform: Pe
  },
  height: {
    transform: Pe
  },
  maxHeight: {
    transform: Pe
  },
  minHeight: {
    transform: Pe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function $c(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Oc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rc() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: m,
      style: p
    } = s;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = Pr(o, d) || {};
    return p ? p(a) : Xe(a, n, (y) => {
      let u = yr(g, m, y);
      return y === u && typeof y == "string" && (u = yr(g, m, `${r}${y === "default" ? "" : ie(y)}`, y)), f === !1 ? u : {
        [f]: u
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Xt;
    function a(s) {
      let f = s;
      if (typeof s == "function")
        f = s(o);
      else if (typeof s != "object")
        return s;
      if (!f)
        return null;
      const d = Vs(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((g) => {
        const b = Oc(f[g], o);
        if (b != null)
          if (typeof b == "object")
            if (i[g])
              p = Bt(p, e(g, b, o, i));
            else {
              const y = Xe({
                theme: o
              }, b, (u) => ({
                [g]: u
              }));
              $c(y, b) ? p[g] = t({
                sx: b,
                theme: o
              }) : p = Bt(p, y);
            }
          else
            p = Bt(p, e(g, b, o, i));
      }), Is(o, js(m, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const dt = Rc();
dt.filterProps = ["sx"];
function Pc(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function kn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Ns(r), f = Si(o);
  let d = ke({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Ls,
      ...i
    }
  }, a);
  return d = Bs(d), d.applyStyles = Pc, d = t.reduce((m, p) => ke(m, p), d), d.unstable_sxConfig = {
    ...Xt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return dt({
      sx: p,
      theme: this
    });
  }, d;
}
function _c(e) {
  return Object.keys(e).length === 0;
}
function Ei(e = null) {
  const t = T.useContext(qt);
  return !t || _c(t) ? e : t;
}
const kc = kn();
function Ci(e = kc) {
  return Ei(e);
}
function Ti({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Ci(r), o = typeof e == "function" ? e(t && n[t] || n) : e;
  return /* @__PURE__ */ W(Rn, {
    styles: o
  });
}
R.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: l.object,
  /**
   * @ignore
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool]),
  /**
   * @ignore
   */
  themeId: l.string
});
const Ac = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Xt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Nc(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Ac(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return je(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const $o = (e) => e, Ic = () => {
  let e = $o;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $o;
    }
  };
}, Mc = Ic();
function xi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = xi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ce() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = xi(e)) && (n && (n += " "), n += t);
  return n;
}
const Dc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function pt(e, t, r = "Mui") {
  const n = Dc[t];
  return n ? `${r}-${n}` : `${Mc.generate(e)}-${t}`;
}
function Rt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = pt(e, o, r);
  }), n;
}
function wi(e, t = "") {
  return e.displayName || e.name || t;
}
function Oo(e, t, r) {
  const n = wi(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Bc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return wi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gr.ForwardRef:
          return Oo(e, e.render, "ForwardRef");
        case gr.Memo:
          return Oo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $i(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Eo(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Eo(o.style));
  }), n;
}
const Lc = kn();
function qr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zc(e) {
  return e ? (t, r) => r[e] : null;
}
function Vc(e, t, r) {
  e.theme = Wc(e.theme) ? r : e.theme[t] || e.theme;
}
function dr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => dr(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Oi(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Oi(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function jc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Lc,
    rootShouldForwardProp: n = qr,
    slotShouldForwardProp: o = qr
  } = e;
  function i(s) {
    Vc(s, t, r);
  }
  return (s, f = {}) => {
    Ps(s, (h) => h.filter((k) => k !== dt));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = zc(Ri(m)),
      ...y
    } = f, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), C = g || !1;
    let x = qr;
    m === "Root" || m === "root" ? x = n : m ? x = o : Yc(s) && (x = void 0);
    const _ = Rs(s, {
      shouldForwardProp: x,
      label: Uc(d, m),
      ...y
    }), $ = (h) => {
      if (typeof h == "function" && h.__emotion_real !== h)
        return function(A) {
          return dr(A, h);
        };
      if (je(h)) {
        const k = $i(h);
        return k.variants ? function(I) {
          return dr(I, k);
        } : k.style;
      }
      return h;
    }, v = (...h) => {
      const k = [], A = h.map($), I = [];
      if (k.push(i), d && b && I.push(function(N) {
        var Y, X;
        const H = (X = (Y = N.theme.components) == null ? void 0 : Y[d]) == null ? void 0 : X.styleOverrides;
        if (!H)
          return null;
        const L = {};
        for (const ue in H)
          L[ue] = dr(N, H[ue]);
        return b(N, L);
      }), d && !u && I.push(function(N) {
        var L, Y;
        const D = N.theme, H = (Y = (L = D == null ? void 0 : D.components) == null ? void 0 : L[d]) == null ? void 0 : Y.variants;
        return H ? Oi(N, H) : null;
      }), C || I.push(dt), Array.isArray(A[0])) {
        const w = A.shift(), N = new Array(k.length).fill(""), D = new Array(I.length).fill("");
        let H;
        H = [...N, ...w, ...D], H.raw = [...N, ...w.raw, ...D], k.unshift(H);
      }
      const M = [...k, ...A, ...I], c = _(...M);
      return s.muiName && (c.muiName = s.muiName), R.env.NODE_ENV !== "production" && (c.displayName = Fc(d, m, s)), c;
    };
    return _.withConfig && (v.withConfig = _.withConfig), v;
  };
}
function Fc(e, t, r) {
  return e ? `${e}${ie(t || "")}` : `Styled(${Bc(r)})`;
}
function Uc(e, t) {
  let r;
  return R.env.NODE_ENV !== "production" && e && (r = `${e}-${Ri(t || "Root")}`), r;
}
function Wc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Yc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ri(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function br(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const f = s;
              r[o][f] = br(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const vr = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function qc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function An(e, t = 0, r = 1) {
  return R.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), qc(e, t, r);
}
function Gc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), R.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function it(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return it(Gc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(R.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ot(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(R.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ot(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Hc = (e) => {
  const t = it(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, It = (e, t) => {
  try {
    return Hc(e);
  } catch {
    return t && R.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Br(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Pi(e) {
  e = it(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, m = (d + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", f.push(t[3])), Br({
    type: s,
    values: f
  });
}
function cn(e) {
  e = it(e);
  let t = e.type === "hsl" || e.type === "hsla" ? it(Pi(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ro(e, t) {
  const r = cn(e), n = cn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function nt(e, t) {
  return e = it(e), t = An(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Br(e);
}
function nr(e, t, r) {
  try {
    return nt(e, t);
  } catch {
    return e;
  }
}
function Nn(e, t) {
  if (e = it(e), t = An(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Br(e);
}
function ce(e, t, r) {
  try {
    return Nn(e, t);
  } catch {
    return e;
  }
}
function In(e, t) {
  if (e = it(e), t = An(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Br(e);
}
function le(e, t, r) {
  try {
    return In(e, t);
  } catch {
    return e;
  }
}
function Kc(e, t = 0.15) {
  return cn(e) > 0.5 ? Nn(e, t) : In(e, t);
}
function or(e, t, r) {
  try {
    return Kc(e, t);
  } catch {
    return e;
  }
}
function Jt(e, t) {
  return R.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Xc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function _i(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  const f = i.type;
  return typeof f == "function" && !Xc(f) && (s = "Did you accidentally use a plain function component for an element instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ki = Jt(l.element, _i);
ki.isRequired = Jt(l.element.isRequired, _i);
function Jc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Qc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Jc(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Zc = Jt(l.elementType, Qc), el = "exact-prop: ​";
function Mn(e) {
  return R.env.NODE_ENV === "production" ? e : {
    ...e,
    [el]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function tl(e, t, r, n, o) {
  if (R.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const rl = l.oneOfType([l.func, l.object]);
function df(e) {
  return e && e.ownerDocument || document;
}
function Po(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let _o = 0;
function nl(e) {
  const [t, r] = T.useState(e), n = e || t;
  return T.useEffect(() => {
    t == null && (_o += 1, r(`mui-${_o}`));
  }, [t]), n;
}
const ol = {
  ...T
}, ko = ol.useId;
function Ai(e) {
  if (ko !== void 0) {
    const t = ko();
    return e ?? t;
  }
  return nl(e);
}
function pf({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = T.useRef(e !== void 0), [i, a] = T.useState(t), s = o ? e : i;
  if (R.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: d
    } = T.useRef(t);
    T.useEffect(() => {
      !o && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const f = T.useCallback((d) => {
    o || a(d);
  }, []);
  return [s, f];
}
function pr(e) {
  const t = T.useRef(e);
  return vr(() => {
    t.current = e;
  }), T.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function wt(...e) {
  const t = T.useRef(void 0), r = T.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, s = a(n);
        return typeof s == "function" ? s : () => {
          a(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return T.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const Ao = {};
function Ni(e, t) {
  const r = T.useRef(Ao);
  return r.current === Ao && (r.current = e(t)), r;
}
const il = [];
function al(e) {
  T.useEffect(e, il);
}
class Dn {
  constructor() {
    kt(this, "currentId", null);
    kt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    kt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Dn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Ii() {
  const e = Ni(Dn.create).current;
  return al(e.disposeEffect), e;
}
function No(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    R.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Qt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (s === !0 ? "" : " ") + t(d), s = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function sl(e) {
  return typeof e == "string";
}
function Mi(e, t, r) {
  return e === void 0 || sl(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function cl(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Io(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Di(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = Ce(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, u = {
      ...r,
      ...o,
      ...n
    };
    return b.length > 0 && (u.className = b), Object.keys(y).length > 0 && (u.style = y), {
      props: u,
      internalRef: void 0
    };
  }
  const a = cl({
    ...o,
    ...n
  }), s = Io(n), f = Io(o), d = t(a), m = Ce(d == null ? void 0 : d.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = {
    ...d == null ? void 0 : d.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, g = {
    ...d,
    ...r,
    ...f,
    ...s
  };
  return m.length > 0 && (g.className = m), Object.keys(p).length > 0 && (g.style = p), {
    props: g,
    internalRef: d.ref
  };
}
function Bi(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function mf(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : Bi(r, n), {
    props: s,
    internalRef: f
  } = Di({
    ...i,
    externalSlotProps: a
  }), d = wt(f, a == null ? void 0 : a.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Mi(t, {
    ...s,
    ref: d
  }, n);
}
function Li(e) {
  var t;
  return parseInt(T.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Bn = /* @__PURE__ */ T.createContext(null);
R.env.NODE_ENV !== "production" && (Bn.displayName = "ThemeContext");
function Ln() {
  const e = T.useContext(Bn);
  return R.env.NODE_ENV !== "production" && T.useDebugValue(e), e;
}
const ll = typeof Symbol == "function" && Symbol.for, ul = ll ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function fl(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return R.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function Sr(e) {
  const {
    children: t,
    theme: r
  } = e, n = Ln();
  R.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = T.useMemo(() => {
    const i = n === null ? {
      ...r
    } : fl(n, r);
    return i != null && (i[ul] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ W(Bn.Provider, {
    value: o,
    children: t
  });
}
R.env.NODE_ENV !== "production" && (Sr.propTypes = {
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.object, l.func]).isRequired
});
R.env.NODE_ENV !== "production" && R.env.NODE_ENV !== "production" && (Sr.propTypes = Mn(Sr.propTypes));
const zi = /* @__PURE__ */ T.createContext();
function Vi({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ W(zi.Provider, {
    value: e ?? !0,
    ...t
  });
}
R.env.NODE_ENV !== "production" && (Vi.propTypes = {
  children: l.node,
  value: l.bool
});
const hf = () => T.useContext(zi) ?? !1, ji = /* @__PURE__ */ T.createContext(void 0);
function Fi({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ W(ji.Provider, {
    value: e,
    children: t
  });
}
R.env.NODE_ENV !== "production" && (Fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: l.node,
  /**
   * @ignore
   */
  value: l.object
});
function dl(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? br(o.defaultProps, n) : !o.styleOverrides && !o.variants ? br(o, n) : n;
}
function pl({
  props: e,
  name: t
}) {
  const r = T.useContext(ji);
  return dl({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Mo = {};
function Do(e, t, r, n = !1) {
  return T.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function jt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Ei(Mo), i = Ln() || Mo;
  R.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Do(n, o, r), s = Do(n, i, r, !0), f = (n ? a[n] : a).direction === "rtl";
  return /* @__PURE__ */ W(Sr, {
    theme: s,
    children: /* @__PURE__ */ W(qt.Provider, {
      value: a,
      children: /* @__PURE__ */ W(Vi, {
        value: f,
        children: /* @__PURE__ */ W(Fi, {
          value: n ? a[n].components : a.components,
          children: t
        })
      })
    })
  });
}
R.env.NODE_ENV !== "production" && (jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: l.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: l.oneOfType([l.func, l.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: l.string
});
R.env.NODE_ENV !== "production" && R.env.NODE_ENV !== "production" && (jt.propTypes = Mn(jt.propTypes));
const Bo = {
  theme: void 0
};
function ml(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Bo.theme = o.theme, i = $i(e(Bo)), t = i, r = o.theme), i;
  };
}
const zn = "mode", Vn = "color-scheme", hl = "data-color-scheme";
function gl(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = zn,
    colorSchemeStorageKey: i = Vn,
    attribute: a = hl,
    colorSchemeNode: s = "document.documentElement",
    nonce: f
  } = e || {};
  let d = "", m = a;
  if (a === "class" && (m = ".%s"), a === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const g = m.substring(1);
    d += `${s}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${s}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const p = m.match(/\[([^\]]+)\]/);
  if (p) {
    const [g, b] = p[1].split("=");
    b || (d += `${s}.removeAttribute('${g}'.replace('%s', light));
      ${s}.removeAttribute('${g}'.replace('%s', dark));`), d += `
      ${s}.setAttribute('${g}'.replace('%s', colorScheme), ${b ? `${b}.replace('%s', colorScheme)` : '""'});`;
  } else
    d += `${s}.setAttribute('${m}', colorScheme);`;
  return /* @__PURE__ */ W("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? f : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function yl() {
}
const bl = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return yl;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Gr() {
}
function Lo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ui(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function vl(e) {
  return Ui(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Sl(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = zn,
    colorSchemeStorageKey: a = Vn,
    storageWindow: s = typeof window > "u" ? void 0 : window,
    storageManager: f = bl,
    noSsr: d = !1
  } = e, m = o.join(","), p = o.length > 1, g = T.useMemo(() => f == null ? void 0 : f({
    key: i,
    storageWindow: s
  }), [f, i, s]), b = T.useMemo(() => f == null ? void 0 : f({
    key: `${a}-light`,
    storageWindow: s
  }), [f, a, s]), y = T.useMemo(() => f == null ? void 0 : f({
    key: `${a}-dark`,
    storageWindow: s
  }), [f, a, s]), [u, C] = T.useState(() => {
    const I = (g == null ? void 0 : g.get(t)) || t, M = (b == null ? void 0 : b.get(r)) || r, c = (y == null ? void 0 : y.get(n)) || n;
    return {
      mode: I,
      systemMode: Lo(I),
      lightColorScheme: M,
      darkColorScheme: c
    };
  }), [x, _] = T.useState(d || !p);
  T.useEffect(() => {
    _(!0);
  }, []);
  const $ = vl(u), v = T.useCallback((I) => {
    C((M) => {
      if (I === M.mode)
        return M;
      const c = I ?? t;
      return g == null || g.set(c), {
        ...M,
        mode: c,
        systemMode: Lo(c)
      };
    });
  }, [g, t]), h = T.useCallback((I) => {
    I ? typeof I == "string" ? I && !m.includes(I) ? console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`) : C((M) => {
      const c = {
        ...M
      };
      return Ui(M, (w) => {
        w === "light" && (b == null || b.set(I), c.lightColorScheme = I), w === "dark" && (y == null || y.set(I), c.darkColorScheme = I);
      }), c;
    }) : C((M) => {
      const c = {
        ...M
      }, w = I.light === null ? r : I.light, N = I.dark === null ? n : I.dark;
      return w && (m.includes(w) ? (c.lightColorScheme = w, b == null || b.set(w)) : console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`)), N && (m.includes(N) ? (c.darkColorScheme = N, y == null || y.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), c;
    }) : C((M) => (b == null || b.set(r), y == null || y.set(n), {
      ...M,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, b, y, r, n]), k = T.useCallback((I) => {
    u.mode === "system" && C((M) => {
      const c = I != null && I.matches ? "dark" : "light";
      return M.systemMode === c ? M : {
        ...M,
        systemMode: c
      };
    });
  }, [u.mode]), A = T.useRef(k);
  return A.current = k, T.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const I = (...c) => A.current(...c), M = window.matchMedia("(prefers-color-scheme: dark)");
    return M.addListener(I), I(M), () => {
      M.removeListener(I);
    };
  }, [p]), T.useEffect(() => {
    if (p) {
      const I = (g == null ? void 0 : g.subscribe((w) => {
        (!w || ["light", "dark", "system"].includes(w)) && v(w || t);
      })) || Gr, M = (b == null ? void 0 : b.subscribe((w) => {
        (!w || m.match(w)) && h({
          light: w
        });
      })) || Gr, c = (y == null ? void 0 : y.subscribe((w) => {
        (!w || m.match(w)) && h({
          dark: w
        });
      })) || Gr;
      return () => {
        I(), M(), c();
      };
    }
  }, [h, v, m, t, s, p, g, b, y]), {
    ...u,
    mode: x ? u.mode : void 0,
    systemMode: x ? u.systemMode : void 0,
    colorScheme: x ? $ : void 0,
    setMode: v,
    setColorScheme: h
  };
}
const El = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Cl(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = zn,
    colorSchemeStorageKey: o = Vn,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: a,
    resolveTheme: s
  } = e, f = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, d = /* @__PURE__ */ T.createContext(void 0);
  R.env.NODE_ENV !== "production" && (d.displayName = "ColorSchemeContext");
  const m = () => T.useContext(d) || f, p = {}, g = {};
  function b(x) {
    var Hn, Kn, Xn, Jn;
    const {
      children: _,
      theme: $,
      modeStorageKey: v = n,
      colorSchemeStorageKey: h = o,
      disableTransitionOnChange: k = i,
      storageManager: A,
      storageWindow: I = typeof window > "u" ? void 0 : window,
      documentNode: M = typeof document > "u" ? void 0 : document,
      colorSchemeNode: c = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: w = !1,
      disableStyleSheetGeneration: N = !1,
      defaultMode: D = "system",
      noSsr: H
    } = x, L = T.useRef(!1), Y = Ln(), X = T.useContext(d), ue = !!X && !w, J = T.useMemo(() => $ || (typeof r == "function" ? r() : r), [$]), O = J[t], P = O || J, {
      colorSchemes: B = p,
      components: j = g,
      cssVarPrefix: z
    } = P, q = Object.keys(B).filter((Se) => !!B[Se]).join(","), V = T.useMemo(() => q.split(","), [q]), F = typeof a == "string" ? a : a.light, G = typeof a == "string" ? a : a.dark, Q = B[F] && B[G] ? D : ((Kn = (Hn = B[P.defaultColorScheme]) == null ? void 0 : Hn.palette) == null ? void 0 : Kn.mode) || ((Xn = P.palette) == null ? void 0 : Xn.mode), {
      mode: K,
      setMode: de,
      systemMode: S,
      lightColorScheme: be,
      darkColorScheme: Te,
      colorScheme: Ue,
      setColorScheme: Zt
    } = Sl({
      supportedColorSchemes: V,
      defaultLightColorScheme: F,
      defaultDarkColorScheme: G,
      modeStorageKey: v,
      colorSchemeStorageKey: h,
      defaultMode: Q,
      storageManager: A,
      storageWindow: I,
      noSsr: H
    });
    let Ze = K, ve = Ue;
    ue && (Ze = X.mode, ve = X.colorScheme);
    const et = T.useMemo(() => {
      var _t;
      const Se = ve || P.defaultColorScheme, we = ((_t = P.generateThemeVars) == null ? void 0 : _t.call(P)) || P.vars, Re = {
        ...P,
        components: j,
        colorSchemes: B,
        cssVarPrefix: z,
        vars: we
      };
      if (typeof Re.generateSpacing == "function" && (Re.spacing = Re.generateSpacing()), Se) {
        const Me = B[Se];
        Me && typeof Me == "object" && Object.keys(Me).forEach((We) => {
          Me[We] && typeof Me[We] == "object" ? Re[We] = {
            ...Re[We],
            ...Me[We]
          } : Re[We] = Me[We];
        });
      }
      return s ? s(Re) : Re;
    }, [P, ve, j, B, z]), tt = P.colorSchemeSelector;
    vr(() => {
      if (ve && c && tt && tt !== "media") {
        const Se = tt;
        let we = tt;
        if (Se === "class" && (we = ".%s"), Se === "data" && (we = "[data-%s]"), Se != null && Se.startsWith("data-") && !Se.includes("%s") && (we = `[${Se}="%s"]`), we.startsWith("."))
          c.classList.remove(...V.map((Re) => we.substring(1).replace("%s", Re))), c.classList.add(we.substring(1).replace("%s", ve));
        else {
          const Re = we.replace("%s", ve).match(/\[([^\]]+)\]/);
          if (Re) {
            const [_t, Me] = Re[1].split("=");
            Me || V.forEach((We) => {
              c.removeAttribute(_t.replace(ve, We));
            }), c.setAttribute(_t, Me ? Me.replace(/"|'/g, "") : "");
          } else
            c.setAttribute(we, ve);
        }
      }
    }, [ve, tt, c, V]), T.useEffect(() => {
      let Se;
      if (k && L.current && M) {
        const we = M.createElement("style");
        we.appendChild(M.createTextNode(El)), M.head.appendChild(we), window.getComputedStyle(M.body), Se = setTimeout(() => {
          M.head.removeChild(we);
        }, 1);
      }
      return () => {
        clearTimeout(Se);
      };
    }, [ve, k, M]), T.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const Lr = T.useMemo(() => ({
      allColorSchemes: V,
      colorScheme: ve,
      darkColorScheme: Te,
      lightColorScheme: be,
      mode: Ze,
      setColorScheme: Zt,
      setMode: R.env.NODE_ENV === "production" ? de : (Se) => {
        et.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), de(Se);
      },
      systemMode: S
    }), [V, ve, Te, be, Ze, Zt, de, S, et.colorSchemeSelector]);
    let U = !0;
    (N || P.cssVariables === !1 || ue && (Y == null ? void 0 : Y.cssVarPrefix) === z) && (U = !1);
    const Gn = /* @__PURE__ */ Ut(T.Fragment, {
      children: [/* @__PURE__ */ W(jt, {
        themeId: O ? t : void 0,
        theme: et,
        children: _
      }), U && /* @__PURE__ */ W(Rn, {
        styles: ((Jn = et.generateStyleSheets) == null ? void 0 : Jn.call(et)) || []
      })]
    });
    return ue ? Gn : /* @__PURE__ */ W(d.Provider, {
      value: Lr,
      children: Gn
    });
  }
  R.env.NODE_ENV !== "production" && (b.propTypes = {
    /**
     * The component tree.
     */
    children: l.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: l.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: l.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: l.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: l.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: l.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: l.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: l.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: l.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: l.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: l.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: l.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: l.object
  });
  const y = typeof a == "string" ? a : a.light, u = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: b,
    useColorScheme: m,
    getInitColorSchemeScript: (x) => gl({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: u,
      modeStorageKey: n,
      ...x
    })
  };
}
function Tl(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const zo = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, xl = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, f]) => {
      (!r || r && !r([...i, s])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, s], Array.isArray(f) ? [...a, s] : a) : t([...i, s], f, a));
    });
  }
  n(e);
}, wl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Hr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return xl(
    e,
    (s, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(s, f))) {
        const m = `--${r ? `${r}-` : ""}${s.join("-")}`, p = wl(s, f);
        Object.assign(o, {
          [m]: p
        }), zo(i, s, `var(${m})`, d), zo(a, s, `var(${m}, ${p})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function $l(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...f
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: p
  } = Hr(f, t);
  let g = p;
  const b = {}, {
    [s]: y,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([$, v]) => {
    const {
      vars: h,
      css: k,
      varsWithDefaults: A
    } = Hr(v, t);
    g = ke(g, A), b[$] = {
      css: k,
      vars: h
    };
  }), y) {
    const {
      css: $,
      vars: v,
      varsWithDefaults: h
    } = Hr(y, t);
    g = ke(g, h), b[s] = {
      css: $,
      vars: v
    };
  }
  function C($, v) {
    var k, A;
    let h = o;
    if (o === "class" && (h = ".%s"), o === "data" && (h = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (h = `[${o}="%s"]`), $) {
      if (h === "media")
        return e.defaultColorScheme === $ ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (k = i[$]) == null ? void 0 : k.palette) == null ? void 0 : A.mode) || $})`]: {
            ":root": v
          }
        };
      if (h)
        return e.defaultColorScheme === $ ? `:root, ${h.replace("%s", String($))}` : h.replace("%s", String($));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let $ = {
        ...d
      };
      return Object.entries(b).forEach(([, {
        vars: v
      }]) => {
        $ = ke($, v);
      }), $;
    },
    generateStyleSheets: () => {
      var I, M;
      const $ = [], v = e.defaultColorScheme || "light";
      function h(c, w) {
        Object.keys(w).length && $.push(typeof c == "string" ? {
          [c]: {
            ...w
          }
        } : c);
      }
      h(r(void 0, {
        ...m
      }), m);
      const {
        [v]: k,
        ...A
      } = b;
      if (k) {
        const {
          css: c
        } = k, w = (M = (I = i[v]) == null ? void 0 : I.palette) == null ? void 0 : M.mode, N = !n && w ? {
          colorScheme: w,
          ...c
        } : {
          ...c
        };
        h(r(v, {
          ...N
        }), N);
      }
      return Object.entries(A).forEach(([c, {
        css: w
      }]) => {
        var H, L;
        const N = (L = (H = i[c]) == null ? void 0 : H.palette) == null ? void 0 : L.mode, D = !n && N ? {
          colorScheme: N,
          ...w
        } : {
          ...w
        };
        h(r(c, {
          ...D
        }), D);
      }), $;
    }
  };
}
function Ol(e) {
  return function(r) {
    return e === "media" ? (R.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ft = {
  black: "#000",
  white: "#fff"
}, Rl = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, mt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ht = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Nt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100"
}, gt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  400: "#42a5f5",
  500: "#2196f3",
  700: "#1976d2",
  800: "#1565c0"
}, yt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, bt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Wi() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ft.white,
      default: Ft.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Pl = Wi();
function Yi() {
  return {
    text: {
      primary: Ft.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ft.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Vo = Yi();
function jo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = In(e.main, o) : t === "dark" && (e.dark = Nn(e.main, i)));
}
function _l(e = "light") {
  return e === "dark" ? {
    main: gt[200],
    light: gt[50],
    dark: gt[400]
  } : {
    main: gt[700],
    light: gt[400],
    dark: gt[800]
  };
}
function kl(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[500],
    light: mt[300],
    dark: mt[700]
  };
}
function Al(e = "light") {
  return e === "dark" ? {
    main: ht[500],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function Nl(e = "light") {
  return e === "dark" ? {
    main: yt[400],
    light: yt[300],
    dark: yt[700]
  } : {
    main: yt[700],
    light: yt[500],
    dark: yt[900]
  };
}
function Il(e = "light") {
  return e === "dark" ? {
    main: bt[400],
    light: bt[300],
    dark: bt[700]
  } : {
    main: bt[800],
    light: bt[500],
    dark: bt[900]
  };
}
function Ml(e = "light") {
  return e === "dark" ? {
    main: Nt[400],
    light: Nt[300],
    dark: Nt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Nt[500],
    dark: Nt[900]
  };
}
function jn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || _l(t), a = e.secondary || kl(t), s = e.error || Al(t), f = e.info || Nl(t), d = e.success || Il(t), m = e.warning || Ml(t);
  function p(u) {
    const C = Ro(u, Vo.text.primary) >= r ? Vo.text.primary : Pl.text.primary;
    if (R.env.NODE_ENV !== "production") {
      const x = Ro(u, C);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${C} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const g = ({
    color: u,
    name: C,
    mainShade: x = 500,
    lightShade: _ = 300,
    darkShade: $ = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[x] && (u.main = u[x]), !u.hasOwnProperty("main"))
      throw new Error(R.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : ot(11, C ? ` (${C})` : "", x));
    if (typeof u.main != "string")
      throw new Error(R.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ot(12, C ? ` (${C})` : "", JSON.stringify(u.main)));
    return jo(u, "light", _, n), jo(u, "dark", $, n), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let b;
  return t === "light" ? b = Wi() : t === "dark" && (b = Yi()), R.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ke({
    // A collection of common colors.
    common: {
      ...Ft
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Rl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, o);
}
function Dl(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Bl(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Ll(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Fo = {
  textTransform: "uppercase"
}, Uo = '"Roboto", "Helvetica", "Arial", sans-serif';
function qi(e, t) {
  const {
    fontFamily: r = Uo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  R.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, b = m || ((C) => `${C / f * g}rem`), y = (C, x, _, $, v) => ({
    fontFamily: r,
    fontWeight: C,
    fontSize: b(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Uo ? {
      letterSpacing: `${Ll($ / x)}em`
    } : {},
    ...v,
    ...d
  }), u = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Fo),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Fo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ke({
    htmlFontSize: f,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const zl = 0.2, Vl = 0.14, jl = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${jl})`].join(",");
}
const Fl = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ul = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Wo(e) {
  return `${Math.round(e)}ms`;
}
function Yl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ql(e) {
  const t = {
    ...Ul,
    ...e.easing
  }, r = {
    ...Wl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Yl,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (R.env.NODE_ENV !== "production") {
        const m = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(s) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : Wo(a)} ${s} ${typeof f == "string" ? f : Wo(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Gl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Hl(e) {
  return je(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Gi(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Hl(s) || a.startsWith("unstable_") ? delete n[a] : je(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ln(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: f,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(R.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ot(20));
  const m = jn(i), p = kn(e);
  let g = ke(p, {
    mixins: Bl(p.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Fl.slice(),
    typography: qi(m, s),
    transitions: ql(a),
    zIndex: {
      ...Gl
    }
  });
  if (g = ke(g, d), g = t.reduce((b, y) => ke(b, y), g), R.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (u, C) => {
      let x;
      for (x in u) {
        const _ = u[x];
        if (b.includes(x) && Object.keys(_).length > 0) {
          if (R.env.NODE_ENV !== "production") {
            const $ = pt("", x);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${$}' syntax:`, JSON.stringify({
              root: {
                [`&.${$}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[x] = {};
        }
      }
    };
    Object.keys(g.components).forEach((u) => {
      const C = g.components[u].styleOverrides;
      C && u.startsWith("Mui") && y(C, u);
    });
  }
  return g.unstable_sxConfig = {
    ...Xt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(y) {
    return dt({
      sx: y,
      theme: this
    });
  }, g.toRuntimeSource = Gi, g;
}
function Kl(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Xl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Kl(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Hi(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ki(e) {
  return e === "dark" ? Xl : [];
}
function Jl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = jn(t);
  return {
    palette: i,
    opacity: {
      ...Hi(i.mode),
      ...r
    },
    overlays: n || Ki(i.mode),
    ...o
  };
}
function Ql(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Zl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], eu = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Zl(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function tu(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function E(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Mt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Pi(e);
}
function Ye(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = It(Mt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ru(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const De = (e) => {
  try {
    return e();
  } catch {
  }
}, nu = (e = "mui") => Tl(e);
function Kr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Jl({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = ln({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Hi(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ki(o)
  }, a;
}
function ou(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Ql,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, m = Object.keys(r)[0], p = n || (r.light && m !== "light" ? "light" : m), g = nu(i), {
    [p]: b,
    light: y,
    dark: u,
    ...C
  } = r, x = {
    ...C
  };
  let _ = b;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(R.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : ot(21, p));
  const $ = Kr(x, _, d, p);
  y && !x.light && Kr(x, y, void 0, "light"), u && !x.dark && Kr(x, u, void 0, "dark");
  let v = {
    defaultColorScheme: p,
    ...$,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: f,
    getCssVar: g,
    colorSchemes: x,
    font: {
      ...Dl($.typography),
      ...$.font
    },
    spacing: ru(d.spacing)
  };
  Object.keys(v.colorSchemes).forEach((M) => {
    const c = v.colorSchemes[M].palette, w = (N) => {
      const D = N.split("-"), H = D[1], L = D[2];
      return g(N, c[H][L]);
    };
    if (c.mode === "light" && (E(c.common, "background", "#fff"), E(c.common, "onBackground", "#000")), c.mode === "dark" && (E(c.common, "background", "#000"), E(c.common, "onBackground", "#fff")), tu(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      E(c.Alert, "errorColor", ce(c.error.light, 0.6)), E(c.Alert, "infoColor", ce(c.info.light, 0.6)), E(c.Alert, "successColor", ce(c.success.light, 0.6)), E(c.Alert, "warningColor", ce(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", w("palette-error-main")), E(c.Alert, "infoFilledBg", w("palette-info-main")), E(c.Alert, "successFilledBg", w("palette-success-main")), E(c.Alert, "warningFilledBg", w("palette-warning-main")), E(c.Alert, "errorFilledColor", De(() => c.getContrastText(c.error.main))), E(c.Alert, "infoFilledColor", De(() => c.getContrastText(c.info.main))), E(c.Alert, "successFilledColor", De(() => c.getContrastText(c.success.main))), E(c.Alert, "warningFilledColor", De(() => c.getContrastText(c.warning.main))), E(c.Alert, "errorStandardBg", le(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", le(c.info.light, 0.9)), E(c.Alert, "successStandardBg", le(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", le(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", w("palette-error-main")), E(c.Alert, "infoIconColor", w("palette-info-main")), E(c.Alert, "successIconColor", w("palette-success-main")), E(c.Alert, "warningIconColor", w("palette-warning-main")), E(c.AppBar, "defaultBg", w("palette-grey-100")), E(c.Avatar, "defaultBg", w("palette-grey-400")), E(c.Button, "inheritContainedBg", w("palette-grey-300")), E(c.Button, "inheritContainedHoverBg", w("palette-grey-A100")), E(c.Chip, "defaultBorder", w("palette-grey-400")), E(c.Chip, "defaultAvatarColor", w("palette-grey-700")), E(c.Chip, "defaultIconColor", w("palette-grey-700")), E(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(c.LinearProgress, "primaryBg", le(c.primary.main, 0.62)), E(c.LinearProgress, "secondaryBg", le(c.secondary.main, 0.62)), E(c.LinearProgress, "errorBg", le(c.error.main, 0.62)), E(c.LinearProgress, "infoBg", le(c.info.main, 0.62)), E(c.LinearProgress, "successBg", le(c.success.main, 0.62)), E(c.LinearProgress, "warningBg", le(c.warning.main, 0.62)), E(c.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.11)`), E(c.Slider, "primaryTrack", le(c.primary.main, 0.62)), E(c.Slider, "secondaryTrack", le(c.secondary.main, 0.62)), E(c.Slider, "errorTrack", le(c.error.main, 0.62)), E(c.Slider, "infoTrack", le(c.info.main, 0.62)), E(c.Slider, "successTrack", le(c.success.main, 0.62)), E(c.Slider, "warningTrack", le(c.warning.main, 0.62));
      const N = or(c.background.default, 0.8);
      E(c.SnackbarContent, "bg", N), E(c.SnackbarContent, "color", De(() => c.getContrastText(N))), E(c.SpeedDialAction, "fabHoverBg", or(c.background.paper, 0.15)), E(c.StepConnector, "border", w("palette-grey-400")), E(c.StepContent, "border", w("palette-grey-400")), E(c.Switch, "defaultColor", w("palette-common-white")), E(c.Switch, "defaultDisabledColor", w("palette-grey-100")), E(c.Switch, "primaryDisabledColor", le(c.primary.main, 0.62)), E(c.Switch, "secondaryDisabledColor", le(c.secondary.main, 0.62)), E(c.Switch, "errorDisabledColor", le(c.error.main, 0.62)), E(c.Switch, "infoDisabledColor", le(c.info.main, 0.62)), E(c.Switch, "successDisabledColor", le(c.success.main, 0.62)), E(c.Switch, "warningDisabledColor", le(c.warning.main, 0.62)), E(c.TableCell, "border", le(nr(c.divider, 1), 0.88)), E(c.Tooltip, "bg", nr(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      E(c.Alert, "errorColor", le(c.error.light, 0.6)), E(c.Alert, "infoColor", le(c.info.light, 0.6)), E(c.Alert, "successColor", le(c.success.light, 0.6)), E(c.Alert, "warningColor", le(c.warning.light, 0.6)), E(c.Alert, "errorFilledBg", w("palette-error-dark")), E(c.Alert, "infoFilledBg", w("palette-info-dark")), E(c.Alert, "successFilledBg", w("palette-success-dark")), E(c.Alert, "warningFilledBg", w("palette-warning-dark")), E(c.Alert, "errorFilledColor", De(() => c.getContrastText(c.error.dark))), E(c.Alert, "infoFilledColor", De(() => c.getContrastText(c.info.dark))), E(c.Alert, "successFilledColor", De(() => c.getContrastText(c.success.dark))), E(c.Alert, "warningFilledColor", De(() => c.getContrastText(c.warning.dark))), E(c.Alert, "errorStandardBg", ce(c.error.light, 0.9)), E(c.Alert, "infoStandardBg", ce(c.info.light, 0.9)), E(c.Alert, "successStandardBg", ce(c.success.light, 0.9)), E(c.Alert, "warningStandardBg", ce(c.warning.light, 0.9)), E(c.Alert, "errorIconColor", w("palette-error-main")), E(c.Alert, "infoIconColor", w("palette-info-main")), E(c.Alert, "successIconColor", w("palette-success-main")), E(c.Alert, "warningIconColor", w("palette-warning-main")), E(c.AppBar, "defaultBg", w("palette-grey-900")), E(c.AppBar, "darkBg", w("palette-background-paper")), E(c.AppBar, "darkColor", w("palette-text-primary")), E(c.Avatar, "defaultBg", w("palette-grey-600")), E(c.Button, "inheritContainedBg", w("palette-grey-800")), E(c.Button, "inheritContainedHoverBg", w("palette-grey-700")), E(c.Chip, "defaultBorder", w("palette-grey-700")), E(c.Chip, "defaultAvatarColor", w("palette-grey-300")), E(c.Chip, "defaultIconColor", w("palette-grey-300")), E(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(c.LinearProgress, "primaryBg", ce(c.primary.main, 0.5)), E(c.LinearProgress, "secondaryBg", ce(c.secondary.main, 0.5)), E(c.LinearProgress, "errorBg", ce(c.error.main, 0.5)), E(c.LinearProgress, "infoBg", ce(c.info.main, 0.5)), E(c.LinearProgress, "successBg", ce(c.success.main, 0.5)), E(c.LinearProgress, "warningBg", ce(c.warning.main, 0.5)), E(c.Skeleton, "bg", `rgba(${w("palette-text-primaryChannel")} / 0.13)`), E(c.Slider, "primaryTrack", ce(c.primary.main, 0.5)), E(c.Slider, "secondaryTrack", ce(c.secondary.main, 0.5)), E(c.Slider, "errorTrack", ce(c.error.main, 0.5)), E(c.Slider, "infoTrack", ce(c.info.main, 0.5)), E(c.Slider, "successTrack", ce(c.success.main, 0.5)), E(c.Slider, "warningTrack", ce(c.warning.main, 0.5));
      const N = or(c.background.default, 0.98);
      E(c.SnackbarContent, "bg", N), E(c.SnackbarContent, "color", De(() => c.getContrastText(N))), E(c.SpeedDialAction, "fabHoverBg", or(c.background.paper, 0.15)), E(c.StepConnector, "border", w("palette-grey-600")), E(c.StepContent, "border", w("palette-grey-600")), E(c.Switch, "defaultColor", w("palette-grey-300")), E(c.Switch, "defaultDisabledColor", w("palette-grey-600")), E(c.Switch, "primaryDisabledColor", ce(c.primary.main, 0.55)), E(c.Switch, "secondaryDisabledColor", ce(c.secondary.main, 0.55)), E(c.Switch, "errorDisabledColor", ce(c.error.main, 0.55)), E(c.Switch, "infoDisabledColor", ce(c.info.main, 0.55)), E(c.Switch, "successDisabledColor", ce(c.success.main, 0.55)), E(c.Switch, "warningDisabledColor", ce(c.warning.main, 0.55)), E(c.TableCell, "border", ce(nr(c.divider, 1), 0.68)), E(c.Tooltip, "bg", nr(c.grey[700], 0.92));
    }
    Ye(c.background, "default"), Ye(c.background, "paper"), Ye(c.common, "background"), Ye(c.common, "onBackground"), Ye(c, "divider"), Object.keys(c).forEach((N) => {
      const D = c[N];
      N !== "tonalOffset" && D && typeof D == "object" && (D.main && E(c[N], "mainChannel", It(Mt(D.main))), D.light && E(c[N], "lightChannel", It(Mt(D.light))), D.dark && E(c[N], "darkChannel", It(Mt(D.dark))), D.contrastText && E(c[N], "contrastTextChannel", It(Mt(D.contrastText))), N === "text" && (Ye(c[N], "primary"), Ye(c[N], "secondary")), N === "action" && (D.active && Ye(c[N], "active"), D.selected && Ye(c[N], "selected")));
    });
  }), v = t.reduce((M, c) => ke(M, c), v);
  const h = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: eu(v)
  }, {
    vars: k,
    generateThemeVars: A,
    generateStyleSheets: I
  } = $l(v, h);
  return v.vars = k, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([M, c]) => {
    v[M] = c;
  }), v.generateThemeVars = A, v.generateStyleSheets = I, v.generateSpacing = function() {
    return Si(d.spacing, Pn(this));
  }, v.getColorSchemeSelector = Ol(s), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = a, v.unstable_sxConfig = {
    ...Xt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, v.unstable_sx = function(c) {
    return dt({
      sx: c,
      theme: this
    });
  }, v.toRuntimeSource = Gi, v;
}
function Yo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: jn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Xi(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", f = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ln(e, ...t);
    let m = r;
    "palette" in e || d[s] && (d[s] !== !0 ? m = d[s].palette : s === "dark" && (m = {
      mode: "dark"
    }));
    const p = ln({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Yo(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Yo(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), ou({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Fn = Xi();
function iu() {
  const e = Ci(Fn);
  return R.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Ke] || e;
}
function au(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ji = (e) => au(e) && e !== "classes", Oe = jc({
  themeId: Ke,
  defaultTheme: Fn,
  rootShouldForwardProp: Ji
});
function Xr({
  theme: e,
  ...t
}) {
  const r = Ke in e ? e[Ke] : void 0;
  return /* @__PURE__ */ W(jt, {
    ...t,
    themeId: r ? Ke : void 0,
    theme: r || e
  });
}
const ir = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: su
} = Cl({
  themeId: Ke,
  // @ts-ignore ignore module augmentation tests
  theme: () => Xi({
    cssVariables: !0
  }),
  colorSchemeStorageKey: ir.colorSchemeStorageKey,
  modeStorageKey: ir.modeStorageKey,
  defaultColorScheme: {
    light: ir.defaultLightColorScheme,
    dark: ir.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: qi(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return dt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), cu = su;
function gf({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ W(Xr, {
      theme: e,
      ...t
    });
  const r = Ke in e ? e[Ke] : e;
  return "colorSchemes" in r ? /* @__PURE__ */ W(cu, {
    theme: e,
    ...t
  }) : "vars" in r ? /* @__PURE__ */ W(Xr, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ W(Xr, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
function Qi(e) {
  return /* @__PURE__ */ W(Ti, {
    ...e,
    defaultTheme: Fn,
    themeId: Ke
  });
}
R.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: l.oneOfType([l.array, l.func, l.number, l.object, l.string, l.bool])
});
function yf(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ W(Qi, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
function bf() {
  return Nc;
}
const $t = ml;
R.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Pt(e) {
  return pl(e);
}
function lu(e) {
  return pt("MuiSvgIcon", e);
}
Rt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const uu = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(r)}`]
  };
  return Qt(o, lu, n);
}, fu = Oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ie(r.color)}`], t[`fontSize${ie(r.fontSize)}`]];
  }
})($t(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, f, d, m, p, g, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : f.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var C, x;
        return {
          props: {
            color: u
          },
          style: {
            color: (x = (C = (e.vars ?? e).palette) == null ? void 0 : C[u]) == null ? void 0 : x.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : y.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Er = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...b
  } = n, y = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", u = {
    ...n,
    color: a,
    component: s,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: g,
    hasSvgAsChild: y
  }, C = {};
  m || (C.viewBox = g);
  const x = uu(u);
  return /* @__PURE__ */ Ut(fu, {
    as: s,
    className: Ce(x.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...C,
    ...b,
    ...y && o.props,
    ownerState: u,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ W("title", {
      children: p
    }) : null]
  });
});
R.env.NODE_ENV !== "production" && (Er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
Er.muiName = "SvgIcon";
function vf(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ W(Er, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return R.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Er.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(r));
}
function du(e) {
  return typeof e.main == "string";
}
function pu(e, t = []) {
  if (!du(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Cr(e = []) {
  return ([, t]) => t && pu(t, e);
}
class Tr {
  constructor() {
    kt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Tr();
  }
  static use() {
    const t = Ni(Tr.create).current, [r, n] = T.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, T.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = hu(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function mu() {
  return Tr.use();
}
function hu() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Zi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function un(e, t) {
  return un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, un(e, t);
}
function ea(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, un(e, t);
}
const qo = {
  disabled: !1
};
var gu = R.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null;
R.env.NODE_ENV !== "production" && l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]);
const xr = Ge.createContext(null);
var yu = function(t) {
  return t.scrollTop;
}, Dt = "unmounted", ct = "exited", lt = "entering", St = "entered", fn = "exiting", Qe = /* @__PURE__ */ function(e) {
  ea(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, s = a && !a.isMounting ? n.enter : n.appear, f;
    return i.appearStatus = null, n.in ? s ? (f = ct, i.appearStatus = lt) : f = St : n.unmountOnExit || n.mountOnEnter ? f = Dt : f = ct, i.state = {
      status: f
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Dt ? {
      status: ct
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== lt && a !== St && (i = lt) : (a === lt || a === St) && (i = fn);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, a, s;
    return i = a = s = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, s = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : er.findDOMNode(this);
          a && yu(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ct && this.setState({
      status: Dt
    });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : o, f = this.props.nodeRef ? [s] : [er.findDOMNode(this), s], d = f[0], m = f[1], p = this.getTimeouts(), g = s ? p.appear : p.enter;
    if (!o && !a || qo.disabled) {
      this.safeSetState({
        status: St
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, m), this.safeSetState({
      status: lt
    }, function() {
      i.props.onEntering(d, m), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: St
        }, function() {
          i.props.onEntered(d, m);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : er.findDOMNode(this);
    if (!i || qo.disabled) {
      this.safeSetState({
        status: ct
      }, function() {
        o.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: fn
    }, function() {
      o.props.onExiting(s), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: ct
        }, function() {
          o.props.onExited(s);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, o(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : er.findDOMNode(this), s = o == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var f = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], d = f[0], m = f[1];
      this.props.addEndListener(d, m);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Dt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = Zi(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ge.createElement(xr.Provider, {
        value: null
      }, typeof a == "function" ? a(o, s) : Ge.cloneElement(Ge.Children.only(a), s))
    );
  }, t;
}(Ge.Component);
Qe.contextType = xr;
Qe.propTypes = R.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(e, t, r, n, o, i) {
      var a = e[t];
      return l.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = gu;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function vt() {
}
Qe.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vt,
  onEntering: vt,
  onEntered: vt,
  onExit: vt,
  onExiting: vt,
  onExited: vt
};
Qe.UNMOUNTED = Dt;
Qe.EXITED = ct;
Qe.ENTERING = lt;
Qe.ENTERED = St;
Qe.EXITING = fn;
function bu(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Un(e, t) {
  var r = function(i) {
    return t && ar(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ua.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function vu(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        s[n[f][a]] = r(d);
      }
    s[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function ft(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Su(e, t) {
  return Un(e.children, function(r) {
    return sr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ft(r, "appear", e),
      enter: ft(r, "enter", e),
      exit: ft(r, "exit", e)
    });
  });
}
function Eu(e, t, r) {
  var n = Un(e.children), o = vu(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (ar(a)) {
      var s = i in t, f = i in n, d = t[i], m = ar(d) && !d.props.in;
      f && (!s || m) ? o[i] = sr(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ft(a, "exit", e),
        enter: ft(a, "enter", e)
      }) : !f && s && !m ? o[i] = sr(a, {
        in: !1
      }) : f && s && ar(d) && (o[i] = sr(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: ft(a, "exit", e),
        enter: ft(a, "enter", e)
      }));
    }
  }), o;
}
var Cu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Tu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Wn = /* @__PURE__ */ function(e) {
  ea(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(bu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, f = i.firstRender;
    return {
      children: f ? Su(o, s) : Eu(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = Un(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var f = mr({}, s.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = Zi(o, ["component", "childFactory"]), f = this.state.contextValue, d = Cu(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ Ge.createElement(xr.Provider, {
      value: f
    }, d) : /* @__PURE__ */ Ge.createElement(xr.Provider, {
      value: f
    }, /* @__PURE__ */ Ge.createElement(i, s, d));
  }, t;
}(Ge.Component);
Wn.propTypes = R.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
Wn.defaultProps = Tu;
function ta(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: f,
    timeout: d
  } = e, [m, p] = T.useState(!1), g = Ce(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, y = Ce(r.child, m && r.childLeaving, n && r.childPulsate);
  return !s && !m && p(!0), T.useEffect(() => {
    if (!s && f != null) {
      const u = setTimeout(f, d);
      return () => {
        clearTimeout(u);
      };
    }
  }, [f, s, d]), /* @__PURE__ */ W("span", {
    className: g,
    style: b,
    children: /* @__PURE__ */ W("span", {
      className: y
    })
  });
}
R.env.NODE_ENV !== "production" && (ta.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object.isRequired,
  className: l.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: l.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: l.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: l.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: l.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: l.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: l.number,
  /**
   * exit delay
   */
  timeout: l.number.isRequired
});
const Ae = Rt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), dn = 550, xu = 80, wu = Gt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, $u = Gt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ou = Gt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ru = Oe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Pu = Oe(ta, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ae.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${wu};
    animation-duration: ${dn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ae.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ae.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ae.childLeaving} {
    opacity: 0;
    animation-name: ${$u};
    animation-duration: ${dn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ae.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ou};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ra = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [f, d] = T.useState([]), m = T.useRef(0), p = T.useRef(null);
  T.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [f]);
  const g = T.useRef(!1), b = Ii(), y = T.useRef(null), u = T.useRef(null), C = T.useCallback((v) => {
    const {
      pulsate: h,
      rippleX: k,
      rippleY: A,
      rippleSize: I,
      cb: M
    } = v;
    d((c) => [...c, /* @__PURE__ */ W(Pu, {
      classes: {
        ripple: Ce(i.ripple, Ae.ripple),
        rippleVisible: Ce(i.rippleVisible, Ae.rippleVisible),
        ripplePulsate: Ce(i.ripplePulsate, Ae.ripplePulsate),
        child: Ce(i.child, Ae.child),
        childLeaving: Ce(i.childLeaving, Ae.childLeaving),
        childPulsate: Ce(i.childPulsate, Ae.childPulsate)
      },
      timeout: dn,
      pulsate: h,
      rippleX: k,
      rippleY: A,
      rippleSize: I
    }, m.current)]), m.current += 1, p.current = M;
  }, [i]), x = T.useCallback((v = {}, h = {}, k = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: I = o || h.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = h;
    if ((v == null ? void 0 : v.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (g.current = !0);
    const c = M ? null : u.current, w = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, D, H;
    if (I || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      N = Math.round(w.width / 2), D = Math.round(w.height / 2);
    else {
      const {
        clientX: L,
        clientY: Y
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      N = Math.round(L - w.left), D = Math.round(Y - w.top);
    }
    if (I)
      H = Math.sqrt((2 * w.width ** 2 + w.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const L = Math.max(Math.abs((c ? c.clientWidth : 0) - N), N) * 2 + 2, Y = Math.max(Math.abs((c ? c.clientHeight : 0) - D), D) * 2 + 2;
      H = Math.sqrt(L ** 2 + Y ** 2);
    }
    v != null && v.touches ? y.current === null && (y.current = () => {
      C({
        pulsate: A,
        rippleX: N,
        rippleY: D,
        rippleSize: H,
        cb: k
      });
    }, b.start(xu, () => {
      y.current && (y.current(), y.current = null);
    })) : C({
      pulsate: A,
      rippleX: N,
      rippleY: D,
      rippleSize: H,
      cb: k
    });
  }, [o, C, b]), _ = T.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), $ = T.useCallback((v, h) => {
    if (b.clear(), (v == null ? void 0 : v.type) === "touchend" && y.current) {
      y.current(), y.current = null, b.start(0, () => {
        $(v, h);
      });
      return;
    }
    y.current = null, d((k) => k.length > 0 ? k.slice(1) : k), p.current = h;
  }, [b]);
  return T.useImperativeHandle(r, () => ({
    pulsate: _,
    start: x,
    stop: $
  }), [_, x, $]), /* @__PURE__ */ W(Ru, {
    className: Ce(Ae.root, i.root, a),
    ref: u,
    ...s,
    children: /* @__PURE__ */ W(Wn, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
R.env.NODE_ENV !== "production" && (ra.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: l.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string
});
function _u(e) {
  return pt("MuiButtonBase", e);
}
const ku = Rt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Au = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Qt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, _u, o);
  return r && n && (a.root += ` ${n}`), a;
}, Nu = Oe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ku.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Yn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: f = "button",
    disabled: d = !1,
    disableRipple: m = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: b,
    LinkComponent: y = "a",
    onBlur: u,
    onClick: C,
    onContextMenu: x,
    onDragLeave: _,
    onFocus: $,
    onFocusVisible: v,
    onKeyDown: h,
    onKeyUp: k,
    onMouseDown: A,
    onMouseLeave: I,
    onMouseUp: M,
    onTouchEnd: c,
    onTouchMove: w,
    onTouchStart: N,
    tabIndex: D = 0,
    TouchRippleProps: H,
    touchRippleRef: L,
    type: Y,
    ...X
  } = n, ue = T.useRef(null), J = mu(), O = wt(J.ref, L), [P, B] = T.useState(!1);
  d && P && B(!1), T.useImperativeHandle(o, () => ({
    focusVisible: () => {
      B(!0), ue.current.focus();
    }
  }), []);
  const j = J.shouldMount && !m && !d;
  T.useEffect(() => {
    P && g && !m && J.pulsate();
  }, [m, g, P, J]);
  const z = qe(J, "start", A, p), q = qe(J, "stop", x, p), V = qe(J, "stop", _, p), F = qe(J, "stop", M, p), G = qe(J, "stop", (U) => {
    P && U.preventDefault(), I && I(U);
  }, p), Q = qe(J, "start", N, p), K = qe(J, "stop", c, p), de = qe(J, "stop", w, p), S = qe(J, "stop", (U) => {
    No(U.target) || B(!1), u && u(U);
  }, !1), be = pr((U) => {
    ue.current || (ue.current = U.currentTarget), No(U.target) && (B(!0), v && v(U)), $ && $(U);
  }), Te = () => {
    const U = ue.current;
    return f && f !== "button" && !(U.tagName === "A" && U.href);
  }, Ue = pr((U) => {
    g && !U.repeat && P && U.key === " " && J.stop(U, () => {
      J.start(U);
    }), U.target === U.currentTarget && Te() && U.key === " " && U.preventDefault(), h && h(U), U.target === U.currentTarget && Te() && U.key === "Enter" && !d && (U.preventDefault(), C && C(U));
  }), Zt = pr((U) => {
    g && U.key === " " && P && !U.defaultPrevented && J.stop(U, () => {
      J.pulsate(U);
    }), k && k(U), C && U.target === U.currentTarget && Te() && U.key === " " && !U.defaultPrevented && C(U);
  });
  let Ze = f;
  Ze === "button" && (X.href || X.to) && (Ze = y);
  const ve = {};
  Ze === "button" ? (ve.type = Y === void 0 ? "button" : Y, ve.disabled = d) : (!X.href && !X.to && (ve.role = "button"), d && (ve["aria-disabled"] = d));
  const et = wt(r, ue), tt = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: m,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: D,
    focusVisible: P
  }, Lr = Au(tt);
  return /* @__PURE__ */ Ut(Nu, {
    as: Ze,
    className: Ce(Lr.root, s),
    ownerState: tt,
    onBlur: S,
    onClick: C,
    onContextMenu: q,
    onFocus: be,
    onKeyDown: Ue,
    onKeyUp: Zt,
    onMouseDown: z,
    onMouseLeave: G,
    onMouseUp: F,
    onDragLeave: V,
    onTouchEnd: K,
    onTouchMove: de,
    onTouchStart: Q,
    ref: et,
    tabIndex: d ? -1 : D,
    type: Y,
    ...ve,
    ...X,
    children: [a, j ? /* @__PURE__ */ W(ra, {
      ref: O,
      center: i,
      ...H
    }) : null]
  });
});
function qe(e, t, r, n = !1) {
  return pr((o) => (r && r(o), n || e[t](o), !0));
}
R.env.NODE_ENV !== "production" && (Yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: rl,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Zc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: l.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: l.elementType,
  /**
   * @ignore
   */
  onBlur: l.func,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * @ignore
   */
  onContextMenu: l.func,
  /**
   * @ignore
   */
  onDragLeave: l.func,
  /**
   * @ignore
   */
  onFocus: l.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * @ignore
   */
  onMouseDown: l.func,
  /**
   * @ignore
   */
  onMouseLeave: l.func,
  /**
   * @ignore
   */
  onMouseUp: l.func,
  /**
   * @ignore
   */
  onTouchEnd: l.func,
  /**
   * @ignore
   */
  onTouchMove: l.func,
  /**
   * @ignore
   */
  onTouchStart: l.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: l.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: l.oneOfType([l.func, l.shape({
    current: l.shape({
      pulsate: l.func.isRequired,
      start: l.func.isRequired,
      stop: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string])
});
function Iu(e) {
  return pt("MuiCircularProgress", e);
}
Rt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const rt = 44, pn = Gt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, mn = Gt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Mu = typeof pn != "string" ? $n`
        animation: ${pn} 1.4s linear infinite;
      ` : null, Du = typeof mn != "string" ? $n`
        animation: ${mn} 1.4s ease-in-out infinite;
      ` : null, Bu = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ie(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ie(r)}`, o && "circleDisableShrink"]
  };
  return Qt(i, Iu, t);
}, Lu = Oe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ie(r.color)}`]];
  }
})($t(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Mu || {
      animation: `${pn} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Cr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), zu = Oe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Vu = Oe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ie(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})($t(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Du || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${mn} 1.4s ease-in-out infinite`
    }
  }]
}))), qn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: s = 40,
    style: f,
    thickness: d = 3.6,
    value: m = 0,
    variant: p = "indeterminate",
    ...g
  } = n, b = {
    ...n,
    color: i,
    disableShrink: a,
    size: s,
    thickness: d,
    value: m,
    variant: p
  }, y = Bu(b), u = {}, C = {}, x = {};
  if (p === "determinate") {
    const _ = 2 * Math.PI * ((rt - d) / 2);
    u.strokeDasharray = _.toFixed(3), x["aria-valuenow"] = Math.round(m), u.strokeDashoffset = `${((100 - m) / 100 * _).toFixed(3)}px`, C.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ W(Lu, {
    className: Ce(y.root, o),
    style: {
      width: s,
      height: s,
      ...C,
      ...f
    },
    ownerState: b,
    ref: r,
    role: "progressbar",
    ...x,
    ...g,
    children: /* @__PURE__ */ W(zu, {
      className: y.svg,
      ownerState: b,
      viewBox: `${rt / 2} ${rt / 2} ${rt} ${rt}`,
      children: /* @__PURE__ */ W(Vu, {
        className: y.circle,
        style: u,
        ownerState: b,
        cx: rt,
        cy: rt,
        r: (rt - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
R.env.NODE_ENV !== "production" && (qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Jt(l.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: l.oneOfType([l.number, l.string]),
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: l.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: l.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: l.oneOf(["determinate", "indeterminate"])
});
function ju(e) {
  return pt("MuiIconButton", e);
}
const Go = Rt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Fu = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: a
  } = e, s = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${ie(n)}`, o && `edge${ie(o)}`, `size${ie(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Qt(s, ju, t);
}, Uu = Oe(Yn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ie(r.color)}`], r.edge && t[`edge${ie(r.edge)}`], t[`size${ie(r.size)}`]];
  }
})($t(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), $t(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Cr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Cr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Go.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Go.loading}`]: {
    color: "transparent"
  }
}))), Wu = Oe("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Yu = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: f = !1,
    disableFocusRipple: d = !1,
    size: m = "medium",
    id: p,
    loading: g = null,
    loadingIndicator: b,
    ...y
  } = n, u = Ai(p), C = b ?? /* @__PURE__ */ W(qn, {
    "aria-labelledby": u,
    color: "inherit",
    size: 16
  }), x = {
    ...n,
    edge: o,
    color: s,
    disabled: f,
    disableFocusRipple: d,
    loading: g,
    loadingIndicator: C,
    size: m
  }, _ = Fu(x);
  return /* @__PURE__ */ Ut(Uu, {
    id: g ? u : p,
    className: Ce(_.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: f || g,
    ref: r,
    ...y,
    ownerState: x,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ W("span", {
      className: _.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ W(Wu, {
        className: _.loadingIndicator,
        ownerState: x,
        children: g && C
      })
    }), i]
  });
});
R.env.NODE_ENV !== "production" && (Yu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Jt(l.node, (e) => T.Children.toArray(e.children).some((r) => /* @__PURE__ */ T.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: l.oneOfType([l.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: l.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: l.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: l.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: l.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const qu = (e) => e.scrollTop;
function Ho(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
const Sf = (e) => {
  let t = fa(e);
  return da(() => {
    t.current = e;
  }), pa(() => (...r) => {
    const { current: n } = t;
    return n(...r);
  }, []);
};
var na = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(na);
var Gu = na.exports;
const Ef = /* @__PURE__ */ li(Gu);
function Cf(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: a,
    shouldForwardComponentProp: s = !1,
    ...f
  } = t, {
    component: d,
    slots: m = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...g
  } = i, b = m[e] || n, y = Bi(p[e], o), {
    props: {
      component: u,
      ...C
    },
    internalRef: x
  } = Di({
    className: r,
    ...f,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: y
  }), _ = wt(x, y == null ? void 0 : y.ref, t.ref), $ = e === "root" ? u || d : u, v = Mi(b, {
    ...e === "root" && !d && !m[e] && a,
    ...e !== "root" && !m[e] && a,
    ...C,
    ...$ && !s && {
      as: $
    },
    ...$ && s && {
      component: $
    },
    ref: _
  }, o);
  return [b, v];
}
function Hu(e) {
  return pt("MuiButton", e);
}
const st = Rt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), oa = /* @__PURE__ */ T.createContext({});
R.env.NODE_ENV !== "production" && (oa.displayName = "ButtonGroupContext");
const ia = /* @__PURE__ */ T.createContext(void 0);
R.env.NODE_ENV !== "production" && (ia.displayName = "ButtonGroupButtonContext");
const Ku = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: s,
    classes: f
  } = e, d = {
    root: ["root", a && "loading", i, `${i}${ie(t)}`, `size${ie(o)}`, `${i}Size${ie(o)}`, `color${ie(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ie(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${ie(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ie(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, m = Qt(d, Hu, f);
  return {
    ...f,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...m
  };
}, aa = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Xu = Oe(Yn, {
  shouldForwardProp: (e) => Ji(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ie(r.color)}`], t[`size${ie(r.size)}`], t[`${r.variant}Size${ie(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})($t(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${st.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${st.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${st.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${st.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Cr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : nt(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${st.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${st.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${st.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Ju = Oe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ie(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...aa]
})), Qu = Oe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ie(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...aa]
})), Zu = Oe("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Ko = Oe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), ef = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = T.useContext(oa), o = T.useContext(ia), i = br(n, t), a = Pt({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: f = "primary",
    component: d = "button",
    className: m,
    disabled: p = !1,
    disableElevation: g = !1,
    disableFocusRipple: b = !1,
    endIcon: y,
    focusVisibleClassName: u,
    fullWidth: C = !1,
    id: x,
    loading: _ = null,
    loadingIndicator: $,
    loadingPosition: v = "center",
    size: h = "medium",
    startIcon: k,
    type: A,
    variant: I = "text",
    ...M
  } = a, c = Ai(x), w = $ ?? /* @__PURE__ */ W(qn, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), N = {
    ...a,
    color: f,
    component: d,
    disabled: p,
    disableElevation: g,
    disableFocusRipple: b,
    fullWidth: C,
    loading: _,
    loadingIndicator: w,
    loadingPosition: v,
    size: h,
    type: A,
    variant: I
  }, D = Ku(N), H = (k || _ && v === "start") && /* @__PURE__ */ W(Ju, {
    className: D.startIcon,
    ownerState: N,
    children: k || /* @__PURE__ */ W(Ko, {
      className: D.loadingIconPlaceholder,
      ownerState: N
    })
  }), L = (y || _ && v === "end") && /* @__PURE__ */ W(Qu, {
    className: D.endIcon,
    ownerState: N,
    children: y || /* @__PURE__ */ W(Ko, {
      className: D.loadingIconPlaceholder,
      ownerState: N
    })
  }), Y = o || "", X = typeof _ == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ W("span", {
      className: D.loadingWrapper,
      style: {
        display: "contents"
      },
      children: _ && /* @__PURE__ */ W(Zu, {
        className: D.loadingIndicator,
        ownerState: N,
        children: w
      })
    })
  ) : null;
  return /* @__PURE__ */ Ut(Xu, {
    ownerState: N,
    className: Ce(n.className, D.root, m, Y),
    component: d,
    disabled: p || _,
    focusRipple: !b,
    focusVisibleClassName: Ce(D.focusVisible, u),
    ref: r,
    type: A,
    id: _ ? c : x,
    ...M,
    classes: D,
    children: [H, v !== "end" && X, s, v === "end" && X, L]
  });
});
R.env.NODE_ENV !== "production" && (ef.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * Element placed after the children.
   */
  endIcon: l.node,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: l.string,
  /**
   * @ignore
   */
  id: l.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: l.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: l.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: l.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * Element placed before the children.
   */
  startIcon: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: l.oneOfType([l.oneOf(["contained", "outlined", "text"]), l.string])
});
function hn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const tf = {
  entering: {
    opacity: 1,
    transform: hn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Jr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), gn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: f,
    onEntered: d,
    onEntering: m,
    onExit: p,
    onExited: g,
    onExiting: b,
    style: y,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Qe,
    ...x
  } = t, _ = Ii(), $ = T.useRef(), v = iu(), h = T.useRef(null), k = wt(h, Li(i), r), A = (L) => (Y) => {
    if (L) {
      const X = h.current;
      Y === void 0 ? L(X) : L(X, Y);
    }
  }, I = A(m), M = A((L, Y) => {
    qu(L);
    const {
      duration: X,
      delay: ue,
      easing: J
    } = Ho({
      style: y,
      timeout: u,
      easing: a
    }, {
      mode: "enter"
    });
    let O;
    u === "auto" ? (O = v.transitions.getAutoHeightDuration(L.clientHeight), $.current = O) : O = X, L.style.transition = [v.transitions.create("opacity", {
      duration: O,
      delay: ue
    }), v.transitions.create("transform", {
      duration: Jr ? O : O * 0.666,
      delay: ue,
      easing: J
    })].join(","), f && f(L, Y);
  }), c = A(d), w = A(b), N = A((L) => {
    const {
      duration: Y,
      delay: X,
      easing: ue
    } = Ho({
      style: y,
      timeout: u,
      easing: a
    }, {
      mode: "exit"
    });
    let J;
    u === "auto" ? (J = v.transitions.getAutoHeightDuration(L.clientHeight), $.current = J) : J = Y, L.style.transition = [v.transitions.create("opacity", {
      duration: J,
      delay: X
    }), v.transitions.create("transform", {
      duration: Jr ? J : J * 0.666,
      delay: Jr ? X : X || J * 0.333,
      easing: ue
    })].join(","), L.style.opacity = 0, L.style.transform = hn(0.75), p && p(L);
  }), D = A(g);
  return /* @__PURE__ */ W(C, {
    appear: o,
    in: s,
    nodeRef: h,
    onEnter: M,
    onEntered: c,
    onEntering: I,
    onExit: N,
    onExited: D,
    onExiting: w,
    addEndListener: (L) => {
      u === "auto" && _.start($.current || 0, L), n && n(h.current, L);
    },
    timeout: u === "auto" ? null : u,
    ...x,
    children: (L, {
      ownerState: Y,
      ...X
    }) => /* @__PURE__ */ T.cloneElement(i, {
      style: {
        opacity: 0,
        transform: hn(0.75),
        visibility: L === "exited" && !s ? "hidden" : void 0,
        ...tf[L],
        ...y,
        ...i.props.style
      },
      ref: k,
      ...X
    })
  });
});
R.env.NODE_ENV !== "production" && (gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: ki.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: l.oneOfType([l.oneOf(["auto"]), l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
gn && (gn.muiSupportAuto = !0);
function rf(e) {
  return typeof e == "function" ? e() : e;
}
const yn = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, s] = T.useState(null), f = wt(/* @__PURE__ */ T.isValidElement(n) ? Li(n) : null, r);
  if (vr(() => {
    i || s(rf(o) || document.body);
  }, [o, i]), vr(() => {
    if (a && !i)
      return Po(r, a), () => {
        Po(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ T.isValidElement(n)) {
      const d = {
        ref: f
      };
      return /* @__PURE__ */ T.cloneElement(n, d);
    }
    return n;
  }
  return a && /* @__PURE__ */ ma.createPortal(n, a);
});
R.env.NODE_ENV !== "production" && (yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: l.node,
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
  container: l.oneOfType([tl, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
R.env.NODE_ENV !== "production" && (yn.propTypes = Mn(yn.propTypes));
export {
  mf as $,
  ff as A,
  Yn as B,
  Xe as C,
  cf as D,
  lf as E,
  pf as F,
  ie as G,
  rl as H,
  Yu as I,
  Ai as J,
  Cr as K,
  ef as L,
  Rs as M,
  dt as N,
  Ci as O,
  l as P,
  Mc as Q,
  Ke as R,
  Wl as S,
  gf as T,
  Qe as U,
  Ii as V,
  Ho as W,
  Zc as X,
  bf as Y,
  df as Z,
  yn as _,
  mt as a,
  Jt as a0,
  tl as a1,
  hf as a2,
  pr as a3,
  Dn as a4,
  Li as a5,
  gn as a6,
  No as a7,
  ki as a8,
  Yt as a9,
  Cn as aa,
  di as ab,
  uf as ac,
  Kl as ad,
  yf as ae,
  ot as af,
  ke as ag,
  gr as ah,
  Mn as ai,
  qu as aj,
  cl as ak,
  au as al,
  Zi as am,
  un as an,
  bu as ao,
  so as ap,
  mr as aq,
  $n as ar,
  Gt as as,
  gt as b,
  Xi as c,
  vf as d,
  li as e,
  Rl as f,
  bt as g,
  Ef as h,
  Rt as i,
  pt as j,
  vr as k,
  wt as l,
  Ce as m,
  Qt as n,
  Nt as o,
  R as p,
  Ji as q,
  ht as r,
  Oe as s,
  $t as t,
  Pt as u,
  nt as v,
  Cf as w,
  Sf as x,
  iu as y,
  Nc as z
};

/** @format */

function lp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var zr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function op(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Xu = { exports: {} },
  Zi = {},
  Ju = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or = Symbol.for("react.element"),
  ap = Symbol.for("react.portal"),
  sp = Symbol.for("react.fragment"),
  up = Symbol.for("react.strict_mode"),
  cp = Symbol.for("react.profiler"),
  dp = Symbol.for("react.provider"),
  fp = Symbol.for("react.context"),
  pp = Symbol.for("react.forward_ref"),
  hp = Symbol.for("react.suspense"),
  mp = Symbol.for("react.memo"),
  yp = Symbol.for("react.lazy"),
  cs = Symbol.iterator;
function vp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cs && e[cs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ec = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tc = Object.assign,
  nc = {};
function In(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nc),
    (this.updater = n || ec);
}
In.prototype.isReactComponent = {};
In.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rc() {}
rc.prototype = In.prototype;
function da(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nc),
    (this.updater = n || ec);
}
var fa = (da.prototype = new rc());
fa.constructor = da;
tc(fa, In.prototype);
fa.isPureReactComponent = !0;
var ds = Array.isArray,
  ic = Object.prototype.hasOwnProperty,
  pa = { current: null },
  lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ic.call(t, r) && !lc.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Or,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: pa.current,
  };
}
function gp(e, t) {
  return {
    $$typeof: Or,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function wp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fs = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wp("" + e.key)
    : t.toString(36);
}
function ei(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Or:
          case ap:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Sl(a, 0) : r),
      ds(i)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          ei(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (ha(i) &&
            (i = gp(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(fs, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ds(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Sl(o, s);
      a += ei(o, t, n, u, i);
    }
  else if (((u = vp(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Sl(o, s++)), (a += ei(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ei(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Sp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  ti = { transition: null },
  kp = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: ti,
    ReactCurrentOwner: pa,
  };
function ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Ir,
  forEach: function (e, t, n) {
    Ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ha(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = In;
$.Fragment = sp;
$.Profiler = cp;
$.PureComponent = da;
$.StrictMode = up;
$.Suspense = hp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
$.act = ac;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = tc({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = pa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      ic.call(t, u) &&
        !lc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Or, type: e.type, key: i, ref: o, props: r, _owner: a };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: fp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dp, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = oc;
$.createFactory = function (e) {
  var t = oc.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: pp, render: e };
};
$.isValidElement = ha;
$.lazy = function (e) {
  return { $$typeof: yp, _payload: { _status: -1, _result: e }, _init: Sp };
};
$.memo = function (e, t) {
  return { $$typeof: mp, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = ti.transition;
  ti.transition = {};
  try {
    e();
  } finally {
    ti.transition = t;
  }
};
$.unstable_act = ac;
$.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
$.useContext = function (e) {
  return be.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
$.useId = function () {
  return be.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return be.current.useRef(e);
};
$.useState = function (e) {
  return be.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return be.current.useTransition();
};
$.version = "18.3.1";
Ju.exports = $;
var L = Ju.exports;
const sc = Gu(L),
  bp = lp({ __proto__: null, default: sc }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = L,
  Cp = Symbol.for("react.element"),
  xp = Symbol.for("react.fragment"),
  Np = Object.prototype.hasOwnProperty,
  Op = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Np.call(t, r) && !Ep.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Cp,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Op.current,
  };
}
Zi.Fragment = xp;
Zi.jsx = uc;
Zi.jsxs = uc;
Xu.exports = Zi;
var ma = Xu.exports;
const Gi = ma.Fragment,
  l = ma.jsx,
  y = ma.jsxs;
var ro = {},
  cc = { exports: {} },
  ze = {},
  dc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var A = T.length;
    T.push(I);
    e: for (; 0 < A; ) {
      var Q = (A - 1) >>> 1,
        re = T[Q];
      if (0 < i(re, I)) (T[Q] = I), (T[A] = re), (A = Q);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      A = T.pop();
    if (A !== I) {
      T[0] = A;
      e: for (var Q = 0, re = T.length, je = re >>> 1; Q < je; ) {
        var rt = 2 * (Q + 1) - 1,
          it = T[rt],
          Dt = rt + 1,
          Mr = T[Dt];
        if (0 > i(it, A))
          Dt < re && 0 > i(Mr, it)
            ? ((T[Q] = Mr), (T[Dt] = A), (Q = Dt))
            : ((T[Q] = it), (T[rt] = A), (Q = rt));
        else if (Dt < re && 0 > i(Mr, A)) (T[Q] = Mr), (T[Dt] = A), (Q = Dt);
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var A = T.sortIndex - I.sortIndex;
    return A !== 0 ? A : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var u = [],
    c = [],
    m = 1,
    f = null,
    v = 3,
    k = !1,
    S = !1,
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= T)
        r(c), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(c);
    }
  }
  function w(T) {
    if (((g = !1), h(T), !S))
      if (n(u) !== null) (S = !0), le(_);
      else {
        var I = n(c);
        I !== null && Te(w, I.startTime - T);
      }
  }
  function _(T, I) {
    (S = !1), g && ((g = !1), p(R), (R = -1)), (k = !0);
    var A = v;
    try {
      for (
        h(I), f = n(u);
        f !== null && (!(f.expirationTime > I) || (T && !M()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (v = f.priorityLevel);
          var re = Q(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(u) && r(u),
            h(I);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var je = !0;
      else {
        var rt = n(c);
        rt !== null && Te(w, rt.startTime - I), (je = !1);
      }
      return je;
    } finally {
      (f = null), (v = A), (k = !1);
    }
  }
  var x = !1,
    E = null,
    R = -1,
    O = 5,
    C = -1;
  function M() {
    return !(e.unstable_now() - C < O);
  }
  function z() {
    if (E !== null) {
      var T = e.unstable_now();
      C = T;
      var I = !0;
      try {
        I = E(!0, T);
      } finally {
        I ? D() : ((x = !1), (E = null));
      }
    } else x = !1;
  }
  var D;
  if (typeof d == "function")
    D = function () {
      d(z);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      nt = W.port2;
    (W.port1.onmessage = z),
      (D = function () {
        nt.postMessage(null);
      });
  } else
    D = function () {
      b(z, 0);
    };
  function le(T) {
    (E = T), x || ((x = !0), D());
  }
  function Te(T, I) {
    R = b(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), le(_));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = v;
      }
      var A = v;
      v = I;
      try {
        return T();
      } finally {
        v = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = v;
      v = T;
      try {
        return I();
      } finally {
        v = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, A) {
      var Q = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Q + A : Q))
          : (A = Q),
        T)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = A + re),
        (T = {
          id: m++,
          callback: I,
          priorityLevel: T,
          startTime: A,
          expirationTime: re,
          sortIndex: -1,
        }),
        A > Q
          ? ((T.sortIndex = A),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (g ? (p(R), (R = -1)) : (g = !0), Te(w, A - Q)))
          : ((T.sortIndex = re), t(u, T), S || k || ((S = !0), le(_))),
        T
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (T) {
      var I = v;
      return function () {
        var A = v;
        v = I;
        try {
          return T.apply(this, arguments);
        } finally {
          v = A;
        }
      };
    });
})(fc);
dc.exports = fc;
var Pp = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp = L,
  Me = Pp;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  ar = {};
function Xt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ar[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  io = Object.prototype.hasOwnProperty,
  Lp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ps = {},
  hs = {};
function Rp(e) {
  return io.call(hs, e)
    ? !0
    : io.call(ps, e)
    ? !1
    : Lp.test(e)
    ? (hs[e] = !0)
    : ((ps[e] = !0), !1);
}
function Hp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mp(e, t, n, r) {
  if (t === null || typeof t > "u" || Hp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function va(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    he[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    he[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, va);
  he[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ga(e, t, n, r) {
  var i = he.hasOwnProperty(t) ? he[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mp(t, n, i, r) && (n = null),
    r || i === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jr = Symbol.for("react.element"),
  rn = Symbol.for("react.portal"),
  ln = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  lo = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  mc = Symbol.for("react.context"),
  Sa = Symbol.for("react.forward_ref"),
  oo = Symbol.for("react.suspense"),
  ao = Symbol.for("react.suspense_list"),
  ka = Symbol.for("react.memo"),
  yt = Symbol.for("react.lazy"),
  yc = Symbol.for("react.offscreen"),
  ms = Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ms && e[ms]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  kl;
function Kn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var bl = !1;
function _l(e, t) {
  if (!e || bl) return "";
  bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var u =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function zp(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case rn:
      return "Portal";
    case lo:
      return "Profiler";
    case wa:
      return "StrictMode";
    case oo:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || "Context") + ".Consumer";
      case hc:
        return (e._context.displayName || "Context") + ".Provider";
      case Sa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ka:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || "Memo"
        );
      case yt:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function Ip(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return so(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jp(e) {
  var t = vc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Dr(e) {
  e._valueTracker || (e._valueTracker = jp(e));
}
function gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function pi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && ga(e, "checked", t, !1);
}
function co(e, t) {
  wc(e, t);
  var n = Ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fo(e, t.type, Ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fo(e, t, n) {
  (t !== "number" || pi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ht(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ht(n) };
}
function Sc(e, t) {
  var n = Ht(t.value),
    r = Ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ws(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wr,
  bc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wr = Wr || document.createElement("div"),
          Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function (e) {
  Dp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
  });
});
function _c(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _c(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Wp = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mo(e, t) {
  if (t) {
    if (Wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function yo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vo = null;
function ba(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var go = null,
  vn = null,
  gn = null;
function Ss(e) {
  if ((e = Tr(e))) {
    if (typeof go != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = nl(t)), go(e.stateNode, e.type, t));
  }
}
function xc(e) {
  vn ? (gn ? gn.push(e) : (gn = [e])) : (vn = e);
}
function Nc() {
  if (vn) {
    var e = vn,
      t = gn;
    if (((gn = vn = null), Ss(e), t)) for (e = 0; e < t.length; e++) Ss(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Ec() {}
var Cl = !1;
function Pc(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return Oc(e, t, n);
  } finally {
    (Cl = !1), (vn !== null || gn !== null) && (Ec(), Nc());
  }
}
function ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var wo = !1;
if (ct)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", {
      get: function () {
        wo = !0;
      },
    }),
      window.addEventListener("test", Fn, Fn),
      window.removeEventListener("test", Fn, Fn);
  } catch {
    wo = !1;
  }
function Ap(e, t, n, r, i, o, a, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Jn = !1,
  hi = null,
  mi = !1,
  So = null,
  Fp = {
    onError: function (e) {
      (Jn = !0), (hi = e);
    },
  };
function Up(e, t, n, r, i, o, a, s, u) {
  (Jn = !1), (hi = null), Ap.apply(Fp, arguments);
}
function $p(e, t, n, r, i, o, a, s, u) {
  if ((Up.apply(this, arguments), Jn)) {
    if (Jn) {
      var c = hi;
      (Jn = !1), (hi = null);
    } else throw Error(N(198));
    mi || ((mi = !0), (So = c));
  }
}
function Jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ks(e) {
  if (Jt(e) !== e) throw Error(N(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ks(i), e;
        if (o === r) return ks(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Lc(e) {
  return (e = Bp(e)), e !== null ? Rc(e) : null;
}
function Rc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hc = Me.unstable_scheduleCallback,
  bs = Me.unstable_cancelCallback,
  Vp = Me.unstable_shouldYield,
  Qp = Me.unstable_requestPaint,
  ie = Me.unstable_now,
  qp = Me.unstable_getCurrentPriorityLevel,
  _a = Me.unstable_ImmediatePriority,
  Mc = Me.unstable_UserBlockingPriority,
  yi = Me.unstable_NormalPriority,
  Kp = Me.unstable_LowPriority,
  zc = Me.unstable_IdlePriority,
  Xi = null,
  et = null;
function Yp(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : Xp,
  Zp = Math.log,
  Gp = Math.LN2;
function Xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zp(e) / Gp) | 0)) | 0;
}
var Ar = 64,
  Fr = 4194304;
function Zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function vi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = Zn(s)) : ((o &= a), o !== 0 && (r = Zn(o)));
  } else (a = n & ~i), a !== 0 ? (r = Zn(a)) : o !== 0 && (r = Zn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Jp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function eh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Ke(o),
      s = 1 << a,
      u = i[a];
    u === -1
      ? (!(s & n) || s & r) && (i[a] = Jp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function ko(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ic() {
  var e = Ar;
  return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function th(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var V = 0;
function jc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dc,
  xa,
  Wc,
  Ac,
  Fc,
  bo = !1,
  Ur = [],
  Ct = null,
  xt = null,
  Nt = null,
  cr = new Map(),
  dr = new Map(),
  wt = [],
  nh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Tr(t)), t !== null && xa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function rh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ct = Un(Ct, e, t, n, r, i)), !0;
    case "dragenter":
      return (xt = Un(xt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = Un(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return cr.set(o, Un(cr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), dr.set(o, Un(dr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Uc(e) {
  var t = Ft(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tc(n)), t !== null)) {
          (e.blockedOn = t),
            Fc(e.priority, function () {
              Wc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vo = r), n.target.dispatchEvent(r), (vo = null);
    } else return (t = Tr(n)), t !== null && xa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cs(e, t, n) {
  ni(e) && n.delete(t);
}
function ih() {
  (bo = !1),
    Ct !== null && ni(Ct) && (Ct = null),
    xt !== null && ni(xt) && (xt = null),
    Nt !== null && ni(Nt) && (Nt = null),
    cr.forEach(Cs),
    dr.forEach(Cs);
}
function $n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bo ||
      ((bo = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, ih)));
}
function fr(e) {
  function t(i) {
    return $n(i, e);
  }
  if (0 < Ur.length) {
    $n(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ct !== null && $n(Ct, e),
      xt !== null && $n(xt, e),
      Nt !== null && $n(Nt, e),
      cr.forEach(t),
      dr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Uc(n), n.blockedOn === null && wt.shift();
}
var wn = ht.ReactCurrentBatchConfig,
  gi = !0;
function lh(e, t, n, r) {
  var i = V,
    o = wn.transition;
  wn.transition = null;
  try {
    (V = 1), Na(e, t, n, r);
  } finally {
    (V = i), (wn.transition = o);
  }
}
function oh(e, t, n, r) {
  var i = V,
    o = wn.transition;
  wn.transition = null;
  try {
    (V = 4), Na(e, t, n, r);
  } finally {
    (V = i), (wn.transition = o);
  }
}
function Na(e, t, n, r) {
  if (gi) {
    var i = _o(e, t, n, r);
    if (i === null) zl(e, t, r, wi, n), _s(e, r);
    else if (rh(i, e, t, n, r)) r.stopPropagation();
    else if ((_s(e, r), t & 4 && -1 < nh.indexOf(e))) {
      for (; i !== null; ) {
        var o = Tr(i);
        if (
          (o !== null && Dc(o),
          (o = _o(e, t, n, r)),
          o === null && zl(e, t, r, wi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var wi = null;
function _o(e, t, n, r) {
  if (((wi = null), (e = ba(r)), (e = Ft(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wi = e), null;
}
function $c(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qp()) {
        case _a:
          return 1;
        case Mc:
          return 4;
        case yi:
        case Kp:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  Oa = null,
  ri = null;
function Bc() {
  if (ri) return ri;
  var e,
    t = Oa,
    n = t.length,
    r,
    i = "value" in kt ? kt.value : kt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ri = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ii(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $r() {
  return !0;
}
function xs() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? $r
        : xs),
      (this.isPropagationStopped = xs),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ea = Ie(jn),
  Pr = te({}, jn, { view: 0, detail: 0 }),
  ah = Ie(Pr),
  Nl,
  Ol,
  Bn,
  Ji = te({}, Pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((Nl = e.screenX - Bn.screenX), (Ol = e.screenY - Bn.screenY))
              : (Ol = Nl = 0),
            (Bn = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ol;
    },
  }),
  Ns = Ie(Ji),
  sh = te({}, Ji, { dataTransfer: 0 }),
  uh = Ie(sh),
  ch = te({}, Pr, { relatedTarget: 0 }),
  El = Ie(ch),
  dh = te({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fh = Ie(dh),
  ph = te({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hh = Ie(ph),
  mh = te({}, jn, { data: 0 }),
  Os = Ie(mh),
  yh = {
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
    MozPrintableKey: "Unidentified",
  },
  vh = {
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
    224: "Meta",
  },
  gh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gh[e]) ? !!t[e] : !1;
}
function Pa() {
  return wh;
}
var Sh = te({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = yh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pa,
    charCode: function (e) {
      return e.type === "keypress" ? ii(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ii(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kh = Ie(Sh),
  bh = te({}, Ji, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Es = Ie(bh),
  _h = te({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa,
  }),
  Ch = Ie(_h),
  xh = te({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nh = Ie(xh),
  Oh = te({}, Ji, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Eh = Ie(Oh),
  Ph = [9, 13, 27, 32],
  Ta = ct && "CompositionEvent" in window,
  er = null;
ct && "documentMode" in document && (er = document.documentMode);
var Th = ct && "TextEvent" in window && !er,
  Vc = ct && (!Ta || (er && 8 < er && 11 >= er)),
  Ps = String.fromCharCode(32),
  Ts = !1;
function Qc(e, t) {
  switch (e) {
    case "keyup":
      return Ph.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function Lh(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ts = !0), Ps);
    case "textInput":
      return (e = t.data), e === Ps && Ts ? null : e;
    default:
      return null;
  }
}
function Rh(e, t) {
  if (on)
    return e === "compositionend" || (!Ta && Qc(e, t))
      ? ((e = Bc()), (ri = Oa = kt = null), (on = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hh[e.type] : t === "textarea";
}
function Kc(e, t, n, r) {
  xc(r),
    (t = Si(t, "onChange")),
    0 < t.length &&
      ((n = new Ea("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var tr = null,
  pr = null;
function Mh(e) {
  ld(e, 0);
}
function el(e) {
  var t = un(e);
  if (gc(t)) return e;
}
function zh(e, t) {
  if (e === "change") return t;
}
var Yc = !1;
if (ct) {
  var Pl;
  if (ct) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var Rs = document.createElement("div");
      Rs.setAttribute("oninput", "return;"),
        (Tl = typeof Rs.oninput == "function");
    }
    Pl = Tl;
  } else Pl = !1;
  Yc = Pl && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  tr && (tr.detachEvent("onpropertychange", Zc), (pr = tr = null));
}
function Zc(e) {
  if (e.propertyName === "value" && el(pr)) {
    var t = [];
    Kc(t, pr, e, ba(e)), Pc(Mh, t);
  }
}
function Ih(e, t, n) {
  e === "focusin"
    ? (Hs(), (tr = t), (pr = n), tr.attachEvent("onpropertychange", Zc))
    : e === "focusout" && Hs();
}
function jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return el(pr);
}
function Dh(e, t) {
  if (e === "click") return el(t);
}
function Wh(e, t) {
  if (e === "input" || e === "change") return el(t);
}
function Ah(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Ah;
function hr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!io.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zs(e, t) {
  var n = Ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ms(n);
  }
}
function Gc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xc() {
  for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pi(e.document);
  }
  return t;
}
function La(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fh(e) {
  var t = Xc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && La(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = zs(n, o));
        var a = zs(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uh = ct && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  Co = null,
  nr = null,
  xo = !1;
function Is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xo ||
    an == null ||
    an !== pi(r) ||
    ((r = an),
    "selectionStart" in r && La(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (nr && hr(nr, r)) ||
      ((nr = r),
      (r = Si(Co, "onSelect")),
      0 < r.length &&
        ((t = new Ea("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = an))));
}
function Br(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Br("Animation", "AnimationEnd"),
    animationiteration: Br("Animation", "AnimationIteration"),
    animationstart: Br("Animation", "AnimationStart"),
    transitionend: Br("Transition", "TransitionEnd"),
  },
  Ll = {},
  Jc = {};
ct &&
  ((Jc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function tl(e) {
  if (Ll[e]) return Ll[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jc) return (Ll[e] = t[n]);
  return e;
}
var ed = tl("animationend"),
  td = tl("animationiteration"),
  nd = tl("animationstart"),
  rd = tl("transitionend"),
  id = new Map(),
  js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zt(e, t) {
  id.set(e, t), Xt(t, [e]);
}
for (var Rl = 0; Rl < js.length; Rl++) {
  var Hl = js[Rl],
    $h = Hl.toLowerCase(),
    Bh = Hl[0].toUpperCase() + Hl.slice(1);
  zt($h, "on" + Bh);
}
zt(ed, "onAnimationEnd");
zt(td, "onAnimationIteration");
zt(nd, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(rd, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));
function Ds(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $p(r, t, void 0, e), (e.currentTarget = null);
}
function ld(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          Ds(i, s, c), (o = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Ds(i, s, c), (o = u);
        }
    }
  }
  if (mi) throw ((e = So), (mi = !1), (So = null), e);
}
function K(e, t) {
  var n = t[To];
  n === void 0 && (n = t[To] = new Set());
  var r = e + "__bubble";
  n.has(r) || (od(t, e, 2, !1), n.add(r));
}
function Ml(e, t, n) {
  var r = 0;
  t && (r |= 4), od(n, e, r, t);
}
var Vr = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Vr]) {
    (e[Vr] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Vh.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vr] || ((t[Vr] = !0), Ml("selectionchange", !1, t));
  }
}
function od(e, t, n, r) {
  switch ($c(t)) {
    case 1:
      var i = lh;
      break;
    case 4:
      i = oh;
      break;
    default:
      i = Na;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !wo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Ft(s)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Pc(function () {
    var c = o,
      m = ba(n),
      f = [];
    e: {
      var v = id.get(e);
      if (v !== void 0) {
        var k = Ea,
          S = e;
        switch (e) {
          case "keypress":
            if (ii(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = kh;
            break;
          case "focusin":
            (S = "focus"), (k = El);
            break;
          case "focusout":
            (S = "blur"), (k = El);
            break;
          case "beforeblur":
          case "afterblur":
            k = El;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Ns;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = uh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Ch;
            break;
          case ed:
          case td:
          case nd:
            k = fh;
            break;
          case rd:
            k = Nh;
            break;
          case "scroll":
            k = ah;
            break;
          case "wheel":
            k = Eh;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = hh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Es;
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          p = g ? (v !== null ? v + "Capture" : null) : v;
        g = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              p !== null && ((w = ur(d, p)), w != null && g.push(yr(d, w, h)))),
            b)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((v = new k(v, S, null, n, m)), f.push({ event: v, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          v &&
            n !== vo &&
            (S = n.relatedTarget || n.fromElement) &&
            (Ft(S) || S[dt]))
        )
          break e;
        if (
          (k || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = c),
              (S = S ? Ft(S) : null),
              S !== null &&
                ((b = Jt(S)), S !== b || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = c)),
          k !== S)
        ) {
          if (
            ((g = Ns),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Es),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (b = k == null ? v : un(k)),
            (h = S == null ? v : un(S)),
            (v = new g(w, d + "leave", k, n, m)),
            (v.target = b),
            (v.relatedTarget = h),
            (w = null),
            Ft(m) === c &&
              ((g = new g(p, d + "enter", S, n, m)),
              (g.target = h),
              (g.relatedTarget = b),
              (w = g)),
            (b = w),
            k && S)
          )
            t: {
              for (g = k, p = S, d = 0, h = g; h; h = nn(h)) d++;
              for (h = 0, w = p; w; w = nn(w)) h++;
              for (; 0 < d - h; ) (g = nn(g)), d--;
              for (; 0 < h - d; ) (p = nn(p)), h--;
              for (; d--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = nn(g)), (p = nn(p));
              }
              g = null;
            }
          else g = null;
          k !== null && Ws(f, v, k, g, !1),
            S !== null && b !== null && Ws(f, b, S, g, !0);
        }
      }
      e: {
        if (
          ((v = c ? un(c) : window),
          (k = v.nodeName && v.nodeName.toLowerCase()),
          k === "select" || (k === "input" && v.type === "file"))
        )
          var _ = zh;
        else if (Ls(v))
          if (Yc) _ = Wh;
          else {
            _ = jh;
            var x = Ih;
          }
        else
          (k = v.nodeName) &&
            k.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (_ = Dh);
        if (_ && (_ = _(e, c))) {
          Kc(f, _, n, m);
          break e;
        }
        x && x(e, v, c),
          e === "focusout" &&
            (x = v._wrapperState) &&
            x.controlled &&
            v.type === "number" &&
            fo(v, "number", v.value);
      }
      switch (((x = c ? un(c) : window), e)) {
        case "focusin":
          (Ls(x) || x.contentEditable === "true") &&
            ((an = x), (Co = c), (nr = null));
          break;
        case "focusout":
          nr = Co = an = null;
          break;
        case "mousedown":
          xo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xo = !1), Is(f, n, m);
          break;
        case "selectionchange":
          if (Uh) break;
        case "keydown":
        case "keyup":
          Is(f, n, m);
      }
      var E;
      if (Ta)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        on
          ? Qc(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Vc &&
          n.locale !== "ko" &&
          (on || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && on && (E = Bc())
            : ((kt = m),
              (Oa = "value" in kt ? kt.value : kt.textContent),
              (on = !0))),
        (x = Si(c, R)),
        0 < x.length &&
          ((R = new Os(R, e, null, n, m)),
          f.push({ event: R, listeners: x }),
          E ? (R.data = E) : ((E = qc(n)), E !== null && (R.data = E)))),
        (E = Th ? Lh(e, n) : Rh(e, n)) &&
          ((c = Si(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Os("onBeforeInput", "beforeinput", null, n, m)),
            f.push({ event: m, listeners: c }),
            (m.data = E)));
    }
    ld(f, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ur(e, n)),
      o != null && r.unshift(yr(e, o, i)),
      (o = ur(e, t)),
      o != null && r.push(yr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ws(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      i
        ? ((u = ur(n, o)), u != null && a.unshift(yr(n, u, s)))
        : i || ((u = ur(n, o)), u != null && a.push(yr(n, u, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Qh = /\r\n?/g,
  qh = /\u0000|\uFFFD/g;
function As(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qh,
      `
`
    )
    .replace(qh, "");
}
function Qr(e, t, n) {
  if (((t = As(t)), As(e) !== t && n)) throw Error(N(425));
}
function ki() {}
var No = null,
  Oo = null;
function Eo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Po = typeof setTimeout == "function" ? setTimeout : void 0,
  Kh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fs = typeof Promise == "function" ? Promise : void 0,
  Yh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fs < "u"
      ? function (e) {
          return Fs.resolve(null).then(e).catch(Zh);
        }
      : Po;
function Zh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  fr(t);
}
function Ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Dn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Dn,
  vr = "__reactProps$" + Dn,
  dt = "__reactContainer$" + Dn,
  To = "__reactEvents$" + Dn,
  Gh = "__reactListeners$" + Dn,
  Xh = "__reactHandles$" + Dn;
function Ft(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Us(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = Us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Tr(e) {
  return (
    (e = e[Je] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function nl(e) {
  return e[vr] || null;
}
var Lo = [],
  cn = -1;
function It(e) {
  return { current: e };
}
function Y(e) {
  0 > cn || ((e.current = Lo[cn]), (Lo[cn] = null), cn--);
}
function q(e, t) {
  cn++, (Lo[cn] = e.current), (e.current = t);
}
var Mt = {},
  ge = It(Mt),
  Oe = It(!1),
  Qt = Mt;
function xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function bi() {
  Y(Oe), Y(ge);
}
function $s(e, t, n) {
  if (ge.current !== Mt) throw Error(N(168));
  q(ge, t), q(Oe, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, Ip(e) || "Unknown", i));
  return te({}, n, r);
}
function _i(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Qt = ge.current),
    q(ge, e),
    q(Oe, Oe.current),
    !0
  );
}
function Bs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = ad(e, t, Qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Oe),
      Y(ge),
      q(ge, e))
    : Y(Oe),
    q(Oe, n);
}
var ot = null,
  rl = !1,
  jl = !1;
function sd(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
function Jh(e) {
  (rl = !0), sd(e);
}
function jt() {
  if (!jl && ot !== null) {
    jl = !0;
    var e = 0,
      t = V;
    try {
      var n = ot;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ot = null), (rl = !1);
    } catch (i) {
      throw (ot !== null && (ot = ot.slice(e + 1)), Hc(_a, jt), i);
    } finally {
      (V = t), (jl = !1);
    }
  }
  return null;
}
var dn = [],
  fn = 0,
  Ci = null,
  xi = 0,
  De = [],
  We = 0,
  qt = null,
  at = 1,
  st = "";
function Wt(e, t) {
  (dn[fn++] = xi), (dn[fn++] = Ci), (Ci = e), (xi = t);
}
function ud(e, t, n) {
  (De[We++] = at), (De[We++] = st), (De[We++] = qt), (qt = e);
  var r = at;
  e = st;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ke(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (at = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (st = o + e);
  } else (at = (1 << o) | (n << i) | r), (st = e);
}
function Ra(e) {
  e.return !== null && (Wt(e, 1), ud(e, 1, 0));
}
function Ha(e) {
  for (; e === Ci; )
    (Ci = dn[--fn]), (dn[fn] = null), (xi = dn[--fn]), (dn[fn] = null);
  for (; e === qt; )
    (qt = De[--We]),
      (De[We] = null),
      (st = De[--We]),
      (De[We] = null),
      (at = De[--We]),
      (De[We] = null);
}
var He = null,
  Re = null,
  G = !1,
  qe = null;
function cd(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Re = Ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: at, overflow: st } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ho(e) {
  if (G) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Vs(e, t)) {
        if (Ro(e)) throw Error(N(418));
        t = Ot(n.nextSibling);
        var r = He;
        t && Vs(e, t)
          ? cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (He = e));
      }
    } else {
      if (Ro(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (He = e);
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function qr(e) {
  if (e !== He) return !1;
  if (!G) return Qs(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (Ro(e)) throw (dd(), Error(N(418)));
    for (; t; ) cd(e, t), (t = Ot(t.nextSibling));
  }
  if ((Qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = He ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = Re; e; ) e = Ot(e.nextSibling);
}
function Nn() {
  (Re = He = null), (G = !1);
}
function Ma(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var e1 = ht.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qs(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
  function t(p, d) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [d]), (p.flags |= 16)) : h.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function i(p, d) {
    return (p = Lt(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, d, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((p.flags |= 2), d) : h)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, h, w) {
    return d === null || d.tag !== 6
      ? ((d = Bl(h, p.mode, w)), (d.return = p), d)
      : ((d = i(d, h)), (d.return = p), d);
  }
  function u(p, d, h, w) {
    var _ = h.type;
    return _ === ln
      ? m(p, d, h.props.children, w, h.key)
      : d !== null &&
        (d.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === yt &&
            qs(_) === d.type))
      ? ((w = i(d, h.props)), (w.ref = Vn(p, d, h)), (w.return = p), w)
      : ((w = di(h.type, h.key, h.props, null, p.mode, w)),
        (w.ref = Vn(p, d, h)),
        (w.return = p),
        w);
  }
  function c(p, d, h, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Vl(h, p.mode, w)), (d.return = p), d)
      : ((d = i(d, h.children || [])), (d.return = p), d);
  }
  function m(p, d, h, w, _) {
    return d === null || d.tag !== 7
      ? ((d = Vt(h, p.mode, w, _)), (d.return = p), d)
      : ((d = i(d, h)), (d.return = p), d);
  }
  function f(p, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Bl("" + d, p.mode, h)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case jr:
          return (
            (h = di(d.type, d.key, d.props, null, p.mode, h)),
            (h.ref = Vn(p, null, d)),
            (h.return = p),
            h
          );
        case rn:
          return (d = Vl(d, p.mode, h)), (d.return = p), d;
        case yt:
          var w = d._init;
          return f(p, w(d._payload), h);
      }
      if (Yn(d) || An(d))
        return (d = Vt(d, p.mode, h, null)), (d.return = p), d;
      Kr(p, d);
    }
    return null;
  }
  function v(p, d, h, w) {
    var _ = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return _ !== null ? null : s(p, d, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case jr:
          return h.key === _ ? u(p, d, h, w) : null;
        case rn:
          return h.key === _ ? c(p, d, h, w) : null;
        case yt:
          return (_ = h._init), v(p, d, _(h._payload), w);
      }
      if (Yn(h) || An(h)) return _ !== null ? null : m(p, d, h, w, null);
      Kr(p, h);
    }
    return null;
  }
  function k(p, d, h, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(h) || null), s(d, p, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case jr:
          return (p = p.get(w.key === null ? h : w.key) || null), u(d, p, w, _);
        case rn:
          return (p = p.get(w.key === null ? h : w.key) || null), c(d, p, w, _);
        case yt:
          var x = w._init;
          return k(p, d, h, x(w._payload), _);
      }
      if (Yn(w) || An(w)) return (p = p.get(h) || null), m(d, p, w, _, null);
      Kr(d, w);
    }
    return null;
  }
  function S(p, d, h, w) {
    for (
      var _ = null, x = null, E = d, R = (d = 0), O = null;
      E !== null && R < h.length;
      R++
    ) {
      E.index > R ? ((O = E), (E = null)) : (O = E.sibling);
      var C = v(p, E, h[R], w);
      if (C === null) {
        E === null && (E = O);
        break;
      }
      e && E && C.alternate === null && t(p, E),
        (d = o(C, d, R)),
        x === null ? (_ = C) : (x.sibling = C),
        (x = C),
        (E = O);
    }
    if (R === h.length) return n(p, E), G && Wt(p, R), _;
    if (E === null) {
      for (; R < h.length; R++)
        (E = f(p, h[R], w)),
          E !== null &&
            ((d = o(E, d, R)), x === null ? (_ = E) : (x.sibling = E), (x = E));
      return G && Wt(p, R), _;
    }
    for (E = r(p, E); R < h.length; R++)
      (O = k(E, p, R, h[R], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? R : O.key),
          (d = o(O, d, R)),
          x === null ? (_ = O) : (x.sibling = O),
          (x = O));
    return (
      e &&
        E.forEach(function (M) {
          return t(p, M);
        }),
      G && Wt(p, R),
      _
    );
  }
  function g(p, d, h, w) {
    var _ = An(h);
    if (typeof _ != "function") throw Error(N(150));
    if (((h = _.call(h)), h == null)) throw Error(N(151));
    for (
      var x = (_ = null), E = d, R = (d = 0), O = null, C = h.next();
      E !== null && !C.done;
      R++, C = h.next()
    ) {
      E.index > R ? ((O = E), (E = null)) : (O = E.sibling);
      var M = v(p, E, C.value, w);
      if (M === null) {
        E === null && (E = O);
        break;
      }
      e && E && M.alternate === null && t(p, E),
        (d = o(M, d, R)),
        x === null ? (_ = M) : (x.sibling = M),
        (x = M),
        (E = O);
    }
    if (C.done) return n(p, E), G && Wt(p, R), _;
    if (E === null) {
      for (; !C.done; R++, C = h.next())
        (C = f(p, C.value, w)),
          C !== null &&
            ((d = o(C, d, R)), x === null ? (_ = C) : (x.sibling = C), (x = C));
      return G && Wt(p, R), _;
    }
    for (E = r(p, E); !C.done; R++, C = h.next())
      (C = k(E, p, R, C.value, w)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? R : C.key),
          (d = o(C, d, R)),
          x === null ? (_ = C) : (x.sibling = C),
          (x = C));
    return (
      e &&
        E.forEach(function (z) {
          return t(p, z);
        }),
      G && Wt(p, R),
      _
    );
  }
  function b(p, d, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === ln &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case jr:
          e: {
            for (var _ = h.key, x = d; x !== null; ) {
              if (x.key === _) {
                if (((_ = h.type), _ === ln)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (d = i(x, h.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  x.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === yt &&
                    qs(_) === x.type)
                ) {
                  n(p, x.sibling),
                    (d = i(x, h.props)),
                    (d.ref = Vn(p, x, h)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            h.type === ln
              ? ((d = Vt(h.props.children, p.mode, w, h.key)),
                (d.return = p),
                (p = d))
              : ((w = di(h.type, h.key, h.props, null, p.mode, w)),
                (w.ref = Vn(p, d, h)),
                (w.return = p),
                (p = w));
          }
          return a(p);
        case rn:
          e: {
            for (x = h.key; d !== null; ) {
              if (d.key === x)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(p, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = Vl(h, p.mode, w)), (d.return = p), (p = d);
          }
          return a(p);
        case yt:
          return (x = h._init), b(p, d, x(h._payload), w);
      }
      if (Yn(h)) return S(p, d, h, w);
      if (An(h)) return g(p, d, h, w);
      Kr(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = i(d, h)), (d.return = p), (p = d))
          : (n(p, d), (d = Bl(h, p.mode, w)), (d.return = p), (p = d)),
        a(p))
      : n(p, d);
  }
  return b;
}
var On = fd(!0),
  pd = fd(!1),
  Ni = It(null),
  Oi = null,
  pn = null,
  za = null;
function Ia() {
  za = pn = Oi = null;
}
function ja(e) {
  var t = Ni.current;
  Y(Ni), (e._currentValue = t);
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  (Oi = e),
    (za = pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (za !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
      if (Oi === null) throw Error(N(308));
      (pn = e), (Oi.dependencies = { lanes: 0, firstContext: e });
    } else pn = pn.next = e;
  return t;
}
var Ut = null;
function Da(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function hd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Da(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ft(e, r)
  );
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function md(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ft(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Da(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ft(e, n)
  );
}
function li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
function Ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ei(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), a === null ? (o = c) : (a.next = c), (a = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== a &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (m = c = u = null), (s = o);
    do {
      var v = s.lane,
        k = s.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: k,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            g = s;
          switch (((v = t), (k = n), g.tag)) {
            case 1:
              if (((S = g.payload), typeof S == "function")) {
                f = S.call(k, f, v);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = g.payload),
                (v = typeof S == "function" ? S.call(k, f, v) : S),
                v == null)
              )
                break e;
              f = te({}, f, v);
              break e;
            case 2:
              vt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [s]) : v.push(s));
      } else
        (k = {
          eventTime: k,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = k), (u = f)) : (m = m.next = k),
          (a |= v);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Yt |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function Ys(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var Lr = {},
  tt = It(Lr),
  gr = It(Lr),
  wr = It(Lr);
function $t(e) {
  if (e === Lr) throw Error(N(174));
  return e;
}
function Aa(e, t) {
  switch ((q(wr, t), q(gr, e), q(tt, Lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ho(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ho(t, e));
  }
  Y(tt), q(tt, t);
}
function En() {
  Y(tt), Y(gr), Y(wr);
}
function yd(e) {
  $t(wr.current);
  var t = $t(tt.current),
    n = ho(t, e.type);
  t !== n && (q(gr, e), q(tt, n));
}
function Fa(e) {
  gr.current === e && (Y(tt), Y(gr));
}
var J = It(0);
function Pi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Dl = [];
function Ua() {
  for (var e = 0; e < Dl.length; e++)
    Dl[e]._workInProgressVersionPrimary = null;
  Dl.length = 0;
}
var oi = ht.ReactCurrentDispatcher,
  Wl = ht.ReactCurrentBatchConfig,
  Kt = 0,
  ee = null,
  se = null,
  ce = null,
  Ti = !1,
  rr = !1,
  Sr = 0,
  t1 = 0;
function me() {
  throw Error(N(321));
}
function $a(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Ba(e, t, n, r, i, o) {
  if (
    ((Kt = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oi.current = e === null || e.memoizedState === null ? l1 : o1),
    (e = n(r, i)),
    rr)
  ) {
    o = 0;
    do {
      if (((rr = !1), (Sr = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (ce = se = null),
        (t.updateQueue = null),
        (oi.current = a1),
        (e = n(r, i));
    } while (rr);
  }
  if (
    ((oi.current = Li),
    (t = se !== null && se.next !== null),
    (Kt = 0),
    (ce = se = ee = null),
    (Ti = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Va() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function $e() {
  if (se === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) (ce = t), (se = e);
  else {
    if (e === null) throw Error(N(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      u = null,
      c = o;
    do {
      var m = c.lane;
      if ((Kt & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (a = r)) : (u = u.next = f),
          (ee.lanes |= m),
          (Yt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (a = r) : (u.next = s),
      Ze(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (Yt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fl(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    Ze(o, t.memoizedState) || (Ne = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function vd() {}
function gd(e, t) {
  var n = ee,
    r = $e(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    Qa(kd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      br(9, Sd.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(N(349));
    Kt & 30 || wd(n, t, i);
  }
  return i;
}
function wd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bd(t) && _d(e);
}
function kd(e, t, n) {
  return n(function () {
    bd(t) && _d(e);
  });
}
function bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function _d(e) {
  var t = ft(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function Zs(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = i1.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Cd() {
  return $e().memoizedState;
}
function ai(e, t, n, r) {
  var i = Xe();
  (ee.flags |= e),
    (i.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function il(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var a = se.memoizedState;
    if (((o = a.destroy), r !== null && $a(r, a.deps))) {
      i.memoizedState = br(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = br(1 | t, n, o, r));
}
function Gs(e, t) {
  return ai(8390656, 8, e, t);
}
function Qa(e, t) {
  return il(2048, 8, e, t);
}
function xd(e, t) {
  return il(4, 2, e, t);
}
function Nd(e, t) {
  return il(4, 4, e, t);
}
function Od(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), il(4, 4, Od.bind(null, t, e), n)
  );
}
function qa() {}
function Pd(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Td(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ld(e, t, n) {
  return Kt & 21
    ? (Ze(n, t) || ((n = Ic()), (ee.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function n1(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (Wl.transition = r);
  }
}
function Rd() {
  return $e().memoizedState;
}
function r1(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hd(e))
  )
    Md(t, n);
  else if (((n = hd(e, t, n, r)), n !== null)) {
    var i = ke();
    Ye(n, e, r, i), zd(n, t, r);
  }
}
function i1(e, t, n) {
  var r = Tt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hd(e)) Md(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Ze(s, a))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Da(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = hd(e, t, i, r)),
      n !== null && ((i = ke()), Ye(n, e, r, i), zd(n, t, r));
  }
}
function Hd(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Md(e, t) {
  rr = Ti = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
var Li = {
    readContext: Ue,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  l1 = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Gs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ai(4194308, 4, Od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ai(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ai(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = r1.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zs,
    useDebugValue: qa,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = Zs(!1),
        t = e[0];
      return (e = n1.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = Xe();
      if (G) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(N(349));
        Kt & 30 || wd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Gs(kd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        br(9, Sd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = de.identifierPrefix;
      if (G) {
        var n = st,
          r = at;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = t1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  o1 = {
    readContext: Ue,
    useCallback: Pd,
    useContext: Ue,
    useEffect: Qa,
    useImperativeHandle: Ed,
    useInsertionEffect: xd,
    useLayoutEffect: Nd,
    useMemo: Td,
    useReducer: Al,
    useRef: Cd,
    useState: function () {
      return Al(kr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = $e();
      return Ld(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(kr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: gd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  },
  a1 = {
    readContext: Ue,
    useCallback: Pd,
    useContext: Ue,
    useEffect: Qa,
    useImperativeHandle: Ed,
    useInsertionEffect: xd,
    useLayoutEffect: Nd,
    useMemo: Td,
    useReducer: Fl,
    useRef: Cd,
    useState: function () {
      return Fl(kr);
    },
    useDebugValue: qa,
    useDeferredValue: function (e) {
      var t = $e();
      return se === null ? (t.memoizedState = e) : Ld(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Fl(kr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: vd,
    useSyncExternalStore: gd,
    useId: Rd,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Tt(e),
      o = ut(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Et(e, o, i)),
      t !== null && (Ye(t, e, i, r), li(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Tt(e),
      o = ut(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Et(e, o, i)),
      t !== null && (Ye(t, e, i, r), li(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Tt(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Et(e, i, r)),
      t !== null && (Ye(t, e, r, n), li(t, e, r));
  },
};
function Xs(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hr(n, r) || !hr(i, o)
      : !0
  );
}
function Id(e, t, n) {
  var r = !1,
    i = Mt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ue(o))
      : ((i = Ee(t) ? Qt : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xn(e, i) : Mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ll.enqueueReplaceState(t, t.state, null);
}
function Io(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Wa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ue(o))
    : ((o = Ee(t) ? Qt : ge.current), (i.context = xn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (zo(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ll.enqueueReplaceState(i, i.state, null),
      Ei(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var s1 = typeof WeakMap == "function" ? WeakMap : Map;
function jd(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hi || ((Hi = !0), (qo = r)), jo(e, t);
    }),
    n
  );
}
function Dd(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        jo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        jo(e, t),
          typeof r != "function" &&
            (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new s1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = b1.bind(null, e, t, n)), t.then(e, e));
}
function tu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function nu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Et(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var u1 = ht.ReactCurrentOwner,
  Ne = !1;
function Se(e, t, n, r) {
  t.child = e === null ? pd(t, null, n, r) : On(t, e.child, n, r);
}
function ru(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Sn(t, i),
    (r = Ba(e, t, n, r, o, i)),
    (n = Va()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (G && n && Ra(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function iu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ts(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wd(e, t, o, r, i))
      : ((e = di(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hr), n(a, r) && e.ref === t.ref)
    )
      return pt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Lt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (hr(o, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), pt(e, t, i);
  }
  return Do(e, t, n, r, i);
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(mn, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(mn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(mn, Le),
        (Le |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(mn, Le),
      (Le |= r);
  return Se(e, t, i, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Do(e, t, n, r, i) {
  var o = Ee(n) ? Qt : ge.current;
  return (
    (o = xn(t, o)),
    Sn(t, i),
    (n = Ba(e, t, n, r, o, i)),
    (r = Va()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (G && r && Ra(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function lu(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    _i(t);
  } else o = !1;
  if ((Sn(t, i), t.stateNode === null))
    si(e, t), Id(t, n, r), Io(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var u = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ue(c))
      : ((c = Ee(n) ? Qt : ge.current), (c = xn(t, c)));
    var m = n.getDerivedStateFromProps,
      f =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Js(t, a, r, c)),
      (vt = !1);
    var v = t.memoizedState;
    (a.state = v),
      Ei(t, r, a, i),
      (u = t.memoizedState),
      s !== r || v !== u || Oe.current || vt
        ? (typeof m == "function" && (zo(t, n, m, r), (u = t.memoizedState)),
          (s = vt || Xs(t, n, s, r, v, u, c))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = c),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      md(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ve(t.type, s)),
      (a.props = c),
      (f = t.pendingProps),
      (v = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ue(u))
        : ((u = Ee(n) ? Qt : ge.current), (u = xn(t, u)));
    var k = n.getDerivedStateFromProps;
    (m =
      typeof k == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== f || v !== u) && Js(t, a, r, u)),
      (vt = !1),
      (v = t.memoizedState),
      (a.state = v),
      Ei(t, r, a, i);
    var S = t.memoizedState;
    s !== f || v !== S || Oe.current || vt
      ? (typeof k == "function" && (zo(t, n, k, r), (S = t.memoizedState)),
        (c = vt || Xs(t, n, c, r, v, S, u) || !1)
          ? (m ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, S, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, S, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (a.props = r),
        (a.state = S),
        (a.context = u),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wo(e, t, n, r, o, i);
}
function Wo(e, t, n, r, i, o) {
  Fd(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Bs(t, n, !1), pt(e, t, o);
  (r = t.stateNode), (u1.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = On(t, e.child, null, o)), (t.child = On(t, null, s, o)))
      : Se(e, t, s, o),
    (t.memoizedState = r.state),
    i && Bs(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $s(e, t.context, !1),
    Aa(e, t.containerInfo);
}
function ou(e, t, n, r, i) {
  return Nn(), Ma(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, n) {
  var r = t.pendingProps,
    i = J.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(J, i & 1),
    e === null)
  )
    return (
      Ho(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = sl(a, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fo(n)),
              (t.memoizedState = Ao),
              e)
            : Ka(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return c1(e, t, a, r, s, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Lt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Lt(s, o)) : ((o = Vt(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Fo(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ao),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Lt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ka(e, t) {
  return (
    (t = sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yr(e, t, n, r) {
  return (
    r !== null && Ma(r),
    On(t, e.child, null, n),
    (e = Ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function c1(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ul(Error(N(422)))), Yr(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = sl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Vt(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && On(t, e.child, null, a),
        (t.child.memoizedState = Fo(a)),
        (t.memoizedState = Ao),
        o);
  if (!(t.mode & 1)) return Yr(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(N(419))), (r = Ul(o, r, void 0)), Yr(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Ne || s)) {
    if (((r = de), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ft(e, i), Ye(r, e, i, -1));
    }
    return es(), (r = Ul(Error(N(421)))), Yr(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Re = Ot(i.nextSibling)),
      (He = t),
      (G = !0),
      (qe = null),
      e !== null &&
        ((De[We++] = at),
        (De[We++] = st),
        (De[We++] = qt),
        (at = e.id),
        (st = e.overflow),
        (qt = t)),
      (t = Ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function $l(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Se(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && au(e, n, t);
        else if (e.tag === 19) au(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Pi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $l(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Pi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        $l(t, !0, n, null, o);
        break;
      case "together":
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function si(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d1(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Nn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      Ee(t.type) && _i(t);
      break;
    case 4:
      Aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(Ni, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $d(e, t, n)
          : (q(J, J.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null);
      q(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ad(e, t, n);
  }
  return pt(e, t, n);
}
var Vd, Uo, Qd, qd;
Vd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uo = function () {};
Qd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $t(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = uo(e, i)), (r = uo(e, r)), (o = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = po(e, i)), (r = po(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ki);
    }
    mo(n, r);
    var a;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var s = i[c];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ar.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                s[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ar.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && K("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
qd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function f1(e, t, n) {
  var r = t.pendingProps;
  switch ((Ha(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Ee(t.type) && bi(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        En(),
        Y(Oe),
        Y(ge),
        Ua(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (Zo(qe), (qe = null)))),
        Uo(e, t),
        ye(t),
        null
      );
    case 5:
      Fa(t);
      var i = $t(wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ye(t), null;
        }
        if (((e = $t(tt.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Je] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gn.length; i++) K(Gn[i], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              ys(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              gs(r, o), K("invalid", r);
          }
          mo(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : ar.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), vs(r, o, !0);
              break;
            case "textarea":
              Dr(r), ws(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ki);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Je] = t),
            (e[vr] = r),
            Vd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = yo(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gn.length; i++) K(Gn[i], e);
                i = r;
                break;
              case "source":
                K("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (i = r);
                break;
              case "details":
                K("toggle", e), (i = r);
                break;
              case "input":
                ys(e, r), (i = uo(e, r)), K("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                gs(e, r), (i = po(e, r)), K("invalid", e);
                break;
              default:
                i = r;
            }
            mo(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Cc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && bc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && sr(e, u)
                    : typeof u == "number" && sr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ar.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && K("scroll", e)
                      : u != null && ga(e, o, u, a));
              }
            switch (n) {
              case "input":
                Dr(e), vs(e, r, !1);
                break;
              case "textarea":
                Dr(e), ws(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ki);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = $t(wr.current)), $t(tt.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (o = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (Y(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Re !== null && t.mode & 1 && !(t.flags & 128))
          dd(), Nn(), (t.flags |= 98560), (o = !1);
        else if (((o = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Je] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (o = !1);
        } else qe !== null && (Zo(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ue === 0 && (ue = 3) : es())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        En(), Uo(e, t), e === null && mr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return ja(t.type._context), ye(t), null;
    case 17:
      return Ee(t.type) && bi(), ye(t), null;
    case 19:
      if ((Y(J), (o = t.memoizedState), o === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Qn(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Pi(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Qn(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > Tn &&
            ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Pi(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !G)
            )
              return ye(t), null;
          } else
            2 * ie() - o.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = J.current),
          q(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Ja(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function p1(e, t) {
  switch ((Ha(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && bi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        En(),
        Y(Oe),
        Y(ge),
        Ua(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fa(t), null;
    case 13:
      if ((Y(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(J), null;
    case 4:
      return En(), null;
    case 10:
      return ja(t.type._context), null;
    case 22:
    case 23:
      return Ja(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zr = !1,
  ve = !1,
  h1 = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function $o(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var su = !1;
function m1(e, t) {
  if (((No = gi), (e = Xc()), La(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            u = -1,
            c = 0,
            m = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var k;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (k = f.firstChild) !== null;

            )
              (v = f), (f = k);
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++c === i && (s = a),
                v === o && ++m === r && (u = a),
                (k = f.nextSibling) !== null)
              )
                break;
              (f = v), (v = f.parentNode);
            }
            f = k;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Oo = { focusedElem: e, selectionRange: n }, gi = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var g = S.memoizedProps,
                    b = S.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ve(t.type, g),
                      b
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (S = su), (su = !1), S;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && $o(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[vr], delete t[To], delete t[Gh], delete t[Xh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
function Qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), (e = e.sibling);
}
var fe = null,
  Qe = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) Zd(e, t, n), (n = n.sibling);
}
function Zd(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Xi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || hn(n, t);
    case 6:
      var r = fe,
        i = Qe;
      (fe = null),
        mt(e, t, n),
        (fe = r),
        (Qe = i),
        fe !== null &&
          (Qe
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Qe
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            fr(e))
          : Il(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = Qe),
        (fe = n.stateNode.containerInfo),
        (Qe = !0),
        mt(e, t, n),
        (fe = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && $o(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), mt(e, t, n), (ve = r))
        : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function cu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new h1()),
      t.forEach(function (r) {
        var i = C1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (Qe = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(N(160));
        Zd(o, a, i), (fe = null), (Qe = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        ne(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gd(t, e), (t = t.sibling);
}
function Gd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Ge(e), r & 4)) {
        try {
          ir(3, e, e.return), ol(3, e);
        } catch (g) {
          ne(e, e.return, g);
        }
        try {
          ir(5, e, e.return);
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      break;
    case 1:
      Be(t, e), Ge(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (
        (Be(t, e),
        Ge(e),
        r & 512 && n !== null && hn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          sr(i, "");
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && wc(i, o),
              yo(s, a);
            var c = yo(s, o);
            for (a = 0; a < u.length; a += 2) {
              var m = u[a],
                f = u[a + 1];
              m === "style"
                ? Cc(i, f)
                : m === "dangerouslySetInnerHTML"
                ? bc(i, f)
                : m === "children"
                ? sr(i, f)
                : ga(i, m, f, c);
            }
            switch (s) {
              case "input":
                co(i, o);
                break;
              case "textarea":
                Sc(i, o);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? yn(i, !!o.multiple, k, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yn(i, !!o.multiple, o.defaultValue, !0)
                      : yn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[vr] = o;
          } catch (g) {
            ne(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fr(t.containerInfo);
        } catch (g) {
          ne(e, e.return, g);
        }
      break;
    case 4:
      Be(t, e), Ge(e);
      break;
    case 13:
      Be(t, e),
        Ge(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ga = ie())),
        r & 4 && cu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (c = ve) || m), Be(t, e), (ve = c)) : Be(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (H = e, m = e.child; m !== null; ) {
            for (f = H = m; H !== null; ) {
              switch (((v = H), (k = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, v, v.return);
                  break;
                case 1:
                  hn(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (g) {
                      ne(r, n, g);
                    }
                  }
                  break;
                case 5:
                  hn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    fu(f);
                    continue;
                  }
              }
              k !== null ? ((k.return = v), (H = k)) : fu(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = _c("display", a)));
              } catch (g) {
                ne(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                ne(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            m === f && (m = null), (f = f.return);
          }
          m === f && (m = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Be(t, e), Ge(e), r & 4 && cu(e);
      break;
    case 21:
      break;
    default:
      Be(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (sr(i, ""), (r.flags &= -33));
          var o = uu(e);
          Qo(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = uu(e);
          Vo(e, s, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function y1(e, t, n) {
  (H = e), Xd(e);
}
function Xd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var i = H,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Zr;
      if (!a) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || ve;
        s = Zr;
        var c = ve;
        if (((Zr = a), (ve = u) && !c))
          for (H = i; H !== null; )
            (a = H),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? pu(i)
                : u !== null
                ? ((u.return = a), (H = u))
                : pu(i);
        for (; o !== null; ) (H = o), Xd(o), (o = o.sibling);
        (H = i), (Zr = s), (ve = c);
      }
      du(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (H = o)) : du(e);
  }
}
function du(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ys(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ys(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
                    f !== null && fr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ve || (t.flags & 512 && Bo(t));
      } catch (v) {
        ne(t, t.return, v);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function fu(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function pu(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, i, u);
            }
          }
          var o = t.return;
          try {
            Bo(t);
          } catch (u) {
            ne(t, o, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Bo(t);
          } catch (u) {
            ne(t, a, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      H = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (H = s);
      break;
    }
    H = t.return;
  }
}
var v1 = Math.ceil,
  Ri = ht.ReactCurrentDispatcher,
  Ya = ht.ReactCurrentOwner,
  Fe = ht.ReactCurrentBatchConfig,
  B = 0,
  de = null,
  oe = null,
  pe = 0,
  Le = 0,
  mn = It(0),
  ue = 0,
  _r = null,
  Yt = 0,
  al = 0,
  Za = 0,
  lr = null,
  xe = null,
  Ga = 0,
  Tn = 1 / 0,
  lt = null,
  Hi = !1,
  qo = null,
  Pt = null,
  Gr = !1,
  bt = null,
  Mi = 0,
  or = 0,
  Ko = null,
  ui = -1,
  ci = 0;
function ke() {
  return B & 6 ? ie() : ui !== -1 ? ui : (ui = ie());
}
function Tt(e) {
  return e.mode & 1
    ? B & 2 && pe !== 0
      ? pe & -pe
      : e1.transition !== null
      ? (ci === 0 && (ci = Ic()), ci)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $c(e.type))),
        e)
    : 1;
}
function Ye(e, t, n, r) {
  if (50 < or) throw ((or = 0), (Ko = null), Error(N(185)));
  Er(e, n, r),
    (!(B & 2) || e !== de) &&
      (e === de && (!(B & 2) && (al |= n), ue === 4 && St(e, pe)),
      Pe(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Tn = ie() + 500), rl && jt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  eh(e, t);
  var r = vi(e, e === de ? pe : 0);
  if (r === 0)
    n !== null && bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bs(n), t === 1))
      e.tag === 0 ? Jh(hu.bind(null, e)) : sd(hu.bind(null, e)),
        Yh(function () {
          !(B & 6) && jt();
        }),
        (n = null);
    else {
      switch (jc(r)) {
        case 1:
          n = _a;
          break;
        case 4:
          n = Mc;
          break;
        case 16:
          n = yi;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = yi;
      }
      n = af(n, Jd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jd(e, t) {
  if (((ui = -1), (ci = 0), B & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = vi(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var o = tf();
    (de !== e || pe !== t) && ((lt = null), (Tn = ie() + 500), Bt(e, t));
    do
      try {
        S1();
        break;
      } catch (s) {
        ef(e, s);
      }
    while (1);
    Ia(),
      (Ri.current = o),
      (B = i),
      oe !== null ? (t = 0) : ((de = null), (pe = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ko(e)), i !== 0 && ((r = i), (t = Yo(e, i)))), t === 1)
    )
      throw ((n = _r), Bt(e, 0), St(e, r), Pe(e, ie()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !g1(i) &&
          ((t = zi(e, r)),
          t === 2 && ((o = ko(e)), o !== 0 && ((r = o), (t = Yo(e, o)))),
          t === 1))
      )
        throw ((n = _r), Bt(e, 0), St(e, r), Pe(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          At(e, xe, lt);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = Ga + 500 - ie()), 10 < t))
          ) {
            if (vi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Po(At.bind(null, e, xe, lt), t);
            break;
          }
          At(e, xe, lt);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Ke(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * v1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Po(At.bind(null, e, xe, lt), r);
            break;
          }
          At(e, xe, lt);
          break;
        case 5:
          At(e, xe, lt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Pe(e, ie()), e.callbackNode === n ? Jd.bind(null, e) : null;
}
function Yo(e, t) {
  var n = lr;
  return (
    e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256),
    (e = zi(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Zo(t)),
    e
  );
}
function Zo(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function g1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~Za,
      t &= ~al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hu(e) {
  if (B & 6) throw Error(N(327));
  kn();
  var t = vi(e, 0);
  if (!(t & 1)) return Pe(e, ie()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ko(e);
    r !== 0 && ((t = r), (n = Yo(e, r)));
  }
  if (n === 1) throw ((n = _r), Bt(e, 0), St(e, t), Pe(e, ie()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    At(e, xe, lt),
    Pe(e, ie()),
    null
  );
}
function Xa(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Tn = ie() + 500), rl && jt());
  }
}
function Zt(e) {
  bt !== null && bt.tag === 0 && !(B & 6) && kn();
  var t = B;
  B |= 1;
  var n = Fe.transition,
    r = V;
  try {
    if (((Fe.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (Fe.transition = n), (B = t), !(B & 6) && jt();
  }
}
function Ja() {
  (Le = mn.current), Y(mn);
}
function Bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kh(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((Ha(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && bi();
          break;
        case 3:
          En(), Y(Oe), Y(ge), Ua();
          break;
        case 5:
          Fa(r);
          break;
        case 4:
          En();
          break;
        case 13:
          Y(J);
          break;
        case 19:
          Y(J);
          break;
        case 10:
          ja(r.type._context);
          break;
        case 22:
        case 23:
          Ja();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (oe = e = Lt(e.current, null)),
    (pe = Le = t),
    (ue = 0),
    (_r = null),
    (Za = al = Yt = 0),
    (xe = lr = null),
    Ut !== null)
  ) {
    for (t = 0; t < Ut.length; t++)
      if (((n = Ut[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Ut = null;
  }
  return e;
}
function ef(e, t) {
  do {
    var n = oe;
    try {
      if ((Ia(), (oi.current = Li), Ti)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ti = !1;
      }
      if (
        ((Kt = 0),
        (ce = se = ee = null),
        (rr = !1),
        (Sr = 0),
        (Ya.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (_r = t), (oe = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          u = t;
        if (
          ((t = pe),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = s,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var k = tu(a);
          if (k !== null) {
            (k.flags &= -257),
              nu(k, a, s, o, t),
              k.mode & 1 && eu(o, c, t),
              (t = k),
              (u = c);
            var S = t.updateQueue;
            if (S === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              eu(o, c, t), es();
              break e;
            }
            u = Error(N(426));
          }
        } else if (G && s.mode & 1) {
          var b = tu(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              nu(b, a, s, o, t),
              Ma(Pn(u, s));
            break e;
          }
        }
        (o = u = Pn(u, s)),
          ue !== 4 && (ue = 2),
          lr === null ? (lr = [o]) : lr.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = jd(o, u, t);
              Ks(o, p);
              break e;
            case 1:
              s = u;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Pt === null || !Pt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Dd(o, s, t);
                Ks(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rf(n);
    } catch (_) {
      (t = _), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function tf() {
  var e = Ri.current;
  return (Ri.current = Li), e === null ? Li : e;
}
function es() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(Yt & 268435455) && !(al & 268435455)) || St(de, pe);
}
function zi(e, t) {
  var n = B;
  B |= 2;
  var r = tf();
  (de !== e || pe !== t) && ((lt = null), Bt(e, t));
  do
    try {
      w1();
      break;
    } catch (i) {
      ef(e, i);
    }
  while (1);
  if ((Ia(), (B = n), (Ri.current = r), oe !== null)) throw Error(N(261));
  return (de = null), (pe = 0), ue;
}
function w1() {
  for (; oe !== null; ) nf(oe);
}
function S1() {
  for (; oe !== null && !Vp(); ) nf(oe);
}
function nf(e) {
  var t = of(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? rf(e) : (oe = t),
    (Ya.current = null);
}
function rf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p1(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (oe = null);
        return;
      }
    } else if (((n = f1(n, t, Le)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function At(e, t, n) {
  var r = V,
    i = Fe.transition;
  try {
    (Fe.transition = null), (V = 1), k1(e, t, n, r);
  } finally {
    (Fe.transition = i), (V = r);
  }
  return null;
}
function k1(e, t, n, r) {
  do kn();
  while (bt !== null);
  if (B & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (th(e, o),
    e === de && ((oe = de = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gr ||
      ((Gr = !0),
      af(yi, function () {
        return kn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var a = V;
    V = 1;
    var s = B;
    (B |= 4),
      (Ya.current = null),
      m1(e, n),
      Gd(n, e),
      Fh(Oo),
      (gi = !!No),
      (Oo = No = null),
      (e.current = n),
      y1(n),
      Qp(),
      (B = s),
      (V = a),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (Gr && ((Gr = !1), (bt = e), (Mi = i)),
    (o = e.pendingLanes),
    o === 0 && (Pt = null),
    Yp(n.stateNode),
    Pe(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Hi) throw ((Hi = !1), (e = qo), (qo = null), e);
  return (
    Mi & 1 && e.tag !== 0 && kn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ko ? or++ : ((or = 0), (Ko = e))) : (or = 0),
    jt(),
    null
  );
}
function kn() {
  if (bt !== null) {
    var e = jc(Mi),
      t = Fe.transition,
      n = V;
    try {
      if (((Fe.transition = null), (V = 16 > e ? 16 : e), bt === null))
        var r = !1;
      else {
        if (((e = bt), (bt = null), (Mi = 0), B & 6)) throw Error(N(331));
        var i = B;
        for (B |= 4, H = e.current; H !== null; ) {
          var o = H,
            a = o.child;
          if (H.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (H = c; H !== null; ) {
                  var m = H;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, m, o);
                  }
                  var f = m.child;
                  if (f !== null) (f.return = m), (H = f);
                  else
                    for (; H !== null; ) {
                      m = H;
                      var v = m.sibling,
                        k = m.return;
                      if ((Kd(m), m === c)) {
                        H = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = k), (H = v);
                        break;
                      }
                      H = k;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              H = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (H = a);
          else
            e: for (; H !== null; ) {
              if (((o = H), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (H = p);
                break e;
              }
              H = o.return;
            }
        }
        var d = e.current;
        for (H = d; H !== null; ) {
          a = H;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (H = h);
          else
            e: for (a = d; H !== null; ) {
              if (((s = H), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ol(9, s);
                  }
                } catch (_) {
                  ne(s, s.return, _);
                }
              if (s === a) {
                H = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (H = w);
                break e;
              }
              H = s.return;
            }
        }
        if (
          ((B = i), jt(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Xi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (Fe.transition = t);
    }
  }
  return !1;
}
function mu(e, t, n) {
  (t = Pn(n, t)),
    (t = jd(e, t, 1)),
    (e = Et(e, t, 1)),
    (t = ke()),
    e !== null && (Er(e, 1, t), Pe(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) mu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pt === null || !Pt.has(r)))
        ) {
          (e = Pn(n, e)),
            (e = Dd(t, e, 1)),
            (t = Et(t, e, 1)),
            (e = ke()),
            t !== null && (Er(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function b1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (pe & n) === n &&
      (ue === 4 || (ue === 3 && (pe & 130023424) === pe && 500 > ie() - Ga)
        ? Bt(e, 0)
        : (Za |= n)),
    Pe(e, t);
}
function lf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
      : (t = 1));
  var n = ke();
  (e = ft(e, t)), e !== null && (Er(e, t, n), Pe(e, n));
}
function _1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lf(e, n);
}
function C1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), lf(e, n);
}
var of;
of = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), d1(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), G && t.flags & 1048576 && ud(t, xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      si(e, t), (e = t.pendingProps);
      var i = xn(t, ge.current);
      Sn(t, n), (i = Ba(null, t, r, e, i, n));
      var o = Va();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), _i(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Wa(t),
            (i.updater = ll),
            (t.stateNode = i),
            (i._reactInternals = t),
            Io(t, r, e, n),
            (t = Wo(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && Ra(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (si(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = N1(r)),
          (e = Ve(r, e)),
          i)
        ) {
          case 0:
            t = Do(null, t, r, e, n);
            break e;
          case 1:
            t = lu(null, t, r, e, n);
            break e;
          case 11:
            t = ru(null, t, r, e, n);
            break e;
          case 14:
            t = iu(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        Do(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        lu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          md(e, t),
          Ei(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Pn(Error(N(423)), t)), (t = ou(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Pn(Error(N(424)), t)), (t = ou(e, t, r, n, i));
            break e;
          } else
            for (
              Re = Ot(t.stateNode.containerInfo.firstChild),
                He = t,
                G = !0,
                qe = null,
                n = pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === i)) {
            t = pt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yd(t),
        e === null && Ho(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Eo(r, i) ? (a = null) : o !== null && Eo(r, o) && (t.flags |= 32),
        Fd(e, t),
        Se(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ho(t), null;
    case 13:
      return $d(e, t, n);
    case 4:
      return (
        Aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = On(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        ru(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          q(Ni, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Ze(o.value, a)) {
            if (o.children === i.children && !Oe.current) {
              t = pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = ut(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Mo(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(N(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Mo(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Sn(t, n),
        (i = Ue(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ve(r, t.pendingProps)),
        (i = Ve(r.type, i)),
        iu(e, t, r, i, n)
      );
    case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ve(r, i)),
        si(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), _i(t)) : (e = !1),
        Sn(t, n),
        Id(t, r, i),
        Io(t, r, i, n),
        Wo(null, t, r, !0, e, n)
      );
    case 19:
      return Bd(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function af(e, t) {
  return Hc(e, t);
}
function x1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new x1(e, t, n, r);
}
function ts(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function N1(e) {
  if (typeof e == "function") return ts(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sa)) return 11;
    if (e === ka) return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function di(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) ts(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ln:
        return Vt(n.children, i, o, t);
      case wa:
        (a = 8), (i |= 8);
        break;
      case lo:
        return (
          (e = Ae(12, n, t, i | 2)), (e.elementType = lo), (e.lanes = o), e
        );
      case oo:
        return (e = Ae(13, n, t, i)), (e.elementType = oo), (e.lanes = o), e;
      case ao:
        return (e = Ae(19, n, t, i)), (e.elementType = ao), (e.lanes = o), e;
      case yc:
        return sl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hc:
              a = 10;
              break e;
            case mc:
              a = 9;
              break e;
            case Sa:
              a = 11;
              break e;
            case ka:
              a = 14;
              break e;
            case yt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function sl(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = yc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function Vl(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xl(0)),
    (this.expirationTimes = xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ns(e, t, n, r, i, o, a, s, u) {
  return (
    (e = new O1(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ae(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Wa(o),
    e
  );
}
function E1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sf(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return ad(e, n, t);
  }
  return t;
}
function uf(e, t, n, r, i, o, a, s, u) {
  return (
    (e = ns(n, r, !0, e, i, o, a, s, u)),
    (e.context = sf(null)),
    (n = e.current),
    (r = ke()),
    (i = Tt(n)),
    (o = ut(r, i)),
    (o.callback = t ?? null),
    Et(n, o, i),
    (e.current.lanes = i),
    Er(e, i, r),
    Pe(e, r),
    e
  );
}
function ul(e, t, n, r) {
  var i = t.current,
    o = ke(),
    a = Tt(i);
  return (
    (n = sf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Et(i, t, a)),
    e !== null && (Ye(e, i, a, o), li(e, i, a)),
    a
  );
}
function Ii(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rs(e, t) {
  yu(e, t), (e = e.alternate) && yu(e, t);
}
function P1() {
  return null;
}
var cf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function is(e) {
  this._internalRoot = e;
}
cl.prototype.render = is.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  ul(e, t, null, null);
};
cl.prototype.unmount = is.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      ul(null, e, null, null);
    }),
      (t[dt] = null);
  }
};
function cl(e) {
  this._internalRoot = e;
}
cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Uc(e);
  }
};
function ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function vu() {}
function T1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Ii(a);
        o.call(c);
      };
    }
    var a = uf(t, r, e, 0, null, !1, !1, "", vu);
    return (
      (e._reactRootContainer = a),
      (e[dt] = a.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Ii(u);
      s.call(c);
    };
  }
  var u = ns(e, 0, !1, null, null, !1, !1, "", vu);
  return (
    (e._reactRootContainer = u),
    (e[dt] = u.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      ul(t, u, n, r);
    }),
    u
  );
}
function fl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Ii(a);
        s.call(u);
      };
    }
    ul(t, a, e, i);
  } else a = T1(n, t, e, i, r);
  return Ii(a);
}
Dc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (Ca(t, n | 1), Pe(t, ie()), !(B & 6) && ((Tn = ie() + 500), jt()));
      }
      break;
    case 13:
      Zt(function () {
        var r = ft(e, 1);
        if (r !== null) {
          var i = ke();
          Ye(r, e, 1, i);
        }
      }),
        rs(e, 1);
  }
};
xa = function (e) {
  if (e.tag === 13) {
    var t = ft(e, 134217728);
    if (t !== null) {
      var n = ke();
      Ye(t, e, 134217728, n);
    }
    rs(e, 134217728);
  }
};
Wc = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ft(e, t);
    if (n !== null) {
      var r = ke();
      Ye(n, e, t, r);
    }
    rs(e, t);
  }
};
Ac = function () {
  return V;
};
Fc = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
go = function (e, t, n) {
  switch (t) {
    case "input":
      if ((co(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = nl(r);
            if (!i) throw Error(N(90));
            gc(r), co(r, i);
          }
        }
      }
      break;
    case "textarea":
      Sc(e, n);
      break;
    case "select":
      (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
  }
};
Oc = Xa;
Ec = Zt;
var L1 = { usingClientEntryPoint: !1, Events: [Tr, un, nl, xc, Nc, Xa] },
  qn = {
    findFiberByHostInstance: Ft,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  R1 = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || P1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (Xi = Xr.inject(R1)), (et = Xr);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L1;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(N(200));
  return E1(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!ls(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = cf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ns(e, 1, !1, null, null, n, !1, r, i)),
    (e[dt] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new is(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Lc(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Zt(e);
};
ze.hydrate = function (e, t, n) {
  if (!dl(t)) throw Error(N(200));
  return fl(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!ls(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = cf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = uf(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[dt] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new cl(t);
};
ze.render = function (e, t, n) {
  if (!dl(t)) throw Error(N(200));
  return fl(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!dl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Zt(function () {
        fl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dt] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Xa;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!dl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return fl(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function df() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df);
    } catch (e) {
      console.error(e);
    }
}
df(), (cc.exports = ze);
var H1 = cc.exports,
  gu = H1;
(ro.createRoot = gu.createRoot), (ro.hydrateRoot = gu.hydrateRoot);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cr.apply(this, arguments)
  );
}
var _t;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_t || (_t = {}));
const wu = "popstate";
function M1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location;
    return Go(
      "",
      { pathname: o, search: a, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ji(i);
  }
  return I1(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ff(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function z1() {
  return Math.random().toString(36).substr(2, 8);
}
function Su(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Go(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Cr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Wn(t) : t,
      { state: n, key: (t && t.key) || r || z1() }
    )
  );
}
function ji(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function I1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    s = _t.Pop,
    u = null,
    c = m();
  c == null && ((c = 0), a.replaceState(Cr({}, a.state, { idx: c }), ""));
  function m() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    s = _t.Pop;
    let b = m(),
      p = b == null ? null : b - c;
    (c = b), u && u({ action: s, location: g.location, delta: p });
  }
  function v(b, p) {
    s = _t.Push;
    let d = Go(g.location, b, p);
    n && n(d, b), (c = m() + 1);
    let h = Su(d, c),
      w = g.createHref(d);
    try {
      a.pushState(h, "", w);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(w);
    }
    o && u && u({ action: s, location: g.location, delta: 1 });
  }
  function k(b, p) {
    s = _t.Replace;
    let d = Go(g.location, b, p);
    n && n(d, b), (c = m());
    let h = Su(d, c),
      w = g.createHref(d);
    a.replaceState(h, "", w),
      o && u && u({ action: s, location: g.location, delta: 0 });
  }
  function S(b) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof b == "string" ? b : ji(b);
    return (
      (d = d.replace(/ $/, "%20")),
      ae(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, p)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(i, a);
    },
    listen(b) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(wu, f),
        (u = b),
        () => {
          i.removeEventListener(wu, f), (u = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: S,
    encodeLocation(b) {
      let p = S(b);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: k,
    go(b) {
      return a.go(b);
    },
  };
  return g;
}
var ku;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ku || (ku = {}));
function j1(e, t, n) {
  return n === void 0 && (n = "/"), D1(e, t, n, !1);
}
function D1(e, t, n, r) {
  let i = typeof t == "string" ? Wn(t) : t,
    o = os(i.pathname || "/", n);
  if (o == null) return null;
  let a = pf(e);
  W1(a);
  let s = null;
  for (let u = 0; s == null && u < a.length; ++u) {
    let c = Z1(o);
    s = K1(a[u], c, r);
  }
  return s;
}
function pf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (ae(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Rt([r, u.relativePath]),
      m = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (ae(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      pf(o.children, t, m, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: Q1(c, o.index), routesMeta: m });
  };
  return (
    e.forEach((o, a) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, a);
      else for (let u of hf(o.path)) i(o, a, u);
    }),
    t
  );
}
function hf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = hf(r.join("/")),
    s = [];
  return (
    s.push(...a.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && s.push(...a),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function W1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : q1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const A1 = /^:[\w-]+$/,
  F1 = 3,
  U1 = 2,
  $1 = 1,
  B1 = 10,
  V1 = -2,
  bu = (e) => e === "*";
function Q1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bu) && (r += V1),
    t && (r += U1),
    n
      .filter((i) => !bu(i))
      .reduce((i, o) => i + (A1.test(o) ? F1 : o === "" ? $1 : B1), r)
  );
}
function q1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function K1(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    a = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      c = s === r.length - 1,
      m = o === "/" ? t : t.slice(o.length) || "/",
      f = _u(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        m
      ),
      v = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = _u(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          m
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      a.push({
        params: i,
        pathname: Rt([o, f.pathname]),
        pathnameBase: em(Rt([o, f.pathnameBase])),
        route: v,
      }),
      f.pathnameBase !== "/" && (o = Rt([o, f.pathnameBase]));
  }
  return a;
}
function _u(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Y1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((c, m, f) => {
      let { paramName: v, isOptional: k } = m;
      if (v === "*") {
        let g = s[f] || "";
        a = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const S = s[f];
      return (
        k && !S ? (c[v] = void 0) : (c[v] = (S || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function Y1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ff(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Z1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ff(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function os(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function G1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Wn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : X1(n, t)) : t,
    search: tm(r),
    hash: nm(i),
  };
}
function X1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ql(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function J1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function mf(e, t) {
  let n = J1(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function yf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Wn(e))
    : ((i = Cr({}, e)),
      ae(
        !i.pathname || !i.pathname.includes("?"),
        Ql("?", "pathname", "search", i)
      ),
      ae(
        !i.pathname || !i.pathname.includes("#"),
        Ql("#", "pathname", "hash", i)
      ),
      ae(!i.search || !i.search.includes("#"), Ql("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    s;
  if (a == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith("..")) {
      let v = a.split("/");
      for (; v[0] === ".."; ) v.shift(), (f -= 1);
      i.pathname = v.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = G1(i, s),
    c = a && a !== "/" && a.endsWith("/"),
    m = (o || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || m) && (u.pathname += "/"), u;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  em = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  nm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function rm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const vf = ["post", "put", "patch", "delete"];
new Set(vf);
const im = ["get", ...vf];
new Set(im);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xr.apply(this, arguments)
  );
}
const as = L.createContext(null),
  lm = L.createContext(null),
  en = L.createContext(null),
  pl = L.createContext(null),
  tn = L.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gf = L.createContext(null);
function om(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Rr() || ae(!1);
  let { basename: r, navigator: i } = L.useContext(en),
    { hash: o, pathname: a, search: s } = Sf(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : Rt([r, a])),
    i.createHref({ pathname: u, search: s, hash: o })
  );
}
function Rr() {
  return L.useContext(pl) != null;
}
function hl() {
  return Rr() || ae(!1), L.useContext(pl).location;
}
function wf(e) {
  L.useContext(en).static || L.useLayoutEffect(e);
}
function am() {
  let { isDataRoute: e } = L.useContext(tn);
  return e ? Sm() : sm();
}
function sm() {
  Rr() || ae(!1);
  let e = L.useContext(as),
    { basename: t, future: n, navigator: r } = L.useContext(en),
    { matches: i } = L.useContext(tn),
    { pathname: o } = hl(),
    a = JSON.stringify(mf(i, n.v7_relativeSplatPath)),
    s = L.useRef(!1);
  return (
    wf(() => {
      s.current = !0;
    }),
    L.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = yf(c, JSON.parse(a), o, m.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Rt([t, f.pathname])),
          (m.replace ? r.replace : r.push)(f, m.state, m);
      },
      [t, r, a, o, e]
    )
  );
}
function Sf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = L.useContext(en),
    { matches: i } = L.useContext(tn),
    { pathname: o } = hl(),
    a = JSON.stringify(mf(i, r.v7_relativeSplatPath));
  return L.useMemo(() => yf(e, JSON.parse(a), o, n === "path"), [e, a, o, n]);
}
function um(e, t) {
  return cm(e, t);
}
function cm(e, t, n, r) {
  Rr() || ae(!1);
  let { navigator: i } = L.useContext(en),
    { matches: o } = L.useContext(tn),
    a = o[o.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let c = hl(),
    m;
  if (t) {
    var f;
    let b = typeof t == "string" ? Wn(t) : t;
    u === "/" || ((f = b.pathname) != null && f.startsWith(u)) || ae(!1),
      (m = b);
  } else m = c;
  let v = m.pathname || "/",
    k = v;
  if (u !== "/") {
    let b = u.replace(/^\//, "").split("/");
    k = "/" + v.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let S = j1(e, { pathname: k }),
    g = mm(
      S &&
        S.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, s, b.params),
            pathname: Rt([
              u,
              i.encodeLocation
                ? i.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? u
                : Rt([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? L.createElement(
        pl.Provider,
        {
          value: {
            location: xr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m
            ),
            navigationType: _t.Pop,
          },
        },
        g
      )
    : g;
}
function dm() {
  let e = wm(),
    t = rm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("h2", null, "Unexpected Application Error!"),
    L.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? L.createElement("pre", { style: i }, n) : null,
    o
  );
}
const fm = L.createElement(dm, null);
class pm extends L.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? L.createElement(
          tn.Provider,
          { value: this.props.routeContext },
          L.createElement(gf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function hm(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = L.useContext(as);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    L.createElement(tn.Provider, { value: t }, r)
  );
}
function mm(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let m = a.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    );
    m >= 0 || ae(!1), (a = a.slice(0, Math.min(a.length, m + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < a.length; m++) {
      let f = a[m];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = m),
        f.route.id)
      ) {
        let { loaderData: v, errors: k } = n,
          S =
            f.route.loader &&
            v[f.route.id] === void 0 &&
            (!k || k[f.route.id] === void 0);
        if (f.route.lazy || S) {
          (u = !0), c >= 0 ? (a = a.slice(0, c + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((m, f, v) => {
    let k,
      S = !1,
      g = null,
      b = null;
    n &&
      ((k = s && f.route.id ? s[f.route.id] : void 0),
      (g = f.route.errorElement || fm),
      u &&
        (c < 0 && v === 0
          ? (km("route-fallback", !1), (S = !0), (b = null))
          : c === v &&
            ((S = !0), (b = f.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, v + 1)),
      d = () => {
        let h;
        return (
          k
            ? (h = g)
            : S
            ? (h = b)
            : f.route.Component
            ? (h = L.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = m),
          L.createElement(hm, {
            match: f,
            routeContext: { outlet: m, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0)
      ? L.createElement(pm, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: k,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var kf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(kf || {}),
  Di = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Di || {});
function ym(e) {
  let t = L.useContext(as);
  return t || ae(!1), t;
}
function vm(e) {
  let t = L.useContext(lm);
  return t || ae(!1), t;
}
function gm(e) {
  let t = L.useContext(tn);
  return t || ae(!1), t;
}
function bf(e) {
  let t = gm(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function wm() {
  var e;
  let t = L.useContext(gf),
    n = vm(Di.UseRouteError),
    r = bf(Di.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Sm() {
  let { router: e } = ym(kf.UseNavigateStable),
    t = bf(Di.UseNavigateStable),
    n = L.useRef(!1);
  return (
    wf(() => {
      n.current = !0;
    }),
    L.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, xr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Cu = {};
function km(e, t, n) {
  !t && !Cu[e] && (Cu[e] = !0);
}
function Xo(e) {
  ae(!1);
}
function bm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = _t.Pop,
    navigator: o,
    static: a = !1,
    future: s,
  } = e;
  Rr() && ae(!1);
  let u = t.replace(/^\/*/, "/"),
    c = L.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: a,
        future: xr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, a]
    );
  typeof r == "string" && (r = Wn(r));
  let {
      pathname: m = "/",
      search: f = "",
      hash: v = "",
      state: k = null,
      key: S = "default",
    } = r,
    g = L.useMemo(() => {
      let b = os(m, u);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: v, state: k, key: S },
            navigationType: i,
          };
    }, [u, m, f, v, k, S, i]);
  return g == null
    ? null
    : L.createElement(
        en.Provider,
        { value: c },
        L.createElement(pl.Provider, { children: n, value: g })
      );
}
function _m(e) {
  let { children: t, location: n } = e;
  return um(Jo(t), n);
}
new Promise(() => {});
function Jo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    L.Children.forEach(e, (r, i) => {
      if (!L.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === L.Fragment) {
        n.push.apply(n, Jo(r.props.children, o));
        return;
      }
      r.type !== Xo && ae(!1), !r.props.index || !r.props.children || ae(!1);
      let a = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Jo(r.props.children, o)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
function Cm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function xm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Nm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !xm(e);
}
const Om = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Em = "6";
try {
  window.__reactRouterVersion = Em;
} catch {}
const Pm = "startTransition",
  xu = bp[Pm];
function Tm(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = L.useRef();
  o.current == null && (o.current = M1({ window: i, v5Compat: !0 }));
  let a = o.current,
    [s, u] = L.useState({ action: a.action, location: a.location }),
    { v7_startTransition: c } = r || {},
    m = L.useCallback(
      (f) => {
        c && xu ? xu(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    L.useLayoutEffect(() => a.listen(m), [a, m]),
    L.createElement(bm, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  );
}
const Lm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hm = L.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: u,
        to: c,
        preventScrollReset: m,
        unstable_viewTransition: f,
      } = t,
      v = Cm(t, Om),
      { basename: k } = L.useContext(en),
      S,
      g = !1;
    if (typeof c == "string" && Rm.test(c) && ((S = c), Lm))
      try {
        let h = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
          _ = os(w.pathname, k);
        w.origin === h.origin && _ != null
          ? (c = _ + w.search + w.hash)
          : (g = !0);
      } catch {}
    let b = om(c, { relative: i }),
      p = Mm(c, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: m,
        relative: i,
        unstable_viewTransition: f,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return L.createElement(
      "a",
      ea({}, v, { href: S || b, onClick: g || o ? r : d, ref: n, target: u })
    );
  });
var Nu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Nu || (Nu = {}));
var Ou;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ou || (Ou = {}));
function Mm(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = am(),
    c = hl(),
    m = Sf(e, { relative: a });
  return L.useCallback(
    (f) => {
      if (Nm(f, n)) {
        f.preventDefault();
        let v = r !== void 0 ? r : ji(c) === ji(m);
        u(e, {
          replace: v,
          state: i,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [c, u, m, r, i, n, e, o, a, s]
  );
}
const zm = "./assets/personal-3fb1f909.png",
  Im = "./assets/community-fb2bcaab.jpg";
function jm() {
  return l("div", {
    className: "gridcontainer2",
    children: y("div", {
      className: "grid2",
      children: [
        y("div", {
          className: "stay-unlock",
          children: [
            y("div", {
              className: "text",
              children: [
                l("span", {
                  children: "Stay on top of your business operations",
                }),
                l("p", {
                  children:
                    "Unlock the your business potential with our all-in-one platform designed to streamline your operations, enhance customer interactions, and boost your productivity.",
                }),
              ],
            }),
            l("img", { className: "personal", src: zm }),
          ],
        }),
        l("div", {
          children: l("img", { className: "communityimage", src: Im }),
        }),
      ],
    }),
  });
}
const Dm = "./assets/imageboy-1d99206d.jpg",
  Wm = "./assets/imagegirl-a6f975f0.jpg";
function Am() {
  return l(Gi, {
    children: y("svg", {
      className: "calendar",
      width: "49",
      height: "49",
      viewBox: "0 0 49 49",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        l("rect", {
          x: "0.753906",
          y: "0.95459",
          width: "48",
          height: "48",
          rx: "8",
          fill: "#FBB13C",
        }),
        y("g", {
          clipPath: "url(#clip0_7326_2377)",
          children: [
            l("path", {
              d: "M18.7541 12.9546C18.2807 12.9546 17.897 13.3383 17.897 13.8117V15.526H19.6112V13.8117C19.6112 13.3383 19.2275 12.9546 18.7541 12.9546Z",
              fill: "white",
            }),
            l("path", {
              d: "M30.7541 12.9546C30.2807 12.9546 29.897 13.3383 29.897 13.8117V15.526H31.6112V13.8117C31.6113 13.3383 31.2275 12.9546 30.7541 12.9546Z",
              fill: "white",
            }),
            l("path", {
              d: "M34.1825 15.526H31.6111V18.9546C31.6111 19.428 31.2273 19.8117 30.7539 19.8117C30.2805 19.8117 29.8967 19.428 29.8967 18.9546V15.526H19.611V18.9546C19.611 19.428 19.2273 19.8117 18.7539 19.8117C18.2805 19.8117 17.8967 19.428 17.8967 18.9546V15.526H15.3253C13.9052 15.526 12.7539 16.6773 12.7539 18.0974V34.3832C12.7539 35.8033 13.9052 36.9546 15.3253 36.9546H34.1825C35.6026 36.9546 36.7539 35.8033 36.7539 34.3832V18.0974C36.7539 16.6773 35.6026 15.526 34.1825 15.526ZM35.0396 34.3832C35.0396 34.8566 34.6558 35.2403 34.1824 35.2403H15.3253C14.8519 35.2403 14.4682 34.8566 14.4682 34.3832V23.2403H35.0396V34.3832Z",
              fill: "white",
            }),
            l("path", {
              d: "M19.611 24.9546H17.8967C17.4233 24.9546 17.0396 25.3383 17.0396 25.8118C17.0396 26.2852 17.4233 26.6689 17.8967 26.6689H19.611C20.0844 26.6689 20.4681 26.2852 20.4681 25.8118C20.4681 25.3383 20.0844 24.9546 19.611 24.9546Z",
              fill: "white",
            }),
            l("path", {
              d: "M25.611 24.9546H23.8967C23.4233 24.9546 23.0396 25.3383 23.0396 25.8118C23.0396 26.2852 23.4233 26.6689 23.8967 26.6689H25.611C26.0844 26.6689 26.4681 26.2852 26.4681 25.8118C26.4681 25.3383 26.0844 24.9546 25.611 24.9546Z",
              fill: "white",
            }),
            l("path", {
              d: "M31.611 24.9546H29.8967C29.4233 24.9546 29.0396 25.3383 29.0396 25.8118C29.0396 26.2852 29.4233 26.6689 29.8967 26.6689H31.611C32.0844 26.6689 32.4681 26.2852 32.4681 25.8118C32.4681 25.3383 32.0843 24.9546 31.611 24.9546Z",
              fill: "white",
            }),
            l("path", {
              d: "M19.611 28.3832H17.8967C17.4233 28.3832 17.0396 28.7669 17.0396 29.2403C17.0396 29.7137 17.4233 30.0975 17.8967 30.0975H19.611C20.0844 30.0975 20.4681 29.7137 20.4681 29.2403C20.4681 28.7669 20.0844 28.3832 19.611 28.3832Z",
              fill: "white",
            }),
            l("path", {
              d: "M25.611 28.3832H23.8967C23.4233 28.3832 23.0396 28.7669 23.0396 29.2403C23.0396 29.7137 23.4233 30.0975 23.8967 30.0975H25.611C26.0844 30.0975 26.4681 29.7137 26.4681 29.2403C26.4681 28.7669 26.0844 28.3832 25.611 28.3832Z",
              fill: "white",
            }),
            l("path", {
              d: "M31.611 28.3832H29.8967C29.4233 28.3832 29.0396 28.7669 29.0396 29.2403C29.0396 29.7137 29.4233 30.0975 29.8967 30.0975H31.611C32.0844 30.0975 32.4681 29.7137 32.4681 29.2403C32.4681 28.7669 32.0843 28.3832 31.611 28.3832Z",
              fill: "white",
            }),
            l("path", {
              d: "M19.611 31.8118H17.8967C17.4233 31.8118 17.0396 32.1955 17.0396 32.6689C17.0396 33.1423 17.4233 33.526 17.8967 33.526H19.611C20.0844 33.526 20.4681 33.1423 20.4681 32.6689C20.4681 32.1955 20.0844 31.8118 19.611 31.8118Z",
              fill: "white",
            }),
            l("path", {
              d: "M25.611 31.8118H23.8967C23.4233 31.8118 23.0396 32.1955 23.0396 32.6689C23.0396 33.1423 23.4233 33.5261 23.8967 33.5261H25.611C26.0844 33.5261 26.4681 33.1423 26.4681 32.6689C26.4681 32.1955 26.0844 31.8118 25.611 31.8118Z",
              fill: "white",
            }),
            l("path", {
              d: "M31.611 31.8118H29.8967C29.4233 31.8118 29.0396 32.1955 29.0396 32.6689C29.0396 33.1423 29.4233 33.5261 29.8967 33.5261H31.611C32.0844 33.5261 32.4681 33.1423 32.4681 32.6689C32.4681 32.1955 32.0843 31.8118 31.611 31.8118Z",
              fill: "white",
            }),
          ],
        }),
        l("defs", {
          children: l("clipPath", {
            id: "clip0_7326_2377",
            children: l("rect", {
              width: "24",
              height: "24",
              fill: "white",
              transform: "translate(12.7539 12.9546)",
            }),
          }),
        }),
      ],
    }),
  });
}
function Fm() {
  return l(Gi, {
    children: y("svg", {
      className: "check",
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        l("circle", { cx: "12.7539", cy: "12.9546", r: "12", fill: "#44C566" }),
        l("path", {
          d: "M7.9541 13.7879L11.4183 17.7546L18.7541 9.35461",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
        }),
      ],
    }),
  });
}
function Um() {
  return y("div", {
    className: "firstcontainer",
    children: [
      y("div", {
        className: "buildbutton",
        children: [
          y("span", {
            className: "build",
            children: [
              "Build ",
              l("span", { className: "easily", children: "credibility" }),
              ", reach customers faster, and organize your practice",
              l("span", { className: "easily", children: " seamlessly" }),
            ],
          }),
          l("div", {
            children: l("a", {
              href: "https://play.google.com/store/apps/details?id=com.luround.uppist&pcampaignid=web_share",
              children: l("button", {
                className: "download",
                children: "Download Luround",
              }),
            }),
          }),
        ],
      }),
      y("div", {
        className: "image",
        children: [
          y("div", {
            children: [
              l("img", { className: "imgboy", src: Dm }),
              y("div", {
                className: "mark",
                children: [
                  l(Am, {}),
                  l("span", { children: "Mark your calendar!" }),
                ],
              }),
            ],
          }),
          y("div", {
            children: [
              l("img", { className: "imggirl", src: Wm }),
              y("div", {
                className: "service",
                children: [
                  l("span", { children: "Service booked" }),
                  l(Fm, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      y("footer", {
        className: "services",
        children: [
          y("div", {
            className: "provider",
            children: [
              l("span", { children: "100+" }),
              l("span", {
                className: "serviceproviders",
                children: "Service Providers",
              }),
            ],
          }),
          l("hr", {}),
          y("div", {
            className: "provider",
            children: [
              l("span", { children: "500+" }),
              l("span", {
                className: "serviceproviders",
                children: "Services Booked",
              }),
            ],
          }),
          l("hr", {}),
          y("div", {
            className: "provider",
            children: [
              l("span", { children: "24/7" }),
              l("span", {
                className: "serviceproviders",
                children: "Customer Support",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const $m = "./assets/LUROUND3-2882ae77.png";
function Bm() {
  return y(Gi, {
    children: [
      l("span", {
        style: {
          display: "block",
          margin: "0 auto 3.125rem",
          width: "11.125rem",
          height: "2.375rem",
          background: "url(data:image/svg+xml",
        },
      }),
      y("div", {
        "data-custom-class": "body",
        children: [
          l("div", {
            children: l("strong", {
              children: l("span", {
                style: {
                  fontSize: 20,
                  display: "flex",
                  justifyContent: "center",
                  color: "hsla(180, 100%, 32%, 1)",
                  backgroundColor: "hsla(180, 100%, 98%, 1)",
                  padding: 32,
                },
                children: y("span", {
                  "data-custom-class": "title",
                  children: [
                    l("bdt", { className: "block-component" }),
                    l("bdt", {
                      className: "question",
                      children: "Luround Privacy Policy",
                    }),
                    l("bdt", { className: "statement-end-if-in-editor" }),
                  ],
                }),
              }),
            }),
          }),
          l("div", { children: l("br", {}) }),
          l("div", {
            children: l("span", {
              children: l("strong", {
                children: l("span", {
                  style: {
                    fontSize: 24,
                    fontWeight: 600,
                    color: "hsla(180, 23%, 15%, 1)",
                    padding: 56,
                  },
                  children: y("span", {
                    "data-custom-class": "subtitle",
                    children: [
                      "Last updated",
                      l("bdt", {
                        className: "question",
                        children: " August 29, 2024",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
          l("div", { children: l("br", {}) }),
          l("div", { children: l("br", {}) }),
          l("div", { children: l("br", {}) }),
          y("div", {
            "data-custom-class": "body2",
            style: {
              color: "hsla(180, 23%, 15%, 1)",
              fontSize: 18,
              padding: "0 40px",
            },
            children: [
              y("div", {
                children: [
                  l("span", {
                    children: y("span", {
                      children: [
                        y("span", {
                          "data-custom-class": "body_text",
                          children: [
                            "This Privacy Notice for",
                            y("bdt", {
                              className: "question",
                              children: [
                                "Uppist Limited",
                                l("bdt", { className: "block-component" }),
                                "(doing business as ",
                                l("bdt", {
                                  className: "question",
                                  children: "Luround",
                                }),
                                ")",
                                l("bdt", {
                                  className: "statement-end-if-in-editor",
                                }),
                              ],
                            }),
                            "(",
                            l("bdt", { className: "block-component" }),
                            '"',
                            l("strong", { children: "we" }),
                            '," "',
                            l("strong", { children: "us" }),
                            '," or "',
                            l("strong", { children: "our" }),
                            '"',
                            l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                          ],
                        }),
                        y("span", {
                          "data-custom-class": "body_text",
                          children: [
                            "), describes how and why we might access, collect, store, use, and/or share (",
                            l("bdt", { className: "block-component" }),
                            '"',
                            l("strong", { children: "process" }),
                            '"',
                            l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                            ") your personal information when you use our services (",
                            l("bdt", { className: "block-component" }),
                            '"',
                            l("strong", { children: "Services" }),
                            '"',
                            l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                            "), including when you:",
                          ],
                        }),
                      ],
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "block-component",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          "Visit our website",
                          l("bdt", { className: "block-component" }),
                          "at",
                          l("span", {
                            style: { color: "rgb(0, 58, 250)" },
                            children: l("bdt", {
                              className: "question",
                              children: l("a", {
                                href: "http://www.luround.com",
                                target: "_blank",
                                "data-custom-class": "link",
                                children: "http://www.luround.com",
                              }),
                            }),
                          }),
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                      children:
                                        ", or any website of ours that links to this Privacy Notice",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("span", {
                            children: l("span", {
                              "data-custom-class": "body_text",
                              children: l("bdt", {
                                className: "block-component",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: y("span", {
                      children: [
                        y("span", {
                          "data-custom-class": "body_text",
                          children: [
                            "Download and use",
                            l("bdt", { className: "block-component" }),
                            "our mobile application",
                            l("bdt", { className: "block-component" }),
                            "(",
                            y("bdt", {
                              className: "question",
                              children: [
                                "Luround)",
                                l("span", {
                                  children: l("span", {
                                    children: l("span", {
                                      "data-custom-class": "body_text",
                                      children: l("span", {
                                        children: l("span", {
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                            children: l("span", {
                                              children: l("span", {
                                                children: l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                  children: ",",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l("span", {
                          "data-custom-class": "body_text",
                          children: l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                      children: l("bdt", {
                                        className: "block-component",
                                        children:
                                          "or any other application of ours that links to this Privacy Notice",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {}),
                }),
              }),
              l("ul", {
                children: y("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: [
                    y("span", {
                      children: [
                        "Use",
                        l("bdt", {
                          className: "question",
                          children: "Luround",
                        }),
                        ".",
                        l("bdt", {
                          className: "question",
                          children:
                            "Luround is an all-in-one app that helps coaches, consultants and creatives manage different aspects of their businesses such as scheduling, invoicing and CRM in one place.",
                        }),
                      ],
                    }),
                    l("bdt", {
                      className: "statement-end-if-in-editor",
                      children: l("span", {}),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", { className: "block-component" }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          "Engage with us in other related ways, including any sales, marketing, or events",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", { children: "Questions or concerns? " }),
                        "Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.",
                        l("bdt", { className: "block-component" }),
                        "If you still have any questions or concerns, please contact us at ",
                        l("bdt", {
                          className: "question",
                          children: "support@luround.com",
                        }),
                        ".",
                      ],
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("strong", {
                  children: l("span", {
                    style: {
                      fontSize: 20,
                      fontWeight: 600,
                      color: "hsla(180, 23%, 15%, 1)",
                    },
                    children: l("span", {
                      "data-custom-class": "heading_1",
                      children: "SUMMARY OF KEY POINTS",
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("strong", {
                        children: y("em", {
                          children: [
                            "This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our",
                            " ",
                          ],
                        }),
                      }),
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#toc",
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("strong", {
                          children: l("em", { children: "table of contents" }),
                        }),
                      }),
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("strong", {
                        children: l("em", {
                          children:
                            " below to find the section you are looking for.",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children: "What personal information do we process?",
                        }),
                        " When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#personalinfo",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "personal information you disclose to us",
                      }),
                    }),
                  }),
                  l("span", {
                    "data-custom-class": "body_text",
                    children: ".",
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: y("span", {
                    "data-custom-class": "body_text",
                    children: [
                      y("strong", {
                        children: [
                          "Do we process any sensitive personal information?",
                          " ",
                        ],
                      }),
                      "Some of the information may be considered",
                      " ",
                      l("bdt", { className: "block-component" }),
                      '"special" or "sensitive"',
                      l("bdt", { className: "statement-end-if-in-editor" }),
                      " in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs.",
                      " ",
                      l("bdt", { className: "block-component" }),
                      "We do not process sensitive personal information.",
                      l("bdt", { className: "else-block" }),
                    ],
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: y("span", {
                    "data-custom-class": "body_text",
                    children: [
                      l("strong", {
                        children:
                          "Do we collect any information from third parties?",
                      }),
                      " ",
                      l("bdt", { className: "block-component" }),
                      "We do not collect any information from third parties.",
                      l("bdt", { className: "else-block" }),
                    ],
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children: "How do we process your information?",
                        }),
                        " We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#infouse",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "how we process your information",
                      }),
                    }),
                  }),
                  l("span", {
                    "data-custom-class": "body_text",
                    children: ".",
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        y("strong", {
                          children: [
                            "In what situations and with which",
                            " ",
                            l("bdt", { className: "block-component" }),
                            "types of ",
                            l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                            "parties do we share personal information?",
                          ],
                        }),
                        " ",
                        "We may share information in specific situations and with specific ",
                        l("bdt", { className: "block-component" }),
                        "categories of ",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                        "third parties. Learn more about",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#whoshare",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children:
                          "when and with whom we share your personal information",
                      }),
                    }),
                  }),
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        ".",
                        l("bdt", { className: "block-component" }),
                      ],
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children: "How do we keep your information safe?",
                        }),
                        " We have adequate ",
                        l("bdt", { className: "block-component" }),
                        "organizational",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                        " and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other ",
                        l("bdt", { className: "block-component" }),
                        "unauthorized",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                        " third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#infosafe",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "how we keep your information safe",
                      }),
                    }),
                  }),
                  l("span", {
                    "data-custom-class": "body_text",
                    children: ".",
                  }),
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", {
                        className: "statement-end-if-in-editor",
                      }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", { children: "What are your rights?" }),
                        " Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#privacyrights",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "your privacy rights",
                      }),
                    }),
                  }),
                  l("span", {
                    "data-custom-class": "body_text",
                    children: ".",
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children: "How do you exercise your rights?",
                        }),
                        " The easiest way to exercise your rights is by",
                        " ",
                        l("bdt", {
                          className: "block-component",
                          children: "submitting a ",
                        }),
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "https://app.termly.io/notify/fbf3c7c2-6b76-4987-9ed2-0470435a7f27",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "data subject access request",
                      }),
                    }),
                  }),
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("bdt", { className: "block-component" }),
                        ", or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.",
                      ],
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        "Want to learn more about what we do with any information we collect?",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#toc",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "Review the Privacy Notice in full",
                      }),
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: ".",
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                id: "toc",
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      style: {
                        fontSize: 20,
                        fontWeight: 600,
                        color: "hsla(180, 23%, 15%, 1)",
                      },
                      children: l("strong", {
                        children: l("span", {
                          "data-custom-class": "heading_1",
                          children: "TABLE OF CONTENTS",
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("a", {
                    "data-custom-class": "link",
                    href: "#infocollect",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)" },
                      children: "1. WHAT INFORMATION DO WE COLLECT?",
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("a", {
                    "data-custom-class": "link",
                    href: "#infouse",
                    children: y("span", {
                      style: { color: "rgb(0, 58, 250)" },
                      children: [
                        "2. HOW DO WE PROCESS YOUR INFORMATION?",
                        l("bdt", { className: "block-component" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("span", {
                      style: { color: "rgb(0, 58, 250)" },
                      children: l("a", {
                        "data-custom-class": "link",
                        href: "#whoshare",
                        children:
                          "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
                      }),
                    }),
                    y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("bdt", { className: "block-component" }),
                        l("span", {
                          children: l("span", {
                            children: l("span", {
                              "data-custom-class": "body_text",
                              children: l("span", {
                                children: l("bdt", {
                                  className: "block-component",
                                }),
                              }),
                            }),
                          }),
                        }),
                        l("bdt", { className: "block-component" }),
                      ],
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            children: l("span", {
                              children: l("bdt", {
                                className: "block-component",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("a", {
                      "data-custom-class": "link",
                      href: "#sociallogins",
                      children: l("span", {
                        style: { color: "rgb(0, 58, 250)" },
                        children: l("span", {
                          style: { color: "rgb(0, 58, 250)" },
                          children: l("span", {
                            style: { color: "rgb(0, 58, 250)" },
                            children: "4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
                          }),
                        }),
                      }),
                    }),
                    l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: y("span", {
                            children: [
                              l("span", {
                                children: l("span", {
                                  children: l("bdt", {
                                    className: "statement-end-if-in-editor",
                                  }),
                                }),
                              }),
                              l("bdt", { className: "block-component" }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("a", {
                      "data-custom-class": "link",
                      href: "#inforetain",
                      children: l("span", {
                        style: { color: "rgb(0, 58, 250)" },
                        children: "5. HOW LONG DO WE KEEP YOUR INFORMATION?",
                      }),
                    }),
                    l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("span", {
                            children: l("span", {
                              children: l("bdt", {
                                className: "block-component",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("a", {
                      "data-custom-class": "link",
                      href: "#infosafe",
                      children: l("span", {
                        style: { color: "rgb(0, 58, 250)" },
                        children: "6. HOW DO WE KEEP YOUR INFORMATION SAFE?",
                      }),
                    }),
                    l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: y("span", {
                            children: [
                              l("bdt", {
                                className: "statement-end-if-in-editor",
                              }),
                              l("bdt", { className: "block-component" }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("a", {
                      "data-custom-class": "link",
                      href: "#infominors",
                      children: l("span", {
                        style: { color: "rgb(0, 58, 250)" },
                        children: "7. DO WE COLLECT INFORMATION FROM MINORS?",
                      }),
                    }),
                    l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("span", {
                            children: l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    style: { color: "rgb(0, 58, 250)" },
                    children: l("a", {
                      "data-custom-class": "link",
                      href: "#privacyrights",
                      children: "8. WHAT ARE YOUR PRIVACY RIGHTS?",
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: y("a", {
                    "data-custom-class": "link",
                    href: "#DNT",
                    children: [
                      y("span", {
                        style: { color: "rgb(0, 58, 250)" },
                        children: [
                          "9. CONTROLS FOR DO-NOT-TRACK FEATURES",
                          l("bdt", { className: "block-component" }),
                        ],
                      }),
                      l("bdt", {
                        className: "block-component",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("a", {
                  "data-custom-class": "link",
                  href: "#DNT",
                  children: [
                    l("bdt", {
                      className: "block-component",
                      children: l("span", {}),
                    }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                    l("bdt", { className: "block-component" }),
                  ],
                }),
              }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("a", {
                    "data-custom-class": "link",
                    href: "#DNT",
                    children: l("span", {}),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "#policyupdates",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)" },
                      children: "10. DO WE MAKE UPDATES TO THIS NOTICE?",
                    }),
                  }),
                ],
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("a", {
                  "data-custom-class": "link",
                  href: "#contact",
                  children: l("span", {
                    style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                    children: "11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("a", {
                  "data-custom-class": "link",
                  href: "#request",
                  children: l("span", {
                    style: { color: "rgb(0, 58, 250)" },
                    children:
                      "12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                id: "infocollect",
                style: { lineHeight: "1.5" },
                children: l("span", {
                  style: {
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsla(180, 23%, 15%, 1)",
                  },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        children: l("span", {
                          id: "control",
                          children: l("strong", {
                            children: l("span", {
                              "data-custom-class": "heading_1",
                              children: "1. WHAT INFORMATION DO WE COLLECT?",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                id: "personalinfo",
                style: { lineHeight: "1.5" },
                children: l("span", {
                  "data-custom-class": "heading_2",
                  style: { color: "rgb(0, 0, 0)" },
                  children: l("span", {
                    children: l("strong", {
                      children: "Personal information you disclose to us",
                    }),
                  }),
                }),
              }),
              y("div", {
                children: [
                  l("div", { children: l("br", {}) }),
                  l("div", {
                    style: { lineHeight: "1.5" },
                    children: l("span", {
                      children: y("span", {
                        style: { color: "rgb(89, 89, 89)", fontSize: 15 },
                        children: [
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("span", {
                                children: l("span", {
                                  "data-custom-class": "body_text",
                                  children: l("strong", {
                                    children: l("em", {
                                      children: "In Short:",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("span", {
                                children: y("span", {
                                  "data-custom-class": "body_text",
                                  children: [
                                    l("strong", {
                                      children: l("em", { children: " " }),
                                    }),
                                    l("em", {
                                      children:
                                        "We collect personal information that you provide to us.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: y("span", {
                    children: [
                      y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          "We collect personal information that you voluntarily provide to us when you",
                          " ",
                          l("span", {
                            children: l("bdt", {
                              className: "block-component",
                            }),
                          }),
                          "register on the Services,",
                          " ",
                        ],
                      }),
                      y("span", {
                        children: [
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("bdt", {
                                className: "statement-end-if-in-editor",
                              }),
                            }),
                          }),
                          l("span", {
                            "data-custom-class": "body_text",
                            children:
                              "express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("bdt", { className: "block-component" }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children: "Personal Information Provided by You.",
                        }),
                        " The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:",
                        l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "forloop-component",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "question",
                              children: "names",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", {
                            className: "forloop-component",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "question",
                              children: "email addresses",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", {
                            className: "forloop-component",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "question",
                              children: "usernames",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", {
                            className: "forloop-component",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "question",
                              children: "passwords",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: y("span", {
                        children: [
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "forloop-component",
                            }),
                          }),
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                id: "sensitiveinfo",
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: y("span", {
                    "data-custom-class": "body_text",
                    children: [
                      l("strong", { children: "Sensitive Information." }),
                      l("bdt", { className: "block-component" }),
                      "We do not process sensitive information.",
                    ],
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", { className: "else-block" }),
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "block-component",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", { children: "Payment Data." }),
                        "We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by",
                        l("bdt", { className: "forloop-component" }),
                        l("span", {
                          children: l("span", {
                            children: l("span", {
                              "data-custom-class": "body_text",
                              children: l("span", {
                                children: l("span", {
                                  "data-custom-class": "body_text",
                                  children: l("bdt", {
                                    className: "block-component",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        l("bdt", {
                          className: "question",
                          children: "Paystack",
                        }),
                        l("span", {
                          children: l("span", {
                            children: y("span", {
                              "data-custom-class": "body_text",
                              children: [
                                l("span", {
                                  children: y("span", {
                                    children: [
                                      l("span", {
                                        "data-custom-class": "body_text",
                                        children: l("span", {
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                            children: l("bdt", {
                                              className: "block-component",
                                            }),
                                          }),
                                        }),
                                      }),
                                      l("span", {
                                        "data-custom-class": "body_text",
                                        children: l("span", {
                                          children: l("span", {
                                            children: l("span", {
                                              "data-custom-class": "body_text",
                                              children: l("span", {
                                                children: l("span", {
                                                  children: l("span", {
                                                    "data-custom-class":
                                                      "body_text",
                                                    children: l("span", {
                                                      children: l("span", {
                                                        children: l("span", {
                                                          "data-custom-class":
                                                            "body_text",
                                                          children: l("bdt", {
                                                            className:
                                                              "forloop-component",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                ". You may find their privacy notice link(s) here:",
                                l("span", {
                                  children: l("span", {
                                    children: y("span", {
                                      "data-custom-class": "body_text",
                                      children: [
                                        l("bdt", {
                                          className: "forloop-component",
                                        }),
                                        l("span", {
                                          children: l("span", {
                                            style: {
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)",
                                            },
                                            children: l("span", {
                                              "data-custom-class": "body_text",
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: l("bdt", {
                                                    className:
                                                      "block-component",
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                l("span", {
                                  style: { color: "rgb(0, 58, 250)" },
                                  children: l("bdt", {
                                    className: "question",
                                    children: l("a", {
                                      href: "https://paystack.com/privacy/merchant",
                                      target: "_blank",
                                      "data-custom-class": "link",
                                      children:
                                        "https://paystack.com/privacy/merchant",
                                    }),
                                  }),
                                }),
                                l("span", {
                                  children: l("span", {
                                    children: y("span", {
                                      "data-custom-class": "body_text",
                                      children: [
                                        l("span", {
                                          children: l("span", {
                                            style: {
                                              fontSize: 15,
                                              color: "rgb(89, 89, 89)",
                                            },
                                            children: l("span", {
                                              "data-custom-class": "body_text",
                                              children: l("span", {
                                                style: {
                                                  fontSize: 15,
                                                  color: "rgb(89, 89, 89)",
                                                },
                                                children: l("span", {
                                                  style: {
                                                    fontSize: 15,
                                                    color: "rgb(89, 89, 89)",
                                                  },
                                                  children: l("span", {
                                                    "data-custom-class":
                                                      "body_text",
                                                    children: l("span", {
                                                      children: l("span", {
                                                        "data-custom-class":
                                                          "body_text",
                                                        children: l("bdt", {
                                                          className:
                                                            "block-component",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        l("bdt", {
                                          className: "forloop-component",
                                        }),
                                        l("span", {
                                          children: y("span", {
                                            "data-custom-class": "body_text",
                                            children: [
                                              ".",
                                              l("bdt", {
                                                className: "block-component",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", {
                            className: "statement-end-if-in-editor",
                            children: l("bdt", {
                              className: "block-component",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", { children: "Social Media Login Data. " }),
                        "We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called",
                        " ",
                        l("bdt", { className: "block-component" }),
                        '"',
                        l("bdt", { className: "statement-end-if-in-editor" }),
                        l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("span", {
                                style: { color: "rgb(0, 58, 250)" },
                                children: l("a", {
                                  "data-custom-class": "link",
                                  href: "#sociallogins",
                                  children:
                                    "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
                                }),
                              }),
                            }),
                          }),
                        }),
                        l("bdt", { className: "block-component" }),
                        '"',
                        l("bdt", { className: "statement-end-if-in-editor" }),
                        " below.",
                      ],
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          children: l("bdt", {
                            className: "statement-end-if-in-editor",
                            children: l("bdt", {
                              className: "statement-end-if-in-editor",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  l("bdt", {
                    className: "block-component",
                    children: l("bdt", { className: "block-component" }),
                  }),
                ],
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  "data-custom-class": "body_text",
                  children: y("span", {
                    children: [
                      l("strong", { children: "Application Data." }),
                      " If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:",
                      l("bdt", { className: "block-component" }),
                    ],
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    "data-custom-class": "body_text",
                    children: y("span", {
                      children: [
                        l("em", { children: "Geolocation Information." }),
                        " We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("em", { children: "Mobile Device Access." }),
                        " We may request access or permission to certain features from your mobile device, including your mobile device's",
                        " ",
                        l("bdt", { className: "forloop-component" }),
                        l("bdt", {
                          className: "question",
                          children: "reminders",
                        }),
                        ",",
                        " ",
                        l("bdt", { className: "forloop-component" }),
                        "and other features. If you wish to change our access or permissions, you may do so in your device's settings.",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("em", { children: "Mobile Device Data." }),
                        " We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("em", { children: "Push Notifications." }),
                        " We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.",
                        l("bdt", { className: "statement-end-if-in-editor" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    "data-custom-class": "body_text",
                    children:
                      "This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.",
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "statement-end-if-in-editor",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children:
                        "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.",
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", { className: "block-component" }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  "data-custom-class": "heading_2",
                  style: { color: "rgb(0, 0, 0)" },
                  children: l("span", {
                    children: l("strong", {
                      children: "Information automatically collected",
                    }),
                  }),
                }),
              }),
              y("div", {
                children: [
                  l("div", { children: l("br", {}) }),
                  l("div", {
                    style: { lineHeight: "1.5" },
                    children: l("span", {
                      children: y("span", {
                        style: { color: "rgb(89, 89, 89)", fontSize: 15 },
                        children: [
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("span", {
                                children: l("span", {
                                  "data-custom-class": "body_text",
                                  children: l("strong", {
                                    children: l("em", {
                                      children: "In Short:",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              children: l("span", {
                                children: y("span", {
                                  "data-custom-class": "body_text",
                                  children: [
                                    l("strong", {
                                      children: l("em", { children: " " }),
                                    }),
                                    l("em", {
                                      children:
                                        "Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children:
                        "We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.",
                    }),
                  }),
                }),
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: y("span", {
                  children: [
                    l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("bdt", { className: "block-component" }),
                      }),
                    }),
                    l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", { className: "block-component" }),
                    }),
                  ],
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        "The information we collect includes:",
                        l("bdt", { className: "block-component" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          l("em", { children: "Log and Usage Data." }),
                          " Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services",
                          l("span", { children: " " }),
                          "(such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called ",
                          l("bdt", { className: "block-component" }),
                          '"crash dumps"',
                          l("bdt", { className: "statement-end-if-in-editor" }),
                          "), and hardware settings).",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          l("em", { children: "Device Data." }),
                          " We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("bdt", {
                  className: "block-component",
                  children: l("span", {
                    children: l("span", { "data-custom-class": "body_text" }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          l("em", { children: "Location Data." }),
                          " We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("bdt", {
                                      className: "statement-end-if-in-editor",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              y("div", {
                children: [
                  l("bdt", {
                    className: "block-component",
                    children: l("span", {}),
                  }),
                  l("bdt", { className: "statement-end-if-in-editor" }),
                  l("bdt", {
                    className: "block-component",
                    children: l("span", {}),
                  }),
                ],
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("strong", {
                    children: l("span", {
                      "data-custom-class": "heading_2",
                      children: "Google API",
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", { children: l("br", {}) }),
              }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        "Our use of information received from Google APIs will adhere to",
                        " ",
                      ],
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "https://developers.google.com/terms/api-services-user-data-policy",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "Google API Services User Data Policy",
                      }),
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: ", including the ",
                    }),
                  }),
                  l("a", {
                    "data-custom-class": "link",
                    href: "https://developers.google.com/terms/api-services-user-data-policy#limited-use",
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: l("span", {
                      style: { color: "rgb(0, 58, 250)", fontSize: 15 },
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: "Limited Use requirements",
                      }),
                    }),
                  }),
                  y("span", {
                    children: [
                      l("span", {
                        "data-custom-class": "body_text",
                        children: ".",
                      }),
                      l("br", {}),
                    ],
                  }),
                ],
              }),
              l("div", { children: l("span", { children: l("br", {}) }) }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("bdt", {
                    className: "statement-end-if-in-editor",
                    children: l("span", {}),
                  }),
                  l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("span", {
                          style: { color: "rgb(89, 89, 89)", fontSize: 15 },
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("span", {
                              style: { color: "rgb(89, 89, 89)", fontSize: 15 },
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("bdt", {
                                  className: "statement-end-if-in-editor",
                                  children: l("bdt", {
                                    className: "block-component",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", { className: "block-component" }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                id: "infouse",
                style: { lineHeight: "1.5" },
                children: l("span", {
                  style: {
                    fontSize: 20,
                    fontWeight: 600,
                    color: "hsla(180, 23%, 15%, 1)",
                  },
                  children: l("span", {
                    children: l("span", {
                      children: l("span", {
                        children: l("span", {
                          id: "control",
                          children: l("strong", {
                            children: l("span", {
                              "data-custom-class": "heading_1",
                              children:
                                "2. HOW DO WE PROCESS YOUR INFORMATION?",
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              y("div", {
                children: [
                  l("div", {
                    style: { lineHeight: "1.5" },
                    children: l("br", {}),
                  }),
                  l("div", {
                    style: { lineHeight: "1.5" },
                    children: l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("span", {
                            children: l("span", {
                              children: y("span", {
                                "data-custom-class": "body_text",
                                children: [
                                  l("strong", {
                                    children: l("em", {
                                      children: "In Short: ",
                                    }),
                                  }),
                                  l("em", {
                                    children:
                                      "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              l("div", { style: { lineHeight: "1.5" }, children: l("br", {}) }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: y("span", {
                      "data-custom-class": "body_text",
                      children: [
                        l("strong", {
                          children:
                            "We process your personal information for a variety of reasons, depending on how you interact with our Services, including:",
                        }),
                        l("bdt", { className: "block-component" }),
                      ],
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          y("strong", {
                            children: [
                              "To facilitate account creation and authentication and otherwise manage user accounts.",
                              " ",
                            ],
                          }),
                          "We may process your information so you can create and log in to your account, as well as keep your account in working order.",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("span", {
                                      "data-custom-class": "body_text",
                                      children: l("span", {
                                        children: l("span", {
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                            children: l("bdt", {
                                              className:
                                                "statement-end-if-in-editor",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              l("div", {
                style: { lineHeight: "1.5" },
                children: l("span", {
                  children: l("span", {
                    children: l("span", {
                      "data-custom-class": "body_text",
                      children: l("bdt", { className: "block-component" }),
                    }),
                  }),
                }),
              }),
              l("ul", {
                children: l("li", {
                  "data-custom-class": "body_text",
                  style: { lineHeight: "1.5" },
                  children: l("span", {
                    children: l("span", {
                      children: y("span", {
                        "data-custom-class": "body_text",
                        children: [
                          y("strong", {
                            children: [
                              "To deliver and facilitate delivery of services to the user.",
                              " ",
                            ],
                          }),
                          "We may process your information to provide you with the requested service.",
                          l("span", {
                            children: l("span", {
                              children: l("span", {
                                "data-custom-class": "body_text",
                                children: l("span", {
                                  children: l("span", {
                                    children: l("span", {
                                      "data-custom-class": "body_text",
                                      children: l("span", {
                                        children: l("span", {
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                            children: l("span", {
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: l("bdt", {
                                                    className:
                                                      "statement-end-if-in-editor",
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              y("div", {
                style: { lineHeight: "1.5" },
                children: [
                  l("span", {
                    children: l("span", {
                      children: l("span", {
                        "data-custom-class": "body_text",
                        children: l("bdt", { className: "block-component" }),
                      }),
                    }),
                  }),
                  l("div", {
                    style: { lineHeight: "1.5" },
                    children: l("span", {
                      children: l("span", {
                        children: l("span", {
                          "data-custom-class": "body_text",
                          children: l("bdt", { className: "block-component" }),
                        }),
                      }),
                    }),
                  }),
                  l("ul", {
                    children: l("li", {
                      "data-custom-class": "body_text",
                      style: { lineHeight: "1.5" },
                      children: l("span", {
                        children: l("span", {
                          children: y("span", {
                            "data-custom-class": "body_text",
                            children: [
                              y("strong", {
                                children: [
                                  "To respond to user inquiries/offer support to users.",
                                  " ",
                                ],
                              }),
                              "We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.",
                              l("span", {
                                children: l("span", {
                                  children: l("span", {
                                    "data-custom-class": "body_text",
                                    children: l("span", {
                                      children: l("span", {
                                        children: l("span", {
                                          "data-custom-class": "body_text",
                                          children: l("span", {
                                            children: l("span", {
                                              children: l("span", {
                                                "data-custom-class":
                                                  "body_text",
                                                children: l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                  y("div", {
                    style: { lineHeight: "1.5" },
                    children: [
                      l("span", {
                        children: l("span", {
                          children: l("span", {
                            "data-custom-class": "body_text",
                            children: l("bdt", {
                              className: "block-component",
                            }),
                          }),
                        }),
                      }),
                      l("div", {
                        style: { lineHeight: "1.5" },
                        children: l("bdt", {
                          className: "block-component",
                          children: l("span", {}),
                        }),
                      }),
                      l("ul", {
                        children: l("li", {
                          "data-custom-class": "body_text",
                          style: { lineHeight: "1.5" },
                          children: l("span", {
                            children: l("span", {
                              children: y("span", {
                                "data-custom-class": "body_text",
                                children: [
                                  y("strong", {
                                    children: [
                                      "To send administrative information to you.",
                                      " ",
                                    ],
                                  }),
                                  "We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.",
                                  l("span", {
                                    children: l("span", {
                                      children: l("span", {
                                        "data-custom-class": "body_text",
                                        children: l("bdt", {
                                          className:
                                            "statement-end-if-in-editor",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                      y("div", {
                        style: { lineHeight: "1.5" },
                        children: [
                          l("bdt", {
                            className: "block-component",
                            children: l("span", {}),
                          }),
                          l("div", {
                            style: { lineHeight: "1.5" },
                            children: l("bdt", {
                              className: "block-component",
                              children: l("span", {}),
                            }),
                          }),
                          l("ul", {
                            children: l("li", {
                              "data-custom-class": "body_text",
                              style: { lineHeight: "1.5" },
                              children: l("span", {
                                children: l("span", {
                                  children: y("span", {
                                    "data-custom-class": "body_text",
                                    children: [
                                      y("strong", {
                                        children: [
                                          "To ",
                                          l("bdt", {
                                            className: "block-component",
                                          }),
                                          "fulfill",
                                          l("bdt", {
                                            className:
                                              "statement-end-if-in-editor",
                                          }),
                                          " and manage your orders.",
                                          " ",
                                        ],
                                      }),
                                      "We may process your information to",
                                      " ",
                                      l("bdt", {
                                        className: "block-component",
                                      }),
                                      "fulfill",
                                      l("bdt", {
                                        className: "statement-end-if-in-editor",
                                      }),
                                      " and manage your orders, payments, returns, and exchanges made through the Services.",
                                      l("span", {
                                        children: l("span", {
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                            children: l("span", {
                                              style: {
                                                fontSize: 15,
                                                color: "rgb(89, 89, 89)",
                                              },
                                              children: l("span", {
                                                style: {
                                                  fontSize: 15,
                                                  color: "rgb(89, 89, 89)",
                                                },
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: l("span", {
                                                    style: {
                                                      fontSize: 15,
                                                      color: "rgb(89, 89, 89)",
                                                    },
                                                    children: l("span", {
                                                      style: {
                                                        fontSize: 15,
                                                        color:
                                                          "rgb(89, 89, 89)",
                                                      },
                                                      children: l("span", {
                                                        "data-custom-class":
                                                          "body_text",
                                                        children: l("bdt", {
                                                          className:
                                                            "statement-end-if-in-editor",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          y("div", {
                            style: { lineHeight: "1.5" },
                            children: [
                              l("bdt", {
                                className: "block-component",
                                children: l("span", {
                                  children: l("span", {
                                    "data-custom-class": "body_text",
                                  }),
                                }),
                              }),
                              l("p", {
                                style: { fontSize: 15, lineHeight: "1.5" },
                                children: l("bdt", {
                                  className: "block-component",
                                  children: l("span", {}),
                                }),
                              }),
                              l("ul", {
                                children: l("li", {
                                  "data-custom-class": "body_text",
                                  style: { lineHeight: "1.5" },
                                  children: l("span", {
                                    children: l("span", {
                                      children: l("span", {
                                        children: y("span", {
                                          "data-custom-class": "body_text",
                                          children: [
                                            y("strong", {
                                              children: [
                                                "To enable user-to-user communications.",
                                                " ",
                                              ],
                                            }),
                                            "We may process your information if you choose to use any of our offerings that allow for communication with another user.",
                                            l("span", {
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                      children: l("span", {
                                                        children: l("span", {
                                                          "data-custom-class":
                                                            "body_text",
                                                          children: l("bdt", {
                                                            className:
                                                              "statement-end-if-in-editor",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              l("p", {
                                style: { fontSize: 15, lineHeight: "1.5" },
                                children: l("bdt", {
                                  className: "block-component",
                                  children: l("span", {}),
                                }),
                              }),
                              l("p", {
                                style: { fontSize: 15, lineHeight: "1.5" },
                                children: l("bdt", {
                                  className: "block-component",
                                }),
                              }),
                              l("ul", {
                                children: l("li", {
                                  "data-custom-class": "body_text",
                                  style: { lineHeight: "1.5" },
                                  children: l("span", {
                                    children: l("span", {
                                      children: l("span", {
                                        children: y("span", {
                                          "data-custom-class": "body_text",
                                          children: [
                                            l("strong", {
                                              children: "To request feedback. ",
                                            }),
                                            "We may process your information when necessary to request feedback and to contact you about your use of our Services.",
                                            l("span", {
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                      children: l("span", {
                                                        children: l("span", {
                                                          "data-custom-class":
                                                            "body_text",
                                                          children: l("bdt", {
                                                            className:
                                                              "statement-end-if-in-editor",
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              l("p", {
                                style: { fontSize: 15, lineHeight: "1.5" },
                                children: l("bdt", {
                                  className: "block-component",
                                }),
                              }),
                              l("div", {
                                style: { lineHeight: "1.5" },
                                children: l("bdt", {
                                  className: "block-component",
                                  children: l("span", {
                                    children: l("span", {
                                      "data-custom-class": "body_text",
                                    }),
                                  }),
                                }),
                              }),
                              l("ul", {
                                children: y("li", {
                                  "data-custom-class": "body_text",
                                  style: { lineHeight: "1.5" },
                                  children: [
                                    l("span", {
                                      children: y("span", {
                                        "data-custom-class": "body_text",
                                        children: [
                                          y("strong", {
                                            children: [
                                              "To send you marketing and promotional communications.",
                                              " ",
                                            ],
                                          }),
                                          "We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see ",
                                          l("bdt", {
                                            className: "block-component",
                                          }),
                                          '"',
                                          l("bdt", {
                                            className:
                                              "statement-end-if-in-editor",
                                          }),
                                        ],
                                      }),
                                    }),
                                    l("a", {
                                      href: "#privacyrights",
                                      children: l("span", {
                                        "data-custom-class": "link",
                                        children: l("span", {
                                          style: {
                                            color: "rgb(0, 58, 250)",
                                            fontSize: 15,
                                          },
                                          children: l("span", {
                                            "data-custom-class": "link",
                                            children:
                                              "WHAT ARE YOUR PRIVACY RIGHTS?",
                                          }),
                                        }),
                                      }),
                                    }),
                                    y("span", {
                                      children: [
                                        y("span", {
                                          "data-custom-class": "body_text",
                                          children: [
                                            l("bdt", {
                                              className: "block-component",
                                            }),
                                            '"',
                                            l("bdt", {
                                              className:
                                                "statement-end-if-in-editor",
                                            }),
                                            " below.",
                                          ],
                                        }),
                                        l("bdt", {
                                          className:
                                            "statement-end-if-in-editor",
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              y("div", {
                                style: { lineHeight: "1.5" },
                                children: [
                                  l("bdt", {
                                    className: "block-component",
                                    children: l("span", {}),
                                  }),
                                  l("div", {
                                    style: { lineHeight: "1.5" },
                                    children: l("bdt", {
                                      className: "block-component",
                                      children: l("span", {}),
                                    }),
                                  }),
                                  l("ul", {
                                    children: l("li", {
                                      "data-custom-class": "body_text",
                                      style: { lineHeight: "1.5" },
                                      children: l("span", {
                                        children: l("span", {
                                          children: y("span", {
                                            "data-custom-class": "body_text",
                                            children: [
                                              y("strong", {
                                                children: [
                                                  "To deliver targeted advertising to you.",
                                                  " ",
                                                ],
                                              }),
                                              "We may process your information to develop and display ",
                                              l("bdt", {
                                                className: "block-component",
                                              }),
                                              "personalized",
                                              l("bdt", {
                                                className:
                                                  "statement-end-if-in-editor",
                                              }),
                                              " ",
                                              "content and advertising tailored to your interests, location, and more.",
                                              l("bdt", {
                                                className: "block-component",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  y("div", {
                                    style: { lineHeight: "1.5" },
                                    children: [
                                      l("span", {
                                        children: l("bdt", {
                                          className: "block-component",
                                          children: l("span", {
                                            "data-custom-class": "body_text",
                                          }),
                                        }),
                                      }),
                                      l("div", {
                                        style: { lineHeight: "1.5" },
                                        children: l("bdt", {
                                          className: "block-component",
                                          children: l("span", {
                                            children: l("span", {
                                              "data-custom-class": "body_text",
                                            }),
                                          }),
                                        }),
                                      }),
                                      l("ul", {
                                        children: l("li", {
                                          "data-custom-class": "body_text",
                                          style: { lineHeight: "1.5" },
                                          children: l("span", {
                                            children: y("span", {
                                              "data-custom-class": "body_text",
                                              children: [
                                                l("strong", {
                                                  children:
                                                    "To post testimonials.",
                                                }),
                                                " We post testimonials on our Services that may contain personal information.",
                                                l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                      l("div", {
                                        style: { lineHeight: "1.5" },
                                        children: l("bdt", {
                                          className: "block-component",
                                          children: l("span", {
                                            children: l("span", {
                                              "data-custom-class": "body_text",
                                            }),
                                          }),
                                        }),
                                      }),
                                      l("ul", {
                                        children: y("li", {
                                          "data-custom-class": "body_text",
                                          style: { lineHeight: "1.5" },
                                          children: [
                                            l("span", {
                                              "data-custom-class": "body_text",
                                              children: y("span", {
                                                children: [
                                                  l("strong", {
                                                    children:
                                                      "To protect our Services.",
                                                  }),
                                                  " We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.",
                                                ],
                                              }),
                                            }),
                                            l("bdt", {
                                              className:
                                                "statement-end-if-in-editor",
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      y("div", {
                                        style: { lineHeight: "1.5" },
                                        children: [
                                          l("bdt", {
                                            className: "block-component",
                                            children: l("span", {
                                              children: l("span", {
                                                "data-custom-class":
                                                  "body_text",
                                              }),
                                            }),
                                          }),
                                          l("div", {
                                            style: { lineHeight: "1.5" },
                                            children: l("bdt", {
                                              className: "block-component",
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                }),
                                              }),
                                            }),
                                          }),
                                          l("ul", {
                                            children: y("li", {
                                              "data-custom-class": "body_text",
                                              style: { lineHeight: "1.5" },
                                              children: [
                                                l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: y("span", {
                                                    children: [
                                                      l("strong", {
                                                        children:
                                                          "To administer prize draws and competitions.",
                                                      }),
                                                      " ",
                                                      "We may process your information to administer prize draws and competitions.",
                                                    ],
                                                  }),
                                                }),
                                                l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          l("div", {
                                            style: { lineHeight: "1.5" },
                                            children: l("bdt", {
                                              className: "block-component",
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                }),
                                              }),
                                            }),
                                          }),
                                          l("ul", {
                                            children: y("li", {
                                              "data-custom-class": "body_text",
                                              style: { lineHeight: "1.5" },
                                              children: [
                                                l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: y("span", {
                                                    children: [
                                                      l("strong", {
                                                        children:
                                                          "To evaluate and improve our Services, products, marketing, and your experience.",
                                                      }),
                                                      " ",
                                                      "We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.",
                                                    ],
                                                  }),
                                                }),
                                                l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          l("div", {
                                            style: { lineHeight: "1.5" },
                                            children: l("bdt", {
                                              className: "block-component",
                                              children: l("span", {
                                                children: l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                }),
                                              }),
                                            }),
                                          }),
                                          l("ul", {
                                            children: y("li", {
                                              "data-custom-class": "body_text",
                                              style: { lineHeight: "1.5" },
                                              children: [
                                                l("span", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  children: y("span", {
                                                    children: [
                                                      l("strong", {
                                                        children:
                                                          "To identify usage trends.",
                                                      }),
                                                      " We may process information about how you use our Services to better understand how they are being used so we can improve them.",
                                                    ],
                                                  }),
                                                }),
                                                l("bdt", {
                                                  className:
                                                    "statement-end-if-in-editor",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          y("div", {
                                            style: { lineHeight: "1.5" },
                                            children: [
                                              l("bdt", {
                                                className: "block-component",
                                                children: l("span", {
                                                  children: l("span", {
                                                    "data-custom-class":
                                                      "body_text",
                                                  }),
                                                }),
                                              }),
                                              l("div", {
                                                style: { lineHeight: "1.5" },
                                                children: l("bdt", {
                                                  className: "block-component",
                                                  children: l("span", {
                                                    children: l("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              l("ul", {
                                                children: l("li", {
                                                  "data-custom-class":
                                                    "body_text",
                                                  style: { lineHeight: "1.5" },
                                                  children: l("span", {
                                                    children: y("span", {
                                                      "data-custom-class":
                                                        "body_text",
                                                      children: [
                                                        l("strong", {
                                                          children:
                                                            "To determine the effectiveness of our marketing and promotional campaigns.",
                                                        }),
                                                        " ",
                                                        "We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.",
                                                        l("bdt", {
                                                          className:
                                                            "statement-end-if-in-editor",
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              y("div", {
                                                style: { lineHeight: "1.5" },
                                                children: [
                                                  l("bdt", {
                                                    className:
                                                      "block-component",
                                                    children: l("span", {
                                                      children: l("span", {
                                                        "data-custom-class":
                                                          "body_text",
                                                      }),
                                                    }),
                                                  }),
                                                  l("div", {
                                                    style: {
                                                      lineHeight: "1.5",
                                                    },
                                                    children: l("bdt", {
                                                      className:
                                                        "block-component",
                                                      children: l("span", {
                                                        children: l("span", {
                                                          "data-custom-class":
                                                            "body_text",
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  l("ul", {
                                                    children: l("li", {
                                                      "data-custom-class":
                                                        "body_text",
                                                      style: {
                                                        lineHeight: "1.5",
                                                      },
                                                      children: l("span", {
                                                        children: y("span", {
                                                          "data-custom-class":
                                                            "body_text",
                                                          children: [
                                                            l("strong", {
                                                              children:
                                                                "To comply with our legal obligations.",
                                                            }),
                                                            " ",
                                                            "We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.",
                                                            l("bdt", {
                                                              className:
                                                                "statement-end-if-in-editor",
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  y("div", {
                                                    style: {
                                                      lineHeight: "1.5",
                                                    },
                                                    children: [
                                                      l("bdt", {
                                                        className:
                                                          "block-component",
                                                        children: l("span", {
                                                          children: l("span", {
                                                            "data-custom-class":
                                                              "body_text",
                                                          }),
                                                        }),
                                                      }),
                                                      y("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: [
                                                          l("bdt", {
                                                            className:
                                                              "block-component",
                                                            children: l(
                                                              "span",
                                                              {
                                                                children: l(
                                                                  "span",
                                                                  {
                                                                    "data-custom-class":
                                                                      "body_text",
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                          l("bdt", {
                                                            className:
                                                              "block-component",
                                                            children: l(
                                                              "span",
                                                              {
                                                                children: l(
                                                                  "span",
                                                                  {
                                                                    "data-custom-class":
                                                                      "body_text",
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                          l("bdt", {
                                                            className:
                                                              "block-component",
                                                            children: l(
                                                              "span",
                                                              {
                                                                children: l(
                                                                  "span",
                                                                  {
                                                                    "data-custom-class":
                                                                      "body_text",
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                          l("bdt", {
                                                            className:
                                                              "block-component",
                                                            children: l(
                                                              "span",
                                                              {
                                                                children: l(
                                                                  "span",
                                                                  {
                                                                    "data-custom-class":
                                                                      "body_text",
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("br", {}),
                                                      }),
                                                      l("div", {
                                                        id: "whoshare",
                                                        children: l("span", {
                                                          style: {
                                                            fontSize: 20,
                                                            fontWeight: 600,
                                                            color:
                                                              "hsla(180, 23%, 15%, 1)",
                                                          },
                                                          children: l("span", {
                                                            children: l(
                                                              "span",
                                                              {
                                                                children: l(
                                                                  "span",
                                                                  {
                                                                    children: l(
                                                                      "span",
                                                                      {
                                                                        id: "control",
                                                                        children:
                                                                          l(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                l(
                                                                                  "span",
                                                                                  {
                                                                                    "data-custom-class":
                                                                                      "heading_1",
                                                                                    children:
                                                                                      "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("br", {}),
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("span", {
                                                          style: {
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                          },
                                                          children: l("span", {
                                                            style: {
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)",
                                                            },
                                                            children: y(
                                                              "span",
                                                              {
                                                                "data-custom-class":
                                                                  "body_text",
                                                                children: [
                                                                  l("strong", {
                                                                    children: l(
                                                                      "em",
                                                                      {
                                                                        children:
                                                                          "In Short:",
                                                                      }
                                                                    ),
                                                                  }),
                                                                  y("em", {
                                                                    children: [
                                                                      " ",
                                                                      "We may share information in specific situations described in this section and/or with the following",
                                                                      " ",
                                                                      l("bdt", {
                                                                        className:
                                                                          "block-component",
                                                                      }),
                                                                      "categories of",
                                                                      " ",
                                                                      l("bdt", {
                                                                        className:
                                                                          "statement-end-if-in-editor",
                                                                      }),
                                                                      "third parties.",
                                                                    ],
                                                                  }),
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("span", {
                                                          style: {
                                                            fontSize: 15,
                                                            color:
                                                              "rgb(89, 89, 89)",
                                                          },
                                                          children: l("span", {
                                                            style: {
                                                              fontSize: 15,
                                                              color:
                                                                "rgb(89, 89, 89)",
                                                            },
                                                            children: l(
                                                              "span",
                                                              {
                                                                "data-custom-class":
                                                                  "body_text",
                                                                children: l(
                                                                  "bdt",
                                                                  {
                                                                    className:
                                                                      "block-component",
                                                                  }
                                                                ),
                                                              }
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("br", {}),
                                                      }),
                                                      l("div", {
                                                        style: {
                                                          lineHeight: "1.5",
                                                        },
                                                        children: l("span", {
                                                          children: l("span", {
                                                            "data-custom-class":
                                                              "body_text",
                                                            children: l(
                                                              "strong",
                                                              {}
                                                            ),
                                                          }),
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vm() {
  return y("footer", {
    className: "footer",
    children: [
      y("div", {
        className: "footer-luround",
        children: [
          l("img", { className: "luround3", src: $m }),
          l("span", {
            className: "footer-span",
            children:
              "All-in-one app to help consultants and coaches build credibility, reach new customers faster and organize their practice seamlessly.",
          }),
        ],
      }),
      y("ul", {
        className: "social-media",
        children: [
          l("li", {
            children: l("a", {
              href: "https://www.linkedin.com/company/luround/",
              children: l("svg", {
                width: "24",
                height: "25",
                viewBox: "0 0 24 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: l("path", {
                  d: "M21.3333 0.431152C22.0406 0.431152 22.7189 0.712104 23.219 1.2122C23.719 1.7123 24 2.39058 24 3.09782V21.7645C24 22.4717 23.719 23.15 23.219 23.6501C22.7189 24.1502 22.0406 24.4312 21.3333 24.4312H2.66667C1.95942 24.4312 1.28115 24.1502 0.781048 23.6501C0.280951 23.15 0 22.4717 0 21.7645V3.09782C0 2.39058 0.280951 1.7123 0.781048 1.2122C1.28115 0.712104 1.95942 0.431152 2.66667 0.431152H21.3333ZM20.6667 21.0978V14.0312C20.6667 12.8783 20.2087 11.7728 19.3936 10.9576C18.5784 10.1424 17.4728 9.68449 16.32 9.68449C15.1867 9.68449 13.8667 10.3778 13.2267 11.4178V9.93782H9.50667V21.0978H13.2267V14.5245C13.2267 13.4978 14.0533 12.6578 15.08 12.6578C15.5751 12.6578 16.0499 12.8545 16.3999 13.2046C16.75 13.5546 16.9467 14.0294 16.9467 14.5245V21.0978H20.6667ZM5.17333 7.84449C5.76742 7.84449 6.33717 7.60849 6.75725 7.18841C7.17733 6.76832 7.41333 6.19857 7.41333 5.60449C7.41333 4.36449 6.41333 3.35115 5.17333 3.35115C4.57571 3.35115 4.00257 3.58856 3.57999 4.01114C3.1574 4.43372 2.92 5.00686 2.92 5.60449C2.92 6.84449 3.93333 7.84449 5.17333 7.84449ZM7.02667 21.0978V9.93782H3.33333V21.0978H7.02667Z",
                  fill: "white",
                }),
              }),
            }),
          }),
          l("li", {
            children: l("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: l("path", {
                d: "M22 6.23136C21.2483 6.55746 20.4534 6.77303 19.64 6.87136C20.4982 6.35868 21.1413 5.55214 21.45 4.60136C20.6436 5.08143 19.7608 5.41966 18.84 5.60136C18.2245 4.93393 17.405 4.48966 16.5098 4.33821C15.6147 4.18677 14.6945 4.33672 13.8938 4.76455C13.093 5.19238 12.4569 5.87389 12.0852 6.7022C11.7135 7.5305 11.6273 8.45875 11.84 9.34136C10.2094 9.25889 8.61444 8.83432 7.15865 8.09522C5.70287 7.35613 4.41885 6.31906 3.39 5.05136C3.02914 5.68153 2.83952 6.39518 2.84 7.12136C2.83872 7.79574 3.00422 8.45998 3.32176 9.05493C3.63929 9.64987 4.09902 10.1571 4.66 10.5314C4.00798 10.5136 3.36989 10.3387 2.8 10.0214V10.0714C2.80489 11.0163 3.13599 11.9305 3.73731 12.6593C4.33864 13.3882 5.17326 13.887 6.1 14.0714C5.74326 14.1799 5.37287 14.2372 5 14.2414C4.74189 14.2383 4.48442 14.2149 4.23 14.1714C4.49391 14.9842 5.00462 15.6945 5.69107 16.2035C6.37753 16.7125 7.20558 16.9949 8.06 17.0114C6.6172 18.1466 4.83588 18.7662 3 18.7714C2.66574 18.7725 2.33174 18.7524 2 18.7114C3.87443 19.9216 6.05881 20.5641 8.29 20.5614C9.82969 20.5774 11.3571 20.2864 12.7831 19.7054C14.2091 19.1245 15.505 18.2652 16.5952 17.1779C17.6854 16.0905 18.548 14.7968 19.1326 13.3723C19.7172 11.9478 20.012 10.4211 20 8.88136C20 8.71136 20 8.53136 20 8.35136C20.7847 7.76617 21.4615 7.04879 22 6.23136Z",
                fill: "white",
              }),
            }),
          }),
          l("li", {
            children: l("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: l("path", {
                d: "M24 12.4312C24 5.80715 18.624 0.431152 12 0.431152C5.376 0.431152 0 5.80715 0 12.4312C0 18.2392 4.128 23.0751 9.6 24.1912V16.0312H7.2V12.4312H9.6V9.43115C9.6 7.11515 11.484 5.23115 13.8 5.23115H16.8V8.83115H14.4C13.74 8.83115 13.2 9.37115 13.2 10.0312V12.4312H16.8V16.0312H13.2V24.3712C19.26 23.7712 24 18.6592 24 12.4312Z",
                fill: "white",
              }),
            }),
          }),
          l("li", {
            children: l("svg", {
              width: "24",
              height: "25",
              viewBox: "0 0 24 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: l("path", {
                d: "M13.2336 0.432629C14.1092 0.429269 14.9849 0.438069 15.8603 0.459027L16.0931 0.467427C16.3619 0.477027 16.627 0.489026 16.9474 0.503425C18.2242 0.563422 19.0953 0.765012 19.8597 1.0614C20.6516 1.36618 21.3188 1.77896 21.986 2.44613C22.596 3.04562 23.0681 3.77079 23.3695 4.57122C23.6659 5.33558 23.8675 6.20793 23.9275 7.48467C23.9419 7.80385 23.9539 8.07024 23.9635 8.33902L23.9707 8.57181C23.992 9.4468 24.0012 10.322 23.9983 11.1973L23.9995 12.0924V13.6643C24.0024 14.54 23.9932 15.4156 23.9719 16.291L23.9647 16.5238C23.9551 16.7926 23.9431 17.0578 23.9287 17.3782C23.8687 18.6549 23.6647 19.526 23.3695 20.2904C23.0691 21.0917 22.5968 21.8174 21.986 22.4167C21.386 23.0267 20.6604 23.4987 19.8597 23.8002C19.0953 24.0966 18.2242 24.2982 16.9474 24.3582C16.627 24.3726 16.3619 24.3846 16.0931 24.3942L15.8603 24.4014C14.9849 24.4227 14.1093 24.4319 13.2336 24.429L12.3385 24.4302H10.7677C9.8921 24.4332 9.01646 24.424 8.14108 24.4026L7.90829 24.3954C7.62343 24.3851 7.33864 24.3731 7.05393 24.3594C5.7772 24.2994 4.90604 24.0954 4.14048 23.8002C3.33974 23.4995 2.61444 23.0273 2.01539 22.4167C1.40467 21.8171 0.932114 21.0914 0.63066 20.2904C0.334275 19.526 0.132686 18.6549 0.0726886 17.3782C0.0593248 17.0934 0.0473253 16.8086 0.0366905 16.5238L0.0306909 16.291C0.00856838 15.4156 -0.00143218 14.54 0.000692365 13.6643V11.1973C-0.00265662 10.322 0.00614386 9.4468 0.0270911 8.57181L0.0354906 8.33902C0.0450901 8.07024 0.0570895 7.80385 0.0714887 7.48467C0.131486 6.20673 0.333075 5.33678 0.62946 4.57122C0.931092 3.7704 1.40458 3.04543 2.01659 2.44733C2.61523 1.83626 3.34007 1.36327 4.14048 1.0614C4.90604 0.765012 5.776 0.563422 7.05393 0.503425L7.90829 0.467427L8.14108 0.461427C9.01605 0.439316 9.89129 0.429315 10.7665 0.431429L13.2336 0.432629ZM12.0001 6.43232C11.2051 6.42108 10.4159 6.56794 9.67817 6.86438C8.94047 7.16082 8.26904 7.60092 7.70291 8.1591C7.13678 8.71728 6.68723 9.38241 6.38039 10.1158C6.07355 10.8493 5.91554 11.6364 5.91554 12.4314C5.91554 13.2264 6.07355 14.0135 6.38039 14.747C6.68723 15.4804 7.13678 16.1455 7.70291 16.7037C8.26904 17.2619 8.94047 17.702 9.67817 17.9984C10.4159 18.2949 11.2051 18.4417 12.0001 18.4305C13.5913 18.4305 15.1173 17.7984 16.2425 16.6732C17.3677 15.5481 17.9998 14.022 17.9998 12.4308C17.9998 10.8396 17.3677 9.31355 16.2425 8.18839C15.1173 7.06323 13.5913 6.43232 12.0001 6.43232ZM12.0001 8.8322C12.4783 8.82339 12.9534 8.90995 13.3978 9.08683C13.8421 9.26372 14.2468 9.52737 14.5881 9.8624C14.9294 10.1974 15.2005 10.5971 15.3856 11.0381C15.5707 11.4791 15.6661 11.9525 15.6662 12.4308C15.6663 12.9091 15.5711 13.3826 15.3861 13.8236C15.2011 14.2647 14.9301 14.6644 14.5889 14.9996C14.2477 15.3347 13.8432 15.5985 13.3989 15.7755C12.9546 15.9526 12.4795 16.0393 12.0013 16.0306C11.0465 16.0306 10.1309 15.6514 9.45582 14.9763C8.78073 14.3012 8.40146 13.3855 8.40146 12.4308C8.40146 11.4761 8.78073 10.5605 9.45582 9.88536C10.1309 9.21026 11.0465 8.831 12.0013 8.831L12.0001 8.8322ZM18.2998 4.63241C17.9126 4.64791 17.5465 4.81258 17.2781 5.09196C17.0097 5.37133 16.8598 5.74372 16.8598 6.13114C16.8598 6.51855 17.0097 6.89095 17.2781 7.17032C17.5465 7.44969 17.9126 7.61437 18.2998 7.62986C18.6976 7.62986 19.0791 7.47183 19.3604 7.19054C19.6417 6.90925 19.7997 6.52774 19.7997 6.12994C19.7997 5.73213 19.6417 5.35062 19.3604 5.06933C19.0791 4.78804 18.6976 4.63001 18.2998 4.63001V4.63241Z",
                fill: "white",
              }),
            }),
          }),
        ],
      }),
      l(Hm, {
        to: "/Privacy",
        className: "privacy",
        children: "Privacy Policy",
      }),
      y("div", {
        className: "line-span",
        children: [
          l("hr", { className: "footer-hr" }),
          l("span", { children: "@Luround 2024. All rights reserved." }),
        ],
      }),
    ],
  });
}
const Qm = "./assets/ronald-2d6f8aac.png",
  qm = "./assets/business-d37b67dd.png",
  Km = "./assets/contact-dde8de85.png",
  Ym = "./assets/successful-0c9dbc8e.png",
  Zm = "./assets/payment-76285698.png";
function Gm() {
  return y("div", {
    className: "gridcontainer",
    children: [
      l("div", {
        className: "integrated",
        children: l("span", {
          children: "Integrated tools for professional service providers",
        }),
      }),
      y("div", {
        className: "grid",
        children: [
          y("div", {
            className: "profile-bookings",
            children: [
              y("div", {
                className: "profile",
                children: [
                  y("div", {
                    className: "page",
                    children: [
                      l("span", {
                        className: "profilepage",
                        children: "Profile Page + Services",
                      }),
                      l("span", {
                        className: "profile-p",
                        children:
                          "Create your profile page, add your services with rates for each service",
                      }),
                    ],
                  }),
                  y("div", {
                    className: "image2",
                    children: [
                      l("img", { className: "ronaldprofile", src: Qm }),
                      " ",
                    ],
                  }),
                ],
              }),
              y("div", {
                className: "bookings",
                children: [
                  y("div", {
                    className: "page",
                    children: [
                      l("span", {
                        className: "profilepage",
                        children: "Bookings",
                      }),
                      l("span", {
                        className: "profile-p",
                        children:
                          "Organize your schedule and get customers to book you directly on the app, based on your availability.",
                      }),
                    ],
                  }),
                  l("div", {
                    className: "booknow",
                    children: l("img", { className: "successful", src: Ym }),
                  }),
                ],
              }),
            ],
          }),
          y("div", {
            className: "pbc",
            children: [
              y("div", {
                className: "payment",
                children: [
                  y("div", {
                    className: "page1",
                    children: [
                      l("span", {
                        className: "profilepage",
                        children: "Payments",
                      }),
                      l("span", {
                        className: "profile-p",
                        children:
                          "Accept payments for your services seamlessly",
                      }),
                    ],
                  }),
                  l("img", { className: "group", src: Zm }),
                ],
              }),
              y("div", {
                className: "businesstools",
                children: [
                  y("div", {
                    className: "page1",
                    children: [
                      l("span", {
                        className: "profilepage",
                        children: "Integrated Business Tools",
                      }),
                      l("span", {
                        className: "paragraphtool",
                        children:
                          "Manage your business operations like a pro using business tools such as quotes, invoices, and receipts.",
                      }),
                    ],
                  }),
                  l("img", { className: "businessimage", src: qm }),
                ],
              }),
              y("div", {
                className: "contact",
                children: [
                  y("div", {
                    className: "page1",
                    children: [
                      l("span", {
                        className: "profilepage",
                        children: "Contacts",
                      }),
                      l("span", {
                        className: "paragraph",
                        children:
                          "Manage your contacts effortlessly and see their entire transaction history at a glance.",
                      }),
                    ],
                  }),
                  l("img", { className: "contactimage", src: Km }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Eu = "./assets/LUROUND1-6d5fd5b1.png";
function _f() {
  function e() {
    const n = document.querySelector(".list-menu"),
      r = document.querySelector(".side-bar");
    n &&
      ((r.style.right = "0"),
      r.classList.add("active"),
      r.classList.remove("fade-out"));
  }
  function t() {
    const n = document.querySelector(".dropdown-close"),
      r = document.querySelector(".side-bar");
    n && ((r.style.right = "-500px"), r.classList.add("fade-out"));
  }
  return y("div", {
    className: "imagelist",
    children: [
      l("img", { className: "luround", src: Eu, alt: "Luround Logo" }),
      y("ul", {
        className: "ullist",
        children: [
          l("li", {
            className: "list",
            children: l("button", { className: "login", children: "Log In" }),
          }),
          l("li", {
            className: "list",
            children: l("a", {
              href: "https://play.google.com/store/apps/details?id=com.luround.uppist&pcampaignid=web_share",
              children: l("button", {
                className: "getapp",
                children: "Get the app",
              }),
            }),
          }),
          l("li", {
            className: "list-menu",
            onClick: e,
            children: l("a", {
              className: "dropdown-btn",
              children: l("svg", {
                width: "25",
                height: "24",
                viewBox: "0 0 25 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: l("path", {
                  d: "M3.51709 6C3.51709 5.73478 3.62245 5.48043 3.80998 5.29289C3.99752 5.10536 4.25187 5 4.51709 5H20.5171C20.7823 5 21.0367 5.10536 21.2242 5.29289C21.4117 5.48043 21.5171 5.73478 21.5171 6C21.5171 6.26522 21.4117 6.51957 21.2242 6.70711C21.0367 6.89464 20.7823 7 20.5171 7H4.51709C4.25187 7 3.99752 6.89464 3.80998 6.70711C3.62245 6.51957 3.51709 6.26522 3.51709 6ZM3.51709 12C3.51709 11.7348 3.62245 11.4804 3.80998 11.2929C3.99752 11.1054 4.25187 11 4.51709 11H20.5171C20.7823 11 21.0367 11.1054 21.2242 11.2929C21.4117 11.4804 21.5171 11.7348 21.5171 12C21.5171 12.2652 21.4117 12.5196 21.2242 12.7071C21.0367 12.8946 20.7823 13 20.5171 13H4.51709C4.25187 13 3.99752 12.8946 3.80998 12.7071C3.62245 12.5196 3.51709 12.2652 3.51709 12ZM4.51709 17C4.25187 17 3.99752 17.1054 3.80998 17.2929C3.62245 17.4804 3.51709 17.7348 3.51709 18C3.51709 18.2652 3.62245 18.5196 3.80998 18.7071C3.99752 18.8946 4.25187 19 4.51709 19H20.5171C20.7823 19 21.0367 18.8946 21.2242 18.7071C21.4117 18.5196 21.5171 18.2652 21.5171 18C21.5171 17.7348 21.4117 17.4804 21.2242 17.2929C21.0367 17.1054 20.7823 17 20.5171 17H4.51709Z",
                  fill: "#1D2E2E",
                }),
              }),
            }),
          }),
        ],
      }),
      y("div", {
        className: "side-bar",
        id: "side-bar",
        children: [
          y("div", {
            className: "image-close",
            children: [
              l("img", { className: "image-luround", src: Eu }),
              l("a", {
                className: "dropdown-close",
                id: "sidebar-close",
                onClick: t,
                children: l("svg", {
                  className: "cancel",
                  width: "25",
                  height: "24",
                  viewBox: "0 0 25 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: l("path", {
                    d: "M7.2749 17.243L12.5179 12L17.7609 17.243M17.7609 6.757L12.5169 12L7.2749 6.757",
                    stroke: "#1D2E2E",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
            ],
          }),
          y("ul", {
            className: "sidebar-menu",
            children: [
              l("li", {
                children: l("button", {
                  className: "sidebar-login",
                  children: "Log In",
                }),
              }),
              l("li", {
                children: l("a", {
                  href: "https://play.google.com/store/search?q=luround&c=apps&hl=en",
                  children: l("button", {
                    className: "sidebar-getapp",
                    children: "Get the app",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Xm() {
  return y("div", {
    className: "profilepage1",
    children: [
      l("div", {
        className: "more",
        children: y("span", {
          children: [
            "Get",
            " ",
            l("i", { children: l("b", { children: "MORE" }) }),
            " ",
            "done for",
            " ",
            l("i", { children: l("b", { children: "LESS" }) }),
            " ",
            "with our all-in-one solution",
          ],
        }),
      }),
      l("div", {
        className: "profileall",
        children: l("span", {
          children:
            "Profile Page. Services. Calendar. Bookings. Payments. Invoices. Receipts.",
        }),
      }),
      y("div", {
        children: [
          l("span", {
            className: "platform",
            children: "All in a single platform",
          }),
          y("svg", {
            className: "circle",
            width: "161",
            height: "56",
            viewBox: "0 0 161 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              l("g", {
                clipPath: "url(#clip0_7337_5397)",
                children: l("path", {
                  d: "M158.02 41.6788C143.801 66.1297 7.18083 53.514 1.39902 30.819C-7.71188 -4.94693 116.595 -1.69542 134.312 10.0098C134.968 10.4433 134.861 11.2441 134.312 11.0719C86.2984 -3.99312 -1.15462 5.52277 6.25449 30.819C14.7981 50.0892 154.772 63.8753 155.34 37.3435C155.714 19.8744 93.0449 3.42017 47.7108 8.66578C46.3554 8.44907 47.4227 7.50117 48.909 7.30017C97.5216 1.70187 168.75 18.3506 158.02 41.6788Z",
                  fill: "#D12727",
                }),
              }),
              l("defs", {
                children: l("clipPath", {
                  id: "clip0_7337_5397",
                  children: l("rect", {
                    width: "160",
                    height: "55",
                    fill: "white",
                    transform: "matrix(-1 0 0 -1 160.014 55.9773)",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Cf = {},
  xf = {},
  ml = {},
  Nf = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(Nf);
var Jm = "Expected a function",
  Pu = 0 / 0,
  ey = "[object Symbol]",
  ty = /^\s+|\s+$/g,
  ny = /^[-+]0x[0-9a-f]+$/i,
  ry = /^0b[01]+$/i,
  iy = /^0o[0-7]+$/i,
  ly = parseInt,
  oy = typeof zr == "object" && zr && zr.Object === Object && zr,
  ay = typeof self == "object" && self && self.Object === Object && self,
  sy = oy || ay || Function("return this")(),
  uy = Object.prototype,
  cy = uy.toString,
  dy = Math.max,
  fy = Math.min,
  ql = function () {
    return sy.Date.now();
  };
function py(e, t, n) {
  var r,
    i,
    o,
    a,
    s,
    u,
    c = 0,
    m = !1,
    f = !1,
    v = !0;
  if (typeof e != "function") throw new TypeError(Jm);
  (t = Tu(t) || 0),
    ta(n) &&
      ((m = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? dy(Tu(n.maxWait) || 0, t) : o),
      (v = "trailing" in n ? !!n.trailing : v));
  function k(x) {
    var E = r,
      R = i;
    return (r = i = void 0), (c = x), (a = e.apply(R, E)), a;
  }
  function S(x) {
    return (c = x), (s = setTimeout(p, t)), m ? k(x) : a;
  }
  function g(x) {
    var E = x - u,
      R = x - c,
      O = t - E;
    return f ? fy(O, o - R) : O;
  }
  function b(x) {
    var E = x - u,
      R = x - c;
    return u === void 0 || E >= t || E < 0 || (f && R >= o);
  }
  function p() {
    var x = ql();
    if (b(x)) return d(x);
    s = setTimeout(p, g(x));
  }
  function d(x) {
    return (s = void 0), v && r ? k(x) : ((r = i = void 0), a);
  }
  function h() {
    s !== void 0 && clearTimeout(s), (c = 0), (r = u = i = s = void 0);
  }
  function w() {
    return s === void 0 ? a : d(ql());
  }
  function _() {
    var x = ql(),
      E = b(x);
    if (((r = arguments), (i = this), (u = x), E)) {
      if (s === void 0) return S(u);
      if (f) return (s = setTimeout(p, t)), k(u);
    }
    return s === void 0 && (s = setTimeout(p, t)), a;
  }
  return (_.cancel = h), (_.flush = w), _;
}
function ta(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function hy(e) {
  return !!e && typeof e == "object";
}
function my(e) {
  return typeof e == "symbol" || (hy(e) && cy.call(e) == ey);
}
function Tu(e) {
  if (typeof e == "number") return e;
  if (my(e)) return Pu;
  if (ta(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ta(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(ty, "");
  var n = ry.test(e);
  return n || iy.test(e) ? ly(e.slice(2), n ? 2 : 8) : ny.test(e) ? Pu : +e;
}
var yy = py,
  Of = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (o = i(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var a = "";
      for (var s in o) t.call(o, s) && o[s] && (a = i(a, s));
      return a;
    }
    function i(o, a) {
      return a ? (o ? o + " " + a : o + a) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Of);
var yl = Of.exports,
  P = {},
  ss = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(L);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return t.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return t.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  e.default = r;
})(ss);
Object.defineProperty(P, "__esModule", { value: !0 });
P.checkSpecKeys =
  P.checkNavigable =
  P.changeSlide =
  P.canUseDOM =
  P.canGoNext =
    void 0;
P.clamp = Pf;
P.extractObject = void 0;
P.filterSettings = Ly;
P.validSettings =
  P.swipeStart =
  P.swipeMove =
  P.swipeEnd =
  P.slidesOnRight =
  P.slidesOnLeft =
  P.slideHandler =
  P.siblingDirection =
  P.safePreventDefault =
  P.lazyStartIndex =
  P.lazySlidesOnRight =
  P.lazySlidesOnLeft =
  P.lazyEndIndex =
  P.keyHandler =
  P.initializedState =
  P.getWidth =
  P.getTrackLeft =
  P.getTrackCSS =
  P.getTrackAnimateCSS =
  P.getTotalSlides =
  P.getSwipeDirection =
  P.getSlideCount =
  P.getRequiredLazySlides =
  P.getPreClones =
  P.getPostClones =
  P.getOnDemandLazySlides =
  P.getNavigableIndexes =
  P.getHeight =
    void 0;
var vy = Ef(L),
  gy = Ef(ss);
function Ef(e) {
  return e && e.__esModule ? e : { default: e };
}
function Nr(e) {
  "@babel/helpers - typeof";
  return (
    (Nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nr(e)
  );
}
function Lu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lu(Object(n), !0).forEach(function (r) {
          wy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Lu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function wy(e, t, n) {
  return (
    (t = Sy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Sy(e) {
  var t = ky(e, "string");
  return Nr(t) == "symbol" ? t : String(t);
}
function ky(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pf(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var bn = (P.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  Tf = (P.getOnDemandLazySlides = function (t) {
    for (var n = [], r = Lf(t), i = Rf(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
P.getRequiredLazySlides = function (t) {
  for (var n = [], r = Lf(t), i = Rf(t), o = r; o < i; o++) n.push(o);
  return n;
};
var Lf = (P.lazyStartIndex = function (t) {
    return t.currentSlide - by(t);
  }),
  Rf = (P.lazyEndIndex = function (t) {
    return t.currentSlide + _y(t);
  }),
  by = (P.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  _y = (P.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  na = (P.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  Hf = (P.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  Mf = (P.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      o,
      a;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (o = Math.atan2(i, r)),
      (a = Math.round((o * 180) / Math.PI)),
      a < 0 && (a = 360 - Math.abs(a)),
      (a <= 45 && a >= 0) || (a <= 360 && a >= 315)
        ? "left"
        : a >= 135 && a <= 225
        ? "right"
        : n === !0
        ? a >= 35 && a <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  zf = (P.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  });
P.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
P.initializedState = function (t) {
  var n = vy.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(na(r)),
    o = t.trackRef && t.trackRef.node,
    a = Math.ceil(na(o)),
    s;
  if (t.vertical) s = i;
  else {
    var u = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (u *= i / 100),
      (s = Math.ceil((i - u) / t.slidesToShow));
  }
  var c = r && Hf(r.querySelector('[data-index="0"]')),
    m = c * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var v = t.lazyLoadedList || [],
    k = Tf(Z(Z({}, t), {}, { currentSlide: f, lazyLoadedList: v }));
  v = v.concat(k);
  var S = {
    slideCount: n,
    slideWidth: s,
    listWidth: i,
    trackWidth: a,
    currentSlide: f,
    slideHeight: c,
    listHeight: m,
    lazyLoadedList: v,
  };
  return t.autoplaying === null && t.autoplay && (S.autoplaying = "playing"), S;
};
P.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    a = t.index,
    s = t.slideCount,
    u = t.lazyLoad,
    c = t.currentSlide,
    m = t.centerMode,
    f = t.slidesToScroll,
    v = t.slidesToShow,
    k = t.useCSS,
    S = t.lazyLoadedList;
  if (n && r) return {};
  var g = a,
    b,
    p,
    d,
    h = {},
    w = {},
    _ = o ? a : Pf(a, 0, s - 1);
  if (i) {
    if (!o && (a < 0 || a >= s)) return {};
    a < 0 ? (g = a + s) : a >= s && (g = a - s),
      u && S.indexOf(g) < 0 && (S = S.concat(g)),
      (h = {
        animating: !0,
        currentSlide: g,
        lazyLoadedList: S,
        targetSlide: g,
      }),
      (w = { animating: !1, targetSlide: g });
  } else
    (b = g),
      g < 0
        ? ((b = g + s), o ? s % f !== 0 && (b = s - (s % f)) : (b = 0))
        : !zf(t) && g > c
        ? (g = b = c)
        : m && g >= s
        ? ((g = o ? s : s - 1), (b = o ? 0 : s - 1))
        : g >= s && ((b = g - s), o ? s % f !== 0 && (b = 0) : (b = s - v)),
      !o && g + v >= s && (b = s - v),
      (p = Ai(Z(Z({}, t), {}, { slideIndex: g }))),
      (d = Ai(Z(Z({}, t), {}, { slideIndex: b }))),
      o || (p === d && (g = b), (p = d)),
      u && (S = S.concat(Tf(Z(Z({}, t), {}, { currentSlide: g })))),
      k
        ? ((h = {
            animating: !0,
            currentSlide: b,
            trackStyle: If(Z(Z({}, t), {}, { left: p })),
            lazyLoadedList: S,
            targetSlide: _,
          }),
          (w = {
            animating: !1,
            currentSlide: b,
            trackStyle: Wi(Z(Z({}, t), {}, { left: d })),
            swipeLeft: null,
            targetSlide: _,
          }))
        : (h = {
            currentSlide: b,
            trackStyle: Wi(Z(Z({}, t), {}, { left: d })),
            lazyLoadedList: S,
            targetSlide: _,
          });
  return { state: h, nextState: w };
};
P.changeSlide = function (t, n) {
  var r,
    i,
    o,
    a,
    s,
    u = t.slidesToScroll,
    c = t.slidesToShow,
    m = t.slideCount,
    f = t.currentSlide,
    v = t.targetSlide,
    k = t.lazyLoad,
    S = t.infinite;
  if (((a = m % u !== 0), (r = a ? 0 : (m - f) % u), n.message === "previous"))
    (o = r === 0 ? u : c - r),
      (s = f - o),
      k && !S && ((i = f - o), (s = i === -1 ? m - 1 : i)),
      S || (s = v - u);
  else if (n.message === "next")
    (o = r === 0 ? u : r),
      (s = f + o),
      k && !S && (s = ((f + u) % m) + r),
      S || (s = v + u);
  else if (n.message === "dots") s = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((s = n.index), S)) {
      var g = Oy(Z(Z({}, t), {}, { targetSlide: s }));
      s > n.currentSlide && g === "left"
        ? (s = s - m)
        : s < n.currentSlide && g === "right" && (s = s + m);
    }
  } else n.message === "index" && (s = Number(n.index));
  return s;
};
P.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
P.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && bn(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
P.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    a = n.swipeToSlide,
    s = n.verticalSwiping,
    u = n.rtl,
    c = n.currentSlide,
    m = n.edgeFriction,
    f = n.edgeDragged,
    v = n.onEdge,
    k = n.swiped,
    S = n.swiping,
    g = n.slideCount,
    b = n.slidesToScroll,
    p = n.infinite,
    d = n.touchObject,
    h = n.swipeEvent,
    w = n.listHeight,
    _ = n.listWidth;
  if (!r) {
    if (i) return bn(t);
    o && a && s && bn(t);
    var x,
      E = {},
      R = Ai(n);
    (d.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (d.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (d.swipeLength = Math.round(Math.sqrt(Math.pow(d.curX - d.startX, 2))));
    var O = Math.round(Math.sqrt(Math.pow(d.curY - d.startY, 2)));
    if (!s && !S && O > 10) return { scrolling: !0 };
    s && (d.swipeLength = O);
    var C = (u ? -1 : 1) * (d.curX > d.startX ? 1 : -1);
    s && (C = d.curY > d.startY ? 1 : -1);
    var M = Math.ceil(g / b),
      z = Mf(n.touchObject, s),
      D = d.swipeLength;
    return (
      p ||
        (((c === 0 && (z === "right" || z === "down")) ||
          (c + 1 >= M && (z === "left" || z === "up")) ||
          (!zf(n) && (z === "left" || z === "up"))) &&
          ((D = d.swipeLength * m),
          f === !1 && v && (v(z), (E.edgeDragged = !0)))),
      !k && h && (h(z), (E.swiped = !0)),
      o ? (x = R + D * (w / _) * C) : u ? (x = R - D * C) : (x = R + D * C),
      s && (x = R + D * C),
      (E = Z(
        Z({}, E),
        {},
        {
          touchObject: d,
          swipeLeft: x,
          trackStyle: Wi(Z(Z({}, n), {}, { left: x })),
        }
      )),
      Math.abs(d.curX - d.startX) < Math.abs(d.curY - d.startY) * 0.8 ||
        (d.swipeLength > 10 && ((E.swiping = !0), bn(t))),
      E
    );
  }
};
P.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    a = n.listWidth,
    s = n.touchThreshold,
    u = n.verticalSwiping,
    c = n.listHeight,
    m = n.swipeToSlide,
    f = n.scrolling,
    v = n.onSwipe,
    k = n.targetSlide,
    S = n.currentSlide,
    g = n.infinite;
  if (!r) return i && bn(t), {};
  var b = u ? c / s : a / s,
    p = Mf(o, u),
    d = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !o.swipeLength) return d;
  if (o.swipeLength > b) {
    bn(t), v && v(p);
    var h,
      w,
      _ = g ? S : k;
    switch (p) {
      case "left":
      case "up":
        (w = _ + Hu(n)), (h = m ? Ru(n, w) : w), (d.currentDirection = 0);
        break;
      case "right":
      case "down":
        (w = _ - Hu(n)), (h = m ? Ru(n, w) : w), (d.currentDirection = 1);
        break;
      default:
        h = _;
    }
    d.triggerSlideHandler = h;
  } else {
    var x = Ai(n);
    d.trackStyle = If(Z(Z({}, n), {}, { left: x }));
  }
  return d;
};
var Cy = (P.getNavigableIndexes = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        r = t.infinite ? t.slidesToShow * -1 : 0,
        i = t.infinite ? t.slidesToShow * -1 : 0,
        o = [];
      r < n;

    )
      o.push(r),
        (r = i + t.slidesToScroll),
        (i += Math.min(t.slidesToScroll, t.slidesToShow));
    return o;
  }),
  Ru = (P.checkNavigable = function (t, n) {
    var r = Cy(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var o in r) {
        if (n < r[o]) {
          n = i;
          break;
        }
        i = r[o];
      }
    return n;
  }),
  Hu = (P.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (u) {
          if (t.vertical) {
            if (u.offsetTop + Hf(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
          } else if (u.offsetLeft - n + na(u) / 2 > t.swipeLeft * -1) return (r = u), !1;
          return !0;
        }),
        !r)
      )
        return 0;
      var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        s = Math.abs(r.dataset.index - a) || 1;
      return s;
    } else return t.slidesToScroll;
  }),
  us = (P.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  Wi = (P.getTrackCSS = function (t) {
    us(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = Ny(t) * t.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        s = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        u = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      o = Z(Z({}, o), {}, { WebkitTransform: a, transform: s, msTransform: u });
    } else t.vertical ? (o.top = t.left) : (o.left = t.left);
    return (
      t.fade && (o = { opacity: 1 }),
      n && (o.width = n),
      r && (o.height = r),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (o.marginTop = t.left + "px")
          : (o.marginLeft = t.left + "px")),
      o
    );
  }),
  If = (P.getTrackAnimateCSS = function (t) {
    us(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = Wi(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
        : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  Ai = (P.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    us(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      o = t.centerMode,
      a = t.slideCount,
      s = t.slidesToShow,
      u = t.slidesToScroll,
      c = t.slideWidth,
      m = t.listWidth,
      f = t.variableWidth,
      v = t.slideHeight,
      k = t.fade,
      S = t.vertical,
      g = 0,
      b,
      p,
      d = 0;
    if (k || t.slideCount === 1) return 0;
    var h = 0;
    if (
      (i
        ? ((h = -fi(t)),
          a % u !== 0 && n + u > a && (h = -(n > a ? s - (n - a) : a % u)),
          o && (h += parseInt(s / 2)))
        : (a % u !== 0 && n + u > a && (h = s - (a % u)),
          o && (h = parseInt(s / 2))),
      (g = h * c),
      (d = h * v),
      S ? (b = n * v * -1 + d) : (b = n * c * -1 + g),
      f === !0)
    ) {
      var w,
        _ = r && r.node;
      if (
        ((w = n + fi(t)),
        (p = _ && _.childNodes[w]),
        (b = p ? p.offsetLeft * -1 : 0),
        o === !0)
      ) {
        (w = i ? n + fi(t) : n), (p = _ && _.children[w]), (b = 0);
        for (var x = 0; x < w; x++)
          b -= _ && _.children[x] && _.children[x].offsetWidth;
        (b -= parseInt(t.centerPadding)), (b += p && (m - p.offsetWidth) / 2);
      }
    }
    return b;
  }),
  fi = (P.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  xy = (P.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  Ny = (P.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : fi(t) + t.slideCount + xy(t);
  }),
  Oy = (P.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + Ey(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - Py(t)
      ? "right"
      : "left";
  }),
  Ey = (P.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var a = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (a += 1), i && n % 2 === 0 && (a += 1), a;
    }
    return i ? 0 : n - 1;
  }),
  Py = (P.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var a = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (a += 1), !i && n % 2 === 0 && (a += 1), a;
    }
    return i ? n - 1 : 0;
  });
P.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var Ty = (P.validSettings = Object.keys(gy.default));
function Ly(e) {
  return Ty.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var vl = {};
Object.defineProperty(vl, "__esModule", { value: !0 });
vl.Track = void 0;
var gt = jf(L),
  Kl = jf(yl),
  Yl = P;
function jf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
function ra() {
  return (
    (ra = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ra.apply(this, arguments)
  );
}
function Ry(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Wf(r.key), r);
  }
}
function Hy(e, t, n) {
  return (
    t && Mu(e.prototype, t),
    n && Mu(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function My(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ia(e, t);
}
function ia(e, t) {
  return (
    (ia = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ia(e, t)
  );
}
function zy(e) {
  var t = Df();
  return function () {
    var r = Fi(e),
      i;
    if (t) {
      var o = Fi(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Iy(this, i);
  };
}
function Iy(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return la(e);
}
function la(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Df() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Df = function () {
    return !!e;
  })();
}
function Fi(e) {
  return (
    (Fi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Fi(e)
  );
}
function zu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zu(Object(n), !0).forEach(function (r) {
          oa(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function oa(e, t, n) {
  return (
    (t = Wf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Wf(e) {
  var t = jy(e, "string");
  return Ln(t) == "symbol" ? t : String(t);
}
function jy(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ln(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zl = function (t) {
    var n, r, i, o, a;
    t.rtl ? (a = t.slideCount - 1 - t.index) : (a = t.index),
      (i = a < 0 || a >= t.slideCount),
      t.centerMode
        ? ((o = Math.floor(t.slidesToShow / 2)),
          (r = (a - t.currentSlide) % t.slideCount === 0),
          a > t.currentSlide - o - 1 && a <= t.currentSlide + o && (n = !0))
        : (n = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow);
    var s;
    t.targetSlide < 0
      ? (s = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (s = t.targetSlide - t.slideCount)
      : (s = t.targetSlide);
    var u = a === s;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": u,
    };
  },
  Dy = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  Gl = function (t, n) {
    return t.key || n;
  },
  Wy = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      a = gt.default.Children.count(t.children),
      s = (0, Yl.lazyStartIndex)(t),
      u = (0, Yl.lazyEndIndex)(t);
    return (
      gt.default.Children.forEach(t.children, function (c, m) {
        var f,
          v = {
            message: "children",
            index: m,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(m) >= 0)
          ? (f = c)
          : (f = gt.default.createElement("div", null));
        var k = Dy(Ce(Ce({}, t), {}, { index: m })),
          S = f.props.className || "",
          g = Zl(Ce(Ce({}, t), {}, { index: m }));
        if (
          (r.push(
            gt.default.cloneElement(f, {
              key: "original" + Gl(f, m),
              "data-index": m,
              className: (0, Kl.default)(g, S),
              tabIndex: "-1",
              "aria-hidden": !g["slick-active"],
              style: Ce(Ce({ outline: "none" }, f.props.style || {}), k),
              onClick: function (d) {
                f.props && f.props.onClick && f.props.onClick(d),
                  t.focusOnSelect && t.focusOnSelect(v);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var b = a - m;
          b <= (0, Yl.getPreClones)(t) &&
            ((n = -b),
            n >= s && (f = c),
            (g = Zl(Ce(Ce({}, t), {}, { index: n }))),
            i.push(
              gt.default.cloneElement(f, {
                key: "precloned" + Gl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Kl.default)(g, S),
                "aria-hidden": !g["slick-active"],
                style: Ce(Ce({}, f.props.style || {}), k),
                onClick: function (d) {
                  f.props && f.props.onClick && f.props.onClick(d),
                    t.focusOnSelect && t.focusOnSelect(v);
                },
              })
            )),
            (n = a + m),
            n < u && (f = c),
            (g = Zl(Ce(Ce({}, t), {}, { index: n }))),
            o.push(
              gt.default.cloneElement(f, {
                key: "postcloned" + Gl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Kl.default)(g, S),
                "aria-hidden": !g["slick-active"],
                style: Ce(Ce({}, f.props.style || {}), k),
                onClick: function (d) {
                  f.props && f.props.onClick && f.props.onClick(d),
                    t.focusOnSelect && t.focusOnSelect(v);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  };
vl.Track = (function (e) {
  My(n, e);
  var t = zy(n);
  function n() {
    var r;
    Ry(this, n);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      oa(la(r), "node", null),
      oa(la(r), "handleRef", function (s) {
        r.node = s;
      }),
      r
    );
  }
  return (
    Hy(n, [
      {
        key: "render",
        value: function () {
          var i = Wy(this.props),
            o = this.props,
            a = o.onMouseEnter,
            s = o.onMouseOver,
            u = o.onMouseLeave,
            c = { onMouseEnter: a, onMouseOver: s, onMouseLeave: u };
          return gt.default.createElement(
            "div",
            ra(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              c
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(gt.default.PureComponent);
var gl = {};
function Rn(e) {
  "@babel/helpers - typeof";
  return (
    (Rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Rn(e)
  );
}
Object.defineProperty(gl, "__esModule", { value: !0 });
gl.Dots = void 0;
var Jr = Af(L),
  Ay = Af(yl),
  Iu = P;
function Af(e) {
  return e && e.__esModule ? e : { default: e };
}
function ju(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ju(Object(n), !0).forEach(function (r) {
          Uy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ju(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Uy(e, t, n) {
  return (
    (t = Ff(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $y(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Du(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Ff(r.key), r);
  }
}
function By(e, t, n) {
  return (
    t && Du(e.prototype, t),
    n && Du(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ff(e) {
  var t = Vy(e, "string");
  return Rn(t) == "symbol" ? t : String(t);
}
function Vy(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && aa(e, t);
}
function aa(e, t) {
  return (
    (aa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    aa(e, t)
  );
}
function qy(e) {
  var t = Uf();
  return function () {
    var r = Ui(e),
      i;
    if (t) {
      var o = Ui(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Ky(this, i);
  };
}
function Ky(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Yy(e);
}
function Yy(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Uf() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Uf = function () {
    return !!e;
  })();
}
function Ui(e) {
  return (
    (Ui = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ui(e)
  );
}
var Zy = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
gl.Dots = (function (e) {
  Qy(n, e);
  var t = qy(n);
  function n() {
    return $y(this, n), t.apply(this, arguments);
  }
  return (
    By(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
              o = i.onMouseEnter,
              a = i.onMouseOver,
              s = i.onMouseLeave,
              u = i.infinite,
              c = i.slidesToScroll,
              m = i.slidesToShow,
              f = i.slideCount,
              v = i.currentSlide,
              k = Zy({
                slideCount: f,
                slidesToScroll: c,
                slidesToShow: m,
                infinite: u,
              }),
              S = { onMouseEnter: o, onMouseOver: a, onMouseLeave: s },
              g = [],
              b = 0;
            b < k;
            b++
          ) {
            var p = (b + 1) * c - 1,
              d = u ? p : (0, Iu.clamp)(p, 0, f - 1),
              h = d - (c - 1),
              w = u ? h : (0, Iu.clamp)(h, 0, f - 1),
              _ = (0, Ay.default)({
                "slick-active": u ? v >= w && v <= d : v === w,
              }),
              x = {
                message: "dots",
                index: b,
                slidesToScroll: c,
                currentSlide: v,
              },
              E = this.clickHandler.bind(this, x);
            g = g.concat(
              Jr.default.createElement(
                "li",
                { key: b, className: _ },
                Jr.default.cloneElement(this.props.customPaging(b), {
                  onClick: E,
                })
              )
            );
          }
          return Jr.default.cloneElement(
            this.props.appendDots(g),
            Fy({ className: this.props.dotsClass }, S)
          );
        },
      },
    ]),
    n
  );
})(Jr.default.PureComponent);
var Hn = {};
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.PrevArrow = Hn.NextArrow = void 0;
var _n = Bf(L),
  $f = Bf(yl),
  Gy = P;
function Bf(e) {
  return e && e.__esModule ? e : { default: e };
}
function $i() {
  return (
    ($i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $i.apply(this, arguments)
  );
}
function Wu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wu(Object(n), !0).forEach(function (r) {
          Xy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Wu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xy(e, t, n) {
  return (
    (t = qf(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Au(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, qf(r.key), r);
  }
}
function Qf(e, t, n) {
  return (
    t && Au(e.prototype, t),
    n && Au(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qf(e) {
  var t = Jy(e, "string");
  return Mn(t) == "symbol" ? t : String(t);
}
function Jy(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Mn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && sa(e, t);
}
function sa(e, t) {
  return (
    (sa = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    sa(e, t)
  );
}
function Yf(e) {
  var t = Zf();
  return function () {
    var r = Vi(e),
      i;
    if (t) {
      var o = Vi(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return ev(this, i);
  };
}
function ev(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return tv(e);
}
function tv(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Zf() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Zf = function () {
    return !!e;
  })();
}
function Vi(e) {
  return (
    (Vi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Vi(e)
  );
}
Hn.PrevArrow = (function (e) {
  Kf(n, e);
  var t = Yf(n);
  function n() {
    return Vf(this, n), t.apply(this, arguments);
  }
  return (
    Qf(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var a = {
              key: "0",
              "data-role": "none",
              className: (0, $f.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.prevArrow
              ? (u = _n.default.cloneElement(
                  this.props.prevArrow,
                  Bi(Bi({}, a), s)
                ))
              : (u = _n.default.createElement(
                  "button",
                  $i({ key: "0", type: "button" }, a),
                  " ",
                  "Previous"
                )),
            u
          );
        },
      },
    ]),
    n
  );
})(_n.default.PureComponent);
Hn.NextArrow = (function (e) {
  Kf(n, e);
  var t = Yf(n);
  function n() {
    return Vf(this, n), t.apply(this, arguments);
  }
  return (
    Qf(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, Gy.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var a = {
              key: "1",
              "data-role": "none",
              className: (0, $f.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            u;
          return (
            this.props.nextArrow
              ? (u = _n.default.cloneElement(
                  this.props.nextArrow,
                  Bi(Bi({}, a), s)
                ))
              : (u = _n.default.createElement(
                  "button",
                  $i({ key: "1", type: "button" }, a),
                  " ",
                  "Next"
                )),
            u
          );
        },
      },
    ]),
    n
  );
})(_n.default.PureComponent);
var Gf = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var a = o[i];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  ua =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Qi = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  nv = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Qi)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  rv = 2;
function iv(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && s();
  }
  function a() {
    nv(o);
  }
  function s() {
    var u = Date.now();
    if (n) {
      if (u - i < rv) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    i = u;
  }
  return s;
}
var lv = 20,
  ov = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  av = typeof MutationObserver < "u",
  sv = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = iv(this.refresh.bind(this), lv));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !ua ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          av
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !ua ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = ov.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Xf = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  zn = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Qi;
  },
  Jf = wl(0, 0, 0, 0);
function qi(e) {
  return parseFloat(e) || 0;
}
function Fu(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + qi(o);
  }, 0);
}
function uv(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      a = e["padding-" + o];
    n[o] = qi(a);
  }
  return n;
}
function cv(e) {
  var t = e.getBBox();
  return wl(0, 0, t.width, t.height);
}
function dv(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Jf;
  var r = zn(e).getComputedStyle(e),
    i = uv(r),
    o = i.left + i.right,
    a = i.top + i.bottom,
    s = qi(r.width),
    u = qi(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(s + o) !== t && (s -= Fu(r, "left", "right") + o),
      Math.round(u + a) !== n && (u -= Fu(r, "top", "bottom") + a)),
    !pv(e))
  ) {
    var c = Math.round(s + o) - t,
      m = Math.round(u + a) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(m) !== 1 && (u -= m);
  }
  return wl(i.left, i.top, s, u);
}
var fv = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof zn(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof zn(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function pv(e) {
  return e === zn(e).document.documentElement;
}
function hv(e) {
  return ua ? (fv(e) ? cv(e) : dv(e)) : Jf;
}
function mv(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    a = Object.create(o.prototype);
  return (
    Xf(a, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    a
  );
}
function wl(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var yv = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = wl(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = hv(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  vv = (function () {
    function e(t, n) {
      var r = mv(n);
      Xf(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  gv = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Gf()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof zn(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new yv(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof zn(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new vv(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  ep = typeof WeakMap < "u" ? new WeakMap() : new Gf(),
  tp = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = sv.getInstance(),
        r = new gv(t, n, this);
      ep.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  tp.prototype[e] = function () {
    var t;
    return (t = ep.get(this))[e].apply(t, arguments);
  };
});
var wv = (function () {
  return typeof Qi.ResizeObserver < "u" ? Qi.ResizeObserver : tp;
})();
const Sv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wv },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kv = op(Sv);
Object.defineProperty(ml, "__esModule", { value: !0 });
ml.InnerSlider = void 0;
var we = Hr(L),
  bv = Hr(Nf),
  _v = Hr(yy),
  Cv = Hr(yl),
  X = P,
  xv = vl,
  Nv = gl,
  Uu = Hn,
  Ov = Hr(kv);
function Hr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gt(e) {
  "@babel/helpers - typeof";
  return (
    (Gt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gt(e)
  );
}
function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
function Ev(e, t) {
  if (e == null) return {};
  var n = Pv(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Pv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $u(Object(n), !0).forEach(function (r) {
          U(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $u(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Tv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, rp(r.key), r);
  }
}
function Lv(e, t, n) {
  return (
    t && Bu(e.prototype, t),
    n && Bu(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Rv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ca(e, t);
}
function ca(e, t) {
  return (
    (ca = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ca(e, t)
  );
}
function Hv(e) {
  var t = np();
  return function () {
    var r = Yi(e),
      i;
    if (t) {
      var o = Yi(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mv(this, i);
  };
}
function Mv(e, t) {
  if (t && (Gt(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return F(e);
}
function F(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function np() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (np = function () {
    return !!e;
  })();
}
function Yi(e) {
  return (
    (Yi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Yi(e)
  );
}
function U(e, t, n) {
  return (
    (t = rp(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rp(e) {
  var t = zv(e, "string");
  return Gt(t) == "symbol" ? t : String(t);
}
function zv(e, t) {
  if (Gt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
ml.InnerSlider = (function (e) {
  Rv(n, e);
  var t = Hv(n);
  function n(r) {
    var i;
    Tv(this, n),
      (i = t.call(this, r)),
      U(F(i), "listRefHandler", function (a) {
        return (i.list = a);
      }),
      U(F(i), "trackRefHandler", function (a) {
        return (i.track = a);
      }),
      U(F(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var a = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, X.getHeight)(a) + "px";
        }
      }),
      U(F(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var a = (0, X.getOnDemandLazySlides)(j(j({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (u) {
              return { lazyLoadedList: u.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        var s = j({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(s, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new Ov.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (u) {
                (u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      U(F(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (a) {
              return clearTimeout(a);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      U(F(i), "componentDidUpdate", function (a) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var s = (0, X.getOnDemandLazySlides)(j(j({}, i.props), i.state));
          s.length > 0 &&
            (i.setState(function (m) {
              return { lazyLoadedList: m.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s));
        }
        i.adaptHeight();
        var u = j(j({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          c = i.didPropsChange(a);
        c &&
          i.updateState(u, c, function () {
            i.state.currentSlide >=
              we.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  we.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      U(F(i), "onWindowResized", function (a) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, _v.default)(function () {
            return i.resizeWindow(a);
          }, 50)),
          i.debouncedResize();
      }),
      U(F(i), "resizeWindow", function () {
        var a =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          s = !!(i.track && i.track.node);
        if (s) {
          var u = j(
            j({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(u, a, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      U(F(i), "updateState", function (a, s, u) {
        var c = (0, X.initializedState)(a);
        a = j(j(j({}, a), c), {}, { slideIndex: c.currentSlide });
        var m = (0, X.getTrackLeft)(a);
        a = j(j({}, a), {}, { left: m });
        var f = (0, X.getTrackCSS)(a);
        (s ||
          we.default.Children.count(i.props.children) !==
            we.default.Children.count(a.children)) &&
          (c.trackStyle = f),
          i.setState(c, u);
      }),
      U(F(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var a = 0,
            s = 0,
            u = [],
            c = (0, X.getPreClones)(
              j(
                j(j({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            m = (0, X.getPostClones)(
              j(
                j(j({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (E) {
            u.push(E.props.style.width), (a += E.props.style.width);
          });
          for (var f = 0; f < c; f++)
            (s += u[u.length - 1 - f]), (a += u[u.length - 1 - f]);
          for (var v = 0; v < m; v++) a += u[v];
          for (var k = 0; k < i.state.currentSlide; k++) s += u[k];
          var S = { width: a + "px", left: -s + "px" };
          if (i.props.centerMode) {
            var g = "".concat(u[i.state.currentSlide], "px");
            S.left = "calc("
              .concat(S.left, " + (100% - ")
              .concat(g, ") / 2 ) ");
          }
          return { trackStyle: S };
        }
        var b = we.default.Children.count(i.props.children),
          p = j(j(j({}, i.props), i.state), {}, { slideCount: b }),
          d = (0, X.getPreClones)(p) + (0, X.getPostClones)(p) + b,
          h = (100 / i.props.slidesToShow) * d,
          w = 100 / d,
          _ = (-w * ((0, X.getPreClones)(p) + i.state.currentSlide) * h) / 100;
        i.props.centerMode && (_ += (100 - (w * h) / 100) / 2);
        var x = { width: h + "%", left: _ + "%" };
        return { slideWidth: w + "%", trackStyle: x };
      }),
      U(F(i), "checkImagesLoad", function () {
        var a =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          s = a.length,
          u = 0;
        Array.prototype.forEach.call(a, function (c) {
          var m = function () {
            return ++u && u >= s && i.onWindowResized();
          };
          if (!c.onclick)
            c.onclick = function () {
              return c.parentNode.focus();
            };
          else {
            var f = c.onclick;
            c.onclick = function (v) {
              f(v), c.parentNode.focus();
            };
          }
          c.onload ||
            (i.props.lazyLoad
              ? (c.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((c.onload = m),
                (c.onerror = function () {
                  m(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      U(F(i), "progressiveLazyLoad", function () {
        for (
          var a = [], s = j(j({}, i.props), i.state), u = i.state.currentSlide;
          u < i.state.slideCount + (0, X.getPostClones)(s);
          u++
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            a.push(u);
            break;
          }
        for (
          var c = i.state.currentSlide - 1;
          c >= -(0, X.getPreClones)(s);
          c--
        )
          if (i.state.lazyLoadedList.indexOf(c) < 0) {
            a.push(c);
            break;
          }
        a.length > 0
          ? (i.setState(function (m) {
              return { lazyLoadedList: m.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      U(F(i), "slideHandler", function (a) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = i.props,
          c = u.asNavFor,
          m = u.beforeChange,
          f = u.onLazyLoad,
          v = u.speed,
          k = u.afterChange,
          S = i.state.currentSlide,
          g = (0, X.slideHandler)(
            j(
              j(j({ index: a }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !s }
            )
          ),
          b = g.state,
          p = g.nextState;
        if (b) {
          m && m(S, b.currentSlide);
          var d = b.lazyLoadedList.filter(function (h) {
            return i.state.lazyLoadedList.indexOf(h) < 0;
          });
          f && d.length > 0 && f(d),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              k && k(S),
              delete i.animationEndCallback),
            i.setState(b, function () {
              c &&
                i.asNavForIndex !== a &&
                ((i.asNavForIndex = a), c.innerSlider.slideHandler(a)),
                p &&
                  (i.animationEndCallback = setTimeout(function () {
                    var h = p.animating,
                      w = Ev(p, ["animating"]);
                    i.setState(w, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: h });
                        }, 10)
                      ),
                        k && k(b.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, v));
            });
        }
      }),
      U(F(i), "changeSlide", function (a) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          u = j(j({}, i.props), i.state),
          c = (0, X.changeSlide)(u, a);
        if (
          !(c !== 0 && !c) &&
          (s === !0 ? i.slideHandler(c, s) : i.slideHandler(c),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var m = i.list.querySelectorAll(".slick-current");
          m[0] && m[0].focus();
        }
      }),
      U(F(i), "clickHandler", function (a) {
        i.clickable === !1 && (a.stopPropagation(), a.preventDefault()),
          (i.clickable = !0);
      }),
      U(F(i), "keyHandler", function (a) {
        var s = (0, X.keyHandler)(a, i.props.accessibility, i.props.rtl);
        s !== "" && i.changeSlide({ message: s });
      }),
      U(F(i), "selectHandler", function (a) {
        i.changeSlide(a);
      }),
      U(F(i), "disableBodyScroll", function () {
        var a = function (u) {
          (u = u || window.event),
            u.preventDefault && u.preventDefault(),
            (u.returnValue = !1);
        };
        window.ontouchmove = a;
      }),
      U(F(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      U(F(i), "swipeStart", function (a) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var s = (0, X.swipeStart)(a, i.props.swipe, i.props.draggable);
        s !== "" && i.setState(s);
      }),
      U(F(i), "swipeMove", function (a) {
        var s = (0, X.swipeMove)(
          a,
          j(
            j(j({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        s && (s.swiping && (i.clickable = !1), i.setState(s));
      }),
      U(F(i), "swipeEnd", function (a) {
        var s = (0, X.swipeEnd)(
          a,
          j(
            j(j({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (s) {
          var u = s.triggerSlideHandler;
          delete s.triggerSlideHandler,
            i.setState(s),
            u !== void 0 &&
              (i.slideHandler(u),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      U(F(i), "touchEnd", function (a) {
        i.swipeEnd(a), (i.clickable = !0);
      }),
      U(F(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      U(F(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      U(F(i), "slickGoTo", function (a) {
        var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((a = Number(a)), isNaN(a))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: a,
                currentSlide: i.state.currentSlide,
              },
              s
            );
          }, 0)
        );
      }),
      U(F(i), "play", function () {
        var a;
        if (i.props.rtl) a = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, X.canGoNext)(j(j({}, i.props), i.state)))
          a = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(a);
      }),
      U(F(i), "autoPlay", function (a) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var s = i.state.autoplaying;
        if (a === "update") {
          if (s === "hovered" || s === "focused" || s === "paused") return;
        } else if (a === "leave") {
          if (s === "paused" || s === "focused") return;
        } else if (a === "blur" && (s === "paused" || s === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      U(F(i), "pause", function (a) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var s = i.state.autoplaying;
        a === "paused"
          ? i.setState({ autoplaying: "paused" })
          : a === "focused"
          ? (s === "hovered" || s === "playing") &&
            i.setState({ autoplaying: "focused" })
          : s === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      U(F(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      U(F(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      U(F(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      U(F(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      U(F(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      U(F(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      U(F(i), "render", function () {
        var a = (0, Cv.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          s = j(j({}, i.props), i.state),
          u = (0, X.extractObject)(s, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          c = i.props.pauseOnHover;
        u = j(
          j({}, u),
          {},
          {
            onMouseEnter: c ? i.onTrackOver : null,
            onMouseLeave: c ? i.onTrackLeave : null,
            onMouseOver: c ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var m;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var f = (0, X.extractObject)(s, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            v = i.props.pauseOnDotsHover;
          (f = j(
            j({}, f),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: v ? i.onDotsLeave : null,
              onMouseOver: v ? i.onDotsOver : null,
              onMouseLeave: v ? i.onDotsLeave : null,
            }
          )),
            (m = we.default.createElement(Nv.Dots, f));
        }
        var k,
          S,
          g = (0, X.extractObject)(s, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (g.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((k = we.default.createElement(Uu.PrevArrow, g)),
            (S = we.default.createElement(Uu.NextArrow, g)));
        var b = null;
        i.props.vertical && (b = { height: i.state.listHeight });
        var p = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (p = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (p = { padding: i.props.centerPadding + " 0px" });
        var d = j(j({}, b), p),
          h = i.props.touchMove,
          w = {
            className: "slick-list",
            style: d,
            onClick: i.clickHandler,
            onMouseDown: h ? i.swipeStart : null,
            onMouseMove: i.state.dragging && h ? i.swipeMove : null,
            onMouseUp: h ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && h ? i.swipeEnd : null,
            onTouchStart: h ? i.swipeStart : null,
            onTouchMove: i.state.dragging && h ? i.swipeMove : null,
            onTouchEnd: h ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && h ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          _ = { className: a, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((w = { className: "slick-list" }), (_ = { className: a })),
          we.default.createElement(
            "div",
            _,
            i.props.unslick ? "" : k,
            we.default.createElement(
              "div",
              Ki({ ref: i.listRefHandler }, w),
              we.default.createElement(
                xv.Track,
                Ki({ ref: i.trackRefHandler }, u),
                i.props.children
              )
            ),
            i.props.unslick ? "" : S,
            i.props.unslick ? "" : m
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = j(
        j({}, bv.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: we.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = j(j({}, i.state), o)), i;
  }
  return (
    Lv(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, a = 0, s = Object.keys(this.props);
            a < s.length;
            a++
          ) {
            var u = s[a];
            if (!i.hasOwnProperty(u)) {
              o = !0;
              break;
            }
            if (
              !(
                Gt(i[u]) === "object" ||
                typeof i[u] == "function" ||
                isNaN(i[u])
              ) &&
              i[u] !== this.props[u]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            we.default.Children.count(this.props.children) !==
              we.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(we.default.Component);
var Iv = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  jv = Iv,
  Dv = jv,
  Wv = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  Vu = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = Dv(r)),
          Wv(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  Av = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += Vu(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : Vu(e);
  },
  Fv = Av,
  Xl,
  Qu;
function Uv() {
  if (Qu) return Xl;
  Qu = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (Xl = e),
    Xl
  );
}
var Jl, qu;
function ip() {
  if (qu) return Jl;
  qu = 1;
  function e(r, i) {
    var o = 0,
      a = r.length,
      s;
    for (o; o < a && ((s = i(r[o], o)), s !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (Jl = { isFunction: n, isArray: t, each: e }), Jl;
}
var eo, Ku;
function $v() {
  if (Ku) return eo;
  Ku = 1;
  var e = Uv(),
    t = ip().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (a) {
      (o.mql = a.currentTarget || a), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, a) {
          if (o.equals(r)) return o.destroy(), !i.splice(a, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (eo = n),
    eo
  );
}
var to, Yu;
function Bv() {
  if (Yu) return to;
  Yu = 1;
  var e = $v(),
    t = ip(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (a, s, u) {
        var c = this.queries,
          m = u && this.browserIsIncapable;
        return (
          c[a] || (c[a] = new e(a, m)),
          r(s) && (s = { match: s }),
          i(s) || (s = [s]),
          n(s, function (f) {
            r(f) && (f = { match: f }), c[a].addHandler(f);
          }),
          this
        );
      },
      unregister: function (a, s) {
        var u = this.queries[a];
        return (
          u && (s ? u.removeHandler(s) : (u.clear(), delete this.queries[a])),
          this
        );
      },
    }),
    (to = o),
    to
  );
}
var no, Zu;
function Vv() {
  if (Zu) return no;
  Zu = 1;
  var e = Bv();
  return (no = new e()), no;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = a(L),
    n = ml,
    r = a(Fv),
    i = a(ss),
    o = P;
  function a(O) {
    return O && O.__esModule ? O : { default: O };
  }
  function s(O) {
    "@babel/helpers - typeof";
    return (
      (s =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (C) {
              return typeof C;
            }
          : function (C) {
              return C &&
                typeof Symbol == "function" &&
                C.constructor === Symbol &&
                C !== Symbol.prototype
                ? "symbol"
                : typeof C;
            }),
      s(O)
    );
  }
  function u() {
    return (
      (u = Object.assign
        ? Object.assign.bind()
        : function (O) {
            for (var C = 1; C < arguments.length; C++) {
              var M = arguments[C];
              for (var z in M)
                Object.prototype.hasOwnProperty.call(M, z) && (O[z] = M[z]);
            }
            return O;
          }),
      u.apply(this, arguments)
    );
  }
  function c(O, C) {
    var M = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(O);
      C &&
        (z = z.filter(function (D) {
          return Object.getOwnPropertyDescriptor(O, D).enumerable;
        })),
        M.push.apply(M, z);
    }
    return M;
  }
  function m(O) {
    for (var C = 1; C < arguments.length; C++) {
      var M = arguments[C] != null ? arguments[C] : {};
      C % 2
        ? c(Object(M), !0).forEach(function (z) {
            _(O, z, M[z]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(M))
        : c(Object(M)).forEach(function (z) {
            Object.defineProperty(O, z, Object.getOwnPropertyDescriptor(M, z));
          });
    }
    return O;
  }
  function f(O, C) {
    if (!(O instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function v(O, C) {
    for (var M = 0; M < C.length; M++) {
      var z = C[M];
      (z.enumerable = z.enumerable || !1),
        (z.configurable = !0),
        "value" in z && (z.writable = !0),
        Object.defineProperty(O, x(z.key), z);
    }
  }
  function k(O, C, M) {
    return (
      C && v(O.prototype, C),
      M && v(O, M),
      Object.defineProperty(O, "prototype", { writable: !1 }),
      O
    );
  }
  function S(O, C) {
    if (typeof C != "function" && C !== null)
      throw new TypeError("Super expression must either be null or a function");
    (O.prototype = Object.create(C && C.prototype, {
      constructor: { value: O, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(O, "prototype", { writable: !1 }),
      C && g(O, C);
  }
  function g(O, C) {
    return (
      (g = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (z, D) {
            return (z.__proto__ = D), z;
          }),
      g(O, C)
    );
  }
  function b(O) {
    var C = h();
    return function () {
      var z = w(O),
        D;
      if (C) {
        var W = w(this).constructor;
        D = Reflect.construct(z, arguments, W);
      } else D = z.apply(this, arguments);
      return p(this, D);
    };
  }
  function p(O, C) {
    if (C && (s(C) === "object" || typeof C == "function")) return C;
    if (C !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return d(O);
  }
  function d(O) {
    if (O === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return O;
  }
  function h() {
    try {
      var O = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (h = function () {
      return !!O;
    })();
  }
  function w(O) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (M) {
            return M.__proto__ || Object.getPrototypeOf(M);
          }),
      w(O)
    );
  }
  function _(O, C, M) {
    return (
      (C = x(C)),
      C in O
        ? Object.defineProperty(O, C, {
            value: M,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (O[C] = M),
      O
    );
  }
  function x(O) {
    var C = E(O, "string");
    return s(C) == "symbol" ? C : String(C);
  }
  function E(O, C) {
    if (s(O) != "object" || !O) return O;
    var M = O[Symbol.toPrimitive];
    if (M !== void 0) {
      var z = M.call(O, C || "default");
      if (s(z) != "object") return z;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(O);
  }
  var R = (0, o.canUseDOM)() && Vv();
  e.default = (function (O) {
    S(M, O);
    var C = b(M);
    function M(z) {
      var D;
      return (
        f(this, M),
        (D = C.call(this, z)),
        _(d(D), "innerSliderRefHandler", function (W) {
          return (D.innerSlider = W);
        }),
        _(d(D), "slickPrev", function () {
          return D.innerSlider.slickPrev();
        }),
        _(d(D), "slickNext", function () {
          return D.innerSlider.slickNext();
        }),
        _(d(D), "slickGoTo", function (W) {
          var nt =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return D.innerSlider.slickGoTo(W, nt);
        }),
        _(d(D), "slickPause", function () {
          return D.innerSlider.pause("paused");
        }),
        _(d(D), "slickPlay", function () {
          return D.innerSlider.autoPlay("play");
        }),
        (D.state = { breakpoint: null }),
        (D._responsiveMediaHandlers = []),
        D
      );
    }
    return (
      k(M, [
        {
          key: "media",
          value: function (D, W) {
            R.register(D, W),
              this._responsiveMediaHandlers.push({ query: D, handler: W });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var D = this;
            if (this.props.responsive) {
              var W = this.props.responsive.map(function (le) {
                return le.breakpoint;
              });
              W.sort(function (le, Te) {
                return le - Te;
              }),
                W.forEach(function (le, Te) {
                  var T;
                  Te === 0
                    ? (T = (0, r.default)({ minWidth: 0, maxWidth: le }))
                    : (T = (0, r.default)({
                        minWidth: W[Te - 1] + 1,
                        maxWidth: le,
                      })),
                    (0, o.canUseDOM)() &&
                      D.media(T, function () {
                        D.setState({ breakpoint: le });
                      });
                });
              var nt = (0, r.default)({ minWidth: W.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(nt, function () {
                  D.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (D) {
              R.unregister(D.query, D.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var D = this,
              W,
              nt;
            this.state.breakpoint
              ? ((nt = this.props.responsive.filter(function (it) {
                  return it.breakpoint === D.state.breakpoint;
                })),
                (W =
                  nt[0].settings === "unslick"
                    ? "unslick"
                    : m(m(m({}, i.default), this.props), nt[0].settings)))
              : (W = m(m({}, i.default), this.props)),
              W.centerMode && (W.slidesToScroll > 1, (W.slidesToScroll = 1)),
              W.fade &&
                (W.slidesToShow > 1,
                W.slidesToScroll > 1,
                (W.slidesToShow = 1),
                (W.slidesToScroll = 1));
            var le = t.default.Children.toArray(this.props.children);
            (le = le.filter(function (it) {
              return typeof it == "string" ? !!it.trim() : !!it;
            })),
              W.variableWidth &&
                (W.rows > 1 || W.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (W.variableWidth = !1));
            for (
              var Te = [], T = null, I = 0;
              I < le.length;
              I += W.rows * W.slidesPerRow
            ) {
              for (
                var A = [], Q = I;
                Q < I + W.rows * W.slidesPerRow;
                Q += W.slidesPerRow
              ) {
                for (
                  var re = [], je = Q;
                  je < Q + W.slidesPerRow &&
                  (W.variableWidth &&
                    le[je].props.style &&
                    (T = le[je].props.style.width),
                  !(je >= le.length));
                  je += 1
                )
                  re.push(
                    t.default.cloneElement(le[je], {
                      key: 100 * I + 10 * Q + je,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / W.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                A.push(t.default.createElement("div", { key: 10 * I + Q }, re));
              }
              W.variableWidth
                ? Te.push(
                    t.default.createElement(
                      "div",
                      { key: I, style: { width: T } },
                      A
                    )
                  )
                : Te.push(t.default.createElement("div", { key: I }, A));
            }
            if (W === "unslick") {
              var rt = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: rt }, le);
            } else
              Te.length <= W.slidesToShow && !W.infinite && (W.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              u(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(W)
              ),
              Te
            );
          },
        },
      ]),
      M
    );
  })(t.default.Component);
})(xf);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(xf);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(Cf);
const Qv = Gu(Cf),
  qv = [
    {
      review:
        "“As a small business owner, managing appointments and payments used to be a hassle. Since switching to Luround, my operations have become so much smoother. The calendar and booking features are intuitive, and my clients love the convenience.”",
      image: "Ellipse1.png",
      name: "Alex Udom",
      Occupation: "Owner of Serenity Spa",
    },
    {
      review:
        "“I’ve tried several platforms, but none have matched the simplicity and functionality of Luround. The invoicing system saves me hours each week, and I can track everything from one dashboard. It’s exactly what I needed to keep my business running smoothly.”",
      image: "Ellipse2.png",
      name: "Tolutope Akinde",
      Occupation: "Freelance Consultant",
    },
    {
      review:
        "‘The ability to manage my profile, services, and bookings all in one place has made a huge difference. My clients appreciate the seamless booking process, and I love how easy it is to stay organized with the calendar feature. I highly recommend Luround to anyone looking to elevate their business.”",
      image: "Ellipse3.png",
      name: "Jennifer Nduka",
      Occupation: "Personal Trainer",
    },
    {
      review:
        "“Luround not only offers all the features I need, but the customer support is outstanding. Whenever I’ve had questions, the team has been quick to respond and incredibly helpful. This platform has truly enhanced my business operations.”",
      image: "Ellipse4.png",
      name: "Chinedu Akin",
      Occupation: "Marketing Consultant",
    },
  ];
function Kv() {
  const e = L.useRef(null);
  return y("div", {
    className: "review",
    children: [
      y("div", {
        className: "help-list",
        children: [
          l("span", {
            className: "help",
            children: "See how Luround has helped others",
          }),
          y("ul", {
            className: "arrow",
            children: [
              l("li", {
                children: y("svg", {
                  onClick: () => {
                    e.current.slickPrev();
                  },
                  className: "arrow-left",
                  width: "32",
                  height: "33",
                  viewBox: "0 0 32 33",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    l("path", {
                      d: "M5.6665 17.3434L25.6665 17.3434",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    l("path", {
                      d: "M13.7329 25.3759L5.66624 17.3439L13.7329 9.31055",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
              }),
              l("li", {
                children: y("svg", {
                  onClick: () => {
                    e.current.slickNext();
                  },
                  className: "arrow-right",
                  width: "32",
                  height: "33",
                  viewBox: "0 0 32 33",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    l("path", {
                      d: "M5.6665 17.3434L25.6665 17.3434",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    l("path", {
                      d: "M13.7329 25.3759L5.66624 17.3439L13.7329 9.31055",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      l("div", {
        className: "reviewpart",
        children: l(Qv, {
          ref: e,
          ...{
            dots: !1,
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplsay: !0,
            speed: 5e3,
            autoplaySpeed: 2e3,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
              },
              {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
              {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          },
          className: "custom-slider",
          children: qv.map((i, o) =>
            y(
              "div",
              {
                className: "businessowner",
                children: [
                  l("span", { className: "datareview", children: i.review }),
                  l("hr", { className: "hr" }),
                  y("div", {
                    children: [
                      l("img", {
                        className: "imageowner",
                        src: i.image,
                        alt: i.name,
                      }),
                      y("div", {
                        className: "name",
                        children: [
                          l("span", {
                            className: "dataname",
                            children: i.name,
                          }),
                          l("span", { children: i.Occupation }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              o
            )
          ),
        }),
      }),
    ],
  });
}
const Yv = "./assets/share-54b4fe54.png";
function Zv() {
  return l("div", {
    className: "share",
    children: y("div", {
      className: "share-clients",
      children: [
        y("div", {
          className: "share-container",
          children: [
            y("span", {
              className: "share-profile",
              children: [
                l("span", { className: "easily", children: " Easily" }),
                " share your profile, services, rates, availability and more...",
              ],
            }),
            l("p", {
              children:
                "Connect with your clients in less than 30 seconds with a unique QR code.",
            }),
          ],
        }),
        y("div", {
          className: "buttontext",
          children: [
            l("a", {
              href: "https://play.google.com/store/search?q=luround&c=apps&hl=en",
              children: y("button", {
                className: "button",
                children: [
                  y("svg", {
                    width: "21",
                    height: "25",
                    viewBox: "0 0 21 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      l("path", {
                        d: "M9.80506 12.4392L0.0898438 22.9835C0.0907562 22.9853 0.0907561 22.9881 0.0916686 22.99C0.390051 24.1349 1.41203 24.9775 2.62564 24.9775C3.11108 24.9775 3.56641 24.8432 3.95695 24.608L3.98798 24.5894L14.9232 18.1368L9.80506 12.4392Z",
                        fill: "#EA4335",
                      }),
                      l("path", {
                        d: "M19.6332 10.6437L19.624 10.6372L14.9029 7.83877L9.58398 12.6789L14.922 18.1357L19.6177 15.3653C20.4407 14.9099 21.0001 14.0226 21.0001 12.9999C21.0001 11.9828 20.4489 11.1 19.6332 10.6437Z",
                        fill: "#FBBC04",
                      }),
                      l("path", {
                        d: "M0.0894234 2.97079C0.0310244 3.191 0 3.42242 0 3.6613V22.2938C0 22.5327 0.0310245 22.7641 0.0903359 22.9834L10.1386 12.7088L0.0894234 2.97079Z",
                        fill: "#4285F4",
                      }),
                      l("path", {
                        d: "M9.87666 12.9775L14.9044 7.83699L3.98201 1.36114C3.58508 1.11759 3.12154 0.977626 2.62606 0.977626C1.41246 0.977626 0.38865 1.8221 0.0902675 2.96797C0.0902675 2.9689 0.0893555 2.96984 0.0893555 2.97077L9.87666 12.9775Z",
                        fill: "#34A853",
                      }),
                    ],
                  }),
                  y("div", {
                    className: "svg-play",
                    children: [
                      l("span", { className: "get", children: "GET IT ON" }),
                      l("span", {
                        children: l("svg", {
                          width: "89",
                          height: "19",
                          viewBox: "0 0 89 19",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: l("path", {
                            d: "M69.0218 14.6691H70.9763V1.45531H69.0218V14.6691ZM86.6265 6.21508L84.386 11.9441H84.3189L81.9936 6.21508H79.8882L83.3752 14.222L81.3881 18.6763H83.4255L88.8 6.21508H86.6265ZM75.5422 13.1682C74.9012 13.1682 74.0087 12.8458 74.0087 12.0456C74.0087 11.0266 75.1201 10.6355 76.0806 10.6355C76.9396 10.6355 77.3449 10.8226 77.8666 11.0774C77.7147 12.3014 76.6704 13.1682 75.5422 13.1682ZM75.7779 5.92651C74.3628 5.92651 72.8963 6.55543 72.2909 7.94964L74.0255 8.68005C74.3963 7.94964 75.0866 7.71076 75.8114 7.71076C76.8222 7.71076 77.8498 8.32277 77.8666 9.4115V9.5468C77.5125 9.3428 76.7552 9.03732 75.8282 9.03732C73.9585 9.03732 72.0542 10.0743 72.0542 12.0118C72.0542 13.7802 73.5877 14.9196 75.3055 14.9196C76.6201 14.9196 77.3449 14.3245 77.7995 13.6269H77.8666V14.6469H79.753V9.58063C79.753 7.2351 78.0184 5.92651 75.7779 5.92651ZM63.6985 7.82386H60.9185V3.29453H63.6985C65.1597 3.29453 65.9893 4.51539 65.9893 5.55867C65.9893 6.58292 65.1597 7.82386 63.6985 7.82386ZM63.6482 1.45531H58.965V14.6691H60.9185V9.66307H63.6482C65.8144 9.66307 67.9439 8.07966 67.9439 5.55867C67.9439 3.03767 65.8144 1.45531 63.6482 1.45531ZM38.11 13.1703C36.7598 13.1703 35.6296 12.0297 35.6296 10.4632C35.6296 8.87982 36.7598 7.72133 38.11 7.72133C39.4434 7.72133 40.4888 8.87982 40.4888 10.4632C40.4888 12.0297 39.4434 13.1703 38.11 13.1703ZM40.3547 6.95499H40.2866C39.8477 6.42754 39.0045 5.95082 37.9413 5.95082C35.7134 5.95082 33.6719 7.92533 33.6719 10.4632C33.6719 12.9832 35.7134 14.9418 37.9413 14.9418C39.0045 14.9418 39.8477 14.4651 40.2866 13.9197H40.3547V14.5676C40.3547 16.2874 39.4434 17.207 37.9748 17.207C36.7765 17.207 36.0339 16.3382 35.7301 15.6056L34.0259 16.3212C34.5151 17.5136 35.815 18.9775 37.9748 18.9775C40.2698 18.9775 42.2108 17.615 42.2108 14.2949V6.22247H40.3547V6.95499ZM43.561 14.6691H45.5187V1.45426H43.561V14.6691ZM48.4034 10.31C48.3531 8.57329 49.7368 7.6875 50.7319 7.6875C51.5092 7.6875 52.167 8.0786 52.3859 8.64094L48.4034 10.31ZM54.4787 8.81112C54.1079 7.80695 52.9767 5.95082 50.6649 5.95082C48.3699 5.95082 46.4635 7.77206 46.4635 10.4463C46.4635 12.9663 48.3531 14.9418 50.8838 14.9418C52.9264 14.9418 54.1079 13.6819 54.5971 12.9494L53.0783 11.9272C52.5723 12.6766 51.88 13.1703 50.8838 13.1703C49.8887 13.1703 49.1796 12.7105 48.7239 11.8088L54.6809 9.32166L54.4787 8.81112ZM7.02012 7.33023V9.2371H11.542C11.4069 10.31 11.0529 11.0932 10.5134 11.6376C9.85456 12.3025 8.8249 13.035 7.02012 13.035C4.23491 13.035 2.05827 10.7698 2.05827 7.96021C2.05827 5.1496 4.23491 2.88546 7.02012 2.88546C8.52219 2.88546 9.61889 3.48162 10.4286 4.24796L11.762 2.90237C10.6307 1.81258 9.12972 0.977539 7.02012 0.977539C3.20629 0.977539 0 4.1116 0 7.96021C0 11.8088 3.20629 14.9418 7.02012 14.9418C9.07839 14.9418 10.6307 14.2601 11.8458 12.9832C13.0954 11.7232 13.483 9.9527 13.483 8.52149C13.483 8.0786 13.4495 7.67059 13.3814 7.33023H7.02012ZM18.625 13.1703C17.2748 13.1703 16.11 12.0467 16.11 10.4463C16.11 8.82803 17.2748 7.72133 18.625 7.72133C19.9741 7.72133 21.1389 8.82803 21.1389 10.4463C21.1389 12.0467 19.9741 13.1703 18.625 13.1703ZM18.625 5.95082C16.1603 5.95082 14.1523 7.84077 14.1523 10.4463C14.1523 13.035 16.1603 14.9418 18.625 14.9418C21.0886 14.9418 23.0966 13.035 23.0966 10.4463C23.0966 7.84077 21.0886 5.95082 18.625 5.95082ZM28.3801 13.1703C27.0299 13.1703 25.8651 12.0467 25.8651 10.4463C25.8651 8.82803 27.0299 7.72133 28.3801 7.72133C29.7302 7.72133 30.894 8.82803 30.894 10.4463C30.894 12.0467 29.7302 13.1703 28.3801 13.1703ZM28.3801 5.95082C25.9164 5.95082 23.9084 7.84077 23.9084 10.4463C23.9084 13.035 25.9164 14.9418 28.3801 14.9418C30.8437 14.9418 32.8517 13.035 32.8517 10.4463C32.8517 7.84077 30.8437 5.95082 28.3801 5.95082Z",
                            fill: "white",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            y("button", {
              className: "button",
              children: [
                y("svg", {
                  width: "21",
                  height: "25",
                  viewBox: "0 0 21 25",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    l("path", {
                      d: "M17.5043 13.7405C17.5164 12.8206 17.7667 11.9187 18.2319 11.1186C18.697 10.3185 19.3619 9.64623 20.1646 9.16441C19.6546 8.45336 18.9819 7.86819 18.1998 7.45539C17.4176 7.04258 16.5477 6.81351 15.659 6.78637C13.7634 6.5921 11.9256 7.89382 10.9596 7.89382C9.97487 7.89382 8.48756 6.80566 6.88596 6.83782C5.85001 6.8705 4.8404 7.16461 3.95549 7.69149C3.07058 8.21837 2.34055 8.96006 1.83654 9.84429C-0.346677 13.5347 1.28181 18.9583 3.37319 21.9414C4.41955 23.4021 5.64245 25.0338 7.2426 24.9759C8.80844 24.9125 9.39325 24.0011 11.2833 24.0011C13.1559 24.0011 13.7046 24.9759 15.3372 24.9391C17.0174 24.9125 18.076 23.4719 19.0857 21.9974C19.8375 20.9566 20.416 19.8062 20.7998 18.589C19.8236 18.1859 18.9906 17.5112 18.4046 16.649C17.8185 15.7868 17.5054 14.7753 17.5043 13.7405Z",
                      fill: "white",
                    }),
                    l("path", {
                      d: "M14.4208 4.82467C15.337 3.75096 15.7883 2.37089 15.679 0.977539C14.2794 1.12106 12.9865 1.77413 12.058 2.80664C11.6041 3.31105 11.2564 3.89787 11.0348 4.53354C10.8133 5.16922 10.7222 5.84129 10.7669 6.51134C11.467 6.51838 12.1595 6.37024 12.7925 6.07808C13.4254 5.78592 13.9822 5.35736 14.4208 4.82467Z",
                      fill: "white",
                    }),
                  ],
                }),
                y("div", {
                  className: "svg-play",
                  children: [
                    l("span", { className: "get", children: "Coming soon on" }),
                    l("span", { className: "app", children: "APP STORE" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        l("div", {
          className: "divimage",
          children: l("img", { className: "shareimage", src: Yv }),
        }),
      ],
    }),
  });
}
function Gv() {
  return y(Gi, {
    children: [
      l(_f, {}),
      l(Um, {}),
      l(Gm, {}),
      l(Xm, {}),
      l(jm, {}),
      l(Kv, {}),
      l(Zv, {}),
      l(Vm, {}),
    ],
  });
}
function Xv() {
  return y("div", {
    className: "App",
    children: [
      l(_f, {}),
      l(Tm, {
        children: y(_m, {
          children: [
            l(Xo, { path: ".", element: l(Gv, {}) }),
            l(Xo, { path: "Privacy", element: l(Bm, {}) }),
          ],
        }),
      }),
    ],
  });
}
ro.createRoot(document.getElementById("root")).render(
  l(sc.StrictMode, { children: l(Xv, {}) })
);

var e6 = Object.defineProperty, t6 = Object.defineProperties;
var n6 = Object.getOwnPropertyDescriptors;
var Ht = Object.getOwnPropertySymbols;
var p4 = Object.prototype.hasOwnProperty, d4 = Object.prototype.propertyIsEnumerable;
var f4 = (e, t, n) => t in e ? e6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, at = (e, t) => {
  for (var n in t || (t = {}))
    p4.call(t, n) && f4(e, n, t[n]);
  if (Ht)
    for (var n of Ht(t))
      d4.call(t, n) && f4(e, n, t[n]);
  return e;
}, N5 = (e, t) => t6(e, n6(t));
var h4 = (e, t) => {
  var n = {};
  for (var r in e)
    p4.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ht)
    for (var r of Ht(e))
      t.indexOf(r) < 0 && d4.call(e, r) && (n[r] = e[r]);
  return n;
};
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var g1 = Object.freeze({}), k = Array.isArray;
function N(e) {
  return e == null;
}
function h(e) {
  return e != null;
}
function o1(e) {
  return e === !0;
}
function r6(e) {
  return e === !1;
}
function oe(e) {
  return typeof e == "string" || typeof e == "number" || // $flow-disable-line
  typeof e == "symbol" || typeof e == "boolean";
}
function n1(e) {
  return typeof e == "function";
}
function d1(e) {
  return e !== null && typeof e == "object";
}
var x5 = Object.prototype.toString;
function Et(e) {
  return x5.call(e).slice(8, -1);
}
function L1(e) {
  return x5.call(e) === "[object Object]";
}
function n0(e) {
  return x5.call(e) === "[object RegExp]";
}
function r0(e) {
  var t = parseFloat(String(e));
  return t >= 0 && Math.floor(t) === t && isFinite(e);
}
function Y5(e) {
  return h(e) && typeof e.then == "function" && typeof e.catch == "function";
}
function i6(e) {
  return e == null ? "" : Array.isArray(e) || L1(e) && e.toString === x5 ? JSON.stringify(e, null, 2) : String(e);
}
function gt(e) {
  var t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function A1(e, t) {
  for (var n = /* @__PURE__ */ Object.create(null), r = e.split(","), i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return t ? function(o) {
    return n[o.toLowerCase()];
  } : function(o) {
    return n[o];
  };
}
var o6 = A1("slot,component", !0), i0 = A1("key,ref,slot,slot-scope,is");
function we(e, t) {
  var n = e.length;
  if (n) {
    if (t === e[n - 1]) {
      e.length = n - 1;
      return;
    }
    var r = e.indexOf(t);
    if (r > -1)
      return e.splice(r, 1);
  }
}
var s6 = Object.prototype.hasOwnProperty;
function p1(e, t) {
  return s6.call(e, t);
}
function He(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var i = t[r];
    return i || (t[r] = e(r));
  };
}
var a6 = /-(\w)/g, Te = He(function(e) {
  return e.replace(a6, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}), o0 = He(function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}), l6 = /\B([A-Z])/g, Ie = He(function(e) {
  return e.replace(l6, "-$1").toLowerCase();
});
function c6(e, t) {
  function n(r) {
    var i = arguments.length;
    return i ? i > 1 ? e.apply(t, arguments) : e.call(t, r) : e.call(t);
  }
  return n._length = e.length, n;
}
function u6(e, t) {
  return e.bind(t);
}
var s0 = Function.prototype.bind ? u6 : c6;
function K5(e, t) {
  t = t || 0;
  for (var n = e.length - t, r = new Array(n); n--; )
    r[n] = e[n + t];
  return r;
}
function J(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function a0(e) {
  for (var t = {}, n = 0; n < e.length; n++)
    e[n] && J(t, e[n]);
  return t;
}
function c1(e, t, n) {
}
var It = function(e, t, n) {
  return !1;
}, l0 = function(e) {
  return e;
};
function Ae(e, t) {
  if (e === t)
    return !0;
  var n = d1(e), r = d1(t);
  if (n && r)
    try {
      var i = Array.isArray(e), o = Array.isArray(t);
      if (i && o)
        return e.length === t.length && e.every(function(l, c) {
          return Ae(l, t[c]);
        });
      if (e instanceof Date && t instanceof Date)
        return e.getTime() === t.getTime();
      if (!i && !o) {
        var s = Object.keys(e), a = Object.keys(t);
        return s.length === a.length && s.every(function(l) {
          return Ae(e[l], t[l]);
        });
      } else
        return !1;
    } catch (l) {
      return !1;
    }
  else
    return !n && !r ? String(e) === String(t) : !1;
}
function c0(e, t) {
  for (var n = 0; n < e.length; n++)
    if (Ae(e[n], t))
      return n;
  return -1;
}
function Xt(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(this, arguments));
  };
}
function f6(e, t) {
  return e === t ? e === 0 && 1 / e !== 1 / t : e === e || t === t;
}
var C4 = "data-server-rendered", y5 = ["component", "directive", "filter"], u0 = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
  "renderTracked",
  "renderTriggered"
], K = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: !1,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== "production",
  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== "production",
  /**
   * Whether to record perf
   */
  performance: !1,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: It,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: It,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: It,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: c1,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: l0,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: It,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: u0
}, f0 = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function T2(e) {
  var t = (e + "").charCodeAt(0);
  return t === 36 || t === 95;
}
function pe(e, t, n, r) {
  Object.defineProperty(e, t, {
    value: n,
    enumerable: !!r,
    writable: !0,
    configurable: !0
  });
}
var p6 = new RegExp("[^".concat(f0.source, ".$_\\d]"));
function d6(e) {
  if (!p6.test(e)) {
    var t = e.split(".");
    return function(n) {
      for (var r = 0; r < t.length; r++) {
        if (!n)
          return;
        n = n[t[r]];
      }
      return n;
    };
  }
}
var h6 = "__proto__" in {}, b1 = typeof window != "undefined", $1 = b1 && window.navigator.userAgent.toLowerCase(), Ke = $1 && /msie|trident/.test($1), Xe = $1 && $1.indexOf("msie 9.0") > 0, p0 = $1 && $1.indexOf("edge/") > 0;
$1 && $1.indexOf("android") > 0;
var C6 = $1 && /iphone|ipad|ipod|ios/.test($1), v4 = $1 && $1.match(/firefox\/(\d+)/), X5 = {}.watch, d0 = !1;
if (b1)
  try {
    var g4 = {};
    Object.defineProperty(g4, "passive", {
      get: function() {
        d0 = !0;
      }
    }), window.addEventListener("test-passive", null, g4);
  } catch (e) {
  }
var $t, Ot = function() {
  return $t === void 0 && (!b1 && typeof global != "undefined" ? $t = global.process && global.process.env.VUE_ENV === "server" : $t = !1), $t;
}, Jt = b1 && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function Me(e) {
  return typeof e == "function" && /native code/.test(e.toString());
}
var St = typeof Symbol != "undefined" && Me(Symbol) && typeof Reflect != "undefined" && Me(Reflect.ownKeys), Lt;
typeof Set != "undefined" && Me(Set) ? Lt = Set : Lt = /** @class */
function() {
  function e() {
    this.set = /* @__PURE__ */ Object.create(null);
  }
  return e.prototype.has = function(t) {
    return this.set[t] === !0;
  }, e.prototype.add = function(t) {
    this.set[t] = !0;
  }, e.prototype.clear = function() {
    this.set = /* @__PURE__ */ Object.create(null);
  }, e;
}();
var Ue = null;
function de(e) {
  e === void 0 && (e = null), e || Ue && Ue._scope.off(), Ue = e, e && e._scope.on();
}
var y1 = (
  /** @class */
  function() {
    function e(t, n, r, i, o, s, a, l) {
      this.tag = t, this.data = n, this.children = r, this.text = i, this.elm = o, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = n && n.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = l, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }
    return Object.defineProperty(e.prototype, "child", {
      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      get: function() {
        return this.componentInstance;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
), Ee = function(e) {
  e === void 0 && (e = "");
  var t = new y1();
  return t.text = e, t.isComment = !0, t;
};
function Ve(e) {
  return new y1(void 0, void 0, void 0, String(e));
}
function J5(e) {
  var t = new y1(
    e.tag,
    e.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    e.children && e.children.slice(),
    e.text,
    e.elm,
    e.context,
    e.componentOptions,
    e.asyncFactory
  );
  return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
}
var Qt = function() {
  return Qt = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Qt.apply(this, arguments);
}, v6 = 0, Ft = [], g6 = function() {
  for (var e = 0; e < Ft.length; e++) {
    var t = Ft[e];
    t.subs = t.subs.filter(function(n) {
      return n;
    }), t._pending = !1;
  }
  Ft.length = 0;
}, V1 = (
  /** @class */
  function() {
    function e() {
      this._pending = !1, this.id = v6++, this.subs = [];
    }
    return e.prototype.addSub = function(t) {
      this.subs.push(t);
    }, e.prototype.removeSub = function(t) {
      this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, Ft.push(this));
    }, e.prototype.depend = function(t) {
      e.target && (e.target.addDep(this), process.env.NODE_ENV !== "production" && t && e.target.onTrack && e.target.onTrack(Qt({ effect: e.target }, t)));
    }, e.prototype.notify = function(t) {
      var n = this.subs.filter(function(s) {
        return s;
      });
      process.env.NODE_ENV !== "production" && !K.async && n.sort(function(s, a) {
        return s.id - a.id;
      });
      for (var r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        process.env.NODE_ENV !== "production" && t && o.onTrigger && o.onTrigger(Qt({ effect: n[r] }, t)), o.update();
      }
    }, e;
  }()
);
V1.target = null;
var Ut = [];
function Je(e) {
  Ut.push(e), V1.target = e;
}
function Qe() {
  Ut.pop(), V1.target = Ut[Ut.length - 1];
}
var h0 = Array.prototype, e5 = Object.create(h0), L6 = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
L6.forEach(function(e) {
  var t = h0[e];
  pe(e5, e, function() {
    for (var r = [], i = 0; i < arguments.length; i++)
      r[i] = arguments[i];
    var o = t.apply(this, r), s = this.__ob__, a;
    switch (e) {
      case "push":
      case "unshift":
        a = r;
        break;
      case "splice":
        a = r.slice(2);
        break;
    }
    return a && s.observeArray(a), process.env.NODE_ENV !== "production" ? s.dep.notify({
      type: "array mutation",
      target: this,
      key: e
    }) : s.dep.notify(), o;
  });
});
var L4 = Object.getOwnPropertyNames(e5), C0 = {}, A2 = !0;
function he(e) {
  A2 = e;
}
var w6 = {
  notify: c1,
  depend: c1,
  addSub: c1,
  removeSub: c1
}, w4 = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (n === void 0 && (n = !1), r === void 0 && (r = !1), this.value = t, this.shallow = n, this.mock = r, this.dep = r ? w6 : new V1(), this.vmCount = 0, pe(t, "__ob__", this), k(t)) {
        if (!r)
          if (h6)
            t.__proto__ = e5;
          else
            for (var i = 0, o = L4.length; i < o; i++) {
              var s = L4[i];
              pe(t, s, e5[s]);
            }
        n || this.observeArray(t);
      } else
        for (var a = Object.keys(t), i = 0; i < a.length; i++) {
          var s = a[i];
          B1(t, s, C0, void 0, n, r);
        }
    }
    return e.prototype.observeArray = function(t) {
      for (var n = 0, r = t.length; n < r; n++)
        te(t[n], !1, this.mock);
    }, e;
  }()
);
function te(e, t, n) {
  if (e && p1(e, "__ob__") && e.__ob__ instanceof w4)
    return e.__ob__;
  if (A2 && (n || !Ot()) && (k(e) || L1(e)) && Object.isExtensible(e) && !e.__v_skip && !q1(e) && !(e instanceof y1))
    return new w4(e, t, n);
}
function B1(e, t, n, r, i, o) {
  var s = new V1(), a = Object.getOwnPropertyDescriptor(e, t);
  if (!(a && a.configurable === !1)) {
    var l = a && a.get, c = a && a.set;
    (!l || c) && (n === C0 || arguments.length === 2) && (n = e[t]);
    var u = !i && te(n, !1, o);
    return Object.defineProperty(e, t, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var x = l ? l.call(e) : n;
        return V1.target && (process.env.NODE_ENV !== "production" ? s.depend({
          target: e,
          type: "get",
          key: t
        }) : s.depend(), u && (u.dep.depend(), k(x) && g0(x))), q1(x) && !i ? x.value : x;
      },
      set: function(x) {
        var O = l ? l.call(e) : n;
        if (f6(O, x)) {
          if (process.env.NODE_ENV !== "production" && r && r(), c)
            c.call(e, x);
          else {
            if (l)
              return;
            if (!i && q1(O) && !q1(x)) {
              O.value = x;
              return;
            } else
              n = x;
          }
          u = !i && te(x, !1, o), process.env.NODE_ENV !== "production" ? s.notify({
            type: "set",
            target: e,
            key: t,
            newValue: x,
            oldValue: O
          }) : s.notify();
        }
      }
    }), s;
  }
}
function N2(e, t, n) {
  if (process.env.NODE_ENV !== "production" && (N(e) || oe(e)) && _("Cannot set reactive property on undefined, null, or primitive value: ".concat(e)), Z2(e)) {
    process.env.NODE_ENV !== "production" && _('Set operation on key "'.concat(t, '" failed: target is readonly.'));
    return;
  }
  var r = e.__ob__;
  return k(e) && r0(t) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), r && !r.shallow && r.mock && te(n, !1, !0), n) : t in e && !(t in Object.prototype) ? (e[t] = n, n) : e._isVue || r && r.vmCount ? (process.env.NODE_ENV !== "production" && _("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : r ? (B1(r.value, t, n, void 0, r.shallow, r.mock), process.env.NODE_ENV !== "production" ? r.dep.notify({
    type: "add",
    target: e,
    key: t,
    newValue: n,
    oldValue: void 0
  }) : r.dep.notify(), n) : (e[t] = n, n);
}
function v0(e, t) {
  if (process.env.NODE_ENV !== "production" && (N(e) || oe(e)) && _("Cannot delete reactive property on undefined, null, or primitive value: ".concat(e)), k(e) && r0(t)) {
    e.splice(t, 1);
    return;
  }
  var n = e.__ob__;
  if (e._isVue || n && n.vmCount) {
    process.env.NODE_ENV !== "production" && _("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
    return;
  }
  if (Z2(e)) {
    process.env.NODE_ENV !== "production" && _('Delete operation on key "'.concat(t, '" failed: target is readonly.'));
    return;
  }
  p1(e, t) && (delete e[t], n && (process.env.NODE_ENV !== "production" ? n.dep.notify({
    type: "delete",
    target: e,
    key: t
  }) : n.dep.notify()));
}
function g0(e) {
  for (var t = void 0, n = 0, r = e.length; n < r; n++)
    t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), k(t) && g0(t);
}
function L0(e) {
  return m6(e, !0), pe(e, "__v_isShallow", !0), e;
}
function m6(e, t) {
  if (!Z2(e)) {
    if (process.env.NODE_ENV !== "production") {
      k(e) && _("Avoid using Array as root value for ".concat(t ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(t ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
      var n = e && e.__ob__;
      n && n.shallow !== t && _("Target is already a ".concat(n.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(t ? "" : "non-", "shallow."));
    }
    var r = te(
      e,
      t,
      Ot()
      /* ssr mock reactivity */
    );
    process.env.NODE_ENV !== "production" && !r && ((e == null || oe(e)) && _("value cannot be made reactive: ".concat(String(e))), x6(e) && _("Vue 2 does not support reactive collection types such as Map or Set."));
  }
}
function Z2(e) {
  return !!(e && e.__v_isReadonly);
}
function x6(e) {
  var t = Et(e);
  return t === "Map" || t === "WeakMap" || t === "Set" || t === "WeakSet";
}
function q1(e) {
  return !!(e && e.__v_isRef === !0);
}
function Q5(e, t, n) {
  Object.defineProperty(e, n, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var r = t[n];
      if (q1(r))
        return r.value;
      var i = r && r.__ob__;
      return i && i.dep.depend(), r;
    },
    set: function(r) {
      var i = t[n];
      q1(i) && !q1(r) ? i.value = r : t[n] = r;
    }
  });
}
var O1, y6 = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = !1), this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = O1, !t && O1 && (this.index = (O1.scopes || (O1.scopes = [])).push(this) - 1);
    }
    return e.prototype.run = function(t) {
      if (this.active) {
        var n = O1;
        try {
          return O1 = this, t();
        } finally {
          O1 = n;
        }
      } else
        process.env.NODE_ENV !== "production" && _("cannot run an inactive effect scope.");
    }, e.prototype.on = function() {
      O1 = this;
    }, e.prototype.off = function() {
      O1 = this.parent;
    }, e.prototype.stop = function(t) {
      if (this.active) {
        var n = void 0, r = void 0;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].teardown();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          var i = this.parent.scopes.pop();
          i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }, e;
  }()
);
function _6(e, t) {
  t === void 0 && (t = O1), t && t.active && t.effects.push(e);
}
function b6(e) {
  var t = e._provided, n = e.$parent && e.$parent._provided;
  return n === t ? e._provided = Object.create(n) : t;
}
var m4 = He(function(e) {
  var t = e.charAt(0) === "&";
  e = t ? e.slice(1) : e;
  var n = e.charAt(0) === "~";
  e = n ? e.slice(1) : e;
  var r = e.charAt(0) === "!";
  return e = r ? e.slice(1) : e, {
    name: e,
    once: n,
    capture: r,
    passive: t
  };
});
function e2(e, t) {
  function n() {
    var r = n.fns;
    if (k(r))
      for (var i = r.slice(), o = 0; o < i.length; o++)
        ve(i[o], null, arguments, t, "v-on handler");
    else
      return ve(r, null, arguments, t, "v-on handler");
  }
  return n.fns = e, n;
}
function w0(e, t, n, r, i, o) {
  var s, a, l, c;
  for (s in e)
    a = e[s], l = t[s], c = m4(s), N(a) ? process.env.NODE_ENV !== "production" && _('Invalid handler for event "'.concat(c.name, '": got ') + String(a), o) : N(l) ? (N(a.fns) && (a = e[s] = e2(a, o)), o1(c.once) && (a = e[s] = i(c.name, a, c.capture)), n(c.name, a, c.capture, c.passive, c.params)) : a !== l && (l.fns = a, e[s] = l);
  for (s in t)
    N(e[s]) && (c = m4(s), r(c.name, t[s], c.capture));
}
function ue(e, t, n) {
  e instanceof y1 && (e = e.data.hook || (e.data.hook = {}));
  var r, i = e[t];
  function o() {
    n.apply(this, arguments), we(r.fns, o);
  }
  N(i) ? r = e2([o]) : h(i.fns) && o1(i.merged) ? (r = i, r.fns.push(o)) : r = e2([i, o]), r.merged = !0, e[t] = r;
}
function M6(e, t, n) {
  var r = t.options.props;
  if (!N(r)) {
    var i = {}, o = e.attrs, s = e.props;
    if (h(o) || h(s))
      for (var a in r) {
        var l = Ie(a);
        if (process.env.NODE_ENV !== "production") {
          var c = a.toLowerCase();
          a !== c && o && p1(o, c) && j2('Prop "'.concat(c, '" is passed to component ') + "".concat(be(
            // @ts-expect-error tag is string
            n || t
          ), ", but the declared prop name is") + ' "'.concat(a, '". ') + "Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "'.concat(l, '" instead of "').concat(a, '".'));
        }
        x4(i, s, a, l, !0) || x4(i, o, a, l, !1);
      }
    return i;
  }
}
function x4(e, t, n, r, i) {
  if (h(t)) {
    if (p1(t, n))
      return e[n] = t[n], i || delete t[n], !0;
    if (p1(t, r))
      return e[n] = t[r], i || delete t[r], !0;
  }
  return !1;
}
function E6(e) {
  for (var t = 0; t < e.length; t++)
    if (k(e[t]))
      return Array.prototype.concat.apply([], e);
  return e;
}
function H2(e) {
  return oe(e) ? [Ve(e)] : k(e) ? m0(e) : void 0;
}
function lt(e) {
  return h(e) && h(e.text) && r6(e.isComment);
}
function m0(e, t) {
  var n = [], r, i, o, s;
  for (r = 0; r < e.length; r++)
    i = e[r], !(N(i) || typeof i == "boolean") && (o = n.length - 1, s = n[o], k(i) ? i.length > 0 && (i = m0(i, "".concat(t || "", "_").concat(r)), lt(i[0]) && lt(s) && (n[o] = Ve(s.text + i[0].text), i.shift()), n.push.apply(n, i)) : oe(i) ? lt(s) ? n[o] = Ve(s.text + i) : i !== "" && n.push(Ve(i)) : lt(i) && lt(s) ? n[o] = Ve(s.text + i.text) : (o1(e._isVList) && h(i.tag) && N(i.key) && h(t) && (i.key = "__vlist".concat(t, "_").concat(r, "__")), n.push(i)));
  return n;
}
function O6(e, t) {
  var n = null, r, i, o, s;
  if (k(e) || typeof e == "string")
    for (n = new Array(e.length), r = 0, i = e.length; r < i; r++)
      n[r] = t(e[r], r);
  else if (typeof e == "number")
    for (n = new Array(e), r = 0; r < e; r++)
      n[r] = t(r + 1, r);
  else if (d1(e))
    if (St && e[Symbol.iterator]) {
      n = [];
      for (var a = e[Symbol.iterator](), l = a.next(); !l.done; )
        n.push(t(l.value, n.length)), l = a.next();
    } else
      for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++)
        s = o[r], n[r] = t(e[s], s, r);
  return h(n) || (n = []), n._isVList = !0, n;
}
function S6(e, t, n, r) {
  var i = this.$scopedSlots[e], o;
  i ? (n = n || {}, r && (process.env.NODE_ENV !== "production" && !d1(r) && _("slot v-bind without argument expects an Object", this), n = J(J({}, r), n)), o = i(n) || (n1(t) ? t() : t)) : o = this.$slots[e] || (n1(t) ? t() : t);
  var s = n && n.slot;
  return s ? this.$createElement("template", { slot: s }, o) : o;
}
function T6(e) {
  return o5(this.$options, "filters", e, !0) || l0;
}
function y4(e, t) {
  return k(e) ? e.indexOf(t) === -1 : e !== t;
}
function A6(e, t, n, r, i) {
  var o = K.keyCodes[t] || n;
  return i && r && !K.keyCodes[t] ? y4(i, r) : o ? y4(o, e) : r ? Ie(r) !== t : e === void 0;
}
function N6(e, t, n, r, i) {
  if (n)
    if (!d1(n))
      process.env.NODE_ENV !== "production" && _("v-bind without argument expects an Object or Array value", this);
    else {
      k(n) && (n = a0(n));
      var o = void 0, s = function(l) {
        if (l === "class" || l === "style" || i0(l))
          o = e;
        else {
          var c = e.attrs && e.attrs.type;
          o = r || K.mustUseProp(t, c, l) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
        }
        var u = Te(l), C = Ie(l);
        if (!(u in o) && !(C in o) && (o[l] = n[l], i)) {
          var x = e.on || (e.on = {});
          x["update:".concat(l)] = function(O) {
            n[l] = O;
          };
        }
      };
      for (var a in n)
        s(a);
    }
  return e;
}
function Z6(e, t) {
  var n = this._staticTrees || (this._staticTrees = []), r = n[e];
  return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  ), x0(r, "__static__".concat(e), !1)), r;
}
function H6(e, t, n) {
  return x0(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e;
}
function x0(e, t, n) {
  if (k(e))
    for (var r = 0; r < e.length; r++)
      e[r] && typeof e[r] != "string" && _4(e[r], "".concat(t, "_").concat(r), n);
  else
    _4(e, t, n);
}
function _4(e, t, n) {
  e.isStatic = !0, e.key = t, e.isOnce = n;
}
function I6(e, t) {
  if (t)
    if (!L1(t))
      process.env.NODE_ENV !== "production" && _("v-on without argument expects an Object value", this);
    else {
      var n = e.on = e.on ? J({}, e.on) : {};
      for (var r in t) {
        var i = n[r], o = t[r];
        n[r] = i ? [].concat(i, o) : o;
      }
    }
  return e;
}
function y0(e, t, n, r) {
  t = t || { $stable: !n };
  for (var i = 0; i < e.length; i++) {
    var o = e[i];
    k(o) ? y0(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
  }
  return r && (t.$key = r), t;
}
function $6(e, t) {
  for (var n = 0; n < t.length; n += 2) {
    var r = t[n];
    typeof r == "string" && r ? e[t[n]] = t[n + 1] : process.env.NODE_ENV !== "production" && r !== "" && r !== null && _("Invalid value for dynamic directive argument (expected string or null): ".concat(r), this);
  }
  return e;
}
function P6(e, t) {
  return typeof e == "string" ? t + e : e;
}
function _0(e) {
  e._o = H6, e._n = gt, e._s = i6, e._l = O6, e._t = S6, e._q = Ae, e._i = c0, e._m = Z6, e._f = T6, e._k = A6, e._b = N6, e._v = Ve, e._e = Ee, e._u = y0, e._g = I6, e._d = $6, e._p = P6;
}
function I2(e, t) {
  if (!e || !e.length)
    return {};
  for (var n = {}, r = 0, i = e.length; r < i; r++) {
    var o = e[r], s = o.data;
    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, (o.context === t || o.fnContext === t) && s && s.slot != null) {
      var a = s.slot, l = n[a] || (n[a] = []);
      o.tag === "template" ? l.push.apply(l, o.children || []) : l.push(o);
    } else
      (n.default || (n.default = [])).push(o);
  }
  for (var c in n)
    n[c].every(k6) && delete n[c];
  return n;
}
function k6(e) {
  return e.isComment && !e.asyncFactory || e.text === " ";
}
function wt(e) {
  return e.isComment && e.asyncFactory;
}
function Ct(e, t, n, r) {
  var i, o = Object.keys(n).length > 0, s = t ? !!t.$stable : !o, a = t && t.$key;
  if (!t)
    i = {};
  else {
    if (t._normalized)
      return t._normalized;
    if (s && r && r !== g1 && a === r.$key && !o && !r.$hasNormal)
      return r;
    i = {};
    for (var l in t)
      t[l] && l[0] !== "$" && (i[l] = R6(e, n, l, t[l]));
  }
  for (var c in n)
    c in i || (i[c] = D6(n, c));
  return t && Object.isExtensible(t) && (t._normalized = i), pe(i, "$stable", s), pe(i, "$key", a), pe(i, "$hasNormal", o), i;
}
function R6(e, t, n, r) {
  var i = function() {
    var o = Ue;
    de(e);
    var s = arguments.length ? r.apply(null, arguments) : r({});
    s = s && typeof s == "object" && !k(s) ? [s] : H2(s);
    var a = s && s[0];
    return de(o), s && (!a || s.length === 1 && a.isComment && !wt(a)) ? void 0 : s;
  };
  return r.proxy && Object.defineProperty(t, n, {
    get: i,
    enumerable: !0,
    configurable: !0
  }), i;
}
function D6(e, t) {
  return function() {
    return e[t];
  };
}
function V6(e) {
  var t = e.$options, n = t.setup;
  if (n) {
    var r = e._setupContext = B6(e);
    de(e), Je();
    var i = ve(n, null, [e._props || L0({}), r], e, "setup");
    if (Qe(), de(), n1(i))
      t.render = i;
    else if (d1(i))
      if (process.env.NODE_ENV !== "production" && i instanceof y1 && _("setup() should not return VNodes directly - return a render function instead."), e._setupState = i, i.__sfc) {
        var s = e._setupProxy = {};
        for (var o in i)
          o !== "__sfc" && Q5(s, i, o);
      } else
        for (var o in i)
          T2(o) ? process.env.NODE_ENV !== "production" && _("Avoid using variables that start with _ or $ in setup().") : Q5(e, i, o);
    else
      process.env.NODE_ENV !== "production" && i !== void 0 && _("setup() should return an object. Received: ".concat(i === null ? "null" : typeof i));
  }
}
function B6(e) {
  var t = !1;
  return {
    get attrs() {
      if (!e._attrsProxy) {
        var n = e._attrsProxy = {};
        pe(n, "_v_attr_proxy", !0), t5(n, e.$attrs, g1, e, "$attrs");
      }
      return e._attrsProxy;
    },
    get listeners() {
      if (!e._listenersProxy) {
        var n = e._listenersProxy = {};
        t5(n, e.$listeners, g1, e, "$listeners");
      }
      return e._listenersProxy;
    },
    get slots() {
      return F6(e);
    },
    emit: s0(e.$emit, e),
    expose: function(n) {
      process.env.NODE_ENV !== "production" && (t && _("expose() should be called only once per setup().", e), t = !0), n && Object.keys(n).forEach(function(r) {
        return Q5(e, n, r);
      });
    }
  };
}
function t5(e, t, n, r, i) {
  var o = !1;
  for (var s in t)
    s in e ? t[s] !== n[s] && (o = !0) : (o = !0, j6(e, s, r, i));
  for (var s in e)
    s in t || (o = !0, delete e[s]);
  return o;
}
function j6(e, t, n, r) {
  Object.defineProperty(e, t, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return n[r][t];
    }
  });
}
function F6(e) {
  return e._slotsProxy || b0(e._slotsProxy = {}, e.$scopedSlots), e._slotsProxy;
}
function b0(e, t) {
  for (var n in t)
    e[n] = t[n];
  for (var n in e)
    n in t || delete e[n];
}
function U6(e) {
  e._vnode = null, e._staticTrees = null;
  var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
  e.$slots = I2(t._renderChildren, r), e.$scopedSlots = n ? Ct(e.$parent, n.data.scopedSlots, e.$slots) : g1, e._c = function(o, s, a, l) {
    return n5(e, o, s, a, l, !1);
  }, e.$createElement = function(o, s, a, l) {
    return n5(e, o, s, a, l, !0);
  };
  var i = n && n.data;
  process.env.NODE_ENV !== "production" ? (B1(e, "$attrs", i && i.attrs || g1, function() {
    !xt && _("$attrs is readonly.", e);
  }, !0), B1(e, "$listeners", t._parentListeners || g1, function() {
    !xt && _("$listeners is readonly.", e);
  }, !0)) : (B1(e, "$attrs", i && i.attrs || g1, null, !0), B1(e, "$listeners", t._parentListeners || g1, null, !0));
}
var t2 = null;
function z6(e) {
  _0(e.prototype), e.prototype.$nextTick = function(t) {
    return $2(t, this);
  }, e.prototype._render = function() {
    var t = this, n = t.$options, r = n.render, i = n._parentVnode;
    i && t._isMounted && (t.$scopedSlots = Ct(t.$parent, i.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && b0(t._slotsProxy, t.$scopedSlots)), t.$vnode = i;
    var o;
    try {
      de(t), t2 = t, o = r.call(t._renderProxy, t.$createElement);
    } catch (s) {
      if (Ce(s, t, "render"), process.env.NODE_ENV !== "production" && t.$options.renderError)
        try {
          o = t.$options.renderError.call(t._renderProxy, t.$createElement, s);
        } catch (a) {
          Ce(a, t, "renderError"), o = t._vnode;
        }
      else
        o = t._vnode;
    } finally {
      t2 = null, de();
    }
    return k(o) && o.length === 1 && (o = o[0]), o instanceof y1 || (process.env.NODE_ENV !== "production" && k(o) && _("Multiple root nodes returned from render function. Render function should return a single root node.", t), o = Ee()), o.parent = i, o;
  };
}
function Z5(e, t) {
  return (e.__esModule || St && e[Symbol.toStringTag] === "Module") && (e = e.default), d1(e) ? t.extend(e) : e;
}
function G6(e, t, n, r, i) {
  var o = Ee();
  return o.asyncFactory = e, o.asyncMeta = { data: t, context: n, children: r, tag: i }, o;
}
function W6(e, t) {
  if (o1(e.error) && h(e.errorComp))
    return e.errorComp;
  if (h(e.resolved))
    return e.resolved;
  var n = t2;
  if (n && h(e.owners) && e.owners.indexOf(n) === -1 && e.owners.push(n), o1(e.loading) && h(e.loadingComp))
    return e.loadingComp;
  if (n && !h(e.owners)) {
    var r = e.owners = [n], i = !0, o = null, s = null;
    n.$on("hook:destroyed", function() {
      return we(r, n);
    });
    var a = function(C) {
      for (var x = 0, O = r.length; x < O; x++)
        r[x].$forceUpdate();
      C && (r.length = 0, o !== null && (clearTimeout(o), o = null), s !== null && (clearTimeout(s), s = null));
    }, l = Xt(function(C) {
      e.resolved = Z5(C, t), i ? r.length = 0 : a(!0);
    }), c = Xt(function(C) {
      process.env.NODE_ENV !== "production" && _("Failed to resolve async component: ".concat(String(e)) + (C ? `
Reason: `.concat(C) : "")), h(e.errorComp) && (e.error = !0, a(!0));
    }), u = e(l, c);
    return d1(u) && (Y5(u) ? N(e.resolved) && u.then(l, c) : Y5(u.component) && (u.component.then(l, c), h(u.error) && (e.errorComp = Z5(u.error, t)), h(u.loading) && (e.loadingComp = Z5(u.loading, t), u.delay === 0 ? e.loading = !0 : o = setTimeout(function() {
      o = null, N(e.resolved) && N(e.error) && (e.loading = !0, a(!1));
    }, u.delay || 200)), h(u.timeout) && (s = setTimeout(function() {
      s = null, N(e.resolved) && c(process.env.NODE_ENV !== "production" ? "timeout (".concat(u.timeout, "ms)") : null);
    }, u.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
  }
}
function M0(e) {
  if (k(e))
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (h(n) && (h(n.componentOptions) || wt(n)))
        return n;
    }
}
var q6 = 1, E0 = 2;
function n5(e, t, n, r, i, o) {
  return (k(n) || oe(n)) && (i = r, r = n, n = void 0), o1(o) && (i = E0), Y6(e, t, n, r, i);
}
function Y6(e, t, n, r, i) {
  if (h(n) && h(n.__ob__))
    return process.env.NODE_ENV !== "production" && _("Avoid using observed data object as vnode data: ".concat(JSON.stringify(n), `
`) + "Always create fresh vnode data objects in each render!", e), Ee();
  if (h(n) && h(n.is) && (t = n.is), !t)
    return Ee();
  process.env.NODE_ENV !== "production" && h(n) && h(n.key) && !oe(n.key) && _("Avoid using non-primitive value as key, use string/number value instead.", e), k(r) && n1(r[0]) && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === E0 ? r = H2(r) : i === q6 && (r = E6(r));
  var o, s;
  if (typeof t == "string") {
    var a = void 0;
    s = e.$vnode && e.$vnode.ns || K.getTagNamespace(t), K.isReservedTag(t) ? (process.env.NODE_ENV !== "production" && h(n) && h(n.nativeOn) && n.tag !== "component" && _("The .native modifier for v-on is only valid on components but it was used on <".concat(t, ">."), e), o = new y1(K.parsePlatformTagName(t), n, r, void 0, void 0, e)) : (!n || !n.pre) && h(a = o5(e.$options, "components", t)) ? o = Z4(a, n, e, r, t) : o = new y1(t, n, r, void 0, void 0, e);
  } else
    o = Z4(t, n, e, r);
  return k(o) ? o : h(o) ? (h(s) && O0(o, s), h(n) && K6(n), o) : Ee();
}
function O0(e, t, n) {
  if (e.ns = t, e.tag === "foreignObject" && (t = void 0, n = !0), h(e.children))
    for (var r = 0, i = e.children.length; r < i; r++) {
      var o = e.children[r];
      h(o.tag) && (N(o.ns) || o1(n) && o.tag !== "svg") && O0(o, t, n);
    }
}
function K6(e) {
  d1(e.style) && r5(e.style), d1(e.class) && r5(e.class);
}
function Ce(e, t, n) {
  Je();
  try {
    if (t)
      for (var r = t; r = r.$parent; ) {
        var i = r.$options.errorCaptured;
        if (i)
          for (var o = 0; o < i.length; o++)
            try {
              var s = i[o].call(r, e, t, n) === !1;
              if (s)
                return;
            } catch (a) {
              b4(a, r, "errorCaptured hook");
            }
      }
    b4(e, t, n);
  } finally {
    Qe();
  }
}
function ve(e, t, n, r, i) {
  var o;
  try {
    o = n ? e.apply(t, n) : e.call(t), o && !o._isVue && Y5(o) && !o._handled && (o.catch(function(s) {
      return Ce(s, r, i + " (Promise/async)");
    }), o._handled = !0);
  } catch (s) {
    Ce(s, r, i);
  }
  return o;
}
function b4(e, t, n) {
  if (K.errorHandler)
    try {
      return K.errorHandler.call(null, e, t, n);
    } catch (r) {
      r !== e && M4(r, null, "config.errorHandler");
    }
  M4(e, t, n);
}
function M4(e, t, n) {
  if (process.env.NODE_ENV !== "production" && _("Error in ".concat(n, ': "').concat(e.toString(), '"'), t), b1 && typeof console != "undefined")
    console.error(e);
  else
    throw e;
}
var n2 = !1, r2 = [], i2 = !1;
function Pt() {
  i2 = !1;
  var e = r2.slice(0);
  r2.length = 0;
  for (var t = 0; t < e.length; t++)
    e[t]();
}
var pt;
if (typeof Promise != "undefined" && Me(Promise)) {
  var X6 = Promise.resolve();
  pt = function() {
    X6.then(Pt), C6 && setTimeout(c1);
  }, n2 = !0;
} else if (!Ke && typeof MutationObserver != "undefined" && (Me(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var kt = 1, J6 = new MutationObserver(Pt), E4 = document.createTextNode(String(kt));
  J6.observe(E4, {
    characterData: !0
  }), pt = function() {
    kt = (kt + 1) % 2, E4.data = String(kt);
  }, n2 = !0;
} else
  typeof setImmediate != "undefined" && Me(setImmediate) ? pt = function() {
    setImmediate(Pt);
  } : pt = function() {
    setTimeout(Pt, 0);
  };
function $2(e, t) {
  var n;
  if (r2.push(function() {
    if (e)
      try {
        e.call(t);
      } catch (r) {
        Ce(r, t, "nextTick");
      }
    else
      n && n(t);
  }), i2 || (i2 = !0, pt()), !e && typeof Promise != "undefined")
    return new Promise(function(r) {
      n = r;
    });
}
var Q6 = "2.7.14", O4 = new Lt();
function r5(e) {
  return zt(e, O4), O4.clear(), e;
}
function zt(e, t) {
  var n, r, i = k(e);
  if (!(!i && !d1(e) || e.__v_skip || Object.isFrozen(e) || e instanceof y1)) {
    if (e.__ob__) {
      var o = e.__ob__.dep.id;
      if (t.has(o))
        return;
      t.add(o);
    }
    if (i)
      for (n = e.length; n--; )
        zt(e[n], t);
    else if (q1(e))
      zt(e.value, t);
    else
      for (r = Object.keys(e), n = r.length; n--; )
        zt(e[r[n]], t);
  }
}
var en = 0, P2 = (
  /** @class */
  function() {
    function e(t, n, r, i, o) {
      _6(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        O1 && !O1._vm ? O1 : t ? t._scope : void 0
      ), (this.vm = t) && o && (t._watcher = this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before, process.env.NODE_ENV !== "production" && (this.onTrack = i.onTrack, this.onTrigger = i.onTrigger)) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++en, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Lt(), this.newDepIds = new Lt(), this.expression = process.env.NODE_ENV !== "production" ? n.toString() : "", n1(n) ? this.getter = n : (this.getter = d6(n), this.getter || (this.getter = c1, process.env.NODE_ENV !== "production" && _('Failed watching path: "'.concat(n, '" ') + "Watcher only accepts simple dot-delimited paths. For full control, use a function instead.", t))), this.value = this.lazy ? void 0 : this.get();
    }
    return e.prototype.get = function() {
      Je(this);
      var t, n = this.vm;
      try {
        t = this.getter.call(n, n);
      } catch (r) {
        if (this.user)
          Ce(r, n, 'getter for watcher "'.concat(this.expression, '"'));
        else
          throw r;
      } finally {
        this.deep && r5(t), Qe(), this.cleanupDeps();
      }
      return t;
    }, e.prototype.addDep = function(t) {
      var n = t.id;
      this.newDepIds.has(n) || (this.newDepIds.add(n), this.newDeps.push(t), this.depIds.has(n) || t.addSub(this));
    }, e.prototype.cleanupDeps = function() {
      for (var t = this.deps.length; t--; ) {
        var n = this.deps[t];
        this.newDepIds.has(n.id) || n.removeSub(this);
      }
      var r = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
    }, e.prototype.update = function() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : gn(this);
    }, e.prototype.run = function() {
      if (this.active) {
        var t = this.get();
        if (t !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        d1(t) || this.deep) {
          var n = this.value;
          if (this.value = t, this.user) {
            var r = 'callback for watcher "'.concat(this.expression, '"');
            ve(this.cb, this.vm, [t, n], this.vm, r);
          } else
            this.cb.call(this.vm, t, n);
        }
      }
    }, e.prototype.evaluate = function() {
      this.value = this.get(), this.dirty = !1;
    }, e.prototype.depend = function() {
      for (var t = this.deps.length; t--; )
        this.deps[t].depend();
    }, e.prototype.teardown = function() {
      if (this.vm && !this.vm._isBeingDestroyed && we(this.vm._scope.effects, this), this.active) {
        for (var t = this.deps.length; t--; )
          this.deps[t].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }, e;
  }()
), G1, i5;
if (process.env.NODE_ENV !== "production") {
  var X1 = b1 && window.performance;
  X1 && // @ts-ignore
  X1.mark && // @ts-ignore
  X1.measure && // @ts-ignore
  X1.clearMarks && // @ts-ignore
  X1.clearMeasures && (G1 = function(e) {
    return X1.mark(e);
  }, i5 = function(e, t, n) {
    X1.measure(e, t, n), X1.clearMarks(t), X1.clearMarks(n);
  });
}
function tn(e) {
  e._events = /* @__PURE__ */ Object.create(null), e._hasHookEvent = !1;
  var t = e.$options._parentListeners;
  t && S0(e, t);
}
var mt;
function nn(e, t) {
  mt.$on(e, t);
}
function rn(e, t) {
  mt.$off(e, t);
}
function on(e, t) {
  var n = mt;
  return function r() {
    var i = t.apply(null, arguments);
    i !== null && n.$off(e, r);
  };
}
function S0(e, t, n) {
  mt = e, w0(t, n || {}, nn, rn, on, e), mt = void 0;
}
function sn(e) {
  var t = /^hook:/;
  e.prototype.$on = function(n, r) {
    var i = this;
    if (k(n))
      for (var o = 0, s = n.length; o < s; o++)
        i.$on(n[o], r);
    else
      (i._events[n] || (i._events[n] = [])).push(r), t.test(n) && (i._hasHookEvent = !0);
    return i;
  }, e.prototype.$once = function(n, r) {
    var i = this;
    function o() {
      i.$off(n, o), r.apply(i, arguments);
    }
    return o.fn = r, i.$on(n, o), i;
  }, e.prototype.$off = function(n, r) {
    var i = this;
    if (!arguments.length)
      return i._events = /* @__PURE__ */ Object.create(null), i;
    if (k(n)) {
      for (var o = 0, s = n.length; o < s; o++)
        i.$off(n[o], r);
      return i;
    }
    var a = i._events[n];
    if (!a)
      return i;
    if (!r)
      return i._events[n] = null, i;
    for (var l, c = a.length; c--; )
      if (l = a[c], l === r || l.fn === r) {
        a.splice(c, 1);
        break;
      }
    return i;
  }, e.prototype.$emit = function(n) {
    var r = this;
    if (process.env.NODE_ENV !== "production") {
      var i = n.toLowerCase();
      i !== n && r._events[i] && j2('Event "'.concat(i, '" is emitted in component ') + "".concat(be(r), ' but the handler is registered for "').concat(n, '". ') + "Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "'.concat(Ie(n), '" instead of "').concat(n, '".'));
    }
    var o = r._events[n];
    if (o) {
      o = o.length > 1 ? K5(o) : o;
      for (var s = K5(arguments, 1), a = 'event handler for "'.concat(n, '"'), l = 0, c = o.length; l < c; l++)
        ve(o[l], r, s, r, a);
    }
    return r;
  };
}
var Oe = null, xt = !1;
function T0(e) {
  var t = Oe;
  return Oe = e, function() {
    Oe = t;
  };
}
function an(e) {
  var t = e.$options, n = t.parent;
  if (n && !t.abstract) {
    for (; n.$options.abstract && n.$parent; )
      n = n.$parent;
    n.$children.push(e);
  }
  e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._provided = n ? n._provided : /* @__PURE__ */ Object.create(null), e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
}
function ln(e) {
  e.prototype._update = function(t, n) {
    var r = this, i = r.$el, o = r._vnode, s = T0(r);
    r._vnode = t, o ? r.$el = r.__patch__(o, t) : r.$el = r.__patch__(
      r.$el,
      t,
      n,
      !1
      /* removeOnly */
    ), s(), i && (i.__vue__ = null), r.$el && (r.$el.__vue__ = r);
    for (var a = r; a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode; )
      a.$parent.$el = a.$el, a = a.$parent;
  }, e.prototype.$forceUpdate = function() {
    var t = this;
    t._watcher && t._watcher.update();
  }, e.prototype.$destroy = function() {
    var t = this;
    if (!t._isBeingDestroyed) {
      S1(t, "beforeDestroy"), t._isBeingDestroyed = !0;
      var n = t.$parent;
      n && !n._isBeingDestroyed && !t.$options.abstract && we(n.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), S1(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
    }
  };
}
function cn(e, t, n) {
  e.$el = t, e.$options.render || (e.$options.render = Ee, process.env.NODE_ENV !== "production" && (e.$options.template && e.$options.template.charAt(0) !== "#" || e.$options.el || t ? _("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : _("Failed to mount component: template or render function not defined.", e))), S1(e, "beforeMount");
  var r;
  process.env.NODE_ENV !== "production" && K.performance && G1 ? r = function() {
    var a = e._name, l = e._uid, c = "vue-perf-start:".concat(l), u = "vue-perf-end:".concat(l);
    G1(c);
    var C = e._render();
    G1(u), i5("vue ".concat(a, " render"), c, u), G1(c), e._update(C, n), G1(u), i5("vue ".concat(a, " patch"), c, u);
  } : r = function() {
    e._update(e._render(), n);
  };
  var i = {
    before: function() {
      e._isMounted && !e._isDestroyed && S1(e, "beforeUpdate");
    }
  };
  process.env.NODE_ENV !== "production" && (i.onTrack = function(a) {
    return S1(e, "renderTracked", [a]);
  }, i.onTrigger = function(a) {
    return S1(e, "renderTriggered", [a]);
  }), new P2(
    e,
    r,
    c1,
    i,
    !0
    /* isRenderWatcher */
  ), n = !1;
  var o = e._preWatchers;
  if (o)
    for (var s = 0; s < o.length; s++)
      o[s].run();
  return e.$vnode == null && (e._isMounted = !0, S1(e, "mounted")), e;
}
function un(e, t, n, r, i) {
  process.env.NODE_ENV !== "production" && (xt = !0);
  var o = r.data.scopedSlots, s = e.$scopedSlots, a = !!(o && !o.$stable || s !== g1 && !s.$stable || o && e.$scopedSlots.$key !== o.$key || !o && e.$scopedSlots.$key), l = !!(i || // has new static slots
  e.$options._renderChildren || // has old static slots
  a), c = e.$vnode;
  e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i;
  var u = r.data.attrs || g1;
  e._attrsProxy && t5(e._attrsProxy, u, c.data && c.data.attrs || g1, e, "$attrs") && (l = !0), e.$attrs = u, n = n || g1;
  var C = e.$options._parentListeners;
  if (e._listenersProxy && t5(e._listenersProxy, n, C || g1, e, "$listeners"), e.$listeners = e.$options._parentListeners = n, S0(e, n, C), t && e.$options.props) {
    he(!1);
    for (var x = e._props, O = e.$options._propKeys || [], I = 0; I < O.length; I++) {
      var V = O[I], i1 = e.$options.props;
      x[V] = z2(V, i1, t, e);
    }
    he(!0), e.$options.propsData = t;
  }
  l && (e.$slots = I2(i, r.context), e.$forceUpdate()), process.env.NODE_ENV !== "production" && (xt = !1);
}
function A0(e) {
  for (; e && (e = e.$parent); )
    if (e._inactive)
      return !0;
  return !1;
}
function k2(e, t) {
  if (t) {
    if (e._directInactive = !1, A0(e))
      return;
  } else if (e._directInactive)
    return;
  if (e._inactive || e._inactive === null) {
    e._inactive = !1;
    for (var n = 0; n < e.$children.length; n++)
      k2(e.$children[n]);
    S1(e, "activated");
  }
}
function N0(e, t) {
  if (!(t && (e._directInactive = !0, A0(e))) && !e._inactive) {
    e._inactive = !0;
    for (var n = 0; n < e.$children.length; n++)
      N0(e.$children[n]);
    S1(e, "deactivated");
  }
}
function S1(e, t, n, r) {
  r === void 0 && (r = !0), Je();
  var i = Ue;
  r && de(e);
  var o = e.$options[t], s = "".concat(t, " hook");
  if (o)
    for (var a = 0, l = o.length; a < l; a++)
      ve(o[a], e, n || null, e, s);
  e._hasHookEvent && e.$emit("hook:" + t), r && de(i), Qe();
}
var fn = 100, Q1 = [], R2 = [], yt = {}, Gt = {}, o2 = !1, D2 = !1, Be = 0;
function pn() {
  Be = Q1.length = R2.length = 0, yt = {}, process.env.NODE_ENV !== "production" && (Gt = {}), o2 = D2 = !1;
}
var Z0 = 0, s2 = Date.now;
if (b1 && !Ke) {
  var H5 = window.performance;
  H5 && typeof H5.now == "function" && s2() > document.createEvent("Event").timeStamp && (s2 = function() {
    return H5.now();
  });
}
var dn = function(e, t) {
  if (e.post) {
    if (!t.post)
      return 1;
  } else if (t.post)
    return -1;
  return e.id - t.id;
};
function S4() {
  Z0 = s2(), D2 = !0;
  var e, t;
  for (Q1.sort(dn), Be = 0; Be < Q1.length; Be++)
    if (e = Q1[Be], e.before && e.before(), t = e.id, yt[t] = null, e.run(), process.env.NODE_ENV !== "production" && yt[t] != null && (Gt[t] = (Gt[t] || 0) + 1, Gt[t] > fn)) {
      _("You may have an infinite update loop " + (e.user ? 'in watcher with expression "'.concat(e.expression, '"') : "in a component render function."), e.vm);
      break;
    }
  var n = R2.slice(), r = Q1.slice();
  pn(), vn(n), hn(r), g6(), Jt && K.devtools && Jt.emit("flush");
}
function hn(e) {
  for (var t = e.length; t--; ) {
    var n = e[t], r = n.vm;
    r && r._watcher === n && r._isMounted && !r._isDestroyed && S1(r, "updated");
  }
}
function Cn(e) {
  e._inactive = !1, R2.push(e);
}
function vn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]._inactive = !0, k2(
      e[t],
      !0
      /* true */
    );
}
function gn(e) {
  var t = e.id;
  if (yt[t] == null && !(e === V1.target && e.noRecurse)) {
    if (yt[t] = !0, !D2)
      Q1.push(e);
    else {
      for (var n = Q1.length - 1; n > Be && Q1[n].id > e.id; )
        n--;
      Q1.splice(n + 1, 0, e);
    }
    if (!o2) {
      if (o2 = !0, process.env.NODE_ENV !== "production" && !K.async) {
        S4();
        return;
      }
      $2(S4);
    }
  }
}
function Ln(e) {
  var t = e.$options.provide;
  if (t) {
    var n = n1(t) ? t.call(e) : t;
    if (!d1(n))
      return;
    for (var r = b6(e), i = St ? Reflect.ownKeys(n) : Object.keys(n), o = 0; o < i.length; o++) {
      var s = i[o];
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(n, s));
    }
  }
}
function wn(e) {
  var t = H0(e.$options.inject, e);
  t && (he(!1), Object.keys(t).forEach(function(n) {
    process.env.NODE_ENV !== "production" ? B1(e, n, t[n], function() {
      _("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. " + 'injection being mutated: "'.concat(n, '"'), e);
    }) : B1(e, n, t[n]);
  }), he(!0));
}
function H0(e, t) {
  if (e) {
    for (var n = /* @__PURE__ */ Object.create(null), r = St ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
      var o = r[i];
      if (o !== "__ob__") {
        var s = e[o].from;
        if (s in t._provided)
          n[o] = t._provided[s];
        else if ("default" in e[o]) {
          var a = e[o].default;
          n[o] = n1(a) ? a.call(t) : a;
        } else
          process.env.NODE_ENV !== "production" && _('Injection "'.concat(o, '" not found'), t);
      }
    }
    return n;
  }
}
function V2(e, t, n, r, i) {
  var o = this, s = i.options, a;
  p1(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
  var l = o1(s._compiled), c = !l;
  this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || g1, this.injections = H0(s.inject, r), this.slots = function() {
    return o.$slots || Ct(r, e.scopedSlots, o.$slots = I2(n, r)), o.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return Ct(r, e.scopedSlots, this.slots());
    }
  }), l && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = Ct(r, e.scopedSlots, this.$slots)), s._scopeId ? this._c = function(u, C, x, O) {
    var I = n5(a, u, C, x, O, c);
    return I && !k(I) && (I.fnScopeId = s._scopeId, I.fnContext = r), I;
  } : this._c = function(u, C, x, O) {
    return n5(a, u, C, x, O, c);
  };
}
_0(V2.prototype);
function mn(e, t, n, r, i) {
  var o = e.options, s = {}, a = o.props;
  if (h(a))
    for (var l in a)
      s[l] = z2(l, a, t || g1);
  else
    h(n.attrs) && A4(s, n.attrs), h(n.props) && A4(s, n.props);
  var c = new V2(n, s, i, r, e), u = o.render.call(null, c._c, c);
  if (u instanceof y1)
    return T4(u, n, c.parent, o, c);
  if (k(u)) {
    for (var C = H2(u) || [], x = new Array(C.length), O = 0; O < C.length; O++)
      x[O] = T4(C[O], n, c.parent, o, c);
    return x;
  }
}
function T4(e, t, n, r, i) {
  var o = J5(e);
  return o.fnContext = n, o.fnOptions = r, process.env.NODE_ENV !== "production" && ((o.devtoolsMeta = o.devtoolsMeta || {}).renderContext = i), t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
}
function A4(e, t) {
  for (var n in t)
    e[Te(n)] = t[n];
}
function Ge(e) {
  return e.name || e.__name || e._componentTag;
}
var B2 = {
  init: function(e, t) {
    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
      var n = e;
      B2.prepatch(n, n);
    } else {
      var r = e.componentInstance = xn(e, Oe);
      r.$mount(t ? e.elm : void 0, t);
    }
  },
  prepatch: function(e, t) {
    var n = t.componentOptions, r = t.componentInstance = e.componentInstance;
    un(
      r,
      n.propsData,
      // updated props
      n.listeners,
      // updated listeners
      t,
      // new parent vnode
      n.children
      // new children
    );
  },
  insert: function(e) {
    var t = e.context, n = e.componentInstance;
    n._isMounted || (n._isMounted = !0, S1(n, "mounted")), e.data.keepAlive && (t._isMounted ? Cn(n) : k2(
      n,
      !0
      /* direct */
    ));
  },
  destroy: function(e) {
    var t = e.componentInstance;
    t._isDestroyed || (e.data.keepAlive ? N0(
      t,
      !0
      /* direct */
    ) : t.$destroy());
  }
}, N4 = Object.keys(B2);
function Z4(e, t, n, r, i) {
  if (!N(e)) {
    var o = n.$options._base;
    if (d1(e) && (e = o.extend(e)), typeof e != "function") {
      process.env.NODE_ENV !== "production" && _("Invalid Component definition: ".concat(String(e)), n);
      return;
    }
    var s;
    if (N(e.cid) && (s = e, e = W6(s, o), e === void 0))
      return G6(s, t, n, r, i);
    t = t || {}, W2(e), h(t.model) && bn(e.options, t);
    var a = M6(t, e, i);
    if (o1(e.options.functional))
      return mn(e, a, t, n, r);
    var l = t.on;
    if (t.on = t.nativeOn, o1(e.options.abstract)) {
      var c = t.slot;
      t = {}, c && (t.slot = c);
    }
    yn(t);
    var u = Ge(e.options) || i, C = new y1(
      // @ts-expect-error
      "vue-component-".concat(e.cid).concat(u ? "-".concat(u) : ""),
      t,
      void 0,
      void 0,
      void 0,
      n,
      // @ts-expect-error
      { Ctor: e, propsData: a, listeners: l, tag: i, children: r },
      s
    );
    return C;
  }
}
function xn(e, t) {
  var n = {
    _isComponent: !0,
    _parentVnode: e,
    parent: t
  }, r = e.data.inlineTemplate;
  return h(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
}
function yn(e) {
  for (var t = e.hook || (e.hook = {}), n = 0; n < N4.length; n++) {
    var r = N4[n], i = t[r], o = B2[r];
    i !== o && !(i && i._merged) && (t[r] = i ? _n(o, i) : o);
  }
}
function _n(e, t) {
  var n = function(r, i) {
    e(r, i), t(r, i);
  };
  return n._merged = !0, n;
}
function bn(e, t) {
  var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
  (t.attrs || (t.attrs = {}))[n] = t.model.value;
  var i = t.on || (t.on = {}), o = i[r], s = t.model.callback;
  h(o) ? (k(o) ? o.indexOf(s) === -1 : o !== s) && (i[r] = [s].concat(o)) : i[r] = s;
}
var _ = c1, j2 = c1, I5, be;
if (process.env.NODE_ENV !== "production") {
  var H4 = typeof console != "undefined", Mn = /(?:^|[-_])(\w)/g, En = function(e) {
    return e.replace(Mn, function(t) {
      return t.toUpperCase();
    }).replace(/[-_]/g, "");
  };
  _ = function(e, t) {
    t === void 0 && (t = Ue);
    var n = t ? I5(t) : "";
    K.warnHandler ? K.warnHandler.call(null, e, t, n) : H4 && !K.silent && console.error("[Vue warn]: ".concat(e).concat(n));
  }, j2 = function(e, t) {
    H4 && !K.silent && console.warn("[Vue tip]: ".concat(e) + (t ? I5(t) : ""));
  }, be = function(e, t) {
    if (e.$root === e)
      return "<Root>";
    var n = n1(e) && e.cid != null ? e.options : e._isVue ? e.$options || e.constructor.options : e, r = Ge(n), i = n.__file;
    if (!r && i) {
      var o = i.match(/([^/\\]+)\.vue$/);
      r = o && o[1];
    }
    return (r ? "<".concat(En(r), ">") : "<Anonymous>") + (i && t !== !1 ? " at ".concat(i) : "");
  };
  var On = function(e, t) {
    for (var n = ""; t; )
      t % 2 === 1 && (n += e), t > 1 && (e += e), t >>= 1;
    return n;
  };
  I5 = function(e) {
    if (e._isVue && e.$parent) {
      for (var t = [], n = 0; e; ) {
        if (t.length > 0) {
          var r = t[t.length - 1];
          if (r.constructor === e.constructor) {
            n++, e = e.$parent;
            continue;
          } else
            n > 0 && (t[t.length - 1] = [r, n], n = 0);
        }
        t.push(e), e = e.$parent;
      }
      return `

found in

` + t.map(function(i, o) {
        return "".concat(o === 0 ? "---> " : On(" ", 5 + o * 2)).concat(k(i) ? "".concat(be(i[0]), "... (").concat(i[1], " recursive calls)") : be(i));
      }).join(`
`);
    } else
      return `

(found in `.concat(be(e), ")");
  };
}
var H1 = K.optionMergeStrategies;
process.env.NODE_ENV !== "production" && (H1.el = H1.propsData = function(e, t, n, r) {
  return n || _('option "'.concat(r, '" can only be used during instance ') + "creation with the `new` keyword."), I0(e, t);
});
function _t(e, t, n) {
  if (n === void 0 && (n = !0), !t)
    return e;
  for (var r, i, o, s = St ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < s.length; a++)
    r = s[a], r !== "__ob__" && (i = e[r], o = t[r], !n || !p1(e, r) ? N2(e, r, o) : i !== o && L1(i) && L1(o) && _t(i, o));
  return e;
}
function I4(e, t, n) {
  return n ? function() {
    var i = n1(t) ? t.call(n, n) : t, o = n1(e) ? e.call(n, n) : e;
    return i ? _t(i, o) : o;
  } : t ? e ? function() {
    return _t(n1(t) ? t.call(this, this) : t, n1(e) ? e.call(this, this) : e);
  } : t : e;
}
H1.data = function(e, t, n) {
  return n ? I4(e, t, n) : t && typeof t != "function" ? (process.env.NODE_ENV !== "production" && _('The "data" option should be a function that returns a per-instance value in component definitions.', n), e) : I4(e, t);
};
function Sn(e, t) {
  var n = t ? e ? e.concat(t) : k(t) ? t : [t] : e;
  return n && Tn(n);
}
function Tn(e) {
  for (var t = [], n = 0; n < e.length; n++)
    t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
u0.forEach(function(e) {
  H1[e] = Sn;
});
function An(e, t, n, r) {
  var i = Object.create(e || null);
  return t ? (process.env.NODE_ENV !== "production" && U2(r, t, n), J(i, t)) : i;
}
y5.forEach(function(e) {
  H1[e + "s"] = An;
});
H1.watch = function(e, t, n, r) {
  if (e === X5 && (e = void 0), t === X5 && (t = void 0), !t)
    return Object.create(e || null);
  if (process.env.NODE_ENV !== "production" && U2(r, t, n), !e)
    return t;
  var i = {};
  J(i, e);
  for (var o in t) {
    var s = i[o], a = t[o];
    s && !k(s) && (s = [s]), i[o] = s ? s.concat(a) : k(a) ? a : [a];
  }
  return i;
};
H1.props = H1.methods = H1.inject = H1.computed = function(e, t, n, r) {
  if (t && process.env.NODE_ENV !== "production" && U2(r, t, n), !e)
    return t;
  var i = /* @__PURE__ */ Object.create(null);
  return J(i, e), t && J(i, t), i;
};
H1.provide = function(e, t) {
  return e ? function() {
    var n = /* @__PURE__ */ Object.create(null);
    return _t(n, n1(e) ? e.call(this) : e), t && _t(
      n,
      n1(t) ? t.call(this) : t,
      !1
      // non-recursive
    ), n;
  } : t;
};
var I0 = function(e, t) {
  return t === void 0 ? e : t;
};
function Nn(e) {
  for (var t in e.components)
    F2(t);
}
function F2(e) {
  new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(f0.source, "]*$")).test(e) || _('Invalid component name: "' + e + '". Component names should conform to valid custom element name in html5 specification.'), (o6(e) || K.isReservedTag(e)) && _("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Zn(e, t) {
  var n = e.props;
  if (n) {
    var r = {}, i, o, s;
    if (k(n))
      for (i = n.length; i--; )
        o = n[i], typeof o == "string" ? (s = Te(o), r[s] = { type: null }) : process.env.NODE_ENV !== "production" && _("props must be strings when using array syntax.");
    else if (L1(n))
      for (var a in n)
        o = n[a], s = Te(a), r[s] = L1(o) ? o : { type: o };
    else
      process.env.NODE_ENV !== "production" && _('Invalid value for option "props": expected an Array or an Object, ' + "but got ".concat(Et(n), "."), t);
    e.props = r;
  }
}
function Hn(e, t) {
  var n = e.inject;
  if (n) {
    var r = e.inject = {};
    if (k(n))
      for (var i = 0; i < n.length; i++)
        r[n[i]] = { from: n[i] };
    else if (L1(n))
      for (var o in n) {
        var s = n[o];
        r[o] = L1(s) ? J({ from: o }, s) : { from: s };
      }
    else
      process.env.NODE_ENV !== "production" && _('Invalid value for option "inject": expected an Array or an Object, ' + "but got ".concat(Et(n), "."), t);
  }
}
function In(e) {
  var t = e.directives;
  if (t)
    for (var n in t) {
      var r = t[n];
      n1(r) && (t[n] = { bind: r, update: r });
    }
}
function U2(e, t, n) {
  L1(t) || _('Invalid value for option "'.concat(e, '": expected an Object, ') + "but got ".concat(Et(t), "."), n);
}
function Ne(e, t, n) {
  if (process.env.NODE_ENV !== "production" && Nn(t), n1(t) && (t = t.options), Zn(t, n), Hn(t, n), In(t), !t._base && (t.extends && (e = Ne(e, t.extends, n)), t.mixins))
    for (var r = 0, i = t.mixins.length; r < i; r++)
      e = Ne(e, t.mixins[r], n);
  var o = {}, s;
  for (s in e)
    a(s);
  for (s in t)
    p1(e, s) || a(s);
  function a(l) {
    var c = H1[l] || I0;
    o[l] = c(e[l], t[l], n, l);
  }
  return o;
}
function o5(e, t, n, r) {
  if (typeof n == "string") {
    var i = e[t];
    if (p1(i, n))
      return i[n];
    var o = Te(n);
    if (p1(i, o))
      return i[o];
    var s = o0(o);
    if (p1(i, s))
      return i[s];
    var a = i[n] || i[o] || i[s];
    return process.env.NODE_ENV !== "production" && r && !a && _("Failed to resolve " + t.slice(0, -1) + ": " + n), a;
  }
}
function z2(e, t, n, r) {
  var i = t[e], o = !p1(n, e), s = n[e], a = P4(Boolean, i.type);
  if (a > -1) {
    if (o && !p1(i, "default"))
      s = !1;
    else if (s === "" || s === Ie(e)) {
      var l = P4(String, i.type);
      (l < 0 || a < l) && (s = !0);
    }
  }
  if (s === void 0) {
    s = $n(r, i, e);
    var c = A2;
    he(!0), te(s), he(c);
  }
  return process.env.NODE_ENV !== "production" && Pn(i, e, s, r, o), s;
}
function $n(e, t, n) {
  if (p1(t, "default")) {
    var r = t.default;
    return process.env.NODE_ENV !== "production" && d1(r) && _('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e), e && e.$options.propsData && e.$options.propsData[n] === void 0 && e._props[n] !== void 0 ? e._props[n] : n1(r) && s5(t.type) !== "Function" ? r.call(e) : r;
  }
}
function Pn(e, t, n, r, i) {
  if (e.required && i) {
    _('Missing required prop: "' + t + '"', r);
    return;
  }
  if (!(n == null && !e.required)) {
    var o = e.type, s = !o || o === !0, a = [];
    if (o) {
      k(o) || (o = [o]);
      for (var l = 0; l < o.length && !s; l++) {
        var c = Rn(n, o[l], r);
        a.push(c.expectedType || ""), s = c.valid;
      }
    }
    var u = a.some(function(x) {
      return x;
    });
    if (!s && u) {
      _(Vn(t, n, a), r);
      return;
    }
    var C = e.validator;
    C && (C(n) || _('Invalid prop: custom validator check failed for prop "' + t + '".', r));
  }
}
var kn = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
function Rn(e, t, n) {
  var r, i = s5(t);
  if (kn.test(i)) {
    var o = typeof e;
    r = o === i.toLowerCase(), !r && o === "object" && (r = e instanceof t);
  } else if (i === "Object")
    r = L1(e);
  else if (i === "Array")
    r = k(e);
  else
    try {
      r = e instanceof t;
    } catch (s) {
      _('Invalid prop type: "' + String(t) + '" is not a constructor', n), r = !1;
    }
  return {
    valid: r,
    expectedType: i
  };
}
var Dn = /^\s*function (\w+)/;
function s5(e) {
  var t = e && e.toString().match(Dn);
  return t ? t[1] : "";
}
function $4(e, t) {
  return s5(e) === s5(t);
}
function P4(e, t) {
  if (!k(t))
    return $4(t, e) ? 0 : -1;
  for (var n = 0, r = t.length; n < r; n++)
    if ($4(t[n], e))
      return n;
  return -1;
}
function Vn(e, t, n) {
  var r = 'Invalid prop: type check failed for prop "'.concat(e, '".') + " Expected ".concat(n.map(o0).join(", ")), i = n[0], o = Et(t);
  return n.length === 1 && $5(i) && $5(typeof t) && !jn(i, o) && (r += " with value ".concat(k4(t, i))), r += ", got ".concat(o, " "), $5(o) && (r += "with value ".concat(k4(t, o), ".")), r;
}
function k4(e, t) {
  return t === "String" ? '"'.concat(e, '"') : t === "Number" ? "".concat(Number(e)) : "".concat(e);
}
var Bn = ["string", "number", "boolean"];
function $5(e) {
  return Bn.some(function(t) {
    return e.toLowerCase() === t;
  });
}
function jn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.some(function(n) {
    return n.toLowerCase() === "boolean";
  });
}
var $0;
if (process.env.NODE_ENV !== "production") {
  var Fn = A1(
    "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"
    // for Webpack/Browserify
  ), R4 = function(e, t) {
    _('Property or method "'.concat(t, '" is not defined on the instance but ') + "referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", e);
  }, D4 = function(e, t) {
    _('Property "'.concat(t, '" must be accessed with "$data.').concat(t, '" because ') + 'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data', e);
  }, V4 = typeof Proxy != "undefined" && Me(Proxy);
  if (V4) {
    var Un = A1("stop,prevent,self,ctrl,shift,alt,meta,exact");
    K.keyCodes = new Proxy(K.keyCodes, {
      set: function(e, t, n) {
        return Un(t) ? (_("Avoid overwriting built-in modifier in config.keyCodes: .".concat(t)), !1) : (e[t] = n, !0);
      }
    });
  }
  var zn = {
    has: function(e, t) {
      var n = t in e, r = Fn(t) || typeof t == "string" && t.charAt(0) === "_" && !(t in e.$data);
      return !n && !r && (t in e.$data ? D4(e, t) : R4(e, t)), n || !r;
    }
  }, Gn = {
    get: function(e, t) {
      return typeof t == "string" && !(t in e) && (t in e.$data ? D4(e, t) : R4(e, t)), e[t];
    }
  };
  $0 = function(t) {
    if (V4) {
      var n = t.$options, r = n.render && n.render._withStripped ? Gn : zn;
      t._renderProxy = new Proxy(t, r);
    } else
      t._renderProxy = t;
  };
}
var z1 = {
  enumerable: !0,
  configurable: !0,
  get: c1,
  set: c1
};
function G2(e, t, n) {
  z1.get = function() {
    return this[t][n];
  }, z1.set = function(i) {
    this[t][n] = i;
  }, Object.defineProperty(e, n, z1);
}
function Wn(e) {
  var t = e.$options;
  if (t.props && qn(e, t.props), V6(e), t.methods && Qn(e, t.methods), t.data)
    Yn(e);
  else {
    var n = te(e._data = {});
    n && n.vmCount++;
  }
  t.computed && Jn(e, t.computed), t.watch && t.watch !== X5 && e9(e, t.watch);
}
function qn(e, t) {
  var n = e.$options.propsData || {}, r = e._props = L0({}), i = e.$options._propKeys = [], o = !e.$parent;
  o || he(!1);
  var s = function(l) {
    i.push(l);
    var c = z2(l, t, n, e);
    if (process.env.NODE_ENV !== "production") {
      var u = Ie(l);
      (i0(u) || K.isReservedAttr(u)) && _('"'.concat(u, '" is a reserved attribute and cannot be used as component prop.'), e), B1(r, l, c, function() {
        !o && !xt && _("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "'.concat(l, '"'), e);
      });
    } else
      B1(r, l, c);
    l in e || G2(e, "_props", l);
  };
  for (var a in t)
    s(a);
  he(!0);
}
function Yn(e) {
  var t = e.$options.data;
  t = e._data = n1(t) ? Kn(t, e) : t || {}, L1(t) || (t = {}, process.env.NODE_ENV !== "production" && _(`data functions should return an object:
https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`, e));
  for (var n = Object.keys(t), r = e.$options.props, i = e.$options.methods, o = n.length; o--; ) {
    var s = n[o];
    process.env.NODE_ENV !== "production" && i && p1(i, s) && _('Method "'.concat(s, '" has already been defined as a data property.'), e), r && p1(r, s) ? process.env.NODE_ENV !== "production" && _('The data property "'.concat(s, '" is already declared as a prop. ') + "Use prop default value instead.", e) : T2(s) || G2(e, "_data", s);
  }
  var a = te(t);
  a && a.vmCount++;
}
function Kn(e, t) {
  Je();
  try {
    return e.call(t, t);
  } catch (n) {
    return Ce(n, t, "data()"), {};
  } finally {
    Qe();
  }
}
var Xn = { lazy: !0 };
function Jn(e, t) {
  var n = e._computedWatchers = /* @__PURE__ */ Object.create(null), r = Ot();
  for (var i in t) {
    var o = t[i], s = n1(o) ? o : o.get;
    process.env.NODE_ENV !== "production" && s == null && _('Getter is missing for computed property "'.concat(i, '".'), e), r || (n[i] = new P2(e, s || c1, c1, Xn)), i in e ? process.env.NODE_ENV !== "production" && (i in e.$data ? _('The computed property "'.concat(i, '" is already defined in data.'), e) : e.$options.props && i in e.$options.props ? _('The computed property "'.concat(i, '" is already defined as a prop.'), e) : e.$options.methods && i in e.$options.methods && _('The computed property "'.concat(i, '" is already defined as a method.'), e)) : P0(e, i, o);
  }
}
function P0(e, t, n) {
  var r = !Ot();
  n1(n) ? (z1.get = r ? B4(t) : j4(n), z1.set = c1) : (z1.get = n.get ? r && n.cache !== !1 ? B4(t) : j4(n.get) : c1, z1.set = n.set || c1), process.env.NODE_ENV !== "production" && z1.set === c1 && (z1.set = function() {
    _('Computed property "'.concat(t, '" was assigned to but it has no setter.'), this);
  }), Object.defineProperty(e, t, z1);
}
function B4(e) {
  return function() {
    var n = this._computedWatchers && this._computedWatchers[e];
    if (n)
      return n.dirty && n.evaluate(), V1.target && (process.env.NODE_ENV !== "production" && V1.target.onTrack && V1.target.onTrack({
        effect: V1.target,
        target: this,
        type: "get",
        key: e
      }), n.depend()), n.value;
  };
}
function j4(e) {
  return function() {
    return e.call(this, this);
  };
}
function Qn(e, t) {
  var n = e.$options.props;
  for (var r in t)
    process.env.NODE_ENV !== "production" && (typeof t[r] != "function" && _('Method "'.concat(r, '" has type "').concat(typeof t[r], '" in the component definition. ') + "Did you reference the function correctly?", e), n && p1(n, r) && _('Method "'.concat(r, '" has already been defined as a prop.'), e), r in e && T2(r) && _('Method "'.concat(r, '" conflicts with an existing Vue instance method. ') + "Avoid defining component methods that start with _ or $.")), e[r] = typeof t[r] != "function" ? c1 : s0(t[r], e);
}
function e9(e, t) {
  for (var n in t) {
    var r = t[n];
    if (k(r))
      for (var i = 0; i < r.length; i++)
        a2(e, n, r[i]);
    else
      a2(e, n, r);
  }
}
function a2(e, t, n, r) {
  return L1(n) && (r = n, n = n.handler), typeof n == "string" && (n = e[n]), e.$watch(t, n, r);
}
function t9(e) {
  var t = {};
  t.get = function() {
    return this._data;
  };
  var n = {};
  n.get = function() {
    return this._props;
  }, process.env.NODE_ENV !== "production" && (t.set = function() {
    _("Avoid replacing instance root $data. Use nested data properties instead.", this);
  }, n.set = function() {
    _("$props is readonly.", this);
  }), Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = N2, e.prototype.$delete = v0, e.prototype.$watch = function(r, i, o) {
    var s = this;
    if (L1(i))
      return a2(s, r, i, o);
    o = o || {}, o.user = !0;
    var a = new P2(s, r, i, o);
    if (o.immediate) {
      var l = 'callback for immediate watcher "'.concat(a.expression, '"');
      Je(), ve(i, s, [a.value], s, l), Qe();
    }
    return function() {
      a.teardown();
    };
  };
}
var n9 = 0;
function r9(e) {
  e.prototype._init = function(t) {
    var n = this;
    n._uid = n9++;
    var r, i;
    process.env.NODE_ENV !== "production" && K.performance && G1 && (r = "vue-perf-start:".concat(n._uid), i = "vue-perf-end:".concat(n._uid), G1(r)), n._isVue = !0, n.__v_skip = !0, n._scope = new y6(
      !0
      /* detached */
    ), n._scope._vm = !0, t && t._isComponent ? i9(n, t) : n.$options = Ne(W2(n.constructor), t || {}, n), process.env.NODE_ENV !== "production" ? $0(n) : n._renderProxy = n, n._self = n, an(n), tn(n), U6(n), S1(
      n,
      "beforeCreate",
      void 0,
      !1
      /* setContext */
    ), wn(n), Wn(n), Ln(n), S1(n, "created"), process.env.NODE_ENV !== "production" && K.performance && G1 && (n._name = be(n, !1), G1(i), i5("vue ".concat(n._name, " init"), r, i)), n.$options.el && n.$mount(n.$options.el);
  };
}
function i9(e, t) {
  var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
  n.parent = t.parent, n._parentVnode = r;
  var i = r.componentOptions;
  n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
}
function W2(e) {
  var t = e.options;
  if (e.super) {
    var n = W2(e.super), r = e.superOptions;
    if (n !== r) {
      e.superOptions = n;
      var i = o9(e);
      i && J(e.extendOptions, i), t = e.options = Ne(n, e.extendOptions), t.name && (t.components[t.name] = e);
    }
  }
  return t;
}
function o9(e) {
  var t, n = e.options, r = e.sealedOptions;
  for (var i in n)
    n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
  return t;
}
function H(e) {
  process.env.NODE_ENV !== "production" && !(this instanceof H) && _("Vue is a constructor and should be called with the `new` keyword"), this._init(e);
}
r9(H);
t9(H);
sn(H);
ln(H);
z6(H);
function s9(e) {
  e.use = function(t) {
    var n = this._installedPlugins || (this._installedPlugins = []);
    if (n.indexOf(t) > -1)
      return this;
    var r = K5(arguments, 1);
    return r.unshift(this), n1(t.install) ? t.install.apply(t, r) : n1(t) && t.apply(null, r), n.push(t), this;
  };
}
function a9(e) {
  e.mixin = function(t) {
    return this.options = Ne(this.options, t), this;
  };
}
function l9(e) {
  e.cid = 0;
  var t = 1;
  e.extend = function(n) {
    n = n || {};
    var r = this, i = r.cid, o = n._Ctor || (n._Ctor = {});
    if (o[i])
      return o[i];
    var s = Ge(n) || Ge(r.options);
    process.env.NODE_ENV !== "production" && s && F2(s);
    var a = function(c) {
      this._init(c);
    };
    return a.prototype = Object.create(r.prototype), a.prototype.constructor = a, a.cid = t++, a.options = Ne(r.options, n), a.super = r, a.options.props && c9(a), a.options.computed && u9(a), a.extend = r.extend, a.mixin = r.mixin, a.use = r.use, y5.forEach(function(l) {
      a[l] = r[l];
    }), s && (a.options.components[s] = a), a.superOptions = r.options, a.extendOptions = n, a.sealedOptions = J({}, a.options), o[i] = a, a;
  };
}
function c9(e) {
  var t = e.options.props;
  for (var n in t)
    G2(e.prototype, "_props", n);
}
function u9(e) {
  var t = e.options.computed;
  for (var n in t)
    P0(e.prototype, n, t[n]);
}
function f9(e) {
  y5.forEach(function(t) {
    e[t] = function(n, r) {
      return r ? (process.env.NODE_ENV !== "production" && t === "component" && F2(n), t === "component" && L1(r) && (r.name = r.name || n, r = this.options._base.extend(r)), t === "directive" && n1(r) && (r = { bind: r, update: r }), this.options[t + "s"][n] = r, r) : this.options[t + "s"][n];
    };
  });
}
function F4(e) {
  return e && (Ge(e.Ctor.options) || e.tag);
}
function Rt(e, t) {
  return k(e) ? e.indexOf(t) > -1 : typeof e == "string" ? e.split(",").indexOf(t) > -1 : n0(e) ? e.test(t) : !1;
}
function U4(e, t) {
  var n = e.cache, r = e.keys, i = e._vnode;
  for (var o in n) {
    var s = n[o];
    if (s) {
      var a = s.name;
      a && !t(a) && l2(n, o, r, i);
    }
  }
}
function l2(e, t, n, r) {
  var i = e[t];
  i && (!r || i.tag !== r.tag) && i.componentInstance.$destroy(), e[t] = null, we(n, t);
}
var z4 = [String, RegExp, Array], p9 = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: z4,
    exclude: z4,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var e = this, t = e.cache, n = e.keys, r = e.vnodeToCache, i = e.keyToCache;
      if (r) {
        var o = r.tag, s = r.componentInstance, a = r.componentOptions;
        t[i] = {
          name: F4(a),
          tag: o,
          componentInstance: s
        }, n.push(i), this.max && n.length > parseInt(this.max) && l2(t, n[0], n, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var e in this.cache)
      l2(this.cache, e, this.keys);
  },
  mounted: function() {
    var e = this;
    this.cacheVNode(), this.$watch("include", function(t) {
      U4(e, function(n) {
        return Rt(t, n);
      });
    }), this.$watch("exclude", function(t) {
      U4(e, function(n) {
        return !Rt(t, n);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var e = this.$slots.default, t = M0(e), n = t && t.componentOptions;
    if (n) {
      var r = F4(n), i = this, o = i.include, s = i.exclude;
      if (
        // not included
        o && (!r || !Rt(o, r)) || // excluded
        s && r && Rt(s, r)
      )
        return t;
      var a = this, l = a.cache, c = a.keys, u = t.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
      ) : t.key;
      l[u] ? (t.componentInstance = l[u].componentInstance, we(c, u), c.push(u)) : (this.vnodeToCache = t, this.keyToCache = u), t.data.keepAlive = !0;
    }
    return t || e && e[0];
  }
}, d9 = {
  KeepAlive: p9
};
function h9(e) {
  var t = {};
  t.get = function() {
    return K;
  }, process.env.NODE_ENV !== "production" && (t.set = function() {
    _("Do not replace the Vue.config object, set individual fields instead.");
  }), Object.defineProperty(e, "config", t), e.util = {
    warn: _,
    extend: J,
    mergeOptions: Ne,
    defineReactive: B1
  }, e.set = N2, e.delete = v0, e.nextTick = $2, e.observable = function(n) {
    return te(n), n;
  }, e.options = /* @__PURE__ */ Object.create(null), y5.forEach(function(n) {
    e.options[n + "s"] = /* @__PURE__ */ Object.create(null);
  }), e.options._base = e, J(e.options.components, d9), s9(e), a9(e), l9(e), f9(e);
}
h9(H);
Object.defineProperty(H.prototype, "$isServer", {
  get: Ot
});
Object.defineProperty(H.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(H, "FunctionalRenderContext", {
  value: V2
});
H.version = Q6;
var C9 = A1("style,class"), v9 = A1("input,textarea,option,select,progress"), g9 = function(e, t, n) {
  return n === "value" && v9(e) && t !== "button" || n === "selected" && e === "option" || n === "checked" && e === "input" || n === "muted" && e === "video";
}, k0 = A1("contenteditable,draggable,spellcheck"), L9 = A1("events,caret,typing,plaintext-only"), w9 = function(e, t) {
  return a5(t) || t === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    e === "contenteditable" && L9(t) ? t : "true"
  );
}, m9 = A1("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), c2 = "http://www.w3.org/1999/xlink", q2 = function(e) {
  return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
}, R0 = function(e) {
  return q2(e) ? e.slice(6, e.length) : "";
}, a5 = function(e) {
  return e == null || e === !1;
};
function x9(e) {
  for (var t = e.data, n = e, r = e; h(r.componentInstance); )
    r = r.componentInstance._vnode, r && r.data && (t = G4(r.data, t));
  for (; h(n = n.parent); )
    n && n.data && (t = G4(t, n.data));
  return y9(t.staticClass, t.class);
}
function G4(e, t) {
  return {
    staticClass: Y2(e.staticClass, t.staticClass),
    class: h(e.class) ? [e.class, t.class] : t.class
  };
}
function y9(e, t) {
  return h(e) || h(t) ? Y2(e, K2(t)) : "";
}
function Y2(e, t) {
  return e ? t ? e + " " + t : e : t || "";
}
function K2(e) {
  return Array.isArray(e) ? _9(e) : d1(e) ? b9(e) : typeof e == "string" ? e : "";
}
function _9(e) {
  for (var t = "", n, r = 0, i = e.length; r < i; r++)
    h(n = K2(e[r])) && n !== "" && (t && (t += " "), t += n);
  return t;
}
function b9(e) {
  var t = "";
  for (var n in e)
    e[n] && (t && (t += " "), t += n);
  return t;
}
var M9 = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, E9 = A1("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), X2 = A1("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), D0 = function(e) {
  return E9(e) || X2(e);
};
function O9(e) {
  if (X2(e))
    return "svg";
  if (e === "math")
    return "math";
}
var Dt = /* @__PURE__ */ Object.create(null);
function S9(e) {
  if (!b1)
    return !0;
  if (D0(e))
    return !1;
  if (e = e.toLowerCase(), Dt[e] != null)
    return Dt[e];
  var t = document.createElement(e);
  return e.indexOf("-") > -1 ? Dt[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Dt[e] = /HTMLUnknownElement/.test(t.toString());
}
var u2 = A1("text,number,password,search,email,tel,url");
function T9(e) {
  if (typeof e == "string") {
    var t = document.querySelector(e);
    return t || (process.env.NODE_ENV !== "production" && _("Cannot find element: " + e), document.createElement("div"));
  } else
    return e;
}
function A9(e, t) {
  var n = document.createElement(e);
  return e !== "select" || t.data && t.data.attrs && t.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
}
function N9(e, t) {
  return document.createElementNS(M9[e], t);
}
function Z9(e) {
  return document.createTextNode(e);
}
function H9(e) {
  return document.createComment(e);
}
function I9(e, t, n) {
  e.insertBefore(t, n);
}
function $9(e, t) {
  e.removeChild(t);
}
function P9(e, t) {
  e.appendChild(t);
}
function k9(e) {
  return e.parentNode;
}
function R9(e) {
  return e.nextSibling;
}
function D9(e) {
  return e.tagName;
}
function V9(e, t) {
  e.textContent = t;
}
function B9(e, t) {
  e.setAttribute(t, "");
}
var j9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement: A9,
  createElementNS: N9,
  createTextNode: Z9,
  createComment: H9,
  insertBefore: I9,
  removeChild: $9,
  appendChild: P9,
  parentNode: k9,
  nextSibling: R9,
  tagName: D9,
  setTextContent: V9,
  setStyleScope: B9
}), F9 = {
  create: function(e, t) {
    je(t);
  },
  update: function(e, t) {
    e.data.ref !== t.data.ref && (je(e, !0), je(t));
  },
  destroy: function(e) {
    je(e, !0);
  }
};
function je(e, t) {
  var n = e.data.ref;
  if (h(n)) {
    var r = e.context, i = e.componentInstance || e.elm, o = t ? null : i, s = t ? void 0 : i;
    if (n1(n)) {
      ve(n, r, [o], r, "template ref function");
      return;
    }
    var a = e.data.refInFor, l = typeof n == "string" || typeof n == "number", c = q1(n), u = r.$refs;
    if (l || c)
      if (a) {
        var C = l ? u[n] : n.value;
        t ? k(C) && we(C, i) : k(C) ? C.includes(i) || C.push(i) : l ? (u[n] = [i], W4(r, n, u[n])) : n.value = [i];
      } else if (l) {
        if (t && u[n] !== i)
          return;
        u[n] = s, W4(r, n, o);
      } else if (c) {
        if (t && n.value !== i)
          return;
        n.value = o;
      } else
        process.env.NODE_ENV !== "production" && _("Invalid template ref type: ".concat(typeof n));
  }
}
function W4(e, t, n) {
  var r = e._setupState;
  r && p1(r, t) && (q1(r[t]) ? r[t].value = n : r[t] = n);
}
var fe = new y1("", {}, []), ct = ["create", "activate", "update", "remove", "destroy"];
function xe(e, t) {
  return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && h(e.data) === h(t.data) && U9(e, t) || o1(e.isAsyncPlaceholder) && N(t.asyncFactory.error));
}
function U9(e, t) {
  if (e.tag !== "input")
    return !0;
  var n, r = h(n = e.data) && h(n = n.attrs) && n.type, i = h(n = t.data) && h(n = n.attrs) && n.type;
  return r === i || u2(r) && u2(i);
}
function z9(e, t, n) {
  var r, i, o = {};
  for (r = t; r <= n; ++r)
    i = e[r].key, h(i) && (o[i] = r);
  return o;
}
function G9(e) {
  var t, n, r = {}, i = e.modules, o = e.nodeOps;
  for (t = 0; t < ct.length; ++t)
    for (r[ct[t]] = [], n = 0; n < i.length; ++n)
      h(i[n][ct[t]]) && r[ct[t]].push(i[n][ct[t]]);
  function s(p) {
    return new y1(o.tagName(p).toLowerCase(), {}, [], void 0, p);
  }
  function a(p, f) {
    function v() {
      --v.listeners === 0 && l(p);
    }
    return v.listeners = f, v;
  }
  function l(p) {
    var f = o.parentNode(p);
    h(f) && o.removeChild(f, p);
  }
  function c(p, f) {
    return !f && !p.ns && !(K.ignoredElements.length && K.ignoredElements.some(function(v) {
      return n0(v) ? v.test(p.tag) : v === p.tag;
    })) && K.isUnknownElement(p.tag);
  }
  var u = 0;
  function C(p, f, v, M, E, D, B) {
    if (h(p.elm) && h(D) && (p = D[B] = J5(p)), p.isRootInsert = !E, !x(p, f, v, M)) {
      var S = p.data, Y = p.children, U = p.tag;
      h(U) ? (process.env.NODE_ENV !== "production" && (S && S.pre && u++, c(p, u) && _("Unknown custom element: <" + U + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', p.context)), p.elm = p.ns ? o.createElementNS(p.ns, U) : o.createElement(U, p), C1(p), i1(p, Y, f), h(S) && e1(p, f), V(v, p.elm, M), process.env.NODE_ENV !== "production" && S && S.pre && u--) : o1(p.isComment) ? (p.elm = o.createComment(p.text), V(v, p.elm, M)) : (p.elm = o.createTextNode(p.text), V(v, p.elm, M));
    }
  }
  function x(p, f, v, M) {
    var E = p.data;
    if (h(E)) {
      var D = h(p.componentInstance) && E.keepAlive;
      if (h(E = E.hook) && h(E = E.init) && E(
        p,
        !1
        /* hydrating */
      ), h(p.componentInstance))
        return O(p, f), V(v, p.elm, M), o1(D) && I(p, f, v, M), !0;
    }
  }
  function O(p, f) {
    h(p.data.pendingInsert) && (f.push.apply(f, p.data.pendingInsert), p.data.pendingInsert = null), p.elm = p.componentInstance.$el, Q(p) ? (e1(p, f), C1(p)) : (je(p), f.push(p));
  }
  function I(p, f, v, M) {
    for (var E, D = p; D.componentInstance; )
      if (D = D.componentInstance._vnode, h(E = D.data) && h(E = E.transition)) {
        for (E = 0; E < r.activate.length; ++E)
          r.activate[E](fe, D);
        f.push(D);
        break;
      }
    V(v, p.elm, M);
  }
  function V(p, f, v) {
    h(p) && (h(v) ? o.parentNode(v) === p && o.insertBefore(p, f, v) : o.appendChild(p, f));
  }
  function i1(p, f, v) {
    if (k(f)) {
      process.env.NODE_ENV !== "production" && P1(f);
      for (var M = 0; M < f.length; ++M)
        C(f[M], v, p.elm, null, !0, f, M);
    } else
      oe(p.text) && o.appendChild(p.elm, o.createTextNode(String(p.text)));
  }
  function Q(p) {
    for (; p.componentInstance; )
      p = p.componentInstance._vnode;
    return h(p.tag);
  }
  function e1(p, f) {
    for (var v = 0; v < r.create.length; ++v)
      r.create[v](fe, p);
    t = p.data.hook, h(t) && (h(t.create) && t.create(fe, p), h(t.insert) && f.push(p));
  }
  function C1(p) {
    var f;
    if (h(f = p.fnScopeId))
      o.setStyleScope(p.elm, f);
    else
      for (var v = p; v; )
        h(f = v.context) && h(f = f.$options._scopeId) && o.setStyleScope(p.elm, f), v = v.parent;
    h(f = Oe) && f !== p.context && f !== p.fnContext && h(f = f.$options._scopeId) && o.setStyleScope(p.elm, f);
  }
  function j1(p, f, v, M, E, D) {
    for (; M <= E; ++M)
      C(v[M], D, p, f, !1, v, M);
  }
  function M1(p) {
    var f, v, M = p.data;
    if (h(M))
      for (h(f = M.hook) && h(f = f.destroy) && f(p), f = 0; f < r.destroy.length; ++f)
        r.destroy[f](p);
    if (h(f = p.children))
      for (v = 0; v < p.children.length; ++v)
        M1(p.children[v]);
  }
  function q(p, f, v) {
    for (; f <= v; ++f) {
      var M = p[f];
      h(M) && (h(M.tag) ? (s1(M), M1(M)) : l(M.elm));
    }
  }
  function s1(p, f) {
    if (h(f) || h(p.data)) {
      var v, M = r.remove.length + 1;
      for (h(f) ? f.listeners += M : f = a(p.elm, M), h(v = p.componentInstance) && h(v = v._vnode) && h(v.data) && s1(v, f), v = 0; v < r.remove.length; ++v)
        r.remove[v](p, f);
      h(v = p.data.hook) && h(v = v.remove) ? v(p, f) : f();
    } else
      l(p.elm);
  }
  function E1(p, f, v, M, E) {
    var D = 0, B = 0, S = f.length - 1, Y = f[0], U = f[S], z = v.length - 1, l1 = v[0], a1 = v[z], U1, v1, D1, Zt, Re = !E;
    for (process.env.NODE_ENV !== "production" && P1(v); D <= S && B <= z; )
      N(Y) ? Y = f[++D] : N(U) ? U = f[--S] : xe(Y, l1) ? (k1(Y, l1, M, v, B), Y = f[++D], l1 = v[++B]) : xe(U, a1) ? (k1(U, a1, M, v, z), U = f[--S], a1 = v[--z]) : xe(Y, a1) ? (k1(Y, a1, M, v, z), Re && o.insertBefore(p, Y.elm, o.nextSibling(U.elm)), Y = f[++D], a1 = v[--z]) : xe(U, l1) ? (k1(U, l1, M, v, B), Re && o.insertBefore(p, U.elm, Y.elm), U = f[--S], l1 = v[++B]) : (N(U1) && (U1 = z9(f, D, S)), v1 = h(l1.key) ? U1[l1.key] : ke(l1, f, D, S), N(v1) ? C(l1, M, p, Y.elm, !1, v, B) : (D1 = f[v1], xe(D1, l1) ? (k1(D1, l1, M, v, B), f[v1] = void 0, Re && o.insertBefore(p, D1.elm, Y.elm)) : C(l1, M, p, Y.elm, !1, v, B)), l1 = v[++B]);
    D > S ? (Zt = N(v[z + 1]) ? null : v[z + 1].elm, j1(p, Zt, v, B, z, M)) : B > z && q(f, D, S);
  }
  function P1(p) {
    for (var f = {}, v = 0; v < p.length; v++) {
      var M = p[v], E = M.key;
      h(E) && (f[E] ? _("Duplicate keys detected: '".concat(E, "'. This may cause an update error."), M.context) : f[E] = !0);
    }
  }
  function ke(p, f, v, M) {
    for (var E = v; E < M; E++) {
      var D = f[E];
      if (h(D) && xe(p, D))
        return E;
    }
  }
  function k1(p, f, v, M, E, D) {
    if (p !== f) {
      h(f.elm) && h(M) && (f = M[E] = J5(f));
      var B = f.elm = p.elm;
      if (o1(p.isAsyncPlaceholder)) {
        h(f.asyncFactory.resolved) ? R1(p.elm, f, v) : f.isAsyncPlaceholder = !0;
        return;
      }
      if (o1(f.isStatic) && o1(p.isStatic) && f.key === p.key && (o1(f.isCloned) || o1(f.isOnce))) {
        f.componentInstance = p.componentInstance;
        return;
      }
      var S, Y = f.data;
      h(Y) && h(S = Y.hook) && h(S = S.prepatch) && S(p, f);
      var U = p.children, z = f.children;
      if (h(Y) && Q(f)) {
        for (S = 0; S < r.update.length; ++S)
          r.update[S](p, f);
        h(S = Y.hook) && h(S = S.update) && S(p, f);
      }
      N(f.text) ? h(U) && h(z) ? U !== z && E1(B, U, z, v, D) : h(z) ? (process.env.NODE_ENV !== "production" && P1(z), h(p.text) && o.setTextContent(B, ""), j1(B, null, z, 0, z.length - 1, v)) : h(U) ? q(U, 0, U.length - 1) : h(p.text) && o.setTextContent(B, "") : p.text !== f.text && o.setTextContent(B, f.text), h(Y) && h(S = Y.hook) && h(S = S.postpatch) && S(p, f);
    }
  }
  function w1(p, f, v) {
    if (o1(v) && h(p.parent))
      p.parent.data.pendingInsert = f;
    else
      for (var M = 0; M < f.length; ++M)
        f[M].data.hook.insert(f[M]);
  }
  var F1 = !1, ae = A1("attrs,class,staticClass,staticStyle,key");
  function R1(p, f, v, M) {
    var E, D = f.tag, B = f.data, S = f.children;
    if (M = M || B && B.pre, f.elm = p, o1(f.isComment) && h(f.asyncFactory))
      return f.isAsyncPlaceholder = !0, !0;
    if (process.env.NODE_ENV !== "production" && !K1(p, f, M))
      return !1;
    if (h(B) && (h(E = B.hook) && h(E = E.init) && E(
      f,
      !0
      /* hydrating */
    ), h(E = f.componentInstance)))
      return O(f, v), !0;
    if (h(D)) {
      if (h(S))
        if (!p.hasChildNodes())
          i1(f, S, v);
        else if (h(E = B) && h(E = E.domProps) && h(E = E.innerHTML)) {
          if (E !== p.innerHTML)
            return process.env.NODE_ENV !== "production" && typeof console != "undefined" && !F1 && (F1 = !0, console.warn("Parent: ", p), console.warn("server innerHTML: ", E), console.warn("client innerHTML: ", p.innerHTML)), !1;
        } else {
          for (var Y = !0, U = p.firstChild, z = 0; z < S.length; z++) {
            if (!U || !R1(U, S[z], v, M)) {
              Y = !1;
              break;
            }
            U = U.nextSibling;
          }
          if (!Y || U)
            return process.env.NODE_ENV !== "production" && typeof console != "undefined" && !F1 && (F1 = !0, console.warn("Parent: ", p), console.warn("Mismatching childNodes vs. VNodes: ", p.childNodes, S)), !1;
        }
      if (h(B)) {
        var l1 = !1;
        for (var a1 in B)
          if (!ae(a1)) {
            l1 = !0, e1(f, v);
            break;
          }
        !l1 && B.class && r5(B.class);
      }
    } else
      p.data !== f.text && (p.data = f.text);
    return !0;
  }
  function K1(p, f, v) {
    return h(f.tag) ? f.tag.indexOf("vue-component") === 0 || !c(f, v) && f.tag.toLowerCase() === (p.tagName && p.tagName.toLowerCase()) : p.nodeType === (f.isComment ? 8 : 3);
  }
  return function(f, v, M, E) {
    if (N(v)) {
      h(f) && M1(f);
      return;
    }
    var D = !1, B = [];
    if (N(f))
      D = !0, C(v, B);
    else {
      var S = h(f.nodeType);
      if (!S && xe(f, v))
        k1(f, v, B, null, null, E);
      else {
        if (S) {
          if (f.nodeType === 1 && f.hasAttribute(C4) && (f.removeAttribute(C4), M = !0), o1(M)) {
            if (R1(f, v, B))
              return w1(v, B, !0), f;
            process.env.NODE_ENV !== "production" && _("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
          }
          f = s(f);
        }
        var Y = f.elm, U = o.parentNode(Y);
        if (C(
          v,
          B,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          Y._leaveCb ? null : U,
          o.nextSibling(Y)
        ), h(v.parent))
          for (var z = v.parent, l1 = Q(v); z; ) {
            for (var a1 = 0; a1 < r.destroy.length; ++a1)
              r.destroy[a1](z);
            if (z.elm = v.elm, l1) {
              for (var U1 = 0; U1 < r.create.length; ++U1)
                r.create[U1](fe, z);
              var v1 = z.data.hook.insert;
              if (v1.merged)
                for (var D1 = 1; D1 < v1.fns.length; D1++)
                  v1.fns[D1]();
            } else
              je(z);
            z = z.parent;
          }
        h(U) ? q([f], 0, 0) : h(f.tag) && M1(f);
      }
    }
    return w1(v, B, D), v.elm;
  };
}
var W9 = {
  create: P5,
  update: P5,
  destroy: function(t) {
    P5(t, fe);
  }
};
function P5(e, t) {
  (e.data.directives || t.data.directives) && q9(e, t);
}
function q9(e, t) {
  var n = e === fe, r = t === fe, i = q4(e.data.directives, e.context), o = q4(t.data.directives, t.context), s = [], a = [], l, c, u;
  for (l in o)
    c = i[l], u = o[l], c ? (u.oldValue = c.value, u.oldArg = c.arg, ut(u, "update", t, e), u.def && u.def.componentUpdated && a.push(u)) : (ut(u, "bind", t, e), u.def && u.def.inserted && s.push(u));
  if (s.length) {
    var C = function() {
      for (var x = 0; x < s.length; x++)
        ut(s[x], "inserted", t, e);
    };
    n ? ue(t, "insert", C) : C();
  }
  if (a.length && ue(t, "postpatch", function() {
    for (var x = 0; x < a.length; x++)
      ut(a[x], "componentUpdated", t, e);
  }), !n)
    for (l in i)
      o[l] || ut(i[l], "unbind", e, e, r);
}
var Y9 = /* @__PURE__ */ Object.create(null);
function q4(e, t) {
  var n = /* @__PURE__ */ Object.create(null);
  if (!e)
    return n;
  var r, i;
  for (r = 0; r < e.length; r++) {
    if (i = e[r], i.modifiers || (i.modifiers = Y9), n[K9(i)] = i, t._setupState && t._setupState.__sfc) {
      var o = i.def || o5(t, "_setupState", "v-" + i.name);
      typeof o == "function" ? i.def = {
        bind: o,
        update: o
      } : i.def = o;
    }
    i.def = i.def || o5(t.$options, "directives", i.name, !0);
  }
  return n;
}
function K9(e) {
  return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."));
}
function ut(e, t, n, r, i) {
  var o = e.def && e.def[t];
  if (o)
    try {
      o(n.elm, e, n, r, i);
    } catch (s) {
      Ce(s, n.context, "directive ".concat(e.name, " ").concat(t, " hook"));
    }
}
var X9 = [F9, W9];
function Y4(e, t) {
  var n = t.componentOptions;
  if (!(h(n) && n.Ctor.options.inheritAttrs === !1) && !(N(e.data.attrs) && N(t.data.attrs))) {
    var r, i, o, s = t.elm, a = e.data.attrs || {}, l = t.data.attrs || {};
    (h(l.__ob__) || o1(l._v_attr_proxy)) && (l = t.data.attrs = J({}, l));
    for (r in l)
      i = l[r], o = a[r], o !== i && K4(s, r, i, t.data.pre);
    (Ke || p0) && l.value !== a.value && K4(s, "value", l.value);
    for (r in a)
      N(l[r]) && (q2(r) ? s.removeAttributeNS(c2, R0(r)) : k0(r) || s.removeAttribute(r));
  }
}
function K4(e, t, n, r) {
  r || e.tagName.indexOf("-") > -1 ? X4(e, t, n) : m9(t) ? a5(n) ? e.removeAttribute(t) : (n = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t, e.setAttribute(t, n)) : k0(t) ? e.setAttribute(t, w9(t, n)) : q2(t) ? a5(n) ? e.removeAttributeNS(c2, R0(t)) : e.setAttributeNS(c2, t, n) : X4(e, t, n);
}
function X4(e, t, n) {
  if (a5(n))
    e.removeAttribute(t);
  else {
    if (Ke && !Xe && e.tagName === "TEXTAREA" && t === "placeholder" && n !== "" && !e.__ieph) {
      var r = function(i) {
        i.stopImmediatePropagation(), e.removeEventListener("input", r);
      };
      e.addEventListener("input", r), e.__ieph = !0;
    }
    e.setAttribute(t, n);
  }
}
var J9 = {
  create: Y4,
  update: Y4
};
function J4(e, t) {
  var n = t.elm, r = t.data, i = e.data;
  if (!(N(r.staticClass) && N(r.class) && (N(i) || N(i.staticClass) && N(i.class)))) {
    var o = x9(t), s = n._transitionClasses;
    h(s) && (o = Y2(o, K2(s))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
  }
}
var Q9 = {
  create: J4,
  update: J4
}, k5 = "__r", R5 = "__c";
function e8(e) {
  if (h(e[k5])) {
    var t = Ke ? "change" : "input";
    e[t] = [].concat(e[k5], e[t] || []), delete e[k5];
  }
  h(e[R5]) && (e.change = [].concat(e[R5], e.change || []), delete e[R5]);
}
var bt;
function t8(e, t, n) {
  var r = bt;
  return function i() {
    var o = t.apply(null, arguments);
    o !== null && V0(e, i, n, r);
  };
}
var n8 = n2 && !(v4 && Number(v4[1]) <= 53);
function r8(e, t, n, r) {
  if (n8) {
    var i = Z0, o = t;
    t = o._wrapper = function(s) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        s.target === s.currentTarget || // event is fired after handler attachment
        s.timeStamp >= i || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        s.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        s.target.ownerDocument !== document
      )
        return o.apply(this, arguments);
    };
  }
  bt.addEventListener(e, t, d0 ? { capture: n, passive: r } : n);
}
function V0(e, t, n, r) {
  (r || bt).removeEventListener(
    e,
    //@ts-expect-error
    t._wrapper || t,
    n
  );
}
function D5(e, t) {
  if (!(N(e.data.on) && N(t.data.on))) {
    var n = t.data.on || {}, r = e.data.on || {};
    bt = t.elm || e.elm, e8(n), w0(n, r, r8, V0, t8, t.context), bt = void 0;
  }
}
var i8 = {
  create: D5,
  update: D5,
  // @ts-expect-error emptyNode has actually data
  destroy: function(e) {
    return D5(e, fe);
  }
}, Vt;
function Q4(e, t) {
  if (!(N(e.data.domProps) && N(t.data.domProps))) {
    var n, r, i = t.elm, o = e.data.domProps || {}, s = t.data.domProps || {};
    (h(s.__ob__) || o1(s._v_attr_proxy)) && (s = t.data.domProps = J({}, s));
    for (n in o)
      n in s || (i[n] = "");
    for (n in s) {
      if (r = s[n], n === "textContent" || n === "innerHTML") {
        if (t.children && (t.children.length = 0), r === o[n])
          continue;
        i.childNodes.length === 1 && i.removeChild(i.childNodes[0]);
      }
      if (n === "value" && i.tagName !== "PROGRESS") {
        i._value = r;
        var a = N(r) ? "" : String(r);
        o8(i, a) && (i.value = a);
      } else if (n === "innerHTML" && X2(i.tagName) && N(i.innerHTML)) {
        Vt = Vt || document.createElement("div"), Vt.innerHTML = "<svg>".concat(r, "</svg>");
        for (var l = Vt.firstChild; i.firstChild; )
          i.removeChild(i.firstChild);
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        r !== o[n]
      )
        try {
          i[n] = r;
        } catch (c) {
        }
    }
  }
}
function o8(e, t) {
  return (
    //@ts-expect-error
    !e.composing && (e.tagName === "OPTION" || s8(e, t) || a8(e, t))
  );
}
function s8(e, t) {
  var n = !0;
  try {
    n = document.activeElement !== e;
  } catch (r) {
  }
  return n && e.value !== t;
}
function a8(e, t) {
  var n = e.value, r = e._vModifiers;
  if (h(r)) {
    if (r.number)
      return gt(n) !== gt(t);
    if (r.trim)
      return n.trim() !== t.trim();
  }
  return n !== t;
}
var l8 = {
  create: Q4,
  update: Q4
}, c8 = He(function(e) {
  var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
  return e.split(n).forEach(function(i) {
    if (i) {
      var o = i.split(r);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
});
function V5(e) {
  var t = B0(e.style);
  return e.staticStyle ? J(e.staticStyle, t) : t;
}
function B0(e) {
  return Array.isArray(e) ? a0(e) : typeof e == "string" ? c8(e) : e;
}
function u8(e, t) {
  var n = {}, r;
  if (t)
    for (var i = e; i.componentInstance; )
      i = i.componentInstance._vnode, i && i.data && (r = V5(i.data)) && J(n, r);
  (r = V5(e.data)) && J(n, r);
  for (var o = e; o = o.parent; )
    o.data && (r = V5(o.data)) && J(n, r);
  return n;
}
var f8 = /^--/, e3 = /\s*!important$/, t3 = function(e, t, n) {
  if (f8.test(t))
    e.style.setProperty(t, n);
  else if (e3.test(n))
    e.style.setProperty(Ie(t), n.replace(e3, ""), "important");
  else {
    var r = p8(t);
    if (Array.isArray(n))
      for (var i = 0, o = n.length; i < o; i++)
        e.style[r] = n[i];
    else
      e.style[r] = n;
  }
}, n3 = ["Webkit", "Moz", "ms"], Bt, p8 = He(function(e) {
  if (Bt = Bt || document.createElement("div").style, e = Te(e), e !== "filter" && e in Bt)
    return e;
  for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < n3.length; n++) {
    var r = n3[n] + t;
    if (r in Bt)
      return r;
  }
});
function r3(e, t) {
  var n = t.data, r = e.data;
  if (!(N(n.staticStyle) && N(n.style) && N(r.staticStyle) && N(r.style))) {
    var i, o, s = t.elm, a = r.staticStyle, l = r.normalizedStyle || r.style || {}, c = a || l, u = B0(t.data.style) || {};
    t.data.normalizedStyle = h(u.__ob__) ? J({}, u) : u;
    var C = u8(t, !0);
    for (o in c)
      N(C[o]) && t3(s, o, "");
    for (o in C)
      i = C[o], i !== c[o] && t3(s, o, i == null ? "" : i);
  }
}
var d8 = {
  create: r3,
  update: r3
}, j0 = /\s+/;
function F0(e, t) {
  if (!(!t || !(t = t.trim())))
    if (e.classList)
      t.indexOf(" ") > -1 ? t.split(j0).forEach(function(r) {
        return e.classList.add(r);
      }) : e.classList.add(t);
    else {
      var n = " ".concat(e.getAttribute("class") || "", " ");
      n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
    }
}
function U0(e, t) {
  if (!(!t || !(t = t.trim())))
    if (e.classList)
      t.indexOf(" ") > -1 ? t.split(j0).forEach(function(i) {
        return e.classList.remove(i);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
    else {
      for (var n = " ".concat(e.getAttribute("class") || "", " "), r = " " + t + " "; n.indexOf(r) >= 0; )
        n = n.replace(r, " ");
      n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class");
    }
}
function z0(e) {
  if (e) {
    if (typeof e == "object") {
      var t = {};
      return e.css !== !1 && J(t, i3(e.name || "v")), J(t, e), t;
    } else if (typeof e == "string")
      return i3(e);
  }
}
var i3 = He(function(e) {
  return {
    enterClass: "".concat(e, "-enter"),
    enterToClass: "".concat(e, "-enter-to"),
    enterActiveClass: "".concat(e, "-enter-active"),
    leaveClass: "".concat(e, "-leave"),
    leaveToClass: "".concat(e, "-leave-to"),
    leaveActiveClass: "".concat(e, "-leave-active")
  };
}), G0 = b1 && !Xe, De = "transition", B5 = "animation", Wt = "transition", l5 = "transitionend", f2 = "animation", W0 = "animationend";
G0 && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Wt = "WebkitTransition", l5 = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (f2 = "WebkitAnimation", W0 = "webkitAnimationEnd"));
var o3 = b1 ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(e) {
    return e();
  }
);
function q0(e) {
  o3(function() {
    o3(e);
  });
}
function Se(e, t) {
  var n = e._transitionClasses || (e._transitionClasses = []);
  n.indexOf(t) < 0 && (n.push(t), F0(e, t));
}
function ee(e, t) {
  e._transitionClasses && we(e._transitionClasses, t), U0(e, t);
}
function Y0(e, t, n) {
  var r = K0(e, t), i = r.type, o = r.timeout, s = r.propCount;
  if (!i)
    return n();
  var a = i === De ? l5 : W0, l = 0, c = function() {
    e.removeEventListener(a, u), n();
  }, u = function(C) {
    C.target === e && ++l >= s && c();
  };
  setTimeout(function() {
    l < s && c();
  }, o + 1), e.addEventListener(a, u);
}
var h8 = /\b(transform|all)(,|$)/;
function K0(e, t) {
  var n = window.getComputedStyle(e), r = (n[Wt + "Delay"] || "").split(", "), i = (n[Wt + "Duration"] || "").split(", "), o = s3(r, i), s = (n[f2 + "Delay"] || "").split(", "), a = (n[f2 + "Duration"] || "").split(", "), l = s3(s, a), c, u = 0, C = 0;
  t === De ? o > 0 && (c = De, u = o, C = i.length) : t === B5 ? l > 0 && (c = B5, u = l, C = a.length) : (u = Math.max(o, l), c = u > 0 ? o > l ? De : B5 : null, C = c ? c === De ? i.length : a.length : 0);
  var x = c === De && h8.test(n[Wt + "Property"]);
  return {
    type: c,
    timeout: u,
    propCount: C,
    hasTransform: x
  };
}
function s3(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max.apply(null, t.map(function(n, r) {
    return a3(n) + a3(e[r]);
  }));
}
function a3(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function p2(e, t) {
  var n = e.elm;
  h(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
  var r = z0(e.data.transition);
  if (!N(r) && !(h(n._enterCb) || n.nodeType !== 1)) {
    for (var i = r.css, o = r.type, s = r.enterClass, a = r.enterToClass, l = r.enterActiveClass, c = r.appearClass, u = r.appearToClass, C = r.appearActiveClass, x = r.beforeEnter, O = r.enter, I = r.afterEnter, V = r.enterCancelled, i1 = r.beforeAppear, Q = r.appear, e1 = r.afterAppear, C1 = r.appearCancelled, j1 = r.duration, M1 = Oe, q = Oe.$vnode; q && q.parent; )
      M1 = q.context, q = q.parent;
    var s1 = !M1._isMounted || !e.isRootInsert;
    if (!(s1 && !Q && Q !== "")) {
      var E1 = s1 && c ? c : s, P1 = s1 && C ? C : l, ke = s1 && u ? u : a, k1 = s1 && i1 || x, w1 = s1 && n1(Q) ? Q : O, F1 = s1 && e1 || I, ae = s1 && C1 || V, R1 = gt(d1(j1) ? j1.enter : j1);
      process.env.NODE_ENV !== "production" && R1 != null && J0(R1, "enter", e);
      var K1 = i !== !1 && !Xe, p = J2(w1), f = n._enterCb = Xt(function() {
        K1 && (ee(n, ke), ee(n, P1)), f.cancelled ? (K1 && ee(n, E1), ae && ae(n)) : F1 && F1(n), n._enterCb = null;
      });
      e.data.show || ue(e, "insert", function() {
        var v = n.parentNode, M = v && v._pending && v._pending[e.key];
        M && M.tag === e.tag && M.elm._leaveCb && M.elm._leaveCb(), w1 && w1(n, f);
      }), k1 && k1(n), K1 && (Se(n, E1), Se(n, P1), q0(function() {
        ee(n, E1), f.cancelled || (Se(n, ke), p || (Q0(R1) ? setTimeout(f, R1) : Y0(n, o, f)));
      })), e.data.show && (t && t(), w1 && w1(n, f)), !K1 && !p && f();
    }
  }
}
function X0(e, t) {
  var n = e.elm;
  h(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
  var r = z0(e.data.transition);
  if (N(r) || n.nodeType !== 1)
    return t();
  if (h(n._leaveCb))
    return;
  var i = r.css, o = r.type, s = r.leaveClass, a = r.leaveToClass, l = r.leaveActiveClass, c = r.beforeLeave, u = r.leave, C = r.afterLeave, x = r.leaveCancelled, O = r.delayLeave, I = r.duration, V = i !== !1 && !Xe, i1 = J2(u), Q = gt(d1(I) ? I.leave : I);
  process.env.NODE_ENV !== "production" && h(Q) && J0(Q, "leave", e);
  var e1 = n._leaveCb = Xt(function() {
    n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), V && (ee(n, a), ee(n, l)), e1.cancelled ? (V && ee(n, s), x && x(n)) : (t(), C && C(n)), n._leaveCb = null;
  });
  O ? O(C1) : C1();
  function C1() {
    e1.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), c && c(n), V && (Se(n, s), Se(n, l), q0(function() {
      ee(n, s), e1.cancelled || (Se(n, a), i1 || (Q0(Q) ? setTimeout(e1, Q) : Y0(n, o, e1)));
    })), u && u(n, e1), !V && !i1 && e1());
  }
}
function J0(e, t, n) {
  typeof e != "number" ? _("<transition> explicit ".concat(t, " duration is not a valid number - ") + "got ".concat(JSON.stringify(e), "."), n.context) : isNaN(e) && _("<transition> explicit ".concat(t, " duration is NaN - ") + "the duration expression might be incorrect.", n.context);
}
function Q0(e) {
  return typeof e == "number" && !isNaN(e);
}
function J2(e) {
  if (N(e))
    return !1;
  var t = e.fns;
  return h(t) ? J2(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
}
function l3(e, t) {
  t.data.show !== !0 && p2(t);
}
var C8 = b1 ? {
  create: l3,
  activate: l3,
  remove: function(e, t) {
    e.data.show !== !0 ? X0(e, t) : t();
  }
} : {}, v8 = [J9, Q9, i8, l8, d8, C8], g8 = v8.concat(X9), L8 = G9({ nodeOps: j9, modules: g8 });
Xe && document.addEventListener("selectionchange", function() {
  var e = document.activeElement;
  e && e.vmodel && Q2(e, "input");
});
var e7 = {
  inserted: function(e, t, n, r) {
    n.tag === "select" ? (r.elm && !r.elm._vOptions ? ue(n, "postpatch", function() {
      e7.componentUpdated(e, t, n);
    }) : c3(e, t, n.context), e._vOptions = [].map.call(e.options, c5)) : (n.tag === "textarea" || u2(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", w8), e.addEventListener("compositionend", p3), e.addEventListener("change", p3), Xe && (e.vmodel = !0)));
  },
  componentUpdated: function(e, t, n) {
    if (n.tag === "select") {
      c3(e, t, n.context);
      var r = e._vOptions, i = e._vOptions = [].map.call(e.options, c5);
      if (i.some(function(s, a) {
        return !Ae(s, r[a]);
      })) {
        var o = e.multiple ? t.value.some(function(s) {
          return f3(s, i);
        }) : t.value !== t.oldValue && f3(t.value, i);
        o && Q2(e, "change");
      }
    }
  }
};
function c3(e, t, n) {
  u3(e, t, n), (Ke || p0) && setTimeout(function() {
    u3(e, t, n);
  }, 0);
}
function u3(e, t, n) {
  var r = t.value, i = e.multiple;
  if (i && !Array.isArray(r)) {
    process.env.NODE_ENV !== "production" && _('<select multiple v-model="'.concat(t.expression, '"> ') + "expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(r).slice(8, -1)), n);
    return;
  }
  for (var o, s, a = 0, l = e.options.length; a < l; a++)
    if (s = e.options[a], i)
      o = c0(r, c5(s)) > -1, s.selected !== o && (s.selected = o);
    else if (Ae(c5(s), r)) {
      e.selectedIndex !== a && (e.selectedIndex = a);
      return;
    }
  i || (e.selectedIndex = -1);
}
function f3(e, t) {
  return t.every(function(n) {
    return !Ae(n, e);
  });
}
function c5(e) {
  return "_value" in e ? e._value : e.value;
}
function w8(e) {
  e.target.composing = !0;
}
function p3(e) {
  e.target.composing && (e.target.composing = !1, Q2(e.target, "input"));
}
function Q2(e, t) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(t, !0, !0), e.dispatchEvent(n);
}
function d2(e) {
  return e.componentInstance && (!e.data || !e.data.transition) ? d2(e.componentInstance._vnode) : e;
}
var m8 = {
  bind: function(e, t, n) {
    var r = t.value;
    n = d2(n);
    var i = n.data && n.data.transition, o = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
    r && i ? (n.data.show = !0, p2(n, function() {
      e.style.display = o;
    })) : e.style.display = r ? o : "none";
  },
  update: function(e, t, n) {
    var r = t.value, i = t.oldValue;
    if (!r != !i) {
      n = d2(n);
      var o = n.data && n.data.transition;
      o ? (n.data.show = !0, r ? p2(n, function() {
        e.style.display = e.__vOriginalDisplay;
      }) : X0(n, function() {
        e.style.display = "none";
      })) : e.style.display = r ? e.__vOriginalDisplay : "none";
    }
  },
  unbind: function(e, t, n, r, i) {
    i || (e.style.display = e.__vOriginalDisplay);
  }
}, x8 = {
  model: e7,
  show: m8
}, t7 = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function h2(e) {
  var t = e && e.componentOptions;
  return t && t.Ctor.options.abstract ? h2(M0(t.children)) : e;
}
function n7(e) {
  var t = {}, n = e.$options;
  for (var r in n.propsData)
    t[r] = e[r];
  var i = n._parentListeners;
  for (var r in i)
    t[Te(r)] = i[r];
  return t;
}
function d3(e, t) {
  if (/\d-keep-alive$/.test(t.tag))
    return e("keep-alive", {
      props: t.componentOptions.propsData
    });
}
function y8(e) {
  for (; e = e.parent; )
    if (e.data.transition)
      return !0;
}
function _8(e, t) {
  return t.key === e.key && t.tag === e.tag;
}
var b8 = function(e) {
  return e.tag || wt(e);
}, M8 = function(e) {
  return e.name === "show";
}, E8 = {
  name: "transition",
  props: t7,
  abstract: !0,
  render: function(e) {
    var t = this, n = this.$slots.default;
    if (n && (n = n.filter(b8), !!n.length)) {
      process.env.NODE_ENV !== "production" && n.length > 1 && _("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
      var r = this.mode;
      process.env.NODE_ENV !== "production" && r && r !== "in-out" && r !== "out-in" && _("invalid <transition> mode: " + r, this.$parent);
      var i = n[0];
      if (y8(this.$vnode))
        return i;
      var o = h2(i);
      if (!o)
        return i;
      if (this._leaving)
        return d3(e, i);
      var s = "__transition-".concat(this._uid, "-");
      o.key = o.key == null ? o.isComment ? s + "comment" : s + o.tag : oe(o.key) ? String(o.key).indexOf(s) === 0 ? o.key : s + o.key : o.key;
      var a = (o.data || (o.data = {})).transition = n7(this), l = this._vnode, c = h2(l);
      if (o.data.directives && o.data.directives.some(M8) && (o.data.show = !0), c && c.data && !_8(o, c) && !wt(c) && // #6687 component root is a comment node
      !(c.componentInstance && c.componentInstance._vnode.isComment)) {
        var u = c.data.transition = J({}, a);
        if (r === "out-in")
          return this._leaving = !0, ue(u, "afterLeave", function() {
            t._leaving = !1, t.$forceUpdate();
          }), d3(e, i);
        if (r === "in-out") {
          if (wt(o))
            return l;
          var C, x = function() {
            C();
          };
          ue(a, "afterEnter", x), ue(a, "enterCancelled", x), ue(u, "delayLeave", function(O) {
            C = O;
          });
        }
      }
      return i;
    }
  }
}, r7 = J({
  tag: String,
  moveClass: String
}, t7);
delete r7.mode;
var O8 = {
  props: r7,
  beforeMount: function() {
    var e = this, t = this._update;
    this._update = function(n, r) {
      var i = T0(e);
      e.__patch__(
        e._vnode,
        e.kept,
        !1,
        // hydrating
        !0
        // removeOnly (!important, avoids unnecessary moves)
      ), e._vnode = e.kept, i(), t.call(e, n, r);
    };
  },
  render: function(e) {
    for (var t = this.tag || this.$vnode.data.tag || "span", n = /* @__PURE__ */ Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], s = n7(this), a = 0; a < i.length; a++) {
      var l = i[a];
      if (l.tag) {
        if (l.key != null && String(l.key).indexOf("__vlist") !== 0)
          o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s;
        else if (process.env.NODE_ENV !== "production") {
          var c = l.componentOptions, u = c ? Ge(c.Ctor.options) || c.tag || "" : l.tag;
          _("<transition-group> children must be keyed: <".concat(u, ">"));
        }
      }
    }
    if (r) {
      for (var C = [], x = [], a = 0; a < r.length; a++) {
        var l = r[a];
        l.data.transition = s, l.data.pos = l.elm.getBoundingClientRect(), n[l.key] ? C.push(l) : x.push(l);
      }
      this.kept = e(t, null, C), this.removed = x;
    }
    return e(t, null, o);
  },
  updated: function() {
    var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
    !e.length || !this.hasMove(e[0].elm, t) || (e.forEach(S8), e.forEach(T8), e.forEach(A8), this._reflow = document.body.offsetHeight, e.forEach(function(n) {
      if (n.data.moved) {
        var r = n.elm, i = r.style;
        Se(r, t), i.transform = i.WebkitTransform = i.transitionDuration = "", r.addEventListener(l5, r._moveCb = function o(s) {
          s && s.target !== r || (!s || /transform$/.test(s.propertyName)) && (r.removeEventListener(l5, o), r._moveCb = null, ee(r, t));
        });
      }
    }));
  },
  methods: {
    hasMove: function(e, t) {
      if (!G0)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var n = e.cloneNode();
      e._transitionClasses && e._transitionClasses.forEach(function(i) {
        U0(n, i);
      }), F0(n, t), n.style.display = "none", this.$el.appendChild(n);
      var r = K0(n);
      return this.$el.removeChild(n), this._hasMove = r.hasTransform;
    }
  }
};
function S8(e) {
  e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
}
function T8(e) {
  e.data.newPos = e.elm.getBoundingClientRect();
}
function A8(e) {
  var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
  if (r || i) {
    e.data.moved = !0;
    var o = e.elm.style;
    o.transform = o.WebkitTransform = "translate(".concat(r, "px,").concat(i, "px)"), o.transitionDuration = "0s";
  }
}
var N8 = {
  Transition: E8,
  TransitionGroup: O8
};
H.config.mustUseProp = g9;
H.config.isReservedTag = D0;
H.config.isReservedAttr = C9;
H.config.getTagNamespace = O9;
H.config.isUnknownElement = S9;
J(H.options.directives, x8);
J(H.options.components, N8);
H.prototype.__patch__ = b1 ? L8 : c1;
H.prototype.$mount = function(e, t) {
  return e = e && b1 ? T9(e) : void 0, cn(this, e, t);
};
b1 && setTimeout(function() {
  K.devtools && (Jt ? Jt.emit("init", H) : process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && console[console.info ? "info" : "log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && K.productionTip !== !1 && typeof console != "undefined" && console[console.info ? "info" : "log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`);
}, 0);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qt = function(t) {
    return typeof t;
  } : qt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qt(e);
}
function Z8(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function H8(e) {
  return I8(e) || $8(e) || P8();
}
function I8(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
      n[t] = e[t];
    return n;
  }
}
function $8(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function P8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function k8() {
  return typeof Reflect != "undefined" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function R8(e, t) {
  j5(e, t), Object.getOwnPropertyNames(t.prototype).forEach(function(n) {
    j5(e.prototype, t.prototype, n);
  }), Object.getOwnPropertyNames(t).forEach(function(n) {
    j5(e, t, n);
  });
}
function j5(e, t, n) {
  var r = n ? Reflect.getOwnMetadataKeys(t, n) : Reflect.getOwnMetadataKeys(t);
  r.forEach(function(i) {
    var o = n ? Reflect.getOwnMetadata(i, t, n) : Reflect.getOwnMetadata(i, t);
    n ? Reflect.defineMetadata(i, o, e, n) : Reflect.defineMetadata(i, o, e);
  });
}
var D8 = {
  __proto__: []
}, V8 = D8 instanceof Array;
function e4(e) {
  return function(t, n, r) {
    var i = typeof t == "function" ? t : t.constructor;
    i.__decorators__ || (i.__decorators__ = []), typeof r != "number" && (r = void 0), i.__decorators__.push(function(o) {
      return e(o, n, r);
    });
  };
}
function B8() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return H.extend({
    mixins: t
  });
}
function j8(e) {
  var t = qt(e);
  return e == null || t !== "object" && t !== "function";
}
function i7(e) {
  typeof console != "undefined" && console.warn("[vue-class-component] " + e);
}
function F8(e, t) {
  var n = t.prototype._init;
  t.prototype._init = function() {
    var o = this, s = Object.getOwnPropertyNames(e);
    if (e.$options.props)
      for (var a in e.$options.props)
        e.hasOwnProperty(a) || s.push(a);
    s.forEach(function(l) {
      Object.defineProperty(o, l, {
        get: function() {
          return e[l];
        },
        set: function(u) {
          e[l] = u;
        },
        configurable: !0
      });
    });
  };
  var r = new t();
  t.prototype._init = n;
  var i = {};
  return Object.keys(r).forEach(function(o) {
    r[o] !== void 0 && (i[o] = r[o]);
  }), process.env.NODE_ENV !== "production" && !(t.prototype instanceof H) && Object.keys(i).length > 0 && i7("Component class must inherit Vue or its descendant class when class property is used."), i;
}
var C2 = [
  "data",
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeDestroy",
  "destroyed",
  "beforeUpdate",
  "updated",
  "activated",
  "deactivated",
  "render",
  "errorCaptured",
  "serverPrefetch"
  // 2.6
];
function h3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  t.name = t.name || e._componentTag || e.name;
  var n = e.prototype;
  Object.getOwnPropertyNames(n).forEach(function(a) {
    if (a !== "constructor") {
      if (C2.indexOf(a) > -1) {
        t[a] = n[a];
        return;
      }
      var l = Object.getOwnPropertyDescriptor(n, a);
      l.value !== void 0 ? typeof l.value == "function" ? (t.methods || (t.methods = {}))[a] = l.value : (t.mixins || (t.mixins = [])).push({
        data: function() {
          return Z8({}, a, l.value);
        }
      }) : (l.get || l.set) && ((t.computed || (t.computed = {}))[a] = {
        get: l.get,
        set: l.set
      });
    }
  }), (t.mixins || (t.mixins = [])).push({
    data: function() {
      return F8(this, e);
    }
  });
  var r = e.__decorators__;
  r && (r.forEach(function(a) {
    return a(t);
  }), delete e.__decorators__);
  var i = Object.getPrototypeOf(e.prototype), o = i instanceof H ? i.constructor : H, s = o.extend(t);
  return G8(s, e, o), k8() && R8(s, e), s;
}
var U8 = [
  // Unique id
  "cid",
  // Super Vue constructor
  "super",
  // Component options that will be used by the component
  "options",
  "superOptions",
  "extendOptions",
  "sealedOptions",
  // Private assets
  "component",
  "directive",
  "filter"
], z8 = {
  prototype: !0,
  arguments: !0,
  callee: !0,
  caller: !0
};
function G8(e, t, n) {
  Object.getOwnPropertyNames(t).forEach(function(r) {
    if (!z8[r]) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      if (!(i && !i.configurable)) {
        var o = Object.getOwnPropertyDescriptor(t, r);
        if (!V8) {
          if (r === "cid")
            return;
          var s = Object.getOwnPropertyDescriptor(n, r);
          if (!j8(o.value) && s && s.value === o.value)
            return;
        }
        process.env.NODE_ENV !== "production" && U8.indexOf(r) >= 0 && i7("Static property name '".concat(r, "' declared on class '").concat(t.name, "' ") + "conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."), Object.defineProperty(e, r, o);
      }
    }
  });
}
function f1(e) {
  return typeof e == "function" ? h3(e) : function(t) {
    return h3(t, e);
  };
}
f1.registerHooks = function(t) {
  C2.push.apply(C2, H8(t));
};
function W8(e) {
  return e4(function(t, n) {
    typeof t.inject == "undefined" && (t.inject = {}), Array.isArray(t.inject) || (t.inject[n] = e || n);
  });
}
var q8 = typeof Reflect != "undefined" && typeof Reflect.getMetadata != "undefined";
function Y8(e, t, n) {
  if (q8 && !Array.isArray(e) && typeof e != "function" && !e.hasOwnProperty("type") && typeof e.type == "undefined") {
    var r = Reflect.getMetadata("design:type", t, n);
    r !== Object && (e.type = r);
  }
}
function m(e) {
  return e === void 0 && (e = {}), function(t, n) {
    Y8(e, t, n), e4(function(r, i) {
      (r.props || (r.props = {}))[i] = e;
    })(t, n);
  };
}
function et(e, t) {
  t === void 0 && (t = {});
  var n = t.deep, r = n === void 0 ? !1 : n, i = t.immediate, o = i === void 0 ? !1 : i;
  return e4(function(s, a) {
    typeof s.watch != "object" && (s.watch = /* @__PURE__ */ Object.create(null));
    var l = s.watch;
    typeof l[e] == "object" && !Array.isArray(l[e]) ? l[e] = [l[e]] : typeof l[e] == "undefined" && (l[e] = []), l[e].push({ handler: a, deep: r, immediate: o });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function L(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}
function w(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
var Fe = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var K8 = typeof Fe == "object" && Fe && Fe.Object === Object && Fe, o7 = K8, X8 = o7, J8 = typeof self == "object" && self && self.Object === Object && self, Q8 = X8 || J8 || Function("return this")(), Y1 = Q8, er = Y1, tr = er.Symbol, t4 = tr, C3 = t4, s7 = Object.prototype, nr = s7.hasOwnProperty, rr = s7.toString, ft = C3 ? C3.toStringTag : void 0;
function ir(e) {
  var t = nr.call(e, ft), n = e[ft];
  try {
    e[ft] = void 0;
    var r = !0;
  } catch (o) {
  }
  var i = rr.call(e);
  return r && (t ? e[ft] = n : delete e[ft]), i;
}
var or = ir, sr = Object.prototype, ar = sr.toString;
function lr(e) {
  return ar.call(e);
}
var cr = lr, v3 = t4, ur = or, fr = cr, pr = "[object Null]", dr = "[object Undefined]", g3 = v3 ? v3.toStringTag : void 0;
function hr(e) {
  return e == null ? e === void 0 ? dr : pr : g3 && g3 in Object(e) ? ur(e) : fr(e);
}
var me = hr;
function Cr(e) {
  return e != null && typeof e == "object";
}
var Pe = Cr, vr = me, gr = Pe, Lr = "[object Number]";
function wr(e) {
  return typeof e == "number" || gr(e) && vr(e) == Lr;
}
var mr = wr;
const L3 = /* @__PURE__ */ $e(mr);
var xr = Object.prototype;
function yr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || xr;
  return e === n;
}
var a7 = yr;
function _r(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var l7 = _r, br = l7, Mr = br(Object.keys, Object), Er = Mr, Or = a7, Sr = Er, Tr = Object.prototype, Ar = Tr.hasOwnProperty;
function Nr(e) {
  if (!Or(e))
    return Sr(e);
  var t = [];
  for (var n in Object(e))
    Ar.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var c7 = Nr;
function Zr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var _5 = Zr, Hr = me, Ir = _5, $r = "[object AsyncFunction]", Pr = "[object Function]", kr = "[object GeneratorFunction]", Rr = "[object Proxy]";
function Dr(e) {
  if (!Ir(e))
    return !1;
  var t = Hr(e);
  return t == Pr || t == kr || t == $r || t == Rr;
}
var u7 = Dr, Vr = Y1, Br = Vr["__core-js_shared__"], jr = Br, F5 = jr, w3 = function() {
  var e = /[^.]+$/.exec(F5 && F5.keys && F5.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fr(e) {
  return !!w3 && w3 in e;
}
var Ur = Fr, zr = Function.prototype, Gr = zr.toString;
function Wr(e) {
  if (e != null) {
    try {
      return Gr.call(e);
    } catch (t) {
    }
    try {
      return e + "";
    } catch (t) {
    }
  }
  return "";
}
var f7 = Wr, qr = u7, Yr = Ur, Kr = _5, Xr = f7, Jr = /[\\^$.*+?()[\]{}|]/g, Qr = /^\[object .+?Constructor\]$/, ei = Function.prototype, ti = Object.prototype, ni = ei.toString, ri = ti.hasOwnProperty, ii = RegExp(
  "^" + ni.call(ri).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oi(e) {
  if (!Kr(e) || Yr(e))
    return !1;
  var t = qr(e) ? ii : Qr;
  return t.test(Xr(e));
}
var si = oi;
function ai(e, t) {
  return e == null ? void 0 : e[t];
}
var li = ai, ci = si, ui = li;
function fi(e, t) {
  var n = ui(e, t);
  return ci(n) ? n : void 0;
}
var tt = fi, pi = tt, di = Y1, hi = pi(di, "DataView"), Ci = hi, vi = tt, gi = Y1, Li = vi(gi, "Map"), n4 = Li, wi = tt, mi = Y1, xi = wi(mi, "Promise"), yi = xi, _i = tt, bi = Y1, Mi = _i(bi, "Set"), Ei = Mi, Oi = tt, Si = Y1, Ti = Oi(Si, "WeakMap"), Ai = Ti, v2 = Ci, g2 = n4, L2 = yi, w2 = Ei, m2 = Ai, p7 = me, nt = f7, m3 = "[object Map]", Ni = "[object Object]", x3 = "[object Promise]", y3 = "[object Set]", _3 = "[object WeakMap]", b3 = "[object DataView]", Zi = nt(v2), Hi = nt(g2), Ii = nt(L2), $i = nt(w2), Pi = nt(m2), ye = p7;
(v2 && ye(new v2(new ArrayBuffer(1))) != b3 || g2 && ye(new g2()) != m3 || L2 && ye(L2.resolve()) != x3 || w2 && ye(new w2()) != y3 || m2 && ye(new m2()) != _3) && (ye = function(e) {
  var t = p7(e), n = t == Ni ? e.constructor : void 0, r = n ? nt(n) : "";
  if (r)
    switch (r) {
      case Zi:
        return b3;
      case Hi:
        return m3;
      case Ii:
        return x3;
      case $i:
        return y3;
      case Pi:
        return _3;
    }
  return t;
});
var ki = ye, Ri = me, Di = Pe, Vi = "[object Arguments]";
function Bi(e) {
  return Di(e) && Ri(e) == Vi;
}
var ji = Bi, M3 = ji, Fi = Pe, d7 = Object.prototype, Ui = d7.hasOwnProperty, zi = d7.propertyIsEnumerable, Gi = M3(/* @__PURE__ */ function() {
  return arguments;
}()) ? M3 : function(e) {
  return Fi(e) && Ui.call(e, "callee") && !zi.call(e, "callee");
}, h7 = Gi, Wi = Array.isArray, r4 = Wi, qi = 9007199254740991;
function Yi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qi;
}
var C7 = Yi, Ki = u7, Xi = C7;
function Ji(e) {
  return e != null && Xi(e.length) && !Ki(e);
}
var v7 = Ji, u5 = { exports: {} };
function Qi() {
  return !1;
}
var eo = Qi;
u5.exports;
(function(e, t) {
  var n = Y1, r = eo, i = t && !t.nodeType && t, o = i && !0 && e && !e.nodeType && e, s = o && o.exports === i, a = s ? n.Buffer : void 0, l = a ? a.isBuffer : void 0, c = l || r;
  e.exports = c;
})(u5, u5.exports);
var g7 = u5.exports, to = me, no = C7, ro = Pe, io = "[object Arguments]", oo = "[object Array]", so = "[object Boolean]", ao = "[object Date]", lo = "[object Error]", co = "[object Function]", uo = "[object Map]", fo = "[object Number]", po = "[object Object]", ho = "[object RegExp]", Co = "[object Set]", vo = "[object String]", go = "[object WeakMap]", Lo = "[object ArrayBuffer]", wo = "[object DataView]", mo = "[object Float32Array]", xo = "[object Float64Array]", yo = "[object Int8Array]", _o = "[object Int16Array]", bo = "[object Int32Array]", Mo = "[object Uint8Array]", Eo = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", So = "[object Uint32Array]", t1 = {};
t1[mo] = t1[xo] = t1[yo] = t1[_o] = t1[bo] = t1[Mo] = t1[Eo] = t1[Oo] = t1[So] = !0;
t1[io] = t1[oo] = t1[Lo] = t1[so] = t1[wo] = t1[ao] = t1[lo] = t1[co] = t1[uo] = t1[fo] = t1[po] = t1[ho] = t1[Co] = t1[vo] = t1[go] = !1;
function To(e) {
  return ro(e) && no(e.length) && !!t1[to(e)];
}
var Ao = To;
function No(e) {
  return function(t) {
    return e(t);
  };
}
var Zo = No, f5 = { exports: {} };
f5.exports;
(function(e, t) {
  var n = o7, r = t && !t.nodeType && t, i = r && !0 && e && !e.nodeType && e, o = i && i.exports === r, s = o && n.process, a = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch (c) {
    }
  }();
  e.exports = a;
})(f5, f5.exports);
var Ho = f5.exports, Io = Ao, $o = Zo, E3 = Ho, O3 = E3 && E3.isTypedArray, Po = O3 ? $o(O3) : Io, L7 = Po, ko = c7, Ro = ki, Do = h7, Vo = r4, Bo = v7, jo = g7, Fo = a7, Uo = L7, zo = "[object Map]", Go = "[object Set]", Wo = Object.prototype, qo = Wo.hasOwnProperty;
function Yo(e) {
  if (e == null)
    return !0;
  if (Bo(e) && (Vo(e) || typeof e == "string" || typeof e.splice == "function" || jo(e) || Uo(e) || Do(e)))
    return !e.length;
  var t = Ro(e);
  if (t == zo || t == Go)
    return !e.size;
  if (Fo(e))
    return !ko(e).length;
  for (var n in e)
    if (qo.call(e, n))
      return !1;
  return !0;
}
var Ko = Yo;
const dt = /* @__PURE__ */ $e(Ko);
var Xo = l7, Jo = Xo(Object.getPrototypeOf, Object), Qo = Jo, es = me, ts = Qo, ns = Pe, rs = "[object Object]", is = Function.prototype, os = Object.prototype, w7 = is.toString, ss = os.hasOwnProperty, as = w7.call(Object);
function ls(e) {
  if (!ns(e) || es(e) != rs)
    return !1;
  var t = ts(e);
  if (t === null)
    return !0;
  var n = ss.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && w7.call(n) == as;
}
var cs = ls;
const us = /* @__PURE__ */ $e(cs);
var fs = me, ps = r4, ds = Pe, hs = "[object String]";
function Cs(e) {
  return typeof e == "string" || !ps(e) && ds(e) && fs(e) == hs;
}
var vs = Cs;
const gs = /* @__PURE__ */ $e(vs);
function W1(...e) {
  const t = e.reduce((n, r) => gs(r) && !dt(r) ? (n[`${r}`] = !0, n) : us(r) ? at(at({}, n), r) : n, {});
  return Object.keys(t).reduce((n, r) => (t[r] === !0 && n.push(r), n), []).join(" ");
}
function Ls(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var ws = Ls, ms = ws;
function xs(e, t) {
  return ms(t, function(n) {
    return e[n];
  });
}
var ys = xs;
function _s(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var bs = _s, Ms = 9007199254740991, Es = /^(?:0|[1-9]\d*)$/;
function Os(e, t) {
  var n = typeof e;
  return t = t == null ? Ms : t, !!t && (n == "number" || n != "symbol" && Es.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ss = Os, Ts = bs, As = h7, Ns = r4, Zs = g7, Hs = Ss, Is = L7, $s = Object.prototype, Ps = $s.hasOwnProperty;
function ks(e, t) {
  var n = Ns(e), r = !n && As(e), i = !n && !r && Zs(e), o = !n && !r && !i && Is(e), s = n || r || i || o, a = s ? Ts(e.length, String) : [], l = a.length;
  for (var c in e)
    (t || Ps.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Hs(c, l))) && a.push(c);
  return a;
}
var Rs = ks, Ds = Rs, Vs = c7, Bs = v7;
function js(e) {
  return Bs(e) ? Ds(e) : Vs(e);
}
var Fs = js, Us = ys, zs = Fs;
function Gs(e) {
  return e == null ? [] : Us(e, zs(e));
}
var Ws = Gs;
const se = /* @__PURE__ */ $e(Ws);
class m7 {
  constructor() {
    this.handlers = [];
  }
  add(t, n, r, i) {
    t && (t.forEach((o) => {
      var s;
      return (s = o.elm) == null ? void 0 : s.addEventListener(n, r, i);
    }), this.handlers.push({
      eventName: n,
      nodes: t,
      listener: r,
      options: i
    }));
  }
  removeAll() {
    this.handlers.forEach(({
      eventName: t,
      nodes: n,
      listener: r,
      options: i
    }) => {
      n.forEach((o) => {
        var s;
        return (s = o.elm) == null ? void 0 : s.removeEventListener(t, r, i);
      });
    }), this.handlers = [];
  }
}
const Z = class Z {
};
Z.MILLIS_PER_SECOND = 1e3, Z.SECONDS_PER_MINUTE = 60, Z.MINUTES_PER_HOUR = 60, Z.HOURS_PER_HALF_DAY = 12, Z.HOURS_PER_DAY = 24, Z.DAYS_PER_WEEK = 7, Z.MONTHS_PER_QUARTER = 3, Z.DAYS_PER_MONTH = 30, Z.DAYS_PER_YEAR = 365, Z.SECONDS_PER_HOUR = Z.SECONDS_PER_MINUTE * Z.MINUTES_PER_HOUR, Z.SECONDS_PER_DAY = Z.SECONDS_PER_HOUR * Z.HOURS_PER_DAY, Z.MINUTES_PER_DAY = Z.MINUTES_PER_HOUR * Z.HOURS_PER_DAY, Z.ONE_MINUTE_MS = Z.SECONDS_PER_MINUTE * Z.MILLIS_PER_SECOND, Z.ONE_HOUR_MS = Z.MINUTES_PER_HOUR * Z.ONE_MINUTE_MS, Z.MILLIS_PER_MINUTE = Z.MILLIS_PER_SECOND * Z.SECONDS_PER_MINUTE, Z.MILLIS_PER_HOUR = Z.MILLIS_PER_MINUTE * Z.MINUTES_PER_HOUR, Z.MILLIS_PER_DAY = Z.MILLIS_PER_HOUR * Z.HOURS_PER_DAY, Z.MILLIS_PER_WEEK = Z.MILLIS_PER_DAY * Z.DAYS_PER_WEEK, Z.MILLIS_PER_MONTH = Z.MILLIS_PER_DAY * Z.DAYS_PER_MONTH, Z.MILLIS_PER_YEAR = Z.MILLIS_PER_DAY * Z.DAYS_PER_YEAR, Z.TIMEZONE_NICKNAMES = {
  // Main US timezones. Some exceptional zones are omitted.
  "America/New_York": "Eastern",
  "America/Chicago": "Central",
  "America/Denver": "Mountain",
  "America/Los_Angeles": "Pacific",
  // Main Canadian timezones. Some small / sparsely populated timezones are omitted.
  "America/Halifax": "Atlantic",
  "America/Toronto": "Eastern",
  "America/Winnipeg": "Central",
  "America/Edmonton": "Mountain",
  "America/Vancouver": "Pacific"
}, Z.AM = "AM", Z.PM = "PM";
let ce = Z;
var S3;
((e) => {
  e.QueryModelFactory = Symbol.for("QueryModelFactory"), e.QueryEmptyMatcherFactory = Symbol.for("QueryEmptyMatcherFactory"), e.QueryProtoMatcherFactory = Symbol.for("QueryProtoMatcherFactory"), e.QuerySelectorModelFactory = Symbol.for("QuerySelectorModelFactory"), e.Store = Symbol.for("store");
})(S3 || (S3 = {}));
const x1 = class x1 {
};
x1.ESC_KEY = "Escape", x1.TAB_KEY = "Tab", x1.ENTER_KEY = "Enter", x1.META_KEY = "Meta", x1.BACKSPACE_KEY = "Backspace", x1.DELETE_KEY = "Delete", x1.ARROW_LEFT_KEY = "ArrowLeft", x1.ARROW_UP_KEY = "ArrowUp", x1.ARROW_RIGHT_KEY = "ArrowRight", x1.ARROW_DOWN_KEY = "ArrowDown", x1.FORWARD_SLASH_KEY = "/", x1.Z_KEY = "z";
let p5 = x1;
var qs = Y1, Ys = function() {
  return qs.Date.now();
}, Ks = Ys, Xs = /\s/;
function Js(e) {
  for (var t = e.length; t-- && Xs.test(e.charAt(t)); )
    ;
  return t;
}
var Qs = Js, ea = Qs, ta = /^\s+/;
function na(e) {
  return e && e.slice(0, ea(e) + 1).replace(ta, "");
}
var ra = na, ia = me, oa = Pe, sa = "[object Symbol]";
function aa(e) {
  return typeof e == "symbol" || oa(e) && ia(e) == sa;
}
var la = aa, ca = ra, T3 = _5, ua = la, A3 = NaN, fa = /^[-+]0x[0-9a-f]+$/i, pa = /^0b[01]+$/i, da = /^0o[0-7]+$/i, ha = parseInt;
function Ca(e) {
  if (typeof e == "number")
    return e;
  if (ua(e))
    return A3;
  if (T3(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = T3(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ca(e);
  var n = pa.test(e);
  return n || da.test(e) ? ha(e.slice(2), n ? 2 : 8) : fa.test(e) ? A3 : +e;
}
var va = Ca, ga = _5, U5 = Ks, N3 = va, La = "Expected a function", wa = Math.max, ma = Math.min;
function xa(e, t, n) {
  var r, i, o, s, a, l, c = 0, u = !1, C = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(La);
  t = N3(t) || 0, ga(n) && (u = !!n.leading, C = "maxWait" in n, o = C ? wa(N3(n.maxWait) || 0, t) : o, x = "trailing" in n ? !!n.trailing : x);
  function O(q) {
    var s1 = r, E1 = i;
    return r = i = void 0, c = q, s = e.apply(E1, s1), s;
  }
  function I(q) {
    return c = q, a = setTimeout(Q, t), u ? O(q) : s;
  }
  function V(q) {
    var s1 = q - l, E1 = q - c, P1 = t - s1;
    return C ? ma(P1, o - E1) : P1;
  }
  function i1(q) {
    var s1 = q - l, E1 = q - c;
    return l === void 0 || s1 >= t || s1 < 0 || C && E1 >= o;
  }
  function Q() {
    var q = U5();
    if (i1(q))
      return e1(q);
    a = setTimeout(Q, V(q));
  }
  function e1(q) {
    return a = void 0, x && r ? O(q) : (r = i = void 0, s);
  }
  function C1() {
    a !== void 0 && clearTimeout(a), c = 0, r = l = i = a = void 0;
  }
  function j1() {
    return a === void 0 ? s : e1(U5());
  }
  function M1() {
    var q = U5(), s1 = i1(q);
    if (r = arguments, i = this, l = q, s1) {
      if (a === void 0)
        return I(l);
      if (C)
        return clearTimeout(a), a = setTimeout(Q, t), O(l);
    }
    return a === void 0 && (a = setTimeout(Q, t)), s;
  }
  return M1.cancel = C1, M1.flush = j1, M1;
}
var ya = xa;
const x7 = /* @__PURE__ */ $e(ya);
function Z3(e = 100, t) {
  return (n, r, s) => {
    var a = s, {
      value: i
    } = a, o = h4(a, [
      "value"
    ]);
    if (typeof i != "function")
      throw new TypeError('"Debounced" can only decorate class methods.');
    return {
      configurable: !0,
      get() {
        const l = x7(i.bind(this), e, t);
        return Reflect.defineProperty(this, r, N5(at({}, o), {
          value: l
        })), l;
      }
    };
  };
}
((e) => {
  function t(n) {
    return (r, i) => {
      Reflect.defineProperty(r, i, {
        configurable: !0,
        get() {
          function o(a) {
            return typeof a.cancel == "function";
          }
          const s = this[n];
          if (typeof s != "function")
            throw new TypeError(`${n} is not a class method.`);
          if (!o(s))
            throw new TypeError(`${n} is not a debounced class method.`);
          return Reflect.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            value: s.cancel
          }), s.cancel;
        }
      });
    };
  }
  e.Cancel = t;
})(Z3 || (Z3 = {}));
function i4(e) {
  return (t) => e.includes(t);
}
function y7(e, t, n) {
  const {
    __ob__: r
  } = e;
  Array.isArray(e) && r && r.dep.notify();
}
class H3 {
  constructor(t, n) {
    this.label = t, this.mutations = n;
  }
  /**
   * Calls all mutations in reverse (natural) order.
   */
  invoke() {
    for (const t of this.mutations.slice().reverse())
      t();
  }
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var I3;
(function(e) {
  (function(t) {
    var n = typeof Fe == "object" ? Fe : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = i(e);
    typeof n.Reflect == "undefined" ? n.Reflect = e : r = i(n.Reflect, r), t(r);
    function i(o, s) {
      return function(a, l) {
        typeof o[a] != "function" && Object.defineProperty(o, a, { configurable: !0, writable: !0, value: l }), s && s(a, l);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", i = r && typeof Symbol.toPrimitive != "undefined" ? Symbol.toPrimitive : "@@toPrimitive", o = r && typeof Symbol.iterator != "undefined" ? Symbol.iterator : "@@iterator", s = typeof Object.create == "function", a = { __proto__: [] } instanceof Array, l = !s && !a, c = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: s ? function() {
        return A5(/* @__PURE__ */ Object.create(null));
      } : a ? function() {
        return A5({ __proto__: null });
      } : function() {
        return A5({});
      },
      has: l ? function(d, g) {
        return n.call(d, g);
      } : function(d, g) {
        return g in d;
      },
      get: l ? function(d, g) {
        return n.call(d, g) ? d[g] : void 0;
      } : function(d, g) {
        return d[g];
      }
    }, u = Object.getPrototypeOf(Function), C = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", x = !C && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : X7(), O = !C && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : J7(), I = !C && typeof WeakMap == "function" ? WeakMap : Q7(), V = new I();
    function i1(d, g, y, b) {
      if (E(y)) {
        if (!U1(d))
          throw new TypeError();
        if (!D1(g))
          throw new TypeError();
        return ke(d, g);
      } else {
        if (!U1(d))
          throw new TypeError();
        if (!S(g))
          throw new TypeError();
        if (!S(b) && !E(b) && !D(b))
          throw new TypeError();
        return D(b) && (b = void 0), y = a1(y), k1(d, g, y, b);
      }
    }
    t("decorate", i1);
    function Q(d, g) {
      function y(b, T) {
        if (!S(b))
          throw new TypeError();
        if (!E(T) && !Zt(T))
          throw new TypeError();
        p(d, g, b, T);
      }
      return y;
    }
    t("metadata", Q);
    function e1(d, g, y, b) {
      if (!S(y))
        throw new TypeError();
      return E(b) || (b = a1(b)), p(d, g, y, b);
    }
    t("defineMetadata", e1);
    function C1(d, g, y) {
      if (!S(g))
        throw new TypeError();
      return E(y) || (y = a1(y)), F1(d, g, y);
    }
    t("hasMetadata", C1);
    function j1(d, g, y) {
      if (!S(g))
        throw new TypeError();
      return E(y) || (y = a1(y)), ae(d, g, y);
    }
    t("hasOwnMetadata", j1);
    function M1(d, g, y) {
      if (!S(g))
        throw new TypeError();
      return E(y) || (y = a1(y)), R1(d, g, y);
    }
    t("getMetadata", M1);
    function q(d, g, y) {
      if (!S(g))
        throw new TypeError();
      return E(y) || (y = a1(y)), K1(d, g, y);
    }
    t("getOwnMetadata", q);
    function s1(d, g) {
      if (!S(d))
        throw new TypeError();
      return E(g) || (g = a1(g)), f(d, g);
    }
    t("getMetadataKeys", s1);
    function E1(d, g) {
      if (!S(d))
        throw new TypeError();
      return E(g) || (g = a1(g)), v(d, g);
    }
    t("getOwnMetadataKeys", E1);
    function P1(d, g, y) {
      if (!S(g))
        throw new TypeError();
      E(y) || (y = a1(y));
      var b = w1(
        g,
        y,
        /*Create*/
        !1
      );
      if (E(b) || !b.delete(d))
        return !1;
      if (b.size > 0)
        return !0;
      var T = V.get(g);
      return T.delete(y), T.size > 0 || V.delete(g), !0;
    }
    t("deleteMetadata", P1);
    function ke(d, g) {
      for (var y = d.length - 1; y >= 0; --y) {
        var b = d[y], T = b(g);
        if (!E(T) && !D(T)) {
          if (!D1(T))
            throw new TypeError();
          g = T;
        }
      }
      return g;
    }
    function k1(d, g, y, b) {
      for (var T = d.length - 1; T >= 0; --T) {
        var h1 = d[T], R = h1(g, y, b);
        if (!E(R) && !D(R)) {
          if (!S(R))
            throw new TypeError();
          b = R;
        }
      }
      return b;
    }
    function w1(d, g, y) {
      var b = V.get(d);
      if (E(b)) {
        if (!y)
          return;
        b = new x(), V.set(d, b);
      }
      var T = b.get(g);
      if (E(T)) {
        if (!y)
          return;
        T = new x(), b.set(g, T);
      }
      return T;
    }
    function F1(d, g, y) {
      var b = ae(d, g, y);
      if (b)
        return !0;
      var T = T5(g);
      return D(T) ? !1 : F1(d, T, y);
    }
    function ae(d, g, y) {
      var b = w1(
        g,
        y,
        /*Create*/
        !1
      );
      return E(b) ? !1 : z(b.has(d));
    }
    function R1(d, g, y) {
      var b = ae(d, g, y);
      if (b)
        return K1(d, g, y);
      var T = T5(g);
      if (!D(T))
        return R1(d, T, y);
    }
    function K1(d, g, y) {
      var b = w1(
        g,
        y,
        /*Create*/
        !1
      );
      if (!E(b))
        return b.get(d);
    }
    function p(d, g, y, b) {
      var T = w1(
        y,
        b,
        /*Create*/
        !0
      );
      T.set(d, g);
    }
    function f(d, g) {
      var y = v(d, g), b = T5(d);
      if (b === null)
        return y;
      var T = f(b, g);
      if (T.length <= 0)
        return y;
      if (y.length <= 0)
        return T;
      for (var h1 = new O(), R = [], j = 0, A = y; j < A.length; j++) {
        var G = A[j], W = h1.has(G);
        W || (h1.add(G), R.push(G));
      }
      for (var le = 0, u4 = T; le < u4.length; le++) {
        var G = u4[le], W = h1.has(G);
        W || (h1.add(G), R.push(G));
      }
      return R;
    }
    function v(d, g) {
      var y = [], b = w1(
        d,
        g,
        /*Create*/
        !1
      );
      if (E(b))
        return y;
      for (var T = b.keys(), h1 = W7(T), R = 0; ; ) {
        var j = Y7(h1);
        if (!j)
          return y.length = R, y;
        var A = q7(j);
        try {
          y[R] = A;
        } catch (G) {
          try {
            K7(h1);
          } finally {
            throw G;
          }
        }
        R++;
      }
    }
    function M(d) {
      if (d === null)
        return 1;
      switch (typeof d) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return d === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function E(d) {
      return d === void 0;
    }
    function D(d) {
      return d === null;
    }
    function B(d) {
      return typeof d == "symbol";
    }
    function S(d) {
      return typeof d == "object" ? d !== null : typeof d == "function";
    }
    function Y(d, g) {
      switch (M(d)) {
        case 0:
          return d;
        case 1:
          return d;
        case 2:
          return d;
        case 3:
          return d;
        case 4:
          return d;
        case 5:
          return d;
      }
      var y = g === 3 ? "string" : g === 5 ? "number" : "default", b = Re(d, i);
      if (b !== void 0) {
        var T = b.call(d, y);
        if (S(T))
          throw new TypeError();
        return T;
      }
      return U(d, y === "default" ? "number" : y);
    }
    function U(d, g) {
      if (g === "string") {
        var y = d.toString;
        if (v1(y)) {
          var b = y.call(d);
          if (!S(b))
            return b;
        }
        var T = d.valueOf;
        if (v1(T)) {
          var b = T.call(d);
          if (!S(b))
            return b;
        }
      } else {
        var T = d.valueOf;
        if (v1(T)) {
          var b = T.call(d);
          if (!S(b))
            return b;
        }
        var h1 = d.toString;
        if (v1(h1)) {
          var b = h1.call(d);
          if (!S(b))
            return b;
        }
      }
      throw new TypeError();
    }
    function z(d) {
      return !!d;
    }
    function l1(d) {
      return "" + d;
    }
    function a1(d) {
      var g = Y(
        d,
        3
        /* String */
      );
      return B(g) ? g : l1(g);
    }
    function U1(d) {
      return Array.isArray ? Array.isArray(d) : d instanceof Object ? d instanceof Array : Object.prototype.toString.call(d) === "[object Array]";
    }
    function v1(d) {
      return typeof d == "function";
    }
    function D1(d) {
      return typeof d == "function";
    }
    function Zt(d) {
      switch (M(d)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Re(d, g) {
      var y = d[g];
      if (y != null) {
        if (!v1(y))
          throw new TypeError();
        return y;
      }
    }
    function W7(d) {
      var g = Re(d, o);
      if (!v1(g))
        throw new TypeError();
      var y = g.call(d);
      if (!S(y))
        throw new TypeError();
      return y;
    }
    function q7(d) {
      return d.value;
    }
    function Y7(d) {
      var g = d.next();
      return g.done ? !1 : g;
    }
    function K7(d) {
      var g = d.return;
      g && g.call(d);
    }
    function T5(d) {
      var g = Object.getPrototypeOf(d);
      if (typeof d != "function" || d === u || g !== u)
        return g;
      var y = d.prototype, b = y && Object.getPrototypeOf(y);
      if (b == null || b === Object.prototype)
        return g;
      var T = b.constructor;
      return typeof T != "function" || T === d ? g : T;
    }
    function X7() {
      var d = {}, g = [], y = (
        /** @class */
        function() {
          function R(j, A, G) {
            this._index = 0, this._keys = j, this._values = A, this._selector = G;
          }
          return R.prototype["@@iterator"] = function() {
            return this;
          }, R.prototype[o] = function() {
            return this;
          }, R.prototype.next = function() {
            var j = this._index;
            if (j >= 0 && j < this._keys.length) {
              var A = this._selector(this._keys[j], this._values[j]);
              return j + 1 >= this._keys.length ? (this._index = -1, this._keys = g, this._values = g) : this._index++, { value: A, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, R.prototype.throw = function(j) {
            throw this._index >= 0 && (this._index = -1, this._keys = g, this._values = g), j;
          }, R.prototype.return = function(j) {
            return this._index >= 0 && (this._index = -1, this._keys = g, this._values = g), { value: j, done: !0 };
          }, R;
        }()
      );
      return (
        /** @class */
        function() {
          function R() {
            this._keys = [], this._values = [], this._cacheKey = d, this._cacheIndex = -2;
          }
          return Object.defineProperty(R.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), R.prototype.has = function(j) {
            return this._find(
              j,
              /*insert*/
              !1
            ) >= 0;
          }, R.prototype.get = function(j) {
            var A = this._find(
              j,
              /*insert*/
              !1
            );
            return A >= 0 ? this._values[A] : void 0;
          }, R.prototype.set = function(j, A) {
            var G = this._find(
              j,
              /*insert*/
              !0
            );
            return this._values[G] = A, this;
          }, R.prototype.delete = function(j) {
            var A = this._find(
              j,
              /*insert*/
              !1
            );
            if (A >= 0) {
              for (var G = this._keys.length, W = A + 1; W < G; W++)
                this._keys[W - 1] = this._keys[W], this._values[W - 1] = this._values[W];
              return this._keys.length--, this._values.length--, j === this._cacheKey && (this._cacheKey = d, this._cacheIndex = -2), !0;
            }
            return !1;
          }, R.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = d, this._cacheIndex = -2;
          }, R.prototype.keys = function() {
            return new y(this._keys, this._values, b);
          }, R.prototype.values = function() {
            return new y(this._keys, this._values, T);
          }, R.prototype.entries = function() {
            return new y(this._keys, this._values, h1);
          }, R.prototype["@@iterator"] = function() {
            return this.entries();
          }, R.prototype[o] = function() {
            return this.entries();
          }, R.prototype._find = function(j, A) {
            return this._cacheKey !== j && (this._cacheIndex = this._keys.indexOf(this._cacheKey = j)), this._cacheIndex < 0 && A && (this._cacheIndex = this._keys.length, this._keys.push(j), this._values.push(void 0)), this._cacheIndex;
          }, R;
        }()
      );
      function b(R, j) {
        return R;
      }
      function T(R, j) {
        return j;
      }
      function h1(R, j) {
        return [R, j];
      }
    }
    function J7() {
      return (
        /** @class */
        function() {
          function d() {
            this._map = new x();
          }
          return Object.defineProperty(d.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), d.prototype.has = function(g) {
            return this._map.has(g);
          }, d.prototype.add = function(g) {
            return this._map.set(g, g), this;
          }, d.prototype.delete = function(g) {
            return this._map.delete(g);
          }, d.prototype.clear = function() {
            this._map.clear();
          }, d.prototype.keys = function() {
            return this._map.keys();
          }, d.prototype.values = function() {
            return this._map.values();
          }, d.prototype.entries = function() {
            return this._map.entries();
          }, d.prototype["@@iterator"] = function() {
            return this.keys();
          }, d.prototype[o] = function() {
            return this.keys();
          }, d;
        }()
      );
    }
    function Q7() {
      var d = 16, g = c.create(), y = b();
      return (
        /** @class */
        function() {
          function A() {
            this._key = b();
          }
          return A.prototype.has = function(G) {
            var W = T(
              G,
              /*create*/
              !1
            );
            return W !== void 0 ? c.has(W, this._key) : !1;
          }, A.prototype.get = function(G) {
            var W = T(
              G,
              /*create*/
              !1
            );
            return W !== void 0 ? c.get(W, this._key) : void 0;
          }, A.prototype.set = function(G, W) {
            var le = T(
              G,
              /*create*/
              !0
            );
            return le[this._key] = W, this;
          }, A.prototype.delete = function(G) {
            var W = T(
              G,
              /*create*/
              !1
            );
            return W !== void 0 ? delete W[this._key] : !1;
          }, A.prototype.clear = function() {
            this._key = b();
          }, A;
        }()
      );
      function b() {
        var A;
        do
          A = "@@WeakMap@@" + j();
        while (c.has(g, A));
        return g[A] = !0, A;
      }
      function T(A, G) {
        if (!n.call(A, y)) {
          if (!G)
            return;
          Object.defineProperty(A, y, { value: c.create() });
        }
        return A[y];
      }
      function h1(A, G) {
        for (var W = 0; W < G; ++W)
          A[W] = Math.random() * 255 | 0;
        return A;
      }
      function R(A) {
        return typeof Uint8Array == "function" ? typeof crypto != "undefined" ? crypto.getRandomValues(new Uint8Array(A)) : typeof msCrypto != "undefined" ? msCrypto.getRandomValues(new Uint8Array(A)) : h1(new Uint8Array(A), A) : h1(new Array(A), A);
      }
      function j() {
        var A = R(d);
        A[6] = A[6] & 79 | 64, A[8] = A[8] & 191 | 128;
        for (var G = "", W = 0; W < d; ++W) {
          var le = A[W];
          (W === 4 || W === 6 || W === 8) && (G += "-"), le < 16 && (G += "0"), G += le.toString(16).toLowerCase();
        }
        return G;
      }
    }
    function A5(d) {
      return d.__ = void 0, delete d.__, d;
    }
  });
})(I3 || (I3 = {}));
const r1 = class r1 {
  constructor(t) {
    if (this.instantiatedReceivers = /* @__PURE__ */ new WeakSet(), this.trackedTargets = /* @__PURE__ */ new WeakMap(), this.undoActions = [], this.redoActions = [], this.mutations = [], this.undoableActionCompletedHandler = y7, this.setHandler = this.setHandler.bind(this), this.definePropertyHandler = this.definePropertyHandler.bind(this), !r1.isTrackable(t))
      throw new Error("Target is not an object.");
    try {
      this.target = this.track(t);
    } catch (n) {
      throw n instanceof RangeError ? new RangeError("TimeMachine probably tried to track something that has already been tracked by another TimeMachine.") : n;
    }
  }
  /**
   * The target that has been passed into the constructor.
   */
  get current() {
    return this.target;
  }
  get canUndo() {
    return this.undoActions.length > 0;
  }
  get canRedo() {
    return this.redoActions.length > 0;
  }
  get lastUndoActionType() {
    var t, n;
    return (n = (t = this.undoActions[this.undoActions.length - 1]) == null ? void 0 : t.label) != null ? n : null;
  }
  get lastRedoActionType() {
    var t, n;
    return (n = (t = this.redoActions[this.redoActions.length - 1]) == null ? void 0 : t.label) != null ? n : null;
  }
  undo() {
    const t = this.undoActions.pop();
    t !== void 0 && (this.undoUnsavedMutations(), t.invoke(), this.batchMutationsIntoRedo(t.label));
  }
  redo() {
    const t = this.redoActions.pop();
    t !== void 0 && (this.mutations = [], t.invoke(), this.batchMutationsIntoUndo(t.label));
  }
  /**
   * Saves the current state of the target so it can be reverted back to it later.
   * Loses all redo actions because target's history is "overwritten".
   */
  persistState(t = r1.DEFAULT_LABEL) {
    this.mutations.length !== 0 && (this.batchMutationsIntoUndo(t), this.redoActions = []);
  }
  /**
   * Stores current state of the target and resets
   * it to initial state without losing history.
   */
  resetToInitialState() {
    if (!this.canUndo)
      return;
    const t = this.undoActions.slice().reverse();
    this.undoUnsavedMutations(), t.forEach((n) => n.invoke()), this.batchMutationsIntoUndo(r1.RESET_LABEL);
  }
  /**
   * Registers a handler on undo/redo actions.
   *
   * @param handler - A callback that accepts 3 arguments:
   * - target: The tracked target
   * - key: The name of the property that is about to be modified.
   * - value: The value that is set by the undo/redo action.
   */
  onUndoableActionCompleted(t) {
    this.undoableActionCompletedHandler = t;
  }
  /**
   * Property class decorator.
   * Disables tracking of this property.
   *
   * @param targetPrototype - class prototype
   * @param key - name of property
   */
  static Ignore(t, n) {
    const r = Reflect.getMetadata(r1.METADATA_KEY, t) || {};
    r[n] = {
      ignore: !0
    }, Reflect.defineMetadata(r1.METADATA_KEY, r, t);
  }
  /**
   * Implicitly invoke undo on all leftover mutations.
   * In case you want them to be redoable, call persistState explicitly.
   */
  undoUnsavedMutations() {
    if (this.mutations.length > 0) {
      const t = this.mutations.slice().reverse();
      this.mutations = [];
      for (const n of t)
        n();
    }
  }
  /**
   * Creates a new Undo Action out of all the mutations that have happened after the last batch.
   *
   * @param actionLabel - Name of the new Action.
   */
  batchMutationsIntoUndo(t) {
    this.undoActions.push(new H3(t, this.mutations)), this.mutations = [];
  }
  /**
   * Creates a new Redo Action out of all the mutations that have happened after the last batch.
   *
   * @param actionLabel - Name of the new Action.
   */
  batchMutationsIntoRedo(t) {
    this.redoActions.push(new H3(t, this.mutations)), this.mutations = [];
  }
  /**
   * Recursively replaces all properties of the target by trackable proxies.
   *
   * @param target - Target that is about to be tracked.
   */
  track(t) {
    var r;
    r1.staticInstantiatedReceivers.has(t) && console.warn("Tried to track a receiver", t), r1.staticTrackedTargets.has(t) && console.warn("Tried to track an already tracked target", t);
    for (const i in t) {
      const o = t[i];
      r1.isTrackable(o) && !i.includes("__") && !r1.isIgnored(t, i) && (t[i] = (r = this.checkForExistingReceiver(o)) != null ? r : this.track(o));
    }
    const n = this.createReceiver(t);
    return this.instantiatedReceivers.add(n), this.trackedTargets.set(t, n), r1.IS_DEV && (r1.staticTrackedTargets.add(t), r1.staticInstantiatedReceivers.add(n)), n;
  }
  /**
   * Creates a proxy that traps certain JS operators and provides tracking of property mutations.
   * MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   *
   * @param target - Target that is about to be tracked.
   */
  createReceiver(t) {
    const n = {};
    return n.proxy = new Proxy(t, {
      set: this.setHandler,
      defineProperty: this.definePropertyHandler,
      deleteProperty: this.createDeleteHandler(n)
    }), n.proxy;
  }
  /**
   * Check if target has an existing associated receiver.
   *
   * @param target - Target that is about to be checked.
   */
  checkForExistingReceiver(t) {
    return this.instantiatedReceivers.has(t) ? t : this.trackedTargets.has(t) ? this.trackedTargets.get(t) : null;
  }
  /**
   * Proxy set handler.
   * Mutates the property of the target and pushes a mutation that reverts the action to its previous state.
   *
   * @param target - Target that is about to be tracked. (not proxy)
   * @param key - Name of the property that is going to be assigned.
   * @param newValue - Value that is going to be assigned to the property.
   * @param receiver - Constructed proxy.
   */
  setHandler(t, n, r, i) {
    var c;
    const o = t[n];
    if (o === r)
      return !0;
    if (n === "__proto__")
      return Reflect.setPrototypeOf(t, r || null);
    const s = r1.isIgnored(t, n), a = r1.isTrackable(r) && !s ? (c = this.checkForExistingReceiver(r)) != null ? c : this.track(r) : r, l = r === void 0 ? Reflect.deleteProperty(t, n) : Reflect.set(t, n, a);
    if (s)
      return l;
    if (Array.isArray(t) && parseInt(n, 10) >= 0 && r === void 0) {
      const u = parseInt(n, 10);
      t.splice(u, 1);
    }
    return this.mutations.push(() => {
      o === void 0 ? Reflect.deleteProperty(i, n) : Reflect.set(i, n, o), this.undoableActionCompletedHandler && this.undoableActionCompletedHandler(t, n, r);
    }), l;
  }
  /**
   * Factory for Proxy deleteProperty handler. (delete operator)
   * Needs proxyWrapper because ECMAScript provides receiver (the proxy object) only to get and set handlers.
   *
   * @param proxyWrapper - Object that contains the proxy.
   * @param proxyWrapper.proxy - The actual proxy object.
   */
  createDeleteHandler(t) {
    return (n, r) => this.setHandler(n, r, void 0, t.proxy);
  }
  /**
   * Proxy defineProperty handler.
   * Composes original getters and setters and ones that track mutations.
   * Enables to track Vue's reactive getter/setter.
   *
   * @param target - Target that is about to be tracked. (not proxy)
   * @param key - Name of the property that is going to be assigned.
   * @param descriptor - PropertyDescriptor
   */
  definePropertyHandler(t, n, r) {
    const i = n;
    if (r.get && r.set && !r1.isIgnored(t, i)) {
      const {
        get: o,
        set: s
      } = r, a = {
        [i]: o()
      };
      return Reflect.defineProperty(t, i, N5(at({}, r), {
        get: () => (o(), a[i]),
        set: (l) => {
          s(l), this.setHandler(a, i, o(), a);
        }
      }));
    }
    return Reflect.defineProperty(t, i, r);
  }
  static isTrackable(t) {
    return t !== null && typeof t == "object";
  }
  /**
   * Returns true if the property has been marked by TimeMachine.ignore.
   *
   * @param target - class prototype
   * @param key - name of property
   */
  static isIgnored(t, n) {
    const r = Reflect.getMetadata(r1.METADATA_KEY, t);
    return (r == null ? void 0 : r[n]) === void 0 ? !1 : r[n].ignore !== !1;
  }
};
r1.DEFAULT_LABEL = "Edit", r1.RESET_LABEL = "Reset", r1.METADATA_KEY = Symbol.for("TIME_MACHINE_METADATA"), r1.IS_DEV = process.env.NODE_ENV === "development", r1.staticInstantiatedReceivers = /* @__PURE__ */ new WeakSet(), r1.staticTrackedTargets = /* @__PURE__ */ new WeakSet();
let d5 = r1;
((e) => {
  e.notifyObserverArrayDep = y7;
})(d5 || (d5 = {}));
function _a() {
  this.__data__ = [], this.size = 0;
}
var ba = _a;
function Ma(e, t) {
  return e === t || e !== e && t !== t;
}
var Ea = Ma, Oa = Ea;
function Sa(e, t) {
  for (var n = e.length; n--; )
    if (Oa(e[n][0], t))
      return n;
  return -1;
}
var b5 = Sa, Ta = b5, Aa = Array.prototype, Na = Aa.splice;
function Za(e) {
  var t = this.__data__, n = Ta(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Na.call(t, n, 1), --this.size, !0;
}
var Ha = Za, Ia = b5;
function $a(e) {
  var t = this.__data__, n = Ia(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Pa = $a, ka = b5;
function Ra(e) {
  return ka(this.__data__, e) > -1;
}
var Da = Ra, Va = b5;
function Ba(e, t) {
  var n = this.__data__, r = Va(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var ja = Ba, Fa = ba, Ua = Ha, za = Pa, Ga = Da, Wa = ja;
function rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = Fa;
rt.prototype.delete = Ua;
rt.prototype.get = za;
rt.prototype.has = Ga;
rt.prototype.set = Wa;
var M5 = rt, qa = M5;
function Ya() {
  this.__data__ = new qa(), this.size = 0;
}
var Ka = Ya;
function Xa(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Ja = Xa;
function Qa(e) {
  return this.__data__.get(e);
}
var el = Qa;
function tl(e) {
  return this.__data__.has(e);
}
var nl = tl, rl = tt, il = rl(Object, "create"), E5 = il, $3 = E5;
function ol() {
  this.__data__ = $3 ? $3(null) : {}, this.size = 0;
}
var sl = ol;
function al(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ll = al, cl = E5, ul = "__lodash_hash_undefined__", fl = Object.prototype, pl = fl.hasOwnProperty;
function dl(e) {
  var t = this.__data__;
  if (cl) {
    var n = t[e];
    return n === ul ? void 0 : n;
  }
  return pl.call(t, e) ? t[e] : void 0;
}
var hl = dl, Cl = E5, vl = Object.prototype, gl = vl.hasOwnProperty;
function Ll(e) {
  var t = this.__data__;
  return Cl ? t[e] !== void 0 : gl.call(t, e);
}
var wl = Ll, ml = E5, xl = "__lodash_hash_undefined__";
function yl(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ml && t === void 0 ? xl : t, this;
}
var _l = yl, bl = sl, Ml = ll, El = hl, Ol = wl, Sl = _l;
function it(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = bl;
it.prototype.delete = Ml;
it.prototype.get = El;
it.prototype.has = Ol;
it.prototype.set = Sl;
var Tl = it, P3 = Tl, Al = M5, Nl = n4;
function Zl() {
  this.size = 0, this.__data__ = {
    hash: new P3(),
    map: new (Nl || Al)(),
    string: new P3()
  };
}
var Hl = Zl;
function Il(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var $l = Il, Pl = $l;
function kl(e, t) {
  var n = e.__data__;
  return Pl(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var O5 = kl, Rl = O5;
function Dl(e) {
  var t = Rl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Vl = Dl, Bl = O5;
function jl(e) {
  return Bl(this, e).get(e);
}
var Fl = jl, Ul = O5;
function zl(e) {
  return Ul(this, e).has(e);
}
var Gl = zl, Wl = O5;
function ql(e, t) {
  var n = Wl(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Yl = ql, Kl = Hl, Xl = Vl, Jl = Fl, Ql = Gl, ec = Yl;
function ot(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Kl;
ot.prototype.delete = Xl;
ot.prototype.get = Jl;
ot.prototype.has = Ql;
ot.prototype.set = ec;
var _7 = ot, tc = M5, nc = n4, rc = _7, ic = 200;
function oc(e, t) {
  var n = this.__data__;
  if (n instanceof tc) {
    var r = n.__data__;
    if (!nc || r.length < ic - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new rc(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var sc = oc, ac = M5, lc = Ka, cc = Ja, uc = el, fc = nl, pc = sc;
function Tt(e) {
  var t = this.__data__ = new ac(e);
  this.size = t.size;
}
Tt.prototype.clear = lc;
Tt.prototype.delete = cc;
Tt.prototype.get = uc;
Tt.prototype.has = fc;
Tt.prototype.set = pc;
var dc = "__lodash_hash_undefined__";
function hc(e) {
  return this.__data__.set(e, dc), this;
}
var Cc = hc;
function vc(e) {
  return this.__data__.has(e);
}
var gc = vc, Lc = _7, wc = Cc, mc = gc;
function x2(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Lc(); ++t < n; )
    this.add(e[t]);
}
x2.prototype.add = x2.prototype.push = wc;
x2.prototype.has = mc;
var xc = Y1;
xc.Uint8Array;
var k3 = t4, R3 = k3 ? k3.prototype : void 0;
R3 && R3.valueOf;
var D3;
((e) => {
  function t(C) {
    return {
      value: C,
      state: 2
      /* RESOLVED */
    };
  }
  e.resolved = t;
  function n(C) {
    return {
      state: 1,
      promise: C == null ? void 0 : C.then()
    };
  }
  e.pending = n;
  function r() {
    return {
      state: 0
      /* UNINITIALIZED */
    };
  }
  e.uninitialized = r;
  function i(C) {
    return {
      error: C,
      state: 3
      /* REJECTED */
    };
  }
  e.rejected = i;
  function o(C) {
    return C.state === 0;
  }
  e.isUninitialized = o;
  function s(C) {
    return C.state === 2;
  }
  e.isResolved = s;
  function a(C) {
    return C.state === 1;
  }
  e.isPending = a;
  function l(C, x) {
    return C !== void 0 && s(C) ? C.value : x;
  }
  e.valueOrDefault = l;
  function c(C) {
    return C.state === 1 ? C.promise : void 0;
  }
  e.promise = c;
  function u(C) {
    return C === void 0 ? r() : t(C);
  }
  e.resolvedOrUninitialized = u;
})(D3 || (D3 = {}));
var V3;
((e) => {
  ((a) => {
    a.MINUTES = "minute", a.HOURS = "hour", a.DAYS = "day", a.WEEKS = "week", a.MONTHS = "month", a.YEARS = "year";
  })(e.Unit || (e.Unit = {}));
  const t = {
    minute: ce.MILLIS_PER_MINUTE,
    hour: ce.MILLIS_PER_HOUR,
    day: ce.MILLIS_PER_DAY,
    week: ce.MILLIS_PER_WEEK,
    month: ce.MILLIS_PER_MONTH,
    year: ce.MILLIS_PER_YEAR
  };
  function n({
    offset: a,
    unit: l
  }) {
    return a * t[l];
  }
  e.toMillis = n;
  function r(a, l) {
    return Math.abs(a) === 1 ? l : `${l}s`;
  }
  e.formatUnit = r;
  function i({
    offset: a,
    unit: l
  }, c = !0) {
    return [Math.abs(a), r(a, l), c && s(a)].filter(Boolean).join(" ");
  }
  e.format = i;
  function o(a) {
    return {
      offset: a * -1,
      unit: "day"
      /* DAYS */
    };
  }
  e.daysAgo = o;
  function s(a) {
    return a > 0 ? "in the future" : "ago";
  }
  e.offsetDirection = s;
})(V3 || (V3 = {}));
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var yc = ["native code", "[object MutationObserverConstructor]"], _c = function(e) {
  return yc.some(function(t) {
    return (e || "").toString().indexOf(t) > -1;
  });
}, b7 = typeof window != "undefined", B3 = ["Edge", "Trident", "Firefox"], M7 = 0;
for (var z5 = 0; z5 < B3.length; z5 += 1)
  if (b7 && navigator.userAgent.indexOf(B3[z5]) >= 0) {
    M7 = 1;
    break;
  }
function bc(e) {
  var t = !1, n = 0, r = document.createElement("span"), i = new MutationObserver(function() {
    e(), t = !1;
  });
  return i.observe(r, { attributes: !0 }), function() {
    t || (t = !0, r.setAttribute("x-index", n), n = n + 1);
  };
}
function Mc(e) {
  var t = !1;
  return function() {
    t || (t = !0, setTimeout(function() {
      t = !1, e();
    }, M7));
  };
}
var Ec = b7 && _c(window.MutationObserver), Oc = Ec ? bc : Mc;
function E7(e) {
  var t = {};
  return e && t.toString.call(e) === "[object Function]";
}
function st(e, t) {
  if (e.nodeType !== 1)
    return [];
  var n = window.getComputedStyle(e, null);
  return t ? n[t] : n;
}
function o4(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function At(e) {
  if (!e || ["HTML", "BODY", "#document"].indexOf(e.nodeName) !== -1)
    return window.document.body;
  var t = st(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /(auto|scroll)/.test(n + i + r) ? e : At(o4(e));
}
function We(e) {
  var t = e && e.offsetParent, n = t && t.nodeName;
  return !n || n === "BODY" || n === "HTML" ? window.document.documentElement : ["TD", "TABLE"].indexOf(t.nodeName) !== -1 && st(t, "position") === "static" ? We(t) : t;
}
function Sc(e) {
  var t = e.nodeName;
  return t === "BODY" ? !1 : t === "HTML" || We(e.firstElementChild) === e;
}
function y2(e) {
  return e.parentNode !== null ? y2(e.parentNode) : e;
}
function h5(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType)
    return window.document.documentElement;
  var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e, o = document.createRange();
  o.setStart(r, 0), o.setEnd(i, 0);
  var s = o.commonAncestorContainer;
  if (e !== s && t !== s || r.contains(i))
    return Sc(s) ? s : We(s);
  var a = y2(e);
  return a.host ? h5(a.host, t) : h5(e, y2(t).host);
}
function qe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", n = t === "top" ? "scrollTop" : "scrollLeft", r = e.nodeName;
  if (r === "BODY" || r === "HTML") {
    var i = window.document.documentElement, o = window.document.scrollingElement || i;
    return o[n];
  }
  return e[n];
}
function Tc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = qe(t, "top"), i = qe(t, "left"), o = n ? -1 : 1;
  return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e;
}
function j3(e, t) {
  var n = t === "x" ? "Left" : "Top", r = n === "Left" ? "Right" : "Bottom";
  return +e["border" + n + "Width"].split("px")[0] + +e["border" + r + "Width"].split("px")[0];
}
var G5 = void 0, S5 = function() {
  return G5 === void 0 && (G5 = navigator.appVersion.indexOf("MSIE 10") !== -1), G5;
};
function F3(e, t, n, r) {
  return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], S5() ? n["offset" + e] + r["margin" + (e === "Height" ? "Top" : "Left")] + r["margin" + (e === "Height" ? "Bottom" : "Right")] : 0);
}
function O7() {
  var e = window.document.body, t = window.document.documentElement, n = S5() && window.getComputedStyle(t);
  return {
    height: F3("Height", e, t, n),
    width: F3("Width", e, t, n)
  };
}
var Ac = function(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}, Nc = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), C5 = function(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}, I1 = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
};
function ge(e) {
  return I1({}, e, {
    right: e.left + e.width,
    bottom: e.top + e.height
  });
}
function _2(e) {
  var t = {};
  if (S5())
    try {
      t = e.getBoundingClientRect();
      var n = qe(e, "top"), r = qe(e, "left");
      t.top += n, t.left += r, t.bottom += n, t.right += r;
    } catch (C) {
    }
  else
    t = e.getBoundingClientRect();
  var i = {
    left: t.left,
    top: t.top,
    width: t.right - t.left,
    height: t.bottom - t.top
  }, o = e.nodeName === "HTML" ? O7() : {}, s = o.width || e.clientWidth || i.right - i.left, a = o.height || e.clientHeight || i.bottom - i.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
  if (l || c) {
    var u = st(e);
    l -= j3(u, "x"), c -= j3(u, "y"), i.width -= l, i.height -= c;
  }
  return ge(i);
}
function s4(e, t) {
  var n = S5(), r = t.nodeName === "HTML", i = _2(e), o = _2(t), s = At(e), a = st(t), l = +a.borderTopWidth.split("px")[0], c = +a.borderLeftWidth.split("px")[0], u = ge({
    top: i.top - o.top - l,
    left: i.left - o.left - c,
    width: i.width,
    height: i.height
  });
  if (u.marginTop = 0, u.marginLeft = 0, !n && r) {
    var C = +a.marginTop.split("px")[0], x = +a.marginLeft.split("px")[0];
    u.top -= l - C, u.bottom -= l - C, u.left -= c - x, u.right -= c - x, u.marginTop = C, u.marginLeft = x;
  }
  return (n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (u = Tc(u, t)), u;
}
function Zc(e) {
  var t = window.document.documentElement, n = s4(e, t), r = Math.max(t.clientWidth, window.innerWidth || 0), i = Math.max(t.clientHeight, window.innerHeight || 0), o = qe(t), s = qe(t, "left"), a = {
    top: o - n.top + n.marginTop,
    left: s - n.left + n.marginLeft,
    width: r,
    height: i
  };
  return ge(a);
}
function S7(e) {
  var t = e.nodeName;
  return t === "BODY" || t === "HTML" ? !1 : st(e, "position") === "fixed" ? !0 : S7(o4(e));
}
function a4(e, t, n, r) {
  var i = { top: 0, left: 0 }, o = h5(e, t);
  if (r === "viewport")
    i = Zc(o);
  else {
    var s = void 0;
    r === "scrollParent" ? (s = At(o4(e)), s.nodeName === "BODY" && (s = window.document.documentElement)) : r === "window" ? s = window.document.documentElement : s = r;
    var a = s4(s, o);
    if (s.nodeName === "HTML" && !S7(o)) {
      var l = O7(), c = l.height, u = l.width;
      i.top += a.top - a.marginTop, i.bottom = c + a.top, i.left += a.left - a.marginLeft, i.right = u + a.left;
    } else
      i = a;
  }
  return i.left += n, i.top += n, i.right -= n, i.bottom -= n, i;
}
function Hc(e) {
  var t = e.width, n = e.height;
  return t * n;
}
function T7(e, t, n, r, i) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (e.indexOf("auto") === -1)
    return e;
  var s = a4(n, r, o, i), a = {
    top: {
      width: s.width,
      height: t.top - s.top
    },
    right: {
      width: s.right - t.right,
      height: s.height
    },
    bottom: {
      width: s.width,
      height: s.bottom - t.bottom
    },
    left: {
      width: t.left - s.left,
      height: s.height
    }
  }, l = Object.keys(a).map(function(x) {
    return I1({
      key: x
    }, a[x], {
      area: Hc(a[x])
    });
  }).sort(function(x, O) {
    return O.area - x.area;
  }), c = l.filter(function(x) {
    var O = x.width, I = x.height;
    return O >= n.clientWidth && I >= n.clientHeight;
  }), u = c.length > 0 ? c[0].key : l[0].key, C = e.split("-")[1];
  return u + (C ? "-" + C : "");
}
function A7(e, t, n) {
  var r = h5(t, n);
  return s4(n, r);
}
function N7(e) {
  var t = window.getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom), r = parseFloat(t.marginLeft) + parseFloat(t.marginRight), i = {
    width: e.offsetWidth + r,
    height: e.offsetHeight + n
  };
  return i;
}
function v5(e) {
  var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return e.replace(/left|right|bottom|top/g, function(n) {
    return t[n];
  });
}
function Z7(e, t, n) {
  n = n.split("-")[0];
  var r = N7(e), i = {
    width: r.width,
    height: r.height
  }, o = ["right", "left"].indexOf(n) !== -1, s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
  return i[s] = t[s] + t[l] / 2 - r[l] / 2, n === a ? i[a] = t[a] - r[c] : i[a] = t[v5(a)], i;
}
function Nt(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function Ic(e, t, n) {
  if (Array.prototype.findIndex)
    return e.findIndex(function(i) {
      return i[t] === n;
    });
  var r = Nt(e, function(i) {
    return i[t] === n;
  });
  return e.indexOf(r);
}
function H7(e, t, n) {
  var r = n === void 0 ? e : e.slice(0, Ic(e, "name", n));
  return r.forEach(function(i) {
    i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var o = i.function || i.fn;
    i.enabled && E7(o) && (t.offsets.popper = ge(t.offsets.popper), t.offsets.reference = ge(t.offsets.reference), t = o(t, i));
  }), t;
}
function $c() {
  if (!this.state.isDestroyed) {
    var e = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: !1,
      offsets: {}
    };
    e.offsets.reference = A7(this.state, this.popper, this.reference), e.placement = T7(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = Z7(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = H7(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
  }
}
function I7(e, t) {
  return e.some(function(n) {
    var r = n.name, i = n.enabled;
    return i && r === t;
  });
}
function $7(e) {
  for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
    var i = t[r], o = i ? "" + i + n : e;
    if (typeof window.document.body.style[o] != "undefined")
      return o;
  }
  return null;
}
function Pc() {
  return this.state.isDestroyed = !0, I7(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[$7("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function P7(e, t, n, r) {
  var i = e.nodeName === "BODY", o = i ? window : e;
  o.addEventListener(t, n, { passive: !0 }), i || P7(At(o.parentNode), t, n, r), r.push(o);
}
function kc(e, t, n, r) {
  n.updateBound = r, window.addEventListener("resize", n.updateBound, { passive: !0 });
  var i = At(e);
  return P7(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
}
function Rc() {
  this.state.eventsEnabled || (this.state = kc(this.reference, this.options, this.state, this.scheduleUpdate));
}
function Dc(e, t) {
  return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(n) {
    n.removeEventListener("scroll", t.updateBound);
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function Vc() {
  this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = Dc(this.reference, this.state));
}
function l4(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function b2(e, t) {
  Object.keys(t).forEach(function(n) {
    var r = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 && l4(t[n]) && (r = "px"), e.style[n] = t[n] + r;
  });
}
function Bc(e, t) {
  Object.keys(t).forEach(function(n) {
    var r = t[n];
    r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
  });
}
function jc(e) {
  return b2(e.instance.popper, e.styles), Bc(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && b2(e.arrowElement, e.arrowStyles), e;
}
function Fc(e, t, n, r, i) {
  var o = A7(i, t, e), s = T7(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
  return t.setAttribute("x-placement", s), b2(t, { position: "absolute" }), n;
}
function Uc(e, t) {
  var n = t.x, r = t.y, i = e.offsets.popper, o = Nt(e.instance.modifiers, function(C1) {
    return C1.name === "applyStyle";
  }).gpuAcceleration;
  o !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var s = o !== void 0 ? o : t.gpuAcceleration, a = We(e.instance.popper), l = _2(a), c = {
    position: i.position
  }, u = {
    left: Math.floor(i.left),
    top: Math.floor(i.top),
    bottom: Math.floor(i.bottom),
    right: Math.floor(i.right)
  }, C = n === "bottom" ? "top" : "bottom", x = r === "right" ? "left" : "right", O = $7("transform"), I = void 0, V = void 0;
  if (C === "bottom" ? V = -l.height + u.bottom : V = u.top, x === "right" ? I = -l.width + u.right : I = u.left, s && O)
    c[O] = "translate3d(" + I + "px, " + V + "px, 0)", c[C] = 0, c[x] = 0, c.willChange = "transform";
  else {
    var i1 = C === "bottom" ? -1 : 1, Q = x === "right" ? -1 : 1;
    c[C] = V * i1, c[x] = I * Q, c.willChange = C + ", " + x;
  }
  var e1 = {
    "x-placement": e.placement
  };
  return e.attributes = I1({}, e1, e.attributes), e.styles = I1({}, c, e.styles), e.arrowStyles = I1({}, e.offsets.arrow, e.arrowStyles), e;
}
function k7(e, t, n) {
  var r = Nt(e, function(a) {
    var l = a.name;
    return l === t;
  }), i = !!r && e.some(function(a) {
    return a.name === n && a.enabled && a.order < r.order;
  });
  if (!i) {
    var o = "`" + t + "`", s = "`" + n + "`";
    console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
  }
  return i;
}
function zc(e, t) {
  if (!k7(e.instance.modifiers, "arrow", "keepTogether"))
    return e;
  var n = t.element;
  if (typeof n == "string") {
    if (n = e.instance.popper.querySelector(n), !n)
      return e;
  } else if (!e.instance.popper.contains(n))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
  var r = e.placement.split("-")[0], i = e.offsets, o = i.popper, s = i.reference, a = ["left", "right"].indexOf(r) !== -1, l = a ? "height" : "width", c = a ? "Top" : "Left", u = c.toLowerCase(), C = a ? "left" : "top", x = a ? "bottom" : "right", O = N7(n)[l];
  s[x] - O < o[u] && (e.offsets.popper[u] -= o[u] - (s[x] - O)), s[u] + O > o[x] && (e.offsets.popper[u] += s[u] + O - o[x]);
  var I = s[u] + s[l] / 2 - O / 2, V = st(e.instance.popper, "margin" + c).replace("px", ""), i1 = I - ge(e.offsets.popper)[u] - V;
  return i1 = Math.max(Math.min(o[l] - O, i1), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[u] = Math.round(i1), e.offsets.arrow[C] = "", e;
}
function Gc(e) {
  return e === "end" ? "start" : e === "start" ? "end" : e;
}
var R7 = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], W5 = R7.slice(3);
function U3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = W5.indexOf(e), r = W5.slice(n + 1).concat(W5.slice(0, n));
  return t ? r.reverse() : r;
}
var q5 = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function Wc(e, t) {
  if (I7(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
    return e;
  var n = a4(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement), r = e.placement.split("-")[0], i = v5(r), o = e.placement.split("-")[1] || "", s = [];
  switch (t.behavior) {
    case q5.FLIP:
      s = [r, i];
      break;
    case q5.CLOCKWISE:
      s = U3(r);
      break;
    case q5.COUNTERCLOCKWISE:
      s = U3(r, !0);
      break;
    default:
      s = t.behavior;
  }
  return s.forEach(function(a, l) {
    if (r !== a || s.length === l + 1)
      return e;
    r = e.placement.split("-")[0], i = v5(r);
    var c = e.offsets.popper, u = e.offsets.reference, C = Math.floor, x = r === "left" && C(c.right) > C(u.left) || r === "right" && C(c.left) < C(u.right) || r === "top" && C(c.bottom) > C(u.top) || r === "bottom" && C(c.top) < C(u.bottom), O = C(c.left) < C(n.left), I = C(c.right) > C(n.right), V = C(c.top) < C(n.top), i1 = C(c.bottom) > C(n.bottom), Q = r === "left" && O || r === "right" && I || r === "top" && V || r === "bottom" && i1, e1 = ["top", "bottom"].indexOf(r) !== -1, C1 = !!t.flipVariations && (e1 && o === "start" && O || e1 && o === "end" && I || !e1 && o === "start" && V || !e1 && o === "end" && i1);
    (x || Q || C1) && (e.flipped = !0, (x || Q) && (r = s[l + 1]), C1 && (o = Gc(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = I1({}, e.offsets.popper, Z7(e.instance.popper, e.offsets.reference, e.placement)), e = H7(e.instance.modifiers, e, "flip"));
  }), e;
}
function qc(e) {
  var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], o = Math.floor, s = ["top", "bottom"].indexOf(i) !== -1, a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height";
  return n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])), e;
}
function Yc(e, t, n, r) {
  var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], s = i[2];
  if (!o)
    return e;
  if (s.indexOf("%") === 0) {
    var a = void 0;
    switch (s) {
      case "%p":
        a = n;
        break;
      case "%":
      case "%r":
      default:
        a = r;
    }
    var l = ge(a);
    return l[t] / 100 * o;
  } else if (s === "vh" || s === "vw") {
    var c = void 0;
    return s === "vh" ? c = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : c = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * o;
  } else
    return o;
}
function Kc(e, t, n, r) {
  var i = [0, 0], o = ["right", "left"].indexOf(r) !== -1, s = e.split(/(\+|\-)/).map(function(u) {
    return u.trim();
  }), a = s.indexOf(Nt(s, function(u) {
    return u.search(/,|\s/) !== -1;
  }));
  s[a] && s[a].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var l = /\s*,\s*|\s+/, c = a !== -1 ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
  return c = c.map(function(u, C) {
    var x = (C === 1 ? !o : o) ? "height" : "width", O = !1;
    return u.reduce(function(I, V) {
      return I[I.length - 1] === "" && ["+", "-"].indexOf(V) !== -1 ? (I[I.length - 1] = V, O = !0, I) : O ? (I[I.length - 1] += V, O = !1, I) : I.concat(V);
    }, []).map(function(I) {
      return Yc(I, x, t, n);
    });
  }), c.forEach(function(u, C) {
    u.forEach(function(x, O) {
      l4(x) && (i[C] += x * (u[O - 1] === "-" ? -1 : 1));
    });
  }), i;
}
function Xc(e, t) {
  var n = t.offset, r = e.placement, i = e.offsets, o = i.popper, s = i.reference, a = r.split("-")[0], l = void 0;
  return l4(+n) ? l = [+n, 0] : l = Kc(n, o, s, a), a === "left" ? (o.top += l[0], o.left -= l[1]) : a === "right" ? (o.top += l[0], o.left += l[1]) : a === "top" ? (o.left += l[0], o.top -= l[1]) : a === "bottom" && (o.left += l[0], o.top += l[1]), e.popper = o, e;
}
function Jc(e, t) {
  var n = t.boundariesElement || We(e.instance.popper);
  e.instance.reference === n && (n = We(n));
  var r = a4(e.instance.popper, e.instance.reference, t.padding, n);
  t.boundaries = r;
  var i = t.priority, o = e.offsets.popper, s = {
    primary: function(l) {
      var c = o[l];
      return o[l] < r[l] && !t.escapeWithReference && (c = Math.max(o[l], r[l])), C5({}, l, c);
    },
    secondary: function(l) {
      var c = l === "right" ? "left" : "top", u = o[c];
      return o[l] > r[l] && !t.escapeWithReference && (u = Math.min(o[c], r[l] - (l === "right" ? o.width : o.height))), C5({}, c, u);
    }
  };
  return i.forEach(function(a) {
    var l = ["left", "top"].indexOf(a) !== -1 ? "primary" : "secondary";
    o = I1({}, o, s[l](a));
  }), e.offsets.popper = o, e;
}
function Qc(e) {
  var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
  if (r) {
    var i = e.offsets, o = i.reference, s = i.popper, a = ["bottom", "top"].indexOf(n) !== -1, l = a ? "left" : "top", c = a ? "width" : "height", u = {
      start: C5({}, l, o[l]),
      end: C5({}, l, o[l] + o[c] - s[c])
    };
    e.offsets.popper = I1({}, s, u[r]);
  }
  return e;
}
function eu(e) {
  if (!k7(e.instance.modifiers, "hide", "preventOverflow"))
    return e;
  var t = e.offsets.reference, n = Nt(e.instance.modifiers, function(r) {
    return r.name === "preventOverflow";
  }).boundaries;
  if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
    if (e.hide === !0)
      return e;
    e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
  } else {
    if (e.hide === !1)
      return e;
    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
  }
  return e;
}
function tu(e) {
  var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, o = r.reference, s = ["left", "right"].indexOf(n) !== -1, a = ["top", "left"].indexOf(n) === -1;
  return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = v5(t), e.offsets.popper = ge(i), e;
}
var nu = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Qc
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Xc,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Jc,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: qc
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: zc,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Wc,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: "viewport"
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: !1,
    /** @prop {ModifierFn} */
    fn: tu
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: eu
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: Uc,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: !0,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: !0,
    /** @prop {ModifierFn} */
    fn: jc,
    /** @prop {Function} */
    onLoad: Fc,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: void 0
  }
}, ru = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: !0,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: !1,
  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function() {
  },
  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: nu
}, ze = function() {
  function e(t, n) {
    var r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Ac(this, e), this.scheduleUpdate = function() {
      return requestAnimationFrame(r.update);
    }, this.update = Oc(this.update.bind(this)), this.options = I1({}, e.Defaults, i), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = t.jquery ? t[0] : t, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(I1({}, e.Defaults.modifiers, i.modifiers)).forEach(function(s) {
      r.options.modifiers[s] = I1({}, e.Defaults.modifiers[s] || {}, i.modifiers ? i.modifiers[s] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(s) {
      return I1({
        name: s
      }, r.options.modifiers[s]);
    }).sort(function(s, a) {
      return s.order - a.order;
    }), this.modifiers.forEach(function(s) {
      s.enabled && E7(s.onLoad) && s.onLoad(r.reference, r.popper, r.options, s, r.state);
    }), this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), this.state.eventsEnabled = o;
  }
  return Nc(e, [{
    key: "update",
    value: function() {
      return $c.call(this);
    }
  }, {
    key: "destroy",
    value: function() {
      return Pc.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function() {
      return Rc.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function() {
      return Vc.call(this);
    }
    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]), e;
}();
ze.Utils = (typeof window != "undefined" ? window : global).PopperUtils;
ze.placements = R7;
ze.Defaults = ru;
function iu(e, ...t) {
  const n = new Set(t.filter((i) => !!i));
  if (!e || n.size === 0)
    return !1;
  let r = e.target;
  for (; r && r.parentNode; ) {
    if (n.has(r))
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(t) {
    return typeof t;
  } : Yt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yt(e);
}
function ou(e) {
  return su(e) || au(e) || lu();
}
function su(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++)
      n[t] = e[t];
    return n;
  }
}
function au(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function lu() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
var jt = typeof window != "undefined";
function cu(e) {
  return Array.isArray(e) || Yt(e) === "object" ? Object.freeze(e) : e;
}
function uu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e.reduce(function(n, r) {
    var i = r.passengers[0], o = typeof i == "function" ? i(t) : r.passengers;
    return n.concat(o);
  }, []);
}
function fu(e, t) {
  return e.map(function(n, r) {
    return [r, n];
  }).sort(function(n, r) {
    return t(n[1], r[1]) || n[0] - r[0];
  }).map(function(n) {
    return n[1];
  });
}
function z3(e, t) {
  return t.reduce(function(n, r) {
    return e.hasOwnProperty(r) && (n[r] = e[r]), n;
  }, {});
}
var D7 = {}, pu = {}, du = {}, hu = H.extend({
  data: function() {
    return {
      transports: D7,
      targets: pu,
      sources: du,
      trackInstances: jt
    };
  },
  methods: {
    open: function(t) {
      if (jt) {
        var n = t.to, r = t.from, i = t.passengers, o = t.order, s = o === void 0 ? 1 / 0 : o;
        if (!(!n || !r || !i)) {
          var a = {
            to: n,
            from: r,
            passengers: cu(i),
            order: s
          }, l = Object.keys(this.transports);
          l.indexOf(n) === -1 && H.set(this.transports, n, []);
          var c = this.$_getTransportIndex(a), u = this.transports[n].slice(0);
          c === -1 ? u.push(a) : u[c] = a, this.transports[n] = fu(u, function(C, x) {
            return C.order - x.order;
          });
        }
      }
    },
    close: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = t.to, i = t.from;
      if (!(!r || !i) && this.transports[r])
        if (n)
          this.transports[r] = [];
        else {
          var o = this.$_getTransportIndex(t);
          if (o >= 0) {
            var s = this.transports[r].slice(0);
            s.splice(o, 1), this.transports[r] = s;
          }
        }
    },
    registerTarget: function(t, n, r) {
      jt && (this.trackInstances && !r && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")), this.$set(this.targets, t, Object.freeze([n])));
    },
    unregisterTarget: function(t) {
      this.$delete(this.targets, t);
    },
    registerSource: function(t, n, r) {
      jt && (this.trackInstances && !r && this.sources[t] && console.warn("[portal-vue]: source ".concat(t, " already exists")), this.$set(this.sources, t, Object.freeze([n])));
    },
    unregisterSource: function(t) {
      this.$delete(this.sources, t);
    },
    hasTarget: function(t) {
      return !!(this.targets[t] && this.targets[t][0]);
    },
    hasSource: function(t) {
      return !!(this.sources[t] && this.sources[t][0]);
    },
    hasContentFor: function(t) {
      return !!this.transports[t] && !!this.transports[t].length;
    },
    // Internal
    $_getTransportIndex: function(t) {
      var n = t.to, r = t.from;
      for (var i in this.transports[n])
        if (this.transports[n][i].from === r)
          return +i;
      return -1;
    }
  }
}), T1 = new hu(D7), Cu = 1, vu = H.extend({
  name: "portal",
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function() {
        return String(Cu++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function() {
        return {};
      }
    },
    tag: {
      type: String,
      default: "DIV"
    },
    to: {
      type: String,
      default: function() {
        return String(Math.round(Math.random() * 1e7));
      }
    }
  },
  created: function() {
    var t = this;
    this.$nextTick(function() {
      T1.registerSource(t.name, t);
    });
  },
  mounted: function() {
    this.disabled || this.sendUpdate();
  },
  updated: function() {
    this.disabled ? this.clear() : this.sendUpdate();
  },
  beforeDestroy: function() {
    T1.unregisterSource(this.name), this.clear();
  },
  watch: {
    to: function(t, n) {
      n && n !== t && this.clear(n), this.sendUpdate();
    }
  },
  methods: {
    clear: function(t) {
      var n = {
        from: this.name,
        to: t || this.to
      };
      T1.close(n);
    },
    normalizeSlots: function() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function(t) {
      return typeof t == "function" ? t(this.slotProps) : t;
    },
    sendUpdate: function() {
      var t = this.normalizeSlots();
      if (t) {
        var n = {
          from: this.name,
          to: this.to,
          passengers: ou(t),
          order: this.order
        };
        T1.open(n);
      } else
        this.clear();
    }
  },
  render: function(t) {
    var n = this.$slots.default || this.$scopedSlots.default || [], r = this.tag;
    return n && this.disabled ? n.length <= 1 && this.slim ? this.normalizeOwnChildren(n)[0] : t(r, [this.normalizeOwnChildren(n)]) : this.slim ? t() : t(r, {
      class: {
        "v-portal": !0
      },
      style: {
        display: "none"
      },
      key: "v-portal-placeholder"
    });
  }
}), V7 = H.extend({
  name: "portalTarget",
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      required: !0
    },
    slim: {
      type: Boolean,
      default: !1
    },
    slotProps: {
      type: Object,
      default: function() {
        return {};
      }
    },
    tag: {
      type: String,
      default: "div"
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function() {
    return {
      transports: T1.transports,
      firstRender: !0
    };
  },
  created: function() {
    var t = this;
    this.$nextTick(function() {
      T1.registerTarget(t.name, t);
    });
  },
  watch: {
    ownTransports: function() {
      this.$emit("change", this.children().length > 0);
    },
    name: function(t, n) {
      T1.unregisterTarget(n), T1.registerTarget(t, this);
    }
  },
  mounted: function() {
    var t = this;
    this.transition && this.$nextTick(function() {
      t.firstRender = !1;
    });
  },
  beforeDestroy: function() {
    T1.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function() {
      var t = this.transports[this.name] || [];
      return this.multiple ? t : t.length === 0 ? [] : [t[t.length - 1]];
    },
    passengers: function() {
      return uu(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function() {
      var t = this.slim && !this.transition;
      return t && this.children().length > 1 && console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."), t;
    }
  },
  render: function(t) {
    var n = this.noWrapper(), r = this.children(), i = this.transition || this.tag;
    return n ? r[0] : this.slim && !i ? t() : t(i, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : void 0
      },
      class: {
        "vue-portal-target": !0
      }
    }, r);
  }
}), gu = 0, Lu = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"], wu = ["multiple", "transition"];
H.extend({
  name: "MountingPortal",
  inheritAttrs: !1,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: !0
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function() {
        return "mounted_" + String(gu++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function() {
        return {};
      }
    },
    tag: {
      type: String,
      default: "DIV"
    },
    // name for the target
    to: {
      type: String,
      default: function() {
        return String(Math.round(Math.random() * 1e7));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: !1
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: "div"
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function() {
    if (typeof document != "undefined") {
      var t = document.querySelector(this.mountTo);
      if (!t) {
        console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
        return;
      }
      var n = this.$props;
      if (T1.targets[n.name]) {
        n.bail ? console.warn("[portal-vue]: Target ".concat(n.name, ` is already mounted.
        Aborting because 'bail: true' is set`)) : this.portalTarget = T1.targets[n.name];
        return;
      }
      var r = n.append;
      if (r) {
        var i = typeof r == "string" ? r : "DIV", o = document.createElement(i);
        t.appendChild(o), t = o;
      }
      var s = z3(this.$props, wu);
      s.slim = this.targetSlim, s.tag = this.targetTag, s.slotProps = this.targetSlotProps, s.name = this.to, this.portalTarget = new V7({
        el: t,
        parent: this.$parent || this,
        propsData: s
      });
    }
  },
  beforeDestroy: function() {
    var t = this.portalTarget;
    if (this.append) {
      var n = t.$el;
      n.parentNode.removeChild(n);
    }
    t.$destroy();
  },
  render: function(t) {
    if (!this.portalTarget)
      return console.warn("[portal-vue] Target wasn't mounted"), t();
    if (!this.$scopedSlots.manual) {
      var n = z3(this.$props, Lu);
      return t(vu, {
        props: n,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
    var r = this.$scopedSlots.manual({
      to: this.to
    });
    return Array.isArray(r) && (r = r[0]), r || t();
  }
});
const m5 = class m5 {
};
m5.TARGET_A = "Abydos", m5.TARGET_B = "Belkan";
let g5 = m5;
var _e;
let Ze = _e = class extends H {
  constructor() {
    super(...arguments), this.source = `stargate_${_e.baseId++}`;
  }
  static get openedInstances() {
    return _e.opened;
  }
  get target() {
    return this.stargateTarget || g5.TARGET_A;
  }
  mounted() {
    _e.opened.push(this), this.sendContentToTarget();
  }
  updated() {
    this.sendContentToTarget();
  }
  beforeDestroy() {
    _e.opened.splice(_e.opened.indexOf(this), 1), this.close();
  }
  render() {
    var t;
    return (t = this.$slots.anchor) === null || t === void 0 ? void 0 : t[0];
  }
  sendContentToTarget() {
    if (this.$slots.default) {
      const t = this.source, n = this.target, r = this.$slots.default;
      T1.open({
        from: t,
        to: n,
        passengers: r
      });
    } else
      this.close();
  }
  close() {
    T1.close({
      from: this.source,
      to: this.target
    });
  }
};
Ze.opened = [];
Ze.baseId = 1;
L([W8({
  default: ""
}), w("design:type", String)], Ze.prototype, "stargateTarget", void 0);
Ze = _e = L([f1({
  name: "Stargate"
})], Ze);
document.addEventListener("keydown", (e) => {
  const t = Ze.openedInstances.slice().reverse().find((n) => n.$slots.default);
  t == null || t.$emit("bodyKeyDown", e);
});
var M2;
let ne = M2 = class extends H {
  constructor() {
    super(...arguments), this.popper = null, this.popperContent = null;
  }
  onShowingChanged(t, n) {
    n && !t && this.destroyPopperInstance();
  }
  mounted() {
    this.addListeners(), this.updatePopper();
  }
  updated() {
    this.$nextTick(() => this.updatePopper());
  }
  beforeDestroy() {
    this.removeListeners(), this.popper !== null && this.destroyPopperInstance();
  }
  render() {
    const t = arguments[0];
    return t(Ze, {
      on: {
        bodyKeyDown: this.onBodyKeyDown
      }
    }, [this.showing && this.$slots.default, t("template", {
      slot: "anchor"
    }, [this.$slots.anchor])]);
  }
  updatePopper() {
    this.showing && (this.popperContent = document.getElementById(this.popperId), this.$el && this.popperContent && (this.popper ? (this.popper.options.placement = this.placement, this.popper.options.modifiers = Object.assign(Object.assign({}, ze.Defaults.modifiers), this.modifiers), this.popper.scheduleUpdate()) : this.popper = new ze(this.$el, this.popperContent, {
      placement: this.placement,
      modifiers: Object.assign(Object.assign({}, ze.Defaults.modifiers), this.modifiers)
    })));
  }
  /**
   * Close the popup on `mousedown` outside of it.
   *
   * Using `mousedown` instead of `click`, because stopping propagation
   * on `mousedown` event also prevents `mouseup` and `click` events from firing.
   */
  onBodyMouseDown(t) {
    this.showing && (iu(t, this.$el, this.popperContent) || (t.stopPropagation(), this.close()));
  }
  // Close on ESC or TAB keys
  onBodyKeyDown(t) {
    this.showing && (t.key === p5.ESC_KEY || t.key === p5.TAB_KEY) && (t.stopPropagation(), this.close());
  }
  addListeners() {
    document.addEventListener("mousedown", this.onBodyMouseDown, {
      capture: !0
    });
  }
  removeListeners() {
    document.removeEventListener("mousedown", this.onBodyMouseDown, {
      capture: !0
    });
  }
  destroyPopperInstance() {
    var t;
    (t = this.popper) === null || t === void 0 || t.destroy(), this.popper = null;
  }
  close() {
    this.$emit(M2.EVENT_CLOSE);
  }
};
ne.EVENT_CLOSE = "close";
L([m({
  type: String,
  required: !0
}), w("design:type", String)], ne.prototype, "popperId", void 0);
L([m({
  type: Boolean,
  required: !0
}), w("design:type", Boolean)], ne.prototype, "showing", void 0);
L([m({
  type: String,
  required: !0
}), w("design:type", Object)], ne.prototype, "placement", void 0);
L([m({
  type: Object,
  required: !1,
  default: () => null
}), w("design:type", Object)], ne.prototype, "modifiers", void 0);
L([et("showing", {
  immediate: !0
}), w("design:type", Function), w("design:paramtypes", [Boolean, Boolean]), w("design:returntype", void 0)], ne.prototype, "onShowingChanged", null);
ne = M2 = L([f1({
  name: "PortalPopper"
})], ne);
var m1;
let $ = m1 = class extends H {
  constructor() {
    super(...arguments), this.showing = !1, this.instanceId = m1.uniqueId++, this.popperId = `lp-anchored-popup-popper-${this.instanceId}`, this.modifiers = {}, this.shouldDisappear = !1, this.eventManager = new m7();
  }
  onOpenedChange(t, n) {
    this.$nextTick(() => {
      this.opened && (this.showing = !0), this.shouldDisappear = !t && n;
    });
  }
  onAlignWidthsChange() {
    this.modifiers.sizeToAnchor = this.alignWidths ? {
      order: m1.CUSTOM_MODIFIER_ORDER,
      // execute before compute style.
      enabled: !0,
      fn: (t) => (t.styles.width = `${t.offsets.reference.width}px`, t)
    } : void 0;
  }
  onOffsetMainAxisChange() {
    this.updateOffsetModifier();
  }
  onOffsetSecondaryAxisChange() {
    this.updateOffsetModifier();
  }
  updateOffsetModifier() {
    this.modifiers.offset = {
      enabled: !0,
      offset: `${this.offsetSecondaryAxis}px, ${this.offsetMainAxis}px`
    };
  }
  mounted() {
    this.eventManager.add(this.$slots.anchor, "mouseenter", this.onAnchorEnter), this.eventManager.add(this.$slots.anchor, "mouseleave", this.onAnchorLeave), this.eventManager.add(this.$slots.anchor, "click", this.onAnchorClick), this.eventManager.add(this.$slots.anchor, "keydown", this.onAnchorKeydown), this.eventManager.add(this.$slots.anchor, "keyup", this.onAnchorKeyup);
  }
  beforeDestroy() {
    this.eventManager.removeAll();
  }
  render() {
    const t = arguments[0];
    return t(ne, {
      attrs: {
        showing: this.showing,
        popperId: this.popperId,
        placement: this.placement,
        modifiers: this.modifiers
      },
      on: {
        close: this.onClose
      }
    }, [t("div", {
      attrs: {
        id: this.popperId
      },
      key: this.popperId,
      class: "lp-anchored-popup",
      on: {
        mouseenter: this.onPopupEnter,
        mouseleave: this.onPopupLeave
      }
    }, [t("div", {
      class: W1("lp-anchored-popup-content", {
        [m1.CLASS_DISAPPEAR]: this.shouldDisappear
      }),
      on: {
        animationend: this.onAnimationEnd
      }
    }, [this.$slots.content])]), t("template", {
      slot: "anchor"
    }, [this.$slots.anchor])]);
  }
  onClose() {
    this.preventClose || (this.shouldDisappear = !0);
  }
  onAnimationEnd({
    animationName: t
  }) {
    t === m1.CLASS_DISAPPEAR && (this.toggleVisibility(!1), this.shouldDisappear = !1);
  }
  toggleVisibility(t) {
    this.showing = t, this.$emit(m1.EVENT_TOGGLE, t);
  }
  onAnchorEnter(t) {
    this.$emit(m1.EVENT_ANCHOR_ENTER, t);
  }
  onAnchorLeave(t) {
    this.$emit(m1.EVENT_ANCHOR_LEAVE, t);
  }
  onAnchorClick(t) {
    this.$emit(m1.EVENT_ANCHOR_CLICK, t);
  }
  onAnchorKeydown(t) {
    this.$emit(m1.EVENT_ANCHOR_KEYDOWN, t);
  }
  onAnchorKeyup(t) {
    this.$emit(m1.EVENT_ANCHOR_KEYUP, t);
  }
  onPopupEnter(t) {
    this.$emit(m1.EVENT_POPUP_ENTER, t);
  }
  onPopupLeave(t) {
    this.$emit(m1.EVENT_POPUP_LEAVE, t);
  }
};
$.EVENT_TOGGLE = "toggle";
$.EVENT_ANCHOR_ENTER = "anchorEnter";
$.EVENT_ANCHOR_LEAVE = "anchorLeave";
$.EVENT_ANCHOR_CLICK = "anchorClick";
$.EVENT_ANCHOR_KEYUP = "anchorKeyup";
$.EVENT_ANCHOR_KEYDOWN = "anchorKeydown";
$.EVENT_POPUP_ENTER = "popupEnter";
$.EVENT_POPUP_LEAVE = "popupLeave";
$.CLASS_DISAPPEAR = "disappear";
$.CUSTOM_MODIFIER_ORDER = 840;
$.uniqueId = 0;
L([m({
  type: Number,
  required: !1,
  default: 0
}), w("design:type", Number)], $.prototype, "offsetMainAxis", void 0);
L([m({
  type: Number,
  required: !1,
  default: 0
}), w("design:type", Number)], $.prototype, "offsetSecondaryAxis", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], $.prototype, "opened", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], $.prototype, "preventClose", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], $.prototype, "alignWidths", void 0);
L([m({
  type: String,
  required: !1,
  validator: (e) => se($.Placement).indexOf(e) > -1,
  default: () => $.Placement.AUTO
}), w("design:type", String)], $.prototype, "placement", void 0);
L([et("opened", {
  immediate: !0
}), w("design:type", Function), w("design:paramtypes", [Boolean, Boolean]), w("design:returntype", void 0)], $.prototype, "onOpenedChange", null);
L([et("alignWidths", {
  immediate: !0
}), w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], $.prototype, "onAlignWidthsChange", null);
L([et("offsetMainAxis", {
  immediate: !0
}), w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], $.prototype, "onOffsetMainAxisChange", null);
L([et("offsetSecondaryAxis", {
  immediate: !0
}), w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], $.prototype, "onOffsetSecondaryAxisChange", null);
$ = m1 = L([f1({
  name: "AnchoredPopup"
})], $);
(function(e) {
  (function(t) {
    t.AUTO = "auto", t.AUTO_START = "auto-start", t.AUTO_END = "auto-end", t.TOP = "top", t.TOP_START = "top-start", t.TOP_END = "top-end", t.BOTTOM = "bottom", t.BOTTOM_START = "bottom-start", t.BOTTOM_END = "bottom-end", t.LEFT = "left", t.LEFT_START = "left-start", t.LEFT_END = "left-end", t.RIGHT = "right", t.RIGHT_START = "right-start", t.RIGHT_END = "right-end";
  })(e.Placement || (e.Placement = {}));
})($ || ($ = {}));
let u1 = class extends H {
  render() {
    const t = arguments[0];
    return t("div", {
      class: `lp-feedback lp-${this.type}`,
      on: {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      }
    }, [this.showArrow && t("div", {
      class: "arrow"
    }), t("div", {
      class: W1("content", {
        compact: this.compact
      })
    }, [this.title && t("p", {
      class: "title"
    }, [this.title]), this.text && t("p", {
      class: "text"
    }, [this.text]), this.href && t("a", {
      class: "link",
      attrs: {
        href: this.href
      }
    }, [this.linkText || this.href]), t("div", {
      class: "default"
    }, [this.$slots.default])])]);
  }
  onMouseEnter() {
    this.$emit("mouseenter");
  }
  onMouseLeave() {
    this.$emit("mouseleave");
  }
};
L([m({
  type: String,
  required: !1,
  validator: (e) => se(u1.Type).indexOf(e) > -1,
  default: () => u1.Type.INFO
}), w("design:type", String)], u1.prototype, "type", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], u1.prototype, "title", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], u1.prototype, "text", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], u1.prototype, "compact", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], u1.prototype, "showArrow", void 0);
L([m({
  type: String,
  required: !1,
  default: ""
}), w("design:type", String)], u1.prototype, "href", void 0);
L([m({
  type: String,
  required: !1,
  default: ""
}), w("design:type", String)], u1.prototype, "linkText", void 0);
u1 = L([f1({
  name: "Feedback"
})], u1);
(function(e) {
  (function(t) {
    t.ERROR = "error", t.WARNING = "warning", t.INFO = "info";
  })(e.Type || (e.Type = {}));
})(u1 || (u1 = {}));
var G3, W3;
const mu = 400;
let _1 = class extends H {
  constructor() {
    super(...arguments), this.eventManager = new m7(), this.opened = !1, this.timer = null;
  }
  mounted() {
    this.eventManager.add(this.$slots.default, "mouseenter", this.onMouseEnter), this.eventManager.add(this.$slots.default, "mouseleave", this.onMouseLeave);
  }
  beforeDestroy() {
    this.eventManager.removeAll();
  }
  render() {
    const t = arguments[0];
    return t($, {
      attrs: {
        opened: this.opened,
        placement: this.placement,
        offsetMainAxis: this.offset
      }
    }, [t("template", {
      slot: "anchor"
    }, [this.$slots.default]), (this.text || this.$slots.content) && !this.disabled && t(u1, {
      class: "lp-tooltip-container",
      slot: "content",
      attrs: {
        compact: !0,
        showArrow: this.showArrow,
        type: this.type
      }
    }, [this.text ? t("span", {
      class: "lp-tooltip-text"
    }, [this.text]) : null, this.$slots.content])]);
  }
  onMouseEnter() {
    this.disabled || (this.timer = window.setTimeout(() => {
      this.opened = !0;
    }, mu));
  }
  onMouseLeave() {
    this.timer && clearTimeout(this.timer), this.opened = !1;
  }
};
L([m({
  type: [String, Object],
  required: !1,
  default: null
}), w("design:type", Object)], _1.prototype, "text", void 0);
L([m({
  type: String,
  required: !1,
  validator: (e) => se(u1.Type).indexOf(e) > -1,
  default: () => u1.Type.INFO
}), w("design:type", typeof (G3 = typeof u1 != "undefined" && u1.Type) == "function" ? G3 : Object)], _1.prototype, "type", void 0);
L([m({
  type: String,
  required: !1,
  validator: (e) => se($.Placement).indexOf(e) > -1,
  default: () => $.Placement.RIGHT
}), w("design:type", typeof (W3 = typeof $ != "undefined" && $.Placement) == "function" ? W3 : Object)], _1.prototype, "placement", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], _1.prototype, "disabled", void 0);
L([m({
  type: Number,
  required: !1,
  default: 0
}), w("design:type", Number)], _1.prototype, "offset", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], _1.prototype, "showArrow", void 0);
_1 = L([f1({
  name: "Tooltip"
})], _1);
(function(e) {
  e.Type = u1.Type, e.Placement = $.Placement;
})(_1 || (_1 = {}));
const xu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50896 8.6909C6.50896 8.88779 6.53024 9.04743 6.56749 9.16451C6.61006 9.28158 6.66328 9.40929 6.73778 9.54765C6.76439 9.59022 6.77503 9.63279 6.77503 9.67004C6.77503 9.72326 6.7431 9.77647 6.67392 9.82968L6.33867 10.0532C6.29078 10.0851 6.24289 10.1011 6.20031 10.1011C6.1471 10.1011 6.09388 10.0745 6.04067 10.0266C5.96617 9.94676 5.90231 9.86161 5.8491 9.77647C5.79588 9.68601 5.74267 9.5849 5.68413 9.46251C5.26906 9.95208 4.74756 10.1969 4.11963 10.1969C3.67263 10.1969 3.3161 10.0691 3.05535 9.81372C2.7946 9.55829 2.66156 9.21772 2.66156 8.79201C2.66156 8.33968 2.8212 7.97251 3.14581 7.69579C3.47042 7.41908 3.90145 7.28072 4.44956 7.28072C4.63049 7.28072 4.81674 7.29668 5.01363 7.32329C5.21053 7.3499 5.41274 7.39247 5.6256 7.44036V7.0519C5.6256 6.64747 5.54046 6.36543 5.37549 6.20047C5.20521 6.0355 4.91785 5.95568 4.5081 5.95568C4.32185 5.95568 4.13028 5.97697 3.93338 6.02486C3.73649 6.07275 3.54492 6.13129 3.35867 6.20579C3.27353 6.24304 3.20967 6.26433 3.17242 6.27497C3.13517 6.28561 3.10856 6.29093 3.08728 6.29093C3.01278 6.29093 2.97553 6.23772 2.97553 6.12597V5.86522C2.97553 5.78008 2.98617 5.71622 3.01278 5.67897C3.03938 5.64172 3.08728 5.60447 3.16178 5.56722C3.34803 5.47143 3.57153 5.39161 3.83228 5.32775C4.09303 5.25857 4.36974 5.22665 4.66242 5.22665C5.29567 5.22665 5.75864 5.37032 6.05664 5.65768C6.34931 5.94504 6.49831 6.3814 6.49831 6.96675V8.6909H6.50896ZM4.34846 9.49976C4.52406 9.49976 4.70499 9.46783 4.89656 9.40397C5.08813 9.34011 5.25842 9.22304 5.4021 9.0634C5.48724 8.96229 5.5511 8.85054 5.58303 8.72283C5.61496 8.59511 5.63624 8.44079 5.63624 8.25986V8.03636C5.48192 7.99911 5.31696 7.96718 5.14667 7.9459C4.97638 7.92461 4.81142 7.91397 4.64646 7.91397C4.28992 7.91397 4.02917 7.98315 3.85356 8.12683C3.67795 8.27051 3.59281 8.47272 3.59281 8.73879C3.59281 8.9889 3.65667 9.17515 3.7897 9.30286C3.91742 9.4359 4.10367 9.49976 4.34846 9.49976ZM8.62156 10.0745C8.52578 10.0745 8.46192 10.0585 8.41935 10.0213C8.37678 9.98933 8.33953 9.91483 8.3076 9.81372L7.05706 5.70025C7.02514 5.59383 7.00917 5.52465 7.00917 5.4874C7.00917 5.40225 7.05174 5.35436 7.13689 5.35436H7.65839C7.75949 5.35436 7.82867 5.37032 7.86592 5.40757C7.90849 5.4395 7.94042 5.514 7.97235 5.61511L8.86635 9.1379L9.69649 5.61511C9.7231 5.50868 9.75503 5.4395 9.7976 5.40757C9.84017 5.37565 9.91467 5.35436 10.0105 5.35436H10.4362C10.5373 5.35436 10.6065 5.37032 10.649 5.40757C10.6916 5.4395 10.7289 5.514 10.7501 5.61511L11.5909 9.18047L12.5115 5.61511C12.5435 5.50868 12.5807 5.4395 12.618 5.40757C12.6605 5.37565 12.7297 5.35436 12.8255 5.35436H13.3204C13.4055 5.35436 13.4534 5.39693 13.4534 5.4874C13.4534 5.514 13.4481 5.54061 13.4428 5.57254C13.4375 5.60447 13.4268 5.64704 13.4055 5.70558L12.1231 9.81904C12.0911 9.92547 12.0539 9.99465 12.0113 10.0266C11.9687 10.0585 11.8996 10.0798 11.8091 10.0798H11.3515C11.2504 10.0798 11.1812 10.0638 11.1386 10.0266C11.096 9.98933 11.0588 9.92015 11.0375 9.81372L10.2127 6.3814L9.39317 9.8084C9.36657 9.91483 9.33464 9.98401 9.29207 10.0213C9.24949 10.0585 9.17499 10.0745 9.07921 10.0745H8.62156ZM15.4596 10.2181C15.1829 10.2181 14.9062 10.1862 14.6401 10.1224C14.374 10.0585 14.1665 9.98933 14.0281 9.90951C13.943 9.86161 13.8845 9.8084 13.8632 9.76051C13.8419 9.71261 13.8312 9.6594 13.8312 9.61151V9.34011C13.8312 9.22836 13.8738 9.17515 13.9536 9.17515C13.9856 9.17515 14.0175 9.18047 14.0494 9.19111C14.0814 9.20176 14.1292 9.22304 14.1825 9.24433C14.3634 9.32415 14.5603 9.38801 14.7678 9.43058C14.9807 9.47315 15.1882 9.49443 15.4011 9.49443C15.7363 9.49443 15.9971 9.4359 16.178 9.31883C16.3589 9.20176 16.4547 9.03147 16.4547 8.81329C16.4547 8.66429 16.4068 8.5419 16.311 8.44079C16.2152 8.33968 16.0343 8.24922 15.7736 8.16408L15.002 7.92461C14.6135 7.80222 14.3261 7.62129 14.1505 7.38183C13.9749 7.14768 13.8845 6.88693 13.8845 6.61022C13.8845 6.38672 13.9324 6.18983 14.0281 6.01954C14.1239 5.84925 14.2516 5.70025 14.4113 5.58318C14.5709 5.46079 14.7519 5.37032 14.9647 5.30647C15.1776 5.24261 15.4011 5.216 15.6352 5.216C15.7523 5.216 15.8747 5.22132 15.9917 5.23729C16.1141 5.25325 16.2259 5.27454 16.3376 5.29582C16.4441 5.32243 16.5452 5.34904 16.641 5.38097C16.7367 5.4129 16.8112 5.44482 16.8645 5.47675C16.939 5.51933 16.9922 5.5619 17.0241 5.60979C17.056 5.65236 17.072 5.7109 17.072 5.7854V6.0355C17.072 6.14725 17.0294 6.20579 16.9496 6.20579C16.907 6.20579 16.8379 6.1845 16.7474 6.14193C16.4441 6.00358 16.1035 5.9344 15.7257 5.9344C15.4224 5.9344 15.1829 5.98229 15.0179 6.0834C14.853 6.1845 14.7678 6.33883 14.7678 6.557C14.7678 6.706 14.821 6.83372 14.9275 6.93483C15.0339 7.03593 15.2308 7.13704 15.5128 7.2275L16.2685 7.46697C16.6516 7.58936 16.9283 7.75965 17.0933 7.97783C17.2582 8.19601 17.3381 8.44611 17.3381 8.72283C17.3381 8.95165 17.2902 9.15918 17.1997 9.34011C17.1039 9.52104 16.9762 9.68069 16.8112 9.8084C16.6463 9.94144 16.4494 10.0372 16.2206 10.1064C15.9811 10.1809 15.731 10.2181 15.4596 10.2181Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4654 12.8044C14.7146 14.0975 12.171 14.7839 9.98385 14.7839C6.91871 14.7839 4.15688 13.6505 2.07088 11.7667C1.90592 11.6177 2.05492 11.4155 2.25181 11.5325C4.5081 12.8416 7.29121 13.6345 10.1701 13.6345C12.1124 13.6345 14.2463 13.2301 16.2099 12.3999C16.5026 12.2669 16.7527 12.5915 16.4654 12.8044Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1944 11.9742C16.9709 11.6869 15.715 11.8359 15.1456 11.905C14.9754 11.9263 14.9487 11.7773 15.1031 11.6656C16.1035 10.9632 17.7478 11.1654 17.9394 11.3995C18.131 11.639 17.8862 13.2833 16.9496 14.0709C16.8059 14.1933 16.6676 14.1294 16.7314 13.9698C16.9443 13.4429 17.4179 12.2563 17.1944 11.9742Z" fill="currentColor"/>
</svg>
`, yu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90111 5.51164C8.95917 5.51164 9.00722 5.54386 9.05222 5.60164C9.16139 5.77192 9.35417 6.16053 9.64028 7.02525C9.83639 7.61942 10.0483 8.35192 10.2733 9.20664C9.54148 9.19542 8.79997 9.18687 8.07564 9.17851C7.95734 9.17715 7.83949 9.17579 7.72222 9.17442L7.29805 9.17109C7.77667 7.30137 8.35833 5.88442 8.78555 5.55025C8.82083 5.52775 8.85944 5.51498 8.90111 5.51164Z" fill="#4A4C4C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 5.58222 5.58222 2 10 2C14.4178 2 18 5.58222 18 10C18 14.4178 14.4178 18 10 18C5.58222 18 2 14.4178 2 10ZM15.7511 10.1444C15.8281 10.0803 15.8828 9.99361 15.9053 9.90361C15.9533 9.67556 15.8025 9.45056 15.575 9.40472H15.5717L15.5653 9.40139H15.5589C15.5552 9.40089 15.5516 9.40038 15.548 9.39988C15.53 9.39733 15.5135 9.395 15.4947 9.395L15.4369 9.38861C14.0972 9.29222 12.7158 9.25389 11.4242 9.22806L11.4208 9.21833C10.7911 6.85694 10.0039 4.44417 8.94361 4.44417C7.95389 4.4475 7.06389 6.03472 6.29611 9.1575C5.9722 9.15371 5.66645 9.14875 5.37411 9.14401C5.17332 9.14076 4.97885 9.1376 4.78917 9.135H4.71861C4.66056 9.13167 4.60278 9.135 4.545 9.14139C4.31361 9.18333 4.13361 9.36972 4.09833 9.60417C4.05333 9.90611 4.26222 10.1889 4.56417 10.2339L4.57056 10.2403H6.04833C5.91333 10.8636 5.79139 11.4836 5.69167 12.0781L5.64667 12.3414V12.3542C5.64667 12.4794 5.71083 12.595 5.81695 12.6625C5.98722 12.7717 6.21528 12.7203 6.32444 12.55L6.33417 12.5597L7.05695 10.2433H10.5394C10.8061 11.2522 11.0822 12.29 11.4486 13.2667L11.4493 13.2685C11.6458 13.7934 12.1017 15.0114 12.8656 15.0178H12.8753C14.0578 15.0178 14.5203 13.1061 14.8256 11.8403C14.8385 11.7878 14.851 11.7367 14.8631 11.6872C14.914 11.4793 14.958 11.2994 15.0022 11.1592L15.0247 11.0886L15.0253 11.0854C15.0282 11.0704 15.0311 11.0551 15.0311 11.0372C15.0311 10.9633 14.9831 10.8961 14.9156 10.8703C14.8222 10.8317 14.7164 10.88 14.6778 10.9731L14.6519 11.0436C14.6216 11.1288 14.5918 11.2125 14.5628 11.2942C14.4964 11.4808 14.4337 11.6571 14.3756 11.8181L14.3692 11.8342C13.8554 13.2827 13.6205 13.945 13.1644 13.945H13.1325C12.5506 13.945 12.0062 11.6084 11.7927 10.692L11.7864 10.6647C11.7677 10.5837 11.7491 10.5054 11.7315 10.431C11.7155 10.3639 11.7004 10.3 11.6867 10.2406H15.4781C15.5486 10.2406 15.6161 10.2247 15.6772 10.1925L15.6933 10.1828L15.7125 10.17L15.7222 10.1636L15.7511 10.1444Z" fill="currentColor"/>
</svg>
`, _u = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M12,6 L12,7 L10,7 C8.8954305,7 8,7.8954305 8,9 C8,10.1045695 8.8954305,11 10,11 L11.2928932,11 L10.1464466,9.85355339 C9.95118446,9.65829124 9.95118446,9.34170876 10.1464466,9.14644661 C10.3417088,8.95118446 10.6582912,8.95118446 10.8535534,9.14644661 L12.8535534,11.1464466 C13.0488155,11.3417088 13.0488155,11.6582912 12.8535534,11.8535534 L10.8535534,13.8535534 C10.6582912,14.0488155 10.3417088,14.0488155 10.1464466,13.8535534 C9.95118446,13.6582912 9.95118446,13.3417088 10.1464466,13.1464466 L11.2928932,12 L10,12 C8.34314575,12 7,10.6568542 7,9 C7,7.34314575 8.34314575,6 10,6 L12,6 Z" fill="currentColor"></path>
</svg>`, bu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7,2 L13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M14,13 L14,10 L6,10 L6,13 L14,13 Z M14,14 L6,14 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,14 Z M14,6 L14,4 C14,3.44771525 13.5522847,3 13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,6 L14,6 Z" fill="currentColor"></path>
</svg>`, Mu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M13.0000368,8.49538102 L13.0000368,12.5 C13.0000368,12.7761424 12.7761608,13 12.5000184,13 L7.50001841,13 C7.22387604,13 7,12.7761424 7,12.5 L7,7.5 C7,7.22385763 7.22387604,7 7.50001841,7 L12.5000184,7 C12.7761608,7 13.0000368,7.22385763 13.0000368,7.5 L13.0000368,8.49538101 L13.0000368,8.49538102 Z M12.0000184,8.25968758 L12.0000184,8 L8.00001841,8 L8.00001841,8.25968758 L10.0000184,9.85968758 L12.0000184,8.25968758 Z M12.0000184,9.54031242 L10.3123659,10.8904344 C10.1297566,11.0365219 9.87028021,11.0365219 9.68767089,10.8904344 L8.00001841,9.54031242 L8.00001841,12 L12.0000184,12 L12.0000184,9.54031242 Z" fill="currentColor"></path>
</svg>`, Eu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,5.5 C15,5.77614237 14.7761424,6 14.5,6 C14.2238576,6 14,5.77614237 14,5.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,15.5 C14,15.2238576 14.2238576,15 14.5,15 C14.7761424,15 15,15.2238576 15,15.5 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M10,10 L15.2928932,10 L14.1464466,8.85355339 C13.9511845,8.65829124 13.9511845,8.34170876 14.1464466,8.14644661 C14.3417088,7.95118446 14.6582912,7.95118446 14.8535534,8.14644661 L16.8535534,10.1464466 C17.0488155,10.3417088 17.0488155,10.6582912 16.8535534,10.8535534 L14.8535534,12.8535534 C14.6582912,13.0488155 14.3417088,13.0488155 14.1464466,12.8535534 C13.9511845,12.6582912 13.9511845,12.3417088 14.1464466,12.1464466 L15.2928932,11 L10,11 C9.35162354,11 9.35162354,10 10,10 Z" fill="currentColor"></path>
</svg>`, Ou = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4.44444V15.5556C18 16.9022 16.9022 18 15.5556 18H13.1111V11.7778H14.72C14.9467 11.7778 15.1378 11.6089 15.1644 11.3867L15.3289 10.0533C15.3467 9.92889 15.3067 9.8 15.2222 9.70667C15.1378 9.60889 15.0178 9.55556 14.8889 9.55556H13.1111V8C13.1111 7.51111 13.5111 7.11111 14 7.11111H14.8889C15.1333 7.11111 15.3333 6.91111 15.3333 6.66667V5.16444C15.3333 4.93778 15.1556 4.74667 14.9289 4.72444C14.9022 4.72 14.2756 4.66667 13.48 4.66667C11.5244 4.66667 10.4444 5.83111 10.4444 7.94222V9.55556H8.66667C8.42222 9.55556 8.22222 9.75556 8.22222 10V11.3333C8.22222 11.5778 8.42222 11.7778 8.66667 11.7778H10.4444V18H4.44444C3.09778 18 2 16.9022 2 15.5556V4.44444C2 3.09778 3.09778 2 4.44444 2H15.5556C16.9022 2 18 3.09778 18 4.44444Z" fill="currentColor"/>
</svg>
`, Su = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49141 4.41406C7.6416 4.05344 7.84265 3.72215 8.12778 3.44866C9.39074 2.21792 11.4785 2.52722 12.3355 4.0737C12.7651 4.85553 13.2118 5.62591 13.6586 6.39629C13.882 6.78148 14.1054 7.16666 14.3266 7.55328C14.6634 8.13882 15.0014 8.72435 15.3396 9.31007L15.3401 9.31103C16.1144 10.6522 16.8892 11.9944 17.6515 13.3397C18.573 14.9571 17.5742 16.9997 15.7442 17.2768C14.623 17.4443 13.5727 16.9288 12.9928 15.9236C12.3092 14.733 11.6224 13.5424 10.9369 12.354C10.6467 11.8509 10.3567 11.3482 10.0673 10.846C10.048 10.8073 10.0222 10.7751 9.99644 10.7429C9.99455 10.7414 9.99267 10.7398 9.99082 10.7382L7.17564 15.6143C7.17328 15.6227 7.17065 15.6312 7.16769 15.6401C7.14585 15.6789 7.12492 15.7187 7.10388 15.7586C7.06904 15.8248 7.03387 15.8916 6.99371 15.9558C6.95059 16.0271 6.90595 16.0956 6.85977 16.1614L6.85177 16.1752L6.85052 16.1745C6.28313 16.975 5.48722 17.3678 4.46779 17.3026C3.19838 17.2124 2.19961 16.2587 2.02563 14.9957C1.95429 14.4744 2.03252 13.981 2.25236 13.5198L2.23876 13.5119L7.49141 4.41406ZM7.49096 6.41483L4.26446 12.0033C5.45561 11.8207 6.6975 12.476 7.15518 13.6497L9.40119 9.75952C9.28321 9.55514 9.16484 9.3511 9.04659 9.14726C8.8553 8.81752 8.66425 8.48819 8.47573 8.15899C8.3372 7.91414 8.19545 7.67091 8.0537 7.42768C7.91195 7.18445 7.77014 6.94112 7.63161 6.69627C7.57877 6.60413 7.5319 6.51027 7.49096 6.41483Z" fill="currentColor"/>
</svg>
`, Tu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C14.1046 2 15 2.89543 15 4V16C15 17.1046 14.1046 18 13 18H7C5.89543 18 5 17.1046 5 16V4C5 2.89543 5.89543 2 7 2H13ZM13 3H7C6.44772 3 6 3.44772 6 4V16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16V4C14 3.44772 13.5523 3 13 3ZM13 9.5C13 9.77614 12.7762 10 12.5 10H7.50002C7.22388 10 7 9.77614 7 9.5V4.5C7 4.22386 7.22388 4 7.50002 4H12.5C12.7762 4 13 4.22386 13 4.5V9.5Z" fill="currentColor"/>
</svg>
`, Au = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75004 14.5H8.29289L7.14645 15.6464C7.00345 15.7894 6.96067 16.0045 7.03806 16.1913C7.11545 16.3782 7.29777 16.5 7.5 16.5H12.5C12.7022 16.5 12.8845 16.3782 12.9619 16.1913C13.0393 16.0045 12.9966 15.7894 12.8536 15.6464L11.7071 14.5H16.25C17.2164 14.5 18 13.7165 18 12.75V5.25C18 4.28348 17.2164 3.5 16.25 3.5H3.75004C2.78357 3.5 2 4.28348 2 5.25V12.75C2 13.7165 2.78357 14.5 3.75004 14.5ZM3.75004 4.5C3.33581 4.5 3 4.83581 3 5.25V12.75C3 13.1642 3.33581 13.5 3.75004 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V5.25C17 4.83581 16.6642 4.5 16.25 4.5H3.75004ZM8.70711 15.5L9.70711 14.5H10.2929L11.2929 15.5H8.70711Z" fill="currentColor"/>
<rect x="11" y="5.5" width="5" height="3.5" rx="0.5" fill="currentColor"/>
<mask id="path-3-inside-1_546_48761" fill="white">
<rect x="11" y="8" width="5" height="3.5" rx="0.5"/>
</mask>
<rect x="11" y="8" width="5" height="3.5" rx="0.5" stroke="#4A4C4C" stroke-width="2" mask="url(#path-3-inside-1_546_48761)"/>
</svg>
`, Nu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75004 14.5H8.29289L7.14645 15.6464C7.00345 15.7894 6.96067 16.0045 7.03806 16.1913C7.11545 16.3782 7.29777 16.5 7.5 16.5H12.5C12.7022 16.5 12.8845 16.3782 12.9619 16.1913C13.0393 16.0045 12.9966 15.7894 12.8536 15.6464L11.7071 14.5H16.25C17.2164 14.5 18 13.7165 18 12.75V5.25C18 4.28348 17.2164 3.5 16.25 3.5H3.75004C2.78357 3.5 2 4.28348 2 5.25V12.75C2 13.7165 2.78357 14.5 3.75004 14.5ZM3.75004 4.5C3.33581 4.5 3 4.83581 3 5.25V12.75C3 13.1642 3.33581 13.5 3.75004 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V5.25C17 4.83581 16.6642 4.5 16.25 4.5H3.75004ZM8.70711 15.5L9.70711 14.5H10.2929L11.2929 15.5H8.70711Z" fill="currentColor"/>
<rect x="4" y="5.5" width="12" height="5.5" rx="0.5" fill="currentColor"/>
</svg>
`, Zu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M13.0000368,11.5 C13.0000368,11.7761424 12.7761608,12 12.5000184,12 L7.50001841,12 C7.22387604,12 7,11.7761424 7,11.5 L7,8.5 C7,8.22385763 7.22387604,8 7.50001841,8 L12.5000184,8 C12.7761608,8 13.0000368,8.22385763 13.0000368,8.5 L13.0000368,11.5 Z" fill="currentColor"></path>
</svg>`, Hu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.64558 8.67131H8.67983C8.17046 8.35357 7.98025 7.91067 7.72557 7.08904L6.96152 4.27114C6.61334 3.0034 6.32642 2.40002 4.92726 2.40002H2.00322V3.16067H2.4191C3.27665 3.16067 3.37336 3.4784 3.62805 4.4284L4.29539 6.89969C4.64356 8.10002 5.18517 8.67131 6.64558 8.67131ZM11.3524 8.67131H13.3867C14.8503 8.67131 15.3564 8.10002 15.7078 6.89969L16.3752 4.4284C16.6299 3.4784 16.7556 3.16067 17.5841 3.16067H18V2.40002H15.105C13.6736 2.40002 13.3867 2.97131 13.0675 4.26793L12.3034 7.08584C12.0552 7.93955 11.8618 8.35357 11.3524 8.67131ZM8.67983 11.3287H11.3524V8.6681H8.67983V11.3287ZM2.00322 17.6H4.92726C6.32642 17.6 6.61334 16.9966 6.96152 15.7321L7.72557 12.9142C7.98025 12.0926 8.17046 11.6465 8.67983 11.332H6.64558C5.18195 11.332 4.64034 11.9032 4.29216 13.1036L3.62482 15.5749C3.36692 16.5216 3.27342 16.8394 2.41588 16.8394H2L2.00322 17.6ZM15.105 17.6H18V16.8394H17.5841C16.7588 16.8394 16.6299 16.5216 16.3752 15.5716L15.7078 13.1004C15.3597 11.8968 14.8503 11.3287 13.3867 11.3287H11.3556C11.865 11.6465 12.0488 12.0573 12.3034 12.911L13.0675 15.7289C13.3834 17.0287 13.6704 17.6 15.105 17.6Z" fill="currentColor"/>
</svg>
`, Iu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10.0008V13.5L12.6667 17V13.5L18 10.0008ZM12.6667 10.0008V13.5L7.33333 17V13.5L12.6667 10.0008ZM7.33333 10.0008V13.5L2 17V13.5L7.33333 10.0008ZM18 3V6.5L12.6667 10V6.5L18 3ZM12.6667 3V6.5L7.33333 10V6.5L12.6667 3ZM7.33333 3V6.5L2 10V6.5L7.33333 3Z" fill="currentColor"/>
</svg>
`, $u = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M13.0000368,6.5 C13.0000368,6.77614237 12.7761608,7 12.5000184,7 L7.50001841,7 C7.22387604,7 7,6.77614237 7,6.5 L7,4.5 C7,4.22385763 7.22387604,4 7.50001841,4 L12.5000184,4 C12.7761608,4 13.0000368,4.22385763 13.0000368,4.5 L13.0000368,6.5 Z" fill="currentColor"></path>
</svg>`, Pu = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7,2 L13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 L7,3 Z M11.5,9 L8.5,9 C8.2,9 8,8.8 8,8.5 L8,5.5 C8,5.2 8.2,5 8.5,5 L11.5,5 C11.8,5 12,5.2 12,5.5 L12,8.5 C12,8.8 11.8,9 11.5,9 Z M8.85355339,11.1464466 L10,12.293 L11.1464466,11.1464466 C11.3417088,10.9511845 11.6582912,10.9511845 11.8535534,11.1464466 C12.0488155,11.3417088 12.0488155,11.6582912 11.8535534,11.8535534 L10.707,13 L11.8535534,14.1464466 C12.0271197,14.320013 12.0464049,14.5894374 11.9114088,14.7843055 L11.8535534,14.8535534 C11.6582912,15.0488155 11.3417088,15.0488155 11.1464466,14.8535534 L10,13.707 L8.85355339,14.8535534 C8.65829124,15.0488155 8.34170876,15.0488155 8.14644661,14.8535534 C7.95118446,14.6582912 7.95118446,14.3417088 8.14644661,14.1464466 L9.293,13 L8.14644661,11.8535534 C7.97288026,11.679987 7.95359511,11.4105626 8.08859116,11.2156945 L8.14644661,11.1464466 C8.34170876,10.9511845 8.65829124,10.9511845 8.85355339,11.1464466 Z M11,6 L9,6 L9,8 L11,8 L11,6 Z" fill="currentColor"></path>
</svg>`, ku = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M11.3402062,9.97795507 C11.3402062,10.5258145 11.5463918,11.028019 11.6701031,11.5302235 C11.7938144,11.986773 11.9587629,12.3976676 11.9587629,12.8085622 C11.9587629,13.995591 11.0927835,15 9.97938144,15 C8.90721649,15 8,14.041246 8,12.8085622 C8,12.3976676 8.16494845,11.986773 8.32989691,11.5302235 C8.49484536,11.028019 8.70103093,10.5258145 8.70103093,9.97795507 C8.70103093,9.38444067 8.49484536,8.88223618 8.32989691,8.38003169 C8.20618557,7.92348215 8.04123711,7.51258757 8.04123711,7.14734793 C8.04123711,5.91466418 8.94845361,4.95591015 10.0206186,5.0015651 C11.0927835,5.0015651 12,5.96031913 12,7.19300289 C12,7.55824252 11.8762887,7.9691371 11.7113402,8.42568664 C11.5051546,8.92789114 11.3402062,9.43009563 11.3402062,9.97795507 Z M11,13 C11,12.4347826 10.5217391,12 10,12 C9.47826087,12 9,12.4782609 9,13 C9,13.5652174 9.47826087,14 10,14 C10.5217391,14 11,13.5652174 11,13 Z M9.9787234,8 C10.4893617,8 11,7.56521739 11,7 C11,6.43478261 10.5319149,6 10.0212766,6 C9.5106383,6 9,6.43478261 9,7 C9,7.56521739 9.46808511,8 9.9787234,8 Z" fill="currentColor"></path>
</svg>`, Ru = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M16,4 C17.1045695,4 18,4.8954305 18,6 L18,13 C18,14.1045695 17.1045695,15 16,15 L4,15 C2.8954305,15 2,14.1045695 2,13 L2,6 C2,4.8954305 2.8954305,4 4,4 L16,4 Z M16,5 L4,5 C3.44771525,5 3,5.44771525 3,6 L3,13 C3,13.5522847 3.44771525,14 4,14 L16,14 C16.5522847,14 17,13.5522847 17,13 L17,6 C17,5.44771525 16.5522847,5 16,5 Z M13.5,7 C13.7454599,7 13.949608,7.17687479 13.991944,7.410124 L14,7.5 L14,11 L15.5,11 C15.7454599,11 15.949608,11.1768748 15.991944,11.410124 L16,11.5 C16,11.7454599 15.8231252,11.949608 15.589876,11.991944 L15.5,12 L13.5,12 C13.2545401,12 13.050392,11.8231252 13.008056,11.589876 L13,11.5 L13,7.5 C13,7.22385763 13.2238576,7 13.5,7 Z M7.5,7 C7.74545989,7 7.94960804,7.17687479 7.991944,7.410124 L8,7.5 L8,10.5 C8,11.3761424 7.37614237,12 6.5,12 C5.67539541,12 5.07426757,11.4473789 5.0064,10.651919 L5,10.5 L5,7.5 C5,7.22385763 5.22385763,7 5.5,7 C5.74545989,7 5.94960804,7.17687479 5.991944,7.410124 L6,7.5 L6,10.5 C6,10.8238576 6.17614237,11 6.5,11 C6.78787344,11 6.9590334,10.8608262 6.993515,10.602443 L7,10.5 L7,7.5 C7,7.22385763 7.22385763,7 7.5,7 Z M10.5,7 C11.3761424,7 12.0000294,7.62385763 12.0000294,8.5 C12.0000294,9.21532898 11.584139,9.76248589 10.954644,9.939245 L11.9,11.2 C12.0656854,11.4209139 12.0209139,11.7343146 11.8,11.9 C11.6036321,12.0472759 11.3341883,12.0282648 11.16037,11.867067 L11.1,11.8 L10,10.333 L10,11.5 C10,11.7454599 9.82312521,11.949608 9.589876,11.991944 L9.5,12.0000294 C9.25454011,12.0000294 9.05039196,11.8231252 9.008056,11.589876 L9,11.5 L9,7.5 C9,7.25454011 9.17687479,7.05039196 9.410124,7.008056 L9.5,7 L10.5,7 Z M10.5,8 L10,8 L10,9 L10.5,9 C10.8238576,9 11,8.82385763 11,8.5 C11,8.21212656 10.8608262,8.0409666 10.602443,8.006485 L10.5,8 Z" fill="currentColor"></path>
</svg>`, Du = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M9.5527864,7.276393 C9.72287453,6.93621675 10.1840649,6.91004956 10.3989379,7.197891 L10.4472136,7.276393 L11.134,8.651 L12.5868927,8.907608 C12.9259697,8.96744513 13.0882489,9.33108721 12.9526386,9.614388 L12.9081773,9.689372 L12.8535534,9.753553 L11.735,10.871 L11.993197,12.417801 C12.0539583,12.7823692 11.7204024,13.0635981 11.3923267,12.989283 L11.3168962,12.965698 L11.2427521,12.928746 L10,12.183 L8.75724788,12.928746 C8.45157017,13.1121526 8.07888673,12.9255571 8.01076211,12.607391 L8.00029095,12.525246 L8.00305813,12.444784 L8.178,10.872 L7.13259828,9.73914 C6.90563798,9.49326635 6.98477768,9.11733349 7.25042863,8.965847 L7.32741328,8.930364 L7.41310733,8.907608 L8.865,8.651 L9.5527864,7.276393 Z M10,8.618 L9.6472136,9.323607 C9.59058183,9.43687054 9.49371996,9.52332864 9.37742891,9.567466 L9.28689267,9.592392 L8.488,9.733 L9.06740172,10.36086 C9.12637081,10.4247432 9.16697193,10.50209 9.18656149,10.584853 L9.19904927,10.669123 L9.19694187,10.755216 L9.107,11.552 L9.74275212,11.171254 C9.84831292,11.1079175 9.9714169,11.0868048 10.0886732,11.107917 L10.1751534,11.131668 L10.2572479,11.171254 L10.828,11.514 L10.706803,10.782199 C10.6908752,10.6866319 10.7032275,10.5899794 10.7403207,10.503285 L10.7855299,10.420319 L10.8464466,10.346447 L11.467,9.725 L10.7131073,9.592392 C10.6195781,9.57588685 10.5340527,9.53339371 10.4653065,9.471459 L10.4024784,9.403286 L10.3527864,9.323607 L10,8.618 Z" fill="currentColor"></path>
</svg>`, Vu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C3.47614 3 3 3.47614 3 4V12.9325L5.17991 11.1159C5.26977 11.041 5.38303 11 5.5 11H13C13.5239 11 14 10.5239 14 10V4C14 3.47614 13.5239 3 13 3H4ZM2 4C2 2.92386 2.92386 2 4 2H13C14.0761 2 15 2.92386 15 4V10C15 11.0761 14.0761 12 13 12H5.68102L2.82009 14.3841C2.67105 14.5083 2.46361 14.5351 2.28792 14.4528C2.11223 14.3705 2 14.194 2 14V4ZM5 5.5C5 5.22386 5.22386 5 5.5 5H11.5C11.7761 5 12 5.22386 12 5.5C12 5.77614 11.7761 6 11.5 6H5.5C5.22386 6 5 5.77614 5 5.5ZM15.5 6.5C15.5 6.22386 15.7239 6 16 6C17.0761 6 18 6.92386 18 8V17.5C18 17.6922 17.8898 17.8674 17.7166 17.9507C17.5434 18.0339 17.3377 18.0105 17.1877 17.8904L14.8246 16H8C6.92386 16 6 15.0761 6 14V13.5C6 13.2239 6.22386 13 6.5 13C6.77614 13 7 13.2239 7 13.5V14C7 14.5239 7.47614 15 8 15H15C15.1135 15 15.2237 15.0386 15.3123 15.1096L17 16.4597V8C17 7.47614 16.5239 7 16 7C15.7239 7 15.5 6.77614 15.5 6.5ZM5 7.5C5 7.22386 5.22386 7 5.5 7H9.5C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z" fill="currentColor"/>
</svg>
`, Bu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9258 9.00158H9.02689C8.72358 9.00158 8.47081 8.74882 8.47081 8.4455V7.49763C8.47081 7.19432 8.72358 6.94155 9.02689 6.94155H16.9763C17.2797 6.94155 17.5324 7.19432 17.5324 7.49763V8.4455C17.4692 8.74882 17.2291 9.00158 16.9258 9.00158ZM10.9226 12.9953C11.2259 12.9953 11.4787 12.7425 11.5166 12.4897V11.5419C11.5166 11.2385 11.2639 10.9858 10.9605 10.9858H3.02373C2.72042 10.9858 2.46765 11.2385 2.46765 11.4913V12.4392C2.46765 12.7425 2.72042 12.9953 3.02373 12.9953H10.9226ZM5.47555 14.4992C4.91947 14.4992 4.47713 14.9416 4.47713 15.4976C4.47713 16.0537 4.91947 16.4961 5.47555 16.4961C6.03163 16.4961 6.47397 16.0537 6.47397 15.4976C6.47397 14.9416 6.01899 14.4992 5.47555 14.4992ZM14.474 3.49131C13.9179 3.49131 13.4756 3.93365 13.4756 4.48973C13.4756 5.04581 13.9179 5.48815 14.474 5.48815C15.0301 5.48815 15.4724 5.04581 15.4724 4.48973C15.4724 3.94629 15.0301 3.49131 14.474 3.49131ZM9.97476 16.0032C9.41868 16.0032 8.87523 15.9021 8.36971 15.7504C8.11694 15.6998 7.86418 15.8009 7.77571 16.0537L7.42184 17.0016C7.32073 17.2543 7.47239 17.5577 7.77571 17.6461C8.47081 17.8989 9.2291 18 9.97476 18C13.2228 18 16.0285 16.0537 17.2797 13.248C17.3808 12.9953 17.2797 12.654 16.9763 12.5529L16.0285 12.1991C15.7757 12.0979 15.5229 12.1991 15.4345 12.4518C14.474 14.5498 12.4266 16.0032 9.97476 16.0032ZM9.97476 3.99684C10.5308 3.99684 11.0743 4.09795 11.5798 4.24961C11.8326 4.30016 12.0853 4.19905 12.1738 3.94629L12.5277 2.99842C12.6288 2.74566 12.4771 2.44234 12.1738 2.35387C11.4787 2.10111 10.7204 2 9.97476 2C6.72673 2 3.92105 3.94629 2.66986 6.75197C2.56876 7.00474 2.66986 7.34597 2.97318 7.44708L3.92105 7.80095C4.17381 7.90206 4.42658 7.80095 4.51504 7.54818C5.47555 5.45024 7.52294 3.99684 9.97476 3.99684Z" fill="currentColor"/>
</svg>
`, ju = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 9C4.22386 9 4 9.22386 4 9.5V12C4 12.2761 4.22386 12.5 4.5 12.5H15.5C15.7761 12.5 16 12.2761 16 12V9.5C16 9.22386 15.7761 9 15.5 9H4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75004 14.5H8.29289L7.14645 15.6464C7.00345 15.7894 6.96067 16.0045 7.03806 16.1913C7.11545 16.3782 7.29777 16.5 7.5 16.5H12.5C12.7022 16.5 12.8845 16.3782 12.9619 16.1913C13.0393 16.0045 12.9966 15.7894 12.8536 15.6464L11.7071 14.5H16.25C17.2164 14.5 18 13.7165 18 12.75V5.25C18 4.28348 17.2164 3.5 16.25 3.5H3.75004C2.78357 3.5 2 4.28348 2 5.25V12.75C2 13.7165 2.78357 14.5 3.75004 14.5ZM3.75004 4.5C3.33581 4.5 3 4.83581 3 5.25V12.75C3 13.1642 3.33581 13.5 3.75004 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V5.25C17 4.83581 16.6642 4.5 16.25 4.5H3.75004ZM8.70711 15.5L9.70711 14.5H10.2929L11.2929 15.5H8.70711Z" fill="currentColor"/>
</svg>
`, Fu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 7.25C4.22386 7.25 4 7.47386 4 7.75V10.25C4 10.5261 4.22386 10.75 4.5 10.75H15.5C15.7761 10.75 16 10.5261 16 10.25V7.75C16 7.47386 15.7761 7.25 15.5 7.25H4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75004 14.5H8.29289L7.14645 15.6464C7.00345 15.7894 6.96067 16.0045 7.03806 16.1913C7.11545 16.3782 7.29777 16.5 7.5 16.5H12.5C12.7022 16.5 12.8845 16.3782 12.9619 16.1913C13.0393 16.0045 12.9966 15.7894 12.8536 15.6464L11.7071 14.5H16.25C17.2164 14.5 18 13.7165 18 12.75V5.25C18 4.28348 17.2164 3.5 16.25 3.5H3.75004C2.78357 3.5 2 4.28348 2 5.25V12.75C2 13.7165 2.78357 14.5 3.75004 14.5ZM3.75004 4.5C3.33581 4.5 3 4.83581 3 5.25V12.75C3 13.1642 3.33581 13.5 3.75004 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V5.25C17 4.83581 16.6642 4.5 16.25 4.5H3.75004ZM8.70711 15.5L9.70711 14.5H10.2929L11.2929 15.5H8.70711Z" fill="currentColor"/>
</svg>
`, Uu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 5.5C4.22386 5.5 4 5.72386 4 6V8.5C4 8.77614 4.22386 9 4.5 9H15.5C15.7761 9 16 8.77614 16 8.5V6C16 5.72386 15.7761 5.5 15.5 5.5H4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75004 14.5H8.29289L7.14645 15.6464C7.00345 15.7894 6.96067 16.0045 7.03806 16.1913C7.11545 16.3782 7.29777 16.5 7.5 16.5H12.5C12.7022 16.5 12.8845 16.3782 12.9619 16.1913C13.0393 16.0045 12.9966 15.7894 12.8536 15.6464L11.7071 14.5H16.25C17.2164 14.5 18 13.7165 18 12.75V5.25C18 4.28348 17.2164 3.5 16.25 3.5H3.75004C2.78357 3.5 2 4.28348 2 5.25V12.75C2 13.7165 2.78357 14.5 3.75004 14.5ZM3.75004 4.5C3.33581 4.5 3 4.83581 3 5.25V12.75C3 13.1642 3.33581 13.5 3.75004 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V5.25C17 4.83581 16.6642 4.5 16.25 4.5H3.75004ZM8.70711 15.5L9.70711 14.5H10.2929L11.2929 15.5H8.70711Z" fill="currentColor"/>
</svg>
`, zu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99873 2.57001C7.79526 2.57001 5.9981 4.36717 5.9981 6.57064C5.9981 7.76726 6.58971 8.78304 7.4269 9.51754L6.23028 11.7322C6.15214 11.721 6.07847 11.7143 5.9981 11.7143C5.05822 11.7143 4.28354 12.489 4.28354 13.4289C4.28354 14.3688 5.05822 15.1434 5.9981 15.1434C6.93798 15.1434 7.71266 14.3688 7.71266 13.4289C7.71266 12.9734 7.52513 12.5582 7.23044 12.2501L8.61146 9.68536C8.74991 9.42824 8.67003 9.108 8.42706 8.94602C7.65684 8.43478 7.14114 7.56857 7.14114 6.57064C7.14114 4.98557 8.41366 3.71305 9.99873 3.71305C11.5838 3.71305 12.8563 4.98557 12.8563 6.57064C12.8563 6.7287 12.8439 6.88229 12.8197 7.03163C12.7753 7.30619 12.9057 7.59425 13.1668 7.68999C13.4977 7.81131 13.8692 7.63986 13.9332 7.29329C13.9765 7.05809 13.9994 6.81591 13.9994 6.57064C13.9994 4.36717 12.2022 2.57001 9.99873 2.57001ZM9.99873 4.85608C9.05885 4.85608 8.28418 5.63076 8.28418 6.57064C8.28418 7.51052 9.05885 8.2852 9.99873 8.2852C10.0791 8.2852 10.1528 8.2785 10.2309 8.26734L11.8026 10.7677C11.9612 11.0254 12.2971 11.1084 12.5574 10.9541L12.5706 10.9463C12.9903 10.703 13.477 10.5713 13.9994 10.5713C15.5844 10.5713 16.857 11.8438 16.857 13.4289C16.857 15.0139 15.5844 16.2865 13.9994 16.2865C13.33 16.2865 12.7215 16.0625 12.2379 15.682C12.0203 15.5107 11.7061 15.4868 11.4977 15.6692C11.233 15.9008 11.206 16.3085 11.479 16.5303C12.1678 17.09 13.0473 17.4295 13.9994 17.4295C16.2028 17.4295 18 15.6323 18 13.4289C18 11.2254 16.2028 9.42824 13.9994 9.42824C13.4725 9.42824 13.0148 9.63586 12.5527 9.82116L11.2489 7.73154C11.5347 7.42569 11.7133 7.01714 11.7133 6.57064C11.7133 5.63076 10.9386 4.85608 9.99873 4.85608ZM9.99873 5.99912C10.3202 5.99912 10.5703 6.24916 10.5703 6.57064C10.5703 6.89212 10.3202 7.14216 9.99873 7.14216C9.67725 7.14216 9.42721 6.89212 9.42721 6.57064C9.42721 6.24916 9.67725 5.99912 9.99873 5.99912ZM5.43755 10.1135C5.38236 9.76585 5.05127 9.52557 4.71778 9.63833C4.47142 9.72162 4.2296 9.82982 3.99778 9.96404C2.09123 11.0647 1.43264 13.5226 2.53326 15.4292C3.63389 17.3357 6.08963 17.9943 7.99842 16.8937C9.09011 16.2619 9.67949 15.1613 9.85585 14.0004H12.392C12.6308 14.6612 13.2604 15.1434 13.9994 15.1434C14.9392 15.1434 15.7139 14.3688 15.7139 13.4289C15.7139 12.489 14.9392 11.7143 13.9994 11.7143C13.2604 11.7143 12.6308 12.1965 12.392 12.8574H9.42721C9.11157 12.8574 8.85569 13.1132 8.85569 13.4289C8.85569 14.4156 8.34668 15.3801 7.4269 15.9114C6.05391 16.7039 4.3081 16.2307 3.51556 14.8577C2.72303 13.4847 3.19632 11.7389 4.5693 10.9463C4.72064 10.8584 4.87531 10.7877 5.03275 10.732C5.2938 10.6396 5.48097 10.387 5.43755 10.1135ZM5.9981 12.8574C6.31958 12.8574 6.56962 13.1074 6.56962 13.4289C6.56962 13.7503 6.31958 14.0004 5.9981 14.0004C5.67662 14.0004 5.42658 13.7503 5.42658 13.4289C5.42658 13.1074 5.67662 12.8574 5.9981 12.8574ZM13.9994 12.8574C14.3208 12.8574 14.5709 13.1074 14.5709 13.4289C14.5709 13.7503 14.3208 14.0004 13.9994 14.0004C13.6779 14.0004 13.4278 13.7503 13.4278 13.4289C13.4278 13.1074 13.6779 12.8574 13.9994 12.8574Z" fill="currentColor"/>
</svg>
`, Gu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.59168 6.49158C6.77799 6.28819 6.99766 6.23735 7.13352 6.23735H7.14258C7.27459 6.23734 7.4059 6.23734 7.52122 6.24211C7.66603 6.24781 7.82671 6.25565 7.97884 6.59327C8.08346 6.82607 8.26002 7.26049 8.39988 7.6046C8.50145 7.85453 8.58367 8.05682 8.60489 8.0996C8.65533 8.2013 8.68989 8.32048 8.62237 8.45553C8.61319 8.47388 8.60462 8.49131 8.59639 8.50801C8.54412 8.61421 8.50615 8.69134 8.41898 8.79398C8.38398 8.83486 8.34792 8.87897 8.31195 8.92295C8.24342 9.00677 8.17525 9.09015 8.11549 9.1499C8.0138 9.25078 7.90696 9.36205 8.02492 9.56462C8.1437 9.76801 8.55102 10.4315 9.15467 10.9693C9.80243 11.5464 10.3651 11.7916 10.6517 11.9165C10.7085 11.9413 10.7545 11.9613 10.7881 11.9782C10.9915 12.0799 11.1095 12.0617 11.2283 11.9258C11.347 11.7908 11.7351 11.3347 11.8702 11.1313C12.0052 10.9279 12.1415 10.9621 12.3278 11.0296C12.5141 11.0972 13.5124 11.5874 13.715 11.6891C13.7552 11.7091 13.7927 11.7272 13.8274 11.744C13.9686 11.812 14.0638 11.8579 14.1043 11.9258C14.1547 12.0096 14.1543 12.4176 13.9851 12.8919C13.8159 13.3662 12.9864 13.823 12.6138 13.8564C12.5784 13.8596 12.5431 13.8638 12.5069 13.8681C12.1625 13.9086 11.7296 13.9596 10.178 13.3479C8.26782 12.595 7.00872 10.7275 6.75169 10.3462C6.73099 10.3155 6.71679 10.2945 6.70927 10.2844L6.70729 10.2818C6.59852 10.1365 5.87983 9.17661 5.87983 8.18382C5.87983 7.2483 6.34068 6.75859 6.55226 6.53377C6.56662 6.5185 6.57984 6.50446 6.59168 6.49158Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58182 2 2.00001 5.58181 2.00001 9.99999C2.00001 11.3966 2.35973 12.71 2.98951 13.8531L2.02014 17.3112C1.96804 17.4971 2.01866 17.6967 2.15307 17.8352C2.28748 17.9738 2.48542 18.0305 2.6728 17.9841L6.29054 17.0878C7.39956 17.6695 8.66131 18 10 18C14.4182 18 18 14.4182 18 9.99999C18 5.58181 14.4182 2 10 2ZM3.08474 9.99999C3.08474 6.18089 6.1809 3.08473 10 3.08473C13.8191 3.08473 16.9153 6.18089 16.9153 9.99999C16.9153 13.8191 13.8191 16.9153 10 16.9153C8.77495 16.9153 7.62648 16.5957 6.62891 16.0375C6.50869 15.9703 6.36737 15.9513 6.23365 15.9844L3.316 16.7072L4.09512 13.9277C4.135 13.7855 4.11511 13.6331 4.04006 13.5058C3.4338 12.4778 3.08474 11.2804 3.08474 9.99999Z" fill="currentColor"/>
</svg>
`, Wu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3699 2.14868C12.9663 1.58917 14.8365 2.6766 15.2091 4.27618C15.5266 5.32752 14.9676 6.36081 14.963 7.4144C14.8664 9.12453 15.4438 10.8482 16.5272 12.186C17.0264 12.8223 17.6866 13.3885 17.8775 14.203C18.3398 15.6559 17.4473 17.3525 15.9774 17.8353C14.9147 18.2234 13.6656 17.9007 12.8697 17.1292C11.5861 15.8951 9.87241 14.9836 8.03446 15.0174C6.61287 14.9272 5.12917 15.6153 3.76049 14.9814C2.24918 14.3722 1.56369 12.432 2.29289 11.0151C2.68164 10.1262 3.54656 9.52611 4.48738 9.29373C6.79459 8.64623 8.63714 6.76465 9.28123 4.5063C9.54346 3.45044 10.2704 2.46453 11.3699 2.14868ZM9.74589 8.00776C8.42085 8.50567 7.62951 9.84276 7.84584 11.2182C8.04136 12.7049 9.52506 13.8917 11.0571 13.7292C12.6903 13.5803 13.9509 11.9672 13.6771 10.3789C13.5 8.61465 11.4435 7.30837 9.74589 8.00776Z" fill="currentColor"/>
</svg>
`, qu = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2c.824 0 1.425.553 1.493 1.348l.007.152v.726a4.978 4.978 0 013.494 4.542L15 9v3.3c0 1.18.664 2.223 1.724 2.753.444.222.321.865-.134.94l-.09.007H12l-.005.146C11.915 17.158 11.027 18 10 18c-1.076 0-2-.923-2-1.999L3.5 16c-.527 0-.695-.711-.223-.947.964-.482 1.64-1.506 1.716-2.556l.008-.197V9a4.979 4.979 0 013.5-4.772L8.5 3.5c0-.759.47-1.337 1.2-1.472l.15-.021L10 2zm1 14.001L9 16l.007.111c.061.478.507.889.993.889.523 0 1-.476 1-.999zM10.01 5l-.188.004C7.77 5.1 6.153 6.736 6.051 8.793L6.046 9v3.3a4.12 4.12 0 01-.833 2.44l-.149.188L5 15h10l-.056-.062a4.04 4.04 0 01-.943-2.179l-.02-.247-.005-.212V9c0-2.156-1.656-3.892-3.766-3.995L10.01 5zM10 3l-.077.004c-.243.024-.388.16-.418.4L9.5 3.5V4h1v-.5c0-.252-.107-.414-.306-.474l-.092-.02L10 3z" fill="currentColor" fill-rule="nonzero"/></svg>
`, Yu = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 2c.318 0 .603.082.837.23-.187.28-.346.58-.473.895a.385.385 0 00-.17-.1l-.092-.019L10 3l-.077.004c-.243.024-.388.16-.418.4L9.5 3.5V4h.6c-.05.242-.08.49-.094.745L10 4.999l-.178.005C7.77 5.1 6.153 6.736 6.051 8.793L6.046 9v3.3a4.12 4.12 0 01-.833 2.44l-.149.188L5 15h10l-.056-.062a4.04 4.04 0 01-.943-2.179l-.02-.247-.005-.212V9.895c.248.052.502.085.762.098L15 10v2.3c0 1.18.664 2.223 1.724 2.753.444.222.321.865-.134.94l-.09.007H12l-.005.146C11.915 17.158 11.027 18 10 18c-1.076 0-2-.923-2-1.999L3.5 16c-.527 0-.695-.711-.223-.947.964-.482 1.64-1.506 1.716-2.556l.008-.197V9a4.979 4.979 0 013.5-4.772L8.5 3.5c0-.759.47-1.337 1.2-1.472l.15-.021L10 2zM9 16l.007.111c.061.478.507.889.993.889s.931-.41.993-.888l.007-.111L9 16z" fill="currentColor" fill-rule="nonzero"/><circle fill="#FE2A4B" cx="15" cy="5" r="4"/></g></svg>
`, Ku = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.31797 11.7239C6.68535 11.7239 6.98419 11.4254 6.98419 11.0586C6.98419 10.6918 6.68535 10.3935 6.31797 10.3935C5.95058 10.3935 5.65176 10.6918 5.65176 11.0586C5.65176 11.4254 5.95058 11.7239 6.31797 11.7239ZM13.682 11.7239C14.0494 11.7239 14.3482 11.4254 14.3482 11.0586C14.3482 10.6918 14.0494 10.3935 13.682 10.3935C13.3147 10.3935 13.0158 10.6918 13.0158 11.0586C13.0158 11.4254 13.3147 11.7239 13.682 11.7239ZM6.07902 7.71717L4.74747 5.41478C4.67113 5.28244 4.71654 5.11341 4.84888 5.03699C4.98121 4.96078 5.15074 5.00611 5.22729 5.13823L6.5755 7.46977C7.60651 7.00001 8.76443 6.73836 10 6.73836C11.2356 6.73836 12.3935 7.00001 13.4245 7.46977L14.7727 5.13823C14.8493 5.00611 15.0188 4.96078 15.1511 5.03699C15.2835 5.11341 15.3291 5.28244 15.2525 5.41478L13.921 7.71717C16.2074 8.95871 17.7712 11.2697 18 14H2C2.22898 11.2697 3.79279 8.95871 6.07902 7.71717Z" fill="currentColor"/>
</svg>
`, Xu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.394 7.278C13.214 7.338 13.006 7.368 12.77 7.368C12.502 7.368 12.265 7.329 12.059 7.251C11.853 7.173 11.681 7.065 11.543 6.927C11.405 6.789 11.3 6.627 11.228 6.441C11.156 6.255 11.12 6.052 11.12 5.832V5.652H11.624V5.796C11.624 6.164 11.725 6.44 11.927 6.624C12.129 6.808 12.41 6.9 12.77 6.9C13.082 6.9 13.317 6.831 13.475 6.693C13.633 6.555 13.712 6.372 13.712 6.144V6.108C13.712 5.888 13.631 5.72 13.469 5.604C13.307 5.488 13.044 5.404 12.68 5.352C12.468 5.324 12.277 5.281 12.107 5.223C11.937 5.165 11.792 5.089 11.672 4.995C11.552 4.901 11.46 4.788 11.396 4.656C11.332 4.524 11.3 4.368 11.3 4.188V4.116C11.3 3.952 11.334 3.802 11.402 3.666C11.47 3.53 11.565 3.412 11.687 3.312C11.809 3.212 11.955 3.135 12.125 3.081C12.295 3.027 12.482 3 12.686 3C12.922 3 13.133 3.034 13.319 3.102C13.505 3.17 13.662 3.261 13.79 3.375C13.918 3.489 14.015 3.623 14.081 3.777C14.147 3.931 14.18 4.092 14.18 4.26V4.512H13.676V4.296C13.676 4.16 13.649 4.04 13.595 3.936C13.541 3.832 13.468 3.746 13.376 3.678C13.284 3.61 13.178 3.558 13.058 3.522C12.938 3.486 12.812 3.468 12.68 3.468C12.564 3.468 12.454 3.483 12.35 3.513C12.246 3.543 12.153 3.586 12.071 3.642C11.989 3.698 11.924 3.767 11.876 3.849C11.828 3.931 11.804 4.026 11.804 4.134V4.17C11.804 4.286 11.828 4.385 11.876 4.467C11.924 4.549 11.995 4.619 12.089 4.677C12.183 4.735 12.3 4.783 12.44 4.821C12.58 4.859 12.744 4.892 12.932 4.92C13.372 4.988 13.696 5.117 13.904 5.307C14.112 5.497 14.216 5.752 14.216 6.072V6.144C14.216 6.324 14.185 6.489 14.123 6.639C14.061 6.789 13.969 6.918 13.847 7.026C13.725 7.134 13.574 7.218 13.394 7.278ZM2.52 5.556V7.284H2.016V3.084H3.516C3.732 3.084 3.92 3.115 4.08 3.177C4.24 3.239 4.373 3.322 4.479 3.426C4.585 3.53 4.665 3.651 4.719 3.789C4.773 3.927 4.8 4.072 4.8 4.224V4.404C4.8 4.56 4.757 4.716 4.671 4.872C4.585 5.028 4.452 5.148 4.272 5.232V5.304C4.392 5.324 4.486 5.372 4.554 5.448C4.622 5.524 4.656 5.632 4.656 5.772V7.284H4.152V5.88C4.152 5.776 4.128 5.696 4.08 5.64C4.032 5.584 3.948 5.556 3.828 5.556H2.52ZM2.52 5.088H3.456C3.74 5.088 3.951 5.027 4.089 4.905C4.227 4.783 4.296 4.604 4.296 4.368V4.26C4.296 4.048 4.227 3.877 4.089 3.747C3.951 3.617 3.74 3.552 3.456 3.552H2.52V5.088ZM9.322 7.284V6.816H7.246V5.412H9.25V4.944H7.246V3.552H9.286V3.084H6.742V7.284H9.322ZM17.61 7.284V3.552H18.834V3.084H15.882V3.552H17.106V7.284H17.61ZM2.72 14.784L2.38 16.284H1L2.67 9.284H5.15L6.82 16.284H5.44L5.1 14.784H2.72ZM3 13.524H4.81L4 9.944H3.82L3 13.524ZM9.61 16.284V13.644H11.03C11.39 13.644 11.7033 13.584 11.97 13.464C12.2367 13.344 12.4583 13.1857 12.635 12.989C12.8117 12.7923 12.945 12.569 13.035 12.319C13.125 12.069 13.17 11.814 13.17 11.554V11.314C13.17 11.0607 13.125 10.8123 13.035 10.569C12.945 10.3257 12.8117 10.109 12.635 9.919C12.4583 9.729 12.2367 9.57567 11.97 9.459C11.7033 9.34233 11.39 9.284 11.03 9.284H8.29V16.284H9.61ZM9.61 12.384H10.9C11.1933 12.384 11.425 12.304 11.595 12.144C11.765 11.984 11.85 11.7773 11.85 11.524V11.404C11.85 11.1507 11.765 10.944 11.595 10.784C11.425 10.624 11.1933 10.544 10.9 10.544H9.61V12.384ZM18.69 16.284V15.024H17.01V10.544H18.69V9.284H14.01V10.544H15.69V15.024H14.01V16.284H18.69Z" fill="currentColor"/>
</svg>
`, Ju = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.952 5.87782C14.2902 5.98611 15.2946 6.51366 15.9623 7.46246C14.7671 8.18772 14.175 9.20309 14.1869 10.5046C14.1968 11.519 14.5654 12.3624 15.2887 13.0331C15.6165 13.344 15.9822 13.5845 16.3895 13.7553C16.3011 14.0117 16.2077 14.2571 16.1093 14.4925C15.8775 15.0322 15.5912 15.5469 15.2549 16.0285C14.8048 16.6693 14.4372 17.1134 14.1531 17.3598C13.714 17.7641 13.2431 17.9708 12.7384 17.9827C12.3767 17.9827 11.9396 17.8794 11.4319 17.6707C10.9212 17.4621 10.4533 17.3598 10.0241 17.3598C9.57503 17.3598 9.09318 17.4621 8.57755 17.6707C8.06092 17.8794 7.64564 17.9887 7.32771 17.9986C6.84388 18.0195 6.36203 17.8069 5.88018 17.3598C5.57318 17.0915 5.1887 16.6325 4.7287 15.9818C4.23493 15.2863 3.82958 14.4816 3.51166 13.5636C3.17088 12.5711 3 11.6104 3 10.6804C3 9.61539 3.23049 8.6964 3.69148 7.92643C4.03997 7.32188 4.53856 6.81748 5.13902 6.462C5.73099 6.10778 6.40642 5.91715 7.09623 5.90961C7.48072 5.90961 7.98442 6.02883 8.61033 6.26231C9.23425 6.49677 9.63563 6.615 9.81148 6.615C9.94262 6.615 10.3877 6.47591 11.1428 6.19972C11.8561 5.9424 12.4592 5.83609 12.952 5.87782ZM13.0255 2C13.0364 2.10631 13.0414 2.21261 13.0414 2.31792C13.0414 3.11273 12.7513 3.85488 12.1721 4.54238C11.4736 5.35905 10.6291 5.83096 9.71213 5.75645C9.70006 5.65656 9.69408 5.55603 9.69424 5.45542C9.69424 4.6924 10.0261 3.87574 10.6162 3.20711C10.9103 2.86932 11.2858 2.58816 11.7389 2.36362C12.1929 2.14306 12.6221 2.02086 13.0255 2Z" fill="currentColor"/>
</svg>
`, Qu = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
  <path fill="currentColor" d="M17,11 C17.5522847,11 18,11.4477153 18,12 L18,17 C18,17.5522847 17.5522847,18 17,18 L12,18 C11.4477153,18 11,17.5522847 11,17 L11,12 C11,11.4477153 11.4477153,11 12,11 L17,11 Z M8,11 C8.55228475,11 9,11.4477153 9,12 L9,17 C9,17.5522847 8.55228475,18 8,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,12 C2,11.4477153 2.44771525,11 3,11 L8,11 Z M17,12 L12,12 L12,17 L17,17 L17,12 Z M8,12 L3,12 L3,17 L8,17 L8,12 Z M8,2 C8.55228475,2 9,2.44771525 9,3 L9,8 C9,8.55228475 8.55228475,9 8,9 L3,9 C2.44771525,9 2,8.55228475 2,8 L2,3 C2,2.44771525 2.44771525,2 3,2 L8,2 Z M8,3 L3,3 L3,8 L8,8 L8,3 Z"/>
</svg>`, ef = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,6.70710678 L10,14.5 C10,14.7761424 9.77614237,15 9.5,15 C9.22385763,15 9,14.7761424 9,14.5 L9,6.70710678 L6.85355339,8.85355339 C6.65829124,9.04881554 6.34170876,9.04881554 6.14644661,8.85355339 C5.95118446,8.65829124 5.95118446,8.34170876 6.14644661,8.14644661 L9.14644661,5.14644661 C9.34170876,4.95118446 9.65829124,4.95118446 9.85355339,5.14644661 L12.8535534,8.14644661 C13.0488155,8.34170876 13.0488155,8.65829124 12.8535534,8.85355339 C12.6582912,9.04881554 12.3417088,9.04881554 12.1464466,8.85355339 L10,6.70710678 Z" fill="currentColor"></path>
</svg>`, tf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,13.2928932 L12.1464466,11.1464466 C12.3417088,10.9511845 12.6582912,10.9511845 12.8535534,11.1464466 C13.0488155,11.3417088 13.0488155,11.6582912 12.8535534,11.8535534 L9.85355339,14.8535534 C9.65829124,15.0488155 9.34170876,15.0488155 9.14644661,14.8535534 L6.14644661,11.8535534 C5.95118446,11.6582912 5.95118446,11.3417088 6.14644661,11.1464466 C6.34170876,10.9511845 6.65829124,10.9511845 6.85355339,11.1464466 L9,13.2928932 L9,5.5 C9,5.22385763 9.22385763,5 9.5,5 C9.77614237,5 10,5.22385763 10,5.5 L10,13.2928932 Z" fill="currentColor"></path>
</svg>`, nf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.70710678,9 L14.5,9 C14.7761424,9 15,9.22385763 15,9.5 C15,9.77614237 14.7761424,10 14.5,10 L6.70710678,10 L8.85355339,12.1464466 C9.04881554,12.3417088 9.04881554,12.6582912 8.85355339,12.8535534 C8.65829124,13.0488155 8.34170876,13.0488155 8.14644661,12.8535534 L5.14644661,9.85355339 C4.95118446,9.65829124 4.95118446,9.34170876 5.14644661,9.14644661 L8.14644661,6.14644661 C8.34170876,5.95118446 8.65829124,5.95118446 8.85355339,6.14644661 C9.04881554,6.34170876 9.04881554,6.65829124 8.85355339,6.85355339 L6.70710678,9 Z" fill="currentColor"></path>
</svg>`, rf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13.2928932,9 L11.1464466,6.85355339 C10.9511845,6.65829124 10.9511845,6.34170876 11.1464466,6.14644661 C11.3417088,5.95118446 11.6582912,5.95118446 11.8535534,6.14644661 L14.8535534,9.14644661 C15.0488155,9.34170876 15.0488155,9.65829124 14.8535534,9.85355339 L11.8535534,12.8535534 C11.6582912,13.0488155 11.3417088,13.0488155 11.1464466,12.8535534 C10.9511845,12.6582912 10.9511845,12.3417088 11.1464466,12.1464466 L13.2928932,10 L5.5,10 C5.22385763,10 5,9.77614237 5,9.5 C5,9.22385763 5.22385763,9 5.5,9 C5.68409492,9 8.28172599,9 13.2928932,9 Z" fill="currentColor"></path>
</svg>`, of = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13.5,6 C13.2238576,6 13,5.77614237 13,5.5 C13,5.22385763 13.2238576,5 13.5,5 L17,5 C17.5761424,5 18,5.42385763 18,6 L18,15 C18,15.5761424 17.5761424,16 17,16 L3,16 C2.42385763,16 2,15.5761424 2,15 L2,6 C2,5.42385763 2.42385763,5 3,5 L6.5,5 C6.77614237,5 7,5.22385763 7,5.5 C7,5.77614237 6.77614237,6 6.5,6 L3,6 L3,15 L17,15 L17,6 L13.5,6 Z M6.5,11 C5.67157288,11 5,10.3284271 5,9.5 C5,8.67157288 5.67157288,8 6.5,8 C7.32842712,8 8,8.67157288 8,9.5 C8,10.3284271 7.32842712,11 6.5,11 Z M6.5,10 C6.77614237,10 7,9.77614237 7,9.5 C7,9.22385763 6.77614237,9 6.5,9 C6.22385763,9 6,9.22385763 6,9.5 C6,9.77614237 6.22385763,10 6.5,10 Z M8.75193551,12.0681105 C8.90554437,12.1577157 9,12.3221665 9,12.5 L9,13.5 C9,13.7761424 8.77614237,14 8.5,14 L4.5,14 C4.22385763,14 4,13.7761424 4,13.5 L4,12.5 C4,12.3221665 4.09445563,12.1577157 4.24806449,12.0681105 C5.60374574,11.2772965 7.39625426,11.2772965 8.75193551,12.0681105 Z M8,13 L8,12.8016746 C7.07318943,12.3661085 5.92681057,12.3661085 5,12.8016746 L5,13 L8,13 Z M10.5,11 C10.2238576,11 10,10.7761424 10,10.5 C10,10.2238576 10.2238576,10 10.5,10 L14.5,10 C14.7761424,10 15,10.2238576 15,10.5 C15,10.7761424 14.7761424,11 14.5,11 L10.5,11 Z M10.5,13 C10.2238576,13 10,12.7761424 10,12.5 C10,12.2238576 10.2238576,12 10.5,12 L14.5,12 C14.7761424,12 15,12.2238576 15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L10.5,13 Z M12,6.5 C12,6.77614237 11.7761424,7 11.5,7 L8.5,7 C8.22385763,7 8,6.77614237 8,6.5 L8,5 C8,3.92385763 8.92385763,3 10,3 C11.0761424,3 12,3.92385763 12,5 L12,6.5 Z M11,6 L11,5 C11,4.47614237 10.5238576,4 10,4 C9.47614237,4 9,4.47614237 9,5 L9,6 L11,6 Z" fill="currentColor"></path>
</svg>`, sf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,16 L13,3.5 C13,3.22385763 13.2238576,3 13.5,3 L15.5,3 C15.7761424,3 16,3.22385763 16,3.5 L16,16 L16.5,16 C16.7761424,16 17,16.2238576 17,16.5 C17,16.7761424 16.7761424,17 16.5,17 L2.5,17 C2.22385763,17 2,16.7761424 2,16.5 C2,16.2238576 2.22385763,16 2.5,16 L3,16 L3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L5.5,11 C5.77614237,11 6,11.2238576 6,11.5 L6,16 L8,16 L8,7.5 C8,7.22385763 8.22385763,7 8.5,7 L10.5,7 C10.7761424,7 11,7.22385763 11,7.5 L11,16 L13,16 Z M13,16 L16,16 L16,15 L13,15 L13,16 Z M11,16 L11,15 L8,15 L8,16 L11,16 Z M3,16 L6,16 L6,15 L3,15 L3,16 Z" fill="currentColor"></path>
</svg>`, af = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11ZM7 12C8.10457 12 9 11.1046 9 10C9 8.89543 8.10457 8 7 8C5.89543 8 5 8.89543 5 10C5 11.1046 5.89543 12 7 12ZM13 12C14.1046 12 15 11.1046 15 10C15 8.89543 14.1046 8 13 8C11.8954 8 11 8.89543 11 10C11 11.1046 11.8954 12 13 12Z" fill="currentColor"/>
</svg>
`, lf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9.5,12 C9.74545989,12 9.94960837,12.1768752 9.99194433,12.4101244 L10,12.5 L10,17.5 C10,17.7761424 9.77614237,18 9.5,18 C9.25454011,18 9.05039163,17.8231248 9.00805567,17.5898756 L9,17.5 L9,12.5 C9,12.2238576 9.22385763,12 9.5,12 Z M14.5,5 C14.6169683,5 14.7302347,5.04100811 14.8200922,5.11588936 L17.8200922,7.61588936 C18.0599693,7.81578692 18.0599693,8.18421308 17.8200922,8.38411064 L14.8200922,10.8841106 C14.7302347,10.9589919 14.6169683,11 14.5,11 L3,11 C2.42385763,11 2,10.5761424 2,10 L2,6 C2,5.42385763 2.42385763,5 3,5 L14.5,5 Z M14.318975,6 L3,6 L3,10 L14.318975,10 L16.718975,8 L14.318975,6 Z M9.5,2 C9.74545989,2 9.94960837,2.17687516 9.99194433,2.41012437 L10,2.5 L10,3.5 C10,3.77614237 9.77614237,4 9.5,4 C9.25454011,4 9.05039163,3.82312484 9.00805567,3.58987563 L9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 Z" fill="currentColor"></path>
</svg>`, cf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M15,3 L17,3 C17.6,3 18,3.4 18,4 L18,16 C18,16.6 17.6,17 17,17 L3,17 C2.4,17 2,16.6 2,16 L2,4 C2,3.4 2.4,3 3,3 L5,3 L5,2.5 C5,2.2 5.2,2 5.5,2 L7.5,2 C7.8,2 8,2.2 8,2.5 L8,3 L12,3 L12,2.5 C12,2.2 12.2,2 12.5,2 L14.5,2 C14.8,2 15,2.2 15,2.5 L15,3 Z M3,4 L3,6 L17,6 L17,4 L3,4 Z M3,7 L3,16 L17,16 L17,7 L3,7 Z M6,4 L7,4 L7,3 L6,3 L6,4 Z M13,4 L14,4 L14,3 L13,3 L13,4 Z M14.5,14 L12.5,14 C12.2,14 12,13.8 12,13.5 L12,11.5 C12,11.2 12.2,11 12.5,11 L14.5,11 C14.8,11 15,11.2 15,11.5 L15,13.5 C15,13.8 14.8,14 14.5,14 Z M13,13 L14,13 L14,12 L13,12 L13,13 Z" fill="currentColor"></path>
</svg>`, uf = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M17,3 C17.552,3 18,3.42 18,3.938 L18,17.062 C18,17.58 17.552,18 17,18 L3,18 C2.448,18 2,17.58 2,17.062 L2,3.938 C2,3.42 2.448,3 3,3 L17,3 Z M17,4 L3,4 L3,17 L17,17 L17,4 Z M15,13 L15,14 L9,14 L9,13 L15,13 Z M7,13 L7,14 L5,14 L5,13 L7,13 Z M15,10 L15,11 L9,11 L9,10 L15,10 Z M7,10 L7,11 L5,11 L5,10 L7,10 Z M15,7 L15,8 L9,8 L9,7 L15,7 Z M7,7 L7,8 L5,8 L5,7 L7,7 Z" fill="currentColor"></path></g></svg>
`, ff = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M4.54570132,13 C4.34661351,13 4.14752569,12.9008264 4.04798179,12.7024793 C3.94843788,12.5041322 4.01456108,12.2320103 4.14752569,12.107438 L9.62244059,7.14876033 C9.72976253,7.04183769 9.86601139,6.99255365 10,7.00090823 C10.1339886,6.99255365 10.2702375,7.04183769 10.3775594,7.14876033 L15.8524743,12.107438 C15.9854389,12.2320103 16.0515621,12.5041322 15.9520182,12.7024793 C15.8524743,12.9008264 15.6533865,13 15.4542987,13 L4.54570132,13 Z" fill="currentColor"></path>
</svg>`, pf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.36380088,12 C6.23107567,12 6.09835046,11.9338843 6.03198786,11.8016529 C5.96562525,11.6694215 6.00970738,11.4880068 6.09835046,11.4049587 L9.74829373,8.09917355 C9.81984168,8.02789179 9.91067426,7.99503577 10,8.00060549 C10.0893257,7.99503577 10.1801583,8.02789179 10.2517063,8.09917355 L13.9016495,11.4049587 C13.9902926,11.4880068 14.0343747,11.6694215 13.9680121,11.8016529 C13.9016495,11.9338843 13.7689243,12 13.6361991,12 L6.36380088,12 Z" fill="currentColor"></path>
</svg>`, df = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M4.54570132,7 L15.4542987,7 C15.6533865,7 15.8524743,7.09917355 15.9520182,7.29752066 C16.0515621,7.49586777 15.9854389,7.76798973 15.8524743,7.89256198 L10.3775594,12.8512397 C10.2702375,12.9581623 10.1339886,13.0074463 10,12.9990918 C9.86601139,13.0074463 9.72976253,12.9581623 9.62244059,12.8512397 L4.14752569,7.89256198 C4.01456108,7.76798973 3.94843788,7.49586777 4.04798179,7.29752066 C4.14752569,7.09917355 4.34661351,7 4.54570132,7 Z" fill="currentColor"></path>
</svg>`, hf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.36380088,8 L13.6361991,8 C13.7689243,8 13.9016495,8.0661157 13.9680121,8.19834711 C14.0343747,8.33057851 13.9902926,8.51199316 13.9016495,8.59504132 L10.2517063,11.9008264 C10.1801583,11.9721082 10.0893257,12.0049642 10,11.9993945 C9.91067426,12.0049642 9.81984168,11.9721082 9.74829373,11.9008264 L6.09835046,8.59504132 C6.00970738,8.51199316 5.96562525,8.33057851 6.03198786,8.19834711 C6.09835046,8.0661157 6.23107567,8 6.36380088,8 Z" fill="currentColor"></path>
</svg>`, Cf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M8,15.4542987 L8,4.54570132 C8,4.34661351 8.09954391,4.14752569 8.29863172,4.04798179 C8.49771954,3.94843788 8.77085771,4.01456108 8.89589516,4.14752569 L13.8730905,9.62244059 C13.9804125,9.72976253 14.0298805,9.86601139 14.0214948,10 C14.0298805,10.1339886 13.9804125,10.2702375 13.8730905,10.3775594 L8.89589516,15.8524743 C8.77085771,15.9854389 8.49771954,16.0515621 8.29863172,15.9520182 C8.09954391,15.8524743 8,15.6533865 8,15.4542987 Z" fill="currentColor"></path>
</svg>`, vf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9,13.6361991 L9,6.36380088 C9,6.23107567 9.0663626,6.09835046 9.19908781,6.03198786 C9.33181302,5.96562525 9.51390514,6.00970738 9.59726344,6.09835046 L12.9153937,9.74829373 C12.9869416,9.81984168 13.0199204,9.91067426 13.0143298,10 C13.0199204,10.0893257 12.9869416,10.1801583 12.9153937,10.2517063 L9.59726344,13.9016495 C9.51390514,13.9902926 9.33181302,14.0343747 9.19908781,13.9680121 C9.0663626,13.9016495 9,13.7689243 9,13.6361991 Z" fill="currentColor"></path>
</svg>`, gf = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_121_354" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="17" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0529 2.54043C14.1787 2.48652 14.3211 2.48652 14.4468 2.54043L17.9468 4.04043C18.1307 4.11922 18.2499 4.29999 18.2499 4.5V6.5C18.2499 7.85914 18.0141 8.96271 17.3965 9.93133C16.7843 10.8913 15.8306 11.6653 14.4997 12.4331C14.3451 12.5223 14.1546 12.5223 14 12.4331C12.6692 11.6653 11.7154 10.8913 11.1033 9.93133C10.4856 8.96271 10.2499 7.85914 10.2499 6.5V4.5C10.2499 4.29999 10.3691 4.11922 10.5529 4.04043L14.0529 2.54043ZM11.2499 4.8297V6.5C11.2499 7.74086 11.4641 8.63729 11.9465 9.39367C12.4015 10.1072 13.1248 10.7433 14.2499 11.4198C15.375 10.7433 16.0983 10.1072 16.5533 9.39367C17.0356 8.63729 17.2499 7.74086 17.2499 6.5V4.8297L14.2499 3.54398L11.2499 4.8297ZM3.24988 6.5V8.5H8.74988C9.02602 8.5 9.24988 8.72386 9.24988 9C9.24988 9.27614 9.02602 9.5 8.74988 9.5H3.24988V15.5H17.2499V12C17.2499 11.7239 17.4737 11.5 17.7499 11.5C18.026 11.5 18.2499 11.7239 18.2499 12V15.5C18.2499 15.7636 18.1598 16.0222 17.9659 16.2161C17.772 16.4099 17.5135 16.5 17.2499 16.5H3.24988C2.98625 16.5 2.72771 16.4099 2.53382 16.2161C2.33993 16.0222 2.24988 15.7636 2.24988 15.5V9V6.5C2.24988 6.23638 2.33993 5.97784 2.53382 5.78395C2.72771 5.59006 2.98625 5.5 3.24988 5.5H8.74988C9.02602 5.5 9.24988 5.72386 9.24988 6C9.24988 6.27614 9.02602 6.5 8.74988 6.5H3.24988ZM4.74988 11.5C4.47374 11.5 4.24988 11.7239 4.24988 12C4.24988 12.2761 4.47374 12.5 4.74988 12.5H6.74988C7.02602 12.5 7.24988 12.2761 7.24988 12C7.24988 11.7239 7.02602 11.5 6.74988 11.5H4.74988ZM16.1403 6.31235C16.3128 6.09672 16.2779 5.78207 16.0622 5.60957C15.8466 5.43706 15.5319 5.47202 15.3594 5.68765L13.7866 7.6537L13.1659 6.72265C13.0127 6.49289 12.7023 6.4308 12.4725 6.58397C12.2428 6.73715 12.1807 7.04759 12.3339 7.27735L13.3339 8.77735C13.4223 8.91007 13.5688 8.99261 13.7282 8.99953C13.8876 9.00645 14.0407 8.93691 14.1403 8.81235L16.1403 6.31235Z" fill="currentColor"/></mask><g mask="url(#mask0_121_354)"> <rect x="0.75" width="20" height="20" fill="currentColor"/></g></svg>
`, Lf = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.43137 12.3752L7.85994 14H6L8.9916 6H11.042L14 14H12.0728L11.5014 12.3752H8.43137ZM9.01401 10.7504H10.9412L9.9888 7.9859L9.01401 10.7504Z" fill="currentColor" fill-rule="nonzero">/>
</svg>
`, wf = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14V6H9.26923C9.12821 6.81356 8.24359 7.49153 7 7.50385V8.79815H8.98718V14H11Z" fill="currentColor" fill-rule="nonzero">/>
</svg>
`, mf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M4.91605172,8.93692348 C4.76287549,8.70715914 4.45244081,8.6450722 4.22267647,8.79824843 C3.99291213,8.95142466 3.93082519,9.26185933 4.08400142,9.49162368 L7.22685856,14.2059094 C7.40187935,14.4684406 7.7733285,14.5052213 7.9964371,14.2821127 L15.85358,6.42496983 C16.0488421,6.22970768 16.0488421,5.91312519 15.85358,5.71786304 C15.6583178,5.5226009 15.3417353,5.5226009 15.1464732,5.71786304 L7.72059613,13.1437401 L4.91605172,8.93692348 Z" fill="currentColor"></path>
</svg>`, xf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M5.91605172,9.07978062 C5.76287549,8.85001628 5.45244081,8.78792934 5.22267647,8.94110557 C4.99291213,9.0942818 4.93082519,9.40471647 5.08400142,9.63448082 L7.65542999,13.4916237 C7.83045078,13.7541549 8.20189993,13.7909356 8.42500853,13.567827 L14.85358,7.13925554 C15.0488421,6.94399339 15.0488421,6.6274109 14.85358,6.43214876 C14.6583178,6.23688661 14.3417353,6.23688661 14.1464732,6.43214876 L8.14916755,12.4294544 L5.91605172,9.07978062 Z" fill="currentColor"></path>
</svg>`, yf = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="checkmark">
        <circle id="Oval" fill="currentColor" cx="10" cy="10" r="8"></circle>
        <path d="M12.9696965,6.96965778 L8.616,11.322 L7.12406429,9.08396272 C6.89429994,8.7393162 6.42864794,8.6461858 6.08400142,8.87595014 C5.7393549,9.10571449 5.6462245,9.57136649 5.87598885,9.91601301 L7.87598885,12.916013 C8.13852003,13.3098098 8.69569375,13.3649809 9.03035665,13.0303179 L14.0303567,8.03031795 C14.3232499,7.73742473 14.3232499,7.262551 14.0303567,6.96965778 C13.7374634,6.67676456 13.2625897,6.67676456 12.9696965,6.96965778 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
    </g>
</svg>`, _f = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Icons-/-Arrows---Chevron-Down-/-10x10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M9.99999647,11.8242714 L14.1636636,8.13003173 C14.3679924,7.94427826 14.6842166,7.95933656 14.86997,8.16366537 C15.0557235,8.36799418 15.0406652,8.68421834 14.8363364,8.8699718 L10.3363364,12.8699718 C10.1456258,13.0433451 9.85437422,13.0433451 9.6636636,12.8699718 L5.1636636,8.8699718 C4.95933479,8.68421834 4.9442765,8.36799418 5.13002996,8.16366537 C5.31578343,7.95933656 5.63200759,7.94427826 5.8363364,8.13003173 L9.99999647,11.8242714 Z" fill="currentColor"/>
    </g>
</svg>`, bf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(180 10 10)">
        <path d="M11.8242714,9.99999647 L8.13003173,14.1636636 C7.94427826,14.3679924 7.95933656,14.6842166 8.16366537,14.86997 C8.36799418,15.0557235 8.68421834,15.0406652 8.8699718,14.8363364 L12.8699718,10.3363364 C13.0433451,10.1456258 13.0433451,9.85437422 12.8699718,9.6636636 L8.8699718,5.1636636 C8.68421834,4.95933479 8.36799418,4.9442765 8.16366537,5.13002996 C7.95933656,5.31578343 7.94427826,5.63200759 8.13003173,5.8363364 L11.8242714,9.99999647 Z" fill="currentColor"></path>
    </g>
</svg>
`, Mf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M11.8242714,9.99999647 L8.13003173,14.1636636 C7.94427826,14.3679924 7.95933656,14.6842166 8.16366537,14.86997 C8.36799418,15.0557235 8.68421834,15.0406652 8.8699718,14.8363364 L12.8699718,10.3363364 C13.0433451,10.1456258 13.0433451,9.85437422 12.8699718,9.6636636 L8.8699718,5.1636636 C8.68421834,4.95933479 8.36799418,4.9442765 8.16366537,5.13002996 C7.95933656,5.31578343 7.94427826,5.63200759 8.13003173,5.8363364 L11.8242714,9.99999647 Z" fill="currentColor"></path>
</svg>`, Ef = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Icons-/-Arrows---Chevron-Down-/-10x10" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path transform="translate(20, 20) rotate(180)" d="M9.99999647,11.8242714 L14.1636636,8.13003173 C14.3679924,7.94427826 14.6842166,7.95933656 14.86997,8.16366537 C15.0557235,8.36799418 15.0406652,8.68421834 14.8363364,8.8699718 L10.3363364,12.8699718 C10.1456258,13.0433451 9.85437422,13.0433451 9.6636636,12.8699718 L5.1636636,8.8699718 C4.95933479,8.68421834 4.9442765,8.36799418 5.13002996,8.16366537 C5.31578343,7.95933656 5.63200759,7.94427826 5.8363364,8.13003173 L9.99999647,11.8242714 Z" fill="currentColor"/>
    </g>
</svg>
`, Of = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,3 C13.8659932,3 17,6.13400675 17,10 C17,13.8659932 13.8659932,17 10,17 C6.13400675,17 3,13.8659932 3,10 C3,6.13400675 6.13400675,3 10,3 Z M10,6 C7.790861,6 6,7.790861 6,10 C6,12.209139 7.790861,14 10,14 C12.209139,14 14,12.209139 14,10 C14,7.790861 12.209139,6 10,6 Z" fill="currentColor"></path>
</svg>`, Sf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,9.29134669 L14.79,4.5 C14.9852621,4.30473785 15.3047379,4.30473785 15.5,4.5 C15.6952621,4.69526215 15.6952621,5.01184485 15.5,5.207107 L10.7077807,9.99932634 L15.5,14.792893 C15.6952621,14.9881551 15.6952621,15.3047379 15.5,15.5 C15.3047379,15.6952621 14.9881551,15.6952621 14.792893,15.5 L10,10.707107 L5.207107,15.5 C5.01184485,15.6952621 4.69526215,15.6952621 4.5,15.5 C4.30473785,15.3047379 4.30473785,14.9881551 4.5,14.792893 L9.29221934,9.99932634 L4.5,5.207107 C4.30473785,5.01184485 4.30473785,4.69526215 4.5,4.5 C4.69526215,4.30473785 5.01473785,4.30473785 5.21,4.5 L10,9.29134669 Z" fill="currentColor"></path>
</svg>`, Tf = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="currentColor" cx="10" cy="10" r="8"/><path d="M7.276 6.157l.09.077L10 8.87l2.634-2.635a.8.8 0 011.21 1.042l-.078.09L11.13 10l2.635 2.634a.8.8 0 01-1.042 1.21l-.09-.078L10 11.13l-2.634 2.635a.8.8 0 01-1.21-1.042l.078-.09L8.87 10 6.234 7.366a.8.8 0 011.042-1.21z" fill="#FFF" fill-rule="nonzero"/></g></svg>
`, Af = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <circle fill="#FFF" cx="10" cy="10" r="7"/>
    <circle fill="currentColor" cx="10" cy="10" r="6"/>
    <path d="M12.76 7.24c.29.29.317.745.08 1.065l-.08.092L11.157 10l1.603 1.603a.818.818 0 01-1.065 1.237l-.092-.08L10 11.157 8.397 12.76a.818.818 0 01-1.237-1.065l.08-.092L8.843 10 7.24 8.397A.818.818 0 018.305 7.16l.092.08L10 8.843l1.603-1.603a.818.818 0 011.157 0z" fill="#FFF" fill-rule="nonzero"/>
  </g>
</svg>
`, Nf = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 17C5.35786 17 2 13.6421 2 9.5C2 5.35786 5.35786 2 9.5 2C13.6421 2 17 5.35786 17 9.5C17 13.6421 13.6421 17 9.5 17ZM10 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H9.5C9.36193 10 9.23693 9.94404 9.14645 9.85355C9.05596 9.76307 9 9.63807 9 9.5V5.5C9 5.22386 9.22386 5 9.5 5C9.77614 5 10 5.22386 10 5.5V9ZM16 9.5C16 13.0899 13.0899 16 9.5 16C5.91015 16 3 13.0899 3 9.5C3 5.91015 5.91015 3 9.5 3C13.0899 3 16 5.91015 16 9.5Z" fill="currentColor"/>
</svg>
`, Zf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,9.29134669 L12.79,6.5 C12.9852621,6.30473785 13.3047379,6.30473785 13.5,6.5 C13.6952621,6.69526215 13.6952621,7.01184485 13.5,7.207107 L10.7077807,9.99932634 L13.5,12.792893 C13.6952621,12.9881551 13.6952621,13.3047379 13.5,13.5 C13.3047379,13.6952621 12.9881551,13.6952621 12.792893,13.5 L10,10.707107 L7.207107,13.5 C7.01184485,13.6952621 6.69526215,13.6952621 6.5,13.5 C6.30473785,13.3047379 6.30473785,12.9881551 6.5,12.792893 L9.29221934,9.99932634 L6.5,7.207107 C6.30473785,7.01184485 6.30473785,6.69526215 6.5,6.5 C6.69526215,6.30473785 7.01473785,6.30473785 7.21,6.5 L10,9.29134669 Z" fill="currentColor"></path>
</svg>`, Hf = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94966 6C8.24513 6 6.72909 7.06897 6.1955 8.65907C6.12715 8.86275 5.93632 9 5.72148 9H5.52013C4.08171 9 3 10.0793 3 11.5C3 12.9207 4.08171 14 5.52013 14H6.79031L13.1075 7.57045C12.3571 6.61024 11.2177 6 9.94966 6ZM5.37514 8.00272C6.14082 6.18308 7.95005 5 9.94966 5C11.7226 5 13.2743 5.94624 14.1778 7.35248C14.304 7.54894 14.2774 7.80661 14.1138 7.97318L7.35666 14.8504C7.26265 14.9461 7.13414 15 7 15H5.52013C3.53574 15 2 13.4793 2 11.5C2 9.56919 3.46143 8.07477 5.37514 8.00272ZM14.4832 9.5C14.4832 9.22386 14.7071 9 14.9832 9C16.6656 9 18 10.3207 18 12C18 13.6793 16.6656 15 14.9832 15H10C9.72386 15 9.5 14.7761 9.5 14.5C9.5 14.2239 9.72386 14 10 14H14.9832C16.1196 14 17 13.1207 17 12C17 10.8793 16.1196 10 14.9832 10C14.7071 10 14.4832 9.77614 14.4832 9.5Z" fill="currentColor"/>
</svg>
`, If = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13.7582542,10 L17.5,10 C17.7761424,10 18,10.2238576 18,10.5 C18,10.7761424 17.7761424,11 17.5,11 L13.4683752,11 C13.1290783,12.1734886 12.7346436,13.5472446 12.2850713,15.1212678 C12.0269788,16.1536374 11.0193894,16.9 9.9,16.9 C8.7544244,16.9 7.76044938,16.1269083 7.51336322,15.0148244 L6.5660655,11 L3,11 L3,16.5 C3,16.7761424 2.77614237,17 2.5,17 C2.22385763,17 2,16.7761424 2,16.5 L2,3.5 C2,3.22385763 2.22385763,3 2.5,3 C2.77614237,3 3,3.22385763 3,3.5 L3,4 L4,4 C5.10429394,4 6.12287743,4.82995692 6.38663678,5.88517559 L7.3575302,10 L12.7619724,10 L14.0177699,5.7674973 C14.2803401,4.74095203 15.2846754,4 16.4,4 L17.4,4 C17.6761424,4 17.9,4.22385763 17.9,4.5 C17.9,4.77614237 17.6761424,5 17.4,5 L16.4,5 C15.7293894,5 15.2727986,5.22901193 15,5.9 C14.8833868,6.18682711 14.4694716,7.55349378 13.7582542,10 L13.7582542,10 Z M6.33011552,10 L5.41492875,6.12126781 C5.26200629,5.50957796 4.63661515,5 4,5 L3,5 L3,10 L6.33011552,10 L6.33011552,10 Z M7.59348035,11 L8.48809353,14.7915348 C8.63358047,15.446226 9.21700417,15.9 9.9,15.9 C10.5706106,15.9 11.1707484,15.4554535 11.3206541,14.8577765 L12.4652691,11 L7.59348035,11 Z" fill="currentColor"></path>
</svg>`, $f = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.5H6C5.7 14.5 5.5 14.3 5.5 14V6C5.5 5.7 5.7 5.5 6 5.5H14C14.3 5.5 14.5 5.7 14.5 6V14C14.5 14.3 14.3 14.5 14 14.5Z" stroke="#1076FB" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, Pf = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M13,13 L13,17 C13,17.6 12.6,18 12,18 L3,18 C2.4,18 2,17.6 2,17 L2,8 C2,7.4 2.4,7 3,7 L7,7 L7,3 C7,2.4 7.4,2 8,2 L17,2 C17.6,2 18,2.4 18,3 L18,12 C18,12.6 17.6,13 17,13 L13,13 Z M12,13 L8,13 C7.4,13 7,12.6 7,12 L7,8 L3,8 L3,17 L12,17 L12,13 Z M17,3 L8,3 L8,12 L17,12 L17,3 Z" fill="currentColor"></path></svg>
`, kf = `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 26">
<path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M14.5333 13H1.46667C1.18667 13 1 12.84 1 12.6V1.4C1 1.16 1.18667 1 1.46667 1H14.5333C14.8133 1 15 1.16 15 1.4V12.6C15 12.84 14.8133 13 14.5333 13Z" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<g id="Group 21">
<circle id="Oval" cx="10" cy="5" r="1" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Shape_2" d="M11 5H13" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Shape_3" d="M3 5H9" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<circle id="Oval_2" cx="7" cy="9" r="1" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Shape_4" d="M8 9H13" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Shape_5" d="M3 9H6" stroke="#F874A4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
`, Rf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M5,6 L4.5,6 C4.2,6 4,5.8 4,5.5 C4,5.2 4.2,5 4.5,5 L15.5,5 C15.8,5 16,5.2 16,5.5 C16,5.8 15.8,6 15.5,6 L15,6 L15,15.5 C15,16.9 13.9,18 12.5,18 L7.5,18 C6.1,18 5,16.9 5,15.5 L5,6 Z M6,6 L6,15.5 C6,16.3 6.7,17 7.5,17 L12.5,17 C13.3,17 14,16.3 14,15.5 L14,6 L6,6 Z M8.5,8 C8.77614237,8 9,8.22385763 9,8.5 L9,14.5 C9,14.7761424 8.77614237,15 8.5,15 C8.22385763,15 8,14.7761424 8,14.5 L8,8.5 C8,8.22385763 8.22385763,8 8.5,8 Z M11.5,8 C11.7761424,8 12,8.22385763 12,8.5 L12,14.5 C12,14.7761424 11.7761424,15 11.5,15 C11.2238576,15 11,14.7761424 11,14.5 L11,8.5 C11,8.22385763 11.2238576,8 11.5,8 Z M11.5,4 C11.2,4 11,3.80952381 11,3.52380952 L11,2.95238095 L9,2.95238095 L9,3.52380952 C9,3.80952381 8.8,4 8.5,4 C8.2,4 8,3.80952381 8,3.52380952 L8,2.47619048 C8,2.19047619 8.2,2 8.5,2 L11.5,2 C11.8,2 12,2.19047619 12,2.47619048 L12,3.52380952 C12,3.71428571 11.8,4 11.5,4 Z" fill="currentColor"></path>
</svg>`, Df = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M11.0490461,9.34120978 L11.0490461,10.9424052 C11.0490461,11.0163099 11.0234466,11.0786393 10.9722475,11.1298383 C10.9208258,11.1810374 10.8591643,11.2066369 10.787263,11.2066369 L10.6069532,11.2066369 L10.6069532,11.7524636 C10.6069532,11.8212484 10.5829119,11.8797935 10.5348293,11.9278761 C10.4867467,11.9759587 10.4282017,12 10.3591942,12 C10.2904094,12 10.2318644,11.9759587 10.1837818,11.9278761 C10.1356991,11.8797935 10.1116578,11.8214711 10.1116578,11.7524636 L10.1116578,11.2066369 L9.77997687,11.2066369 L9.77997687,11.7524636 C9.77997687,11.8212484 9.75593557,11.8797935 9.70785296,11.9278761 C9.65977035,11.9759587 9.60144793,12 9.53244048,12 C9.46521387,12 9.40733665,11.9759587 9.35925404,11.9278761 C9.31139404,11.8797935 9.28713013,11.8214711 9.28713013,11.7524636 L9.28490408,11.2066369 L9.10682034,11.2066369 C9.03313819,11.2066369 8.97058628,11.1810374 8.91938721,11.1298383 C8.86818813,11.0786393 8.84236599,11.0160873 8.84236599,10.9421826 L8.84258859,9.34120978 L11.0490461,9.34120978 Z M8.50111302,9.29557582 C8.56632877,9.29464853 8.6290196,9.32075628 8.67429946,9.36769973 C8.72124291,9.4129796 8.74735066,9.47567042 8.74642337,9.54088617 L8.74642337,10.5744397 C8.74642337,10.6434471 8.72282728,10.7019921 8.67541248,10.7500748 C8.62799769,10.7981574 8.57012047,10.8221987 8.50111302,10.8221987 C8.43232818,10.8221987 8.37378315,10.7981574 8.32570054,10.7500748 C8.27761793,10.7019921 8.25357663,10.6434471 8.25357663,10.5744397 L8.25357663,9.54088617 C8.25264934,9.47567042 8.27875709,9.4129796 8.32570054,9.36769973 C8.37378315,9.31961712 8.43210557,9.29557582 8.50111302,9.29557582 Z M11.3907443,9.29557582 C11.4564497,9.29434868 11.5198084,9.31999769 11.5661568,9.36658671 C11.6142394,9.4140015 11.6382807,9.47187872 11.6382807,9.54088617 L11.6382807,10.5744397 C11.6382807,10.6434471 11.6142394,10.7019921 11.5661568,10.7500748 C11.5180742,10.7981574 11.4595291,10.8221987 11.3907443,10.8221987 C11.3232951,10.8221987 11.2656405,10.7981574 11.2175579,10.7500748 C11.1694752,10.7019921 11.1454339,10.6434471 11.1454339,10.5744397 L11.1454339,9.54088617 C11.1440876,9.4752652 11.1702375,9.41206973 11.2175579,9.36658671 C11.2631775,9.32027468 11.325744,9.29462082 11.3907443,9.29557582 Z M10.6503611,8.00491392 C10.6695052,8.01604415 10.673512,8.03207169 10.6623818,8.05299653 L10.491644,8.36775954 C10.6589522,8.45221673 10.8008362,8.57958199 10.9027948,8.73683809 C11.005193,8.8946648 11.0563921,9.06740603 11.0563921,9.25483916 L8.83297627,9.25483916 C8.83201472,9.07077127 8.88553776,8.89052795 8.98683642,8.73683809 C9.08930344,8.57911312 9.23210871,8.45167979 9.40043591,8.36775954 L9.22969812,8.05299653 C9.21834528,8.03207169 9.22235217,8.01604415 9.24171877,8.00491392 C9.26242101,7.99511931 9.27844854,8.00001662 9.28980138,8.01916062 L9.46276521,8.33659488 C9.61502681,8.26936827 9.77596999,8.23553236 9.94603996,8.23553236 C10.1123753,8.23485026 10.2769811,8.26928853 10.4290921,8.33659488 L10.6022785,8.01916062 C10.6134088,8.00001662 10.6294363,7.99511931 10.6503611,8.00491392 Z M9.43872391,8.6660498 C9.41411362,8.66556808 9.39046699,8.6756098 9.37372334,8.69365278 C9.35636018,8.71212897 9.34745599,8.73394423 9.34745599,8.75954376 C9.34701009,8.78420905 9.35647169,8.80802342 9.37372334,8.82565735 C9.39039333,8.84383041 9.41406796,8.8539651 9.43872391,8.85348294 C9.46366184,8.85375142 9.48759691,8.84367774 9.5048375,8.82565735 C9.5227313,8.808348 9.53271389,8.78443808 9.53244048,8.75954376 C9.53267891,8.73472135 9.52269702,8.71089361 9.5048375,8.69365278 C9.48636131,8.67495399 9.46432345,8.6660498 9.43872391,8.6660498 Z M10.4531334,8.6660498 C10.4282288,8.6657233 10.4042987,8.67571432 10.3870198,8.69365278 C10.3685436,8.71212897 10.3594168,8.73394423 10.3594168,8.75954376 C10.3590636,8.78445356 10.3690589,8.8083939 10.3870198,8.82565735 C10.4042449,8.84370026 10.4281902,8.85377826 10.4531334,8.85348294 C10.4777066,8.85387227 10.5012762,8.84374786 10.5179114,8.82565735 C10.5357197,8.80740377 10.5446239,8.7853659 10.5446239,8.75954376 C10.5446239,8.73394423 10.5357197,8.71212897 10.5179114,8.69365278 C10.5003256,8.67495399 10.4787329,8.6660498 10.4531334,8.6660498 Z" fill="currentColor"></path>
</svg>`, Vf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M10.8193428,8.97582733 C11.1561052,9.00307834 11.4088646,9.13583326 11.5768708,9.3745921 C11.2761097,9.55709886 11.1271042,9.81260833 11.1301043,10.1401205 C11.1326044,10.3953799 11.2253578,10.6076378 11.4073645,10.776394 C11.4898676,10.8546469 11.581871,10.9151492 11.6843748,10.9581508 C11.662124,11.0226531 11.6386231,11.0844054 11.6138722,11.1436576 C11.5555239,11.2794675 11.4834822,11.4089752 11.3988642,11.5301719 C11.28561,11.6914279 11.1931066,11.8031821 11.121604,11.8651844 C11.0110999,11.9669381 10.8925955,12.0189401 10.7655908,12.0219402 C10.6745874,12.0219402 10.5645833,11.9959392 10.4368286,11.9434373 C10.3083238,11.8909353 10.1905695,11.8651844 10.0825655,11.8651844 C9.96956129,11.8651844 9.84830679,11.8909353 9.71855199,11.9434373 C9.58854717,11.9959392 9.4840433,12.0234402 9.40404034,12.0259403 C9.28228583,12.0311905 9.16103134,11.9776885 9.03977685,11.8651844 C8.96252398,11.7976819 8.8657704,11.6821776 8.75001611,11.5184215 C8.62576151,11.343415 8.52375773,11.1409075 8.44375477,10.909899 C8.35800159,10.6601397 8.315,10.4183808 8.315,10.1843721 C8.315,9.91636217 8.37300215,9.68510361 8.48900645,9.49134643 C8.57670184,9.3392161 8.70216709,9.21228695 8.85326994,9.12283278 C9.00223399,9.03369487 9.17220173,8.98572428 9.34578818,8.98382763 C9.44254176,8.98382763 9.56929646,9.01382874 9.72680229,9.07258092 C9.88380811,9.1315831 9.98481185,9.1613342 10.0290635,9.1613342 C10.0620647,9.1613342 10.1740689,9.12633291 10.3640759,9.05683033 C10.5435825,8.99207794 10.6953382,8.96532694 10.8193428,8.97582733 Z M10.8378434,8 C10.8405935,8.02675099 10.8418436,8.05350198 10.8418436,8.08000296 C10.8418436,8.28001037 10.7688409,8.46676729 10.6230855,8.6397737 C10.447329,8.84528131 10.2348211,8.96403571 10.0040626,8.94528501 C10.001024,8.92014903 9.99952118,8.89485114 9.99956157,8.86953221 C9.99956157,8.6775251 10.0830655,8.47201748 10.231571,8.30376125 C10.3055737,8.2187581 10.4000772,8.14800548 10.5140815,8.09150339 C10.6283357,8.03600133 10.7363397,8.00525019 10.8378434,8 Z" fill="currentColor"></path>
</svg>`, Bf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M16,4 C17.1045695,4 18,4.8954305 18,6 L18,12 C18,13.1045695 17.1045695,14 16,14 L10.5,14 L10.5,15 L12,15 C12.3,15 12.5,15.2 12.5,15.5 C12.5,15.8 12.3,16 12,16 L8,16 C7.7,16 7.5,15.8 7.5,15.5 C7.5,15.2 7.7,15 8,15 L9.5,15 L9.5,14 L4,14 C2.8954305,14 2,13.1045695 2,12 L2,6 C2,4.8954305 2.8954305,4 4,4 L16,4 Z M16,5 L4,5 C3.44771525,5 3,5.44771525 3,6 L3,12 C3,12.5522847 3.44771525,13 4,13 L16,13 C16.5522847,13 17,12.5522847 17,12 L17,6 C17,5.44771525 16.5522847,5 16,5 Z" fill="currentColor"></path>
</svg>`, jf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13,2 C14.1045695,2 15,2.8954305 15,4 L15,16 C15,17.1045695 14.1045695,18 13,18 L7,18 C5.8954305,18 5,17.1045695 5,16 L5,4 C5,2.8954305 5.8954305,2 7,2 L13,2 Z M13,3 L7,3 C6.44771525,3 6,3.44771525 6,4 L6,16 C6,16.5522847 6.44771525,17 7,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,4 C14,3.44771525 13.5522847,3 13,3 Z M10.5,15 C10.7761424,15 11,15.2238576 11,15.5 C11,15.7761424 10.7761424,16 10.5,16 L9.5,16 C9.22385763,16 9,15.7761424 9,15.5 C9,15.2238576 9.22385763,15 9.5,15 L10.5,15 Z" fill="currentColor"></path>
</svg>`, Ff = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M15,2 C16.1045695,2 17,2.8954305 17,4 L17,16 C17,17.1045695 16.1045695,18 15,18 L5,18 C3.8954305,18 3,17.1045695 3,16 L3,4 C3,2.8954305 3.8954305,2 5,2 L15,2 Z M15,3 L5,3 C4.44771525,3 4,3.44771525 4,4 L4,16 C4,16.5522847 4.44771525,17 5,17 L15,17 C15.5522847,17 16,16.5522847 16,16 L16,4 C16,3.44771525 15.5522847,3 15,3 Z M10.5,15 C10.7761424,15 11,15.2238576 11,15.5 C11,15.7761424 10.7761424,16 10.5,16 L9.5,16 C9.22385763,16 9,15.7761424 9,15.5 C9,15.2238576 9.22385763,15 9.5,15 L10.5,15 Z" fill="currentColor"></path>
</svg>`, Uf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M4.91474582,14.3781474 L6.35187511,12.9410181 C5.82000945,12.2612586 5.5,11.4115348 5.5,10.5 C5.5,8.49287935 7.05154108,6.78544452 9,6.53231874 L9,4.52034814 C5.9118165,4.77285948 3.5,7.34455993 3.5,10.5 C3.5,11.9811656 4.03141232,13.3337118 4.91474582,14.3781474 L4.91474582,14.3781474 Z M5.6218526,15.0852542 C6.66628823,15.9685877 8.01883441,16.5 9.5,16.5 C12.6554401,16.5 15.2271405,14.0881835 15.4796519,11 L13.4676813,11 C13.2145555,12.9484589 11.5071206,14.5 9.5,14.5 C8.58846522,14.5 7.73874143,14.1799905 7.05898189,13.6481249 L5.6218526,15.0852542 L5.6218526,15.0852542 Z M9,7.54385288 C7.60338594,7.79051285 6.5,9.04594783 6.5,10.5 C6.5,12.1238576 7.87614237,13.5 9.5,13.5 C10.9540522,13.5 12.2094872,12.3966141 12.4561471,11 L12,11 C11.7238576,11 11.5,10.7761424 11.5,10.5 C11.5,9.37614237 10.6238576,8.5 9.5,8.5 C9.22385763,8.5 9,8.27614237 9,8 L9,7.54385288 Z M9,3.51744202 L9,3 C9,2.72385763 9.22385763,2.5 9.5,2.5 C13.8761424,2.5 17.5,6.12385763 17.5,10.5 C17.5,10.7761424 17.2761424,11 17,11 L16.482558,11 C16.2275588,14.6412894 13.2079955,17.5 9.5,17.5 C5.62385763,17.5 2.5,14.3761424 2.5,10.5 C2.5,6.79200449 5.35871058,3.77244124 9,3.51744202 L9,3.51744202 Z M16.4818246,10 C16.2317293,6.56847988 13.4315201,3.76827071 10,3.51817535 L10,7.54014697 C11.2696709,7.74681291 12.2531871,8.73032906 12.459853,10 L16.4818246,10 Z" fill="currentColor"></path>
</svg>`, zf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3,17 L16,17 L16,14.5 C16,14.2238576 16.2238576,14 16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,17.5 C17,17.7761424 16.7761424,18 16.5,18 L2.5,18 C2.22385763,18 2,17.7761424 2,17.5 L2,14.5 C2,14.2238576 2.22385763,14 2.5,14 C2.77614237,14 3,14.2238576 3,14.5 L3,17 Z M9,12.2928932 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 C9.77614237,2 10,2.22385763 10,2.5 L10,12.2928932 L12.1464466,10.1464466 C12.3417088,9.95118446 12.6582912,9.95118446 12.8535534,10.1464466 C13.0488155,10.3417088 13.0488155,10.6582912 12.8535534,10.8535534 L9.85355339,13.8535534 C9.65829124,14.0488155 9.34170876,14.0488155 9.14644661,13.8535534 L6.14644661,10.8535534 C5.95118446,10.6582912 5.95118446,10.3417088 6.14644661,10.1464466 C6.34170876,9.95118446 6.65829124,9.95118446 6.85355339,10.1464466 L9,12.2928932 Z" fill="currentColor"></path>
</svg>`, Gf = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path fill="currentColor" d="M8 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>`, Wf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3.77605053,16.0244747 L3.74594724,16.1953463 L3.71210052,16.2884247 L3.80517899,16.254578 L3.97605053,16.2244747 L5.16894374,16.2244747 L15.0224971,6.37092135 C15.2177593,6.1756592 15.5343418,6.1756592 15.7296039,6.37092135 C15.9248661,6.56618349 15.9248661,6.88276598 15.7296039,7.07802813 L5.72960392,17.0780281 C5.63583573,17.1717963 5.50865877,17.2244747 5.37605053,17.2244747 L4.06413801,17.2244747 L3.04692206,17.5943714 C2.64790894,17.7394671 2.26105813,17.3526163 2.40615381,16.9536032 L2.77605053,15.9363872 L2.77605053,14.6244747 C2.77605053,14.4918665 2.82872895,14.3646895 2.92249713,14.2709213 L12.9224971,4.27092135 C13.1177593,4.0756592 13.4343418,4.0756592 13.6296039,4.27092135 C13.8248661,4.46618349 13.8248661,4.78276598 13.6296039,4.97802813 L3.77605053,14.8315815 L3.77605053,16.0244747 Z M14.1214466,3.07092135 L14.2214466,2.97092135 C15.0167088,2.1756592 16.2332912,2.1756592 17.0285534,2.97092135 C17.8238155,3.76618349 17.8238155,4.98276598 17.0285534,5.77802813 L16.9285534,5.87802813 C16.7332912,6.07329027 16.4167088,6.07329027 16.2214466,5.87802813 L14.1214466,3.77802813 C13.9261845,3.58276598 13.9261845,3.26618349 14.1214466,3.07092135 Z M16.3214466,3.67802813 C16.0076014,3.36418297 15.5863182,3.29370221 15.2242179,3.46658585 L16.5328889,4.77525685 C16.7057725,4.41315656 16.6352918,3.99187329 16.3214466,3.67802813 Z" fill="currentColor"></path>
</svg>`, qf = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
    <path fill="currentColor" d="M17,5 C17.5522847,5 18,5.44771525 18,6 L18,15 C18,15.5522847 17.5522847,16 17,16 L3,16 C2.44771525,16 2,15.5522847 2,15 L2.00315415,5.94316964 L2.00315415,5.94316964 L2,6 C2,5.44771525 2.44771525,5 3,5 L17,5 Z M17,6.986 L10.2956818,11.9032025 C10.1448286,12.0138282 9.94741243,12.0296319 9.78325549,11.9506135 L9.70431817,11.9032025 L3,6.987 L3,15 L17,15 L17,6.986 Z M16.653,6 L3.346,6 L10,10.8799642 L16.653,6 Z"/>
</svg>`, Yf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.05025253,5.05025253 C8.78392257,2.31658249 13.2160774,2.31658249 15.9497475,5.05025253 C16.1234798,5.22398489 16.1426141,5.49371917 16.007266,5.68859974 L15.9492693,5.75783748 L11.7013691,9.99426231 L15.9497475,14.2426407 C16.1450096,14.4379028 16.1450096,14.7544853 15.9497475,14.9497475 C13.2160774,17.6834175 8.78392257,17.6834175 6.05025253,14.9497475 C3.31658249,12.2160774 3.31658249,7.78392257 6.05025253,5.05025253 Z M14.8740262,5.41787064 L14.6950528,5.27200904 C12.3406961,3.42725788 8.92567732,3.58904131 6.75735931,5.75735931 C4.41421356,8.10050506 4.41421356,11.8994949 6.75735931,14.2426407 C8.91789952,16.4031809 12.3162126,16.5715557 14.6696766,14.747765 L14.8745655,14.5816723 L10.6402304,10.3473372 C10.4664981,10.1736048 10.4473638,9.90387057 10.5827121,9.70899023 L10.6407089,9.63975258 L14.8740262,5.41787064 L14.6950528,5.27200904 L14.8740262,5.41787064 Z M10,6 C10.5522847,6 11,6.44771525 11,7 C11,7.55228475 10.5522847,8 10,8 C9.44771525,8 9,7.55228475 9,7 C9,6.44771525 9.44771525,6 10,6 Z" fill="currentColor"></path>
</svg>`, Kf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M9.5,2 C10.204808,2 10.7960812,2.48610066 10.9568484,3.14133101 C14.4011098,3.81886341 17,6.85593004 17,10.5 C17,14.6421356 13.6421356,18 9.5,18 C5.35786438,18 2,14.6421356 2,10.5 C2,9.18956059 2.33608445,7.9576179 2.92676082,6.88566447 L2.99590147,6.76888724 L2.99590147,6.76888724 C3.12687218,6.5521338 3.40876361,6.48261468 3.62550706,6.61360193 L3.66122324,6.63754218 C3.88922665,6.80638433 3.9538401,7.11965053 3.81125933,7.36493394 L3.70770276,7.54740343 L3.70770276,7.54740343 C3.25530348,8.43307175 3,9.43672121 3,10.5 C3,14.0898509 5.91014913,17 9.5,17 C13.0898509,17 16,14.0898509 16,10.5 C16,7.37468421 13.7942807,4.76454176 10.8546275,4.14135801 C10.615661,4.64912073 10.0988066,5 9.5,5 C8.67157288,5 8,4.32842712 8,3.5 C8,2.67157288 8.67157288,2 9.5,2 Z M5.09634416,5.79138838 C4.78467973,5.35221835 5.29068522,4.82548205 5.73790185,5.05611918 L5.81174333,5.1017163 L7.20000784,6.11530828 L8.38966037,6.99316536 L9.47995337,7.80801374 L10.2725733,8.41086771 L10.8952255,8.8974701 L11.2449746,9.18249377 L11.4200917,9.33303113 L11.547388,9.45110382 C12.1508707,10.046366 12.1508707,10.9629485 11.547388,11.5582106 C10.9816231,12.1162689 10.1295476,12.1511475 9.52799379,11.6628465 L9.41118238,11.5582106 L9.21887965,11.349165 L8.95638177,11.0331946 L8.62591945,10.6140585 L8.08343612,9.90122688 L6.96304881,8.38420965 L6.09643188,7.18844818 L5.09634416,5.79138838 Z M9.2537447,8.89735815 L7.78052334,7.79365721 L8.72995859,9.08107206 L9.40058917,9.96665687 L9.71658583,10.3696498 L9.96094319,10.6670173 L10.0812796,10.802801 L10.1280542,10.8511038 C10.3356195,11.0558417 10.6229509,11.0558417 10.8305162,10.8511038 C11.0380814,10.646366 11.0380814,10.3629485 10.8305162,10.1582106 L10.781072,10.1113166 L10.6435257,9.9904561 L10.3446641,9.74452172 L9.78492287,9.30444719 L9.2537447,8.89735815 Z M9.5,3 C9.22385763,3 9,3.22385763 9,3.5 C9,3.77614237 9.22385763,4 9.5,4 C9.77614237,4 10,3.77614237 10,3.5 C10,3.22385763 9.77614237,3 9.5,3 Z" fill="currentColor"></path>
    </g>
</svg>
`, Xf = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 5.75c.4 0 .75.25.75.607v4.286c0 .357-.35.607-.75.607s-.75-.25-.75-.607V9.357c0-.357.35-.607.75-.607zm0-3a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="currentColor" transform="rotate(180 10 10)"/></svg>
`, Jf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,4 C10.2761424,4 10.5,4.22385763 10.5,4.5 L10.5,11.5 C10.5,11.7761424 10.2761424,12 10,12 C9.72385763,12 9.5,11.7761424 9.5,11.5 L9.5,4.5 C9.5,4.22385763 9.72385763,4 10,4 Z M10,14 C10.2761424,14 10.5,14.2238576 10.5,14.5 C10.5,14.7761424 10.2761424,15 10,15 C9.72385763,15 9.5,14.7761424 9.5,14.5 C9.5,14.2238576 9.72385763,14 10,14 Z" fill="currentColor"></path>
</svg>`, Qf = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,5 C10.2761424,5 10.5,5.22385763 10.5,5.5 L10.5,11.5 C10.5,11.7761424 10.2761424,12 10,12 C9.72385763,12 9.5,11.7761424 9.5,11.5 L9.5,5.5 C9.5,5.22385763 9.72385763,5 10,5 Z M10,14 C10.2761424,14 10.5,14.2238576 10.5,14.5 C10.5,14.7761424 10.2761424,15 10,15 C9.72385763,15 9.5,14.7761424 9.5,14.5 C9.5,14.2238576 9.72385763,14 10,14 Z" fill="currentColor"></path>
</svg>`, ep = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="exclamation">
        <path d="M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="circle" fill="currentColor"></path>
        <path d="M10,12.75 C10.4142136,12.75 10.75,13.0857864 10.75,13.5 C10.75,13.9142136 10.4142136,14.25 10,14.25 C9.58578644,14.25 9.25,13.9142136 9.25,13.5 C9.25,13.0857864 9.58578644,12.75 10,12.75 Z M10,5.75 C10.3996307,5.75 10.75,6.00026377 10.75,6.35714286 L10.75,10.6428571 C10.75,10.9997362 10.3996307,11.25 10,11.25 C9.60036927,11.25 9.25,10.9997362 9.25,10.6428571 L9.25,6.35714286 C9.25,6.00026377 9.60036927,5.75 10,5.75 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
    </g>
</svg>
`, tp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3,3 L3,7.5 C3,7.77614237 2.77614237,8 2.5,8 C2.22385763,8 2,7.77614237 2,7.5 L2,2.5 C2,2.22385763 2.22385763,2 2.5,2 L7.5,2 C7.77614237,2 8,2.22385763 8,2.5 C8,2.77614237 7.77614237,3 7.5,3 L3,3 Z M17,3 L12.5,3 C12.2238576,3 12,2.77614237 12,2.5 C12,2.22385763 12.2238576,2 12.5,2 L17.5,2 C17.7761424,2 18,2.22385763 18,2.5 L18,7.5 C18,7.77614237 17.7761424,8 17.5,8 C17.2238576,8 17,7.77614237 17,7.5 L17,3 Z M3,17 L7.5,17 C7.77614237,17 8,17.2238576 8,17.5 C8,17.7761424 7.77614237,18 7.5,18 L2.5,18 C2.22385763,18 2,17.7761424 2,17.5 L2,12.5 C2,12.2238576 2.22385763,12 2.5,12 C2.77614237,12 3,12.2238576 3,12.5 L3,17 Z M17,17 L17,12.5 C17,12.2238576 17.2238576,12 17.5,12 C17.7761424,12 18,12.2238576 18,12.5 L18,17.5 C18,17.7761424 17.7761424,18 17.5,18 L12.5,18 C12.2238576,18 12,17.7761424 12,17.5 C12,17.2238576 12.2238576,17 12.5,17 L17,17 Z" fill="currentColor"></path>
</svg>`, np = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10L10 0V5C10 7.76142 7.76142 10 5 10H0Z" fill="#4A4C4C"/>
</svg>
`, rp = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L0 10V5C0 2.23858 2.23858 0 5 0H10Z" fill="#4A4C4C"/>
</svg>
`, ip = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M11,15.2324081 L11,9.5004539 C11,9.39784592 11.0309078,9.30245685 11.0839211,9.22308892 L15.5657807,3 L4.43421935,3 L8.91603483,9.22311832 C8.94449167,9.26580681 8.96551812,9.31127956 8.9794194,9.35801076 C8.99227305,9.39965065 9,9.44914991 9,9.5004539 L9,16.5657415 L11,15.2324081 Z M8.5,18 C8.22385763,18 8,17.7761424 8,17.5 L8,9.65183219 L3.23239689,3 L3,3 C2.72385763,3 2.5,2.77614237 2.5,2.5 C2.5,2.22385763 2.72385763,1.99994685 3,1.99994685 L3.49224385,1.99994685 C3.49711079,1.99994685 3.50197579,1.99994685 3.50683726,1.99994685 L16.4931586,1.99994685 C16.4980242,1.99994685 16.5028892,1.99994685 16.5077561,1.99994685 L17,1.99994685 C17.2761424,1.99994685 17.5,2.22385763 17.5,2.5 C17.5,2.77614237 17.2761424,3 17,3 L16.7676031,3 L12,9.65183219 L12,15.5 C12,15.6735281 11.9116013,15.8264097 11.7773795,15.9160692 L8.7773501,17.9160251 C8.69800867,17.9690884 8.60261423,18 8.5,18 Z" fill="currentColor"></path>
</svg>`, op = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9.70710678,5 L7.85355339,3.14644661 C7.7597852,3.05267842 7.63260824,3 7.5,3 L3,3 C2.42385763,3 2,3.42385763 2,4 L2,15 C2,15.5761424 2.42385763,16 3,16 L17,16 C17.5761424,16 18,15.5761424 18,15 L18,6 C18,5.42385763 17.5761424,5 17,5 L9.70710678,5 Z M7.29289322,4 L9.14644661,5.85355339 C9.2402148,5.94732158 9.36739176,6 9.5,6 L17,6 L17,15 L3,15 L3,4 L7.29289322,4 Z" fill="currentColor"></path>
</svg>`, sp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M9.65462316,4 C9.93275024,4 10.1582168,4.22385763 10.1582168,4.5 C10.1582168,4.74545989 9.98007038,4.94960837 9.74514475,4.99194433 L9.65462316,5 L9.23865482,5 L9.15424872,5.07393608 C8.18579704,5.94764492 7.4549097,7.04944049 7.01404066,8.26480212 C7.66162393,8.42179657 8.34112978,8.5 9.05031081,8.5 C9.53104934,8.5 10.0325268,8.43505666 10.6637663,8.30970966 C10.9364924,8.25555369 11.2017981,8.43116206 11.2563433,8.70194193 C11.3108885,8.97272181 11.134018,9.23613436 10.861292,9.29029034 C10.1705982,9.42744334 9.61033244,9.5 9.05031081,9.5 C8.24446331,9.5 7.46962174,9.40853179 6.73165492,9.2269005 C6.60046753,9.80326593 6.53234266,10.3983251 6.53234266,11 C6.53234266,13.2129999 7.45394721,15.3365001 9.0495053,16.8298144 C10.5761986,15.4019524 11.4850889,13.3999486 11.562845,11.2943341 L11.568279,11 L11.568279,10.6 C11.568279,10.3238576 11.7937455,10.1 12.0718726,10.1 C12.3190967,10.1 12.5247124,10.2768752 12.5673526,10.5101244 L12.5754662,10.6 L12.5754662,11 C12.5754662,13.1539677 11.7991739,15.2321656 10.4242717,16.843091 C12.6990857,16.3178576 14.5358847,14.5183454 15.0024951,12.2019419 C15.0570403,11.9311621 15.3223461,11.7555537 15.5950721,11.8097097 C15.8677981,11.8638656 16.0446686,12.1272782 15.9901234,12.3980581 C15.3543412,15.5542848 12.5541146,17.8812155 9.30138447,17.9955893 L9.05022043,18.0000111 C5.1463096,18.0000111 2,14.8761424 2,11 C2,7.20461059 5.01657895,4.13048725 8.80731891,4.00404608 L9.05031081,4 L9.65462316,4 Z M3.85247293,7.92869662 L3.76001376,8.0892912 C3.28006628,8.95039235 3.00718726,9.94240894 3.00718726,11 C3.00718726,13.8552095 4.99607631,16.2324769 7.67889454,16.8460831 C6.30241995,15.2347677 5.5251554,13.1553162 5.5251554,11 C5.5251554,10.2968624 5.60787865,9.6017989 5.7671443,8.9284284 C5.09022634,8.67852531 4.45052858,8.34436055 3.85247293,7.92869662 Z M14.5,2 C16.4761424,2 18,3.52385763 18,5.5 C18,6.12299663 17.7046608,6.87672699 17.1792307,7.76174824 C16.9567939,8.13641517 16.6962622,8.52780243 16.4052108,8.9304235 C16.0695291,9.39478324 15.7108152,9.85034995 15.3521288,10.2787808 L15.1531032,10.5138055 L14.86997,10.8363364 C14.6715899,11.0545545 14.3284101,11.0545545 14.13003,10.8363364 L14.009341,10.7010564 L13.6478712,10.2787808 C13.2891848,9.85034995 12.9304709,9.39478324 12.5947892,8.9304235 C12.3037378,8.52780243 12.0432061,8.13641517 11.8207693,7.76174824 C11.2953392,6.87672699 11,6.12299663 11,5.5 C11,3.52385763 12.5238576,2 14.5,2 Z M14.5,3 C13.0761424,3 12,4.07614237 12,5.5 C12,5.89657855 12.2399479,6.50894565 12.6806459,7.25124635 C12.8865001,7.59798196 13.1307166,7.96485949 13.4052108,8.3445765 C13.618923,8.64021167 13.843232,8.93315764 14.0710814,9.21750671 L14.499,9.738 L14.5853712,9.63684417 L14.9289186,9.21750671 L15.2671553,8.78527389 L15.5947892,8.3445765 C15.8692834,7.96485949 16.1134999,7.59798196 16.3193541,7.25124635 C16.7600521,6.50894565 17,5.89657855 17,5.5 C17,4.07614237 15.9238576,3 14.5,3 Z M7.67893287,5.15388398 L7.5102831,5.19503121 C6.29288339,5.51043539 5.22734614,6.1915046 4.43879534,7.11400773 C4.9444812,7.4658929 5.48321873,7.75029856 6.05243995,7.96818534 C6.3776075,7.05500779 6.84878753,6.19836828 7.44818386,5.43549392 L7.67893287,5.15388398 Z M14.5,4 C15.3284271,4 16,4.67157288 16,5.5 C16,6.32842712 15.3284271,7 14.5,7 C13.6715729,7 13,6.32842712 13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,5 C14.2238576,5 14,5.22385763 14,5.5 C14,5.77614237 14.2238576,6 14.5,6 C14.7761424,6 15,5.77614237 15,5.5 C15,5.22385763 14.7761424,5 14.5,5 Z" fill="currentColor" fill-rule="nonzero"></path>
    </g>
</svg>
`, ap = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6,15 L6,16 L2,16 L2,15 L6,15 Z M12,15 L12,16 L8,16 L8,15 L12,15 Z M18,15 L18,16 L14,16 L14,15 L18,15 Z M6,11 L6,12 L2,12 L2,11 L6,11 Z M12,11 L12,12 L8,12 L8,11 L12,11 Z M18,11 L18,12 L14,12 L14,11 L18,11 Z M6,7 L6,8 L2,8 L2,7 L6,7 Z M12,7 L12,8 L8,8 L8,7 L12,7 Z M18,7 L18,8 L14,8 L14,7 L18,7 Z M6,3 L6,4 L2,4 L2,3 L6,3 Z M12,3 L12,4 L8,4 L8,3 L12,3 Z M18,3 L18,4 L14,4 L14,3 L18,3 Z" fill="currentColor"></path>
</svg>`, lp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M2,2.5 C2,2.22385763 2.22385763,2 2.5,2 L11.5,2 C11.7761424,2 12,2.22385763 12,2.5 L12,10.5 C12,10.7761424 11.7761424,11 11.5,11 L2.5,11 C2.22385763,11 2,10.7761424 2,10.5 L2,2.5 Z M3,3 L3,10 L11,10 L11,3 L3,3 Z M14,6 L13.5,6 C13.2238576,6 13,5.77614237 13,5.5 C13,5.22385763 13.2238576,5 13.5,5 L14.5,5 C14.7761424,5 15,5.22385763 15,5.5 L15,13.5 C15,13.7761424 14.7761424,14 14.5,14 L5.5,14 C5.22385763,14 5,13.7761424 5,13.5 L5,12.5 C5,12.2238576 5.22385763,12 5.5,12 C5.77614237,12 6,12.2238576 6,12.5 L6,13 L14,13 L14,6 Z M17,9 L16.5,9 C16.2238576,9 16,8.77614237 16,8.5 C16,8.22385763 16.2238576,8 16.5,8 L17.5,8 C17.7761424,8 18,8.22385763 18,8.5 L18,16.5 C18,16.7761424 17.7761424,17 17.5,17 L8.5,17 C8.22385763,17 8,16.7761424 8,16.5 L8,15.5 C8,15.2238576 8.22385763,15 8.5,15 C8.77614237,15 9,15.2238576 9,15.5 L9,16 L17,16 L17,9 Z" fill="currentColor"></path>
</svg>`, cp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,14 C10.2761424,14 10.5,14.2238576 10.5,14.5 C10.5,14.7761424 10.2761424,15 10,15 C9.72385763,15 9.5,14.7761424 9.5,14.5 C9.5,14.2238576 9.72385763,14 10,14 Z M10.5,9.95811855 L10.5,11.5 C10.5,11.7761424 10.2761424,12 10,12 C9.72385763,12 9.5,11.7761424 9.5,11.5 L9.5,9.5 C9.5,9.22385763 9.72385763,9 10,9 C11.0988576,9 12,8.09885763 12,7 C12,5.90114237 11.0988576,5 10,5 C8.90114237,5 8,5.90114237 8,7 C8,7.27614237 7.77614237,7.5 7.5,7.5 C7.22385763,7.5 7,7.27614237 7,7 C7,5.34885763 8.34885763,4 10,4 C11.6511424,4 13,5.34885763 13,7 C13,8.48087885 11.914984,9.718601 10.5,9.95811855 Z" fill="currentColor"></path>
</svg>`, up = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="help">
        <path d="M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z" id="circle" fill="currentColor"></path>
        <path d="M10,12.95 C10.3589851,12.95 10.65,13.2410149 10.65,13.6 C10.65,13.9589851 10.3589851,14.25 10,14.25 C9.64101491,14.25 9.35,13.9589851 9.35,13.6 C9.35,13.2410149 9.64101491,12.95 10,12.95 Z M10,5.75 C11.4589851,5.75 12.65,6.94101491 12.65,8.4 C12.65,9.62227261 11.8084904,10.6752634 10.65,10.9690367 L10.65,11.2 C10.65,11.5589851 10.3589851,11.85 10,11.85 C9.64101491,11.85 9.35,11.5589851 9.35,11.2 L9.35,10.4 C9.35,10.0736499 9.59050819,9.80347354 9.90394776,9.75704767 L10.1292997,9.74377544 C10.810553,9.67789784 11.35,9.0974258 11.35,8.4 C11.35,7.65898509 10.7410149,7.05 10,7.05 C9.25898509,7.05 8.65,7.65898509 8.65,8.4 C8.65,8.75898509 8.35898509,9.05 8,9.05 C7.64101491,9.05 7.35,8.75898509 7.35,8.4 C7.35,6.94101491 8.54101491,5.75 10,5.75 Z" fill="#FFFFFF" fill-rule="nonzero"></path>
    </g>
</svg>`, fp = `<svg viewBox="0 0 22 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="nav-03" class="fillable" transform="translate(-25.000000, -784.000000)" fill="currentColor">
            <g id="icon-info" transform="translate(24.000000, 784.000000)">
                <path d="M12,21.2966102 C6.76127778,21.2966102 2.5,17.0342768 2.5,11.7966102 C2.5,6.5589435 6.76127778,2.29661017 12,2.29661017 C17.2387222,2.29661017 21.5,6.5589435 21.5,11.7966102 C21.5,17.0342768 17.2387222,21.2966102 12,21.2966102 M12,0.796610169 C5.925,0.796610169 1,5.72161017 1,11.7966102 C1,17.8716102 5.925,22.7966102 12,22.7966102 C18.075,22.7966102 23,17.8716102 23,11.7966102 C23,5.72161017 18.075,0.796610169 12,0.796610169 M11.8105,14.7284773 C12.4265,14.7284773 12.9315,15.2341858 12.9315,15.8532773 C12.9315,16.4713654 12.4265,16.9640298 11.8105,16.9640298 C11.1945,16.9640298 10.7045,16.4713654 10.7045,15.8532773 C10.7045,15.2341858 11.1945,14.7284773 11.8105,14.7284773 L11.8105,14.7284773 Z M11.0265,13.8153925 C10.9985,13.6327756 10.9705,13.4501586 10.9705,13.2384434 C10.9705,12.4939281 11.2785,11.8045993 12.0775,11.2005586 L12.7485,10.6948502 C13.1695,10.3858061 13.3515,10.0055214 13.3515,9.58510102 C13.3515,8.93791458 12.8895,8.31982644 11.9515,8.31982644 C10.9565,8.31982644 10.5225,9.12053153 10.5225,9.90718915 C10.5225,10.076762 10.5365,10.2312841 10.5785,10.3577112 L8.8135,10.2874739 C8.7565,10.0898061 8.7435,9.86504678 8.7435,9.65433492 C8.7435,8.13720949 9.8775,6.67527051 11.9515,6.67527051 C14.1225,6.67527051 15.2565,8.05292475 15.2565,9.47171797 C15.2565,10.5824705 14.6965,11.3691281 13.8705,11.9601247 L13.2955,12.367501 C12.8055,12.7186875 12.5395,13.1541586 12.5395,13.7301044 L12.5395,13.8153925 L11.0265,13.8153925 Z" id="Fill-1"></path>
            </g>
        </g>
    </g>
</svg>
`, pp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M8.49501904,5 C9.31962363,5 9.92075107,5.55262129 9.98861864,6.34808114 L9.99501904,6.5 L9.99443558,8.07592882 C10.1500503,8.02638702 10.319568,8 10.4997566,8 C11.0597076,8 11.5166102,8.25482164 11.7734646,8.66746525 C11.9832626,8.55935576 12.229508,8.5 12.4997566,8.5 C13.0675384,8.5 13.5293693,8.76199868 13.784123,9.18486967 C13.9978591,9.06599298 14.2432735,9 14.4997566,9 C15.3243611,9 15.9254886,9.55262129 15.9933562,10.3480811 L15.9997566,10.5 L15.9997566,15.5 C15.9997566,16.8210967 14.9640094,17.9096877 13.6636269,17.9946613 L13.4997566,18 L8.99975655,18 C8.62421461,18 8.26156438,17.8249509 7.9180495,17.510932 L7.79014059,17.3867312 L4.29975655,12.4 C3.83367275,11.7785549 3.89266143,10.8347428 4.48286642,10.3794455 L4.71985532,10.2187615 C5.33723872,9.84332463 6.19297136,9.9291493 6.61233615,10.4728157 L6.69019096,10.5876525 L6.995,10.968 L6.99501904,6.5 C6.99501904,5.64918735 7.69057692,5 8.49501904,5 Z M8.49501904,6 C8.25769775,6 8.04721925,6.17183551 8.00337614,6.40844448 L7.99501904,6.5 L7.99671727,12.3443715 C8.0149945,12.5090624 7.95106625,12.6792647 7.81210407,12.7904344 C7.72838852,12.8574068 7.62974874,12.8931087 7.53029658,12.899108 L7.49501904,12.9 C7.3485467,12.9 7.21678461,12.8370179 7.12533728,12.7366582 L5.82528191,11.1001832 C5.68324123,10.9639735 5.38930663,10.9574688 5.15700443,11.1287465 C4.98911968,11.2294773 4.94493028,11.5087929 5.05907758,11.7324598 L5.10937251,11.8132688 L8.55330994,16.7464466 C8.68255986,16.8756965 8.82944739,16.9656087 8.93896814,16.9919891 L8.99975655,17 L13.4997566,17 C14.275152,17 14.9196993,16.4010642 14.9928453,15.6437457 L14.9997566,15.5 L14.9997566,10.5 C14.9997566,10.1761424 14.8236142,10 14.4997566,10 C14.2624353,10 14.0519568,10.1718355 14.0081136,10.4084445 L13.9997566,10.5 L13.9997566,11.5 C13.9997566,11.7761424 13.7758989,12 13.4997566,12 C13.2542967,12 13.0501482,11.8231248 13.0078122,11.5898756 L12.9997566,11.5 L12.9997566,10 C12.9997566,9.67614237 12.8236142,9.5 12.4997566,9.5 C12.2118831,9.5 12.0407229,9.63917422 12.0062413,9.89755739 L11.9997566,10 L11.9997566,11 C11.9997566,11.2761424 11.7758989,11.5 11.4997566,11.5 C11.2542967,11.5 11.0501482,11.3231248 11.0078122,11.0898756 L10.9997566,11 L10.9997566,9.5 C10.9997566,9.17614237 10.8236142,9 10.4997566,9 C10.2118831,9 10.0407229,9.13917422 10.0062413,9.39755739 L9.99501904,9.545 L9.99501904,11.5 C9.99501904,11.7454599 9.81814388,11.9496084 9.58489467,11.9919443 L9.49501904,12 C9.24955915,12 9.04541067,11.8231248 9.00307471,11.5898756 L8.99501904,11.5 L8.99501904,6.5 C8.99501904,6.17614237 8.81887667,6 8.49501904,6 Z M12.495019,6 C12.7711614,6 12.995019,6.22385763 12.995019,6.5 C12.995019,6.74545989 12.8181439,6.94960837 12.5848947,6.99194433 L12.495019,7 L11.495019,7 C11.2188767,7 10.995019,6.77614237 10.995019,6.5 C10.995019,6.25454011 11.1718942,6.05039163 11.4051434,6.00805567 L11.495019,6 L12.495019,6 Z M5.49501904,6.00805567 C5.77116142,6.00805567 5.99501904,6.23191329 5.99501904,6.50805567 C5.99501904,6.75351556 5.81814388,6.95766404 5.58489467,7 L5.49501904,7.00805567 L4.49501904,7.00805567 C4.21887667,7.00805567 3.99501904,6.78419804 3.99501904,6.50805567 C3.99501904,6.26259578 4.1718942,6.0584473 4.40514341,6.01611134 L4.49501904,6.00805567 L5.49501904,6.00805567 Z M5.92577115,3.23503777 L5.99501904,3.29289322 L6.70212582,4 C6.89738797,4.19526215 6.89738797,4.51184464 6.70212582,4.70710678 C6.52855947,4.88067313 6.25913507,4.89995828 6.06426693,4.76496223 L5.99501904,4.70710678 L5.28791226,4 C5.09265011,3.80473785 5.09265011,3.48815536 5.28791226,3.29289322 C5.46147861,3.11932687 5.73090301,3.10004172 5.92577115,3.23503777 Z M10.2879123,4 L10.995019,3.29289322 C11.1902812,3.09763107 11.5068637,3.09763107 11.7021258,3.29289322 C11.8756922,3.46645957 11.8949773,3.73588397 11.7599813,3.93075211 L11.7021258,4 L10.995019,4.70710678 C10.7997569,4.90236893 10.4831744,4.90236893 10.2879123,4.70710678 C10.1143459,4.53354043 10.0950608,4.26411603 10.2300568,4.06924789 L10.2879123,4 L10.995019,3.29289322 L10.2879123,4 Z M8.49501904,2 C8.74047893,2 8.94462741,2.17687516 8.98696337,2.41012437 L8.99501904,2.5 L8.99501904,3.5 C8.99501904,3.77614237 8.77116142,4 8.49501904,4 C8.24955915,4 8.04541067,3.82312484 8.00307471,3.58987563 L7.99501904,3.5 L7.99501904,2.5 C7.99501904,2.22385763 8.21887667,2 8.49501904,2 Z" fill="currentColor"></path>
</svg>`, dp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.44385 17.2061L2 1H17.8736L16.4298 17.1974L9.92368 19" fill="#E44D26"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.92816 4.31201H4.94897L5.49151 10.3149H9.92816V10.3193H12.3783L12.1464 12.9007L9.93248 13.4946L7.71417 12.9007L7.57416 11.3125H5.57902L5.85904 14.4321L9.93682 15.5697V15.5585L13.9972 14.4321L14.5441 8.33292H9.92816L7.31164 8.33292L7.12788 6.2984H9.93682L14.7235 6.2984L14.9073 4.31201H9.93682H9.92816Z" fill="white"/>
</svg>
`, hp = `<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M5 10V18H8.5V14H11.5V18H15V10H18L10 2L2 10H5Z" fill="currentColor"/>
</svg>
`, Cp = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 5.75c.4 0 .75.25.75.607v4.286c0 .357-.35.607-.75.607s-.75-.25-.75-.607V9.357c0-.357.35-.607.75-.607zm0-3a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="currentColor"/></svg>
`, vp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M10,2 C11.2783769,2 12.4867202,2.29984971 13.5585352,2.83305455 C13.8150401,2.62474943 14.1429517,2.5 14.5,2.5 C15.3284271,2.5 16,3.17157288 16,4 C16,4.20544993 15.9586956,4.40125269 15.8839377,4.57955729 C17.1974013,6.00447188 18,7.90850746 18,10 C18,14.418278 14.418278,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 Z M10,3 C6.13400675,3 3,6.13400675 3,10 C3,13.8659932 6.13400675,17 10,17 C13.8659932,17 17,13.8659932 17,10 C17,8.20123925 16.3215395,6.56094144 15.2065619,5.32104986 C14.9963272,5.43605412 14.7556313,5.5 14.5,5.5 C13.6715729,5.5 13,4.82842712 13,4 C13,3.8939384 13.0110078,3.7904478 13.0319433,3.69060837 C12.1159723,3.24772483 11.0869158,3 10,3 Z M10,5 C12.7614237,5 15,7.23857625 15,10 C15,12.7614237 12.7614237,15 10,15 C7.23857625,15 5,12.7614237 5,10 C5,7.23857625 7.23857625,5 10,5 Z M10,6 C7.790861,6 6,7.790861 6,10 C6,12.209139 7.790861,14 10,14 C12.209139,14 14,12.209139 14,10 C14,7.790861 12.209139,6 10,6 Z M10,8.5 C10.8284271,8.5 11.5,9.17157288 11.5,10 C11.5,10.8284271 10.8284271,11.5 10,11.5 C9.17157288,11.5 8.5,10.8284271 8.5,10 C8.5,9.17157288 9.17157288,8.5 10,8.5 Z M10,9.5 C9.72385763,9.5 9.5,9.72385763 9.5,10 C9.5,10.2761424 9.72385763,10.5 10,10.5 C10.2761424,10.5 10.5,10.2761424 10.5,10 C10.5,9.72385763 10.2761424,9.5 10,9.5 Z M14.5,3.5 L14.4101244,3.50805567 C14.1768752,3.55039163 14,3.75454011 14,4 C14,4.24545989 14.1768752,4.44960837 14.4101244,4.49194433 L14.5,4.5 C14.7761424,4.5 15,4.27614237 15,4 C15,3.87727006 14.9557812,3.76486796 14.8824063,3.67785636 L14.822,3.617 L14.7523596,3.56826466 C14.6782855,3.52487307 14.5920475,3.5 14.5,3.5 Z" fill="currentColor"></path>
    </g>
</svg>`, gp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.545,3 L6.545,4.125 L6.35,4.125 C5.24,4.125 4.88,4.605 4.88,5.7 L4.88,8.16 C4.88,9.165 4.28,9.825 3.32,10.005 C4.28,10.185 4.88,10.845 4.88,11.85 L4.88,14.295 C4.88,15.39 5.24,15.87 6.35,15.87 L6.545,15.87 L6.545,16.995 L6.35,16.995 C4.595,16.995 3.65,16.065 3.65,14.205 L3.65,12.165 C3.65,11.055 2.87,10.65 2,10.65 L2,9.36 C2.87,9.36 3.65,8.955 3.65,7.845 L3.65,5.79 C3.65,3.93 4.595,3 6.35,3 L6.545,3 Z M13.645,3 C15.4,3 16.345,3.93 16.345,5.79 L16.345,7.845 C16.345,8.955 17.125,9.36 17.995,9.36 L17.995,10.65 C17.125,10.65 16.345,11.055 16.345,12.165 L16.345,14.205 C16.345,16.065 15.4,16.995 13.645,16.995 L13.45,16.995 L13.45,15.87 L13.645,15.87 C14.755,15.87 15.115,15.39 15.115,14.295 L15.115,11.85 C15.115,10.845 15.715,10.185 16.675,10.005 C15.715,9.825 15.115,9.165 15.115,8.16 L15.115,5.7 C15.115,4.605 14.755,4.125 13.645,4.125 L13.45,4.125 L13.45,3 L13.645,3 Z M11,6 L11,9 L14,9 L14,11 L11,11 L11,14 L9,14 L9,11 L6,11 L6,9 L9,9 L9,6 L11,6 Z" fill="currentColor"></path>
</svg>`, Lp = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 23">
<path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M16 11H4V9L1 12.5L4 16V14H16V11Z" stroke="#814CB5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M1 3H13V1L16 4.5L13 8V6H1V3Z" stroke="#814CB5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`, wp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="12" width="4" height="4" transform="rotate(-90 3 12)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="13" y="17" width="4" height="3" transform="rotate(-90 13 17)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="13" y="7" width="4" height="3" transform="rotate(-90 13 7)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 15H10V5H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, mp = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_121_364" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.74988 6C8.74988 3.51472 10.7646 1.5 13.2499 1.5C15.7352 1.5 17.7499 3.51472 17.7499 6C17.7499 8.48528 15.7352 10.5 13.2499 10.5C10.7646 10.5 8.74988 8.48528 8.74988 6ZM13.2499 0.5C10.2123 0.5 7.74988 2.96243 7.74988 6C7.74988 7.02403 8.02975 7.9827 8.51716 8.8037L0.896233 16.4246C0.700971 16.6199 0.700971 16.9365 0.896233 17.1317L2.31045 18.5459C2.50571 18.7412 2.82229 18.7412 3.01755 18.5459L3.50602 18.0575L5.02109 19.5725C5.21635 19.7678 5.53293 19.7678 5.7282 19.5725L8.55662 16.7441C8.75189 16.5489 8.75189 16.2323 8.55662 16.037L7.04155 14.5219L10.6928 10.8707C11.4567 11.2726 12.3267 11.5 13.2499 11.5C16.2875 11.5 18.7499 9.03757 18.7499 6C18.7499 2.96243 16.2875 0.5 13.2499 0.5ZM11.7499 6C11.7499 5.17157 12.4215 4.5 13.2499 4.5C14.0783 4.5 14.7499 5.17157 14.7499 6C14.7499 6.82843 14.0783 7.5 13.2499 7.5C12.4215 7.5 11.7499 6.82843 11.7499 6ZM13.2499 3.5C11.8692 3.5 10.7499 4.61929 10.7499 6C10.7499 7.38071 11.8692 8.5 13.2499 8.5C14.6306 8.5 15.7499 7.38071 15.7499 6C15.7499 4.61929 14.6306 3.5 13.2499 3.5ZM9.02796 9.70711L1.95689 16.7782L2.664 17.4853L9.73507 10.4142L9.02796 9.70711ZM4.29897 17.4362L6.42029 15.3149L7.49596 16.3906L5.37464 18.5119L4.29897 17.4362Z" fill="currentColor"/></mask><g mask="url(#mask0_121_364)"><rect x="0.25" width="20" height="20" fill="currentColor"/></g></svg>
`, xp = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.6 2C2.32386 2 2.1 2.22386 2.1 2.5L2.09998 9C2.09998 9.1378 2.15685 9.26949 2.25716 9.36398L10.8525 17.4596C11.248 17.8488 11.8603 17.8468 12.2535 17.4536C12.2627 17.4443 12.2716 17.4348 12.28 17.4249L17.5693 11.2374C17.9487 10.8417 17.9435 10.2364 17.5535 9.84645L17.5422 9.83551L9.34224 2.13551C9.24954 2.04846 9.12715 2 8.99998 2H2.6ZM3.09998 8.78407L3.1 3H8.80202L16.8426 10.5503C16.8348 10.5583 16.8272 10.5666 16.8199 10.5751L11.5485 16.7416L11.5428 16.736L3.09998 8.78407ZM4.99998 5.5C4.99998 5.22386 5.22383 5 5.49998 5C5.77612 5 5.99998 5.22386 5.99998 5.5C5.99998 5.77614 5.77612 6 5.49998 6C5.22383 6 4.99998 5.77614 4.99998 5.5ZM5.49998 4C4.67155 4 3.99998 4.67157 3.99998 5.5C3.99998 6.32843 4.67155 7 5.49998 7C6.3284 7 6.99998 6.32843 6.99998 5.5C6.99998 4.67157 6.3284 4 5.49998 4Z" fill="currentColor"/>
</svg>
`, yp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7.64168105,9 L12.3579688,9 L11.0663166,6.74883473 C11.0228639,6.67310282 11,6.58731244 11,6.5 L11,3 L9,3 L9,6.5 C9,6.58731244 8.97713612,6.67310282 8.93368338,6.74883473 L7.64168105,9 Z M7.06775502,10 L5.4472136,12.8236068 C5.14307613,13.4318817 5,13.9428679 5,14.5 C5,15.9238576 6.07614237,17 7.5,17 L12.5,17 C13.9238576,17 15,15.9238576 15,14.5 C15,13.9428679 14.8569239,13.4318817 14.5663166,12.8488347 L12.9317393,10 L7.06775502,10 Z M8,3 L7.50109863,3 C7.22495626,3 7.00109863,2.77614237 7.00109863,2.5 C7.00109863,2.22385763 7.22495626,2 7.50109863,2 L12.5,2 C12.7761424,2 13,2.22385763 13,2.5 C13,2.77614237 12.7761424,3 12.5,3 L12,3 L12,6.36677674 L15.4472136,12.3763932 C15.8158034,13.1135728 16,13.7714178 16,14.5 C16,16.4761424 14.4761424,18 12.5,18 L7.5,18 C5.52385763,18 4,16.4761424 4,14.5 C4,13.7714178 4.18419659,13.1135728 4.56631662,12.3511653 L8,6.36674566 L8,3 Z M9.5,13 C9.22385763,13 9,12.7761424 9,12.5 C9,12.2238576 9.22385763,12 9.5,12 C9.77614237,12 10,12.2238576 10,12.5 C10,12.7761424 9.77614237,13 9.5,13 Z M11.5,14 C11.2238576,14 11,13.7761424 11,13.5 C11,13.2238576 11.2238576,13 11.5,13 C11.7761424,13 12,13.2238576 12,13.5 C12,13.7761424 11.7761424,14 11.5,14 Z M8.5,15 C8.22385763,15 8,14.7761424 8,14.5 C8,14.2238576 8.22385763,14 8.5,14 C8.77614237,14 9,14.2238576 9,14.5 C9,14.7761424 8.77614237,15 8.5,15 Z" fill="currentColor"></path>
</svg>`, _p = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M16.5,16 C16.7761424,16 17,16.2238576 17,16.5 C17,16.7761424 16.7761424,17 16.5,17 L2.5,17 C2.22385763,17 2,16.7761424 2,16.5 C2,16.2238576 2.22385763,16 2.5,16 L16.5,16 Z M10.9569043,9.14155865 C10.9850658,9.25641311 11,9.37646252 11,9.5 C11,10.3284271 10.3284271,11 9.5,11 C8.67157288,11 8,10.3284271 8,9.5 C8,9.33674447 8.02608076,9.17958043 8.07430307,9.0324471 L5.31459744,6.75974835 C5.08002691,6.91174202 4.80032033,7 4.5,7 C3.67157288,7 3,6.32842712 3,5.5 C3,4.67157288 3.67157288,4 4.5,4 C5.32842712,4 6,4.67157288 6,5.5 C6,5.66325553 5.97391924,5.82041957 5.92569693,5.9675529 L8.68540256,8.24025165 C8.91997309,8.08825798 9.19967967,8 9.5,8 C9.84109919,8 10.1556065,8.11385337 10.4075926,8.3056308 L13.0105443,6.67878598 C13.0035816,6.62016083 13,6.56049868 13,6.5 C13,5.67157288 13.6715729,5 14.5,5 C15.3284271,5 16,5.67157288 16,6.5 C16,7.32842712 15.3284271,8 14.5,8 C14.0950001,8 13.7274886,7.83949282 13.4576067,7.57861963 L10.9569043,9.14155865 L10.9569043,9.14155865 Z" fill="currentColor"></path>
</svg>`, bp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M18,15 L18,16 L6,16 L6,15 L18,15 Z M4,15 L4,16 L2,16 L2,15 L4,15 Z M18,11 L18,12 L6,12 L6,11 L18,11 Z M4,11 L4,12 L2,12 L2,11 L4,11 Z M18,7 L18,8 L6,8 L6,7 L18,7 Z M4,7 L4,8 L2,8 L2,7 L4,7 Z M18,3 L18,4 L6,4 L6,3 L18,3 Z M4,3 L4,4 L2,4 L2,3 L4,3 Z" fill="currentColor"></path>
</svg>`, Mp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M18,12 L18,13 L6,13 L6,12 L18,12 Z M18,15 L18,16 L2,16 L2,15 L18,15 Z M4,12 L4,13 L2,13 L2,12 L4,12 Z M18,6 L18,7 L2,7 L2,6 L18,6 Z M18,3 L18,4 L6,4 L6,3 L18,3 Z M4,3 L4,4 L2,4 L2,3 L4,3 Z" fill="currentColor"></path>
    </g>
</svg>
`, Ep = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M14,8 C16.209139,8 18,9.790861 18,12 C18,14.209139 16.209139,16 14,16 L10,16 C8.13643475,16 6.57052105,14.7256022 6.12621352,13.0007613 L7.17102423,13.0009007 C7.56444181,14.1128456 8.5948672,14.9237055 9.82372721,14.9949073 L10,15 L14,15 C15.6568542,15 17,13.6568542 17,12 C17,10.4023191 15.75108,9.09633912 14.1762728,9.00509269 L14,9 L10,9 C9.11145274,9 8.31312878,9.3862919 7.76380548,10.0000983 L6.53519846,9.99987956 C7.22683444,8.80434324 8.51948501,8 10,8 L14,8 Z M6,12 C3.790861,12 2,10.209139 2,8 C2,5.790861 3.790861,4 6,4 L10,4 C11.8639271,4 13.4300871,5.27489272 13.8740452,7.00024347 L12.8293257,7.00008893 C12.4361695,5.88763555 11.4054973,5.0763156 10.1762728,5.00509269 L10,5 L6,5 C4.34314575,5 3,6.34314575 3,8 C3,9.59768088 4.24891996,10.9036609 5.82372721,10.9949073 L6,11 L10,11 C10.8880739,11 11.6860206,10.6141196 12.2353163,10.0008825 L13.4642293,10.0011092 C12.7724528,11.1961002 11.4801068,12 10,12 L6,12 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
`, Op = `<svg width="20px" height="20px"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 8c0 .887-.241 1.86-.69 2.906-.498 1.162-1.238 2.387-2.157 3.64a32.094 32.094 0 0 1-1.92 2.365l-.332.365-.302.324-.245.254a.5.5 0 0 1-.708 0l-.245-.254-.302-.324-.332-.365a32.094 32.094 0 0 1-1.92-2.365c-.919-1.253-1.66-2.478-2.157-3.64C4.24 9.86 4 8.887 4 8a6 6 0 1 1 12 0zm-6 8.778l.155-.167.331-.366a31.107 31.107 0 0 0 1.86-2.29c.878-1.197 1.58-2.36 2.045-3.443.4-.931.609-1.777.609-2.512A5 5 0 0 0 5 8c0 .735.21 1.58.609 2.512.464 1.083 1.167 2.246 2.044 3.442.592.807 1.226 1.58 1.86 2.291l.332.366.155.167zM10 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
`, Sp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7,9 L7,7.5 C7,5.56700338 8.56700338,4 10.5,4 C12.4329966,4 14,5.56700338 14,7.5 L14,9 L14.5,9 C14.7761424,9 15,9.22385763 15,9.5 L15,15.5 C15,15.7761424 14.7761424,16 14.5,16 L6.5,16 C6.22385763,16 6,15.7761424 6,15.5 L6,9.5 C6,9.22385763 6.22385763,9 6.5,9 L7,9 Z M8,9 L13,9 L13,7.5 C13,6.11928813 11.8807119,5 10.5,5 C9.11928813,5 8,6.11928813 8,7.5 L8,9 Z M7,10 L7,15 L14,15 L14,10 L7,10 Z" fill="currentColor"></path>
</svg>`, Tp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M8.99990557,9.99970277 L6.49990557,9.99970277 C6.16771613,9.99970277 5.92788414,9.68175031 6.0191436,9.36234221 L8.0191436,2.36234221 C8.08047239,2.14769143 8.27666539,1.99970277 8.49990557,1.99970277 L12.4999056,1.99970277 C12.8536379,1.99970277 13.0955168,2.35696591 12.9641439,2.68539811 L11.2384221,6.99970277 L13.4999056,6.99970277 C13.8536379,6.99970277 14.0955168,7.35696591 13.9641439,7.68539811 L9.96414392,17.6853981 C9.75968276,18.196551 8.99990557,18.0502313 8.99990557,17.4997028 L8.99990557,9.99970277 Z M8.87705628,2.99970277 L7.16277056,8.99970277 L9.49990557,8.99970277 C9.77604795,8.99970277 9.99990557,9.2235604 9.99990557,9.49970277 L9.99990557,14.9034116 L12.7613891,7.99970277 L10.4999056,7.99970277 C10.1461733,7.99970277 9.90429435,7.64243963 10.0356672,7.31400743 L11.7613891,2.99970277 L8.87705628,2.99970277 Z" fill="currentColor"></path>
</svg>`, Ap = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M11.281,17 C11.5571424,17 11.781,17.2238576 11.781,17.5 C11.781,17.7454599 11.6041248,17.9496084 11.3708756,17.9919443 L11.281,18 L9.281,18 C9.00485763,18 8.781,17.7761424 8.781,17.5 C8.781,17.2545401 8.95787516,17.0503916 9.19112437,17.0080557 L9.281,17 L11.281,17 Z M12.281,15 C12.5571424,15 12.781,15.2238576 12.781,15.5 C12.781,15.7454599 12.6041248,15.9496084 12.3708756,15.9919443 L12.281,16 L8.281,16 C8.00485763,16 7.781,15.7761424 7.781,15.5 C7.781,15.2545401 7.95787516,15.0503916 8.19112437,15.0080557 L8.281,15 L12.281,15 Z M10.281,2 C12.984086,2 15.1635724,4.10835255 15.2764103,6.78200873 L15.281,7 L15.281,7 C15.281,8.10818511 14.9459111,9.11345191 14.2547047,10.0321819 C13.6577473,10.7037589 13.3298532,11.7093683 13.2860568,12.8375666 L13.281,13.1 L13.281,13.4 C13.281,13.6454599 13.1041248,13.8496084 12.8708756,13.8919443 L12.781,13.9 L7.781,13.9 C7.53554011,13.9 7.33139163,13.7231248 7.28905567,13.4898756 L7.281,13.4 L7.281,13.1 C7.281,12.0176914 6.92164867,10.9156806 6.3013717,10.0253957 C5.63809463,9.25157244 5.281,8.15053066 5.281,7 C5.281,4.22385763 7.50485763,2 10.281,2 Z M10.281,3 C8.124532,3 6.38905612,4.67012837 6.28585599,6.79910147 L6.281,7 L6.281,7 C6.281,7.92446934 6.5630358,8.79407973 7.09061596,9.41326883 C7.79770621,10.4233978 8.2136908,11.6099853 8.27350447,12.801986 L8.276,12.9 L12.284,12.9 L12.286338,12.809847 C12.3325989,11.5600036 12.6795282,10.4130311 13.3263982,9.58525948 L13.481,9.4 C14.0160889,8.68654809 14.281,7.89181489 14.281,7 C14.281,4.77614237 12.5048576,3 10.281,3 Z" fill="currentColor"></path>
    </g>
</svg>
`, Np = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7,10 C7,11.6238576 8.37614237,13 10,13 C11.6238576,13 13,11.6238576 13,10 L13,7 C13,6.72385763 13.2238576,6.5 13.5,6.5 L17.5,6.5 C17.7761424,6.5 18,6.72385763 18,7 L18,10 C18,14.3761424 14.3761424,18 10,18 C5.62385763,18 2,14.3761424 2,10 L2,7 C2,6.72385763 2.22385763,6.5 2.5,6.5 L6.5,6.5 C6.77614237,6.5 7,6.72385763 7,7 L7,10 Z M14,7.5 L14,10 C14,12.1761424 12.1761424,14 10,14 C7.82385763,14 6,12.1761424 6,10 L6,7.5 L3,7.5 L3,10 C3,13.8238576 6.17614237,17 10,17 C13.8238576,17 17,13.8238576 17,10 L17,7.5 L14,7.5 Z M17.5,2 C17.7761424,2 18,2.22385763 18,2.5 L18,5 C18,5.27614237 17.7761424,5.5 17.5,5.5 L13.5,5.5 C13.2238576,5.5 13,5.27614237 13,5 L13,2.5 C13,2.22385763 13.2238576,2 13.5,2 L17.5,2 Z M17,3 L14,3 L14,4.5 L17,4.5 L17,3 Z M6.5,2 C6.77614237,2 7,2.22385763 7,2.5 L7,5 C7,5.27614237 6.77614237,5.5 6.5,5.5 L2.5,5.5 C2.22385763,5.5 2,5.27614237 2,5 L2,2.5 C2,2.22385763 2.22385763,2 2.5,2 L6.5,2 Z M6,3 L3,3 L3,4.5 L6,4.5 L6,3 Z" fill="currentColor"></path>
</svg>`, Zp = `<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M10,2 C14.418278,2 18,5.36255577 18,9.51047852 C18,13.6584013 14.418278,17.020957 10,17.020957 C9.14253943,17.020957 8.3165866,16.894311 7.54220711,16.6598566 L5.78556846,17.8317092 C5.32603978,18.1384897 4.70517043,18.0141423 4.39881797,17.5539716 C4.2683058,17.3579299 4.21100174,17.1220824 4.23698453,16.8879106 L4.45391288,14.9231928 C2.94124215,13.556798 2,11.6368317 2,9.51047852 C2,5.36255577 5.581722,2 10,2 Z M10,3 C6.12038553,3 3,5.92944856 3,9.51047852 C3,11.1979498 3.69332202,12.7841652 4.91563973,13.9846559 L5.50404306,14.524203 L5.23122544,16.9998076 L7.38005828,15.5659355 L7.83198121,15.7027615 C8.52539897,15.9127036 9.25421364,16.020957 10,16.020957 C13.8796145,16.020957 17,13.0915085 17,9.51047852 C17,5.92944856 13.8796145,3 10,3 Z" fill="currentColor"></path></g></svg>
`, Hp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M4.5,10 C4.77614237,10 5,10.2238576 5,10.5 L5,11 L10.5,11 C10.7454599,11 10.9496084,11.1768752 10.9919443,11.4101244 L11,11.5 C11,12.4931775 10.6150878,13.3721121 9.98129746,14.0007697 L10.8,14 C11.1886024,14 11.5379448,13.8971603 11.8437657,13.7073835 L11.9930297,13.6053239 L15.6,10.8 C16.2214451,10.3339162 17.1652572,10.3929049 17.6205545,10.9831099 L17.7812378,11.2200993 C18.1566642,11.837491 18.0706716,12.6933568 17.5243191,13.1148513 L17.4089108,13.1931592 L13.2535534,16.4535534 C12.9185786,16.7885282 12.4257425,16.9597525 11.8989127,16.9936669 L11.7,17 L5,16.999 L5,17.5 C5,17.7761424 4.77614237,18 4.5,18 L2.5,18 C2.22385763,18 2,17.7761424 2,17.5 L2,10.5 C2,10.2238576 2.22385763,10 2.5,10 L4.5,10 Z M4,11 L3,11 L3,17 L4,17 L4,11 Z M16.2817548,11.5488283 L16.2069703,11.5946761 L12.6,14.4 C12.1415096,14.7438678 11.6093839,14.9504891 11.0225782,14.9921597 L10.8,15 L7.5,15 L7.41012437,14.9919443 C7.17687516,14.9496084 7,14.7454599 7,14.5 C7,14.2238576 7.22385763,14 7.5,14 C8.69207331,14 9.6404236,13.2457027 9.91759106,12.1645681 L9.95407888,12 L5,12 L5,15.999 L11.7,16 C12.0085141,16 12.2950562,15.9286857 12.4972879,15.7848234 L12.5910892,15.7068408 L16.8998168,12.3255254 C17.0360265,12.1834847 17.0425312,11.8895501 16.8712535,11.6572479 C16.7705227,11.4893631 16.4912071,11.4451737 16.2817548,11.5488283 Z M11.5,4 C11.7454599,4 11.9496084,4.17687516 11.9919443,4.41012437 L12,4.5 L12,5 L12.5,5 C12.7454599,5 12.9496084,5.17687516 12.9919443,5.41012437 L13,5.5 C13,5.74545989 12.8231248,5.94960837 12.5898756,5.99194433 L12.5,6 L11.5,6 C11.1761424,6 11,6.17614237 11,6.5 C11,6.82385763 11.1761424,7 11.5,7 C12.3761424,7 13,7.62385763 13,8.5 C13,9.19750388 12.6046066,9.73511276 12.001302,9.92534453 L12,10.5 C12,10.7761424 11.7761424,11 11.5,11 C11.2545401,11 11.0503916,10.8231248 11.0080557,10.5898756 L11,10.5 L11,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.25454011 10.1768752,9.05039163 10.4101244,9.00805567 L10.5,9 L11.5,9 C11.8238576,9 12,8.82385763 12,8.5 C12,8.21212656 11.8608258,8.0409664 11.6024426,8.0064848 L11.3480811,7.9935996 C10.5526213,7.92573203 10,7.32460459 10,6.5 C10,5.80210862 10.3958328,5.26428994 10.9997037,5.07433874 L11,4.5 C11,4.22385763 11.2238576,4 11.5,4 Z M11.5,2 C14.5761424,2 17,4.42385763 17,7.5 C17,8.35144802 16.8627688,9.09249632 16.5472136,9.7236068 C16.423719,9.97059605 16.1233825,10.0707082 15.8763932,9.9472136 C15.629404,9.82371897 15.5292918,9.52338245 15.6527864,9.2763932 C15.8901723,8.80162133 16,8.20855198 16,7.5 C16,4.97614237 14.0238576,3 11.5,3 C8.97614237,3 7,4.97614237 7,7.5 C7,8.03392706 7.1232894,8.58872938 7.37434165,9.34188612 C7.46166554,9.60385778 7.32008554,9.88701776 7.05811388,9.97434165 C6.79614222,10.0616655 6.51298224,9.92008554 6.42565835,9.65811388 C6.14337726,8.81127062 6,8.16607294 6,7.5 C6,4.42385763 8.42385763,2 11.5,2 Z" fill="currentColor"></path>
</svg>`, Ip = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,6 C8.8954305,6 8,5.1045695 8,4 C8,2.8954305 8.8954305,2 10,2 C11.1045695,2 12,2.8954305 12,4 C12,5.1045695 11.1045695,6 10,6 Z M10,12 C8.8954305,12 8,11.1045695 8,10 C8,8.8954305 8.8954305,8 10,8 C11.1045695,8 12,8.8954305 12,10 C12,11.1045695 11.1045695,12 10,12 Z M10,18 C8.8954305,18 8,17.1045695 8,16 C8,14.8954305 8.8954305,14 10,14 C11.1045695,14 12,14.8954305 12,16 C12,17.1045695 11.1045695,18 10,18 Z" fill="currentColor"></path>
</svg>`, $p = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,6 C8.93333333,6 8,5.06666667 8,4 C8,2.93333333 8.93333333,2 10,2 C11.0666667,2 12,2.93333333 12,4 C12,5.06666667 11.0666667,6 10,6 Z M10,3 C9.4,3 9,3.4 9,4 C9,4.6 9.4,5 10,5 C10.6,5 11,4.6 11,4 C11,3.4 10.6,3 10,3 Z M10,18 C8.93333333,18 8,17.0666667 8,16 C8,14.9333333 8.93333333,14 10,14 C11.0666667,14 12,14.9333333 12,16 C12,17.0666667 11.0666667,18 10,18 Z M10,15 C9.4,15 9,15.4 9,16 C9,16.6 9.4,17 10,17 C10.6,17 11,16.6 11,16 C11,15.4 10.6,15 10,15 Z M10,12 C8.93333333,12 8,11.0666667 8,10 C8,8.93333333 8.93333333,8 10,8 C11.0666667,8 12,8.93333333 12,10 C12,11.0666667 11.0666667,12 10,12 Z M10,9 C9.4,9 9,9.4 9,10 C9,10.6 9.4,11 10,11 C10.6,11 11,10.6 11,10 C11,9.4 10.6,9 10,9 Z" fill="currentColor"></path>
</svg>`, Pp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" style="transform: rotate(90deg);" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,6 C8.8954305,6 8,5.1045695 8,4 C8,2.8954305 8.8954305,2 10,2 C11.1045695,2 12,2.8954305 12,4 C12,5.1045695 11.1045695,6 10,6 Z M10,12 C8.8954305,12 8,11.1045695 8,10 C8,8.8954305 8.8954305,8 10,8 C11.1045695,8 12,8.8954305 12,10 C12,11.1045695 11.1045695,12 10,12 Z M10,18 C8.8954305,18 8,17.1045695 8,16 C8,14.8954305 8.8954305,14 10,14 C11.1045695,14 12,14.8954305 12,16 C12,17.1045695 11.1045695,18 10,18 Z" fill="currentColor"></path>
</svg>`, kp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" style="transform: rotate(90deg);" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,6 C8.93333333,6 8,5.06666667 8,4 C8,2.93333333 8.93333333,2 10,2 C11.0666667,2 12,2.93333333 12,4 C12,5.06666667 11.0666667,6 10,6 Z M10,3 C9.4,3 9,3.4 9,4 C9,4.6 9.4,5 10,5 C10.6,5 11,4.6 11,4 C11,3.4 10.6,3 10,3 Z M10,18 C8.93333333,18 8,17.0666667 8,16 C8,14.9333333 8.93333333,14 10,14 C11.0666667,14 12,14.9333333 12,16 C12,17.0666667 11.0666667,18 10,18 Z M10,15 C9.4,15 9,15.4 9,16 C9,16.6 9.4,17 10,17 C10.6,17 11,16.6 11,16 C11,15.4 10.6,15 10,15 Z M10,12 C8.93333333,12 8,11.0666667 8,10 C8,8.93333333 8.93333333,8 10,8 C11.0666667,8 12,8.93333333 12,10 C12,11.0666667 11.0666667,12 10,12 Z M10,9 C9.4,9 9,9.4 9,10 C9,10.6 9.4,11 10,11 C10.6,11 11,10.6 11,10 C11,9.4 10.6,9 10,9 Z" fill="currentColor"></path>
</svg>`, Rp = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
<path fill="currentColor" d="M10.5 3a.5.5 0 0 1 .5.5v1.522A5.502 5.502 0 0 1 15.978 10H17.5a.5.5 0 1 1 0 1h-1.522A5.502 5.502 0 0 1 11 15.979L11 17.5a.5.5 0 1 1-1 0v-1.522A5.502 5.502 0 0 1 5.022 11L3.5 11a.5.5 0 1 1 0-1h1.522A5.502 5.502 0 0 1 10 5.022V3.5a.5.5 0 0 1 .5-.5zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" id="a"/>
</svg>`, Dp = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.854 3.146L12.707 5a.5.5 0 0 1-.708.708l-.999-1V10l5.293.001-.758-.757a.5.5 0 0 1 .708-.708l1.61 1.611a.5.5 0 0 1 0 .708l-1.731 1.731a.5.5 0 0 1-.708-.707l.879-.878H12.51a.51.51 0 0 1-.01 0H11v5.293l.878-.879a.5.5 0 0 1 .708.708l-1.732 1.732a.5.5 0 0 1-.708 0l-1.731-1.732a.5.5 0 0 1 .707-.708l.878.879V11H4.707l.879.878a.5.5 0 0 1-.708.708l-1.732-1.732a.5.5 0 0 1 0-.708l1.732-1.732a.5.5 0 0 1 .708.708L4.707 10H8.49a.51.51 0 0 1 .01 0l1.5-.001V4.707l-.878.879a.5.5 0 0 1-.708-.708l1.732-1.732a.5.5 0 0 1 .708 0z"/>
</svg>`, Vp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M8.26566871,11.0284956 L12.2941643,7 L9.25863044,7 C8.98248806,7 8.75863044,6.77614237 8.75863044,6.5 C8.75863044,6.22385763 8.98248806,6 9.25863044,6 L13.5012711,6 C13.7774135,6 14.0012711,6.22385763 14.0012711,6.5 L14.0012711,10.7426407 C14.0012711,11.0187831 13.7774135,11.2426407 13.5012711,11.2426407 C13.2251287,11.2426407 13.0012711,11.0187831 13.0012711,10.7426407 L13.0012711,7.70710678 L8.97197017,11.7364077 C8.99040921,11.8189814 9,11.907093 9,12 L9,17 C9,17.6 8.6,18 8,18 L3,18 C2.4,18 2,17.6 2,17 L2,12 C2,11.4 2.4,11 3,11 L8,11 C8.0936862,11 8.18249623,11.0097523 8.26566871,11.0284956 Z M8,12.019458 C7.99345802,12.0130388 7.9869776,12.0065499 7.98056747,12 L3,12 L3,17 L8,17 L8,12.019458 Z M5,8.5 L5,3 C5,2.4 5.4,2 6,2 L17,2 C17.6,2 18,2.4 18,3 L18,14 C18,14.6 17.6,15 17,15 L11.5,15 C11.2238576,15 11,14.7761424 11,14.5 C11,14.2238576 11.2238576,14 11.5,14 L17,14 L17,3 L6,3 L6,8.5 C6,8.77614237 5.77614237,9 5.5,9 C5.22385763,9 5,8.77614237 5,8.5 Z" fill="currentColor"></path>
</svg>`, Bp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9.5,3 C9.77614237,3 10,3.22385763 10,3.5 C10,3.77614237 9.77614237,4 9.5,4 L5.5,4 C4.67614237,4 4,4.67614237 4,5.5 L4,14.5 C4,15.3238576 4.67614237,16 5.5,16 L14.5,16 C15.3238576,16 16,15.3238576 16,14.5 L16,10.5 C16,10.2238576 16.2238576,10 16.5,10 C16.7761424,10 17,10.2238576 17,10.5 L17,14.5 C17,15.8761424 15.8761424,17 14.5,17 L5.5,17 C4.12385763,17 3,15.8761424 3,14.5 L3,5.5 C3,4.12385763 4.12385763,3 5.5,3 L9.5,3 Z M14.5,2 C16.4329966,2 18,3.56700338 18,5.5 C18,7.43299662 16.4329966,9 14.5,9 C12.5670034,9 11,7.43299662 11,5.5 C11,3.56700338 12.5670034,2 14.5,2 Z M14.5,3 C13.1192881,3 12,4.11928813 12,5.5 C12,6.88071187 13.1192881,8 14.5,8 C15.8807119,8 17,6.88071187 17,5.5 C17,4.11928813 15.8807119,3 14.5,3 Z" fill="currentColor"></path>
</svg>`, jp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9.81430466,3.03576165 L2.31430466,6.03576165 C2.26683824,6.05474822 2.22474812,6.07919469 2.1880343,6.10786421 L2.17352701,6.12128671 C2.0670797,6.21003882 2.00998118,6.33590532 2.00119762,6.4648006 L2.00149314,6.53892982 C2.01103051,6.66639581 2.06804458,6.79078056 2.17249317,6.87947862 L2.26689639,6.94245158 L2.31430466,6.96423835 L5,8.038 L5,14.5 C5,14.6791394 5.09550186,14.8420796 5.2461651,14.9308038 L5.32590674,14.9687126 C8.93822035,16.3104291 11.0617797,16.3104291 14.6740933,14.9687126 C14.8420231,14.9063387 14.9615149,14.7600793 14.9922283,14.5879512 L15,14.5 L15,8.038 L17.6856953,6.96423835 C18.1047682,6.79660919 18.1047682,6.20339081 17.6856953,6.03576165 L10.1856953,3.03576165 C10.0664898,2.98807945 9.93351018,2.98807945 9.81430466,3.03576165 Z M6,8.438 L9.81430466,9.96423835 C9.93351018,10.0119206 10.0664898,10.0119206 10.1856953,9.96423835 L14,8.438 L14,14.1500873 C11.0447814,15.2059756 9.22779239,15.2482111 6.36363214,14.2767939 L6,14.1500873 L6,8.438 Z M2.5,8 C2.25454011,8 2.05039163,8.17687516 2.00805567,8.41012437 L2,8.5 L2,12 C2,12.2761424 2.22385763,12.5 2.5,12.5 C2.74545989,12.5 2.94960837,12.3231248 2.99194433,12.0898756 L3,12 L3,8.5 C3,8.22385763 2.77614237,8 2.5,8 Z M10,4.03851648 L16.1537088,6.5 L10,8.96148352 L5.097,7 L9.5,7 C9.74545989,7 9.94960837,6.82312484 9.99194433,6.58987563 L10,6.5 C10,6.25454011 9.82312484,6.05039163 9.58987563,6.00805567 L9.5,6 L5.097,6 L10,4.03851648 Z" fill="currentColor"></path>
</svg>`, Fp = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.5 2a.5.5 0 010 1H3v14h14v-6.5a.5.5 0 111 0V17c0 .5523-.4477 1-1 1H3c-.5523 0-1-.4477-1-1V3c0-.5523.4477-1 1-1h6.5zM17 2c.5523 0 1 .4477 1 1v4.5a.5.5 0 11-1 0V3.763l-7.4749 7.4758a.5.5 0 01-.707-.707L16.349 3H12.5a.5.5 0 110-1H17z" fill="currentColor"/></svg>
`, Up = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M8.5,5 C8.74545989,5 8.94960837,5.17687516 8.99194433,5.41012437 L9,5.5 L9,14.5 C9,14.7454599 8.82312484,14.9496084 8.58987563,14.9919443 L8.5,15 L5.5,15 C5.25454011,15 5.05039163,14.8231248 5.00805567,14.5898756 L5,14.5 L5,5.5 C5,5.25454011 5.17687516,5.05039163 5.41012437,5.00805567 L5.5,5 L8.5,5 Z M14.5,5 C14.7454599,5 14.9496084,5.17687516 14.9919443,5.41012437 L15,5.5 L15,14.5 C15,14.7454599 14.8231248,14.9496084 14.5898756,14.9919443 L14.5,15 L11.5,15 C11.2545401,15 11.0503916,14.8231248 11.0080557,14.5898756 L11,14.5 L11,5.5 C11,5.25454011 11.1768752,5.05039163 11.4101244,5.00805567 L11.5,5 L14.5,5 Z M8,6 L6,6 L6,14 L8,14 L8,6 Z M14,6 L12,6 L12,14 L14,14 L14,6 Z" fill="currentColor"></path>
</svg>`, zp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M20,17.3741567 C20,17.6809636 19.7789168,17.9361342 19.4873668,17.989051 L19.3750261,17.9991201 L0.626136581,17.9991201 C0.158996241,17.9991201 -0.123234656,17.5174288 0.0528809344,17.1229661 C0.0303365115,17.0459478 0.0148701236,16.9643157 0.00706413417,16.879241 L0.00117324441,16.7491934 L0.00117324441,4.24992667 C0.00117324441,3.58122922 0.457982789,3.07665557 1.09982226,3.00798534 L1.25109992,3 L18.7500733,3 C19.4187708,3 19.9233444,3.45680954 19.9920147,4.09864902 L20,4.24992667 L20,17.3741567 Z M5.62584327,12.1244647 L1.92606032,16.7491934 L9.32437629,16.7491934 L5.62584327,12.1244647 Z M14.3715802,10.722047 L9.60061009,15.068042 L10.9280322,16.7491934 L18.7500733,16.7491934 L18.7500733,14.7730593 L14.3715802,10.722047 Z M18.7500733,4.24992667 L1.25109992,4.24992667 L1.24992667,15.5930112 L5.13782889,10.7341119 C5.36299865,10.4526497 5.77079335,10.4245034 6.0324881,10.6496732 L6.11385765,10.7341119 L8.80823326,14.1005988 L13.9544234,9.41262609 C14.1643023,9.22140313 14.4716851,9.19855974 14.704832,9.34344874 L14.7997063,9.41581146 L18.7489001,13.0681593 L18.7500733,4.24992667 Z" id="picture" fill="currentColor"></path>
</svg>`, Gp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M9,3.6 L9,11 L16.4,11 C16.5504271,11 16.6853389,11.0664291 16.7770004,11.1715522 C16.8704725,11.2807793 16.9165658,11.4239205 16.8946796,11.572747 C16.3541803,15.248142 13.2183421,18 9.5,18 C5.32385763,18 2,14.6761424 2,10.5 C2,6.78165786 4.75185798,3.6458197 8.427253,3.10532043 C8.70045699,3.06514338 8.95450251,3.25404902 8.99467957,3.527253 C8.998275,3.55170192 9.00003584,3.5759974 9.00006587,3.59999992 L9,3.6 Z M8,4.20486507 C5.10342912,4.89612382 3,7.47702778 3,10.5 C3,14.1238576 5.87614237,17 9.5,17 C12.5229722,17 15.1038762,14.8965709 15.7951349,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 L8,4.20486507 Z M10,2.5 C10,2.22385763 10.2238576,2 10.5,2 C14.6761424,2 18,5.32385763 18,9.5 C18,9.77614237 17.7761424,10 17.5,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 L10,2.5 Z M11,9 L16.9815915,9 C16.7433568,5.78002968 14.2199703,3.2566432 11,3.01840848 L11,9 Z" fill="currentColor"></path>
</svg>`, Wp = `<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M6.5 2C6.22386 2 6 2.22386 6 2.5V3.5C6 3.91362 6.14006 4.29716 6.42145 4.57855C6.58463 4.74174 6.78217 4.85739 7 4.92576V9.07424C6.78217 9.14261 6.58463 9.25826 6.42145 9.42145C6.14006 9.70284 6 10.0864 6 10.5V11.5C6 11.7761 6.22386 12 6.5 12H8.57644L9.5068 17.5822C9.54699 17.8233 9.75558 18 10 18C10.2444 18 10.453 17.8233 10.4932 17.5822L11.4236 12H13.5C13.7761 12 14 11.7761 14 11.5V10.5C14 10.0864 13.8599 9.70284 13.5786 9.42145C13.4154 9.25826 13.2178 9.14261 13 9.07424V4.92576C13.2178 4.85739 13.4154 4.74174 13.5786 4.57855C13.8599 4.29716 14 3.91362 14 3.5V2.5C14 2.22386 13.7761 2 13.5 2H6.5ZM11.0082 11C11.0023 10.9999 10.9964 10.9999 10.9906 11H9.0094C9.00355 10.9999 8.99768 10.9999 8.9918 11H7V10.5C7 10.3136 7.05994 10.1972 7.12855 10.1286C7.19716 10.0599 7.31362 10 7.5 10H12.5C12.6864 10 12.8028 10.0599 12.8714 10.1286C12.9401 10.1972 13 10.3136 13 10.5V11H11.0082ZM9.59023 12H10.4098L10 14.4586L9.59023 12ZM12.5 4H7.5C7.31362 4 7.19716 3.94006 7.12855 3.87145C7.05994 3.80284 7 3.68638 7 3.5V3H13V3.5C13 3.68638 12.9401 3.80284 12.8714 3.87145C12.8028 3.94006 12.6864 4 12.5 4ZM8 9V5H12V9H8Z" fill="currentColor"/>
</svg>`, qp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14.5007V5.50073C6 5.11831 6.41183 4.87746 6.74513 5.06494L14.7451 9.56494C15.085 9.75609 15.085 10.2454 14.7451 10.4365L6.74513 14.9365C6.41183 15.124 6 14.8831 6 14.5007ZM13.48 10.0007L7 6.35573V13.6447L13.48 10.0007Z" fill="currentColor"/>
</svg>
`, Yp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M11 9 15 9 15 11 11 11 11 15 9 15 9 11 5 11 5 9 9 9 9 5 11 5z" fill="currentColor"></path>
</svg>`, Kp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M17.4153188,8.75056611 C17.5464133,8.94136741 17.7050055,9.21284763 17.8910956,9.56500677 C18.0363028,9.83981485 18.0363026,10.1602021 17.8910883,10.435007 C17.7050014,10.7871595 17.5464116,11.0586351 17.4153188,11.2494339 C15.8673575,13.5024123 13.124976,15 10,15 C6.87502395,15 4.13264254,13.5024123 2.58468119,11.2494339 C2.4535867,11.0586326 2.29499446,10.7871524 2.10890444,10.4349932 C1.96369723,10.1601852 1.96369738,9.83979789 2.10891173,9.56499297 C2.2949986,9.21284054 2.45358842,8.94136492 2.58468119,8.75056611 C4.13264254,6.49758771 6.87502395,5 10,5 C13.124976,5 15.8673575,6.49758771 17.4153188,8.75056611 Z M3,10 C4.24309027,12.3649473 6.91026998,14 10,14 C13.08973,14 15.7569097,12.3649473 17,10 C15.7569097,7.63505267 13.08973,6 10,6 C6.91026998,6 4.24309027,7.63505267 3,10 Z M10,12 C8.8954305,12 8,11.1045695 8,10 C8,8.8954305 8.8954305,8 10,8 C11.1045695,8 12,8.8954305 12,10 C12,11.1045695 11.1045695,12 10,12 Z M10,11 C10.5522847,11 11,10.5522847 11,10 C11,9.44771525 10.5522847,9 10,9 C9.44771525,9 9,9.44771525 9,10 C9,10.5522847 9.44771525,11 10,11 Z" fill="currentColor"></path>
</svg>`, Xp = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3293 1.3763C17.5371 1.19445 17.5581 0.878573 17.3763 0.670755C17.1945 0.462936 16.8786 0.441877 16.6708 0.623719L12.9648 3.8664C11.7746 3.31237 10.4272 3.00001 9 3.00001C5.87502 3.00001 3.13264 4.4976 1.58468 6.75057C1.45359 6.94137 1.295 7.21285 1.10891 7.565C0.963697 7.83981 0.963697 8.16019 1.1089 8.435C1.29499 8.78716 1.45359 9.05864 1.58468 9.24944C2.23246 10.1922 3.0894 11.0028 4.09601 11.6266L0.670755 14.6237C0.462936 14.8056 0.441877 15.1214 0.623719 15.3293C0.80556 15.5371 1.12144 15.5581 1.32926 15.3763L5.03518 12.1336C6.22543 12.6876 7.57281 13 9 13C12.125 13 14.8674 11.5024 16.4153 9.24944C16.5464 9.05864 16.705 8.78717 16.8911 8.43501C17.0363 8.16021 17.0363 7.83982 16.8911 7.56501C16.705 7.21286 16.5464 6.94137 16.4153 6.75057C15.7675 5.80777 14.9106 4.99725 13.904 4.3734L17.3293 1.3763ZM13.1117 5.06668L13.904 4.3734C13.6037 4.18731 13.2902 4.01783 12.9648 3.8664L12.1314 4.59568C11.1739 4.21272 10.1144 4.00001 9 4.00001C5.91027 4.00001 3.24309 5.63506 2 8.00001C2.63534 9.20873 3.64269 10.2268 4.88833 10.9333L4.09601 11.6266C4.39627 11.8127 4.70986 11.9822 5.03518 12.1336L5.86863 11.4043C6.82612 11.7873 7.88557 12 9 12C12.0897 12 14.7569 10.365 16 8.00001C15.3647 6.79128 14.3573 5.77323 13.1117 5.06668ZM10.787 7.10082L13.1117 5.06668C12.7992 4.88944 12.4717 4.7318 12.1314 4.59568L10.1283 6.3484C9.8071 6.12859 9.41857 6.00001 9 6.00001C7.89543 6.00001 7 6.89544 7 8.00001C7 8.32341 7.07676 8.62888 7.21305 8.89921L4.88833 10.9333C5.20081 11.1106 5.52828 11.2682 5.86863 11.4043L7.87175 9.65162C8.19291 9.87143 8.58144 10 9 10C10.1046 10 11 9.10458 11 8.00001C11 7.67661 10.9232 7.37114 10.787 7.10082ZM7.87175 9.65162L10.787 7.10082C10.6341 6.79773 10.4065 6.53883 10.1283 6.3484L7.21305 8.89921C7.36587 9.20229 7.59353 9.46119 7.87175 9.65162Z" fill="#1076FB"/>
</svg>
`, Jp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M7.5,7 C5.01471863,7 3,9.01471863 3,11.5 C3,13.9852814 5.01471863,16 7.5,16 L11.5,16 C11.7761424,16 12,16.2238576 12,16.5 C12,16.7761424 11.7761424,17 11.5,17 L7.5,17 C4.46243388,17 2,14.5375661 2,11.5 C2,8.46243388 4.46243388,6 7.5,6 L16.2985012,5.99924488 L14.1591058,3.85333855 C13.9644851,3.65812555 13.9644851,3.34162274 14.1591058,3.14640975 C14.3537265,2.95119675 14.669269,2.95119675 14.8638897,3.14640975 L17.8540345,6.14565463 C18.0486552,6.34086762 18.0486552,6.65737043 17.8540345,6.85258343 L14.8638897,9.85182831 C14.669269,10.0470413 14.3537265,10.0470413 14.1591058,9.85182831 C13.9644851,9.65661531 13.9644851,9.34011251 14.1591058,9.14489951 L16.2974974,7 L7.5,7 Z" fill="currentColor"></path>
</svg>`, Qp = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M16.2651888,6.87402509 C15.0933047,4.5274741 12.6867265,3 10,3 C6.13400675,3 3,6.13400675 3,10 C3,13.8659932 6.13400675,17 10,17 C12.809282,17 15.3122748,15.3299956 16.417758,12.7998142 C16.5283176,12.5467703 16.8230764,12.431264 17.0761203,12.5418236 C17.3291641,12.6523831 17.4446705,12.9471419 17.3341109,13.2001858 C16.0708746,16.0914253 13.2103141,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C12.9528486,2 15.6097941,3.61471714 17,6.12362545 L17,4.2 C17,3.92385763 17.2238576,3.7 17.5,3.7 C17.7761424,3.7 18.0000374,3.92385763 18.0000374,4.2 L18.0000374,7.4 C18.0000374,7.41677102 17.9991743,7.43334918 17.9975613,7.44969606 C18.0008288,7.48235893 18.0009109,7.51582866 17.9975186,7.54975186 C17.9700414,7.82452379 17.7250201,8.02499579 17.4502481,7.9975186 L14.4502481,7.6975186 C14.1754762,7.6700414 13.9750042,7.42502007 14.0024814,7.15024814 C14.0299586,6.87547621 14.2749799,6.67500421 14.5497519,6.7024814 L16.2651888,6.87402509 L16.2651888,6.87402509 Z" fill="currentColor"></path>
</svg>`, ed = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0002 3C11.724 2.99998 11.5001 3.22383 11.5001 3.49997C11.5001 3.77611 11.7239 3.99998 12.0001 4L13.5001 4.00009V16.0001L12.0002 16C11.724 16 11.5001 16.2238 11.5001 16.5C11.5001 16.7761 11.7239 17 12.0001 17L16.0001 17.0001C16.2763 17.0001 16.5001 16.7763 16.5001 16.5001C16.5001 16.224 16.2763 16.0001 16.0001 16.0001H14.5001V4.00009L16.0002 4C16.2763 3.99998 16.5001 3.77611 16.5001 3.49997C16.5001 3.22383 16.2762 2.99998 16.0001 3H12.0002ZM7.47101 6.33183C7.39994 6.13284 7.21144 6 7.00014 6C6.78883 6 6.60034 6.13284 6.52927 6.33183L4.02927 13.3318C3.93639 13.5919 4.07191 13.878 4.33197 13.9709C4.59202 14.0637 4.87813 13.9282 4.97101 13.6682L5.79 11.375H8.21028L9.02927 13.6682C9.12214 13.9282 9.40825 14.0637 9.6683 13.9709C9.92836 13.878 10.0639 13.5919 9.97101 13.3318L7.47101 6.33183ZM7.00014 7.98661L7.85313 10.375H6.14714L7.00014 7.98661Z" fill="currentColor" />
</svg>
`, td = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3.73484864,6.87402509 L5.45028554,6.7024814 C5.72505747,6.67500421 5.9700788,6.87547621 5.99755599,7.15024814 C6.02503318,7.42502007 5.82456119,7.6700414 5.54978926,7.6975186 L2.54978926,7.9975186 C2.27501732,8.02499579 2.02999599,7.82452379 2.0025188,7.54975186 C1.99912648,7.51582866 1.99920862,7.48235893 2.00247607,7.44969606 C2.0008631,7.43334918 2,7.41677102 2,7.4 L2,4.2 C2,3.92385763 2.22389502,3.7 2.5000374,3.7 C2.77617977,3.7 3.0000374,3.92385763 3.0000374,4.2 L3.0000374,6.12362545 C4.39024332,3.61471714 7.04718878,2 10.0000374,2 C14.4183154,2 18.0000374,5.581722 18.0000374,10 C18.0000374,14.418278 14.4183154,18 10.0000374,18 C6.78972325,18 3.92916278,16.0914253 2.66592649,13.2001858 C2.55536693,12.9471419 2.67087327,12.6523831 2.92391712,12.5418236 C3.17696098,12.431264 3.47171979,12.5467703 3.58227936,12.7998142 C4.68776264,15.3299956 7.19075541,17 10.0000374,17 C13.8660306,17 17.0000374,13.8659932 17.0000374,10 C17.0000374,6.13400675 13.8660306,3 10.0000374,3 C7.31331094,3 4.90673274,4.5274741 3.73484864,6.87402509 L3.73484864,6.87402509 Z" fill="currentColor"></path>
</svg>`, nd = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="3.5" fill="#FE2A4B" stroke="white"/>
</svg>
`, rd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M17.836154,17.1542143 C18.0271262,17.3536741 18.0202456,17.6701818 17.8207857,17.861154 C17.6213259,18.0521262 17.3048182,18.0452456 17.113846,17.8457857 L12.7947411,13.3791651 C11.6494882,14.3880251 10.1462113,15 8.5,15 C4.91014913,15 2,12.0898509 2,8.5 C2,4.91014913 4.91014913,2 8.5,2 C12.0898509,2 15,4.91014913 15,8.5 C15,10.0834681 14.4337854,11.5346898 13.4927776,12.6622434 L17.836154,17.1542143 Z M8.5,14 C11.5375661,14 14,11.5375661 14,8.5 C14,5.46243388 11.5375661,3 8.5,3 C5.46243388,3 3,5.46243388 3,8.5 C3,11.5375661 5.46243388,14 8.5,14 Z" fill="currentColor"></path>
</svg>`, id = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3.76410469,9.0328156 L8.4179806,11.1807583 L15.3574879,4.39546232 L3.76410469,9.0328156 Z M9.38968391,11.6292368 L15.1143876,14.2714077 L16.7550277,4.42756727 L9.38968391,11.6292368 Z M8.99985248,15.2195834 L10.2698259,13.136827 L8.99985248,12.5506854 L8.99985248,15.2195834 Z M8.92675057,17.2603037 C8.66372158,17.6916713 7.99984697,17.5052348 7.99984697,16.9999998 L7.99984697,12.089147 L2.29032339,9.45397969 C1.89186614,9.27007635 1.90669589,8.69874615 2.31415714,8.53576165 L17.3033939,2.54006696 C17.3205212,2.53275596 17.3379705,2.52644669 17.3556533,2.52113816 C17.704529,2.41451002 18.0546893,2.71236055 17.9930494,3.08219949 L15.9930494,15.0821995 C15.9388149,15.4076065 15.5898552,15.5922252 15.2903234,15.4539797 L11.1838388,13.5586791 L8.92675057,17.2603037 Z" fill="currentColor"></path>
</svg>`, od = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M10,12 C8.8954305,12 8,11.1045695 8,10 C8,8.8954305 8.8954305,8 10,8 C11.1045695,8 12,8.8954305 12,10 C12,11.1045695 11.1045695,12 10,12 Z M10,11 C10.5522847,11 11,10.5522847 11,10 C11,9.44771525 10.5522847,9 10,9 C9.44771525,9 9,9.44771525 9,10 C9,10.5522847 9.44771525,11 10,11 Z M7.97468354,17.4936709 L7.97468354,15.624152 C7.21916219,15.342517 6.59458594,15.0025901 6.0842926,14.5735707 L4.48153735,15.5014817 C4.2392717,15.6417407 3.9291644,15.5587934 3.78927312,15.3163152 L2.27028578,12.6834038 C2.13069439,12.4414454 2.2134252,12.1321476 2.45517151,11.9921892 L4.05534533,11.0657728 C3.97198482,10.6702439 3.92405063,10.3098922 3.92405063,10 C3.92405063,9.69010783 3.97198482,9.32975614 4.05534533,8.9342272 L2.45517151,8.00781078 C2.2134252,7.86785239 2.13069439,7.55855464 2.27028578,7.31659623 L3.78927312,4.68368483 C3.9291644,4.44120662 4.2392717,4.35825927 4.48153735,4.49851834 L6.08096568,5.42450316 C6.63826474,4.93871498 7.2862143,4.56396487 7.97468354,4.34650788 L7.97468354,2.50632911 C7.97468354,2.22669127 8.20137481,2 8.48101266,2 L11.5189873,2 C11.7986252,2 12.0253165,2.22669127 12.0253165,2.50632911 L12.0253165,4.34650788 C12.7137857,4.56396487 13.3617353,4.93871498 13.9190343,5.42450316 L15.5184626,4.49851834 C15.7607283,4.35825927 16.0708356,4.44120662 16.2107269,4.68368483 L17.7297142,7.31659623 C17.8693056,7.55855464 17.7865748,7.86785239 17.5448285,8.00781078 L15.9446547,8.9342272 C16.0280152,9.32975614 16.0759494,9.69010783 16.0759494,10 C16.0759494,10.3098922 16.0280152,10.6702439 15.9446547,11.0657728 L17.5448285,11.9921892 C17.7865748,12.1321476 17.8693056,12.4414454 17.7297142,12.6834038 L16.2107269,15.3163152 C16.0708356,15.5587934 15.7607283,15.6417407 15.5184626,15.5014817 L13.9190343,14.5754968 C13.3617353,15.061285 12.7137857,15.4360351 12.0253165,15.6534921 L12.0253165,17.4936709 C12.0253165,17.7733087 11.7986252,18 11.5189873,18 L8.48101266,18 C8.20137481,18 7.97468354,17.7733087 7.97468354,17.4936709 Z M4.41301481,14.3710261 L5.89820948,13.5111766 C6.09673201,13.3962425 6.34772231,13.4291332 6.50992748,13.5913383 C7.0110138,14.0924247 7.70702934,14.4741106 8.64112798,14.7854768 C8.8478835,14.8543953 8.98734177,15.0478833 8.98734177,15.2658228 L8.98734177,16.9873418 L11.0126582,16.9873418 L11.0126582,15.2658228 C11.0126582,15.028507 11.1774846,14.8230319 11.4091491,14.7715509 C12.1719761,14.6020337 12.9050092,14.1764016 13.4900725,13.5913383 C13.6522777,13.4291332 13.903268,13.3962425 14.1017905,13.5111766 L15.5869852,14.3710261 L16.5999239,12.6152657 L15.1133994,11.7546462 C14.9180024,11.6415216 14.8211172,11.4126928 14.8758772,11.1936528 C14.9932457,10.7241787 15.0632911,10.3039064 15.0632911,10 C15.0632911,9.69609364 14.9932457,9.27582127 14.8758772,8.80634715 C14.8211172,8.5873072 14.9180024,8.35847836 15.1133994,8.24535378 L16.5999239,7.38473431 L15.5869852,5.62897389 L14.1017905,6.48882344 C13.903268,6.60375753 13.6522777,6.57086684 13.4900725,6.40866166 C12.9050092,5.82359837 12.1719761,5.39796626 11.4091491,5.22844914 C11.1774846,5.17696813 11.0126582,4.97149299 11.0126582,4.73417722 L11.0126582,3.01265823 L8.98734177,3.01265823 L8.98734177,4.73417722 C8.98734177,4.97149299 8.82251545,5.17696813 8.59085086,5.22844914 C7.82802386,5.39796626 7.09499077,5.82359837 6.50992748,6.40866166 C6.34772231,6.57086684 6.09673201,6.60375753 5.89820948,6.48882344 L4.41301481,5.62897389 L3.40007611,7.38473431 L4.88660064,8.24535378 C5.08199764,8.35847836 5.17888277,8.5873072 5.12412278,8.80634715 C5.00675426,9.27582127 4.93670886,9.69609364 4.93670886,10 C4.93670886,10.3039064 5.00675426,10.7241787 5.12412278,11.1936528 C5.17888277,11.4126928 5.08199764,11.6415216 4.88660064,11.7546462 L3.40007611,12.6152657 L4.41301481,14.3710261 Z" fill="currentColor"></path>
</svg>`, sd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13.1464466,4.14644661 C13.320013,3.97288026 13.5894374,3.95359511 13.7843055,4.08859116 L13.8535534,4.14644661 L16.8535534,7.14644661 C17.0488155,7.34170876 17.0488155,7.65829124 16.8535534,7.85355339 C16.679987,8.02711974 16.4105626,8.04640489 16.2156945,7.91140884 L16.1464466,7.85355339 L14,5.70710678 L14,15.5 C14,15.7761424 13.7761424,16 13.5,16 C13.2545401,16 13.0503916,15.8231248 13.0080557,15.5898756 L13,15.5 L13,5.70710678 L10.8535534,7.85355339 C10.6582912,8.04881554 10.3417088,8.04881554 10.1464466,7.85355339 C9.97288026,7.67998704 9.95359511,7.41056264 10.0885912,7.2156945 L10.1464466,7.14644661 L13.1464466,4.14644661 Z M6.5,4 C6.77614237,4 7,4.22385763 7,4.5 L7,14.2928932 L9.14644661,12.1464466 C9.34170876,11.9511845 9.65829124,11.9511845 9.85355339,12.1464466 C10.0488155,12.3417088 10.0488155,12.6582912 9.85355339,12.8535534 L6.85355339,15.8535534 C6.65829124,16.0488155 6.34170876,16.0488155 6.14644661,15.8535534 L3.14644661,12.8535534 C2.95118446,12.6582912 2.95118446,12.3417088 3.14644661,12.1464466 C3.34170876,11.9511845 3.65829124,11.9511845 3.85355339,12.1464466 L6,14.2928932 L6,4.5 C6,4.22385763 6.22385763,4 6.5,4 Z" fill="currentColor"></path>
</svg>`, ad = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g transform='translate(2 2)' fill="currentColor" fill-rule="evenodd">
        <circle fill-opacity=".3" cx="8" cy="8" r="8"/>
        <circle cx="8" cy="8" r="4"/>
    </g>
</svg>`, ld = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <g transform='translate(2 2)' fill="currentColor" fill-rule="evenodd">
        <circle fill-opacity=".2" cx="8" cy="8" r="8"/>
        <circle cx="8" cy="8" r="4"/>
    </g>
</svg>`, cd = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#E8F8EA"/>
<circle cx="16.0003" cy="16.0003" r="9.14286" fill="#1DB92C"/>
<path d="M19.7855 13.027C19.4957 12.7241 19.0228 12.7241 18.733 13.027L14.7187 17.2225L13.3589 15.0906C13.1335 14.7373 12.6708 14.6375 12.3271 14.877C11.9878 15.1134 11.9 15.5867 12.1226 15.9357L13.985 18.8555C14.2432 19.2601 14.7973 19.3197 15.1295 18.9725L19.7855 14.1062C20.0715 13.8074 20.0715 13.3258 19.7855 13.027Z" fill="white"/>
</svg>
`, ud = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M16.2651888,6.87402509 C15.0933047,4.5274741 12.6867265,3 10,3 C7.19071801,3 4.68772524,4.67000441 3.58224196,7.2001858 C3.4716824,7.45322966 3.17692359,7.568736 2.92387973,7.45817643 C2.67083587,7.34761687 2.55532953,7.05285806 2.66588909,6.7998142 C3.92912538,3.90857467 6.78968585,2 10,2 C12.9528486,2 15.6097941,3.61471714 17,6.12362545 L17,4.2 C17,3.92385763 17.2238576,3.7 17.5,3.7 C17.7761424,3.7 18.0000374,3.92385763 18.0000374,4.2 L18.0000374,7.4 C18.0000374,7.41677102 17.9991743,7.43334918 17.9975613,7.44969606 C18.0008288,7.48235893 18.0009109,7.51582866 17.9975186,7.54975186 C17.9700414,7.82452379 17.7250201,8.02499579 17.4502481,7.9975186 L14.4502481,7.6975186 C14.1754762,7.6700414 13.9750042,7.42502007 14.0024814,7.15024814 C14.0299586,6.87547621 14.2749799,6.67500421 14.5497519,6.7024814 L16.2651888,6.87402509 L16.2651888,6.87402509 Z M3.73484864,13.1260123 C4.90673274,15.4725633 7.31331094,17.0000374 10.0000374,17.0000374 C12.8093194,17.0000374 15.3123122,15.330033 16.4177954,12.7998516 C16.528355,12.5468077 16.8231138,12.4313014 17.0761577,12.541861 C17.3292015,12.6524205 17.4447079,12.9471793 17.3341483,13.2002232 C16.070912,16.0914627 13.2103515,18.0000374 10.0000374,18.0000374 C7.04718878,18.0000374 4.39024332,16.3853203 3.0000374,13.8764119 L3.0000374,15.8000374 C3.0000374,16.0761798 2.77617977,16.3000374 2.5000374,16.3000374 C2.22389502,16.3000374 2,16.0761798 2,15.8000374 L2,12.6000374 C2,12.5832664 2.0008631,12.5666882 2.00247607,12.5503413 C1.99920862,12.5176785 1.99912648,12.4842087 2.0025188,12.4502855 C2.02999599,12.1755136 2.27501732,11.9750416 2.54978926,12.0025188 L5.54978926,12.3025188 C5.82456119,12.329996 6.02503318,12.5750173 5.99755599,12.8497893 C5.9700788,13.1245612 5.72505747,13.3250332 5.45028554,13.297556 L3.73484864,13.1260123 L3.73484864,13.1260123 Z" fill="currentColor"></path>
</svg>`, fd = `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 27">
<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M1 9.901V1H13.3452V4.12551C13.6952 4.16465 14.0308 4.24858 14.3452 4.37106V0.830033C14.3452 0.563866 14.2184 0.33587 14.0208 0.189206C13.835 0.0513664 13.6104 0 13.4003 0H0.944839C0.734804 0 0.510201 0.0513664 0.324412 0.189206C0.126731 0.33587 0 0.563866 0 0.830033V10.071C0 10.3371 0.126731 10.5651 0.324412 10.7118C0.510201 10.8496 0.734804 10.901 0.944839 10.901H11.1434C10.6465 10.6584 10.2132 10.3156 9.87373 9.901H1Z" fill="#1076FB"/>
<g id="settings">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2275 10.3846V9.71318C11.9402 9.61204 11.7027 9.48996 11.5086 9.33589L10.899 9.66913C10.8069 9.7195 10.6889 9.68971 10.6357 9.60263L10.058 8.65709C10.0049 8.5702 10.0364 8.45912 10.1283 8.40886L10.7369 8.07616C10.7052 7.93412 10.687 7.80471 10.687 7.69342C10.687 7.58213 10.7052 7.45272 10.7369 7.31068L10.1283 6.97798C10.0364 6.92772 10.0049 6.81664 10.058 6.72975L10.6357 5.78421C10.6889 5.69713 10.8069 5.66734 10.899 5.71771L11.5073 6.05025C11.7193 5.87579 11.9657 5.74121 12.2275 5.66312V5.00227C12.2275 4.90184 12.3138 4.82043 12.4201 4.82043H13.5755C13.6819 4.82043 13.7681 4.90184 13.7681 5.00227V5.66312C14.0299 5.74121 14.2764 5.87579 14.4883 6.05025L15.0966 5.71771C15.1888 5.66734 15.3067 5.69713 15.3599 5.78421L15.9376 6.72975C15.9907 6.81664 15.9592 6.92772 15.8673 6.97798L15.2587 7.31068C15.2904 7.45272 15.3086 7.58213 15.3086 7.69342C15.3086 7.80471 15.2904 7.93412 15.2587 8.07616L15.8673 8.40886C15.9592 8.45912 15.9907 8.5702 15.9376 8.65709L15.3599 9.60263C15.3067 9.68971 15.1888 9.7195 15.0966 9.66913L14.4883 9.33659C14.2764 9.51104 14.0299 9.64562 13.7681 9.72372V10.3846C13.7681 10.485 13.6819 10.5664 13.5755 10.5664H12.4201C12.3138 10.5664 12.2275 10.485 12.2275 10.3846ZM12.2372 7.69328C12.2372 8.08996 12.5777 8.41153 12.9978 8.41153C13.4179 8.41153 13.7584 8.08996 13.7584 7.69328C13.7584 7.29661 13.4179 6.97504 12.9978 6.97504C12.5777 6.97504 12.2372 7.29661 12.2372 7.69328ZM13.378 7.69316C13.378 7.8915 13.2077 8.05228 12.9977 8.05228C12.7876 8.05228 12.6173 7.8915 12.6173 7.69316C12.6173 7.49482 12.7876 7.33404 12.9977 7.33404C13.2077 7.33404 13.378 7.49482 13.378 7.69316ZM11.4378 8.95432L10.8729 9.26311L10.4877 8.63258L11.0531 8.32351C11.1274 8.28288 11.1642 8.20071 11.1434 8.12204C11.0988 7.95345 11.0721 7.80252 11.0721 7.69338C11.0721 7.58424 11.0988 7.43331 11.1434 7.26471C11.1642 7.18604 11.1274 7.10387 11.0531 7.06324L10.4877 6.75417L10.8729 6.12364L11.4378 6.43243C11.5133 6.47371 11.6088 6.46189 11.6705 6.40364C11.893 6.19353 12.1718 6.04068 12.4619 5.9798C12.55 5.96131 12.6127 5.88752 12.6127 5.8023V5.18406H13.3829V5.8023C13.3829 5.88752 13.4456 5.96131 13.5337 5.9798C13.8239 6.04068 14.1027 6.19353 14.3252 6.40364C14.3869 6.46189 14.4823 6.47371 14.5578 6.43243L15.1227 6.12364L15.5079 6.75417L14.9426 7.06324C14.8682 7.10387 14.8314 7.18604 14.8522 7.26471C14.8969 7.43331 14.9235 7.58424 14.9235 7.69338C14.9235 7.80252 14.8969 7.95345 14.8522 8.12204C14.8314 8.20071 14.8682 8.28288 14.9426 8.32351L15.5079 8.63258L15.1227 9.26311L14.5578 8.95432C14.4823 8.91304 14.3869 8.92486 14.3252 8.98311C14.1027 9.19322 13.8239 9.34607 13.5337 9.40695C13.4456 9.42544 13.3829 9.49923 13.3829 9.58445V10.2027H12.6127V9.58445C12.6127 9.50619 12.5596 9.4367 12.481 9.41195C12.1257 9.30013 11.861 9.16306 11.6705 8.98311C11.6088 8.92486 11.5133 8.91304 11.4378 8.95432Z" fill="#1076FB"/>
<path d="M12.2275 9.71318H12.3275V9.64237L12.2607 9.61885L12.2275 9.71318ZM11.5086 9.33589L11.5708 9.25757L11.5188 9.21633L11.4606 9.24815L11.5086 9.33589ZM10.899 9.66913L10.947 9.75687L10.947 9.75687L10.899 9.66913ZM10.6357 9.60263L10.7211 9.55049L10.6357 9.60263ZM10.058 8.65709L9.97269 8.70923H9.97269L10.058 8.65709ZM10.1283 8.40886L10.1763 8.4966H10.1763L10.1283 8.40886ZM10.7369 8.07616L10.7849 8.16391L10.8509 8.12782L10.8345 8.05438L10.7369 8.07616ZM10.7369 7.31068L10.8345 7.33246L10.8509 7.25902L10.7849 7.22293L10.7369 7.31068ZM10.1283 6.97798L10.1763 6.89023H10.1763L10.1283 6.97798ZM10.058 6.72975L10.1434 6.78188L10.058 6.72975ZM10.6357 5.78421L10.7211 5.83634L10.6357 5.78421ZM10.899 5.71771L10.8511 5.80545V5.80545L10.899 5.71771ZM11.5073 6.05025L11.4594 6.138L11.5187 6.17043L11.5709 6.12746L11.5073 6.05025ZM12.2275 5.66312L12.2561 5.75895L12.3275 5.73765V5.66312H12.2275ZM13.7681 5.66312H13.6681V5.73765L13.7395 5.75895L13.7681 5.66312ZM14.4883 6.05025L14.4248 6.12746L14.477 6.17043L14.5363 6.138L14.4883 6.05025ZM15.0966 5.71771L15.1446 5.80545L15.0966 5.71771ZM15.3599 5.78421L15.4452 5.73207L15.4452 5.73207L15.3599 5.78421ZM15.9376 6.72975L16.0229 6.67761V6.67761L15.9376 6.72975ZM15.8673 6.97798L15.8193 6.89023H15.8193L15.8673 6.97798ZM15.2587 7.31068L15.2107 7.22293L15.1447 7.25902L15.1611 7.33246L15.2587 7.31068ZM15.2587 8.07616L15.1611 8.05438L15.1447 8.12782L15.2107 8.16391L15.2587 8.07616ZM15.8673 8.40886L15.8193 8.4966H15.8193L15.8673 8.40886ZM15.9376 8.65709L16.0229 8.70923L16.0229 8.70923L15.9376 8.65709ZM15.3599 9.60263L15.4452 9.65477L15.3599 9.60263ZM15.0966 9.66913L15.0487 9.75687L15.0966 9.66913ZM14.4883 9.33659L14.5363 9.24884L14.477 9.21641L14.4248 9.25938L14.4883 9.33659ZM13.7681 9.72372L13.7395 9.62789L13.6681 9.64919V9.72372H13.7681ZM10.8729 9.26311L10.7876 9.31525L10.8373 9.39657L10.9209 9.35086L10.8729 9.26311ZM11.4378 8.95432L11.3898 8.86658H11.3898L11.4378 8.95432ZM10.4877 8.63258L10.4397 8.54483L10.3477 8.59517L10.4024 8.68472L10.4877 8.63258ZM11.0531 8.32351L11.101 8.41125H11.101L11.0531 8.32351ZM11.1434 8.12204L11.0467 8.14764L11.0467 8.14764L11.1434 8.12204ZM11.1434 7.26471L11.0467 7.23911H11.0467L11.1434 7.26471ZM11.0531 7.06324L11.0051 7.15099H11.0051L11.0531 7.06324ZM10.4877 6.75417L10.4024 6.70204L10.3477 6.79158L10.4397 6.84192L10.4877 6.75417ZM10.8729 6.12364L10.9209 6.03589L10.8373 5.99018L10.7876 6.0715L10.8729 6.12364ZM11.4378 6.43243L11.3898 6.52018L11.4378 6.43243ZM11.6705 6.40364L11.7391 6.47635L11.6705 6.40364ZM12.4619 5.9798L12.4413 5.88193L12.4619 5.9798ZM12.6127 5.18406V5.08406H12.5127V5.18406H12.6127ZM13.3829 5.18406H13.4829V5.08406H13.3829V5.18406ZM13.5337 5.9798L13.5132 6.07767H13.5132L13.5337 5.9798ZM14.3252 6.40364L14.3938 6.33094V6.33093L14.3252 6.40364ZM14.5578 6.43243L14.6058 6.52018L14.5578 6.43243ZM15.1227 6.12364L15.208 6.0715L15.1583 5.99018L15.0747 6.03589L15.1227 6.12364ZM15.5079 6.75417L15.5559 6.84192L15.648 6.79158L15.5932 6.70204L15.5079 6.75417ZM14.9426 7.06324L14.9905 7.15099H14.9905L14.9426 7.06324ZM14.8522 7.26471L14.9489 7.23911V7.23911L14.8522 7.26471ZM14.8522 8.12204L14.9489 8.14764V8.14764L14.8522 8.12204ZM14.9426 8.32351L14.8946 8.41125L14.9426 8.32351ZM15.5079 8.63258L15.5932 8.68472L15.648 8.59517L15.5559 8.54483L15.5079 8.63258ZM15.1227 9.26311L15.0747 9.35086L15.1583 9.39657L15.208 9.31525L15.1227 9.26311ZM14.5578 8.95432L14.6058 8.86658V8.86658L14.5578 8.95432ZM14.3252 8.98311L14.3938 9.05582H14.3938L14.3252 8.98311ZM13.5337 9.40695L13.5132 9.30908H13.5132L13.5337 9.40695ZM13.3829 10.2027V10.3027H13.4829V10.2027H13.3829ZM12.6127 10.2027H12.5127V10.3027H12.6127V10.2027ZM12.481 9.41195L12.511 9.31656H12.511L12.481 9.41195ZM11.6705 8.98311L11.6018 9.05582H11.6018L11.6705 8.98311ZM12.1275 9.71318V10.3846H12.3275V9.71318H12.1275ZM11.4464 9.41421C11.6515 9.57703 11.8997 9.70381 12.1943 9.80751L12.2607 9.61885C11.9807 9.52027 11.7538 9.40289 11.5708 9.25757L11.4464 9.41421ZM10.947 9.75687L11.5566 9.42364L11.4606 9.24815L10.8511 9.58138L10.947 9.75687ZM10.5504 9.65477C10.6327 9.78951 10.8102 9.83162 10.947 9.75687L10.8511 9.58138C10.8035 9.60737 10.7452 9.58992 10.7211 9.55049L10.5504 9.65477ZM9.97269 8.70923L10.5504 9.65477L10.7211 9.55049L10.1434 8.60495L9.97269 8.70923ZM10.0804 8.32112C9.94088 8.39738 9.88832 8.57114 9.97269 8.70923L10.1434 8.60495C10.1216 8.56926 10.1319 8.52087 10.1763 8.4966L10.0804 8.32112ZM10.689 7.98842L10.0804 8.32112L10.1763 8.4966L10.7849 8.16391L10.689 7.98842ZM10.587 7.69342C10.587 7.81475 10.6068 7.952 10.6393 8.09795L10.8345 8.05438C10.8037 7.91624 10.787 7.79467 10.787 7.69342H10.587ZM10.6393 7.28889C10.6068 7.43484 10.587 7.57209 10.587 7.69342H10.787C10.787 7.59217 10.8037 7.4706 10.8345 7.33246L10.6393 7.28889ZM10.0804 7.06572L10.689 7.39842L10.7849 7.22293L10.1763 6.89023L10.0804 7.06572ZM9.97269 6.67761C9.88832 6.8157 9.94088 6.98946 10.0804 7.06572L10.1763 6.89023C10.1319 6.86597 10.1216 6.81758 10.1434 6.78188L9.97269 6.67761ZM10.5504 5.73207L9.97269 6.67761L10.1434 6.78188L10.7211 5.83634L10.5504 5.73207ZM10.947 5.62997C10.8102 5.55521 10.6327 5.59733 10.5504 5.73207L10.7211 5.83634C10.7452 5.79692 10.8035 5.77947 10.8511 5.80545L10.947 5.62997ZM11.5553 5.96251L10.947 5.62997L10.8511 5.80545L11.4594 6.138L11.5553 5.96251ZM12.199 5.56729C11.9236 5.64941 11.6654 5.7906 11.4438 5.97304L11.5709 6.12746C11.7731 5.96099 12.0078 5.83301 12.2561 5.75895L12.199 5.56729ZM12.1275 5.00227V5.66312H12.3275V5.00227H12.1275ZM12.4201 4.72043C12.264 4.72043 12.1275 4.84129 12.1275 5.00227H12.3275C12.3275 4.9624 12.3635 4.92043 12.4201 4.92043V4.72043ZM13.5755 4.72043H12.4201V4.92043H13.5755V4.72043ZM13.8681 5.00227C13.8681 4.84129 13.7316 4.72043 13.5755 4.72043V4.92043C13.6321 4.92043 13.6681 4.9624 13.6681 5.00227H13.8681ZM13.8681 5.66312V5.00227H13.6681V5.66312H13.8681ZM14.5519 5.97304C14.3302 5.7906 14.072 5.64941 13.7967 5.56729L13.7395 5.75895C13.9878 5.83301 14.2225 5.96099 14.4248 6.12746L14.5519 5.97304ZM15.0487 5.62997L14.4404 5.96251L14.5363 6.138L15.1446 5.80545L15.0487 5.62997ZM15.4452 5.73207C15.3629 5.59733 15.1854 5.55521 15.0487 5.62997L15.1446 5.80545C15.1921 5.77947 15.2505 5.79692 15.2746 5.83634L15.4452 5.73207ZM16.0229 6.67761L15.4452 5.73207L15.2746 5.83634L15.8523 6.78188L16.0229 6.67761ZM15.9153 7.06572C16.0548 6.98946 16.1073 6.8157 16.0229 6.67761L15.8523 6.78188C15.8741 6.81758 15.8637 6.86597 15.8193 6.89023L15.9153 7.06572ZM15.3067 7.39842L15.9153 7.06572L15.8193 6.89023L15.2107 7.22293L15.3067 7.39842ZM15.4086 7.69342C15.4086 7.57209 15.3889 7.43484 15.3563 7.28889L15.1611 7.33246C15.1919 7.4706 15.2086 7.59217 15.2086 7.69342H15.4086ZM15.3563 8.09795C15.3889 7.952 15.4086 7.81475 15.4086 7.69342H15.2086C15.2086 7.79467 15.1919 7.91624 15.1611 8.05438L15.3563 8.09795ZM15.9153 8.32112L15.3067 7.98842L15.2107 8.16391L15.8193 8.4966L15.9153 8.32112ZM16.0229 8.70923C16.1073 8.57114 16.0548 8.39738 15.9153 8.32112L15.8193 8.4966C15.8637 8.52087 15.8741 8.56926 15.8523 8.60495L16.0229 8.70923ZM15.4452 9.65477L16.0229 8.70923L15.8523 8.60495L15.2746 9.55049L15.4452 9.65477ZM15.0487 9.75687C15.1854 9.83162 15.3629 9.78951 15.4452 9.65477L15.2746 9.55049C15.2505 9.58992 15.1921 9.60737 15.1446 9.58138L15.0487 9.75687ZM14.4404 9.42433L15.0487 9.75687L15.1446 9.58138L14.5363 9.24884L14.4404 9.42433ZM13.7967 9.81955C14.072 9.73742 14.3302 9.59623 14.5519 9.41379L14.4248 9.25938C14.2225 9.42585 13.9878 9.55382 13.7395 9.62789L13.7967 9.81955ZM13.8681 10.3846V9.72372H13.6681V10.3846H13.8681ZM13.5755 10.6664C13.7316 10.6664 13.8681 10.5455 13.8681 10.3846H13.6681C13.6681 10.4244 13.6321 10.4664 13.5755 10.4664V10.6664ZM12.4201 10.6664H13.5755V10.4664H12.4201V10.6664ZM12.1275 10.3846C12.1275 10.5455 12.264 10.6664 12.4201 10.6664V10.4664C12.3635 10.4664 12.3275 10.4244 12.3275 10.3846H12.1275ZM12.9978 8.31153C12.6275 8.31153 12.3372 8.0294 12.3372 7.69328H12.1372C12.1372 8.15051 12.528 8.51153 12.9978 8.51153V8.31153ZM13.6584 7.69328C13.6584 8.0294 13.3681 8.31153 12.9978 8.31153V8.51153C13.4676 8.51153 13.8584 8.15051 13.8584 7.69328H13.6584ZM12.9978 7.07504C13.3681 7.07504 13.6584 7.35716 13.6584 7.69328H13.8584C13.8584 7.23605 13.4676 6.87504 12.9978 6.87504V7.07504ZM12.3372 7.69328C12.3372 7.35716 12.6275 7.07504 12.9978 7.07504V6.87504C12.528 6.87504 12.1372 7.23605 12.1372 7.69328H12.3372ZM12.9977 8.15228C13.2575 8.15228 13.478 7.95205 13.478 7.69316H13.278C13.278 7.83094 13.158 7.95228 12.9977 7.95228V8.15228ZM12.5173 7.69316C12.5173 7.95205 12.7379 8.15228 12.9977 8.15228V7.95228C12.8374 7.95228 12.7173 7.83094 12.7173 7.69316H12.5173ZM12.9977 7.23404C12.7379 7.23404 12.5173 7.43427 12.5173 7.69316H12.7173C12.7173 7.55538 12.8374 7.43404 12.9977 7.43404V7.23404ZM13.478 7.69316C13.478 7.43427 13.2575 7.23404 12.9977 7.23404V7.43404C13.158 7.43404 13.278 7.55538 13.278 7.69316H13.478ZM10.9209 9.35086L11.4858 9.04207L11.3898 8.86658L10.825 9.17537L10.9209 9.35086ZM10.4024 8.68472L10.7876 9.31525L10.9583 9.21098L10.573 8.58044L10.4024 8.68472ZM11.0051 8.23577L10.4397 8.54483L10.5357 8.72032L11.101 8.41125L11.0051 8.23577ZM11.0467 8.14764C11.0551 8.17928 11.0414 8.21593 11.0051 8.23577L11.101 8.41125C11.2134 8.34984 11.2733 8.22214 11.2401 8.09645L11.0467 8.14764ZM10.9721 7.69338C10.9721 7.81551 11.0014 7.97634 11.0467 8.14764L11.2401 8.09645C11.1961 7.93055 11.1721 7.78952 11.1721 7.69338H10.9721ZM11.0467 7.23911C11.0014 7.41041 10.9721 7.57124 10.9721 7.69338H11.1721C11.1721 7.59723 11.1961 7.4562 11.2401 7.2903L11.0467 7.23911ZM11.0051 7.15099C11.0414 7.17082 11.0551 7.20748 11.0467 7.23911L11.2401 7.2903C11.2733 7.16461 11.2134 7.03691 11.101 6.9755L11.0051 7.15099ZM10.4397 6.84192L11.0051 7.15099L11.101 6.9755L10.5357 6.66643L10.4397 6.84192ZM10.7876 6.0715L10.4024 6.70204L10.573 6.80631L10.9583 6.17578L10.7876 6.0715ZM11.4858 6.34469L10.9209 6.03589L10.825 6.21138L11.3898 6.52018L11.4858 6.34469ZM11.6018 6.33093C11.5722 6.35886 11.524 6.36558 11.4858 6.34469L11.3898 6.52018C11.5026 6.58183 11.6453 6.56493 11.7391 6.47635L11.6018 6.33093ZM12.4413 5.88193C12.1315 5.94695 11.8364 6.10937 11.6018 6.33093L11.7391 6.47635C11.9495 6.27769 12.212 6.13441 12.4824 6.07767L12.4413 5.88193ZM12.5127 5.8023C12.5127 5.83644 12.4869 5.87237 12.4413 5.88193L12.4824 6.07767C12.613 6.05026 12.7127 5.9386 12.7127 5.8023H12.5127ZM12.5127 5.18406V5.8023H12.7127V5.18406H12.5127ZM13.3829 5.08406H12.6127V5.28406H13.3829V5.08406ZM13.4829 5.8023V5.18406H13.2829V5.8023H13.4829ZM13.5543 5.88193C13.5087 5.87237 13.4829 5.83644 13.4829 5.8023H13.2829C13.2829 5.9386 13.3826 6.05026 13.5132 6.07767L13.5543 5.88193ZM14.3938 6.33093C14.1592 6.10937 13.8641 5.94695 13.5543 5.88193L13.5132 6.07767C13.7836 6.13441 14.0461 6.27769 14.2565 6.47635L14.3938 6.33093ZM14.5098 6.34469C14.4716 6.36558 14.4234 6.35886 14.3938 6.33094L14.2565 6.47635C14.3503 6.56493 14.493 6.58183 14.6058 6.52018L14.5098 6.34469ZM15.0747 6.03589L14.5098 6.34469L14.6058 6.52018L15.1706 6.21138L15.0747 6.03589ZM15.5932 6.70204L15.208 6.0715L15.0373 6.17578L15.4226 6.80631L15.5932 6.70204ZM14.9905 7.15099L15.5559 6.84192L15.4599 6.66643L14.8946 6.9755L14.9905 7.15099ZM14.9489 7.23911C14.9405 7.20748 14.9542 7.17082 14.9905 7.15099L14.8946 6.9755C14.7822 7.03691 14.7223 7.16461 14.7555 7.2903L14.9489 7.23911ZM15.0235 7.69338C15.0235 7.57124 14.9942 7.41041 14.9489 7.23911L14.7555 7.2903C14.7995 7.4562 14.8235 7.59723 14.8235 7.69338H15.0235ZM14.9489 8.14764C14.9942 7.97634 15.0235 7.81551 15.0235 7.69338H14.8235C14.8235 7.78952 14.7995 7.93055 14.7555 8.09645L14.9489 8.14764ZM14.9905 8.23577C14.9542 8.21593 14.9405 8.17928 14.9489 8.14764L14.7555 8.09645C14.7223 8.22214 14.7822 8.34984 14.8946 8.41125L14.9905 8.23577ZM15.5559 8.54483L14.9905 8.23577L14.8946 8.41125L15.4599 8.72032L15.5559 8.54483ZM15.208 9.31525L15.5932 8.68472L15.4226 8.58044L15.0373 9.21098L15.208 9.31525ZM14.5098 9.04206L15.0747 9.35086L15.1706 9.17537L14.6058 8.86658L14.5098 9.04206ZM14.3938 9.05582C14.4234 9.02789 14.4716 9.02117 14.5098 9.04207L14.6058 8.86658C14.493 8.80492 14.3503 8.82182 14.2565 8.9104L14.3938 9.05582ZM13.5543 9.50482C13.8641 9.43981 14.1592 9.27738 14.3938 9.05582L14.2565 8.9104C14.0461 9.10906 13.7836 9.25234 13.5132 9.30908L13.5543 9.50482ZM13.4829 9.58445C13.4829 9.55031 13.5087 9.51439 13.5543 9.50482L13.5132 9.30908C13.3826 9.33649 13.2829 9.44815 13.2829 9.58445H13.4829ZM13.4829 10.2027V9.58445H13.2829V10.2027H13.4829ZM12.6127 10.3027H13.3829V10.1027H12.6127V10.3027ZM12.5127 9.58445V10.2027H12.7127V9.58445H12.5127ZM12.451 9.50734C12.491 9.51994 12.5127 9.55296 12.5127 9.58445H12.7127C12.7127 9.45942 12.6283 9.35347 12.511 9.31656L12.451 9.50734ZM11.6018 9.05582C11.8075 9.25007 12.0879 9.39307 12.451 9.50734L12.511 9.31656C12.1635 9.20719 11.9145 9.07605 11.7391 8.9104L11.6018 9.05582ZM11.4858 9.04207C11.524 9.02117 11.5722 9.02789 11.6018 9.05582L11.7391 8.9104C11.6453 8.82182 11.5026 8.80492 11.3898 8.86658L11.4858 9.04207Z" fill="#1076FB"/>
</g>
<g id="Shape">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.26611 12.201H8.12579H5.26611Z" fill="#D9D9D9"/>
<path d="M5.26611 12.201H8.12579" stroke="#1076FB" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g id="Shape_2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.12585 10.401V12.0012V10.401Z" fill="#D9D9D9"/>
<path d="M8.12585 10.401V12.0012" stroke="#1076FB" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
`, pd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M17,6 C17,6.27614237 16.7761424,6.5 16.5,6.5 C16.2238576,6.5 16,6.27614237 16,6 C16,5.47614237 15.5238576,5 15,5 C14.7238576,5 14.5,4.77614237 14.5,4.5 C14.5,4.22385763 14.7238576,4 15,4 C16.0761424,4 17,4.92385763 17,6 Z M10,4 C13.8659932,4 17,7.13400675 17,11 C17,14.8659932 13.8659932,18 10,18 C6.13400675,18 3,14.8659932 3,11 C3,7.13400675 6.13400675,4 10,4 Z M10,5 C6.6862915,5 4,7.6862915 4,11 C4,14.3137085 6.6862915,17 10,17 C13.3137085,17 16,14.3137085 16,11 C16,7.6862915 13.3137085,5 10,5 Z M9,2 L11,2 C11.2761424,2 11.5,2.22385763 11.5,2.5 C11.5,2.77614237 11.2761424,3 11,3 L9,3 C8.72385763,3 8.5,2.77614237 8.5,2.5 C8.5,2.22385763 8.72385763,2 9,2 Z M9.64644661,10.6464466 L12.9464466,7.34644661 C13.1417088,7.15118446 13.4582912,7.15118446 13.6535534,7.34644661 C13.8488155,7.54170876 13.8488155,7.85829124 13.6535534,8.05355339 L10.3535534,11.3535534 C10.1582912,11.5488155 9.84170876,11.5488155 9.64644661,11.3535534 C9.45118446,11.1582912 9.45118446,10.8417088 9.64644661,10.6464466 Z" fill="currentColor"></path>
</svg>`, dd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M12.5,7 L3.70250259,7 L5.84089419,9.14489951 C6.03551489,9.34011251 6.03551489,9.65661531 5.84089419,9.85182831 C5.6462735,10.0470413 5.330731,10.0470413 5.13611031,9.85182831 L2.14596552,6.85258343 C1.95134483,6.65737043 1.95134483,6.34086762 2.14596552,6.14565463 L5.13611031,3.14640975 C5.330731,2.95119675 5.6462735,2.95119675 5.84089419,3.14640975 C6.03551489,3.34162274 6.03551489,3.65812555 5.84089419,3.85333855 L3.70149881,5.99924488 L12.5,6 C15.5375661,6 18,8.46243388 18,11.5 C18,14.5375661 15.5375661,17 12.5,17 L8.5,17 C8.22385763,17 8,16.7761424 8,16.5 C8,16.2238576 8.22385763,16 8.5,16 L12.5,16 C14.9852814,16 17,13.9852814 17,11.5 C17,9.01471863 14.9852814,7 12.5,7 Z" fill="currentColor"></path>
</svg>`, hd = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2494 2L9.71383 3.70303L8.74656 5.36289L6.78373 5.3486L2 10.0009L6.78373 14.6524L8.74568 14.6381L9.71501 16.297L16.2494 18L18 11.6466L17.0053 10.0009L18 8.35547L16.2494 2ZM8.77436 5.29237L14 4L11.0003 9H5L8.77436 5.29237ZM8.77436 14.7077L5 11H11.0003L14 16L8.77436 14.7077ZM15.6975 15L13 10.0009L15.6975 5L17 10.0009L15.6975 15Z" fill="currentColor"/>
</svg>
`, Cd = `<svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg"><path d="M8.6449.0091a.4924.4924 0 01.3894.5774L6.9325 11.3993a.4924.4924 0 11-.9668-.188L8.0675.3986A.4924.4924 0 018.645.0091zM11 1.899c2.2091 0 4 1.7909 4 4 0 2.1422-1.684 3.891-3.8004 3.9951L11 9.899H9.5a.5.5 0 110-1H11c1.6569 0 3-1.3431 3-3 0-1.5977-1.249-2.9037-2.8237-2.995L11 2.899h-.5a.5.5 0 110-1h.5zm-5.5 0a.5.5 0 010 1H4c-1.6569 0-3 1.3431-3 3 0 1.5977 1.249 2.9037 2.8237 2.995L4 8.8988h.5a.5.5 0 010 1H4c-2.2091 0-4-1.7909-4-4 0-2.1422 1.684-3.891 3.8004-3.9951L4 1.8989h1.5z" fill="currentColor" fill-rule="evenodd"/></svg>
`, vd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M3,17 L16,17 L16,14.5 C16,14.2238576 16.2238576,14 16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,17.5 C17,17.7761424 16.7761424,18 16.5,18 L2.5,18 C2.22385763,18 2,17.7761424 2,17.5 L2,14.5 C2,14.2238576 2.22385763,14 2.5,14 C2.77614237,14 3,14.2238576 3,14.5 L3,17 Z M9,3.70710678 L6.85355339,5.85355339 C6.65829124,6.04881554 6.34170876,6.04881554 6.14644661,5.85355339 C5.95118446,5.65829124 5.95118446,5.34170876 6.14644661,5.14644661 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 L12.8535534,5.14644661 C13.0488155,5.34170876 13.0488155,5.65829124 12.8535534,5.85355339 C12.6582912,6.04881554 12.3417088,6.04881554 12.1464466,5.85355339 L10,3.70710678 L10,13.5 C10,13.7761424 9.77614237,14 9.5,14 C9.22385763,14 9,13.7761424 9,13.5 L9,3.70710678 Z" fill="currentColor"></path>
</svg>`, gd = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M17.1446 8.7209a.5.5 0 01-.9364.3511c-.352-.9387-.6273-1.509-1.0558-2.1106l-.5101-.8169c-.7126-1.247-1.8771-2.0855-3.3872-2.463-1.5112-.3778-2.951-.1654-4.1306.649-1.247.7127-2.0855 1.8771-2.463 3.3872-.3556 1.4223-.1153 2.8882.6407 4.1167a.5.5 0 01-.8516.524c-.8954-1.4549-1.181-3.1966-.7593-4.8832.4417-1.7666 1.4453-3.1604 2.9005-3.9899 1.3907-.9627 3.1264-1.2188 4.9059-.774 1.7665.4417 3.1604 1.4453 4.0027 2.9201l.4829.7744c.4716.6603.7813 1.3018 1.1613 2.315zm-1.1682 5.6755a.5.5 0 01-1 0v-1.1c0-1.954-.4979-3.7558-1.524-5.435l-.513-.8221c-.4464-.8034-1.2366-1.3844-2.2067-1.564-.8405-.2521-1.7876-.0904-2.6135.4582C7.316 6.3798 6.735 7.17 6.5553 8.1401c-.2521.8405-.0904 1.7876.4451 2.5913l.5048.8078c.3276.546.4712 1.1205.4712 1.7572v1.1a.5.5 0 01-1 0v-1.1c0-.4633-.0992-.8602-.324-1.235l-.492-.7876c-.6888-1.0332-.903-2.2875-.576-3.3668.221-1.215.9879-2.258 2.0147-2.8266 1.0332-.6888 2.2874-.903 3.3667-.5759 1.2151.221 2.258.9878 2.8346 2.027l.5026.8042c1.1256 1.8419 1.6734 3.8243 1.6734 5.9607v1.1zm-2 1a.5.5 0 01-1 0v-2.1c0-1.5776-.408-3.0655-1.224-4.335l-.492-.7876c-.4809-.7213-1.3845-.9761-2.0066-.5613-.7213.4808-.9762 1.3844-.5534 2.019l.5.8c.5257.8411.776 1.8144.776 2.865v2.1a.5.5 0 01-1 0v-2.1c0-.8717-.2031-1.6617-.624-2.335l-.492-.7877c-.742-1.113-.3159-2.6237.8387-3.3934 1.1129-.742 2.6236-.3158 3.4013.851l.4966.7947c.9199 1.4309 1.3794 3.1068 1.3794 4.8703v2.1zm-4.424-6.235a.5.5 0 01.848-.53l.4978.7966c.7312 1.149 1.0782 2.4302 1.0782 3.8684v3.6a.5.5 0 01-1 0v-3.6c0-1.254-.2965-2.3489-.924-3.335l-.5-.8z" id="a"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="currentColor" fill-rule="nonzero" xlink:href="#a"/><path fill="currentColor" mask="url(#b)" d="M0 0h20v20H0z"/></g></svg>
`, Ld = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M15.8224425,12.1178459 C15.9310347,12.209564 16,12.3467281 16,12.5 L16,15 C16,15.5761424 15.5761424,16 15,16 L5,16 C4.42385763,16 4,15.5761424 4,15 L4,12.5 C4,12.3578576 4.06042014,12.2166948 4.17756453,12.1178543 C7.56380336,9.26071525 12.4361966,9.26071525 15.8224355,12.1178543 L15.8224425,12.1178459 Z M5,12.7364644 L5,15 L15,15 L15,12.7364644 C12.0554056,10.3878452 7.94459439,10.3878452 5,12.7364644 L5,12.7364644 Z M10,9 C8.34314575,9 7,7.65685425 7,6 C7,4.34314575 8.34314575,3 10,3 C11.6568542,3 13,4.34314575 13,6 C13,7.65685425 11.6568542,9 10,9 Z M10,8 C11.1045695,8 12,7.1045695 12,6 C12,4.8954305 11.1045695,4 10,4 C8.8954305,4 8,4.8954305 8,6 C8,7.1045695 8.8954305,8 10,8 Z" fill="currentColor"></path>
</svg>`, wd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M13.9519433,14.2858403 C13.9827587,14.3507551 14,14.4233641 14,14.5 L14,16 C14,16.5761424 13.5761424,17 13,17 L3,17 C2.42385763,17 2,16.5761424 2,16 L2,14.5 C2,14.3578576 2.06042014,14.2166948 2.17756453,14.1178543 C5.56380336,11.2607152 10.4361966,11.2607152 13.8224355,14.1178543 C13.8810077,14.1672745 13.9253837,14.2272754 13.9551256,14.292689 L13.9519433,14.2858403 Z M3,14.7364644 L3,16 L13,16 L13,14.7364644 C10.0554056,12.3878452 5.94459439,12.3878452 3,14.7364644 L3,14.7364644 Z M17.9506423,12.2831209 C17.982273,12.3487246 18,12.4222921 18,12.5 L18,14 C18,14.5761424 17.5761424,15 17,15 L15.5,15 C15.2238576,15 15,14.7761424 15,14.5 C15,14.2238576 15.2238576,14 15.5,14 L17,14 L17,12.7397233 C15.4275075,11.509241 13.6142551,10.9094116 11.7237826,10.9994341 C11.4479528,11.0125688 11.2137007,10.7996124 11.2005659,10.5237826 C11.1874312,10.2479528 11.4003876,10.0137007 11.6762174,10.0005659 C13.8927765,9.8950155 16.0156272,10.6298484 17.8178536,12.1140349 C17.8778387,12.1634343 17.9233585,12.2238858 17.9538921,12.2900072 L17.9506423,12.2831209 Z M12.5894427,8.99193496 C12.3177545,9.0413328 12.0574629,8.86113089 12.008065,8.58944272 C11.9586672,8.31775455 12.1388691,8.05746289 12.4105573,8.00806504 C13.3141225,7.84378047 14,7.01599723 14,6 C14,4.87614237 13.1238576,4 12,4 C11.4406096,4 11.0460413,4.1434794 10.6123475,4.4904344 C10.3967166,4.66293918 10.0820704,4.62797849 9.9095656,4.41234752 C9.73706082,4.19671656 9.77202151,3.88207037 9.98765248,3.7095656 C10.5956254,3.22318727 11.2093904,3 12,3 C13.6761424,3 15,4.32385763 15,6 C15,7.49779587 13.9699754,8.74092901 12.5894427,8.99193496 Z M8,11 C6.34314575,11 5,9.65685425 5,8 C5,6.34314575 6.34314575,5 8,5 C9.65685425,5 11,6.34314575 11,8 C11,9.65685425 9.65685425,11 8,11 Z M8,10 C9.1045695,10 10,9.1045695 10,8 C10,6.8954305 9.1045695,6 8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 Z" fill="currentColor"></path>
</svg>`, md = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M17.836154,17.1542143 C18.0271262,17.3536741 18.0202456,17.6701818 17.8207857,17.861154 C17.6213259,18.0521262 17.3048182,18.0452456 17.113846,17.8457857 L12.7947411,13.3791651 C11.6494882,14.3880251 10.1462113,15 8.5,15 C4.91014913,15 2,12.0898509 2,8.5 C2,4.91014913 4.91014913,2 8.5,2 C12.0898509,2 15,4.91014913 15,8.5 C15,10.0834681 14.4337854,11.5346898 13.4927776,12.6622434 L17.836154,17.1542143 Z M8.5,14 C11.5375661,14 14,11.5375661 14,8.5 C14,5.46243388 11.5375661,3 8.5,3 C5.46243388,3 3,5.46243388 3,8.5 C3,11.5375661 5.46243388,14 8.5,14 Z M8,8 L8,6 L9,6 L9,8 L11,8 L11,9 L9,9 L9,11 L8,11 L8,9 L6,9 L6,8 L8,8 Z" fill="currentColor"></path>
</svg>`, xd = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M17.836154,17.1542143 C18.0271262,17.3536741 18.0202456,17.6701818 17.8207857,17.861154 C17.6213259,18.0521262 17.3048182,18.0452456 17.113846,17.8457857 L12.7947411,13.3791651 C11.6494882,14.3880251 10.1462113,15 8.5,15 C4.91014913,15 2,12.0898509 2,8.5 C2,4.91014913 4.91014913,2 8.5,2 C12.0898509,2 15,4.91014913 15,8.5 C15,10.0834681 14.4337854,11.5346898 13.4927776,12.6622434 L17.836154,17.1542143 Z M8.5,14 C11.5375661,14 14,11.5375661 14,8.5 C14,5.46243388 11.5375661,3 8.5,3 C5.46243388,3 3,5.46243388 3,8.5 C3,11.5375661 5.46243388,14 8.5,14 Z M11,8 L11,9 L6,9 L6,8 L11,8 Z" fill="currentColor"></path>
</svg>`, yd = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.99976 2C2.73613 2 2.47759 2.09006 2.2837 2.28395C2.08981 2.47784 1.99976 2.73638 1.99976 3V17C1.99976 17.2636 2.08981 17.5222 2.2837 17.7161C2.47759 17.9099 2.73613 18 2.99976 18H16.9998C17.2634 18 17.5219 17.9099 17.7158 17.7161C17.9097 17.5222 17.9998 17.2636 17.9998 17V3C17.9998 2.73638 17.9097 2.47784 17.7158 2.28395C17.5219 2.09006 17.2634 2 16.9998 2H2.99976ZM2.99976 5V3H16.9998V4.5C16.9998 3.94772 16.552 3.5 15.9998 3.5C15.4475 3.5 14.9998 3.94772 14.9998 4.5C14.9998 3.94772 14.552 3.5 13.9998 3.5C13.4475 3.5 12.9998 3.94772 12.9998 4.5C12.9998 4.68214 13.0485 4.85291 13.1335 5H2.99976ZM14.866 5C14.9511 4.85291 14.9998 4.68214 14.9998 4.5C14.9998 4.68214 15.0485 4.85291 15.1335 5H14.866ZM16.9998 4.5V5H16.866C16.9511 4.85291 16.9998 4.68214 16.9998 4.5ZM2.99976 6V17H16.9998V6H2.99976Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85375 9.16966C9.04901 9.36493 9.04901 9.68151 8.85375 9.87677L7.2073 11.5232L8.85375 13.1697C9.04901 13.3649 9.04901 13.6815 8.85375 13.8768C8.65848 14.072 8.3419 14.072 8.14664 13.8768L6.14664 11.8768C5.95138 11.6815 5.95138 11.3649 6.14664 11.1697L8.14664 9.16966C8.3419 8.9744 8.65848 8.9744 8.85375 9.16966Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0003 11.5232C14.0003 11.7994 13.7764 12.0232 13.5003 12.0232H6.50025C6.22411 12.0232 6.00025 11.7994 6.00025 11.5232C6.00025 11.2471 6.22411 11.0232 6.50025 11.0232H13.5003C13.7764 11.0232 14.0003 11.2471 14.0003 11.5232Z" fill="currentColor"/>
</svg>
`, _d = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5V14.5H15V3.5H3ZM2.28395 2.78395C2.47784 2.59006 2.73638 2.5 3 2.5H15C15.2636 2.5 15.5222 2.59006 15.7161 2.78395C15.9099 2.97784 16 3.23638 16 3.5V14.5C16 14.7636 15.9099 15.0222 15.7161 15.2161C15.5222 15.4099 15.2636 15.5 15 15.5H3C2.73638 15.5 2.47784 15.4099 2.28395 15.2161C2.09006 15.0222 2 14.7636 2 14.5V3.5C2 3.23638 2.09006 2.97784 2.28395 2.78395ZM17.5003 4.99985C17.7764 4.99985 18.0003 5.22371 18.0003 5.49985V16.4998C18.0003 16.7635 17.9102 17.022 17.7164 17.2159C17.5225 17.4098 17.2639 17.4998 17.0003 17.4998H5.00031C4.72416 17.4998 4.50031 17.276 4.50031 16.9998C4.50031 16.7237 4.72416 16.4998 5.00031 16.4998H17.0003V5.49985C17.0003 5.22371 17.2242 4.99985 17.5003 4.99985ZM4.50031 5.83539C4.50031 5.55925 4.72416 5.33539 5.00031 5.33539H13.0003C13.2764 5.33539 13.5003 5.55925 13.5003 5.83539C13.5003 6.11153 13.2764 6.33539 13.0003 6.33539H5.00031C4.72416 6.33539 4.50031 6.11153 4.50031 5.83539ZM4.50031 9.07452C4.50031 8.79838 4.72416 8.57452 5.00031 8.57452H13.0003C13.2764 8.57452 13.5003 8.79838 13.5003 9.07452C13.5003 9.35067 13.2764 9.57452 13.0003 9.57452H5.00031C4.72416 9.57452 4.50031 9.35067 4.50031 9.07452ZM4.50031 12.3141C4.50031 12.038 4.72416 11.8141 5.00031 11.8141H9.00031C9.27645 11.8141 9.50031 12.038 9.50031 12.3141C9.50031 12.5903 9.27645 12.8141 9.00031 12.8141H5.00031C4.72416 12.8141 4.50031 12.5903 4.50031 12.3141Z" fill="currentColor"/>
</svg>
`, bd = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00018 2.5C5.00018 2.22386 5.22404 2 5.50018 2H7.50018C7.77633 2 8.00018 2.22386 8.00018 2.5V3.99997H12.0003V2.5C12.0003 2.22386 12.2242 2 12.5003 2H14.5003C14.7764 2 15.0003 2.22386 15.0003 2.5V3.99997H17C17.2636 3.99997 17.5222 4.09003 17.7161 4.28392C17.9099 4.47781 18 4.73635 18 4.99997V17C18 17.2636 17.9099 17.5221 17.7161 17.716C17.5222 17.9099 17.2636 18 17 18H3C2.73638 18 2.47784 17.9099 2.28395 17.716C2.09006 17.5221 2 17.2636 2 17V4.99997C2 4.73635 2.09006 4.47781 2.28395 4.28392C2.47784 4.09003 2.73638 3.99997 3 3.99997H5.00018V2.5ZM5.4946 4.99997C5.49646 4.99999 5.49832 5 5.50018 5C5.50205 5 5.50391 4.99999 5.50577 4.99997H7.4946C7.49646 4.99999 7.49832 5 7.50018 5C7.50205 5 7.50391 4.99999 7.50577 4.99997H12.4947C12.4966 4.99999 12.4984 5 12.5003 5C12.5022 5 12.504 4.99999 12.5059 4.99997H14.4947C14.4966 4.99999 14.4984 5 14.5003 5C14.5022 5 14.504 4.99999 14.5059 4.99997H17V7.00015H3V4.99997H5.4946ZM3 8.00015V17H17V8.00015H3ZM14.0003 3.99997V3H13.0003V3.99997H14.0003ZM7.00018 3.99997H6.00018V3H7.00018V3.99997ZM11.4996 10.8602V13.8602H12.4996V10.8602H11.4996ZM10.7835 10.1441C10.9774 9.95023 11.2359 9.86017 11.4996 9.86017H12.4996C12.7632 9.86017 13.0217 9.95023 13.2156 10.1441C13.4095 10.338 13.4996 10.5965 13.4996 10.8602V13.8602C13.4996 14.1238 13.4095 14.3823 13.2156 14.5762C13.0217 14.7701 12.7632 14.8602 12.4996 14.8602H11.4996C11.2359 14.8602 10.9774 14.7701 10.7835 14.5762C10.5896 14.3823 10.4996 14.1238 10.4996 13.8602V10.8602C10.4996 10.5965 10.5896 10.338 10.7835 10.1441ZM6.49982 10.3603C6.49982 10.0841 6.72367 9.86026 6.99982 9.86026H8.99982C9.27596 9.86026 9.49982 10.0841 9.49982 10.3603V14.3603C9.49982 14.6364 9.27596 14.8603 8.99982 14.8603H6.99982C6.72367 14.8603 6.49982 14.6364 6.49982 14.3603C6.49982 14.0841 6.72367 13.8603 6.99982 13.8603H8.49982V12.8601H6.99963C6.72349 12.8601 6.49963 12.6363 6.49963 12.3601C6.49963 12.084 6.72349 11.8601 6.99963 11.8601H8.49982V10.8603H6.99982C6.72367 10.8603 6.49982 10.6364 6.49982 10.3603Z" fill="currentColor"/>
</svg>
`, Md = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36718 3.42878L2.14938 3.21097C1.95411 3.01571 1.95411 2.69913 2.14938 2.50387C2.34464 2.30861 2.66122 2.30861 2.85648 2.50387L17.2927 16.9401C17.4879 17.1353 17.4879 17.4519 17.2927 17.6472C17.0974 17.8424 16.7808 17.8424 16.5856 17.6472L15.6551 16.7167C15.5467 16.8835 15.4176 17.0412 15.268 17.1898C14.7239 17.7304 14.0628 18.0007 13.2845 18.0007H10.456C10.0906 18.0007 9.74476 17.9259 9.41837 17.7764C9.09198 17.6268 8.80966 17.4136 8.57141 17.1369L4.51693 12.3549C4.41866 12.2235 4.37032 12.0806 4.37191 11.9262C4.37351 11.7718 4.43307 11.6359 4.5506 11.5184L4.65477 11.4142C4.79364 11.2753 4.9595 11.1765 5.15233 11.1177C5.34518 11.059 5.54042 11.0584 5.73806 11.1161L7.78937 11.8934V8.85097L6.5237 7.5853C6.45979 7.61495 6.38857 7.63151 6.31348 7.63151H4.80867C3.26165 7.63151 2.00098 6.36391 2.00098 4.81575C2.00098 4.31248 2.1342 3.83885 2.36718 3.42878ZM5.56991 6.63151H4.80867C3.81722 6.63151 3.00098 5.81492 3.00098 4.81575C3.00098 4.59175 3.042 4.37693 3.11683 4.17843L5.56991 6.63151ZM8.86466 9.92626V12.4043C8.86466 12.6362 8.77439 12.8171 8.59383 12.947C8.41327 13.0768 8.21136 13.1065 7.98808 13.036L5.86302 12.1962L9.42075 16.4591C9.54675 16.6116 9.70087 16.7262 9.88312 16.8027C10.0654 16.8792 10.2564 16.9174 10.456 16.9174H13.2845C13.7611 16.9174 14.1663 16.7518 14.5002 16.4207C14.6539 16.2682 14.7723 16.1002 14.8552 15.9168L8.86466 9.92626Z" fill="currentColor"/>
<path d="M16.0842 12.0488V13.6201L15.0009 12.5368V12.0488C15.0009 11.86 14.9321 11.707 14.7945 11.5899C14.6569 11.4728 14.4864 11.4142 14.2829 11.4142H13.8783L12.795 10.3309H14.2829C14.7717 10.3309 15.1941 10.495 15.5501 10.8233C15.9062 11.1515 16.0842 11.5601 16.0842 12.0488Z" fill="currentColor"/>
<path d="M11.3551 8.89101L10.2751 7.81101V7.02442C10.2751 6.30777 10.004 5.93811 9.69321 5.72075C9.45338 5.55304 9.15885 5.45598 8.86891 5.40557V6.40481L7.78891 5.32481V5.01985C7.78891 4.62062 8.11736 4.26263 8.55695 4.28589C9.04556 4.31174 9.73301 4.43071 10.3121 4.83568C10.924 5.26359 11.3551 5.97022 11.3551 7.02442V8.89101Z" fill="currentColor"/>
<path d="M4.48301 2.01891L5.46409 3H14.1933C15.1847 3 16.001 3.81659 16.001 4.81575C16.001 5.81492 15.1847 6.63151 14.1933 6.63151H13.0172C12.741 6.63151 12.5172 6.85536 12.5172 7.13151C12.5172 7.40765 12.741 7.63151 13.0172 7.63151H14.1933C15.7403 7.63151 17.001 6.36391 17.001 4.81575C17.001 3.26759 15.7403 2 14.1933 2H4.80867C4.69855 2 4.58988 2.00642 4.48301 2.01891Z" fill="currentColor"/>
</svg>
`, Ed = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3.5V14.5H15V3.5H3ZM2.28395 2.78395C2.47784 2.59006 2.73638 2.5 3 2.5H15C15.2636 2.5 15.5222 2.59006 15.7161 2.78395C15.9099 2.97784 16 3.23638 16 3.5V14.5C16 14.7636 15.9099 15.0222 15.7161 15.2161C15.5222 15.4099 15.2636 15.5 15 15.5H3C2.73638 15.5 2.47784 15.4099 2.28395 15.2161C2.09006 15.0222 2 14.7636 2 14.5V3.5C2 3.23638 2.09006 2.97784 2.28395 2.78395ZM17.5003 4.99985C17.7764 4.99985 18.0003 5.22371 18.0003 5.49985V16.4998C18.0003 16.7635 17.9102 17.022 17.7164 17.2159C17.5225 17.4098 17.2639 17.4998 17.0003 17.4998H5.00031C4.72416 17.4998 4.50031 17.276 4.50031 16.9998C4.50031 16.7237 4.72416 16.4998 5.00031 16.4998H17.0003V5.49985C17.0003 5.22371 17.2242 4.99985 17.5003 4.99985ZM7.50146 6.99982C7.50146 6.72367 7.72532 6.49982 8.00146 6.49982H10.0015C10.2776 6.49982 10.5015 6.72367 10.5015 6.99982V10.9998C10.5015 11.276 10.2776 11.4998 10.0015 11.4998H8.00146C7.72532 11.4998 7.50146 11.276 7.50146 10.9998C7.50146 10.7237 7.72532 10.4998 8.00146 10.4998H9.50146V9.49979H8.00146C7.72532 9.49979 7.50146 9.27593 7.50146 8.99979C7.50146 8.72364 7.72532 8.49979 8.00146 8.49979H9.50146V7.49982H8.00146C7.72532 7.49982 7.50146 7.27596 7.50146 6.99982Z" fill="currentColor"/>
</svg>
`, Od = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49912 16.5224C4.27836 16.4788 4.11391 16.2931 4.09733 16.0687L3.8017 12.0687C3.78135 11.7933 3.9881 11.5536 4.26349 11.5332C4.53888 11.5129 4.77863 11.7196 4.79898 11.995L4.96078 14.1842L5.14876 13.8082C5.23345 13.6389 5.40658 13.5319 5.59597 13.5319C5.78536 13.5319 5.95849 13.6389 6.04318 13.8082L6.2346 14.1911L6.40179 11.9939C6.42274 11.7186 6.66293 11.5123 6.93828 11.5333C7.21363 11.5542 7.41985 11.7944 7.3989 12.0698L7.09453 16.0698C7.07747 16.294 6.91289 16.4792 6.69229 16.5225C6.47168 16.5658 6.2493 16.4565 6.14876 16.2555L5.59597 15.1499L5.04318 16.2555C4.94255 16.4567 4.71987 16.566 4.49912 16.5224Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.89951 16.5224C8.67875 16.4788 8.5143 16.2931 8.49772 16.0687L8.20209 12.0687C8.18174 11.7933 8.38849 11.5536 8.66388 11.5332C8.93927 11.5129 9.17902 11.7196 9.19937 11.995L9.36117 14.1842L9.54915 13.8082C9.63384 13.6389 9.80697 13.5319 9.99636 13.5319C10.1857 13.5319 10.3589 13.6389 10.4436 13.8082L10.635 14.1911L10.8022 11.9939C10.8231 11.7186 11.0633 11.5123 11.3387 11.5333C11.614 11.5542 11.8202 11.7944 11.7993 12.0698L11.4949 16.0698C11.4779 16.294 11.3133 16.4792 11.0927 16.5225C10.8721 16.5658 10.6497 16.4565 10.5491 16.2555L9.99636 15.1499L9.44357 16.2555C9.34294 16.4567 9.12026 16.566 8.89951 16.5224Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2989 16.5224C13.0782 16.4788 12.9137 16.2931 12.8971 16.0687L12.6015 12.0687C12.5812 11.7933 12.7879 11.5536 13.0633 11.5332C13.3387 11.5129 13.5784 11.7196 13.5988 11.995L13.7606 14.1842L13.9486 13.8082C14.0333 13.6389 14.2064 13.5319 14.3958 13.5319C14.5852 13.5319 14.7583 13.6389 14.843 13.8082L15.0344 14.1911L15.2016 11.9939C15.2225 11.7186 15.4627 11.5123 15.7381 11.5333C16.0134 11.5542 16.2197 11.7944 16.1987 12.0698L15.8943 16.0698C15.8773 16.294 15.7127 16.4792 15.4921 16.5225C15.2715 16.5658 15.0491 16.4565 14.9486 16.2555L14.3958 15.1499L13.843 16.2555C13.7424 16.4567 13.5197 16.566 13.2989 16.5224Z" fill="currentColor"/>
<path d="M10.0002 10.703C8.62944 10.703 7.37719 10.3425 6.24349 9.62167C5.1098 8.9008 4.25046 7.93069 3.66547 6.71132C3.64874 6.6635 3.6326 6.60658 3.61706 6.54057C3.60152 6.47457 3.59375 6.40636 3.59375 6.33595C3.59375 6.26553 3.60152 6.19732 3.61706 6.13132C3.6326 6.06531 3.64874 6.00839 3.66547 5.96057C4.25046 4.7412 5.11141 3.77627 6.24834 3.06576C7.38526 2.35525 8.63589 2 10.0002 2C11.3646 2 12.6152 2.35525 13.7521 3.06576C14.8891 3.77627 15.75 4.7412 16.335 5.96057C16.3517 6.00839 16.3679 6.06531 16.3834 6.13132C16.3989 6.19732 16.4067 6.26553 16.4067 6.33595C16.4067 6.40636 16.3989 6.47457 16.3834 6.54057C16.3679 6.60658 16.3517 6.6635 16.335 6.71132C15.75 7.93069 14.8907 8.9008 13.757 9.62167C12.6233 10.3425 11.371 10.703 10.0002 10.703ZM9.99739 9.70836C11.1597 9.70836 12.2252 9.40531 13.1939 8.79921C14.1627 8.1931 14.9009 7.37202 15.4085 6.33595C14.9009 5.29987 14.1622 4.48397 13.1925 3.88823C12.2229 3.29248 11.1583 2.99461 9.99885 2.99461C8.83937 2.99461 7.77268 3.29248 6.79877 3.88823C5.82486 4.48397 5.08407 5.29987 4.5764 6.33595C5.08407 7.37202 5.82392 8.1931 6.79593 8.79921C7.76794 9.40531 8.83509 9.70836 9.99739 9.70836Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0005 7.52881C10.6507 7.52881 11.1777 7.00174 11.1777 6.35156C11.1777 5.70139 10.6507 5.17432 10.0005 5.17432C9.35031 5.17432 8.82324 5.70139 8.82324 6.35156C8.82324 7.00174 9.35031 7.52881 10.0005 7.52881ZM10.0005 8.52881C11.2029 8.52881 12.1777 7.55402 12.1777 6.35156C12.1777 5.1491 11.2029 4.17432 10.0005 4.17432C8.79803 4.17432 7.82324 5.1491 7.82324 6.35156C7.82324 7.55402 8.79803 8.52881 10.0005 8.52881Z" fill="currentColor"/>
</svg>
`, Sd = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1728 2.89586C12.4239 3.04084 12.5078 3.36329 12.3591 3.61223L8.74169 9.6697C8.59609 9.9135 8.28173 9.99525 8.0358 9.85327C7.78469 9.70829 7.70084 9.38584 7.8495 9.1369L11.4669 3.07944C11.6125 2.83563 11.9269 2.75388 12.1728 2.89586Z" fill="currentColor"/>
<path d="M4.16409 6.52443L6.08975 4.59879C6.16219 4.52749 6.20159 4.435 6.20795 4.3213C6.2143 4.2076 6.1749 4.10817 6.08975 4.023C6.0173 3.95055 5.92948 3.91432 5.82631 3.91432C5.72315 3.91432 5.62539 3.95055 5.53302 4.023L3.53301 6.04205C3.45039 6.11197 3.39255 6.18701 3.35951 6.26718C3.32646 6.34734 3.30994 6.43504 3.30994 6.53028C3.30994 6.62552 3.32646 6.71127 3.35951 6.78753C3.39255 6.8638 3.45039 6.93689 3.53301 7.0068L5.57687 9.05064C5.64212 9.1231 5.7295 9.1625 5.83902 9.16884C5.94854 9.1752 6.04673 9.1358 6.1336 9.05064C6.20604 8.96663 6.24226 8.87096 6.24226 8.76362C6.24226 8.65627 6.20604 8.56636 6.1336 8.49391L4.16409 6.52443ZM15.8358 6.52443L13.8663 8.49391C13.7938 8.55366 13.7576 8.64009 13.7576 8.75321C13.7576 8.86633 13.797 8.96548 13.8758 9.05064C13.9546 9.1358 14.046 9.17838 14.15 9.17838C14.2541 9.17838 14.345 9.1358 14.423 9.05064L16.4908 7.00063C16.5575 6.93484 16.6073 6.86185 16.6404 6.78168C16.6734 6.70152 16.6899 6.61382 16.6899 6.51858C16.6899 6.42334 16.6734 6.33759 16.6404 6.26133C16.6073 6.18506 16.5575 6.11402 16.4908 6.04822L14.423 3.99822C14.395 3.96644 14.3569 3.94038 14.3086 3.92004C14.2603 3.8997 14.212 3.88953 14.1637 3.88953C14.1154 3.88953 14.0653 3.89652 14.0135 3.9105C13.9616 3.9245 13.9153 3.95208 13.8746 3.99326C13.7966 4.08718 13.7576 4.18616 13.7576 4.29019C13.7576 4.39424 13.7938 4.48249 13.8663 4.55495L15.8358 6.52443Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1728 2.89586C12.4239 3.04084 12.5078 3.36329 12.3591 3.61223L8.74169 9.6697C8.59609 9.9135 8.28173 9.99525 8.0358 9.85327C7.78469 9.70829 7.70084 9.38584 7.8495 9.1369L11.4669 3.07944C11.6125 2.83563 11.9269 2.75388 12.1728 2.89586Z" stroke="currentColor" stroke-width="0.2"/>
<path d="M4.16409 6.52443L6.08975 4.59879C6.16219 4.52749 6.20159 4.435 6.20795 4.3213C6.2143 4.2076 6.1749 4.10817 6.08975 4.023C6.0173 3.95055 5.92948 3.91432 5.82631 3.91432C5.72315 3.91432 5.62539 3.95055 5.53302 4.023L3.53301 6.04205C3.45039 6.11197 3.39255 6.18701 3.35951 6.26718C3.32646 6.34734 3.30994 6.43504 3.30994 6.53028C3.30994 6.62552 3.32646 6.71127 3.35951 6.78753C3.39255 6.8638 3.45039 6.93689 3.53301 7.0068L5.57687 9.05064C5.64212 9.1231 5.7295 9.1625 5.83902 9.16884C5.94854 9.1752 6.04673 9.1358 6.1336 9.05064C6.20604 8.96663 6.24226 8.87096 6.24226 8.76362C6.24226 8.65627 6.20604 8.56636 6.1336 8.49391L4.16409 6.52443ZM15.8358 6.52443L13.8663 8.49391C13.7938 8.55366 13.7576 8.64009 13.7576 8.75321C13.7576 8.86633 13.797 8.96548 13.8758 9.05064C13.9546 9.1358 14.046 9.17838 14.15 9.17838C14.2541 9.17838 14.345 9.1358 14.423 9.05064L16.4908 7.00063C16.5575 6.93484 16.6073 6.86185 16.6404 6.78168C16.6734 6.70152 16.6899 6.61382 16.6899 6.51858C16.6899 6.42334 16.6734 6.33759 16.6404 6.26133C16.6073 6.18506 16.5575 6.11402 16.4908 6.04822L14.423 3.99822C14.395 3.96644 14.3569 3.94038 14.3086 3.92004C14.2603 3.8997 14.212 3.88953 14.1637 3.88953C14.1154 3.88953 14.0653 3.89652 14.0135 3.9105C13.9616 3.9245 13.9153 3.95208 13.8746 3.99326C13.7966 4.08718 13.7576 4.18616 13.7576 4.29019C13.7576 4.39424 13.7938 4.48249 13.8663 4.55495L15.8358 6.52443Z" stroke="currentColor" stroke-width="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.93886 11.5327C7.21421 11.5537 7.42044 11.7939 7.39948 12.0692L7.09511 16.0692C7.07805 16.2934 6.91348 16.4786 6.69287 16.5219C6.47226 16.5652 6.24988 16.456 6.14934 16.2549L5.59655 15.1493L5.04376 16.2549C4.94313 16.4561 4.72046 16.5654 4.4997 16.5218C4.27894 16.4782 4.1145 16.2925 4.09791 16.0681L3.80229 12.0681C3.78193 11.7927 3.98868 11.553 4.26407 11.5326C4.53946 11.5123 4.77921 11.719 4.79957 11.9944L4.96136 14.1836L5.14934 13.8077C5.23403 13.6383 5.40717 13.5313 5.59655 13.5313C5.78594 13.5313 5.95907 13.6383 6.04377 13.8077L6.23518 14.1905L6.40237 11.9933C6.42332 11.718 6.66352 11.5118 6.93886 11.5327ZM11.3393 11.5327C11.6146 11.5537 11.8208 11.7939 11.7999 12.0692L11.4955 16.0692C11.4784 16.2934 11.3139 16.4786 11.0933 16.5219C10.8727 16.5652 10.6503 16.456 10.5497 16.2549L9.99694 15.1493L9.44416 16.2549C9.34352 16.4561 9.12085 16.5654 8.90009 16.5218C8.67933 16.4782 8.51489 16.2925 8.4983 16.0681L8.20268 12.0681C8.18232 11.7927 8.38907 11.553 8.66446 11.5326C8.93986 11.5123 9.1796 11.719 9.19996 11.9944L9.36175 14.1836L9.54973 13.8077C9.63442 13.6383 9.80756 13.5313 9.99694 13.5313C10.1863 13.5313 10.3595 13.6383 10.4442 13.8077L10.6356 14.1905L10.8028 11.9933C10.8237 11.718 11.0639 11.5118 11.3393 11.5327ZM15.7387 11.5327C16.014 11.5537 16.2202 11.7939 16.1993 12.0692L15.8949 16.0692C15.8779 16.2934 15.7133 16.4786 15.4927 16.5219C15.2721 16.5652 15.0497 16.456 14.9491 16.2549L14.3964 15.1493L13.8436 16.2549C13.7429 16.4561 13.5203 16.5654 13.2995 16.5218C13.0787 16.4782 12.9143 16.2925 12.8977 16.0681L12.6021 12.0681C12.5817 11.7927 12.7885 11.553 13.0639 11.5326C13.3393 11.5123 13.579 11.719 13.5994 11.9944L13.7612 14.1836L13.9491 13.8077C14.0338 13.6383 14.207 13.5313 14.3964 13.5313C14.5857 13.5313 14.7589 13.6383 14.8436 13.8077L15.035 14.1905L15.2022 11.9933C15.2231 11.718 15.4633 11.5118 15.7387 11.5327Z" fill="currentColor"/>
</svg>
`, Td = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4.81575C3 3.81659 3.81625 3 4.80769 3H15.1923C16.1838 3 17 3.81659 17 4.81575C17 5.81492 16.1838 6.63151 15.1923 6.63151H13.8772C13.601 6.63151 13.3772 6.85536 13.3772 7.13151C13.3772 7.40765 13.601 7.63151 13.8772 7.63151H15.1923C16.7393 7.63151 18 6.36391 18 4.81575C18 3.26759 16.7393 2 15.1923 2H4.80769C3.26068 2 2 3.26759 2 4.81575C2 6.36391 3.26068 7.63151 4.80769 7.63151H6.3125C6.58864 7.63151 6.8125 7.40765 6.8125 7.13151C6.8125 6.85536 6.58864 6.63151 6.3125 6.63151H4.80769C3.81625 6.63151 3 5.81492 3 4.81575Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.28813 5.01985C8.28813 4.62062 8.61658 4.26263 9.05617 4.28589C9.54478 4.31174 10.2322 4.43071 10.8114 4.83568C11.4233 5.26359 11.8543 5.97022 11.8543 7.02442V10.3307L12.7585 10.332L12.7581 11.412L11.614 11.4116C11.1509 11.4114 10.7743 11.0363 10.7743 10.5719V7.02442C10.7743 6.30777 10.5033 5.93811 10.1924 5.72075C9.9526 5.55304 9.65807 5.45598 9.36812 5.40557V6.76514H8.28813V5.01985Z" fill="currentColor"/>
<path d="M10.9553 18.0007C10.5899 18.0007 10.244 17.9259 9.91759 17.7764C9.5912 17.6268 9.30888 17.4136 9.07063 17.1369L5.01615 12.3549C4.91788 12.2235 4.86953 12.0806 4.87113 11.9262C4.87273 11.7718 4.93229 11.6359 5.04982 11.5184L5.15399 11.4142C5.29286 11.2753 5.45872 11.1765 5.65155 11.1177C5.8444 11.059 6.03964 11.0584 6.23728 11.1161L8.28859 11.8934V5.48796C8.28859 5.33448 8.3401 5.20584 8.44313 5.10202C8.54616 4.9982 8.67383 4.94629 8.82613 4.94629C8.97844 4.94629 9.10614 4.9982 9.20924 5.10202C9.31233 5.20584 9.36388 5.33448 9.36388 5.48796V12.4043C9.36388 12.6362 9.2736 12.8171 9.09305 12.947C8.91249 13.0768 8.71058 13.1065 8.4873 13.036L6.36224 12.1962L9.91997 16.4591C10.046 16.6116 10.2001 16.7262 10.3823 16.8027C10.5646 16.8792 10.7556 16.9174 10.9553 16.9174H13.7838C14.2604 16.9174 14.6656 16.7518 14.9994 16.4207C15.3332 16.0896 15.5001 15.6857 15.5001 15.2091V12.0488C15.5001 11.86 15.4313 11.707 15.2937 11.5899C15.1561 11.4728 14.9856 11.4142 14.7822 11.4142H11.7189C11.5744 11.4142 11.4492 11.3627 11.3433 11.2596C11.2374 11.1566 11.1844 11.0289 11.1844 10.8766C11.1844 10.7243 11.2363 10.5953 11.3402 10.4895C11.444 10.3838 11.5726 10.3309 11.7261 10.3309H14.7822C15.2709 10.3309 15.6933 10.495 16.0494 10.8233C16.4054 11.1515 16.5834 11.5601 16.5834 12.0488V15.2085C16.5834 15.9888 16.3114 16.6492 15.7673 17.1898C15.2232 17.7304 14.562 18.0007 13.7838 18.0007H10.9553Z" fill="currentColor"/>
</svg>
`, Ad = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.51189 3.2C5.90463 3.2 6.223 3.53062 6.223 3.93846V9.35384C6.223 10.468 7.05544 11.3231 8.00078 11.3231C8.94612 11.3231 9.77856 10.468 9.77856 9.35384V5.2923C9.77856 5.04394 9.70472 4.89861 9.63306 4.82066C9.56425 4.7458 9.44673 4.67692 9.24523 4.67692C9.04372 4.67692 8.9262 4.7458 8.85739 4.82066C8.78573 4.89861 8.71189 5.04394 8.71189 5.2923V9.35384C8.71189 9.76168 8.39352 10.0923 8.00078 10.0923C7.60805 10.0923 7.28967 9.76168 7.28967 9.35384V5.2923C7.28967 4.72836 7.46472 4.19677 7.82862 3.80088C8.19536 3.40189 8.70006 3.2 9.24523 3.2C9.79039 3.2 10.2951 3.40189 10.6618 3.80088C11.0257 4.19677 11.2008 4.72836 11.2008 5.2923V9.35384C11.2008 11.2182 9.79322 12.8 8.00078 12.8C6.20834 12.8 4.80078 11.2182 4.80078 9.35384V3.93846C4.80078 3.53062 5.11916 3.2 5.51189 3.2Z" fill="currentColor"/>
</svg>
`;
var ht, q3;
const B7 = {
  actionAmazonEventbridge: xu,
  actionAmplitude: yu,
  actionAppfunction: _u,
  actionAppinbox: bu,
  actionEmail: Mu,
  actionExit: Eu,
  actionFacebook: Ou,
  actionGoogleAdwords: Su,
  actionMobileNative: Tu,
  actionWebInbox: Au,
  actionWebNative: Nu,
  actionInapp: Zu,
  actionMixpanel: Hu,
  actionMparticle: Iu,
  actionPush: $u,
  actionVariable: Pu,
  actionWebhook: ku,
  actionUrl: Ru,
  actionRating: Du,
  actionSMS: Vu,
  actionTwilioSegments: Bu,
  actionWebExit: ju,
  actionWebPopup: Fu,
  actionWebPush: Uu,
  actionWebhookV2: zu,
  actionWhatsapp: Gu,
  airLogo: Wu,
  alert: qu,
  alertActive: Yu,
  androidLogo: Ku,
  apiLogo: Xu,
  appleLogo: Ju,
  appVersion: Qu,
  arrowUp: ef,
  arrowDown: tf,
  arrowLeft: nf,
  arrowRight: rf,
  attributes: of,
  barChart: sf,
  boolean: af,
  // eslint-disable-line id-denylist
  drive: lf,
  calendar: cf,
  campaigns: uf,
  caretUp: ff,
  caretUpSmall: pf,
  caretDown: df,
  caretDownSmall: hf,
  caretRight: Cf,
  caretRightSmall: vf,
  certificate: gf,
  characterAlpha: Lf,
  characterNumeric: wf,
  checkMedium: mf,
  checkRegular: xf,
  checkmark: yf,
  chevronDown: _f,
  chevronLeft: bf,
  chevronRight: Mf,
  chevronUp: Ef,
  circle: Of,
  clear: Sf,
  clearFilled: Tf,
  clearFilledMedium: Af,
  clock: Nf,
  close: Zf,
  cloudDisconnect: Hf,
  confidenceIntervalsAmplitude: If,
  controlStop: $f,
  copy: Pf,
  customEvents: kf,
  delete: Rf,
  deviceAndroid: Df,
  deviceApple: Vf,
  deviceMonitor: Bf,
  devicePhone: jf,
  deviceTablet: Ff,
  doughnutChart: Uf,
  download: zf,
  dragHandle: Gf,
  edit: Wf,
  email: qf,
  engage: Yf,
  eventLimits: Kf,
  exclamationCircle: Xf,
  exclamationMedium: Jf,
  exclamationRegular: Qf,
  exclamation: ep,
  expand: tp,
  expandArea: np,
  collapseArea: rp,
  filter: ip,
  folder: op,
  geofence: sp,
  grid: ap,
  group: lp,
  helpMedium: cp,
  help: up,
  helpCenter: fp,
  handTap: pp,
  html5Logo: dp,
  home: hp,
  info: Cp,
  ibeacon: vp,
  insertValue: gp,
  integrate: Lp,
  journey: wp,
  key: mp,
  label: xp,
  lab: yp,
  lineAbsolute: _p,
  list: bp,
  listWithDetails: Mp,
  link: Ep,
  location: Op,
  lock: Sp,
  lightning: Tp,
  lightbulb: Ap,
  magnet: Np,
  messages: Zp,
  monetize: Hp,
  moreSolid: Ip,
  moreOutline: $p,
  moreSolidHorizontal: Pp,
  moreOutlineHorizontal: kp,
  moveCircleToMap: Rp,
  moveMapToCircle: Dp,
  move: Vp,
  notify: Bp,
  onboard: jp,
  openInNew: Fp,
  pause: Up,
  picture: zp,
  pie: Gp,
  pin: Wp,
  play: qp,
  plus: Yp,
  preview: Kp,
  previewHide: Xp,
  redo: Jp,
  refresh: Qp,
  rename: ed,
  revert: td,
  required: nd,
  search: rd,
  send: id,
  settings: od,
  sorting: sd,
  statusIndicator: ad,
  stepStatusIndicator: ld,
  stepStatusCheck: cd,
  sync: ud,
  systemEvents: fd,
  timewatch: pd,
  undo: dd,
  unityLogo: hd,
  unlink: Cd,
  upload: vd,
  userAttributes: gd,
  user: Ld,
  users: wd,
  zoomIn: md,
  zoomOut: xd,
  pastBehaviorSegment: yd,
  segmentCustomList: _d,
  liveSegmentDateTime: bd,
  liveSegmentInaction: Md,
  liveSegmentPageCount: Ed,
  liveSegmentPageVisit: Od,
  liveSegmentReferrerEntry: Sd,
  liveSegmentSingleAction: Td,
  clip: Ad
};
let F = ht = class extends H {
  render() {
    const t = arguments[0];
    return t("i", {
      class: W1("lp-icon", {
        clickable: this.clickable,
        circle: this.circle !== ht.Circle.NONE,
        [`lp-${this.circle}`]: this.circle !== ht.Circle.NONE
      }),
      attrs: {
        "data-icon-type": this.type
      },
      style: this.containerStyle,
      on: {
        click: this.onClick
      }
    }, [this.renderTooltip()]);
  }
  renderTooltip() {
    const t = this.$createElement, n = t("i");
    n.data = {
      class: "icon-svg-container",
      domProps: {
        innerHTML: this.svg
      }
    };
    const r = this.$slots.tooltip || this.tooltip;
    return r ? t(_1, {
      attrs: {
        placement: this.tooltipPlacement,
        offset: this.tooltipOffset
      }
    }, [n, t("p", {
      slot: "content"
    }, [r])]) : n;
  }
  get width() {
    return L3(this.size) ? this.size : this.size.width;
  }
  get height() {
    return L3(this.size) ? this.size : this.size.height;
  }
  get containerStyle() {
    return Object.assign({
      width: `${this.width}px`,
      height: `${this.height}px`
    }, this.padding !== null && {
      padding: `${this.padding}px`
    });
  }
  get svg() {
    return B7[this.type] || "";
  }
  onClick(t) {
    t && (this.stopPropagation && t.stopPropagation(), this.clickable && this.$emit(ht.EVENT_CLICK, t));
  }
};
F.EVENT_CLICK = "click";
F.DEFAULT_SIZE_NUM = 20;
F.TOOLTIP_OFFSET = 8;
L([m({
  type: String,
  required: !0,
  validator(e) {
    return B7[e] !== void 0;
  }
}), w("design:type", String)], F.prototype, "type", void 0);
L([m({
  type: String,
  required: !1,
  default() {
    return F.Circle.NONE;
  }
}), w("design:type", String)], F.prototype, "circle", void 0);
L([m({
  type: [Object, Number],
  required: !1,
  default() {
    return F.DEFAULT_SIZE_NUM;
  }
}), w("design:type", Object)], F.prototype, "size", void 0);
L([m({
  type: Number,
  required: !1,
  default: null
}), w("design:type", Object)], F.prototype, "padding", void 0);
L([m({
  type: [String, Object],
  required: !1,
  default: null
}), w("design:type", Object)], F.prototype, "tooltip", void 0);
L([m({
  type: String,
  required: !1,
  default() {
    return $.Placement.TOP;
  }
}), w("design:type", typeof (q3 = typeof $ != "undefined" && $.Placement) == "function" ? q3 : Object)], F.prototype, "tooltipPlacement", void 0);
L([m({
  type: Number,
  required: !1,
  default: F.TOOLTIP_OFFSET
}), w("design:type", Number)], F.prototype, "tooltipOffset", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], F.prototype, "stopPropagation", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !0
}), w("design:type", Boolean)], F.prototype, "clickable", void 0);
F = ht = L([f1({
  name: "Icon"
})], F);
(function(e) {
  (function(t) {
    t.ACTION_APPFUNCTION = "actionAppfunction", t.ACTION_APPINBOX = "actionAppinbox", t.ACTION_EMAIL = "actionEmail", t.ACTION_EXIT = "actionExit", t.ACTION_INAPP = "actionInapp", t.ACTION_PUSH = "actionPush", t.ACTION_RATING = "actionRating", t.ACTION_URL = "actionUrl", t.ACTION_VARIABLE = "actionVariable", t.ACTION_WEBHOOK = "actionWebhook", t.ACTION_AMPLITUDE = "actionAmplitude", t.ACTION_MIXPANEL = "actionMixpanel", t.ACTION_MPARTICLE = "actionMparticle", t.ACTION_AMAZON_EVENTBRIDGE = "actionAmazonEventbridge", t.ACTION_FACEBOOK = "actionFacebook", t.ACTION_GOOGLE_ADWORDS = "actionGoogleAdwords", t.ACTION_SMS = "actionSMS", t.ACTION_TWILIO_SEGMENTS = "actionTwilioSegments", t.ACTION_WEB_EXIT = "actionWebExit", t.ACTION_WEB_POPUP = "actionWebPopup", t.ACTION_WEB_PUSH = "actionWebPush", t.ACTION_WEBHOOK_V2 = "actionWebhookV2", t.ACTION_WHATSAPP = "actionWhatsapp", t.ACTION_MOBILE_NATIVE = "actionMobileNative", t.ACTION_WEB_NATIVE = "actionWebNative", t.ACTION_WEB_INBOX = "actionWebInbox", t.AIR_LOGO = "airLogo", t.ALERT = "alert", t.ALERT_ACTIVE = "alertActive", t.ANDROID_LOGO = "androidLogo", t.API_LOGO = "apiLogo", t.APPLE_LOGO = "appleLogo", t.APP_VERSION = "appVersion", t.ARROW_UP = "arrowUp", t.ARROW_DOWN = "arrowDown", t.ARROW_LEFT = "arrowLeft", t.ARROW_RIGHT = "arrowRight", t.ATTRIBUTES = "attributes", t.BAR_CHART = "barChart", t.BOOLEAN = "boolean", t.DRIVE = "drive", t.CALENDAR = "calendar", t.CAMPAIGNS = "campaigns", t.CARET_UP = "caretUp", t.CARET_UP_SMALL = "caretUpSmall", t.CARET_DOWN = "caretDown", t.CARET_DOWN_SMALL = "caretDownSmall", t.CARET_RIGHT = "caretRight", t.CARET_RIGHT_SMALL = "caretRightSmall", t.CERTIFICATE = "certificate", t.CHARACTER_ALPHA = "characterAlpha", t.CHARACTER_NUMERIC = "characterNumeric", t.CHECK_MEDIUM = "checkMedium", t.CHECK_REGULAR = "checkRegular", t.CHECKMARK = "checkmark", t.CHEVRON_DOWN = "chevronDown", t.CHEVRON_LEFT = "chevronLeft", t.CHEVRON_RIGHT = "chevronRight", t.CHEVRON_UP = "chevronUp", t.CIRCLE = "circle", t.CLEAR = "clear", t.CLEAR_FILLED = "clearFilled", t.CLEAR_FILLED_MEDIUM = "clearFilledMedium", t.CLOCK = "clock", t.CLOSE = "close", t.CLOUD_DISCONNECT = "cloudDisconnect", t.CONFIDENCE_INTERVALS_AMPLITUDE = "confidenceIntervalsAmplitude", t.CONTROL_STOP = "controlStop", t.COPY = "copy", t.CUSTOM_EVENTS = "customEvents", t.DELETE = "delete", t.DEVICE_ANDROID = "deviceAndroid", t.DEVICE_APPLE = "deviceApple", t.DEVICE_MONITOR = "deviceMonitor", t.DEVICE_PHONE = "devicePhone", t.DEVICE_TABLET = "deviceTablet", t.DOUGHNUT_CHART = "doughnutChart", t.DOWNLOAD = "download", t.DRAG_HANDLE = "dragHandle", t.EDIT = "edit", t.EMAIL = "email", t.ENGAGE = "engage", t.EVENT_LIMITS = "eventLimits", t.EXCLAMATION_CIRCLE = "exclamationCircle", t.EXCLAMATION_MEDIUM = "exclamationMedium", t.EXCLAMATION_REGULAR = "exclamationRegular", t.EXCLAMATION = "exclamation", t.EXPAND = "expand", t.EXPAND_AREA = "expandArea", t.COLLAPSE_AREA = "collapseArea", t.FILTER = "filter", t.FOLDER = "folder", t.GEOFENCE = "geofence", t.GRID = "grid", t.GROUP = "group", t.HELP_MEDIUM = "helpMedium", t.HELP = "help", t.HELP_CENTER = "helpCenter", t.HAND_TAP = "handTap", t.HOME = "home", t.HTML5_LOGO = "html5Logo", t.IBEACON = "ibeacon", t.INFO = "info", t.INSERT_VALUE = "insertValue", t.INTEGRATE = "integrate", t.JOURNEY = "journey", t.KEY = "key", t.LABEL = "label", t.LAB = "lab", t.LINE_ABSOLUTE = "lineAbsolute", t.LINK = "link", t.LIST = "list", t.LIST_WITH_DETAILS = "listWithDetails", t.LOCATION = "location", t.LOCK = "lock", t.LIGHTNING = "lightning", t.LIGHTBULB = "lightbulb", t.MAGNET = "magnet", t.MESSAGES = "messages", t.MONETIZE = "monetize", t.MORE_SOLID = "moreSolid", t.MORE_SOLID_HORIZONTAL = "moreSolidHorizontal", t.MORE_OUTLINE = "moreOutline", t.MORE_OUTLINE_HORIZONTAL = "moreOutlineHorizontal", t.MOVE_CIRCLE_TO_MAP = "moveCircleToMap", t.MOVE_MAP_TO_CIRCLE = "moveMapToCircle", t.MOVE = "move", t.NOTIFY = "notify", t.ONBOARD = "onboard", t.OPEN_IN_NEW = "openInNew", t.PAUSE = "pause", t.PICTURE = "picture", t.PIE_CHART = "pie", t.PIN = "pin", t.PLAY = "play", t.PLUS = "plus", t.PREVIEW = "preview", t.PREVIEW_HIDE = "previewHide", t.REDO = "redo", t.REFRESH = "refresh", t.RENAME = "rename", t.REVERT = "revert", t.REQUIRED = "required", t.SEARCH = "search", t.SEND = "send", t.SETTINGS = "settings", t.SORTING = "sorting", t.STATUS_INDICATOR = "statusIndicator", t.STEP_STATUS_INDICATOR = "stepStatusIndicator", t.STEP_STATUS_CHECK = "stepStatusCheck", t.SYNC = "sync", t.SYSTEM_EVENTS = "systemEvents", t.TIMEWATCH = "timewatch", t.UNDO = "undo", t.UNITY_LOGO = "unityLogo", t.UNLINK = "unlink", t.UPLOAD = "upload", t.USER_ATTRIBUTES = "userAttributes", t.USER = "user", t.USERS = "users", t.ZOOM_IN = "zoomIn", t.ZOOM_OUT = "zoomOut", t.PAST_BEHAVIOR_SEGMENT = "pastBehaviorSegment", t.SEGMENT_CUSTOM_LIST = "segmentCustomList", t.LIVE_SEGMENT_DATE_TIME = "liveSegmentDateTime", t.LIVE_SEGMENT_INACTION = "liveSegmentInaction", t.LIVE_SEGMENT_PAGE_COUNT = "liveSegmentPageCount", t.LIVE_SEGMENT_PAGE_VISIT = "liveSegmentPageVisit", t.LIVE_SEGMENT_REFERRER_ENTRY = "liveSegmentReferrerEntry", t.LIVE_SEGMENT_SINGLE_ACTION = "liveSegmentSingleAction", t.CLIP = "clip";
  })(e.Type || (e.Type = {})), function(t) {
    t.NONE = "none", t.INFO = "info", t.INFO_COMPLETE = "info-complete", t.WARNING = "warning", t.DANGER = "danger", t.SUCCESS = "success", t.LIGHT = "light", t.HELP = "help";
  }(e.Circle || (e.Circle = {}));
})(F || (F = {}));
var Nd = function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
};
let E2 = class extends H {
  render() {
    const t = arguments[0];
    return t("div", {
      class: "page-header"
    }, [t("span", {
      class: "text-label"
    }, ["Customise Web-Page"]), t(F, {
      class: "close-icon",
      attrs: {
        type: F.Type.CLOSE,
        size: 24
      },
      on: {
        click: this.emitClick
      }
    })]);
  }
  emitClick() {
    this.$emit("close");
  }
};
E2 = Nd([f1({
  name: "PageHeader"
})], E2);
const Zd = E2;
var Hd = /^(attrs|props|on|nativeOn|class|style|hook)$/, Id = function(t) {
  return t.reduce(function(n, r) {
    var i, o, s, a, l;
    for (s in r)
      if (i = n[s], o = r[s], i && Hd.test(s))
        if (s === "class" && (typeof i == "string" && (l = i, n[s] = i = {}, i[l] = !0), typeof o == "string" && (l = o, r[s] = o = {}, o[l] = !0)), s === "on" || s === "nativeOn" || s === "hook")
          for (a in o)
            i[a] = $d(i[a], o[a]);
        else if (Array.isArray(i))
          n[s] = i.concat(o);
        else if (Array.isArray(o))
          n[s] = [i].concat(o);
        else
          for (a in o)
            i[a] = o[a];
      else
        n[s] = r[s];
    return n;
  }, {});
};
function $d(e, t) {
  return function() {
    e && e.apply(this, arguments), t && t.apply(this, arguments);
  };
}
const Pd = /* @__PURE__ */ $e(Id);
let re = class extends H {
  render() {
    const t = arguments[0];
    var n;
    return t("span", {
      class: `lp-badge ${this.color} ${this.letterSpacing ? "lp-letter-spacing" : ""}`
    }, [(n = this.$slots.default) !== null && n !== void 0 ? n : this.text]);
  }
};
L([m({
  type: [String, Number],
  required: !1
}), w("design:type", Object)], re.prototype, "text", void 0);
L([m({
  type: String,
  required: !1,
  default: () => re.Color.PRIMARY
}), w("design:type", String)], re.prototype, "color", void 0);
L([m({
  type: Boolean,
  required: !1
}), w("design:type", Boolean)], re.prototype, "letterSpacing", void 0);
re = L([f1({
  name: "Badge"
})], re);
(function(e) {
  (function(t) {
    t.PRIMARY = "primary", t.PRIMARY_LIGHT = "primary-light", t.GREY = "grey", t.GREY_LIGHT = "grey-light", t.GREY_DARK = "grey-dark", t.BLACK = "black", t.BLACK_LIGHT = "black-light", t.GREEN = "green", t.GREEN_LIGHT = "green-light", t.RED = "red", t.RED_LIGHT = "red-light", t.PINK = "pink", t.PINK_LIGHT = "pink-light", t.PLUM = "plum", t.PLUM_LIGHT = "plum-light", t.ORANGE = "orange", t.ORANGE_LIGHT = "orange-light", t.CYAN = "cyan", t.CYAN_LIGHT = "cyan-light", t.YELLOW = "yellow", t.YELLOW_LIGHT = "yellow-light";
  })(e.Color || (e.Color = {}));
})(re || (re = {}));
var J1, Y3, K3;
let P = J1 = class extends H {
  render() {
    const t = arguments[0];
    if (!this.hasText && !this.hasIcon)
      throw new Error('Either set "text" or "icon" property, or both.');
    const n = this.to && !this.disabled, r = n ? "router-link" : "button", i = {
      click: this.handleClick,
      mouseover: this.emitMouseOver,
      mouseleave: this.emitMouseLeave
    };
    return t(r, Pd([{
      attrs: {
        to: this.to,
        type: this.buttonElementType,
        disabled: this.disabled || this.loading
      },
      class: this.classNames
    }, {
      [n ? "nativeOn" : "on"]: i
    }]), [this.renderContent(), this.loading && t("div", {
      class: "loading-spinner"
    })]);
  }
  renderContent() {
    const t = this.$createElement;
    return this.tooltip ? t(_1, {
      attrs: {
        placement: this.tooltipPlacement,
        offset: 6
      }
    }, [this.renderButtonContent(), t("p", {
      slot: "content"
    }, [this.tooltip])]) : this.renderButtonContent();
  }
  get buttonElementType() {
    return this.type === J1.Type.SUBMIT ? "submit" : "button";
  }
  get classNames() {
    return W1("lp-button", `color-${this.color}`, this.appearance, this.disabled ? "disabled" : "enabled", {
      "has-tooltip": this.hasTooltip,
      "icon-only": !this.hasText,
      inline: this.inline,
      loading: this.loading,
      "with-indicator": this.dotIndicator !== null,
      small: this.size === J1.Size.SMALL,
      "not-bold": this.notBold
    });
  }
  renderButtonContent() {
    const t = this.$createElement, n = this.hasIcon ? t(F, {
      attrs: {
        type: this.icon,
        stopPropagation: !1,
        size: this.iconSize
      },
      class: "icon"
    }) : null, r = this.iconPlacement === J1.IconPlacement.RIGHT, i = this.hasText ? t("span", {
      class: W1("text", {
        "align-left": this.alignTextLeft
      }, {
        "align-right": this.hasIcon && !r
      })
    }, [this.text]) : null, o = this.badgePlacement === J1.BadgePlacement.RIGHT, s = this.hasBadge ? t(re, {
      class: W1("badge", {
        "badge-right": o
      }),
      attrs: {
        text: this.badge
      }
    }) : null, a = this.dotIndicator ? t("div", {
      class: `btn-dot-indicator indicator-${this.dotIndicator}`
    }) : null;
    let l = r ? [s, i, n] : [s, n, i];
    if (o) {
      const [c, ...u] = l;
      l = [...u, c];
    }
    return t("div", {
      class: W1("lp-btn-content", {
        reverse: r
      })
    }, [a, l, this.hasFileChooser && t("input", {
      attrs: {
        type: "file",
        multiple: this.multiple,
        disabled: this.disabled,
        title: "",
        accept: this.acceptFileTypes
      },
      class: "btn-file-input",
      on: {
        change: this.onSelectFile
      }
    })]);
  }
  get hasFileChooser() {
    return this.type === J1.Type.FILE;
  }
  get hasText() {
    return !dt(this.text);
  }
  get hasIcon() {
    return !dt(this.icon);
  }
  get hasBadge() {
    return !dt(this.badge);
  }
  get hasTooltip() {
    return !dt(this.tooltip);
  }
  handleClick(t) {
    this.preventDefault && (t == null || t.preventDefault()), this.stopPropagation && (t == null || t.stopPropagation()), this.$emit(J1.EVENT_CLICK, t);
  }
  emitMouseOver() {
    this.$emit("mouseOver");
  }
  emitMouseLeave() {
    this.$emit("mouseLeave");
  }
  onSelectFile(t) {
    var n, r;
    const i = t.target, o = (r = this.multiple ? i == null ? void 0 : i.files : (n = i == null ? void 0 : i.files) === null || n === void 0 ? void 0 : n[0]) !== null && r !== void 0 ? r : null;
    this.$emit(J1.EVENT_FILE, o), i.value = "";
  }
};
P.EVENT_CLICK = "click";
P.EVENT_FILE = "file";
P.ALLOWED_FILE_TYPES = [".png", ".jpg", ".jpeg", ".gif"];
L([m({
  type: String,
  required: !1,
  default: "button",
  validator(e) {
    return se(P.Type).indexOf(e) > -1;
  }
}), w("design:type", String)], P.prototype, "type", void 0);
L([m({
  type: String,
  required: !1,
  default: "light",
  validator(e) {
    return se(P.Color).indexOf(e) > -1;
  }
}), w("design:type", String)], P.prototype, "color", void 0);
L([m({
  type: String,
  required: !1,
  default: "normal",
  validator(e) {
    return se(P.Appearance).indexOf(e) > -1;
  }
}), w("design:type", String)], P.prototype, "appearance", void 0);
L([m({
  type: String,
  required: !1,
  validator(e) {
    return e.split(",").every((t) => P.ALLOWED_FILE_TYPES.includes(t.trim()));
  }
}), w("design:type", Object)], P.prototype, "acceptFileTypes", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "disabled", void 0);
L([m({
  type: [String, Object],
  required: !1,
  default: null
}), w("design:type", Object)], P.prototype, "text", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "alignTextLeft", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", typeof (Y3 = typeof F != "undefined" && F.Type) == "function" ? Y3 : Object)], P.prototype, "icon", void 0);
L([m({
  type: String,
  required: !1,
  default: () => P.IconPlacement.LEFT
}), w("design:type", String)], P.prototype, "iconPlacement", void 0);
L([m({
  type: String,
  required: !1,
  default: () => P.BadgePlacement.LEFT
}), w("design:type", String)], P.prototype, "badgePlacement", void 0);
L([m({
  type: Number,
  required: !1,
  default: void 0
}), w("design:type", Number)], P.prototype, "iconSize", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], P.prototype, "tooltip", void 0);
L([m({
  type: String,
  required: !1,
  default: () => $.Placement.BOTTOM
}), w("design:type", typeof (K3 = typeof $ != "undefined" && $.Placement) == "function" ? K3 : Object)], P.prototype, "tooltipPlacement", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], P.prototype, "badge", void 0);
L([m({
  type: String,
  required: !1,
  default: null,
  validator(e) {
    return se(P.Color).indexOf(e) > -1;
  }
}), w("design:type", Object)], P.prototype, "dotIndicator", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "preventDefault", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "stopPropagation", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "inline", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "loading", void 0);
L([m({
  type: [Object, String],
  required: !1,
  default: null
}), w("design:type", Object)], P.prototype, "to", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "multiple", void 0);
L([m({
  type: String,
  required: !1,
  default() {
    return P.Size.NORMAL;
  }
}), w("design:type", String)], P.prototype, "size", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], P.prototype, "notBold", void 0);
P = J1 = L([f1({
  name: "Button"
})], P);
(function(e) {
  (function(t) {
    t.LIGHT = "light", t.DANGER = "danger", t.WARNING = "warning", t.INDICATOR = "indicator", t.PURPLE = "purple", t.PRIMARY = "primary", t.SECONDARY = "secondary", t.SUCCESS = "success", t.TRANSPARENT = "transparent", t.SELECT = "select", t.HIGHLIGHT_PRIMARY = "highlight-primary", t.HIGHLIGHT_DANGER = "highlight-danger", t.HIGHLIGHT_DRAFT = "highlight-draft";
  })(e.Color || (e.Color = {})), function(t) {
    t.NORMAL = "normal", t.OUTLINE = "outline", t.LIGHTEN = "lighten";
  }(e.Appearance || (e.Appearance = {})), function(t) {
    t.LEFT = "left", t.RIGHT = "right";
  }(e.IconPlacement || (e.IconPlacement = {})), function(t) {
    t.LEFT = "left", t.RIGHT = "right";
  }(e.BadgePlacement || (e.BadgePlacement = {})), function(t) {
    t.BUTTON = "button", t.SUBMIT = "submit", t.FILE = "file";
  }(e.Type || (e.Type = {})), function(t) {
    t.NORMAL = "normal", t.SMALL = "small";
  }(e.Size || (e.Size = {}));
})(P || (P = {}));
var j7 = function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, kd = function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
};
let L5 = class extends H {
  constructor() {
    super(...arguments), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  render() {
    const t = arguments[0];
    return t("div", {
      class: "page-control"
    }, [t("div", {
      class: "url-edit"
    }, [t("div", {
      class: "url-label"
    }, [this.url]), t(F, {
      class: "icon-blue",
      attrs: {
        type: F.Type.EDIT,
        size: 16
      },
      on: {
        click: this.emitEdit
      }
    })]), t("div", {
      class: "control-option"
    }, [t("div", {
      class: "preview-container",
      on: {
        click: this.emitPreview
      }
    }, [t(F, {
      class: "icon-blue",
      attrs: {
        type: F.Type.PREVIEW,
        size: 16
      }
    }), t("div", {
      class: "preview-label"
    }, ["Preview"])]), t(P, {
      attrs: {
        type: P.Type.BUTTON,
        color: P.Color.PRIMARY,
        text: "Save"
      },
      on: {
        click: this.emitSave
      }
    })])]);
  }
  emitEdit() {
    this.$emit("edit");
  }
  emitPreview() {
    this.$emit("preview");
  }
  emitSave() {
    this.$emit("save");
  }
};
j7([m({
  type: String,
  required: !1,
  default: ""
}), kd("design:type", String)], L5.prototype, "url", void 0);
L5 = j7([f1({
  name: "PageControls"
})], L5);
const Rd = L5;
let Le = class extends H {
  render() {
    const t = arguments[0];
    return t("div", {
      class: W1("lp-toggle", {
        active: this.active,
        disabled: this.disabled
      }),
      on: {
        click: this.emitToggle,
        mousedown: this.onMousedown
      }
    }, [t("div", {
      class: W1("flex-container", {
        reverse: this.reverseText
      })
    }, [this.text && t("div", {
      class: "label"
    }, [this.text]), t("div", {
      class: "track"
    }, [t("div", {
      class: "dot"
    })])])]);
  }
  emitToggle(t) {
    this.stopPropagation && t.stopPropagation(), this.disabled || this.$emit("toggle", !this.active);
  }
  onMousedown(t) {
    this.stopPropagation && t.stopPropagation();
  }
};
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], Le.prototype, "text", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], Le.prototype, "active", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], Le.prototype, "disabled", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], Le.prototype, "stopPropagation", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], Le.prototype, "reverseText", void 0);
Le = L([f1({
  name: "Toggle"
})], Le);
var vt = /* @__PURE__ */ ((e) => (e.PRIMARY = "#1076FB", e.WHITE = "#FFFFFF", e.BLACK = "#191919", e.GREEN = "#1DB92C", e.RED = "#FE2A4B", e.BLUE = "#1076FB", e.YELLOW = "#FFC100", e.ORANGE = "#FF801D", e.PINK = "#F874A4", e.VIOLET = "#814CB5", e.CYAN = "#33B5E0", e.COM01 = "#348afb", e.COM02 = "#7ccfeb", e.COM03 = "#f874a4", e.COM04 = "#814cb5", e.COM05 = "#ffc226", e.COM06 = "#5cab62", e.LIGHT02 = "#F6F9FB", e.LIGHT10 = "#E1E4E5", e.DARK30 = "#B2B7B9", e.DARK70 = "#4A4C4C", e.DARK90 = "#191919", e))(vt || {}), F7 = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SMALL = 2] = "SMALL", e[e.REGULAR = 4] = "REGULAR", e[e.MEDIUM = 8] = "MEDIUM", e[e.CIRCLE = 1e4] = "CIRCLE", e))(F7 || {}), Kt = /* @__PURE__ */ ((e) => (e.YELLOW = "#ffc226", e.TEAL = "#8dd5ed", e.DARK_TEAL = "#409eb0", e.BLUE = "#348afb", e.PINK = "#f874a4", e.PURPLE = "#814cb5", e))(Kt || {}), Dd = Object.defineProperty, Vd = Object.getOwnPropertyDescriptor, Bd = (e, t, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Vd(t, n) : t, o = e.length - 1, s; o >= 0; o--)
    (s = e[o]) && (i = (r ? s(t, n, i) : s(i)) || i);
  return r && i && Dd(t, n, i), i;
};
let O2 = class extends H {
  constructor() {
    super(...arguments), this.resizeDebounce = 50, this.immediateResize = !0;
  }
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  onResize() {
  }
  created() {
    this.debouncedResize = x7(this.onResize, this.resizeDebounce);
  }
  mounted() {
    window.addEventListener("resize", this.debouncedResize), this.immediateResize && this.$nextTick(() => this.onResize());
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.debouncedResize);
  }
};
O2 = Bd([f1({
  name: "Resize"
})], O2);
var X3;
let ie = class extends B8(O2) {
  constructor() {
    super(...arguments), this.isTextOverflowing = !1;
  }
  onResize() {
    requestAnimationFrame(() => {
      this.$refs.title && (this.isTextOverflowing = this.$refs.title.scrollWidth > this.$refs.title.clientWidth);
    });
  }
  mounted() {
    this.onResize();
  }
  render() {
    const t = arguments[0], n = t("div", {
      ref: "title",
      class: "overflowable-text"
    }, [this.text, this.renderDescription()]), r = this.renderTooltipMessage();
    return r ? t(_1, {
      attrs: {
        text: r,
        placement: this.tooltipPlacement
      }
    }, [n]) : n;
  }
  renderTooltipMessage() {
    const t = this.$createElement;
    return this.tooltip ? !this.isTextOverflowing || !this.text ? this.tooltip : t("div", {
      slot: "content"
    }, [t("div", {
      class: "overflowable-text-tooltip-text"
    }, [this.text]), t("div", {
      class: "overflowable-text-tooltip-separator"
    }), t("div", [this.tooltip])]) : this.isTextOverflowing ? this.text : "";
  }
  renderDescription() {
    const t = this.$createElement;
    return this.description ? t("div", {
      class: "overflowable-subtitle"
    }, [this.description]) : null;
  }
};
L([m({
  type: [String, Number],
  required: !1,
  default: ""
}), w("design:type", Object)], ie.prototype, "text", void 0);
L([m({
  type: String,
  required: !1,
  default: ""
}), w("design:type", String)], ie.prototype, "description", void 0);
L([m({
  type: String,
  required: !1,
  default: ""
}), w("design:type", String)], ie.prototype, "tooltip", void 0);
L([m({
  type: String,
  required: !1,
  validator: (e) => se($.Placement).indexOf(e) > -1,
  default: () => $.Placement.TOP
}), w("design:type", typeof (X3 = typeof $ != "undefined" && $.Placement) == "function" ? X3 : Object)], ie.prototype, "tooltipPlacement", void 0);
L([et("text"), w("design:type", Function), w("design:paramtypes", []), w("design:returntype", void 0)], ie.prototype, "onResize", null);
ie = L([f1({
  name: "OverflowableText"
})], ie);
var Z1, J3, Q3;
let X = Z1 = class extends H {
  get thumbnailStyle() {
    return Object.assign(Object.assign(Object.assign({
      width: `${this.size}px`,
      minWidth: `${this.size}px`
    }, this.$slots[Z1.SLOT_IMAGE] ? {
      height: `${this.size}px`
    } : {
      minHeight: `${this.size}px`
    }), !this.$slots[Z1.SLOT_IMAGE] && {
      // do not apply background color when displaying images
      backgroundColor: this.disabled ? vt.LIGHT10 : this.hovered ? this.color : this.computedBackgroundColor
    }), {
      color: this.disabled ? vt.DARK30 : this.hovered ? vt.WHITE : this.color,
      borderRadius: this.borderRadius ? `${this.borderRadius}px` : this.size <= 20 ? "4px" : "8px"
    });
  }
  get computedBackgroundColor() {
    return this.backgroundColor ? `${this.backgroundColor}${this.transparentizeBackgroundColor ? Z1.ALPHA : ""}` : `${this.color}${Z1.ALPHA}`;
  }
  get detailsStyle() {
    return {
      minHeight: `${this.size}px`
    };
  }
  get hasDetails() {
    return !!(this.text || this.subText);
  }
  get thumbnailImageClasses() {
    return W1("lp-thumbnail-image", {
      "lp-thumbnail-outline": this.showOutline
    });
  }
  render() {
    const t = arguments[0];
    return this.hasDetails ? t("div", {
      class: "lp-thumbnail",
      on: {
        click: () => {
          this.thumbnailClick();
        }
      }
    }, [this.renderThumbnail(), t("div", {
      class: "lp-thumbnail-details",
      style: this.detailsStyle
    }, [this.text && t(ie, {
      class: "lp-thumbnail-title",
      attrs: {
        text: this.text
      }
    }), this.$slots[Z1.SLOT_ACTIONS] && t("div", {
      class: "lp-thumbnail-actions"
    }, [this.$slots[Z1.SLOT_ACTIONS]]), this.subText && t(ie, {
      class: "lp-thumbnail-subtitle",
      attrs: {
        text: this.subText
      }
    })])]) : this.renderThumbnail();
  }
  renderThumbnail() {
    const t = this.$createElement;
    return this.loading ? t("div", {
      class: "thumbnail-loading-placeholder",
      style: this.thumbnailStyle
    }) : this.$slots[Z1.SLOT_IMAGE] ? this.renderThumbnailImage() : this.letters ? this.renderThumbnailLetters() : this.renderThumbnailIcon();
  }
  renderThumbnailLetters() {
    const t = this.$createElement;
    return t("div", {
      class: "lp-thumbnail-letters",
      style: this.thumbnailStyle
    }, [this.letters]);
  }
  renderThumbnailImage() {
    const t = this.$createElement;
    return t("div", {
      class: this.thumbnailImageClasses,
      style: this.thumbnailStyle
    }, [this.$slots[Z1.SLOT_IMAGE]]);
  }
  renderThumbnailIcon() {
    const t = this.$createElement;
    return t("div", {
      class: "lp-thumbnail-icon",
      style: this.thumbnailStyle
    }, [t(F, {
      attrs: {
        padding: (this.size - F.DEFAULT_SIZE_NUM) / 2,
        size: this.size,
        type: this.hovered && this.hoverIcon || this.icon,
        tooltip: this.tooltip,
        tooltipPlacement: this.tooltipPlacement,
        tooltipOffset: this.tooltipOffset,
        clickable: this.clickable
      },
      on: {
        click: this.thumbnailClick
      }
    })]);
  }
  thumbnailClick() {
    this.clickable && this.$emit(Z1.EVENT_CLICK);
  }
};
X.EVENT_CLICK = "click";
X.TRANSPARENTIZE_PERCENTAGE = 0.1;
X.ALPHA = Math.round(256 * Z1.TRANSPARENTIZE_PERCENTAGE).toString(16);
X.TOOLTIP_OFFSET = 16;
X.SLOT_IMAGE = "image";
X.SLOT_ACTIONS = "actions";
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "loading", void 0);
L([m({
  type: String,
  required: !0,
  validator: i4(Object.values(F.Type))
}), w("design:type", typeof (J3 = typeof F != "undefined" && F.Type) == "function" ? J3 : Object)], X.prototype, "icon", void 0);
L([m({
  type: String,
  required: !1,
  validator: jd
}), w("design:type", String)], X.prototype, "letters", void 0);
L([m({
  type: String,
  required: !1,
  default: vt.DARK30,
  validator: U7
}), w("design:type", String)], X.prototype, "color", void 0);
L([m({
  type: String,
  required: !1,
  default: null,
  validator: U7
}), w("design:type", Object)], X.prototype, "backgroundColor", void 0);
L([m({
  type: Number,
  required: !1,
  validator: i4(Object.values(F7).filter((e) => typeof e == "number"))
}), w("design:type", Number)], X.prototype, "borderRadius", void 0);
L([m({
  type: String,
  required: !1,
  validator: i4(Object.values(F.Type)),
  default: null
}), w("design:type", Object)], X.prototype, "hoverIcon", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], X.prototype, "text", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], X.prototype, "subText", void 0);
L([m({
  type: Number,
  required: !1,
  default: 40
}), w("design:type", Number)], X.prototype, "size", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "hovered", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "clickable", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "transparentizeBackgroundColor", void 0);
L([m({
  type: [String, Object],
  required: !1,
  default: null
}), w("design:type", Object)], X.prototype, "tooltip", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "disabled", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], X.prototype, "showOutline", void 0);
L([m({
  type: String,
  required: !1,
  default() {
    return $.Placement.TOP;
  }
}), w("design:type", typeof (Q3 = typeof $ != "undefined" && $.Placement) == "function" ? Q3 : Object)], X.prototype, "tooltipPlacement", void 0);
L([m({
  type: Number,
  required: !1,
  default: X.TOOLTIP_OFFSET
}), w("design:type", Number)], X.prototype, "tooltipOffset", void 0);
X = Z1 = L([f1({
  name: "Thumbnail"
})], X);
function jd(e) {
  return /^[a-zA-Z]{1,2}$/.test(e);
}
function U7(e) {
  return /^#[A-Fa-f0-9]{6}$/.test(e);
}
var S2, e0, t0;
let N1 = S2 = class extends H {
  render() {
    const t = arguments[0];
    return t("div", {
      class: "lp-placeholder-pane"
    }, [this.renderPlaceholderThumbnail(), t("div", {
      class: "placeholder-pane-text"
    }, [this.text]), t("div", {
      class: "placeholder-pane-sub-text"
    }, [this.subText]), this.renderPlaceholderAction()]);
  }
  renderPlaceholderThumbnail() {
    const t = this.$createElement;
    return this.$slots.icon ? this.$slots.icon : this.icon ? t(X, {
      class: "placeholder-pane-thumbnail",
      attrs: {
        size: 48,
        icon: this.icon,
        color: this.iconColor,
        hovered: this.iconColorInverted
      }
    }) : null;
  }
  renderPlaceholderAction() {
    const t = this.$createElement;
    return this.$slots.action ? this.$slots.action : this.actionText ? t(P, {
      class: "placeholder-pane-action",
      attrs: {
        text: this.actionText,
        disabled: this.actionDisabled,
        color: this.actionColor,
        to: this.actionLink,
        stopPropagation: !0
      },
      on: {
        click: this.onActionClicked
      }
    }) : null;
  }
  onActionClicked() {
    this.actionText !== void 0 && this.$emit(S2.EVENT_CLICK);
  }
};
N1.EVENT_CLICK = "click";
L([m({
  type: String,
  required: !0
}), w("design:type", String)], N1.prototype, "text", void 0);
L([m({
  type: String,
  required: !0
}), w("design:type", String)], N1.prototype, "subText", void 0);
L([m({
  type: String,
  required: !1
}), w("design:type", typeof (e0 = typeof F != "undefined" && F.Type) == "function" ? e0 : Object)], N1.prototype, "icon", void 0);
L([m({
  type: String,
  required: !1,
  default: Kt.DARK_TEAL
}), w("design:type", typeof (t0 = typeof Kt != "undefined" && Kt) == "function" ? t0 : Object)], N1.prototype, "iconColor", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], N1.prototype, "iconColorInverted", void 0);
L([m({
  type: String,
  required: !1,
  default: null
}), w("design:type", Object)], N1.prototype, "actionText", void 0);
L([m({
  type: String,
  required: !1,
  default: P.Color.LIGHT
}), w("design:type", Object)], N1.prototype, "actionColor", void 0);
L([m({
  type: Boolean,
  required: !1,
  default: !1
}), w("design:type", Boolean)], N1.prototype, "actionDisabled", void 0);
L([m({
  type: [Object, String],
  required: !1,
  default: null
}), w("design:type", Object)], N1.prototype, "actionLink", void 0);
N1 = S2 = L([f1({
  name: "PlaceholderPane"
})], N1);
var c4 = function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, z7 = function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
};
let Mt = class extends H {
  constructor() {
    super(...arguments), Object.defineProperty(this, "variantName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "selectorInfo", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "interactiveMode", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    });
  }
  render() {
    const t = arguments[0];
    return t("div", {
      class: "sidebar"
    }, [t("div", {
      class: "menu-options"
    }, [this.variantName && t("div", {
      class: "variant"
    }, [t("div", ["Variant:"]), t("div", {
      class: "variant-name"
    }, [this.variantName])]), t("div", {
      class: "interactive"
    }, [t("div", {
      class: "label"
    }, [t("div", ["Interactive Mode"]), t(_1, {
      attrs: {
        text: "Message",
        showArrow: !0
      }
    }, [t(F, {
      attrs: {
        type: F.Type.HELP_CENTER,
        size: 14
      }
    })])]), t(Le, {
      attrs: {
        active: this.interactiveMode
      },
      on: {
        toggle: this.handleToggle
      }
    })])]), t("div", {
      class: "form"
    }, [this.renderForm()])]);
  }
  handleToggle(t) {
    this.interactiveMode = t, this.$emit("toggle", this.interactiveMode);
  }
  renderForm() {
    const t = this.$createElement;
    switch (this.selectorInfo.type) {
      case "text":
        break;
      case "image":
        break;
      case "button":
        break;
      default:
        return t("div", [t(N1, {
          attrs: {
            text: "Properties Panel",
            subText: "Select an element on the page to edit properties"
          }
        })]);
    }
    return null;
  }
};
c4([m({
  type: String,
  required: !1,
  default: "A"
}), z7("design:type", String)], Mt.prototype, "variantName", void 0);
c4([m({
  type: Object,
  required: !1,
  default: {}
}), z7("design:type", Object)], Mt.prototype, "selectorInfo", void 0);
Mt = c4([f1({
  name: "SideBar"
})], Mt);
const Fd = Mt;
let w5 = class extends H {
  render() {
    const t = arguments[0];
    return t(V7, {
      class: "lp-portal-target",
      attrs: {
        name: this.name || g5.TARGET_A,
        multiple: !0
      }
    });
  }
};
L([m({
  type: String,
  required: !1,
  default: ""
}), w("design:type", String)], w5.prototype, "name", void 0);
w5 = L([f1({
  name: "StargateTarget"
})], w5);
var G7 = function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, Ud = function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
};
let Ye = class extends H {
  constructor() {
    super(...arguments), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  render() {
    const t = arguments[0];
    return t("div", [t(Zd), t(Rd, {
      attrs: {
        url: "http://localhost:5173/"
      },
      on: {
        edit: this.handleEdit
      }
    }), t("div", {
      class: "content"
    }, [t("div", {
      class: "content-form"
    }, [t(Fd)]), t("div", {
      class: "content-editor"
    }, ["IFRAME"])]), t(w5)]);
  }
  handleEdit() {
    console.log("edited");
  }
};
G7([m({
  type: String,
  required: !1,
  default: ""
}), Ud("design:type", String)], Ye.prototype, "url", void 0);
Ye = G7([f1({
  name: "ContentLayout"
})], Ye);
const ch = Ye;
window.ContentLayout = Ye;
const uh = Ye;
export {
  uh as ContentLayoutOverlay,
  ch as default
};
//# sourceMappingURL=overlay.js.map

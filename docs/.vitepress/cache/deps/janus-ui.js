import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  ref,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-PCT7LBY2.js";
import {
  __export
} from "./chunk-PZ5AY32C.js";

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/constants/key.mjs
var E = Symbol("INSTALLED_KEY");

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/index2.mjs
var index2_exports = {};
__export(index2_exports, {
  JaAnchor: () => s4,
  JaAnchorLink: () => f2,
  JaCard: () => i5,
  JaIcon: () => i6,
  JaSwitch: () => a,
  default: () => i7
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/node_modules/.pnpm/@vue_shared@3.4.36/node_modules/@vue/shared/dist/shared.esm-bundler.mjs
Object.freeze({});
Object.freeze([]);
var o = () => {
};
var t = (e4) => typeof e4 == "string";

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/vue/install.mjs
var e = (o6, s5) => {
  if (o6.install = (l2) => {
    for (const t3 of [o6, ...Object.values(s5 ?? {})])
      l2.component(t3.name, t3);
  }, s5)
    for (const [l2, t3] of Object.entries(s5))
      o6[l2] = t3;
  return o6;
};
var r = (o6) => (o6.install = o, o6);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/node_modules/.pnpm/@vueuse_shared@10.11.0_vue@3.4.36_typescript@5.5.3_/node_modules/@vueuse/shared/index.mjs
function i(o6) {
  return getCurrentScope() ? (onScopeDispose(o6), true) : false;
}
function p(o6) {
  return typeof o6 == "function" ? o6() : unref(o6);
}
var f = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var c = Object.prototype.toString;
var u = (o6) => c.call(o6) === "[object Object]";
var s = () => {
};

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.36_typescript@5.5.3_/node_modules/@vueuse/core/index.mjs
function L(n3) {
  var e4;
  const t3 = p(n3);
  return (e4 = t3 == null ? void 0 : t3.$el) != null ? e4 : t3;
}
var C = f ? window : void 0;
function b(...n3) {
  let e4, t3, o6, l2;
  if (typeof n3[0] == "string" || Array.isArray(n3[0]) ? ([t3, o6, l2] = n3, e4 = C) : [e4, t3, o6, l2] = n3, !e4)
    return s;
  Array.isArray(t3) || (t3 = [t3]), Array.isArray(o6) || (o6 = [o6]);
  const u3 = [], c3 = () => {
    u3.forEach((r2) => r2()), u3.length = 0;
  }, m2 = (r2, i8, s5, a2) => (r2.addEventListener(i8, s5, a2), () => r2.removeEventListener(i8, s5, a2)), d2 = watch(
    () => [L(e4), p(l2)],
    ([r2, i8]) => {
      if (c3(), !r2)
        return;
      const s5 = u(i8) ? { ...i8 } : i8;
      u3.push(
        ...t3.flatMap((a2) => o6.map((y) => m2(r2, a2, y, s5)))
      );
    },
    { immediate: true, flush: "post" }
  ), f4 = () => {
    d2(), c3();
  };
  return i(f4), f4;
}

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/hooks/use-namespace/index.mjs
var $ = "ja";
var l = "is-";
var c2 = (t3, u3, a2, o6, m2) => {
  let r2 = `${t3}-${u3}`;
  return a2 && (r2 += `-${a2}`), o6 && (r2 += `__${o6}`), m2 && (r2 += `--${m2}`), r2;
};
var B = Symbol("namespaceContextKey");
var i2 = (t3) => {
  const u3 = getCurrentInstance() ? inject(B, ref($)) : ref($);
  return computed(() => unref(u3) || $);
};
var P = (t3, u3) => {
  const a2 = i2();
  return {
    namespace: a2,
    b: (s5 = "") => c2(a2.value, t3, s5, "", ""),
    e: (s5) => s5 ? c2(a2.value, t3, "", s5, "") : "",
    m: (s5) => s5 ? c2(a2.value, t3, "", "", s5) : "",
    be: (s5, e4) => s5 && e4 ? c2(a2.value, t3, s5, e4, "") : "",
    em: (s5, e4) => s5 && e4 ? c2(a2.value, t3, "", s5, e4) : "",
    bm: (s5, e4) => s5 && e4 ? c2(a2.value, t3, s5, "", e4) : "",
    bem: (s5, e4, n3) => s5 && e4 && n3 ? c2(a2.value, t3, s5, e4, n3) : "",
    is: (s5, ...e4) => {
      const n3 = e4.length >= 1 ? e4[0] : true;
      return s5 && n3 ? `${l}${s5}` : "";
    },
    // css
    cssVar: (s5) => {
      const e4 = {};
      for (const n3 in s5)
        s5[n3] && (e4[`--${a2.value}-${n3}`] = s5[n3]);
      return e4;
    },
    cssVarName: (s5) => `--${a2.value}-${s5}`,
    cssVarBlock: (s5) => {
      const e4 = {};
      for (const n3 in s5)
        s5[n3] && (e4[`--${a2.value}-${t3}-${n3}`] = s5[n3]);
      return e4;
    },
    cssVarBlockName: (s5) => `--${a2.value}-${t3}-${s5}`
  };
};

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/types.mjs
var n = (r2) => r2 === void 0;
var o2 = (r2) => typeof r2 == "number";
var t2 = (r2) => t(r2) ? !Number.isNaN(Number(r2)) : false;
var s2 = (r2) => r2 === window;

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/dom/element.mjs
var u2 = (r2) => {
  if (!f || r2 === "") return null;
  if (t(r2))
    try {
      return document.querySelector(r2);
    } catch {
      return null;
    }
  return r2;
};

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/easings.mjs
function i3(n3, c3, r2, u3) {
  const e4 = r2 - c3;
  return n3 /= u3 / 2, n3 < 1 ? e4 / 2 * n3 * n3 * n3 + c3 : e4 / 2 * ((n3 -= 2) * n3 * n3 + 2) + c3;
}

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/raf.mjs
var e2 = (i8) => f ? window.requestAnimationFrame(i8) : setTimeout(i8, 16);
var m = (i8) => f ? window.cancelAnimationFrame(i8) : clearTimeout(i8);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/dom/scroll.mjs
function d(o6, t3, f4, e4, n3) {
  const i8 = Date.now();
  let l2;
  const m2 = () => {
    const r2 = Date.now() - i8, c3 = i3(
      r2 > e4 ? e4 : r2,
      t3,
      f4,
      e4
    );
    s2(o6) ? o6.scrollTo(window.pageXOffset, c3) : o6.scrollTop = c3, r2 < e4 ? l2 = e2(m2) : typeof n3 == "function" && n3();
  };
  return m2(), () => {
    l2 && m(l2);
  };
}
var x = (o6, t3) => s2(t3) ? o6.ownerDocument.documentElement : t3;
var A = (o6) => s2(o6) ? window.scrollY : o6.scrollTop;

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/dom/position.mjs
var o3 = (f4) => {
  let t3 = 0, e4 = f4;
  for (; e4; )
    t3 += e4.offsetTop, e4 = e4.offsetParent;
  return t3;
};
var s3 = (f4, t3) => Math.abs(o3(f4) - o3(t3));

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/dom/style.mjs
function p2(r2, i8 = "px") {
  if (!r2) return "";
  if (o2(r2) || t2(r2))
    return `${r2}${i8}`;
  if (t(r2))
    return r2;
}

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/throttleByRaf.mjs
function i4(o6) {
  let t3 = 0;
  const r2 = (...c3) => {
    t3 && m(t3), t3 = e2(() => {
      o6(...c3), t3 = 0;
    });
  };
  return r2.cancel = () => {
    m(t3), t3 = 0;
  }, r2;
}

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/vue/props/runtime.mjs
var p3 = (e4) => e4;

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/anchor/src/anchor.mjs
var o4 = {
  container: {
    type: p3([
      String,
      Object
    ])
  },
  direction: {
    type: p3(String),
    default: "vertical"
  },
  duration: {
    type: Number,
    default: 300
  }
};

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/anchor/src/constants.mjs
var o5 = Symbol("anchor");

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/anchor/src/anchor.vue.mjs
var me = defineComponent({
  name: "JaAnchor",
  __name: "anchor",
  props: o4,
  emits: ["click", "change"],
  setup(z, { expose: L2, emit: b2 }) {
    const l2 = z, k2 = b2, s5 = P("anchor"), i8 = ref(null), R2 = ref(null), u3 = ref(null), r2 = ref(), m2 = {};
    let p4 = false, y = 0;
    const M = computed(() => [
      s5.b(),
      s5.m(l2.direction)
    ]), N = computed(() => {
      if (!u3.value || !i8.value) return {};
      const e4 = m2[i8.value], t3 = R2.value.getBoundingClientRect(), o6 = e4.getBoundingClientRect();
      if (l2.direction === "horizontal") {
        const n3 = o6.left - t3.left;
        return {
          left: p2(n3),
          opacity: 1,
          width: p2(o6.width)
        };
      } else
        return {
          top: `${e4.offsetTop + (e4.offsetHeight - u3.value.offsetHeight) / 2}px`,
          opacity: 1
        };
    }), O = (e4) => {
      m2[e4.href] = e4.el;
    }, h = (e4) => {
      i8.value !== e4 && (i8.value = e4, k2("change", e4));
    }, U = () => {
      if (!r2.value) return;
      const e4 = A(r2.value), t3 = [];
      for (const o6 of Object.keys(m2)) {
        const n3 = u2(o6);
        if (!n3) continue;
        const c3 = x(n3, r2.value), v = s3(n3, c3);
        t3.push({
          top: v,
          href: o6
        });
      }
      t3.sort((o6, n3) => o6.top - n3.top);
      for (let o6 = 0; o6 < t3.length; o6++) {
        const n3 = t3[o6], c3 = t3[o6 + 1];
        if (n3.top <= e4 && (!c3 || c3.top > e4))
          return n3.href;
      }
    };
    let d2 = null;
    const $2 = (e4) => {
      if (!r2.value) return;
      const t3 = u2(e4);
      if (!t3) return;
      d2 && d2(), p4 = true;
      const o6 = x(t3, r2.value), n3 = s3(t3, o6), c3 = o6.scrollHeight - o6.clientHeight, v = Math.min(n3, c3);
      d2 = d(
        r2.value,
        y,
        v,
        l2.duration,
        () => {
          setTimeout(() => {
            p4 = false;
          }, 20);
        }
      );
    }, C2 = (e4) => {
      e4 && (h(e4), $2(e4));
    }, j = (e4, t3) => {
      k2("click", e4, t3), C2(t3);
    }, T = i4(() => {
      r2.value && (y = A(r2.value));
      const e4 = U();
      p4 || !e4 || h(e4);
    }), S = () => {
      const e4 = u2(l2.container);
      !e4 || s2(e4) ? r2.value = window : r2.value = e4;
    };
    return b(r2, "scroll", T), onMounted(() => {
      S();
      const e4 = decodeURIComponent(window.location.hash);
      u2(e4) ? h(e4) : T();
    }), watch(
      () => l2.container,
      () => {
        S();
      }
    ), provide(o5, {
      ns: s5,
      currentAnchor: i8,
      addLinks: O,
      handleClick: j
    }), L2({
      scrollTo: C2
    }), (e4, t3) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(M.value),
      ref_key: "anchorRef",
      ref: R2
    }, [
      createBaseVNode("div", {
        ref_key: "markerRef",
        ref: u3,
        class: normalizeClass(unref(s5).e("marker")),
        style: normalizeStyle(N.value)
      }, null, 6),
      createBaseVNode("div", {
        class: normalizeClass(unref(s5).e("list"))
      }, [
        renderSlot(e4.$slots, "default")
      ], 2)
    ], 2));
  }
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/anchor/src/anchor-link.vue.mjs
var A2 = ["href"];
var R = defineComponent({
  name: "JaAnchorLink",
  __name: "anchor-link",
  props: {
    href: {
      type: String
    },
    title: {
      type: String
    }
  },
  emits: ["click"],
  setup(e4, { emit: B2 }) {
    const n3 = e4, l2 = ref(null), {
      ns: t3,
      currentAnchor: o6,
      addLinks: i8,
      handleClick: a2
    } = inject(o5), s5 = computed(() => [
      t3.e("link"),
      t3.is("active", o6.value === n3.href)
    ]), f4 = (r2) => {
      a2(r2, n3.href);
    };
    return onMounted(async () => {
      i8({
        href: n3.href,
        el: l2.value
      });
    }), (r2, E3) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(t3).e("item"))
    }, [
      createBaseVNode("a", {
        ref_key: "linkRef",
        ref: l2,
        class: normalizeClass(s5.value),
        href: e4.href,
        onClick: f4
      }, [
        renderSlot(r2.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(e4.title), 1)
        ])
      ], 10, A2)
    ], 2));
  }
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/anchor/index.mjs
var s4 = e(me, {
  AnchorLink: R
});
var f2 = r(R);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/card/src/card.vue.mjs
var g = defineComponent({
  name: "JaCard",
  __name: "card",
  props: {
    header: {
      type: String,
      default: ""
    },
    bodyStyle: {
      type: p3([String, Object, Array]),
      default: ""
    },
    bodyClass: {
      type: String,
      default: ""
    },
    footer: {
      type: String,
      default: ""
    }
  },
  setup(e4) {
    const o6 = P("card");
    return (t3, b2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(o6).b())
    }, [
      t3.$slots.header || e4.header ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(o6).e("header"))
      }, [
        renderSlot(t3.$slots, "header", {}, () => [
          createTextVNode(toDisplayString(e4.header), 1)
        ])
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass([unref(o6).e("body"), e4.bodyClass]),
        style: normalizeStyle(e4.bodyStyle)
      }, [
        renderSlot(t3.$slots, "default")
      ], 6),
      t3.$slots.footer || e4.footer ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(unref(o6).e("footer"))
      }, [
        renderSlot(t3.$slots, "footer", {}, () => [
          createTextVNode(toDisplayString(e4.footer), 1)
        ])
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/card/index.mjs
var i5 = e(g);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/icon/src/icon.vue.mjs
var k = defineComponent({
  name: "JaIcon",
  inheritAttrs: false,
  __name: "icon",
  props: {
    size: {
      type: p3([Number, String])
    },
    color: {
      type: String
    }
  },
  setup(r2) {
    const t3 = r2, n3 = P("icon"), s5 = computed(() => {
      const { size: e4, color: o6 } = t3;
      return !e4 && !o6 ? {} : {
        fontSize: n(e4) ? void 0 : p2(e4),
        color: o6
      };
    });
    return (e4, o6) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(n3).b(),
      style: s5.value
    }, e4.$attrs), [
      renderSlot(e4.$slots, "default")
    ], 16));
  }
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/icon/index.mjs
var i6 = e(k);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/constants/event.mjs
var E2 = "update:modelValue";
var e3 = "change";

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/utils/vue/icon.mjs
var n2 = p3([
  String,
  Object,
  Function
]);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/switch/src/switch.vue.mjs
var g2 = defineComponent({
  name: "JaSwitch",
  __name: "switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeIcon: {
      type: n2
    },
    inactiveIcon: {
      type: n2
    }
  },
  emits: [E2, e3],
  setup(e4, { emit: u3 }) {
    const t3 = e4, a2 = u3, o6 = P("switch");
    watch(
      () => t3.modelValue,
      (c3) => {
        a2(e3, c3);
      }
    );
    const f4 = () => {
      t3.disabled || a2(E2, !t3.modelValue);
    }, p4 = computed(() => [
      o6.b(),
      o6.is("checked", t3.modelValue),
      o6.is("disabled", t3.disabled),
      o6.m(t3.size)
    ]);
    return (c3, B2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(p4.value),
      onClick: withModifiers(f4, ["prevent"])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(o6).e("handle"))
      }, [
        e4.activeIcon || e4.inactiveIcon ? (openBlock(), createBlock(unref(i6), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(e4.modelValue ? e4.activeIcon : e4.inactiveIcon)))
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 2)
    ], 2));
  }
});

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/switch/index.mjs
var a = e(g2);

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/index2.mjs
var i7 = {
  install: (r2) => {
    if (!r2[E]) {
      r2[E] = true;
      for (const t3 in index$1)
        r2.use(index$1[t3]);
    }
  }
};

// ../node_modules/.pnpm/janus-ui@0.0.2/node_modules/janus-ui/es/packages/components/index.mjs
var f3 = {
  install: (r2) => {
    if (!r2[E]) {
      r2[E] = true;
      for (const e4 in index2_exports)
        r2.use(index2_exports[e4]);
    }
  }
};
export {
  s4 as JaAnchor,
  f2 as JaAnchorLink,
  i5 as JaCard,
  i6 as JaIcon,
  a as JaSwitch,
  f3 as default
};
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.mjs:
  (**
  * @vue/shared v3.4.36
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
//# sourceMappingURL=janus-ui.js.map

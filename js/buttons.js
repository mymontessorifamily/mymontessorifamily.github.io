/*! buttons v1.1.7 - 2017-05-27 | Copyright (c) 2017 Adam Bouqdib (http://abemedia.co.uk) | donreach.com/license */
/*! Sizzle v2.3.3 | (c) jQuery Foundation, Inc. | jquery.org/license */
! function(a) {
    function b(a, b, c, d) {
        var e, f, g, h, i, j, k, m = b && b.ownerDocument,
            o = b ? b.nodeType : 9;
        if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
        if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
            if (11 !== o && (i = ra.exec(a)))
                if (e = i[1]) {
                    if (9 === o) {
                        if (!(g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g), c
                    } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                } else {
                    if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                }
            if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                if (1 !== o) m = b, k = a;
                else if ("object" !== b.nodeName.toLowerCase()) {
                    for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                    k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                }
                if (k) try {
                    return $.apply(c, m.querySelectorAll(k)), c
                } catch (p) {} finally {
                    h === O && b.removeAttribute("id")
                }
            }
        }
        return C(a.replace(ha, "$1"), b, c, d)
    }

    function c() {
        function a(c, d) {
            return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
        }
        var b = [];
        return a
    }

    function d(a) {
        return a[O] = !0, a
    }

    function e(a) {
        var b = H.createElement("fieldset");
        try {
            return !!a(b)
        } catch (c) {
            return !1
        } finally {
            b.parentNode && b.parentNode.removeChild(b), b = null
        }
    }

    function f(a, b) {
        for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
    }

    function g(a, b) {
        var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (d) return d;
        if (c)
            for (; c = c.nextSibling;)
                if (c === b) return -1;
        return a ? 1 : -1
    }

    function h(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return "input" === c && b.type === a
        }
    }

    function i(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a
        }
    }

    function j(a) {
        return function(b) {
            return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
        }
    }

    function k(a) {
        return d(function(b) {
            return b = +b, d(function(c, d) {
                for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
            })
        })
    }

    function l(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a
    }

    function m() {}

    function n(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d
    }

    function o(a, b, c) {
        var d = b.dir,
            e = b.next,
            f = e || d,
            g = c && "parentNode" === f,
            h = R++;
        return b.first ? function(b, c, e) {
            for (; b = b[d];)
                if (1 === b.nodeType || g) return a(b, c, e);
            return !1
        } : function(b, c, i) {
            var j, k, l, m = [Q, h];
            if (i) {
                for (; b = b[d];)
                    if ((1 === b.nodeType || g) && a(b, c, i)) return !0
            } else
                for (; b = b[d];)
                    if (1 === b.nodeType || g)
                        if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                        else {
                            if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                            if (k[f] = m, m[2] = a(b, c, i)) return !0
                        } return !1
        }
    }

    function p(a) {
        return a.length > 1 ? function(b, c, d) {
            for (var e = a.length; e--;)
                if (!a[e](b, c, d)) return !1;
            return !0
        } : a[0]
    }

    function q(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d
    }

    function r(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
        return g
    }

    function s(a, b, c, e, f, g) {
        return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
            var j, k, l, m = [],
                n = [],
                o = g.length,
                p = d || q(b || "*", h.nodeType ? [h] : h, []),
                s = !a || !d && b ? p : r(p, m, a, h, i),
                t = c ? f || (d ? a : o || e) ? [] : g : s;
            if (c && c(s, t, h, i), e)
                for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
            if (d) {
                if (f || a) {
                    if (f) {
                        for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                        f(null, t = [], j, i)
                    }
                    for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                }
            } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
        })
    }

    function t(a) {
        for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b
            }, g, !0), j = o(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++)
            if (c = x.relative[a[h].type]) k = [o(p(k), c)];
            else {
                if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                    for (d = ++h; e > d && !x.relative[a[d].type]; d++);
                    return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ha, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && n(a))
                }
                k.push(c)
            }
        return p(k)
    }

    function u(a, c) {
        var e = c.length > 0,
            f = a.length > 0,
            g = function(d, g, h, i, j) {
                var k, l, m, n = 0,
                    o = "0",
                    p = d && [],
                    q = [],
                    s = D,
                    t = d || f && x.find.TAG("*", j),
                    u = Q += null == s ? 1 : Math.random() || .1,
                    v = t.length;
                for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                            if (m(k, g || H, h)) {
                                i.push(k);
                                break
                            }
                        j && (Q = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, q, g, h);
                    if (d) {
                        if (n > 0)
                            for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                        q = r(q)
                    }
                    $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (Q = u, D = s), p
            };
        return e ? d(g) : g
    }
    var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
        P = a.document,
        Q = 0,
        R = 0,
        S = c(),
        T = c(),
        U = c(),
        V = function(a, b) {
            return a === b && (F = !0), 0
        },
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        },
        ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
        ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
        fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
        ga = new RegExp(ca + "+", "g"),
        ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
        ia = new RegExp("^" + ca + "*," + ca + "*"),
        ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        la = new RegExp(fa),
        ma = new RegExp("^" + da + "$"),
        na = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da + "|[*])"),
            ATTR: new RegExp("^" + ea),
            PSEUDO: new RegExp("^" + fa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        },
        oa = /^(?:input|select|textarea|button)$/i,
        pa = /^h\d$/i,
        qa = /^[^{]+\{\s*\[native \w/,
        ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sa = /[+~]/,
        ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        ua = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        wa = function(a, b) {
            return b ? "\x00" === a ? "ï¿½" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        },
        xa = function() {
            G()
        },
        ya = o(function(a) {
            return a.disabled === !0 && ("form" in a || "label" in a)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
    } catch (za) {
        $ = {
            apply: X.length ? function(a, b) {
                Z.apply(a, _.call(b))
            } : function(a, b) {
                for (var c = a.length, d = 0; a[c++] = b[d++];);
                a.length = c - 1
            }
        }
    }
    w = b.support = {}, z = b.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName
    }, G = b.setDocument = function(a) {
        var b, c, d = a ? a.ownerDocument || a : P;
        return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
            return a.className = "i", !a.getAttribute("className")
        }), w.getElementsByTagName = e(function(a) {
            return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
        }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
            return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
        }), w.getById ? (x.filter.ID = function(a) {
            var b = a.replace(ta, ua);
            return function(a) {
                return a.getAttribute("id") === b
            }
        }, x.find.ID = function(a, b) {
            if ("undefined" != typeof b.getElementById && J) {
                var c = b.getElementById(a);
                return c ? [c] : []
            }
        }) : (x.filter.ID = function(a) {
            var b = a.replace(ta, ua);
            return function(a) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return c && c.value === b
            }
        }, x.find.ID = function(a, b) {
            if ("undefined" != typeof b.getElementById && J) {
                var c, d, e, f = b.getElementById(a);
                if (f) {
                    if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                    for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                }
                return []
            }
        }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
        } : function(a, b) {
            var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
            if ("*" === a) {
                for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                return d
            }
            return f
        }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
            return "undefined" != typeof b.getElementsByClassName && J ? b.getElementsByClassName(a) : void 0
        }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
            I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
        }), e(function(a) {
            a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var b = H.createElement("input");
            b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
        })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
            w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
        }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;
            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function(a, b) {
            if (b)
                for (; b = b.parentNode;)
                    if (b === a) return !0;
            return !1
        }, V = b ? function(a, b) {
            if (a === b) return F = !0, 0;
            var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
        } : function(a, b) {
            if (a === b) return F = !0, 0;
            var c, d = 0,
                e = a.parentNode,
                f = b.parentNode,
                h = [a],
                i = [b];
            if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
            if (e === f) return g(a, b);
            for (c = a; c = c.parentNode;) h.unshift(c);
            for (c = b; c = c.parentNode;) i.unshift(c);
            for (; h[d] === i[d];) d++;
            return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
        }, H) : H
    }, b.matches = function(a, c) {
        return b(a, null, null, c)
    }, b.matchesSelector = function(a, c) {
        if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
            var d = M.call(a, c);
            if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
        } catch (e) {}
        return b(c, H, null, [a]).length > 0
    }, b.contains = function(a, b) {
        return (a.ownerDocument || a) !== H && G(a), N(a, b)
    }, b.attr = function(a, b) {
        (a.ownerDocument || a) !== H && G(a);
        var c = x.attrHandle[b.toLowerCase()],
            d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
        return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }, b.escape = function(a) {
        return (a + "").replace(va, wa)
    }, b.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
    }, b.uniqueSort = function(a) {
        var b, c = [],
            d = 0,
            e = 0;
        if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
            for (; b = a[e++];) b === a[e] && (d = c.push(e));
            for (; d--;) a.splice(c[d], 1)
        }
        return E = null, a
    }, y = b.getText = function(a) {
        var b, c = "",
            d = 0,
            e = a.nodeType;
        if (e) {
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
            } else if (3 === e || 4 === e) return a.nodeValue
        } else
            for (; b = a[d++];) c += y(b);
        return c
    }, x = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: na,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(a) {
                return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            },
            CHILD: function(a) {
                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
            },
            PSEUDO: function(a) {
                var b, c = !a[6] && a[2];
                return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }
        },
        filter: {
            TAG: function(a) {
                var b = a.replace(ta, ua).toLowerCase();
                return "*" === a ? function() {
                    return !0
                } : function(a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                }
            },
            CLASS: function(a) {
                var b = S[a + " "];
                return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                })
            },
            ATTR: function(a, c, d) {
                return function(e) {
                    var f = b.attr(e, a);
                    return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice(-4),
                    h = "of-type" === b;
                return 1 === d && 0 === e ? function(a) {
                    return !!a.parentNode
                } : function(b, c, i) {
                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                    if (q) {
                        if (f) {
                            for (; p;) {
                                for (m = b; m = m[p];)
                                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                o = p = "only" === a && !o && "nextSibling"
                            }
                            return !0
                        }
                        if (o = [g ? q.firstChild : q.lastChild], g && s) {
                            for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [Q, n, t];
                                    break
                                }
                        } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                            for (;
                                (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                        return t -= e, t === d || t % d === 0 && t / d >= 0
                    }
                }
            },
            PSEUDO: function(a, c) {
                var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                    for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                }) : function(a) {
                    return f(a, 0, e)
                }) : f
            }
        },
        pseudos: {
            not: d(function(a) {
                var b = [],
                    c = [],
                    e = B(a.replace(ha, "$1"));
                return e[O] ? d(function(a, b, c, d) {
                    for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                }) : function(a, d, f) {
                    return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                }
            }),
            has: d(function(a) {
                return function(c) {
                    return b(a, c).length > 0
                }
            }),
            contains: d(function(a) {
                return a = a.replace(ta, ua),
                    function(b) {
                        return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                    }
            }),
            lang: d(function(a) {
                return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(a) {
                return a === I
            },
            focus: function(a) {
                return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
            },
            enabled: j(!1),
            disabled: j(!0),
            checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function(a) {
                return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            },
            empty: function(a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                    if (a.nodeType < 6) return !1;
                return !0
            },
            parent: function(a) {
                return !x.pseudos.empty(a)
            },
            header: function(a) {
                return pa.test(a.nodeName)
            },
            input: function(a) {
                return oa.test(a.nodeName)
            },
            button: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            text: function(a) {
                var b;
                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
            },
            first: k(function() {
                return [0]
            }),
            last: k(function(a, b) {
                return [b - 1]
            }),
            eq: k(function(a, b, c) {
                return [0 > c ? c + b : c]
            }),
            even: k(function(a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a
            }),
            odd: k(function(a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a
            }),
            lt: k(function(a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                return a
            }),
            gt: k(function(a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                return a
            })
        }
    }, x.pseudos.nth = x.pseudos.eq;
    for (v in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[v] = h(v);
    for (v in {
            submit: !0,
            reset: !0
        }) x.pseudos[v] = i(v);
    m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
        var d, e, f, g, h, i, j, k = T[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = x.preFilter; h;) {
            d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                value: d,
                type: e[0].replace(ha, " ")
            }), h = h.slice(d.length));
            for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                value: d,
                type: g,
                matches: e
            }), h = h.slice(d.length));
            if (!d) break
        }
        return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
    }, B = b.compile = function(a, b) {
        var c, d = [],
            e = [],
            f = U[a + " "];
        if (!f) {
            for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
            f = U(a, u(e, d)), f.selector = a
        }
        return f
    }, C = b.select = function(a, b, c, d) {
        var e, f, g, h, i, j = "function" == typeof a && a,
            k = !d && A(a = j.selector || a);
        if (c = c || [], 1 === k.length) {
            if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                j && (b = b.parentNode), a = a.slice(f.shift().value.length)
            }
            for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
                    break
                }
        }
        return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
    }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) {
        return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
    }), e(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), w.attributes && e(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || f("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), e(function(a) {
        return null == a.getAttribute("disabled")
    }) || f(ba, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    });
    var Aa = a.Sizzle;
    b.noConflict = function() {
        return a.Sizzle === b && (a.Sizzle = Aa), b
    }, "function" == typeof define && define.amd ? define(function() {
        return b
    }) : "undefined" != typeof module && module.exports ? module.exports = b : a.Sizzle = b
}(window);
var don = {
    root: "//mymontessorifamily.github.io",
    url: null,
    i: null,
    cssLoaded: !1,
    get: function() {
        for (var a = "undefined" != typeof donshare_selector ? donshare_selector : "don-share", b = don.root + "/css/buttons.css", c = document.getElementsByTagName("link"), d = 0; d < c.length; d++) b === c[d].href && (don.cssLoaded = !0);
        var e = Sizzle("." + a);
        for (d = 0; d < e.length; d++) {
            var f = e[d];
            f.dataset.loaded || (f.dataset.loaded = !0, function(c) {
                var d = 0,
                    e = don.extend({}, c.dataset),
                    f = don.getData(c);
                if ("custom" !== e.style) {
                    if (!don.cssLoaded && "undefined" == typeof e.nocss) {
                        var g = document.createElement("link");
                        g.type = "text/css", g.rel = "stylesheet", g.href = b, document.getElementsByTagName("head")[0].appendChild(g), don.cssLoaded = !0
                    }
                    e.bubbles ? c.className += " don-bubble-" + e.bubbles : c.className += " don-bubble-hover"
                }
                for (var h = [], i = Sizzle("[class^='" + a + "-'], [class*=' " + a + "-']", c), j = 0; j < i.length; j++) {
                    var k = i[j].getAttribute("class").split(" ");
                    d = j;
                    for (var l = 0; l < k.length; l++)
                        if (k[l].substring(0, a.length + 1) === a + "-") {
                            var m = k[l].substring(a.length + 1);
                            "total" !== m && h.push(m), e.limit && e.limit < j && (i[j].className += " don-secondary", "custom" !== e.style && (e.style = "icons")), don.render(i[j], e.style, f[k[l].replace(a + "-", "")])
                        }
                    if ("false" !== e.popup) {
                        var n = Sizzle("a", i[j])[0];
                        n && (n.onclick = function(a) {
                            var b = this.getAttribute("href"),
                                c = 500,
                                d = 500,
                                e = screen.width / 2 - c / 2,
                                f = screen.height / 2 - d / 1.5,
                                g = window.open(b, "Share", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + c + ", height=" + d + ", top=" + f + ", left=" + e);
                            return window.focus && g.focus(), !1
                        })
                    }
                }
                e.limit && e.limit < d && (c.innerHTML += '<button class="don-btn don-share-expand"></button>', Sizzle(".don-share-expand", c)[0].onclick = function(a) {
                    c = a.target.parentNode, c.className.match(/ don-active/g) ? c.className = c.className.replace(" don-active", "") : c.className += " don-active"
                })
            }(f))
        }
    },
    render: function(a, b, c) {
        function d(a, b) {
            for (var c in b) a = a.replace(RegExp("\\{" + c + "\\}", "gi"), b[c]);
            return a
        }
        var e, f = '<img src="' + don.root + '/images/loader.gif">';
        if (c || (b = "count"), c && !c.text && (c.text = "Share"), c && !c.description && (c.description = "Share on " + c.title), b && "#" === b.charAt(0)) e = document.getElementById(b.substring(1)).innerHTML;
        else switch (b) {
            case "custom":
                e = a.innerHTML;
                break;
            case "icons":
                e = '<a href="{url}" target="_blank" title="{description}"><span class="don-btn don-btn-{id} don-btn-ico"><i class="don-ico don-ico-{id}"></i></span><span class="don-count">' + f + "</span></a>";
                break;
            case "count":
                e = '<span class="don-count">' + f + "</span>";
                break;
            case "short":
                e = '<a href="{url}" target="_blank" title="{description}"><span class="don-btn don-btn-{id}"><i class="don-ico don-ico-{id}"></i> {text}</span><span class="don-count">' + f + "</span></a>";
                break;
            case "long":
                e = '<a href="{url}" target="_blank" title="{description}"><span class="don-btn don-btn-{id}"><i class="don-ico don-ico-{id}"></i> {description}</span><span class="don-count">' + f + "</span></a>";
                break;
            default:
                e = '<a href="{url}" target="_blank"><span class="don-btn don-btn-{id}"><i class="don-ico don-ico-{id}"></i> <span class="don-sm">{text}</span><span class="don-lg">{description}</span></span><span class="don-count">' + f + "</span></a>"
        }
        a.innerHTML = d(e, c)
    },
    getData: function(a) {
        var b, c = a.getAttribute("data-title"),
            d = a.getAttribute("data-description"),
            e = a.getAttribute("data-url"),
            f = a.getAttribute("data-image");
        return c || (b = Sizzle("meta[property='og:title'], meta[name='og:title']"), c = b.length ? b[0].getAttribute("content") : Sizzle("title").length ? Sizzle("title")[0].innerHTML : null), c && (c = encodeURIComponent(c)), d || (b = Sizzle("meta[property='og:description'], meta[name='og:description']"), b.length ? d = b[0].getAttribute("content") : (b = Sizzle("meta[property='description'], meta[name='description']"), b.length && (d = b[0].getAttribute("content")))), d && (d = encodeURIComponent(d)), e || (b = Sizzle("meta[property='og:url'], meta[name='og:url']"), e = b.length ? b[0].getAttribute("content") : (b = Sizzle("link[rel='canonical']") && b.length > 0) ? b[0].href : window.location.href), don.url = e = encodeURIComponent(e), f || (b = Sizzle("meta[property='og:image'], meta[name='og:image']"), f = b.length ? b[0].getAttribute("content") : Sizzle("img").length > 0 ? Sizzle("img")[0].getAttribute("src") : null), {
            facebook: {
                id: "facebook",
                url: "https://www.facebook.com/sharer.php?u=" + e,
                title: "Facebook"
            },
            twitter: {
                id: "twitter",
                url: "https://twitter.com/share?url=" + e + "&text=" + c,
                title: "Twitter",
                text: "Tweet"
            },
            google: {
                id: "google",
                url: "https://plus.google.com/share?url=" + e,
                title: "Google+"
            },
            linkedin: {
                id: "linkedin",
                url: "https://www.linkedin.com/shareArticle?mini=true&url=" + e,
                title: "LinkedIn"
            },
            skype: {
                id: "skype",
                url: "https://web.skype.com/share?url=" + e,
                title: "Skype"
            },
            pinterest: {
                id: "pinterest",
                url: "https://www.pinterest.com/pin/create/button/?url=" + e + "&media=" + f + "&description=" + c,
                title: "Pinterest",
                text: "Pin It"
            },
            stumbleupon: {
                id: "stumbleupon",
                url: "https://www.stumbleupon.com/submit?url=" + e + "&title=" + c,
                title: "StumbleUpon",
                text: "Submit",
                description: "Submit to StumbleUpon"
            },
            delicious: {
                id: "delicious",
                url: "https://delicious.com/post?url=" + e,
                title: "Delicious",
                text: "Submit",
                description: "Submit to Delicious"
            },
            reddit: {
                id: "reddit",
                url: "https://www.reddit.com/submit?url=" + e + "&title=" + c,
                title: "Reddit",
                text: "Submit",
                description: "Submit to Reddit"
            },
            tumblr: {
                id: "tumblr",
                url: "https://www.tumblr.com/share/link?url=" + e + "&name=" + c + "&description=" + d,
                title: "Tumblr"
            },
            buffer: {
                id: "buffer",
                url: "https://bufferapp.com/add?url=" + e + "&text=" + c,
                title: "Buffer",
                text: "Submit",
                description: "Submit to Buffer"
            },
            vk: {
                id: "vk",
                url: "http://vk.com/share.php?url=" + e + "&title=" + c + "&description=" + d + "&image=" + f + "&noparse=true",
                title: "VK"
            },
            xing: {
                id: "xing",
                url: "https://www.xing.com/social_plugins/share?h=1;url=" + e,
                title: "Xing"
            },
            weibo: {
                id: "weibo",
                url: "https://service.weibo.com/share/share.php?url=" + e + "&title=" + c,
                title: "Sina Weibo"
            },
            pocket: {
                id: "pocket",
                url: "https://getpocket.com/save?url=" + e + "&title=" + c,
                title: "Pocket"
            },
            scoopit: {
                id: "scoopit",
                url: "https://www.scoop.it/bookmarklet?url=" + e,
                title: "Scoop.it",
                text: "Scoop"
            },
            mailru: {
                id: "mailru",
                url: "https://connect.mail.ru/share?url=" + e + "&title=" + c + "&description=" + d,
                title: "Mail.ru"
            },
            odnoklassniki: {
                id: "odnoklassniki",
                url: "https://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=" + e + "&title=" + c,
                title: "Odnoklassniki"
            },
            hackernews: {
                id: "hackernews",
                url: "http://news.ycombinator.com/submitlink?u=" + e + "&t=" + c,
                title: "Hacker News"
            },
            yummly: {
                id: "yummly",
                url: "https://www.yummly.com/urb/verify?url=" + e + "&title=" + c + "&image=" + f + "&yumtype=button",
                title: "Yummly"
            },
            fancy: {
                id: "fancy",
                url: "https://www.fancy.com/fancyit?ItemURL=" + e + "&Title=" + c + "&ImageURL=" + f,
                title: "Fancy",
                text: "Fancy It"
            },
            hatena: {
                id: "hatena",
                url: "https://b.hatena.ne.jp/entry/" + e,
                title: "Hatena"
            },
            renren: {
                id: "renren",
                url: "https://mixi.jp/share.pl?u=" + e,
                title: "Renren"
            },
            wykop: {
                id: "wykop",
                url: "http://www.wykop.pl/dodaj/link/?url=" + e + "&title=" + c + "&desc=" + d,
                title: "Wykop"
            },
            mixi: {
                id: "mixi",
                url: "https://mixi.jp/share.pl?u=" + e,
                title: "Mixi"
            },
            diigo: {
                id: "diigo",
                url: "https://www.diigo.com/post?url=" + e,
                title: "Diigo"
            },
            meneame: {
                id: "meneame",
                url: "http://www.meneame.net/submit.php?url=" + e + "&title=" + c,
                title: "Meneame"
            },
            qzone: {
                id: "qzone",
                url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + e,
                title: "QZone"
            },
            folkd: {
                id: "folkd",
                url: "http://www.folkd.com/submit/" + e,
                title: "folkd"
            },
            kaixin001: {
                id: "kaixin001",
                url: "http://www.kaixin001.com/repaste/share.php?rurl=" + e + "&rcontent=" + d + "&rtitle=" + c,
                title: "Kaixin001"
            },
            nk: {
                id: "nk",
                url: "http://nk.pl/fajne/add?url=" + e + "&title=" + c + "&image=" + f + "&description=" + d,
                title: "nk.pl"
            },
            bibsonomy: {
                id: "bibsonomy",
                url: "http://www.bibsonomy.org/ShowBookmarkEntry?c=b&jump=yes&url=" + e + "&description=" + c,
                title: "BibSonomy"
            },
            draugiem: {
                id: "draugiem",
                url: "https://www.draugiem.lv/say/ext/add.php?title=" + c + "&link=" + e,
                title: "draugiem.lv"
            },
            surfingbird: {
                id: "surfingbird",
                url: "http://surfingbird.ru/share?url=" + e,
                title: "surfingbird"
            },
            vkrugudruzei: {
                id: "vkrugudruzei",
                url: "http://vkrugudruzei.ru/x/button?url=" + e,
                title: "vkrugudruzei.ru"
            },
            yuuby: {
                id: "yuuby",
                url: "http://www.yuuby.com/share?url=" + e,
                title: "Yuuby"
            },
            pusha: {
                id: "pusha",
                url: "http://www.pusha.se/posta?url=" + e + "&title=" + c + "&description=" + d,
                title: "Pusha"
            },
            svejo: {
                id: "svejo",
                url: "https://svejo.net/publish/submit?url=" + e + "&title=" + c + "&summary=" + d,
                title: "Svejo"
            },
            bizsugar: {
                id: "bizsugar",
                url: "http://bizsugar.com/bizsugarthis.php?url=" + e,
                title: "BizSugar"
            },
            blogengage: {
                id: "blogengage",
                url: "http://www.blogengage.com/submit.php?url=" + e,
                title: "Blog Engage"
            },
            designfloat: {
                id: "designfloat",
                url: "http://www.designfloat.com/pliggit.php?url=" + e,
                title: "designfloat"
            },
            moshare: {
                id: "moshare",
                url: "http://www.mogreet.com/moshare/it/?share=" + e + "&content_url=&media_type=article&title=" + c + "&src=&thumbnail=" + f + "&message=" + d + "&from_name=&description=&article_div=&cid=&channel=website",
                title: "moShare"
            },
            baidu: {
                id: "baidu",
                url: "http://like.baidu.com/set?buttontype=small&cb=bdShare.ajax._callbacks.bd4bb141b&index=0&url=" + e,
                title: "Baidu",
                description: "Like on Baidu"
            }
        }
    },
    init: function() {
        var a = !1,
            b = !0,
            c = don.get,
            d = window,
            e = d.document,
            f = e.documentElement,
            g = e.addEventListener ? "addEventListener" : "attachEvent",
            h = e.addEventListener ? "removeEventListener" : "detachEvent",
            i = e.addEventListener ? "" : "on",
            j = function(b) {
                ("readystatechange" !== b.type || "complete" === e.readyState) && (("load" === b.type ? d : e)[h](i + b.type, j, !1), !a && (a = !0) && c.call(d, b.type || b))
            },
            k = function() {
                try {
                    f.doScroll("left")
                } catch (a) {
                    return void setTimeout(k, 50)
                }
                j("poll")
            };
        if ("complete" === e.readyState) c.call(d, "lazy");
        else {
            if (e.createEventObject && f.doScroll) {
                try {
                    b = !d.frameElement
                } catch (l) {}
                b && k()
            }
            e[g](i + "DOMContentLoaded", j, !1), e[g](i + "readystatechange", j, !1), d[g](i + "load", j, !1)
        }
    },
    extend: function(a) {
        a = a || {};
        for (var b = 1; b < arguments.length; b++)
            if (arguments[b])
                for (var c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
        return a
    },
    JSONP: function() {
        var a = 0,
            b = {};
        return {
            get: function(c, d, e) {
                arguments[2] || (e = arguments[1], d = {}), c += c.indexOf("?") + 1 ? "&" : "?";
                var f, g = document.getElementsByTagName("head")[0],
                    h = document.createElement("script"),
                    i = [],
                    j = a;
                a++, d.callback = "don.JSONP.callbacks.request_" + j, b["request_" + j] = function(a) {
                    g.removeChild(h), delete b["request_" + j], e(a)
                };
                for (f in d) i.push(f + "=" + encodeURIComponent(d[f]));
                c += i.join("&"), h.type = "text/javascript", h.src = c, g.appendChild(h)
            },
            callbacks: b
        }
    }(document, window)
};
don.init();

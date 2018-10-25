(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"./webpack/assets/javascripts/platform/state/entities/modules/selectors.js":function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return a});var r=n("./node_modules/reselect/lib/index.js"),c=function selectModules(e){return e.entities.modules.byId},a=(Object(r.createSelector)(c,function(e,t){return t.id},function(e,t){return e[t]}),Object(r.createSelector)(c,function(e,t){return t.slug},function(e,t){return Object.values(e).find(function(e){return e.slug===t})}))},"./webpack/assets/javascripts/platform/state/entities/selectors.js":function(e,t,n){"use strict";n.d(t,"e",function(){return j}),n.d(t,"f",function(){return m}),n.d(t,"a",function(){return w}),n.d(t,"h",function(){return S}),n.d(t,"d",function(){return I}),n.d(t,"c",function(){return P}),n.d(t,"g",function(){return T}),n.d(t,"b",function(){return G});var r=n("./node_modules/reselect/lib/index.js"),c=n("./webpack/assets/javascripts/libs/state/entityHelpers.js"),a=n("./webpack/assets/javascripts/platform/state/location/selectors.js"),s=n("./webpack/assets/javascripts/platform/state/selectors.js"),o=n("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),i=n("./webpack/assets/javascripts/platform/state/entities/paths/selectors.js"),u=n("./webpack/assets/javascripts/platform/state/entities/tracks/selectors.js"),l=n("./webpack/assets/javascripts/platform/state/entities/modules/selectors.js"),f=n("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),p=n("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js");function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(r.createSelector)(function(e,t){return Object(i.a)(e,t)},u.c,function(e,t){return e.track_ids.map(function(e){return t[e]})}),b=Object(r.createSelector)(function(e,t){return d(e,t)},l.b,function(e,t){return e.reduce(function(e,n){return e.concat(n.module_ids.map(function(e){return t[e]}))},[])}),j=Object(r.createSelector)(function(e,t){return Object(i.a)(e,t)},function(e,t){return d(e,t)},function(e,t){return b(e,t)},function(e,t,n){return _objectSpread({},e,{tracks:t,modules:n,contentItemIds:n.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),m=Object(r.createSelector)(function(e,t){return Object(u.a)(e,t)},l.b,o.d,function(e,t,n){var r=e.module_ids.map(function(e){return t[e]});return _objectSpread({},e,{modules:r,contentItems:r.reduce(function(e,t){return e.concat(t.content_item_ids.map(function(e){return n[e]}))},[]).filter(Boolean),contentItemIds:r.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),_=Object(r.createSelector)(f.b,o.d,function(e,t){return Object(c.b)(t,e.content_items)}),v=(Object(r.createSelector)(f.b,o.d,function(e,t){return Object(c.b)(t,e.content_items)}),Object(r.createSelector)(f.b,_,function(e,t){return e.content_items.map(function(e){return t[e]}).filter(function(e){return e&&"lesson"===e.type})})),O=(Object(r.createSelector)(v,function(e,t,n){return n.id},function(e,t){return e.findIndex(function(e){return e.id===t})}),Object(r.createSelector)(v,p.b,function(e,t){return e.find(function(e){var n=t[e.id];return n&&!n.completed})||e[e.length-1]})),h=Object(r.createSelector)(O,v,function(e,t){return t.findIndex(function(t){return t.id===e.id})}),g=Object(r.createSelector)(O,p.b,function(e,t){var n=t[e.id];return n.completed?e.exercises.length:n.exercises_completed}),k=(Object(r.createSelector)(O,g,function(e,t){return e.exercises[t]}),Object(r.createSelector)(O,p.b,function(e,t){return t[e.id].current_exercise_checkpoints_completed||0})),x=Object(r.createSelector)(function(e,t){var n=t.lessonId;return Object(p.a)(e,{id:n})},function(e,t){return t.exerciseIndex},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return!!(e.completed||0===t||t<=e.exercises_completed)}),w=Object(r.createSelector)(function(e){return e},function(e){return Object(s.c)(e)},function(e){return Object(a.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exercises:[]},n=(arguments.length>2?arguments[2]:void 0).exerciseSlug,r=t.exercises.findIndex(function(e){return e.slug===n});return x(e,{lessonId:t.id,exerciseIndex:r})}),y=Object(r.createSelector)(p.b,function(e){return Object(s.c)(e)},function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).id]}),S=Object(r.createSelector)(h,g,k,function(e,t,n){return{lesson:e,exercise:t,checkpoint:n}}),I=Object(r.createSelector)(y,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).started}),P=Object(r.createSelector)(y,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!e.current_exercise_checkpoints_completed&&e.current_exercise_checkpoints_completed>0}),T=Object(r.createSelector)(y,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.exercises_completed?e.exercises_completed:0}),G=Object(r.createSelector)(function(e){return e},function(e){return y(e)},function(e){return Object(s.c)(e)},function(e){return Object(a.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{exercises:[]},r=(arguments.length>3?arguments[3]:void 0).exerciseSlug;if(t.completed)return!0;var c=n.exercises.findIndex(function(e){return e.slug===r}),a=Object(o.a)(e,n.id),s=t.exercises_completed,i=a&&a[c]>0,u=a&&a[c]<=t.current_exercise_checkpoints_completed,l=c===t.exercises_completed;return c<s||!!(l&&i&&u)})},"./webpack/assets/javascripts/platform/state/scenes/path/actions.js":function(e,t,n){"use strict";n.d(t,"c",function(){return I}),n.d(t,"a",function(){return P}),n.d(t,"b",function(){return $});var r=n("./node_modules/@babel/runtime/regenerator/index.js"),c=n.n(r),a=n("./node_modules/redux-first-router/dist/index.js"),s=n("./webpack/assets/javascripts/state/entities/contentItems/actions.js"),o=n("./webpack/assets/javascripts/platform/state/location/selectors.js"),i=n("./webpack/assets/javascripts/platform/state/entities/paths/actions.js"),u=n("./webpack/assets/javascripts/platform/state/entities/courses/actions.js"),l=n("./webpack/assets/javascripts/platform/state/entities/tracks/actions.js"),f=n("./webpack/assets/javascripts/platform/state/entities/modules/actions.js"),p=n("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/index.js"),d=n("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js"),b=n("./webpack/assets/javascripts/platform/state/entities/tracks/selectors.js"),j=n("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),m=n("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),_=n("./webpack/assets/javascripts/platform/state/entities/paths/selectors.js"),v=n("./webpack/assets/javascripts/platform/state/entities/modules/selectors.js"),O=n("./webpack/assets/javascripts/platform/state/entities/selectors.js"),h=n("./webpack/assets/javascripts/platform/routes.js"),g=n("./webpack/assets/javascripts/platform/state/location/actions.js");function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var n=[],r=!0,c=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){c=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,r,c,a,s){try{var o=e[a](s),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,c)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(r,c){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,c,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,c,_next,_throw,"throw",e)}_next(void 0)})}}var k=function createNavigationPayload(e){var t=e.path,n=e.track,r=e.module,c=e.contentItem;return{pathSlug:t.slug,trackSlug:n.slug,course:r.slug,contentItemType:h.b[c.type].pluralType,contentItemSlug:c.slug}},x=function pathNavigate(e){var t=e.path,n=e.track,r=e.module,s=e.contentItem,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){var e=_asyncToGenerator(c.a.mark(function _callee(e,u){var l,f,p,d;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:l=u(),f=Object(o.b)(l),p=k({path:t,track:n,module:r,contentItem:s}),d=g.f(_objectSpread({},p,{query:f})),i&&(d=Object(a.redirect)(d)),e(d);case 6:case"end":return c.stop()}},_callee,this)}));return function(t,n){return e.apply(this,arguments)}}()},w=function pathResume(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee2(e,t){var n,r,a,i,u,l,f,p,b;return c.a.wrap(function _callee2$(c){for(;;)switch(c.prev=c.next){case 0:return n=t(),r=Object(o.a)(n),a=Object(_.b)(n,r.pathSlug),i=Object(O.e)(n,a.id),u=Object(d.d)(t(),i.contentItemIds),l=u?u.content_item_id:i.contentItemIds[i.contentItemIds.length],c.next=8,e(Object(s.a)({ids:[l],minimal:!1}));case 8:f=Object(j.c)(t(),{id:l}),p=i.modules.find(function(e){return e.content_item_ids.indexOf(f.id)>-1}),b=i.tracks.find(function(e){return e.module_ids.indexOf(p.id)>-1}),e(x({path:a,track:b,module:p,contentItem:f}));case 12:case"end":return c.stop()}},_callee2,this)}));return function(t,n){return e.apply(this,arguments)}}()},y=function pathTrackResume(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee3(e,t){var n,r,a,i,u,l,f,p,m;return c.a.wrap(function _callee3$(c){for(;;)switch(c.prev=c.next){case 0:if(n=t(),r=Object(o.a)(n),a=Object(_.b)(n,r.pathSlug),i=Object(b.b)(n,r.trackSlug)){c.next=7;break}return e(w()),c.abrupt("return");case 7:return u=Object(O.f)(n,i.id),l=Object(d.d)(t(),u.contentItemIds),f=l?l.content_item_id:u.contentItemIds[u.contentItemIds.length-1],c.next=12,e(Object(s.a)({ids:[f],minimal:!1}));case 12:p=Object(j.c)(t(),{id:f}),m=u.modules.find(function(e){return e.content_item_ids.indexOf(p.id)>-1}),e(x({path:a,track:i,module:m,contentItem:p}));case 15:case"end":return c.stop()}},_callee3,this)}));return function(t,n){return e.apply(this,arguments)}}()},S=function pathModuleResume(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee4(e,t){var n,r,a,i,u,l,f,p,m;return c.a.wrap(function _callee4$(c){for(;;)switch(c.prev=c.next){case 0:if(n=t(),r=Object(o.a)(n),a=Object(_.b)(n,r.pathSlug),i=Object(b.b)(n,r.trackSlug)){c.next=7;break}return e(w()),c.abrupt("return");case 7:if(u=Object(v.a)(n,r.course)){c.next=11;break}return e(y()),c.abrupt("return");case 11:return l=u.content_item_ids,f=Object(d.d)(t(),l),p=f?f.content_item_id:l[l.length],c.next=16,e(Object(s.a)({ids:[p],minimal:!1}));case 16:m=Object(j.c)(t(),{id:p}),e(x({path:a,track:i,module:u,contentItem:m}));case 18:case"end":return c.stop()}},_callee4,this)}));return function(t,n){return e.apply(this,arguments)}}()},I=function pathRedirect(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee5(e,t){var n,r,a,u,d,b,m,_,v,O,h;return c.a.wrap(function _callee5$(c){for(;;)switch(c.prev=c.next){case 0:return n=t(),r=Object(o.a)(n),c.next=4,Object(i.e)({slug:r.pathSlug,limit:1});case 4:return a=c.sent,u=a.data,d=(void 0===u?[]:u)[0],c.next=10,e(Object(i.b)(d));case 10:return c.next=12,Object(l.a)({id:d.track_ids});case 12:return b=c.sent,m=b.data,c.next=16,e(Object(l.b)(m));case 16:return c.next=18,Object(f.c)({id:m.reduce(function(e,t){return e.concat(t.module_ids)},[])});case 18:return _=c.sent,v=_.data,c.next=22,e(Object(f.a)(v));case 22:return O=v.reduce(function(e,t){return e.concat(t.content_item_ids)},[]),c.next=25,e(Object(s.a)({ids:O,minimal:!1}));case 25:return h=O.map(function(e){return Object(j.c)(t(),{id:e})}),c.next=28,e(Object(p.f)(h));case 28:r.trackSlug?r.moduleSlug?e(S()):e(y()):e(w());case 29:case"end":return c.stop()}},_callee5,this)}));return function(t,n){return e.apply(this,arguments)}}()},P=function fetchInitialPathContent(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee6(e,t){var n,r,a,f,d,b,m;return c.a.wrap(function _callee6$(c){for(;;)switch(c.prev=c.next){case 0:return n=t(),r=Object(o.a)(n),c.next=4,Promise.all([e(Object(i.c)({slug:r.pathSlug})),e(Object(l.c)({slug:r.trackSlug})),e(Object(u.a)({slug:r.course}))]);case 4:return a=c.sent,f=_slicedToArray(a,3),d=f[2],b=d.payload,c.next=10,e(Object(s.a)({ids:b.syllabus.content_items,minimal:!1}));case 10:return m=b.syllabus.content_items.map(function(e){return Object(j.c)(t(),{id:e})}),c.next=13,e(Object(p.f)(m));case 13:case"end":return c.stop()}},_callee6,this)}));return function(t,n){return e.apply(this,arguments)}}()},T=function navigateToNextTrack(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee7(e,t){var n,r,a,s,i,u,f,p;return c.a.wrap(function _callee7$(c){for(;;)switch(c.prev=c.next){case 0:if(n=t(),r=Object(o.a)(n),a=Object(_.b)(n,r.pathSlug),s=Object(b.b)(n,r.trackSlug),i=a.track_ids.findIndex(function(e){return s.id===e}),!(u=a.track_ids[i+1])){c.next=14;break}return c.next=9,e(Object(l.c)({id:u}));case 9:f=Object(b.a)(t(),u),p=Object(o.b)(n),window.location.assign(Object(h.c)(g.i({pathSlug:a.slug,trackSlug:f.slug,query:p}))),c.next=15;break;case 14:window.location.assign("/learn/paths/".concat(r.pathSlug));case 15:case"end":return c.stop()}},_callee7,this)}));return function(t,n){return e.apply(this,arguments)}}()},G=function navigateToNextModule(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee8(e,t){var n,r,a,s,i,u,l,p,d,j;return c.a.wrap(function _callee8$(c){for(;;)switch(c.prev=c.next){case 0:if(n=t(),r=Object(o.a)(n),a=Object(_.b)(n,r.pathSlug),s=Object(b.b)(n,r.trackSlug),i=Object(m.a)(n,{slug:r.course}),u=s.module_ids.findIndex(function(e){return i.uuid===e}),!(l=s.module_ids[u+1])){c.next=16;break}return c.next=10,e(Object(f.b)({id:l}));case 10:p=c.sent,d=p.payload,j=Object(o.b)(n),window.location.assign(Object(h.c)(g.h({pathSlug:a.slug,trackSlug:s.slug,course:d[0].slug,query:j}))),c.next=17;break;case 16:e(T());case 17:case"end":return c.stop()}},_callee8,this)}));return function(t,n){return e.apply(this,arguments)}}()},$=function navigateToNextPathContent(){return function(){var e=_asyncToGenerator(c.a.mark(function _callee9(e){return c.a.wrap(function _callee9$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(G()));case 1:case"end":return t.stop()}},_callee9,this)}));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=a6089f30b68e75e34a92-3df2779f647d1f8a37bc.js.map
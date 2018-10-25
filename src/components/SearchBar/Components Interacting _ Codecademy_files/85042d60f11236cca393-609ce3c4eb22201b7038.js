(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"./webpack/assets/javascripts/platform/components/lessons.js":function(e,t,r){"use strict";var s=r("./node_modules/lodash/get.js"),n=r.n(s),o=r("./webpack/assets/javascripts/platform/controllers/adapters/adapters.js"),c=r("./node_modules/prop-types/index.js"),a=r.n(c),i=r("./node_modules/react/index.js"),u=r.n(i),p=r("./node_modules/create-react-class/index.js"),l=r.n(p),d=r("./node_modules/react-redux/es/index.js"),f=r("./node_modules/@codecademy/fluxile/dist/index.js"),h=r("./node_modules/classnames/index.js"),m=r.n(h),b=r("./webpack/assets/javascripts/platform/libs/base_mixins.js"),x=r("./webpack/assets/javascripts/platform/libs/activityLogger.js"),g=r("./webpack/assets/javascripts/libs/statsd.js"),v=r.n(g),j=r("./webpack/assets/javascripts/libs/userAttributes.js"),_=r("./webpack/assets/javascripts/libs/logging/logger.js"),k={showErrors:function showErrors(e){e&&(e.component||(e.component=this._chooseComponentForHint()),e.visible=!0,e.timestamp=(new Date).valueOf(),this.setState({errors:e}))},_chooseComponentForHint:function _chooseComponentForHint(){for(var e=["PersistentCodeEditor","Terminal","WebBrowser"],t=0;t<e.length;t++){var r=e[t];if(this.props.currentExercise.components[r])return r}var s=Object.keys(this.props.currentExercise.components).filter(function(e){return"Narrative"!==e});return s.length>0?s[0]:null},hideErrors:function hideErrors(){this.state.errors.visible=!1,this.state.errors.timestamp=(new Date).valueOf(),this.setState({errors:this.state.errors})}},y=r("./webpack/assets/javascripts/platform/components/ComponentGrid/index.js"),w=r("./webpack/assets/javascripts/platform/components/LearningEnvironmentMain/index.js"),E=r("./webpack/assets/javascripts/platform/components/Header/index.js"),O=r("./webpack/assets/javascripts/platform/components/Footer/index.js"),S=r("./node_modules/lodash/isEmpty.js"),P=r.n(S),C=r("./node_modules/@codecademy/gamut/index.js"),I=r("./webpack/assets/javascripts/platform/components/Wall/index.js"),L=r("./node_modules/@codecademy/i18n/index.js"),T=r("./webpack/assets/javascripts/platform/state/entities/selectors.js");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function LockedExerciseWall(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LockedExerciseWall);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(LockedExerciseWall)).call.apply(e,[this].concat(s)))).navigateToExercise=function(){t.props.navigate({exerciseIndex:t.props.exerciseProgressedToIndex})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LockedExerciseWall,i["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(LockedExerciseWall,[{key:"render",value:function render(){var e=this.props.lessonStarted?Object(L.b)("views.learning_environment.components.locked_exercise_wall.continue"):this.props.title,t=this.props.lessonStarted?Object(L.b)("views.learning_environment.components.locked_exercise_wall.started_text"):Object(L.b)("views.learning_environment.components.locked_exercise_wall.unstarted_text"),r=this.props.lessonStarted?Object(L.b)("views.learning_environment.components.locked_exercise_wall.resume"):Object(L.b)("views.learning_environment.components.locked_exercise_wall.start"),s=u.a.createElement(C.a,{outline:!0,onClick:this.navigateToExercise},r),n=u.a.createElement(C.a,{outline:!0,href:this.props.exitPaths.back},r);return u.a.createElement(I.a,null,u.a.createElement("h2",null,e),u.a.createElement("p",null,t),P()(this.props.exerciseProgressedToIndex)?n:s)}}]),LockedExerciseWall}();R.propTypes={lessonStarted:a.a.bool,title:a.a.string,navigate:a.a.func,exerciseProgressedToIndex:a.a.number,exitPaths:a.a.object};var A=Object(d.b)(function mapStateToProps(e){return{exerciseProgressedToIndex:Object(T.g)(e)}})(R),W=r("./webpack/assets/javascripts/platform/components/IdleWall/index.js"),N=r("./webpack/assets/javascripts/components/MaintenancePane/index.js"),M=r("./node_modules/@codecademy/gamut/Button/index.js"),B=r("./webpack/assets/javascripts/platform/mixins/keyboard_events.js"),D=l()({displayName:"Navigation",propTypes:{navigate:a.a.func.isRequired,currentExerciseIndex:a.a.number.isRequired,currentLesson:a.a.object.isRequired,mayProceed:a.a.bool.isRequired,nextButtonText:a.a.string,contentItemProgresses:a.a.object},mixins:[B.a],onNextEvent:function onNextEvent(){this.next()},onPreviousEvent:function onPreviousEvent(){this.previous()},next:function next(){this.props.mayProceed&&this.props.navigate({exerciseIndex:this.props.currentExerciseIndex+1})},previous:function previous(){this.props.currentExerciseIndex<1||this.props.navigate({exerciseIndex:this.props.currentExerciseIndex-1})},isLastExerciseInLesson:function isLastExerciseInLesson(){return this.props.currentExerciseIndex+1===this.currentLessonExerciseCount()},nextButtonText:function nextButtonText(){var nextButtonText=this.props.nextButtonText;return nextButtonText||(this.isLastExerciseInLesson()?Object(L.b)("views.learning_environment.components.exercise_navigation.up_next"):Object(L.b)("views.learning_environment.components.exercise_navigation.next"))},currentLessonExerciseCount:function currentLessonExerciseCount(){return this.props.currentLesson.exercises.length},render:function render(){var e=this.props.currentExerciseIndex<1;return u.a.createElement("div",{className:"fcn-nav-wrapper"},u.a.createElement("div",{className:"fcn-nav-wrapper__center fcn-progress-container"},u.a.createElement(M.a,{theme:"grey",outline:!0,disabled:e,onClick:this.previous,style:{minWidth:"6rem"}},Object(L.b)("views.learning_environment.components.exercise_navigation.back")),u.a.createElement("div",{className:"fnc-nav__exercise-count"},"".concat(this.props.currentExerciseIndex+1,"/").concat(this.currentLessonExerciseCount())),u.a.createElement(M.a,{theme:"yellow",id:"discovery-next",go:this.props.mayProceed,disabled:!this.props.mayProceed,onClick:this.next,style:{minWidth:"6rem"}},this.nextButtonText())))}}),G=r("./webpack/assets/javascripts/platform/components/GetHelp/index.js"),U=r("./webpack/assets/javascripts/platform/components/LakituContainer/index.js"),q=r("./webpack/assets/javascripts/platform/actions/AdapterActions.js"),F=r("./webpack/assets/javascripts/platform/actions/WorkspaceActions.js"),H=r("./webpack/assets/javascripts/platform/actions/CheckpointActions.js"),$=(r("./webpack/assets/javascripts/platform/stores/AdapterStore.js"),r("./webpack/assets/javascripts/platform/stores/workspace/WorkspaceStore.js")),z=r("./webpack/assets/javascripts/platform/stores/checkpoints/CheckpointStore.js"),J=r("./webpack/assets/javascripts/platform/stores/LessonCursorStore.js"),Q=r("./webpack/assets/javascripts/platform/libs/workspace/setup.js"),K=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/lesson.js"),V=r("./webpack/assets/javascripts/platform/state/tracking/actions.js");function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X={setProgressToCurrentExercise:K.c,trackSubmit:V.a},Y=l()({displayName:"Lessons",mixins:b.a.concat([k,f.StateMixin.connect($.a)]),propTypes:{isInMaintenanceMode:a.a.bool,contentStudioURL:a.a.string,currentLesson:a.a.object,currentExercise:a.a.object,currentExerciseIndex:a.a.number,exitPaths:a.a.object,formats:a.a.object,features:a.a.object,hasButterbar:a.a.bool,locationParams:a.a.object,prerender:a.a.object,profileImage:a.a.string,contentItemProgresses:a.a.object.isRequired,userId:a.a.string,inComponentGridRewrite:a.a.bool,isAccessible:a.a.bool.isRequired,isLessonStarted:a.a.bool,isExerciseStarted:a.a.bool,canAccessNextExercise:a.a.bool.isRequired,isOnFarthestUnlockedExercise:a.a.bool.isRequired,achievements:a.a.array,setProgressToCurrentExercise:a.a.func.isRequired,navigateExercise:a.a.func,locationQuery:a.a.object,courseTitle:a.a.string,isLintingDisabled:a.a.bool,programSlug:a.a.string,courseSlug:a.a.string,forumCategory:a.a.string,authors:a.a.array,completeLesson:a.a.func,getLessonCompletedModal:a.a.func,courseMeta:a.a.object,isCurrentExerciseComplete:a.a.bool,advanceProgressByCheckpoint:a.a.func,advanceProgressToNextExercise:a.a.func,reportEvalError:a.a.func,trackSubmit:a.a.func},getInitialState:function getInitialState(){return{errors:{},readonly:!1,drawerOpen:!1,godexStatus:{type:"",message:"",visible:!1},godexReady:!1,fileNavReady:!1,skipTests:!1}},getDefaultProps:function getDefaultProps(){return{isLintingDisabled:!1,forumCategory:"",authors:[],courseSlug:"",isLessonStarted:!0,getLessonCompletedModal:function getLessonCompletedModal(){return null},exitPaths:{},achievements:[]}},componentWillMount:function componentWillMount(){H.a.saveControllerReference(this),$.a.setController(this),this.adapter=this.getAdapter()},componentDidMount:function componentDidMount(){j.a.isAnon()||this.initialize()},componentDidUpdate:function componentDidUpdate(e){this.didUpdateCurrentContent(e)&&(this.initialize(),J.a.setCursor({lessonId:this.props.currentLesson.id,exerciseSlug:this.props.currentExercise.slug}))},initialize:function initialize(){this.adapter.trigger("interface:ready"),this.updateWorkspace(this.props.currentExercise),this.adapter.extendCache(),H.a.load(this.props.currentExercise.tests.checkpoints),this.setState({disabled:!1}),Object(x.a)("info","Mounted Lessons controller on exercise: ".concat(this.props.currentExercise.slug))},navigate:function navigate(e){var t=e.exerciseIndex;H.a.abort();var r=this.props,s=r.currentLesson,n=r.completeLesson;if(t>=s.exercises.length)return n();var o=s.exercises[t];return this.props.navigateExercise({exerciseSlug:o.slug}),Object(x.a)("info","Navigated to exercise '".concat(s.exercises[t].slug,"'"))},getAdapter:function getAdapter(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.currentExercise.components,t=o.a.forComponents(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){_defineProperty(e,t,r[t])})}return e}({},e));return t.controller=this,this.adapter&&(this.adapter.unsubCheckpoints&&this.adapter.unsubCheckpoints(),t.inheritCache(this.adapter),this.adapter.destroy(),this.adapter=null),q.a.newAdapter(t),t},updateWorkspace:function updateWorkspace(e){var t=this;j.a.isAnon()||Object(Q.a)({content:e,userId:this.props.userId}).then(function(){t.adapter.trigger("godex:ready")}).then(this.exerciseSetup).catch(function(e){_.a.error({message:"Setup Workspace failed with: ".concat(e)})})},exerciseSetup:function exerciseSetup(){var e=this,t=this.props.currentExercise.setup,r=this.props.isOnFarthestUnlockedExercise&&!this.props.isExerciseStarted;t&&r&&$.a.execute(t.command).then(F.a.persist).then(function(){v.a.increment("francine.godexer.setup-exercise","success"),e.adapter.trigger("interface:ready")}).catch(function(e){_.a.error(e),v.a.increment("francine.godexer.setup-exercise","error")})},didUpdateCurrentContent:function didUpdateCurrentContent(e){return e.currentExerciseIndex!==this.props.currentExerciseIndex},pickAWall:function pickAWall(){if(j.a.isAnon())return null;var e=!this.state.nolock&&!this.props.isAccessible;return this.props.isInMaintenanceMode&&!j.a.isAdmin()?u.a.createElement(I.a,null,u.a.createElement(N.a,null)):this.state.workspaceIdle?u.a.createElement(W.a,null):e?u.a.createElement(A,{lessonStarted:this.props.isLessonStarted,title:this.getTitle(),navigate:this.navigate,exitPaths:this.props.exitPaths}):null},setProgressToCurrentExercise:function setProgressToCurrentExercise(){H.a.reset(),this.props.setProgressToCurrentExercise()},currentWorkspace:function currentWorkspace(){return this.props.currentExercise.workspace},initialSavepointSlug:function initialSavepointSlug(){return"".concat(this.props.currentExercise.slug,"-initial")},mayResetExercise:function mayResetExercise(){return void 0!==this.adapter&&function getCheckpointCount(){var e=z.a.state.checkpoints;return e?e.length:0}()>0},finalSavepointSlug:function finalSavepointSlug(){return"".concat(this.props.currentExercise.slug,"-final")},getWorkspaceSetupCommand:function getWorkspaceSetupCommand(){return n()(this.props.currentExercise,"setup.command")},getTitle:function getTitle(){var e=this.props,t=e.courseTitle,r=e.currentLesson;return t||r.title},render:function render(){var e=this.props,t=e.currentLesson,r=e.currentExercise,s=e.courseSlug,o=e.forumCategory,c=e.hasButterbar,a=e.programSlug,i={isAnon:j.a.isAnon()},p={readonly:this.state.readonly,fileNavReady:this.state.fileNavReady,isProject:!1,disableLinting:this.props.isLintingDisabled},l={errors:this.state.errors,wall:this.pickAWall(),contentItemTitle:r.title,contentParentTitle:t.title,bugReportData:{course:s||a,skill:t.slug,exercise:r.slug,backend:this.currentWorkspace().backend},generatedWorkspaceName:"".concat(t.slug,"-").concat(r.slug),forumCategory:o},d={componentShouldBeDisabled:this.componentShouldBeDisabled},f=m()({francine:!0,"francine--butterbar":c}),h=Object.keys(r.components),b=h.includes("PersistentCodeEditor"),x=h.length>2,g=!(b&&x);return u.a.createElement("div",{id:"workspace",className:f},g&&u.a.createElement(U.a,{type:"modal"}),u.a.createElement(E.a,{exitPaths:this.props.exitPaths,title:this.getTitle(),setProgressToCurrentExercise:this.setProgressToCurrentExercise,currentExercise:this.props.currentExercise,private:this.props.currentLesson.private,prerender:this.props.prerender,contentStudioURL:this.props.contentStudioURL,nolock:this.state.nolock,authoringMode:this.state.authoringMode,uploadSavepoints:this.state.uploadSavepoints,authors:this.props.authors,contentType:"lesson"}),this.discoveryCues(),this.props.inComponentGridRewrite?u.a.createElement(w.a,{key:this.props.currentExercise.slug,components:this.props.currentExercise.components,adapter:this.adapter,modifiers:p,helpers:d,presenter:l,user:i}):u.a.createElement(y.a,{ref:"componentGrid",key:this.props.currentExercise.slug,components:this.props.currentExercise.components,adapter:this.adapter,modifiers:p,helpers:d,presenter:l,user:i}),u.a.createElement(O.c,{currentType:"lesson",disabled:this.componentShouldBeDisabled("Footer"),currentLesson:this.props.currentLesson,currentExercise:this.props.currentExercise,params:this.props.locationParams,contentItemProgresses:this.props.contentItemProgresses,titleRoute:n()(this.props,"exitPaths.back"),title:"".concat(this.props.currentExerciseIndex+1,". ").concat(this.props.currentExercise.title),unlockAll:this.state.nolock,authors:this.props.authors,navigate:this.navigate,entityTitle:this.getTitle()},u.a.createElement(O.b,{position:"center"},u.a.createElement(D,{exitPaths:this.props.exitPaths,mayProceed:this.state.nolock||this.props.canAccessNextExercise,currentLesson:this.props.currentLesson,currentExerciseIndex:this.props.currentExerciseIndex,currentExercise:this.props.currentExercise,contentItemProgresses:this.props.contentItemProgresses,exerciseNames:this.props.currentLesson.exercises.map(function(e){return e.slug}),navigate:this.navigate,allowReset:this.mayResetExercise()})),u.a.createElement(O.b,{position:"right"},u.a.createElement(G.a,{noun:"exercise",allowReset:this.mayResetExercise(),contentSlug:this.props.currentLesson.slug,contentTitle:this.props.currentLesson.title,courseMeta:this.props.courseMeta||{}}))))}});t.a=Object(d.b)(null,X)(Y)},"./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/lesson.js":function(e,t,r){"use strict";var s=r("./node_modules/@babel/runtime/regenerator/index.js"),n=r.n(s),o=r("./node_modules/lodash/isNumber.js"),c=r.n(o),a=r("./node_modules/lodash/isUndefined.js"),i=r.n(a),u=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js"),p=r("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),l=r("./webpack/assets/javascripts/platform/state/selectors.js"),d=r("./webpack/assets/javascripts/libs/genericRequest/index.js"),f=r("./webpack/assets/javascripts/libs/logging/logger.js"),h=function asyncDelay(e){return new Promise(function(t){return setTimeout(function(){t()},e)})},m=r("./webpack/assets/javascripts/platform/libs/activityLogger.js"),b=r("./webpack/assets/javascripts/libs/hotjar.js"),x=r("./webpack/assets/javascripts/platform/state/ui/achievements/actions.js"),g=r("./webpack/assets/javascripts/platform/state/location/selectors.js"),v=r("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),j=r("./webpack/assets/javascripts/platform/state/entities/selectors.js"),_=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/actions/index.js");function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,s,n,o,c){try{var a=e[o](c),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(s,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(s,n){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,s,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,s,n,_next,_throw,"throw",e)}_next(void 0)})}}var k=function updateCourseProgressHandlers(e){var t=e.course,r=e.lesson,s=e.oldProgress;return function(){var e=_asyncToGenerator(n.a.mark(function _callee(e,o){var c,a,i,p,l,h,m;return n.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(j.h)(o(),t),a=Object(u.a)(o(),r),i=a.completed,p=i?c.lesson+1:c.lesson,l=i?0:c.exercise,n.prev=4,n.next=7,Object(d.a)({method:"POST",endpoint:"/learn/update_progress_handlers",data:{course_id:t.slug,new_progress:{current_state:_objectSpread({},c,{lesson:p,exercise:l})},old_progress:{current_state:_objectSpread({},s)}}});case 7:return h=n.sent,n.next=10,h.json();case 10:if(m=n.sent,h.ok){n.next=13;break}throw Error(h.statusText);case 13:m.achievements&&m.achievements.length&&e(Object(x.b)(m.achievements)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(4),f.a.error("Unable to process progress update: ".concat(n.t0));case 19:case"end":return n.stop()}},_callee,this,[[4,16]])}));return function(t,r){return e.apply(this,arguments)}}()},y=function createProgressRequest(e){return _asyncToGenerator(n.a.mark(function _callee2(){return n.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(d.a)({method:"POST",endpoint:"/learn/update_progress",data:e}));case 1:case"end":return t.stop()}},_callee2,this)}))},w=function updateLessonProgressOnServer(e){var t=e.lesson,r=void 0===t?{}:t,s=e.newProgress,o=void 0===s?{}:s,c=e.isLessonComplete;return function(){var e=_asyncToGenerator(n.a.mark(function _callee3(e,t){var s,a,i,u,p,l,d,x,w,E;return n.a.wrap(function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return s=t(),a=s,o.exercise>=r.exercises.length&&(c=!0),i={lesson_id:r.id,new_progress:o,is_lesson_complete:c},n.prev=4,u=y(i),n.next=8,u();case 8:if(p=n.sent,l=1,p.ok){n.next=17;break}return n.next=13,h(500);case 13:return l+=1,n.next=16,u();case 16:p=n.sent;case 17:if(p.ok){n.next=24;break}return n.next=20,h(1e3);case 20:return l+=1,n.next=23,u();case 23:p=n.sent;case 24:if(p.ok){n.next=26;break}throw Error(p.statusText);case 26:return n.next=28,p.json();case 28:return d=n.sent,n.next=31,e(Object(_.c)(d));case 31:Object(m.a)("info","Successfully persisted progress for content_item after ".concat(l," tries: ").concat(JSON.stringify(i))),n.next=41;break;case 34:return n.prev=34,n.t0=n.catch(4),Object(b.a)("tagRecording",["Failed to Save Exercise Progress"]),n.next=39,e(Object(_.d)({content_item_id:i.lesson_id,exercises_completed:o.exercise,current_exercise_checkpoints_completed:o.checkpoint,completed:Boolean(c),progress_pct:Math.floor(o.exercise/r.exercises.length*100)}));case 39:Object(m.a)("warn","Failed to persist progress for content_item : ".concat(JSON.stringify(i))),f.a.error({message:"Unable to propagate new_progress to the server : ".concat(n.t0," : ").concat(JSON.stringify(i,null,2))});case 41:if(!(x=Object(g.a)(a).course)){n.next=47;break}return w=Object(v.a)(a,{slug:x}),E=Object(j.h)(a,w),n.next=47,e(k({course:w,lesson:r,oldProgress:E}));case 47:case"end":return n.stop()}},_callee3,this,[[4,34]])}));return function(t,r){return e.apply(this,arguments)}}()};function lesson_asyncGeneratorStep(e,t,r,s,n,o,c){try{var a=e[o](c),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(s,n)}function lesson_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(s,n){var o=e.apply(t,r);function _next(e){lesson_asyncGeneratorStep(o,s,n,_next,_throw,"next",e)}function _throw(e){lesson_asyncGeneratorStep(o,s,n,_next,_throw,"throw",e)}_next(void 0)})}}function getCurrentLessonAndExercise(e){var t=Object(l.c)(e),r=Object(l.g)(e),s=Object(p.g)(e,t,r);return{lesson:t,exercise:r,exerciseIndex:s,exerciseCheckpointCount:Object(p.e)(e,{lessonId:t.id,exerciseIndex:s}),farthestCheckpointIndex:Object(u.c)(e,t)}}r.d(t,"a",function(){return E}),r.d(t,"b",function(){return O}),r.d(t,"c",function(){return S});var E=function advanceProgressByCheckpoint(e){return function(){var t=lesson_asyncToGenerator(n.a.mark(function _callee(t,r){var s,o,a,u,p,d,f,h,m,b,x,g;return n.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!i()(e)){n.next=2;break}throw new TypeError('Expected number of checkpoints in "advanceProgressByCheckpoint" action');case 2:if(c()(e)){n.next=4;break}throw new TypeError('Expected number of checkpoints to be an Integer in "advanceProgressByCheckpoint" action');case 4:if(!(e<1)){n.next=6;break}return n.abrupt("return");case 6:if(s=r(),Object(l.b)(s)){n.next=9;break}return n.abrupt("return");case 9:return o=getCurrentLessonAndExercise(s),a=o.lesson,u=o.exerciseIndex,p=o.exerciseCheckpointCount,d=o.farthestCheckpointIndex,f=d+e,m=(h=u)>=a.exercises.length-1,b=f>=p,x=m&&b,b&&(h=u+1,f=0),g={exercise:h,checkpoint:f},n.next=19,t(w({lesson:a,newProgress:g,isLessonComplete:x}));case 19:case"end":return n.stop()}},_callee,this)}));return function(e,r){return t.apply(this,arguments)}}()},O=function advanceProgressToNextExercise(){return function(){var e=lesson_asyncToGenerator(n.a.mark(function _callee2(e,t){var r,s,o,c,a;return n.a.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return r=t(),s=getCurrentLessonAndExercise(r),o=s.exerciseCheckpointCount,c=s.farthestCheckpointIndex,a=o-c,n.next=5,e(E(a));case 5:case"end":return n.stop()}},_callee2,this)}));return function(t,r){return e.apply(this,arguments)}}()},S=function setProgressToCurrentExercise(){return function(){var e=lesson_asyncToGenerator(n.a.mark(function _callee3(e,t){var r,s,o,c,a;return n.a.wrap(function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return r=t(),s=getCurrentLessonAndExercise(r),o=s.lesson,c=s.exerciseIndex,a={checkpoint:0,exercise:c},n.next=5,e(w({lesson:o,newProgress:a}));case 5:case"end":return n.stop()}},_callee3,this)}));return function(t,r){return e.apply(this,arguments)}}()}},"./webpack/assets/javascripts/platform/state/entities/modules/selectors.js":function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});var s=r("./node_modules/reselect/lib/index.js"),n=function selectModules(e){return e.entities.modules.byId},o=(Object(s.createSelector)(n,function(e,t){return t.id},function(e,t){return e[t]}),Object(s.createSelector)(n,function(e,t){return t.slug},function(e,t){return Object.values(e).find(function(e){return e.slug===t})}))},"./webpack/assets/javascripts/platform/state/entities/selectors.js":function(e,t,r){"use strict";r.d(t,"e",function(){return m}),r.d(t,"f",function(){return b}),r.d(t,"a",function(){return w}),r.d(t,"h",function(){return O}),r.d(t,"d",function(){return S}),r.d(t,"c",function(){return P}),r.d(t,"g",function(){return C}),r.d(t,"b",function(){return I});var s=r("./node_modules/reselect/lib/index.js"),n=r("./webpack/assets/javascripts/libs/state/entityHelpers.js"),o=r("./webpack/assets/javascripts/platform/state/location/selectors.js"),c=r("./webpack/assets/javascripts/platform/state/selectors.js"),a=r("./webpack/assets/javascripts/platform/state/entities/contentItems/selectors.js"),i=r("./webpack/assets/javascripts/platform/state/entities/paths/selectors.js"),u=r("./webpack/assets/javascripts/platform/state/entities/tracks/selectors.js"),p=r("./webpack/assets/javascripts/platform/state/entities/modules/selectors.js"),l=r("./webpack/assets/javascripts/platform/state/entities/courses/selectors.js"),d=r("./webpack/assets/javascripts/platform/state/entities/contentItemProgresses/selectors.js");function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=Object(s.createSelector)(function(e,t){return Object(i.a)(e,t)},u.c,function(e,t){return e.track_ids.map(function(e){return t[e]})}),h=Object(s.createSelector)(function(e,t){return f(e,t)},p.b,function(e,t){return e.reduce(function(e,r){return e.concat(r.module_ids.map(function(e){return t[e]}))},[])}),m=Object(s.createSelector)(function(e,t){return Object(i.a)(e,t)},function(e,t){return f(e,t)},function(e,t){return h(e,t)},function(e,t,r){return _objectSpread({},e,{tracks:t,modules:r,contentItemIds:r.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),b=Object(s.createSelector)(function(e,t){return Object(u.a)(e,t)},p.b,a.d,function(e,t,r){var s=e.module_ids.map(function(e){return t[e]});return _objectSpread({},e,{modules:s,contentItems:s.reduce(function(e,t){return e.concat(t.content_item_ids.map(function(e){return r[e]}))},[]).filter(Boolean),contentItemIds:s.reduce(function(e,t){return e.concat(t.content_item_ids)},[])})}),x=Object(s.createSelector)(l.b,a.d,function(e,t){return Object(n.b)(t,e.content_items)}),g=(Object(s.createSelector)(l.b,a.d,function(e,t){return Object(n.b)(t,e.content_items)}),Object(s.createSelector)(l.b,x,function(e,t){return e.content_items.map(function(e){return t[e]}).filter(function(e){return e&&"lesson"===e.type})})),v=(Object(s.createSelector)(g,function(e,t,r){return r.id},function(e,t){return e.findIndex(function(e){return e.id===t})}),Object(s.createSelector)(g,d.b,function(e,t){return e.find(function(e){var r=t[e.id];return r&&!r.completed})||e[e.length-1]})),j=Object(s.createSelector)(v,g,function(e,t){return t.findIndex(function(t){return t.id===e.id})}),_=Object(s.createSelector)(v,d.b,function(e,t){var r=t[e.id];return r.completed?e.exercises.length:r.exercises_completed}),k=(Object(s.createSelector)(v,_,function(e,t){return e.exercises[t]}),Object(s.createSelector)(v,d.b,function(e,t){return t[e.id].current_exercise_checkpoints_completed||0})),y=Object(s.createSelector)(function(e,t){var r=t.lessonId;return Object(d.a)(e,{id:r})},function(e,t){return t.exerciseIndex},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return!!(e.completed||0===t||t<=e.exercises_completed)}),w=Object(s.createSelector)(function(e){return e},function(e){return Object(c.c)(e)},function(e){return Object(o.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{exercises:[]},r=(arguments.length>2?arguments[2]:void 0).exerciseSlug,s=t.exercises.findIndex(function(e){return e.slug===r});return y(e,{lessonId:t.id,exerciseIndex:s})}),E=Object(s.createSelector)(d.b,function(e){return Object(c.c)(e)},function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).id]}),O=Object(s.createSelector)(j,_,k,function(e,t,r){return{lesson:e,exercise:t,checkpoint:r}}),S=Object(s.createSelector)(E,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).started}),P=Object(s.createSelector)(E,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!e.current_exercise_checkpoints_completed&&e.current_exercise_checkpoints_completed>0}),C=Object(s.createSelector)(E,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.exercises_completed?e.exercises_completed:0}),I=Object(s.createSelector)(function(e){return e},function(e){return E(e)},function(e){return Object(c.c)(e)},function(e){return Object(o.a)(e)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{exercises:[]},s=(arguments.length>3?arguments[3]:void 0).exerciseSlug;if(t.completed)return!0;var n=r.exercises.findIndex(function(e){return e.slug===s}),o=Object(a.a)(e,r.id),c=t.exercises_completed,i=o&&o[n]>0,u=o&&o[n]<=t.current_exercise_checkpoints_completed,p=n===t.exercises_completed;return n<c||!!(p&&i&&u)})}}]);
//# sourceMappingURL=85042d60f11236cca393-609ce3c4eb22201b7038.js.map
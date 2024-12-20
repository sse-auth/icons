function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import path from "path";
import camelcase from "camelcase";
import { glob } from "../../scripts/glob.mjs";
export var icons = [{
  id: "ci",
  name: "Circum Icons",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/ci/*.svg"),
    formatter: name => "Ci".concat(name).replace(/_/g, "").replace(/&/g, "And")
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/ci",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "fa5",
  name: "Font Awesome 5",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/fa5/+(brands|solid)/*.svg"),
    formatter: name => "Fa".concat(name)
  }, {
    files: path.resolve(__dirname, "../../../svg/fa5/regular/*.svg"),
    formatter: name => "FaReg".concat(name)
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/fa5",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "fa6",
  name: "Font Awesome 6",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/fa6/+(brands|solid)/*.svg"),
    formatter: name => "Fa".concat(name)
  }, {
    files: path.resolve(__dirname, "../../../svg/fa6/regular/*.svg"),
    formatter: name => "FaReg".concat(name)
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/fa6",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "go",
  name: "Github Octicons icons",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/go/*.svg"),
    formatter: name => "Go".concat(name)
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/go",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "io",
  name: "Ionicons 7",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/io/*.svg"),
    formatter: name => "Io".concat(name)
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/io",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "md",
  name: "Material Design icons",
  contents: [{
    files: function () {
      var _files = _asyncToGenerator(function* () {
        var normal = yield glob(path.resolve(__dirname, "../../icons/material-design-icons/src/*/*/materialicons/24px.svg"));
        var twotone = yield glob(path.resolve(__dirname, "../../icons/material-design-icons/src/*/*/materialiconstwotone/24px.svg"));
        return [...normal, ...twotone.filter(file => !normal.includes(file.replace("twotone/", "/")))];
      });
      function files() {
        return _files.apply(this, arguments);
      }
      return files;
    }(),
    formatter: (name, file) => "Md".concat(camelcase(file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"), {
      pascalCase: true
    })),
    processWithSVGO: true
  }, {
    files: path.resolve(__dirname, "../../sse-icons/material-design-icons/src/*/*/materialiconsoutlined/24px.svg"),
    formatter: (name, file) => "MdOutline".concat(camelcase(file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"), {
      pascalCase: true
    })),
    processWithSVGO: true
  }],
  projectUrl: "http://google.github.io/material-design-icons/",
  license: "Apache License Version 2.0",
  licenseUrl: "https://github.com/google/material-design-icons/blob/master/LICENSE",
  source: {
    type: "git",
    localName: "material-design-icons",
    remoteDir: "src/",
    url: "https://github.com/google/material-design-icons.git",
    branch: "master",
    hash: "9beae745bb758f3ad56654fb377ea5cf62be4915"
  }
}, {
  id: "ti",
  name: "Typicons",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/ti/*.svg"),
    formatter: name => "Ti".concat(name).replace(/_/g, "").replace(/&/g, "And")
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/ti",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}, {
  id: "sse",
  name: "SSE Auth Icons",
  contents: [{
    files: path.resolve(__dirname, "../../../svg/sse/*.svg"),
    formatter: name => "SSE".concat(name).replace(/_/g, "").replace(/&/g, "And")
  }],
  projectUrl: "https://github.com/sse-auth/icons/blob/master/svg/sse",
  license: "MIT",
  licenseUrl: "https://github.com/sse-auth/icons/blob/master/LICENSE"
}
// {
//   id: "lu",
//   name: "Lucide",
//   contents: [
//     {
//       files: path.resolve(
//         path.dirname(require.resolve("lucide-static")),
//         "../icons/*.svg"
//       ),
//       formatter: (name) => `Lu${name}`,
//     },
//   ],
//   projectUrl: "https://lucide.dev/",
//   license: "ISC",
//   licenseUrl: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
// },
];
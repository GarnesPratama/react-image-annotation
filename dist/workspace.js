import { W as h, B as o } from "./index-SLaB_FDu.js";
import { H as B, b as H, I as L, R as v, S as y, c as $ } from "./index-SLaB_FDu.js";
import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useMemo as p } from "react";
import { s as b } from "./Portal-IhUi94Sd.js";
const t = b("div")({
  fontSize: 16,
  fontWeight: "bold",
  color: "gray"
}), C = ({
  children: n,
  onNext: a,
  onPrev: r,
  currentSampleIndex: i = 0,
  numberOfSamples: d = 1,
  globalSampleIndex: c = 1,
  titleContent: s,
  onClickHeaderItem: m
}) => {
  const f = p(
    () => [
      {
        name: "Prev",
        onClick: r,
        disabled: i === 0
      },
      {
        name: "Next",
        onClick: a
      },
      { name: "Save" }
    ],
    [i, a, r]
  );
  return /* @__PURE__ */ e(
    h,
    {
      headerLeftSide: s === void 0 ? [
        /* @__PURE__ */ e(o, { paddingLeft: 2, children: /* @__PURE__ */ l(t, { children: [
          "Image",
          " ",
          d > 1 ? `${i} / ${d}` : `${c}`
        ] }) }, "sample info")
      ] : [/* @__PURE__ */ e(o, { paddingLeft: 2, children: /* @__PURE__ */ e(t, { children: s }) }, "sample info")],
      onClickHeaderItem: m,
      headerItems: f,
      iconSidebarItems: [],
      rightSidebarItems: [],
      onClickIconSidebarItem: () => {
      },
      children: /* @__PURE__ */ e(o, { padding: [2, 0], style: { width: "100%" }, children: n })
    }
  );
};
export {
  B as Header,
  H as HeaderButton,
  L as IconSidebar,
  v as RightSidebar,
  y as SidebarBox,
  $ as WorkContainer,
  h as Workspace,
  C as WorkspaceContainer
};

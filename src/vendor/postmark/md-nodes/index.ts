// prettier-ignore
export const components = {
  "md-document": () => import("./md-document.vue"),

  "md-node": () => import("./md-node.vue"),

  "md-paragraph": () => import("./leaf-blocks/md-paragraph.vue"),
  "md-table": () => import("./leaf-blocks/md-table.vue"),
  "md-headline": () => import("./leaf-blocks/md-headline.vue"),
  "md-thematic-break": () => import("./leaf-blocks/md-thematic-break.vue"),
  "md-html-block": () => import("./leaf-blocks/md-html-block.vue"),
  "md-code-block": () => import("./leaf-blocks/md-code-block.vue"),
  "md-custom-block": () => import("./leaf-blocks/md-custom-block.vue"),

  "md-block-quote": () => import("./container-blocks/md-block-quote.vue"),
  "md-bullet-list": () => import("./container-blocks/md-bullet-list.vue"),
  "md-bullet-list-item": () => import("./container-blocks/md-bullet-list-item.vue"),
  "md-ordered-list": () => import("./container-blocks/md-ordered-list.vue"),
  "md-ordered-list-item": () => import("./container-blocks/md-ordered-list-item.vue"),

  "md-emphasis": () => import("./inlines/md-emphasis.vue"),
  "md-strong": () => import("./inlines/md-strong.vue"),
  "md-hard-line-break": () => import("./inlines/md-hard-line-break.vue"),
  "md-soft-line-break": () => import("./inlines/md-soft-line-break.vue"),
  "md-link": () => import("./inlines/md-link.vue"),
  "md-image": () => import("./inlines/md-image.vue"),
  "md-code": () => import("./inlines/md-code.vue"),
  "md-html-tag": () => import("./inlines/md-html-tag.vue"),
  "md-text": () => import("./inlines/md-text.vue"),
}

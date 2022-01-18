<template>
  <div class="w-full">
    <div class="entry">
      <div class="explanation">
        <div>
          Define <em>natural number</em> as an <b>inductive datatype</b>.
        </div>
      </div>

      <div class="code">
        <pre>
datatype Nat {
  zero: Nat
  add1(prev: Nat): Nat
}

function add(x: Nat, y: Nat): Nat {
  return induction (x) {
    case zero => y
    case add1(_prev, almost) =>
      add1(almost.prev)
  }
}
</pre
        >
      </div>
    </div>

    <div class="entry">
      <div class="explanation">
        <div>
          Prove the
          <em> commutative property of addition</em> for
          <em>natural number</em>, by defining a <b>function</b>.
        </div>
      </div>

      <div class="code">
        <pre>
function add_commute(
  x: Nat, y: Nat,
): Equal(Nat, add(x, y), add(y, x)) {
  return induction (x) {
    (x) => Equal(Nat, add(x, y), add(y, x))
    case zero => add_zero_commute(y)
    case add1(prev, almost) =>
      equal_compose(
        equal_map(almost.prev, add1),
        equal_swap(add_add1_commute(y, prev)),
      )
  }
}
</pre
        >
      </div>
    </div>

    <div class="entry">
      <div class="explanation">
        <div>
          Define mathematics structures, such as <em>Group</em>, as a
          <b>class</b>. Note that, we can use <b>extends</b> to reuse already
          defined <em>Monoid</em>.
        </div>
      </div>

      <div class="code">
        <pre>
class Group extends Monoid {
  inv(x: Element): Element

  inv_left(x: Element):
    Equal(Element, mul(inv(x), x), id)

  inv_right(x: Element):
    Equal(Element, mul(x, inv(x)), id)

  div(x: Element, y: Element): Element {
    return mul(x, inv(y))
  }
}
</pre
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>

<style scoped>
.entry {
  @apply w-full flex flex-col md:flex-row justify-center items-stretch;
}

.entry .explanation {
  @apply md:w-1/2 w-full flex items-center;
}

.entry .code {
  @apply md:w-1/2 md:py-12
  md:border-l-2 md:border-stone-300
  w-full
  py-6 px-3;
}

.entry .code pre {
  @apply overflow-x-auto text-base font-mono;
}
</style>

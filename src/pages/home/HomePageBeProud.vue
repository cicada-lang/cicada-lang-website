<script setup lang="ts">
import { BookmarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="w-full">
    <div class="entry">
      <div class="explanation">
        <div>
          Define <em>natural number</em> as an <b>inductive datatype</b>.
        </div>

        <div class="reference">
          <BookmarkIcon class="mr-1 w-4" />
          <a
            href="https://readonly.link/manuals/cicada-lang/cicada/-/datatypes/nat.md"
            target="_blank"
            >Natural Number</a
          >
        </div>
      </div>

      <div class="code">
        <pre><span class="keyword">datatype</span> <span class="type">Nat</span> {</pre>
        <pre>  <span class="ctor">zero</span>: <span class="type">Nat</span></pre>
        <pre>  <span class="ctor">add1</span>(prev: <span class="type">Nat</span>): <span class="type">Nat</span></pre>
        <pre>}</pre>
        <br />
        <pre><span class="keyword">function</span> <span class="define">add</span>(x: <span class="type">Nat</span>, y: <span class="type">Nat</span>): <span class="type">Nat</span> {</pre>
        <pre>  <span class="keyword">return</span> <span class="keyword">recursion</span> (x) {</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">zero</span> => y</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">add1</span>(prev, <span class="underline decoration-dotted decoration-2 underline-offset-2" v-tooltip="{ content: 'almost.prev will be the same as add(prev, y)', triggers: ['hover', 'click'] }">almost</span>) =></pre>
        <pre>      add1(almost.prev)</pre>
        <pre>  }</pre>
        <pre>}</pre>
      </div>
    </div>

    <div class="entry">
      <div class="explanation">
        <div>
          Prove the
          <em> commutative property of addition</em> for
          <em>natural number</em>, by defining a <b>function</b>.
        </div>

        <div class="reference">
          <BookmarkIcon class="mr-1 w-4" />
          <a
            href="https://readonly.link/manuals/cicada-lang/cicada/-/datatypes/proving-theorems-about-nat.md"
            target="_blank"
            >Proving Theorems About Nat</a
          >
        </div>
      </div>

      <div class="code">
        <pre><span class="keyword">function</span> <span class="define underline decoration-dotted decoration-2 underline-offset-2" v-tooltip="{ content: 'For all x and y in natural number, x + y = y + x', triggers: ['hover', 'click'] }">add_is_commutative</span>(</pre>
        <pre>  x: <span class="type">Nat</span>, y: <span class="type">Nat</span>,</pre>
        <pre>): <span class="type">Equal</span>(<span class="type">Nat</span>, add(x, y), add(y, x)) {</pre>
        <pre>  <span class="keyword">return</span> <span class="keyword">induction</span> (x) {</pre>
        <pre>    <span class="keyword">motive</span> (x) => <span class="type">Equal</span>(<span class="type">Nat</span>, add(x, y), add(y, x))</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">zero</span> => add_is_commutative_on_zero(y)</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">add1</span>(prev, almost) =></pre>
        <pre>      equal_compose(</pre>
        <pre>        equal_map(almost.prev, add1),</pre>
        <pre>        equal_swap(add_is_commutative_on_add1(y, prev)),</pre>
        <pre>      )</pre>
        <pre>  }</pre>
        <pre>}</pre>
      </div>
    </div>

    <div class="entry">
      <div class="explanation">
        <div>
          Define mathematics structures, such as <em>Group</em>, as a
          <b>class</b>. Note that, we can use <b>extends</b> to reuse already
          defined <em>Monoid</em>.
        </div>

        <div class="reference">
          <BookmarkIcon class="mr-1 w-4" />
          <a
            href="https://readonly.link/manuals/cicada-lang/cicada/-/class/mathematical-structure-as-class.md"
            target="_blank"
            >Mathematical Structure as Class</a
          >
        </div>
      </div>

      <div class="code">
        <pre><span class="keyword">class</span> <span class="type">Group</span> <span class="keyword">extends</span> <span class="type">Monoid</span> {</pre>
        <pre>  <span class="define">inv</span>(x: <span class="type">Element</span>): <span class="type">Element</span></pre>
        <br />
        <pre>  <span class="define">inv_left</span>(x: <span class="type">Element</span>):</pre>
        <pre>    <span class="type">Equal</span>(<span class="type">Element</span>, mul(inv(x), x), id)</pre>
        <br />
        <pre>  <span class="define">inv_right</span>(x: <span class="type">Element</span>):</pre>
        <pre>    <span class="type">Equal</span>(<span class="type">Element</span>, mul(x, inv(x)), id)</pre>
        <br />
        <pre>  <span class="define">div</span>(x: <span class="type">Element</span>, y: <span class="type">Element</span>): <span class="type">Element</span> {</pre>
        <pre>    <span class="keyword">return</span> mul(x, inv(y))</pre>
        <pre>  }</pre>
        <pre>}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entry {
  @apply flex w-full flex-col items-stretch justify-center md:flex-row;
}

.entry .explanation {
  @apply flex w-full
  flex-col
  justify-center pr-4
  pt-8
  text-xl md:w-1/2 md:text-2xl;
}

.entry .explanation .reference {
  @apply flex
  items-center
  self-end
  py-0.5 font-sans text-base  underline
  decoration-stone-600 underline-offset-2 md:text-lg;
}

.entry .code {
  @apply mb-6 w-full
  overflow-x-auto py-3
  px-3
  font-mono text-base
  md:mb-0 md:w-1/2
  md:border-l-2 md:border-stone-300
  md:py-12 md:py-24 md:px-4;
}

.keyword {
  @apply font-medium text-orange-600;
}

.type {
  @apply text-sky-600;
}

.define {
  @apply text-purple-600;
}

.ctor {
  @apply text-emerald-600;
}
</style>

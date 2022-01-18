<template>
  <div class="w-full">
    <div class="entry">
      <div class="explanation">
        <div>
          Define <em>natural number</em> as an <b>inductive datatype</b>.
        </div>
      </div>

      <div class="code">
        <pre><span class="keyword">datatype</span> <span class="type">Nat</span> {</pre>
        <pre>  <span class="ctor">zero</span>: <span class="type">Nat</span></pre>
        <pre>  <span class="ctor">add1</span>(prev: <span class="type">Nat</span>): <span class="type">Nat</span></pre>
        <pre>}</pre>
        <br />
        <pre><span class="keyword">function</span> <span class="define">add</span>(x: <span class="type">Nat</span>, y: <span class="type">Nat</span>): <span class="type">Nat</span> {</pre>
        <pre>  <span class="keyword">return</span> <span class="keyword">induction</span> (x) {</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">zero</span> => y</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">add1</span>(_prev, almost) =></pre>
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
      </div>

      <div class="code">
        <pre><span class="keyword">function</span> <span class="define">add_commute</span>(</pre>
        <pre>  x: <span class="type">Nat</span>, y: <span class="type">Nat</span>,</pre>
        <pre>): <span class="type">Equal</span>(<span class="type">Nat</span>, add(x, y), add(y, x)) {</pre>
        <pre>  <span class="keyword">return</span> <span class="keyword">induction</span> (x) {</pre>
        <pre>    (x) => <span class="type">Equal</span>(<span class="type">Nat</span>, add(x, y), add(y, x))</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">zero</span> => add_zero_commute(y)</pre>
        <pre>    <span class="keyword">case</span> <span class="ctor">add1</span>(prev, almost) =></pre>
        <pre>      equal_compose(</pre>
        <pre>        equal_map(almost.prev, add1),</pre>
        <pre>        equal_swap(add_add1_commute(y, prev)),</pre>
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
  py-6 px-3 overflow-x-auto text-base font-mono;
}

.keyword {
  @apply text-rose-600;
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

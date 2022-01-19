<template>
  <div class="w-full">
    <div class="entry">
      <div class="explanation">
        <div>
          Define <em>natural number</em> as an <b>inductive datatype</b>.
        </div>

        <div class="reference">
          <IconBookmark class="w-4 mr-1" />
          <a
            href="https://readonly.link/manuals/gitlab.com/cicada-lang/cicada/-/datatype/01-nat.md"
            target="_blank"
            >Natural Number | The Manual</a
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

        <div class="reference">
          <IconBookmark class="w-4 mr-1" />
          <a
            href="https://readonly.link/manuals/gitlab.com/cicada-lang/cicada/-/datatype/01.1-proving-theorems-about-nat.md"
            target="_blank"
            >Proving Theorems About Nat | The Manual</a
          >
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

        <div class="reference">
          <IconBookmark class="w-4 mr-1" />
          <a
            href="https://readonly.link/manuals/gitlab.com/cicada-lang/cicada/-/class/01-class-n-object.md"
            target="_blank"
            >Class & Object | The Manual</a
          >
        </div>
        <div class="reference">
          <IconBookmark class="w-4 mr-1" />
          <a
            href="https://readonly.link/manuals/gitlab.com/cicada-lang/cicada/-/datatype/01.1-proving-theorems-about-nat.mdhttps://readonly.link/manuals/gitlab.com/cicada-lang/cicada/-/datatype/01.1-proving-theorems-about-nat.md"
            target="_blank"
            >Mathematical Structures | A Book</a
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

<script setup lang="ts">
import IconBookmark from "../../components/icons/IconBookmark.vue"
</script>

<style scoped>
.entry {
  @apply w-full flex flex-col md:flex-row justify-center items-stretch;
}

.entry .explanation {
  @apply md:text-2xl text-xl
  md:w-1/2
  pr-4 w-full
  pt-8
  flex flex-col justify-center;
}

.entry .explanation .reference {
  @apply flex
  items-center
  self-end
  py-0.5 font-sans md:text-lg  text-base
  underline decoration-stone-600 underline-offset-2;
}

.entry .code {
  @apply md:w-1/2 md:py-12
  md:border-l-2 md:border-stone-300
  w-full
  md:py-24 py-3
  md:mb-0 mb-6
  md:px-4 px-3
  overflow-x-auto text-base font-mono;
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

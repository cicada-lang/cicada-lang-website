<template>
  <PageLayout>
    <div class="space-y-4 py-4 text-xl md:text-2xl">
      <p>Cicada Language is an open source project.</p>

      <p>
        If you appreciate the endeavour and want to support,
        <br class="hidden md:block" />
        please consider make a donation!
      </p>

      <h2 class="font-sans text-2xl font-bold">One-time Donation</h2>

      <div class="px-6">
        <a
          href="https://paypal.me/xieyuheng"
          class="inline-flex items-center font-sans underline"
          target="_blank"
        >
          <img src="../../images/paypal.png" class="h-12" />
        </a>
      </div>

      <h2 class="font-sans text-2xl font-bold">Recurring Donations</h2>

      <p>
        Please contact
        <a
          href="mailto:xyheme@gmail.com"
          target="_blank"
          title="xyheme@gmail.com"
          class="underline"
          >our maintainer</a
        >
        for recurring donations.
      </p>

      <p>
        If you wish, we will list your personal avatar or company logo on our
        homepage, <br class="hidden md:block" />
        and provide a link to your website.
      </p>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../../components/layouts/page-layout"
import IconExternalLink from "../../components/icons/IconExternalLink.vue"
</script>

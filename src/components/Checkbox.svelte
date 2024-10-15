<script lang="ts">
  let isChecked = $state(false);
  let description = $state("");
</script>

<span class="flex gap-2">
  <input type="checkbox" bind:checked={isChecked} />
  <input type="text" bind:value={description} class="border-b" />
</span>

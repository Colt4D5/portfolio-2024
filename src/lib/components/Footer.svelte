<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>



<footer class="bg-gray-500">
  <div class="text-center py-4">
    <p class="mb-0">&copy; 
      <Tooltip.Root>
        <Tooltip.Trigger>{new Date().getFullYear()}</Tooltip.Trigger>
        <Tooltip.Content>
          <p class="mb-0">Yes, this year is dynamic</p>
        </Tooltip.Content>
      </Tooltip.Root>
      
      &nbsp;| Colton Arthur Allen | All Rights Reserved.</p>
  </div>
</footer>
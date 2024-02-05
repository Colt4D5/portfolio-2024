<script lang="ts">
  import * as Tabs from "$components/ui/tabs";
  import * as HoverCard from "$components/ui/hover-card";
  import * as icons from '$assets/svg/svgs';
  const technologies = {
    categories: [
      {
        category: 'Languages',
        slug: 'languages',
        items: [
          { title: 'html', icon: icons.htmlIcon, description: '' },
          { title: 'css', icon: icons.cssIcon, description: '' },
          { title: 'javascript', icon: icons.javascriptIcon, description: '' },
          { title: 'typescript', icon: icons.typescriptIcon, description: '' },
          { title: 'react.js', icon: icons.reactIcon, description: '' },
          { title: 'svelte', icon: icons.svelteIcon, description: '' },
          { title: 'php', icon: icons.phpIcon, description: '' },
          { title: 'python', icon: icons.pythonIcon, description: '' },
        ],
      },
      {
        category: 'Frameworks',
        slug: 'frameworks',
        items: [
          { title: 'sveltekit', icon: icons.svelteIcon, description: '' },
          { title: 'react.js/next.js', icon: icons.nextjsIcon, description: '' },
          { title: 'wordpress', icon: icons.wordpressIcon, description: '' },
          { title: 'express.js', icon: icons.nodeIcon, description: '' },
          { title: 'tailwindcss', icon: icons.tailwindIcon, description: '' },
          { title: 'bootstrap', icon: icons.bootstrapIcon, description: '' },
          { title: 'sass', icon: icons.sassIcon, description: '' },
        ],
      },
      {
        category: 'Back End',
        slug: 'backend',
        items: [
          { title: 'node.js', icon: icons.nodeIcon, description: '' },
          { title: 'php', icon: icons.phpIcon, description: '' },
          { title: 'asp/vbs', icon: icons.aspIcon, description: '' },
        ],
      },
      {
        category: 'Tooling',
        slug: 'tooling',
        items: [
          { title: 'git', icon: icons.gitIcon, description: '' },
          { title: 'npm/pnpm', icon: icons.npmIcon, description: '' },
          { title: 'linux cli', icon: icons.linuxIcon, description: '' },
          { title: 'vscode', icon: icons.vscodeIcon, description: '' },
        ],
      },
      {
        category: 'Other Skills',
        slug: 'others',
        items: [
          { title: 'problem solving', icon: icons.problemsolvingIcon, description: '' },
          { title: 'rest api', icon: icons.restapiIcon, description: '' },
          { title: 'web scraping', icon: icons.seleniumIcon, description: '' },
          { title: 'ada compliance', icon: icons.adaIcon, description: '' },
          { title: 'sql/nosql', icon: icons.sqlIcon, description: '' },
        ],
      },
      {
        category: "What's Next",
        slug: 'next',
        items: [
          { title: 'rust', icon: icons.rustIcon, description: '' },
          { title: 'htmx', icon: icons.htmxIcon, description: '' },
        ],
      },
    ]
  }
</script>


<section id="skills" class="py-56">
  <div class="container max-w-7xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-12">my<span class="text-primary">Skills</span></h2>
    <Tabs.Root value="languages" class="w-full text-center">
      <Tabs.List>
        {#each technologies.categories as category}
          <Tabs.Trigger value={category.slug}>{category.category}</Tabs.Trigger>
        {/each}
      </Tabs.List>
      {#each technologies.categories as category}
        <Tabs.Content value={category.slug}>
          <div class="flex justify-center flex-wrap gap-2 pt-8 max-w-4xl mx-auto">
            {#each category.items as item}
              <HoverCard.Root>
                <HoverCard.Trigger><span class="block text-4xl font-medium px-4 py-2 bg-background text-primary hover:bg-primary hover:text-black">{item.title}</span></HoverCard.Trigger>
                <HoverCard.Content>
                  {@html item.icon} {item.description}
                </HoverCard.Content>
              </HoverCard.Root>
            {/each}
            
            </div>
          </Tabs.Content>
      {/each}
    </Tabs.Root>
  </div>
</section>

<style>
  section#skills {
    background: linear-gradient(
      to bottom, 
      hsl(var(--background-drk) / 0), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 1), 
      hsl(var(--background-drk) / 0)
    );
  }
</style>
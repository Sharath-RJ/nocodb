<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import NcLayout from '~icons/nc-icons/layout'
import { isEeUI } from '#imports'

const basesStore = useBases()

const { openedProject, activeProjectId, basesUser } = storeToRefs(basesStore)
const { activeTables } = storeToRefs(useTablesStore())
const { activeWorkspace, workspaceUserCount } = storeToRefs(useWorkspace())

const { navigateToProjectPage } = useBase()

const router = useRouter()
const route = router.currentRoute

const { $e } = useNuxtApp()

/* const defaultBase = computed(() => {
  return openedProject.value?.sources?.[0]
}) */

const { isUIAllowed, baseRoles } = useRoles()

const { base } = storeToRefs(useBase())

const { projectPageTab } = storeToRefs(useConfigStore())

const { isMobileMode } = useGlobal()

const baseSettingsState = ref('')

const userCount = computed(() =>
  isEeUI ? workspaceUserCount : activeProjectId.value ? basesUser.value.get(activeProjectId.value)?.length : 0,
)

watch(
  () => route.value.query?.page,
  (newVal, oldVal) => {
    if (route.value.name !== 'index-typeOrId-baseId-index-index') return
    if (newVal && newVal !== oldVal) {
      if (newVal === 'collaborator') {
        projectPageTab.value = 'collaborator'
      } else if (newVal === 'data-source') {
        projectPageTab.value = 'data-source'
      } else {
        projectPageTab.value = 'allTable'
      }

      return
    }

    projectPageTab.value = 'allTable'
  },
  { immediate: true },
)

watch(projectPageTab, () => {
  $e(`a:project:view:tab-change:${projectPageTab.value}`)

  if (projectPageTab.value) {
    navigateToProjectPage({
      page: projectPageTab.value as any,
    })
  }
})

watch(
  () => openedProject.value?.title,
  () => {
    useTitle(`${openedProject.value?.title ?? activeWorkspace.value?.title ?? 'NocoDB'}`)
  },
)
</script>

<template>
  <div class="h-full nc-base-view">
    <div
      class="flex flex-row pl-2 pr-2 gap-1 border-b-1 border-gray-200 justify-between w-full"
      :class="{ 'nc-table-toolbar-mobile': isMobileMode, 'h-[var(--topbar-height)]': !isMobileMode }"
    >
      <div class="flex flex-row items-center gap-x-3">
        <GeneralOpenLeftSidebarBtn />
        <div class="flex flex-row items-center h-full gap-x-2.5">
          <GeneralProjectIcon :type="openedProject?.type" :color="parseProp(openedProject?.meta).iconColor" />
          <NcTooltip class="flex font-medium text-sm capitalize truncate max-w-150" show-on-truncate-only>
            <template #title> {{ openedProject?.title }}</template>
            <span class="truncate">
              {{ openedProject?.title }}
            </span>
          </NcTooltip>
        </div>
      </div>
      <LazyGeneralShareProject />
    </div>
    <div
      class="flex mx-12 my-8 nc-base-view-tab"
      :style="{
        height: 'calc(100% - var(--topbar-height))',
      }"
    >
      <a-tabs v-model:activeKey="projectPageTab" class="w-full">
        <a-tab-pane key="allTable">
          <template #tab>
            <div class="tab-title" data-testid="proj-view-tab__all-tables">
              <NcLayout />
              <div>{{ $t('labels.allTables') }}</div>
              <div
                class="tab-info"
                :class="{
                  'bg-primary-selected': projectPageTab === 'allTable',
                  'bg-gray-50': projectPageTab !== 'allTable',
                }"
              >
                {{ activeTables.length }}
              </div>
            </div>
          </template>
          <ProjectAllTables />
        </a-tab-pane>
        <!-- <a-tab-pane v-if="defaultBase" key="erd" tab="Base ERD" force-render class="pt-4 pb-12">
          <ErdView :source-id="defaultBase!.id" class="!h-full" />
        </a-tab-pane> -->
        <a-tab-pane v-if="isUIAllowed('newUser', { roles: baseRoles })" key="collaborator">
          <template #tab>
            <div class="tab-title" data-testid="proj-view-tab__access-settings">
              <GeneralIcon icon="users" class="!h-3.5 !w-3.5" />
              <div>{{ $t('labels.members') }}</div>
              <div
                v-if="userCount"
                class="tab-info"
                :class="{
                  'bg-primary-selected': projectPageTab === 'collaborator',
                  'bg-gray-50': projectPageTab !== 'collaborator',
                }"
              >
                {{ userCount }}
              </div>
            </div>
          </template>
          <ProjectAccessSettings />
        </a-tab-pane>
        <a-tab-pane v-if="isUIAllowed('sourceCreate')" key="data-source">
          <template #tab>
            <div class="tab-title" data-testid="proj-view-tab__data-sources">
              <GeneralIcon icon="database" />
              <div>{{ $t('labels.dataSources') }}</div>
              <div
                v-if="base.sources?.length"
                class="tab-info"
                :class="{
                  'bg-primary-selected': projectPageTab === 'data-source',
                  'bg-gray-50': projectPageTab !== 'data-source',
                }"
              >
                {{ base.sources.length }}
              </div>
            </div>
          </template>
          <DashboardSettingsDataSources v-model:state="baseSettingsState" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.ant-tabs-content) {
  @apply !h-full;
}
:deep(.ant-tabs-nav) {
  @apply !mb-0;
}

.tab-title {
  @apply flex flex-row items-center gap-x-2 px-2;
}
:deep(.ant-tabs-tab .tab-title) {
  @apply text-gray-500;
}
:deep(.ant-tabs-tab-active .tab-title) {
  @apply text-primary;
}

.tab-info {
  @apply flex pl-1.25 px-1.5 py-0.75 rounded-md text-xs;
}
</style>

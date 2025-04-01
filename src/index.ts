import type { App } from 'vue'
import Button from '@/components/Button'
import Collapse, { CollapseItem } from '@/components/Collapse'
import Tooltip from './components/Tooltip'
import './styles/index.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const components = [
  Button,
  Collapse,
  CollapseItem,
  Tooltip,
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  install,
  Button,
  Collapse,
  CollapseItem,
  Tooltip
}

export default {
  install
}


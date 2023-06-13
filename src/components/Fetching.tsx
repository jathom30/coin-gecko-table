import { IconRefreshDot } from "@tabler/icons-react"
import './Fetching.scss'

export const Fetching = () => {
  return (
    <div className="Fetching">
      <div className="Fetching__spin">
        <IconRefreshDot />
      </div>
    </div>
  )
}
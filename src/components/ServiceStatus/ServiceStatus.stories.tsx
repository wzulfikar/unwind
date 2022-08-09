import { ServiceStatus } from "./ServiceStatus"
import { tw } from "@components/util"

export default {
  component: ServiceStatus,
}

export const Basic = () => (
  <div className={tw`grid space-y-3 w-32`}>
    <ServiceStatus>Idle</ServiceStatus>
    <ServiceStatus type="warning">Degraded</ServiceStatus>
    <ServiceStatus type="danger">Offline</ServiceStatus>
    <ServiceStatus type="success">Online</ServiceStatus>
  </div>
)

export const WithBeacon = () => (
  <div className={tw`grid space-y-3 w-32`}>
    <ServiceStatus beacon>Idle</ServiceStatus>
    <ServiceStatus beacon type="warning">
      Degraded
    </ServiceStatus>
    <ServiceStatus beacon type="danger">
      Offline
    </ServiceStatus>
    <ServiceStatus beacon type="success">
      Online
    </ServiceStatus>
  </div>
)
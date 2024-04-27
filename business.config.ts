import { LoggingServiceEnum } from "global.enums"

interface IBusinessConfig {
    loggingService: LoggingServiceEnum
}

const BUSINESS_CONFIG: IBusinessConfig = {
    loggingService: LoggingServiceEnum.Sentry
}

export default BUSINESS_CONFIG;
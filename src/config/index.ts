export const defaultFunctionsDir = 'functions'

export const jsonWriteOptions = {
  spaces: 2,
}

export const DEFAULT_ENV_NAME = 'nodejs-12'
export const DEFAULT_ENV_NAMESPACE = 'default'
export const DEFAULT_NODE_ENV_IMAGE = 'dasmeta/node-env'
export const DEFAULT_NODE_BUILDER_IMAGE = 'dasmeta/node-builder'
export const DEFAULT_FUNCTION_NAMESPACE = 'default'
export const DEFAULT_MQ_TRIGGER_NAMESPACE = 'default'
export const DEFAULT_KAFKA_BOOTSTRAP_SERVER = '127.0.0.1:9092'
export const DEFAULT_RABBITMQ_HOST = '127.0.0.1:5672'
export const DEFAULT_RABBIT_MQ_SECRET = 'rabbitmq-secret'

export enum FISSION_MQ_TYPES {
  KAFKA = 'kafka',
  RABBITMQ = 'rabbitmq'
}

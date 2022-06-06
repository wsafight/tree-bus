import mitt, { EventHandlerMap, EventType } from './mitt'

const DEFAULT_SPLIT = '.';

const getSamePath = (a: any, b: any): any[] => {
    return []
}

class TreeBus {
    private readonly busInstance
    private bindBus: Record<string, any> = mitt()
    private obj: any = {};

    constructor(all?: EventHandlerMap<Record<EventType, unknown>>) {
        this.busInstance = mitt(all)
    }

    count() {
        return this.busInstance
    }

    emit(type: string, evt: any) {
        if (!type.includes('*')) {
            this.busInstance.on(type, evt)
        }
        const diffText = getSamePath(type, this.bindBus);
        diffText.forEach(item => {
            this.bindBus.emit(type, evt, item.type)
        })
    }

    on(str: string, handler: any) {
        str = 'order.create.*'
        if (str.includes('*')) {
            this.bindBus.on(str, handler)
        } else {
            this.obj[str] = {count: 1}
            this.busInstance.on(str, handler)
        }
    }

    off() {

    }

    once() {

    }

    clear() {

    }
}

export default TreeBus
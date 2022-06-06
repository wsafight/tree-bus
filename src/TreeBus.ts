import mitt, { EventHandlerMap, EventType } from './mitt'

class TreeBus {
    private readonly busInstance
    private bindObj = {}

    constructor(all?: EventHandlerMap<Record<EventType, unknown>>) {
        this.busInstance = mitt(all)
    }

    count() {
        return this.busInstance
    }

    emit () {
    }

    on () {

    }

    off () {

    }

    once () {

    }

    clear() {
        this.bindObj = {}
        this.busInstance.all.clear()
        return this.bindObj
    }
}

export default TreeBus
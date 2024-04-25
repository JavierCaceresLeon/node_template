import eventos from '../data/eventos.js'

//let eventos = require('../data/eventos.js')


exports.getEvents = () => {
    return eventos
}

exports.addEvents = (eventData) => {
    const envent = {
        event_id: eventData.id,
        context: eventData.context,
        metadata: eventData.metadata,
        timestamp: eventData.timestamp
    }
    eventos.push('../eventos/eventos.json')
    return eventos
}

export.filtrarEventos = (eventData) => {
    if (((eventData[1].timestamp - eventData[2].timestamp) == 5*10^⁻3)) {
                
    }
}
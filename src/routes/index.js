import Router from 'koa-router'
import getHealth from './health/health'
import eventos from './eventos/eventos-rutas'

const router = new Router()

router.get('/health', getHealth)
router.put('/evento', eventos.AddEvents)
router.post('/evento', eventos.filtrarEventos)

export default router

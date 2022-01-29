const { Router } = require('express');
const register = require('./controllers/registerUsers');
const login = require('./controllers/loginUser');
const task = require('./controllers/taskUser');
const tag = require('./controllers/tagUser');
const setting = require('./controllers/settingUser');
const cors = require('cors');
const authMiddlewares = require('./middlewares/authMiddlewares');

const router = Router();
router.use(cors());

router.post('/register', register.store)
router.post('/login',  login.index)

router.use(authMiddlewares)
router.get('/users',  login.show)

router.post('/task', task.store)
router.post('/tag', tag.store)
router.post('/settings', setting.storage)


module.exports = router;
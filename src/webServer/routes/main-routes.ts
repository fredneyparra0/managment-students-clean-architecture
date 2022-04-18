import { Router } from 'express'
import { userRoutes } from './student'
// import { teacherRoutes } from './teacher'

export const router = Router()

router.use('/student', userRoutes)

// router.use('/teacher', teacherRoutes)

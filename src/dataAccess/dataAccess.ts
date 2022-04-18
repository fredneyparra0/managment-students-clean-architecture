function exportMainDataAccess (): string {
  if (process.env.DATABASE === 'MONGO') {
    return 'RepositoryStudentMongoDb'
  } else {
    return 'RepositoryStudentMongoDb default'
  }
}

exportMainDataAccess()

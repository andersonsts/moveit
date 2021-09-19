import styles from 'styles/components/Page.module.css'

interface PageProps {
  totalRegisters: number
  perPage: number
  onPageChange: (numberParam: number) => void
  currentPage: number
}

export function Page ({
  totalRegisters,
  perPage,
  onPageChange,
  currentPage = 1
}: PageProps) {
  const buttonsLength = Math.ceil(totalRegisters/perPage)
  const buttons = Array.from({ length: buttonsLength }, (_, i) => i + 1)  

  return (
    <div className={styles.container}>
      {buttons.map(item => (
        <button
          key={item} 
          type='button' 
          className={(item) === currentPage ? styles.activeButton : styles.normalButton}
          onClick={() => onPageChange(item)}
        />
      ))}
    </div> 
  )
}
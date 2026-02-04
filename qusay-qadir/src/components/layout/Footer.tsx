import ButtonIconHoverDemo from '@/components/ui/button-04'

export const Footer = () => {
  return (
    <footer className="relative border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full min-h-20 py-6">
      {/* Bottom-left button */}
      <div className="absolute left-4 bottom-4">
        <ButtonIconHoverDemo />
      </div>

    </footer>
  )
}

export default Footer

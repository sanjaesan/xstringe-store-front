export function useUtils() {
    const openWhatsapp = () => {
        const phone_number = "08061292587"
        const url = `https://api.whatsapp.com/send/?phone=${phone_number}&type=phone_number&text=Hello`;

        window.open(url);
    }

    return {
        openWhatsapp,
    }
}

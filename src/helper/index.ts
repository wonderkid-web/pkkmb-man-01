import {format} from "date-fns"
import {id} from "date-fns/locale"

export const formattedDate = (date: {
    seconds: number;
    nanoseconds: number;
}) => {
    return format(date.seconds * 1000, "eeee, dd-MM-yyyy HH:mm", {locale: id})
}
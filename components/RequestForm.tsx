'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import encrypt from "@/lib/encrypt"

interface FormData {
    header: string,
    signup?: boolean

}

const formSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    name: z.string().optional(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const RequestForm = (props: FormData) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            name: '',
            password: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values.name, values.username, encrypt(values.password))
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className={`border rounded-xl flex justify-center items-center w-3/6 lg:w-2/5 p-5 ${props.signup == true ? 'h-3/4' : 'h-1/2'}`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-8 flex flex-col justify-center items-center w-full h-full">
                        <div className="text-5xl">{props.header}</div>
                        {props.signup && <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-3/4">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" required {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="w-3/4">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" required {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-3/4">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" type="password" aria-required {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {props.signup == true ? <Button type="submit" className="group">Signup{" "}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></Button> : <Button className="group" type="submit">Login{" "}<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></Button>}
                        {props.signup == false ? <Link href={"/signup"} className="group absolute right-0 bottom-0">Signup{" "} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></Link> : <Link href={"/login"} className="group absolute right-0 bottom-0">Login{" "} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span></Link>}
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default RequestForm;
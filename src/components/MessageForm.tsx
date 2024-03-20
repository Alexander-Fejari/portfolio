import React, {useRef} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "firstname must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "lastname must be at least 2 characters.",
    }),
    request: z.string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(350, {
            message: "Bio must not be longer than 350 characters.",
        }),
});

const MessageForm = React.forwardRef((props, ref) => {
    const emailJsRef = useRef<HTMLFormElement | string>('');

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            request: "",
        },
    });

    const onSubmit = (values) => {
        console.log(values);


        emailjs.sendForm('service_5kf1lkf', 'template_u99vgqp', emailJsRef.current, {

            publicKey: 'vpda5ojBzSGpEY1FE'
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Form
            {...form}
            ref={ref}
        >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" ref={emailJsRef}>
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Firstname: </FormLabel>
                            <FormControl>
                                <Input placeholder="Firstname" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Lastname: </FormLabel>
                            <FormControl>
                                <Input placeholder="Lastname" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="request"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Message: </FormLabel>
                            <FormControl>
                                <Textarea placeholder={'Your message ..'} {...field} />
                            </FormControl>
                            <FormDescription>
                                How can I help you ?
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
});

export default MessageForm;

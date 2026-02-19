

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Page() {
  return (
    <div className="flex items-center space-x-2">
          <a href="https://tomaslonnblad.github.io/tleeee">
        
      <Switch id="airplane-mode" /> </a>
      <br></br>

      <Label htmlFor="airplane-mode"> <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">  3D Mode </Badge> </Label>
        <Label htmlFor="terms">

          </Label>
  
        





    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-30 z-10 aspect-video bg-black/15" />
      <img
        src="https://tomaslonnblad.github.io/2.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"
      />



      <CardHeader>
        <CardAction>
  
        </CardAction>
        <CardTitle>
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Design systems meetup
          </Badge>
          </CardTitle>
        <CardDescription> 

                  <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 "> Featured<br></br><p></p></Badge>
             
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"> A practical talk on</Badge> <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">component APIs, </Badge><Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">accessibility, and </Badge><Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">shipping
          faster.</Badge>
          
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">            <a
            href="https://tomaslonnblad.github.io/ok4/"
           
          > 
           Threejs html</a></Button>
      </CardFooter>
    </Card>




    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
  

      </Field>
      <Field orientation="horizontal">

        <FieldContent>
          <FieldLabel htmlFor="terms-checkbox-2">

          </FieldLabel>
          <FieldDescription>

          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled>

        <FieldLabel htmlFor="toggle-checkbox"></FieldLabel>
      </Field>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox id="toggle-checkbox-3" name="toggle-checkbox-3" />
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              You can enable or disable notifications at any time.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>




    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-30 z-10 aspect-video bg-black/15" />
      <img
        src="https://tomaslonnblad.github.io/2.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"
      />



      <CardHeader>
        <CardAction>
  
        </CardAction>
        <CardTitle>

                  <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
     
            Design systems meetup
             </Badge>
          </CardTitle>
        <CardDescription> 
                  <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 "> Featured   <br></br><p></p>           </Badge>
                  <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            A practical talk on
             </Badge><br></br><p></p>
            <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">component APIs, </Badge>  <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">accessibility, and </Badge>  <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">shipping
          faster.</Badge>
          
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">            <a
            href="https://tomaslonnblad.github.io/ok4/"
           
          > 
           Threejs html</a></Button>
      </CardFooter>
    </Card>


    </div>
  )
}




     
     

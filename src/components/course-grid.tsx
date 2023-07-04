import { RouterOutputs, api } from "~/utils/api"
import { Button, Grid, Card, Image, Group, Text, Badge, Loader }  from "@mantine/core"
import Link from "next/link"

type CourseType = RouterOutputs["courses"]["getAllCourses"][number] 



const CourseCard = ( props: CourseType )=>{
    
    
    
    return (
      
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      
        <Link href={`/course/${props.id}`}>
          <Card.Section>
            <Image
              src={props.heroImage}
              height={160}
              alt="Norway"
            />
          </Card.Section>
        </Link>


        <Group position="apart" mt="md" mb="xs">

          <Link href={`/course/${props.id}`}>
            <Text weight={500}>{props.name}</Text>
          </Link>

          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>
    
        <Text size="sm" color="dimmed">
          {props.description}
        </Text>
    
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          {`Buy now $${props.price}`}
        </Button>
    </Card>
  
    )
  }
  


export const CourseGrid = ()=>{

  const {data, isLoading, isError} = api.courses.getAllCourses.useQuery();


  if( isLoading)  return <Loader/>


  if(isError)   return <p>Something went wrong</p>


  const courseList = data.map(course => <CourseCard key={course.id} {...course} />)

  const courseGrid = courseList.map(card=><Grid.Col key={card.key} span={4}>{card}</Grid.Col>)

    return (

        <Grid justify="center"  sx={{ width:"100%"}}>
            
          {courseGrid}
      </Grid>


    )



}

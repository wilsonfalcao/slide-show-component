# Apresentação do componente

## Variáveis

A tabela a seguir lista algumas variáveis importantes do código:

| Nome da Variável | Descrição               |
| ---------------- | ----------------------- |
| `Time`           | Tempo de transição do slide            |
| `Title`          | Título de referência para apresentação |
| `Data`           | Fonte da imagem                        |
| `renderItem`     | Renderização de subcomponentes         |

### Apresentação 
![Alt Text](https://github.com/wilsonfalcao/slide-show-component/blob/master/assets/show-slide.gif)

### Exemplo de Uso

```jsx
// Importação de recursos para view
import React from "react";
import { View, Text } from "react-native";
import { StyleHome } from "./style";

import SlideView from "../../components/SlideView";

const Home: React.FC = () => {

    return (
        <View style={StyleHome.container}>
            <SlideView 
                Title={"Slide Show Example"} 
                Time={5000}
                renderItem={(item) =>
                    <Text>ID: {item.id}</Text> 
                }
            />
        </View>
    );
}

export default Home;

import React from 'react';
import Estrelas from '../Estrelas';
import {render} from '@testing-library/react-native';
import Estrela from '../Estrela';

describe('AvaliacaoProdutor', () => {
  test('conjuntoEstrelas', () => {
    const {debug} = render(<Estrelas quantidade={{estrelas: 7}} editavel={true} grande={true}/>);
    debug();
  });

})

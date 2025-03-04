import { BasicInformationProps } from './interface';

export const BasicInformation = ({ pokemonDetails }: BasicInformationProps) => {
  return (
    <div className='flex flex-col gap-4 mb-3'>
      <h2 className='text-xl font-semibold text-gray-900  mb-3'>
        Información básica
      </h2>
      <hr className='border-t border-gray-200 my-4' />
      <div className='flex flex-col gap-4'>
        <h5 className='text-xl font-semibold text-gray-900 mb-3'>
          Experiencia base
        </h5>
        <p className='text-gray-600 '>{pokemonDetails.base_experience}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold text-gray-900  mb-3'>Especie</h2>
        <p className='text-gray-600 '>{pokemonDetails.species.name}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold text-gray-900  mb-3'>Tipo</h2>
        <div className='flex flex-col gap-4 mt-4'>
          {pokemonDetails.types?.map((type) => (
            <span
              key={type.type.name}
              className='px-3 py-1 rounded-full bg-gray-100  text-gray-800 '
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

import joi from'joi';

    const dataSchema = joi.object(
        {
            value: joi.string().required(),
            description:joi.string().required(),
            type:  joi.string().valid('entrada','saida').required()
        }
    )

export default dataSchema;